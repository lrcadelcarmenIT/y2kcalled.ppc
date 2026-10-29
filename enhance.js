/* Shared museum navigation and collection browsing. Exhibit data stays in its original files. */
(() => {
  'use strict';
  const main = document.querySelector('main');
  const page = location.pathname.split('/').pop() || 'index.html';
  const extras = document.querySelector('.museum-extras');
  if (extras) {
    document.addEventListener('pointerdown', event => {
      if (!extras.contains(event.target)) extras.open = false;
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && extras.open) {
        extras.open = false;
        extras.querySelector('summary').focus();
      }
    });
  }
  const mast = document.querySelector('.mast');
  if (mast && 'ResizeObserver' in window) {
    new ResizeObserver(() => {
      document.documentElement.style.setProperty('--museum-header-height', `${Math.ceil(mast.getBoundingClientRect().height)}px`);
    }).observe(mast);
  }

  // Keep a single accessible page heading when the lobby switches decades.
  if (page === 'index.html') {
    const panes = [...document.querySelectorAll('.intro-grid[data-pane]')];
    const syncTitle = () => panes.forEach(pane => {
      const heading = pane.querySelector('h1');
      if (pane.hidden) heading.removeAttribute('id');
      else heading.id = 'page-title';
    });
    panes.forEach(pane => new MutationObserver(syncTitle).observe(pane, { attributes: true, attributeFilter: ['hidden'] }));
    syncTitle();
  }

  // Shortcuts to the existing arcade, quiz and creative tools.
  if (page === 'play.html' || page === 'play20.html') {
    const quick = document.createElement('nav');
    quick.className = 'arcade-shortcuts shell';
    quick.setAttribute('aria-label', 'Arcade sections');
    quick.innerHTML = '<span>JUMP TO</span><a href="#arcade">Arcade <span aria-hidden="true">↗</span></a><a href="#quiz">Personality quiz <span aria-hidden="true">↗</span></a><a href="#playground">Photo booth & sounds <span aria-hidden="true">↗</span></a>';
    main.prepend(quick);
  }

  // Visible labels keep the guestbook understandable after typing begins.
  ['gb-name', 'gb-where', 'gb-msg'].forEach((id, index) => {
    const input = document.getElementById(id);
    if (input) input.setAttribute('aria-label', ['Your name or handle', 'Where are you visiting from? (optional)', 'Your 2000s memory'][index]);
  });
  document.querySelectorAll('.gb-form textarea[maxlength]').forEach(input => {
    const label = document.createElement('span');
    label.className = 'character-count';
    label.id = `${input.id}-count`;
    input.setAttribute('aria-describedby', label.id);
    input.insertAdjacentElement('afterend', label);
    const update = () => label.textContent = `${input.value.length} / ${input.maxLength} characters`;
    input.addEventListener('input', update);
    input.form.addEventListener('reset', () => requestAnimationFrame(update));
    update();
  });

  const list = document.getElementById('ex-list') || document.getElementById('future-exhibits');
  if (!list) return;
  const cards = [...list.querySelectorAll('.ex-card')];
  const future = list.id === 'future-exhibits';
  const is2020 = page === 'exhibits20.html';
  const collection = future ? window.FUTURE_PREDICTIONS : is2020 ? window.EXHIBITS20 : window.EXHIBITS00;
  const normal = text => String(text).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const entries = cards.map(card => {
    const id = card.id.replace(/^exhibit-/, '');
    const data = collection[id];
    const gameButton = card.querySelector('button.ex-play');
    if (gameButton) {
      const game = card.querySelector('.ex-game');
      game.id = `game-${id}`;
      gameButton.type = 'button';
      gameButton.setAttribute('aria-controls', game.id);
      gameButton.setAttribute('aria-expanded', 'false');
    }
    card.setAttribute('aria-labelledby', `title-${id}`);
    card.querySelector('h2').id = `title-${id}`;
    return { card, id, year: String(data.year), search: normal(`${data.year} ${data.title} ${data.body} ${data.then || ''} ${data.now || ''}`) };
  });
  const years = [...new Set(entries.map(entry => entry.year))].sort();
  const tools = document.createElement('section');
  tools.className = 'collection-tools shell';
  tools.setAttribute('aria-label', 'Browse exhibits');
  tools.innerHTML = `<div class="collection-controls">
    <label class="collection-search"><span>Find an exhibit</span><span class="search-input"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/></svg><input type="search" id="exhibit-search" placeholder="Search a year, topic, or memory…" autocomplete="off" spellcheck="false" aria-controls="${list.id}"></span></label>
    <label class="collection-select"><span>Year</span><select id="exhibit-year" aria-controls="${list.id}"><option value="">All years</option></select></label>
    ${future ? '' : '<label class="collection-select"><span>Stamp collection</span><select id="exhibit-status" aria-controls="ex-list"><option value="all">All exhibits</option><option value="new">Not yet stamped</option><option value="done">Stamped</option></select></label>'}
  </div>
  <div class="collection-summary"><p id="collection-results" role="status" aria-live="polite" aria-atomic="true"></p><button type="button" id="clear-filters" hidden>Clear filters <span aria-hidden="true">×</span></button>${future ? '<span class="collection-kind">14 imagined possibilities</span>' : '<div class="collection-progress"><span id="collection-progress-label"></span><progress id="collection-progress" value="0" max="'+cards.length+'" aria-label="Exhibit stamps collected"></progress></div>'}</div>`;
  list.before(tools);
  const search = tools.querySelector('#exhibit-search');
  const yearSelect = tools.querySelector('#exhibit-year');
  const status = tools.querySelector('#exhibit-status');
  const clear = tools.querySelector('#clear-filters');
  years.forEach(year => yearSelect.add(new Option(year, year)));
  const empty = document.createElement('div');
  empty.className = 'collection-empty';
  empty.hidden = true;
  empty.innerHTML = '<span aria-hidden="true">⌕</span><h2>No exhibits found</h2><p>Try another word or year, or return to the full collection.</p><button type="button">Show all exhibits</button>';
  list.after(empty);

  let rail;
  if (future) {
    rail = document.createElement('div');
    rail.className = 'year-rail';
    rail.setAttribute('role', 'group');
    rail.setAttribute('aria-label', 'Filter predictions by year');
    years.forEach(year => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = year;
      button.dataset.year = year;
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => {
        yearSelect.value = yearSelect.value === year ? '' : year;
        render();
      });
      rail.append(button);
    });
    tools.querySelector('.collection-controls').before(rail);
  }
  const stamped = id => typeof window.hasStamp === 'function' && window.hasStamp(id);
  function render(writeURL = true) {
    const query = normal(search.value.trim());
    let shown = 0;
    entries.forEach(entry => {
      const has = !future && stamped(entry.id);
      const show = (!query || query.split(/\s+/).every(word => entry.search.includes(word))) && (!yearSelect.value || entry.year === yearSelect.value) && (!status || status.value === 'all' || (status.value === 'done' ? has : !has));
      entry.card.hidden = !show;
      if (show) shown++;
      const button = entry.card.querySelector('button.ex-play');
      if (button) {
        const open = !entry.card.querySelector('.ex-game').hidden;
        button.classList.toggle('done', has);
        button.setAttribute('aria-expanded', String(open));
        button.textContent = open ? 'Close mini-game ↑' : has ? '✓ Stamped — play again' : '▶ Play the mini-game';
        entry.card.querySelector('.ex-stamp').textContent = has ? '🎫' : '';
      }
    });
    tools.querySelector('#collection-results').textContent = `${shown} of ${cards.length} ${future ? 'predictions' : 'exhibits'}`;
    const filtered = !!(search.value || yearSelect.value || (status && status.value !== 'all'));
    clear.hidden = !filtered;
    empty.hidden = shown !== 0;
    list.hidden = shown === 0;
    if (!future) {
      const count = entries.filter(entry => stamped(entry.id)).length;
      tools.querySelector('#collection-progress').value = count;
      tools.querySelector('#collection-progress-label').textContent = `${count} / ${cards.length} stamps collected`;
    }
    if (rail) rail.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.year === yearSelect.value)));
    if (writeURL) {
      const url = new URL(location.href);
      [['q', search.value.trim()], ['year', yearSelect.value], ['stamps', status && status.value !== 'all' ? status.value : '']].forEach(([key, value]) => value ? url.searchParams.set(key, value) : url.searchParams.delete(key));
      history.replaceState(history.state, '', url);
    }
  }
  function restore() {
    const params = new URLSearchParams(location.search);
    search.value = params.get('q') || '';
    yearSelect.value = years.includes(params.get('year')) ? params.get('year') : '';
    if (status) status.value = ['done', 'new'].includes(params.get('stamps')) ? params.get('stamps') : 'all';
    render(false);
  }
  function reset() {
    search.value = '';
    yearSelect.value = '';
    if (status) status.value = 'all';
    render();
    search.focus({ preventScroll: true });
  }
  search.addEventListener('input', () => render());
  yearSelect.addEventListener('change', () => render());
  if (status) status.addEventListener('change', () => render());
  clear.addEventListener('click', reset);
  empty.querySelector('button').addEventListener('click', reset);
  window.addEventListener('popstate', restore);
  window.addEventListener('storage', () => render(false));
  document.addEventListener('museum:stamps-changed', () => render(false));
  list.addEventListener('click', event => {
    if (event.target.closest('button.ex-play')) render(false);
  });
  restore();
  // A direct exhibit link always reveals its destination, even with saved filters.
  if (location.hash.startsWith('#exhibit-')) {
    const target = entries.find(entry => '#'+entry.card.id === location.hash);
    if (target) {
      if (target.card.hidden) reset();
      requestAnimationFrame(() => target.card.scrollIntoView({ behavior: 'instant', block: 'start' }));
    }
  }
})();
