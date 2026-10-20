/* The Grand Hall: themed exhibit viewer (one painting per wall) */
(function(){
'use strict';
const stage=document.querySelector('.walk-stage');

/* ---------- data (from museum.js / wing2020s.js) ---------- */
const EX00=window.EXHIBITS00||{},EX20=window.EXHIBITS20||{};
const MED00=window.MEDIA00||{},MED20=window.MEDIA20||{};
function mediaFor(id){return EX20[id]?(MED20[id]||null):(MED00[id]||null);}
const EMOJI00={y2k:'\u{1f4bb}',sms:'\u{1f4ac}',friendster:'\u{1f465}',ofw:'\u2708\ufe0f',meteor:'\u{1f4fa}',boxing:'\u{1f94a}',cafe:'\u{1f5a5}\ufe0f',load:'\u{1f4b8}',cameraphone:'\u{1f933}',socialgames:'\u{1f69c}',smartphone:'\u{1f4f1}'};
const EMOJI20={tiktok:'\u{1f4f1}',hidilyn:'\u{1f3cb}\u{fe0f}',ai:'\u{1f916}',bini:'\u{1f33a}',halalan:'\u{1f5f3}\u{fe0f}',gta6:'\u{1f3ae}'};
function exData(id){return EX20[id]?{d:EX20[id],dec:'2020s'}:{d:EX00[id],dec:'2000s'};}
function em(id){const r=exData(id);return r.dec==='2020s'?(EMOJI20[id]||'\u{1f5bf}'):(EMOJI00[id]||'\u{1f5bf}');}
function thenNowHTML(d){
 if(d.thenNow)return '<b>Then vs now:</b> '+d.thenNow;
 if(d.then||d.now)return '<b>Then:</b> '+(d.then||'')+'<br><b>Now:</b> '+(d.now||'');
 return '';
}
function sourceHTML(d){
 if(!d.sources||!d.sources.length)return '';
 return '<p class="walk-src">Source: '+d.sources.map(function(s){return '<a href="'+s[1]+'" target="_blank" rel="noopener">'+s[0]+'</a>';}).join(' · ')+'</p>';
}

/* ---------- exhibit lists ---------- */
const HALL00=['y2k','sms','ofw','meteor','cameraphone','load','cafe','friendster','boxing','socialgames','smartphone'];
const HALL20=['tiktok','hidilyn','ai','bini','halalan','gta6'];
const COMPARE=[
 {t:'Friendster \u2194 TikTok',a:'friendster',b:'tiktok',n:'From top 8 to For You Page.'},
 {t:'Cameraphone \u2194 Vlog',a:'cameraphone',b:'vlog',n:'From pixels to personalities.'},
 {t:'Smartphone \u2194 AI',a:'smartphone',b:'ai',n:'From apps to assistants.'},
 {t:'Boxing \u2194 Gold',a:'boxing',b:'hidilyn',n:'From the ring to the podium.'}
];
const TITLES={hall00:'2000s Hall',gallery:'Then vs Now Gallery',hall20:'2020s Hall'};
const EXIDX={hall00:0,hall20:0,gallery:0};
let cur='hall00';

function sceneIds(id){
 if(id==='hall00')return HALL00;
 if(id==='hall20')return HALL20;
 if(id==='gallery')return COMPARE.map(function(c,i){return 'cmp'+i;});
 return [];
}
function curKey(){
 const ids=sceneIds(cur);
 const n=ids.length,idx=((EXIDX[cur]||0)%n+n)%n;
 EXIDX[cur]=idx;
 return ids[idx];
}
function gotoScene(id){
 if(!sceneIds(id).length)return;
 cur=id;
 renderExhibit();
 syncChrome();
}

/* ---------- render ---------- */
function renderExhibit(){
 const key=curKey();
 const isCmp=cur==='gallery';
 let titleText,yearText,photoUrl,emoji,bgUrl;
 if(isCmp){
  const c=COMPARE[parseInt(key.replace('cmp',''),10)];
  titleText=c.t;yearText='2000s \u2194 2020s';
  const ma=mediaFor(c.a),mb=mediaFor(c.b);
  photoUrl=(ma&&ma.src)||(mb&&mb.src)||null;
  bgUrl=photoUrl;
  emoji=em(c.a);
 }else{
  const r=exData(key),d=r.d;
  titleText=d.title;yearText=d.year;
  const m=mediaFor(key);
  photoUrl=(m&&m.src)||null;
  bgUrl=photoUrl;
  emoji=em(key);
 }
 const bgEl=document.getElementById('ex-bg');
 const vid=document.getElementById('ex-video');
 const vidSrc=vidFor(key);
 if(vidSrc){
  vid.src=vidSrc;vid.style.display='block';
  bgEl.style.backgroundImage='';bgEl.style.backgroundColor='#0a0f1e';
 }else{
  vid.removeAttribute('src');vid.style.display='none';
  if(bgUrl){bgEl.style.backgroundImage='url("'+bgUrl+'")';bgEl.style.backgroundColor='';}
  else{bgEl.style.backgroundImage='';bgEl.style.backgroundColor='#141c2e';}
 }

 const frame=document.getElementById('ex-frame');
 const reflect=document.getElementById('ex-reflect');
 if(photoUrl){
  frame.innerHTML='<img src="'+photoUrl+'" alt="">';
  frame.classList.remove('no-photo');
  reflect.innerHTML='<img src="'+photoUrl+'" alt="">';
 }else{
  frame.innerHTML='<span class="ex-emoji">'+emoji+'</span>';
  frame.classList.add('no-photo');
  reflect.innerHTML='<span class="ex-emoji">'+emoji+'</span>';
 }
 if(!localStorage.getItem('museum-hint-seen')){
  frame.insertAdjacentHTML('beforeend','<span class="ex-hint" aria-hidden="true">\uD83D\uDC46 Click the img!</span>');
 }

 /* dust particles */
 const dust=document.getElementById('ex-dust');
 if(dust&&!dust.dataset.done){
  dust.dataset.done='1';
  for(let i=0;i<24;i++){
   const p=document.createElement('i');
   p.style.left=Math.random()*100+'%';
   p.style.bottom='-10px';
   p.style.animationDuration=(9+Math.random()*14)+'s';
   p.style.animationDelay=(Math.random()*14)+'s';
   const sz=2+Math.random()*3;
   p.style.width=p.style.height=sz+'px';
   dust.appendChild(p);
  }
 }
 document.getElementById('ex-year').textContent=yearText;
 document.getElementById('ex-topic').textContent=titleText;
 const ids=sceneIds(cur);
 document.getElementById('ex-count').textContent=(EXIDX[cur]+1)+' / '+ids.length;
 stage.dataset.exkey=key;
}

function syncChrome(){
 const t=document.getElementById('tour-title');
 if(t)t.textContent=TITLES[cur];
 const thumbs=document.querySelectorAll('.tour-thumbwrap');
 for(let i=0;i<thumbs.length;i++){thumbs[i].classList.toggle('on',thumbs[i].dataset.scene===cur);}
}

/* ---------- video backgrounds ---------- */
const VIDMAP={y2k:'y2k.mp4',sms:'sms.mp4',ofw:'ofw.mp4',meteor:'meteor.mp4',cameraphone:'cameraphone.mp4',load:'load.mp4',cafe:'cafe.mp4',friendster:'friendster.mp4',boxing:'boxing.mp4',socialgames:'socialgames.mp4',smartphone:'smartphone.mp4',tiktok:'tiktok.mp4',ppop:'bini.mp4',bini:'bini.mp4'};
function vidFor(key){return VIDMAP[key]?'vid/'+VIDMAP[key]:null;}
window.vidFor=vidFor;

/* ---------- plaque modal (story only) ---------- */
function openPlaque(){
 localStorage.setItem('museum-hint-seen','1');
 document.querySelectorAll('.ex-hint').forEach(function(el){el.remove();});

 const key=stage.dataset.exkey;
 const mbox=document.getElementById('walk-mbox');
 if(cur==='gallery'){
  const c=COMPARE[parseInt(key.replace('cmp',''),10)];
  const a=exData(c.a),b=exData(c.b);
  mbox.innerHTML='<button class="walk-x" aria-label="Close">\u00d7</button>'
  +'<p class="walk-kick">THEN \u2194 NOW</p><h3>'+c.t+'</h3>'
  +'<div class="walk-cmp"><div><p class="walk-kick">2000s</p><p><b>'+a.d.title+'</b> ('+a.d.year+')</p><p>'+a.d.body.split('.')[0]+'.</p></div>'
  +'<div><p class="walk-kick">2020s</p><p><b>'+b.d.title+'</b> ('+b.d.year+')</p><p>'+b.d.body.split('.')[0]+'.</p></div></div>'
  +'<p class="walk-tn"><b>The bridge:</b> '+c.n+'</p>';
 }else{
  const r=exData(key),d=r.d;
  mbox.innerHTML='<button class="walk-x" aria-label="Close">\u00d7</button>'
  +'<p class="walk-kick">'+r.dec+' \u00b7 '+d.year+'</p><h3>'+em(key)+' '+d.title+'</h3>'
  +'<p>'+d.body+'</p><p class="walk-tn">'+thenNowHTML(d)+'</p>'+sourceHTML(d);
 }
 mbox.querySelector('.walk-x').addEventListener('click',closeModal);
 document.getElementById('walk-modal').hidden=false;
}
function closeModal(){document.getElementById('walk-modal').hidden=true;}

/* ---------- chrome ---------- */
function buildChrome(){
 stage.innerHTML='<div class="ex-bg" id="ex-bg" aria-hidden="true"><video id="ex-video" autoplay muted loop playsinline></video></div>'
 +'<div class="ex-spotlight" aria-hidden="true"></div><div class="ex-dust" id="ex-dust" aria-hidden="true"></div>'
 +'<div class="ex-view"><button class="ex-frame" id="ex-frame" aria-label="Read the plaque"></button><div class="ex-reflect" id="ex-reflect" aria-hidden="true"></div>'
 +'<div class="ex-caption"><p class="ex-year" id="ex-year"></p><p class="ex-topic" id="ex-topic"></p><p class="ex-count" id="ex-count"></p></div></div>'
 +'<button class="tour-title" id="tour-title" aria-label="Open time machine"></button>'
 +'<button class="tour-edge" id="tour-prev" aria-label="Previous exhibit">\u2039</button>'
 +'<button class="tour-edge" id="tour-next" aria-label="Next exhibit">\u203a</button>'
 +'<button class="tour-tmbtn" id="tour-tm" aria-label="Open time machine">\u{1f570}\ufe0f</button>'
 +'<div class="tour-thumbs" id="tour-thumbs"></div>';
 document.getElementById('ex-frame').addEventListener('click',openPlaque);
 document.getElementById('tour-title').addEventListener('click',function(){if(window.openTimeMachine)window.openTimeMachine();});
 document.getElementById('tour-prev').addEventListener('click',function(){EXIDX[cur]--;renderExhibit();});
 document.getElementById('tour-next').addEventListener('click',function(){EXIDX[cur]++;renderExhibit();});
 document.getElementById('tour-tm').addEventListener('click',function(){if(window.openTimeMachine)window.openTimeMachine();});
 const thumbs=document.getElementById('tour-thumbs');
 Object.keys(TITLES).forEach(function(id){
  const w=document.createElement('button');w.className='tour-thumbwrap';w.dataset.scene=id;
  w.innerHTML='<span>'+TITLES[id]+'</span>';
  w.addEventListener('click',function(){gotoScene(id);});
  thumbs.appendChild(w);
 });
 document.getElementById('walk-modal').addEventListener('click',function(e){if(e.target.id==='walk-modal')closeModal();});
 renderExhibit();
 syncChrome();
}
/* ---------- swipe to change exhibits ---------- */
(function(){
 let sx=0,sy=0,swiping=false;
 const THRESH=60;
 stage.addEventListener('touchstart',function(e){
  const t=e.changedTouches[0];sx=t.clientX;sy=t.clientY;swiping=false;
 },{passive:true});
 stage.addEventListener('touchmove',function(e){
  if(!sx)return;
  const t=e.changedTouches[0],dx=t.clientX-sx,dy=t.clientY-sy;
  if(Math.abs(dx)>20&&Math.abs(dx)>Math.abs(dy)*1.5)swiping=true;
 },{passive:true});
 stage.addEventListener('touchend',function(e){
  if(!swiping){sx=0;return;}
  const t=e.changedTouches[0],dx=t.clientX-sx;
  if(dx<-THRESH){EXIDX[cur]++;renderExhibit();}
  else if(dx>THRESH){EXIDX[cur]--;renderExhibit();}
  sx=0;swiping=false;
 },{passive:true});
 // mouse drag for desktop
 let mdown=false,mx=0;
 stage.addEventListener('mousedown',function(e){mdown=true;mx=e.clientX;});
 window.addEventListener('mouseup',function(e){
  if(!mdown)return;mdown=false;
  const dx=e.clientX-mx;
  if(dx<-THRESH){EXIDX[cur]++;renderExhibit();}
  else if(dx>THRESH){EXIDX[cur]--;renderExhibit();}
 });
 // suppress click after a drag-swipe
 stage.addEventListener('click',function(e){
  if(swiping){e.stopPropagation();e.preventDefault();}
 },true);
})();

/* ---------- tilt parallax on the painting ---------- */
(function(){
 const frame=function(){return document.getElementById('ex-frame');};
 const MAX=7; // max degrees, keep it subtle
 let raf=null,tx=0,ty=0;
 function apply(){
  const f=frame();if(!f)return;
  f.style.transform='perspective(900px) rotateY('+tx+'deg) rotateX('+ty+'deg)';
  raf=null;
 }
 function tilt(x,y){
  tx=Math.max(-MAX,Math.min(MAX,x));
  ty=Math.max(-MAX,Math.min(MAX,y));
  if(!raf)raf=requestAnimationFrame(apply);
 }
 function reset(){tilt(0,0);}
 // phone tilt
 window.addEventListener('deviceorientation',function(e){
  if(e.gamma==null||e.beta==null)return;
  tilt(e.gamma/6,-(e.beta-45)/6);
 });
 // desktop mouse
 stage.addEventListener('mousemove',function(e){
  if('ontouchstart' in window)return;
  const r=stage.getBoundingClientRect();
  const px=(e.clientX-r.left)/r.width-.5, py=(e.clientY-r.top)/r.height-.5;
  tilt(px*MAX*2,-py*MAX*2);
 });
 stage.addEventListener('mouseleave',reset);
 // reset tilt when exhibit changes
 const _render=renderExhibit;
 renderExhibit=function(){reset();_render();};
})();

buildChrome();

/* ---------- stamp progress nudge ---------- */
(function(){
 function updateNudge(){
  const el=document.getElementById('stamp-nudge');
  if(!el||!window.stamps)return;
  try{
   const s=window.stamps()||{};
   const n=Object.keys(s).length, total=17;
   if(n>=total){el.innerHTML='🎫 <b>All '+total+' stamps collected!</b> Certified time traveler.';}
   else if(n>0){el.innerHTML='🎫 <b>'+n+'/'+total+' stamps</b> — play mini-games in the <a href="exhibits.html">Exhibit Halls</a> to collect them all.';}
   else{el.innerHTML='🎫 <b>0/'+total+' stamps</b> — play mini-games in the <a href="exhibits.html">Exhibit Halls</a> to start your collection.';}
  }catch(e){}
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',updateNudge);
 else updateNudge();
 window.addEventListener('focus',updateNudge);
})();

window.TOUR_API={
 gotoScene:gotoScene,
 yawForYear:function(year,hall){
  const ids=hall==='hall00'?HALL00:HALL20;
  let best=0,bd=9999;
  ids.forEach(function(id,i){
   const y=parseInt(exData(id).d.year,10);
   const d=Math.abs(y-year);
   if(d<bd){bd=d;best=i;}
  });
  EXIDX[hall]=best;
  return 0;
 }
};
})();

/* ---------- Time machine console ---------- */
const TM_YEARS=[2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2020,2021,2023,2024,2025,2026];
let tmIdx=7, tmBusy=false, arriveYaw=null;
function tmYear(){return TM_YEARS[tmIdx];}
function tmHall(){return tmYear()<=2010?'hall00':'hall20';}
const TM_KEY={2000:'y2k',2001:'sms',2002:'ofw',2003:'meteor',2004:'cameraphone',2005:'load',2006:'cafe',2007:'friendster',2008:'boxing',2009:'socialgames',2010:'smartphone',2020:'tiktok',2021:'hidilyn',2023:'ai',2024:'bini',2025:'halalan',2026:'gta6'};
/* ---------- time machine sounds (synthesized, no files) ---------- */
let tmAC=null;
function tmCtx(){
  try{
    if(!tmAC)tmAC=new (window.AudioContext||window.webkitAudioContext)();
    if(tmAC.state==='suspended')tmAC.resume();
    return tmAC.state==='running'?tmAC:null;
  }catch(e){return null;}
}
function tmTone(f0,f1,dur,type,vol,delay){
  const ac=tmCtx();if(!ac)return;
  const t0=ac.currentTime+(delay||0);
  const o=ac.createOscillator(),g=ac.createGain();
  o.type=type||'sine';
  o.frequency.setValueAtTime(Math.max(f0,1),t0);
  o.frequency.exponentialRampToValueAtTime(Math.max(f1,1),t0+dur);
  g.gain.setValueAtTime(0,t0);
  g.gain.linearRampToValueAtTime(vol||.06,t0+.02);
  g.gain.exponentialRampToValueAtTime(.0001,t0+dur);
  o.connect(g);g.connect(ac.destination);
  o.start(t0);o.stop(t0+dur+.05);
}
function tmWhoosh(dur,vol){
  const ac=tmCtx();if(!ac)return;
  const t0=ac.currentTime,len=Math.max(1,Math.floor(ac.sampleRate*dur));
  const buf=ac.createBuffer(1,len,ac.sampleRate),d=buf.getChannelData(0);
  for(let i=0;i<len;i++)d[i]=Math.random()*2-1;
  const src=ac.createBufferSource();src.buffer=buf;
  const bp=ac.createBiquadFilter();bp.type='bandpass';bp.Q.value=1.1;
  bp.frequency.setValueAtTime(300,t0);
  bp.frequency.exponentialRampToValueAtTime(2600,t0+dur*.7);
  bp.frequency.exponentialRampToValueAtTime(500,t0+dur);
  const g=ac.createGain();
  g.gain.setValueAtTime(0,t0);
  g.gain.linearRampToValueAtTime(vol||.1,t0+dur*.3);
  g.gain.linearRampToValueAtTime(0,t0+dur);
  src.connect(bp);bp.connect(g);g.connect(ac.destination);
  src.start(t0);src.stop(t0+dur+.05);
}
function sndOpen(){tmTone(180,520,.35,'sine',.05);tmTone(90,260,.35,'triangle',.035);}
function sndSelect(){tmTone(740,740,.07,'square',.03);tmTone(1180,1180,.05,'sine',.025,.02);}
function sndCharge(){tmTone(70,880,.95,'sawtooth',.04);tmTone(140,1760,.95,'sine',.018);}
// warp deceleration: streaks race at jump, then ease down as you arrive
function warpEase(vid,dur,from,to){
  if(!vid)return;
  try{
    vid.playbackRate=from;
    var t0=performance.now();
    (function step(now){
      var p=Math.min(1,(((now===undefined)?performance.now():now)-t0)/dur), e=1-Math.pow(1-p,3);
      try{vid.playbackRate=from+(to-from)*e;}catch(_){}
      if(p<1)requestAnimationFrame(step);
    })(t0);
  }catch(_){}
}
function ttVid(){return document.querySelector('.tt-vid');}
function bgVid(){return document.querySelector('.site-bgvid');}
function sndJump(){tmWhoosh(1.1,.11);}
function sndArrive(){tmTone(660,660,.16,'sine',.045);tmTone(990,990,.3,'sine',.045,.13);}
function sndClose(){tmTone(320,170,.14,'sine',.03);}

function tmPaint(){
  const bgv=document.getElementById('tm-bgvid');
  if(bgv){const src='vid/warp.mp4';if(!bgv.src.endsWith(src))bgv.src=src;}
  document.getElementById('tm-year').textContent=tmYear();
  document.getElementById('tm-dest').textContent='DESTINATION: THE '+(tmYear()<=2010?'2000s':'2020s');
  document.getElementById('tm-status').textContent='Select your destination year.';
  document.querySelectorAll('#timemachine .tm-ygrid button').forEach(function(b){
    b.classList.toggle('on',parseInt(b.dataset.y,10)===tmYear());
  });
}
function tmBuildYears(){
  var g00=document.getElementById('tm-ygrid00'),g20=document.getElementById('tm-ygrid20');
  g00.innerHTML='';g20.innerHTML='';
  TM_YEARS.forEach(function(y){
    var b=document.createElement('button');
    b.type='button';b.textContent=y;b.dataset.y=y;
    b.setAttribute('aria-label','Travel to '+y);
    b.addEventListener('click',function(){
      if(tmBusy)return;
      tmIdx=TM_YEARS.indexOf(y);
      tmPaint();
      sndSelect();
    });
    (y<=2010?g00:g20).appendChild(b);
  });
  tmPaint();
}
function yawForYear(year,hall){return window.TOUR_API.yawForYear(year,hall);}
function openTimeMachine(){
  if(tmBusy)return;
  tmPaint();
  document.getElementById('timemachine').hidden=false;
  sndOpen();
}
window.openTimeMachine=openTimeMachine;
// Time machine is the Grand Hall's main menu: open it right away on load
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',()=>openTimeMachine());
}else{
  openTimeMachine();
}
function closeTimeMachine(){
  document.getElementById('timemachine').hidden=true;
  sndClose();
}
function timeTravel(key){
  // gallery shortcut bypasses the console
  sndJump();
  document.getElementById('tt-label').textContent='TRAVELING TO '+(key==='hall00'?'THE 2000s':key==='hall20'?'THE 2020s':'THE GALLERY')+'...';
  document.getElementById('timetravel').hidden=false;
  warpEase(ttVid(),1150,2.8,.15);
  setTimeout(()=>{
    document.getElementById('timetravel').hidden=true;
    closeTimeMachine();
    window.TOUR_API.gotoScene(key);
    warpEase(bgVid(),6000,.25,1);warpEase(document.querySelector('.ex-bg video'),6000,.25,1);
    sndArrive();
  },1200);
}
function tmEngage(){
  if(tmBusy)return;
  tmBusy=true;
  sndCharge();
  const yr=tmYear(), hall=tmHall();
  const engage=document.getElementById('tm-engage');
  const lights=document.getElementById('tm-lights');
  const status=document.getElementById('tm-status');
  const yearEl=document.getElementById('tm-year');
  engage.disabled=true;
  lights.classList.add('charging');
  document.querySelector('.tm-core').classList.add('ticking');
  status.textContent='CHARGING TEMPORAL COILS...';
  // scramble the display like the machine is spinning up
  let n=0;
  const scramble=setInterval(()=>{
    yearEl.textContent=TM_YEARS[Math.floor(Math.random()*TM_YEARS.length)];
    if(++n>=10){
      clearInterval(scramble);
      yearEl.textContent=yr;
      status.textContent='LOCKED: '+yr+'. INITIATING JUMP...';
      setTimeout(()=>{
        lights.classList.remove('charging');
        sndJump();
        document.getElementById('tt-label').textContent='TRAVELING TO '+yr+'...';
        document.getElementById('timetravel').hidden=false;
        warpEase(ttVid(),1250,3.0,.15);
        setTimeout(()=>{
          document.getElementById('timetravel').hidden=true;
          closeTimeMachine();
          try{arriveYaw=yawForYear(yr,hall);}catch(e){arriveYaw=0;}
          window.TOUR_API.gotoScene(hall);
          warpEase(bgVid(),6000,.25,1);warpEase(document.querySelector('.ex-bg video'),6000,.25,1);
          sndArrive();
          tmBusy=false;
          engage.disabled=false;
          document.querySelector('.tm-core').classList.remove('ticking');
          tmPaint();
        },1300);
      },700);
    }
  },90);
}
document.getElementById('tm-x').addEventListener('click',closeTimeMachine);
document.getElementById('timemachine').addEventListener('click',e=>{
  if(e.target.id==='timemachine')closeTimeMachine();
});
tmBuildYears();
document.getElementById('tm-engage').addEventListener('click',tmEngage);
document.querySelectorAll('#timemachine [data-go]').forEach(b=>{
  b.addEventListener('click',()=>timeTravel(b.getAttribute('data-go')));
});
