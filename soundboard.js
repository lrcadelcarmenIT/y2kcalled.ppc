/* One audio bus for both decades: live metering, volume and click-free voice switching. */
(() => {
  'use strict';
  const title = document.getElementById('sb-title');
  if (!title) return;
  const board = title.closest('.pg-card');
  board.id = 'soundboard';
  board.classList.add('soundboard');
  const buttons = [...board.querySelectorAll('button[id^="sb-"] ,button[id^="sb20-"]')];
  const sounds = {
    'sb-nokia': ['01', 'PHONE', 4.3], 'sb-static': ['02', 'TELEVISION', 1.7],
    'sb-dial': ['03', 'INTERNET', 6.2], 'sb-sms': ['04', 'MESSAGES', 1.8],
    'sb-ring': ['05', 'TELEPHONE', 1.9], 'sb-busy': ['06', 'TELEPHONE', 2.2],
    'sb-shutter': ['07', 'CAMERA', .6], 'sb-pager': ['08', 'PAGER', 1],
    'sb-windows': ['09', 'DESKTOP', 5], 'sb-videoke': ['10', 'VIDEOKE', 1.2],
    'sb20-gcash': ['01', 'PAYMENTS', 1.1], 'sb20-tiktok': ['02', 'SOCIAL', .5],
    'sb20-shopee': ['03', 'SHOPPING', .9], 'sb20-ml': ['04', 'GAMING', 1.5],
    'sb20-msg': ['05', 'MESSAGES', .4], 'sb20-tritone': ['06', 'PHONE', 1.5],
    'sb20-grab': ['07', 'TRANSPORT', 1], 'sb20-zoom': ['08', 'VIDEO CALLS', 1],
    'sb20-discord': ['09', 'VOICE CHAT', .5], 'sb20-cashin': ['10', 'PAYMENTS', 1]
  };
  const panel = document.createElement('div');
  panel.className = 'sb-player';
  panel.innerHTML = '<div class="sb-player-top"><span class="sb-live-dot" aria-hidden="true"></span><span class="sb-now" role="status" aria-live="polite">Pick a sound to listen</span><span class="sb-time" aria-hidden="true">0:00</span></div><canvas class="sb-meter" width="600" height="64" aria-hidden="true"></canvas><div class="sb-transport"><label class="sb-volume">Volume <input id="sb-volume" type="range" min="0" max="100" value="65" step="1" aria-label="Soundboard volume"><output for="sb-volume">65%</output></label><button type="button" class="sb-stop" disabled>■ Stop</button></div>';
  board.querySelector('.pg-row').before(panel);
  const switcher = document.createElement('nav');
  switcher.className = 'sb-era-links';
  switcher.setAttribute('aria-label', 'Soundboard decade');
  const modern = buttons[0].id.startsWith('sb20-');
  switcher.innerHTML = `<a href="play.html#soundboard" ${modern ? '' : 'aria-current="page"'}>2000s sounds</a><a href="play20.html#soundboard" ${modern ? 'aria-current="page"' : ''}>2020s sounds</a>`;
  title.after(switcher);
  const help = document.createElement('p');
  help.className = 'sb-help';
  help.textContent = 'Tap to play · tap again to stop · one sound at a time';
  board.querySelector('.pg-row').after(help);
  buttons.forEach(button => {
    button.setAttribute('aria-pressed', 'false');
    const meta = document.createElement('span');
    meta.className = 'sb-pad-meta';
    meta.setAttribute('aria-hidden', 'true');
    meta.innerHTML = `<span>${sounds[button.id][0]} / ${sounds[button.id][1]}</span><span>▶</span>`;
    const wrap = document.createElement('div');
    wrap.className = 'sb-pad';
    button.before(wrap);
    wrap.append(meta, button);
  });
  const pads = board.querySelector('.pg-row');
  pads.classList.add('sb-pads');
  pads.setAttribute('role', 'group');
  pads.setAttribute('aria-label', 'Sound pads');
  const volume = panel.querySelector('input');
  const output = panel.querySelector('output');
  const stopButton = panel.querySelector('.sb-stop');
  const now = panel.querySelector('.sb-now');
  const timer = panel.querySelector('.sb-time');
  const canvas = panel.querySelector('canvas');
  const draw = canvas.getContext('2d');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let context, master, analyser, bus, active, started = 0, duration = 0, frame = 0;
  const retired = new Set();
  try { volume.value = String(Math.max(0, Math.min(100, Number(localStorage.getItem('museum-sound-volume') ?? 65)))); } catch (_) {}
  output.value = `${volume.value}%`;
  function init() {
    if (context) return;
    const Audio = window.AudioContext || window.webkitAudioContext;
    if (!Audio) throw new Error('Web Audio is unavailable');
    context = new Audio();
    const compressor = context.createDynamicsCompressor();
    compressor.threshold.value = -14;
    compressor.knee.value = 18;
    compressor.ratio.value = 4;
    compressor.attack.value = .005;
    compressor.release.value = .18;
    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 9000;
    master = context.createGain();
    master.gain.value = Number(volume.value) / 100;
    analyser = context.createAnalyser();
    analyser.fftSize = 128;
    filter.connect(compressor);
    compressor.connect(master);
    master.connect(analyser);
    analyser.connect(context.destination);
    context.addEventListener('statechange', () => {
      if (context.state === 'suspended' && active) stop('Playback paused. Tap a sound to resume.');
    });
    window.MuseumSoundboard._input = filter;
  }
  function stop(message = 'Stopped. Pick another sound.') {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    if (bus) {
      const old = bus;
      const end = context.currentTime + .025;
      old.gain.cancelScheduledValues(context.currentTime);
      old.gain.setTargetAtTime(0, context.currentTime, .006);
      // Disconnect only the old voice; the next pad gets its own clean bus.
      const cleanup = setTimeout(() => { old.disconnect(); retired.delete(cleanup); }, Math.max(30, (end-context.currentTime)*1000));
      retired.add(cleanup);
      bus = null;
    }
    if (active) {
      active.setAttribute('aria-pressed', 'false');
      active.closest('.sb-pad').classList.remove('is-playing');
    }
    active = null;
    board.classList.remove('is-playing');
    stopButton.disabled = true;
    now.textContent = message;
    timer.textContent = '0:00';
    paintIdle();
  }
  function paintIdle() {
    draw.clearRect(0, 0, canvas.width, canvas.height);
    draw.fillStyle = '#39576c';
    for (let i=0;i<48;i++) draw.fillRect(i*12.5+2, 30, 6, 4);
  }
  const frequency = new Uint8Array(64);
  function tick() {
    if (!active) return;
    const elapsed = context.currentTime-started;
    if (elapsed >= duration) { stop('Ready. Play another memory.'); return; }
    timer.textContent = `0:${String(Math.floor(elapsed)).padStart(2,'0')}`;
    if (!reduceMotion) {
      analyser.getByteFrequencyData(frequency);
      draw.clearRect(0,0,canvas.width,canvas.height);
      for (let i=0;i<48;i++) {
        const level=Math.max(4,frequency[i]/255*58);
        draw.fillStyle=i<24?'#7cc7ee':'#f4c65b';
        draw.fillRect(i*12.5+2,(64-level)/2,6,level);
      }
    }
    frame = requestAnimationFrame(tick);
  }
  window.MuseumSoundboard = {
    get context() { init(); return context; },
    get output() { return bus || this._input; }
  };
  // Capture before the original synthesizers run so every layer uses this voice bus.
  pads.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button || !sounds[button.id]) return;
    if (button === active) { event.stopImmediatePropagation(); stop(); return; }
    try {
      init();
      stop();
      if (context.state === 'suspended') context.resume().catch(() => stop('Audio could not start. Tap a sound to retry.'));
      bus = context.createGain();
      bus.gain.value = .85;
      bus.connect(window.MuseumSoundboard._input);
      active = button;
      active.setAttribute('aria-pressed', 'true');
      active.closest('.sb-pad').classList.add('is-playing');
      board.classList.add('is-playing');
      stopButton.disabled = false;
      now.textContent = `Now playing: ${button.textContent}`;
      started = context.currentTime;
      duration = sounds[button.id][2];
      tick();
    } catch (_) {
      event.stopImmediatePropagation();
      stop('Audio is unavailable in this browser.');
    }
  }, true);
  volume.addEventListener('input', () => {
    output.value = `${volume.value}%`;
    if (master) master.gain.setTargetAtTime(Number(volume.value)/100, context.currentTime, .015);
    try { localStorage.setItem('museum-sound-volume',volume.value); } catch (_) {}
  });
  stopButton.addEventListener('click', () => stop());
  board.addEventListener('keydown', event => { if(event.key==='Escape') { event.preventDefault(); stop(); } });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
  window.addEventListener('pagehide', () => {
    stop();
    if (context && context.state === 'running') context.suspend();
  });
  paintIdle();
})();
