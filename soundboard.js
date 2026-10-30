/* Shared player with gesture-safe startup and disposable audio voices. */
(() => {
  'use strict';
  const title = document.getElementById('sb-title');
  if (!title) return;
  const board = title.closest('.pg-card');
  board.id = 'soundboard';
  board.classList.add('soundboard');
  const buttons = [...board.querySelectorAll('button[id^="sb-"] ,button[id^="sb20-"]')];
  const sounds = {
    'sb-nokia': ['01', 'PHONE'], 'sb-static': ['02', 'TELEVISION'],
    'sb-dial': ['03', 'INTERNET'], 'sb-sms': ['04', 'MESSAGES'],
    'sb-ring': ['05', 'TELEPHONE'], 'sb-busy': ['06', 'TELEPHONE'],
    'sb-shutter': ['07', 'CAMERA'], 'sb-pager': ['08', 'PAGER'],
    'sb-windows': ['09', 'DESKTOP'], 'sb-videoke': ['10', 'VIDEOKE'],
    'sb20-gcash': ['01', 'PAYMENTS'], 'sb20-tiktok': ['02', 'SOCIAL'],
    'sb20-shopee': ['03', 'SHOPPING'], 'sb20-ml': ['04', 'GAMING'],
    'sb20-msg': ['05', 'MESSAGES'], 'sb20-tritone': ['06', 'PHONE'],
    'sb20-grab': ['07', 'TRANSPORT'], 'sb20-zoom': ['08', 'VIDEO CALLS'],
    'sb20-discord': ['09', 'VOICE CHAT'], 'sb20-cashin': ['10', 'PAYMENTS']
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
  const generators = new Map();
  const retiring = new Set();
  let context, master, analyser, input, active, voice;
  let request = 0, started = 0, frame = 0, startupTimer = 0;
  try {
    const saved = localStorage.getItem('museum-sound-volume');
    if (saved !== null && Number.isFinite(Number(saved))) volume.value = String(Math.max(0, Math.min(100, Number(saved))));
  } catch (_) {}
  function updateVolume() {
    output.value = `${volume.value}%`;
    volume.setAttribute('aria-valuetext', Number(volume.value) ? `${volume.value} percent` : 'Muted');
  }
  updateVolume();
  function init() {
    if (context && context.state !== 'closed') return;
    const Audio = window.AudioContext || window.webkitAudioContext;
    if (!Audio) throw new Error('Web Audio is unavailable');
    // Use a media playback session on iOS when the browser supports it.
    try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (_) {}
    context = new Audio();
    const current = context;
    const compressor = context.createDynamicsCompressor();
    compressor.threshold.value = -14;
    compressor.knee.value = 18;
    compressor.ratio.value = 4;
    compressor.attack.value = .005;
    compressor.release.value = .18;
    input = context.createBiquadFilter();
    input.type = 'lowpass';
    input.frequency.value = 9000;
    master = context.createGain();
    master.gain.value = Number(volume.value) / 100;
    analyser = context.createAnalyser();
    analyser.fftSize = 128;
    input.connect(compressor);
    compressor.connect(master);
    master.connect(analyser);
    analyser.connect(context.destination);
    current.addEventListener('statechange', () => {
      if (context !== current) return;
      if (current.state === 'closed' || (voice && current.state !== 'running')) {
        stop('Playback paused. Tap a sound to resume.');
      }
    });
  }
  function dispose(old, immediate = false) {
    if (old.disposed) return;
    old.disposed = true;
    clearTimeout(old.finishTimer);
    const at = context.currentTime;
    // A suspended audio clock cannot advance through a fade or a future stop.
    const instant = immediate || context.state !== 'running';
    if (!instant) {
      old.bus.gain.cancelScheduledValues(at);
      old.bus.gain.setTargetAtTime(0, at, .006);
    }
    for (const source of old.sources) {
      try { source.stop(instant ? at : at + .025); } catch (_) {}
    }
    const disconnect = () => {
      for (const node of old.nodes) { try { node.disconnect(); } catch (_) {} }
      old.nodes.clear();
      old.sources.clear();
      retiring.delete(old);
    };
    if (instant) disconnect();
    else {
      retiring.add(old);
      old.cleanupTimer = setTimeout(disconnect, 35);
    }
  }
  function stop(message = 'Stopped. Pick another sound.', immediate = false) {
    request++;
    clearTimeout(startupTimer);
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    if (voice) { dispose(voice, immediate); voice = null; }
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
    if (!draw) return;
    draw.clearRect(0, 0, canvas.width, canvas.height);
    draw.fillStyle = '#39576c';
    for (let i = 0; i < 48; i++) draw.fillRect(i * 12.5 + 2, 30, 6, 4);
  }
  const frequency = new Uint8Array(64);
  function tick() {
    if (!voice) return;
    const elapsed = Math.floor(context.currentTime - started);
    timer.textContent = `${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, '0')}`;
    if (draw && !reduceMotion) {
      analyser.getByteFrequencyData(frequency);
      draw.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 48; i++) {
        const level = Math.max(4, frequency[i] / 255 * 58);
        draw.fillStyle = i < 24 ? '#7cc7ee' : '#f4c65b';
        draw.fillRect(i * 12.5 + 2, (64 - level) / 2, 6, level);
      }
    }
    frame = requestAnimationFrame(tick);
  }
  function finishWhenSilent(current) {
    if (!current.ready || current.disposed || current.sources.size) return;
    // Let the Windows chime's feedback delay decay after its last source ends.
    current.finishTimer = setTimeout(() => {
      if (voice === current) stop('Ready. Play another memory.');
    }, current.tail * 1000);
  }
  window.MuseumSoundboard = {
    register(id, generate, options = {}) {
      if (buttons.some(button => button.id === id)) generators.set(id, { generate, tail: options.tail ?? .08 });
    },
    get context() { init(); return context; },
    get output() {
      if (!voice) throw new Error('No active sound');
      return voice.bus;
    },
    track(node) {
      const current = voice;
      if (!current) throw new Error('No active sound');
      current.nodes.add(node);
      if (typeof node.start === 'function' && typeof node.stop === 'function') {
        current.sources.add(node);
        node.addEventListener('ended', () => {
          current.sources.delete(node);
          finishWhenSilent(current);
        }, { once: true });
      }
      return node;
    }
  };
  function play(button) {
    if (button === active) { stop(); return; }
    stop();
    const generator = generators.get(button.id);
    if (!generator) { now.textContent = 'This sound could not load. Refresh and try again.'; return; }
    const token = request;
    active = button;
    button.setAttribute('aria-pressed', 'true');
    button.closest('.sb-pad').classList.add('is-playing');
    stopButton.disabled = false;
    now.textContent = `Starting: ${button.textContent}`;
    const begin = () => {
      if (request !== token) return;
      clearTimeout(startupTimer);
      if (context.state !== 'running') { stop('Tap a sound to enable audio.'); return; }
      try {
        const bus = context.createGain();
        bus.gain.value = .85;
        bus.connect(input);
        voice = { bus, nodes: new Set([bus]), sources: new Set(), tail: generator.tail, ready: false, disposed: false };
        started = context.currentTime;
        generator.generate();
        voice.ready = true;
        board.classList.add('is-playing');
        now.textContent = `Now playing: ${button.textContent}${Number(volume.value) ? '' : ' (muted)'}`;
        finishWhenSilent(voice);
        tick();
      } catch (_) { stop('Audio could not play. Tap a sound to retry.'); }
    };
    try {
      init();
      if (context.state === 'running') begin();
      else {
        // Resume in the user gesture and schedule only the latest selection.
        startupTimer = setTimeout(() => {
          if (request === token) stop('Tap a sound to enable audio.');
        }, 3000);
        context.resume().then(begin).catch(() => {
          if (request === token) stop('Audio could not start. Tap a sound to retry.');
        });
      }
    } catch (_) { if (request === token) stop('Audio is unavailable in this browser.'); }
  }
  pads.addEventListener('click', event => {
    const pad = event.target.closest('.sb-pad');
    const button = pad && pad.querySelector('button');
    if (!button || !sounds[button.id]) return;
    button.focus({ preventScroll: true });
    play(button);
  });
  volume.addEventListener('input', () => {
    updateVolume();
    if (master && context.state !== 'closed') master.gain.setTargetAtTime(Number(volume.value) / 100, context.currentTime, .015);
    if (voice) now.textContent = `Now playing: ${active.textContent}${Number(volume.value) ? '' : ' (muted)'}`;
    try { localStorage.setItem('museum-sound-volume', volume.value); } catch (_) {}
  });
  stopButton.addEventListener('click', () => stop());
  board.addEventListener('keydown', event => {
    if (event.key === 'Escape') { event.preventDefault(); stop(); }
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
  window.addEventListener('pagehide', () => {
    stop('Stopped. Pick another sound.', true);
    for (const old of retiring) {
      clearTimeout(old.cleanupTimer);
      for (const node of old.nodes) { try { node.disconnect(); } catch (_) {} }
      old.nodes.clear();
      old.sources.clear();
    }
    retiring.clear();
    if (context && context.state === 'running') context.suspend().catch(() => {});
  });
  paintIdle();
})();
