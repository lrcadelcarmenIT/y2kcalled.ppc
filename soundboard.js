/* Recorded sound clips, local audio assets, and one cancellable voice at a time. */
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
  const clips = {
  "sb-static": {
    "file": "tv-static.mp3",
    "source": "https://commons.wikimedia.org/wiki/File:Static_B.wav",
    "creator": "Oreocooke",
    "license": "CC0",
    "note": "A television-style static audio clip."
  },
  "sb-dial": {
    "file": "dial-up.mp3",
    "source": "https://commons.wikimedia.org/wiki/File:Dial_up_modem_noises.ogg",
    "creator": "William Termini",
    "license": "Public domain",
    "note": "An actual dial-up modem handshake, from dialing to connection."
  },
  "sb-sms": {
    "file": "nokia-sms.mp3",
    "source": "https://freesound.org/s/826763/",
    "creator": "BuckFitches",
    "license": "CC0",
    "note": "Text message alert recorded from a Nokia 3310."
  },
  "sb-ring": {
    "file": "landline-ring.mp3",
    "source": "https://freesound.org/s/275163/",
    "creator": "robotjay",
    "license": "CC0",
    "note": "A ringing 1990s Telecom New Zealand landline handset."
  },
  "sb-busy": {
    "file": "busy-signal.mp3",
    "source": "https://freesound.org/s/432418/",
    "creator": "Osiruswaltz",
    "license": "CC0",
    "note": "A recorded telephone busy signal."
  },
  "sb-shutter": {
    "file": "camera-shutter.mp3",
    "source": "https://freesound.org/s/170229/",
    "creator": "roachpowder",
    "license": "CC0",
    "note": "A real camera shutter recording."
  },
  "sb-pager": {
    "file": "pager-beep.mp3",
    "source": "https://freesound.org/s/72561/",
    "creator": "snardin42",
    "license": "CC0",
    "note": "The startup and low-battery beeps of a real pager."
  },
  "sb-windows": {
    "file": "windows-xp-startup.mp3",
    "source": "https://github.com/James-Oswald/Windows10-Add-Startup-Sound/blob/master/src/sounds/XP.mp3",
    "creator": "Microsoft",
    "license": "Brand audio; copyright Microsoft",
    "note": "The original Windows XP startup recording."
  },
  "sb20-shopee": {
    "file": "shopee.mp3",
    "source": "https://www.myinstants.com/en/instant/shaw-shopee-18863/",
    "creator": "Shopee",
    "license": "Brand audio; supplied with public embed",
    "note": "The familiar Shopee notification."
  },
  "sb20-ml": {
    "file": "ml-victory.mp3",
    "source": "https://www.myinstants.com/en/instant/victory-mlbb-41025/",
    "creator": "Moonton",
    "license": "Game audio; supplied with public embed",
    "note": "The real Mobile Legends victory announcement."
  },
  "sb20-msg": {
    "file": "messenger.mp3",
    "source": "https://www.myinstants.com/en/instant/messenger-notification-59666/",
    "creator": "Meta",
    "license": "Brand audio; supplied with public embed",
    "note": "Messenger's notification sound."
  },
  "sb20-grab": {
    "file": "grab-alert.mp3",
    "source": "https://tiengdong.com/nhac-chuong-grab-original",
    "creator": "Grab",
    "license": "Brand audio",
    "note": "The original Grab order notification recording."
  },
  "sb20-zoom": {
    "file": "zoom-join.mp3",
    "source": "https://www.myinstants.com/en/instant/zoom-join-90015/",
    "creator": "Zoom",
    "license": "Brand audio; supplied with public embed",
    "note": "The Zoom meeting join doorbell."
  },
  "sb20-discord": {
    "file": "discord-join.mp3",
    "source": "https://github.com/lefuturiste/discord-sounds/blob/master/incoming-user.mp3",
    "creator": "Discord",
    "license": "Brand audio",
    "note": "The Discord voice-channel join sound."
  },
  "sb-nokia": {
    "file": "nokia-tune.mp3",
    "source": "https://phoneboy.com/nokia-tune",
    "creator": "Dameon D. Welch",
    "license": "CC BY-SA 3.0 US",
    "note": "The classic Nokia tune, recorded from a Nokia 6340i in 2008."
  },
  "sb-videoke": {
    "file": "videoke-score.mp3",
    "source": "https://www.myinstants.com/en/instant/karaoke-score-91568/",
    "creator": "Karaoke Score / brian16",
    "license": "Public audio sample",
    "note": "The real videoke scoring sound after the song ends."
  },
  "sb20-tiktok": {
    "file": "tiktok-notification.mp3",
    "source": "https://bleepboard.com/sound/tiktok-notification/",
    "creator": "TikTok / BleepBoard",
    "license": "Public audio sample",
    "note": "The TikTok notification recording."
  },
  "sb20-tritone": {
    "file": "iphone-tritone.mp3",
    "source": "https://github.com/extratone/macOSsystemsounds/blob/main/mp3/sms-received1.mp3",
    "creator": "Apple / extratone archive",
    "license": "Brand audio",
    "note": "The original iPhone Tri-tone system sound."
  },
  "sb20-gcash": {
    "file": "gcash-notification.mp3",
    "source": "https://www.zedge.net/notification-sounds/60322769-8839-43c7-8d6e-6a666dc804ec",
    "creator": "GCash / Atterz16",
    "license": "Public audio sample",
    "note": "GCash notification audio, archived by Atterz16."
  },
  "sb20-cashin": {
    "file": "gcash-cashin.mp3",
    "source": "https://www.zedge.net/notification-sounds/0aa5e6ab-9eb0-4ae2-84ee-300fce330092",
    "creator": "GCash / ADAWSON01",
    "license": "Public audio sample",
    "note": "The GCash notification clip uploaded as “Gcash notif”."
  }
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
  const downloads = new Map();
  const decoded = new Map();
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
    master = context.createGain();
    master.gain.value = Number(volume.value) / 100;
    analyser = context.createAnalyser();
    analyser.fftSize = 128;
    input = master;
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
  function download(clip) {
    if (downloads.has(clip.file)) return downloads.get(clip.file);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    const pending = fetch(`assets/audio/${clip.file}?v=realclips2`, { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error('Audio file could not load');
        return response.arrayBuffer();
      }).catch(error => { downloads.delete(clip.file); throw error; })
      .finally(() => clearTimeout(timeout));
    downloads.set(clip.file, pending);
    return pending;
  }
  function load(clip) {
    if (decoded.has(clip.file)) return decoded.get(clip.file);
    const current = context;
    const pending = download(clip).then(bytes => current.decodeAudioData(bytes.slice(0)))
      .catch(error => { decoded.delete(clip.file); throw error; });
    decoded.set(clip.file, pending);
    return pending;
  }
  window.MuseumSoundboard = { get context() { init(); return context; } };
  function play(button) {
    if (button === active) { stop(); return; }
    stop();
    const clip = clips[button.id];
    if (!clip) { now.textContent = 'This recording is unavailable.'; return; }
    const token = request;
    active = button;
    button.setAttribute('aria-pressed', 'true');
    button.closest('.sb-pad').classList.add('is-playing');
    stopButton.disabled = false;
    now.textContent = `Loading: ${button.textContent}`;
    const failed = () => {
      if (request === token) stop('Recording could not load. Tap the pad to retry.');
    };
    try {
      init();
      // Unlock audio in the original tap, while the real recording downloads.
      const resumed = context.state === 'running' ? Promise.resolve() : context.resume();
      startupTimer = setTimeout(() => {
        if (request === token) stop('Recording could not start. Tap the pad to retry.');
      }, 16000);
      Promise.all([resumed, load(clip)]).then(([, buffer]) => {
        if (request !== token) return;
        clearTimeout(startupTimer);
        if (context.state !== 'running') { stop('Tap a sound to enable audio.'); return; }
        const bus = context.createGain();
        bus.gain.value = 1;
        bus.connect(input);
        const source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(bus);
        const current = voice = { bus, nodes: new Set([bus, source]), sources: new Set([source]), disposed: false };
        source.addEventListener('ended', () => {
          current.sources.delete(source);
          if (voice === current && !current.disposed) stop('Ready. Play another memory.');
        }, { once: true });
        started = context.currentTime;
        source.start();
        board.classList.add('is-playing');
        now.textContent = `Now playing: ${button.textContent}${Number(volume.value) ? '' : ' (muted)'}`;
        const note = board.querySelector('#sb-note');
        if (note) note.textContent = clip.note;
        tick();
      }).catch(failed);
    } catch (_) {
      if (request === token) stop('Audio is unavailable in this browser.');
    }
  }
  // Fetch the visible decade's small clips as the soundboard approaches the screen.
  const preload = () => buttons.forEach(button => {
    if (clips[button.id]) download(clips[button.id]).catch(() => {});
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { observer.disconnect(); preload(); }
    }, { rootMargin: '250px' });
    observer.observe(board);
  }
  const credits = document.createElement('details');
  credits.className = 'sb-credits';
  const summary = document.createElement('summary');
  summary.textContent = 'Audio sources';
  const list = document.createElement('ul');
  buttons.forEach(button => {
    const clip = clips[button.id];
    if (!clip) return;
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = clip.source;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = button.textContent;
    item.append(link, ` — ${clip.creator}${/^(CC|Public domain)/.test(clip.license) ? ' · ' + clip.license : ''}`);
    list.append(item);
  });
  credits.append(summary, list);
  board.append(credits);
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
