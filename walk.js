/* The Grand Hall: 360 tour, real exhibit photos hung as framed paintings */
(function(){
'use strict';
const stage=document.querySelector('.walk-stage');
const cv=document.getElementById('tour-pano');
if(!stage||!cv)return;
const g=cv.getContext('2d');
const VW=960,VH=600;

/* ---------- data ---------- */
const EX00=window.EXHIBITS00||{},EX20=window.EXHIBITS20||{};
const MED00=window.MEDIA00||{},MED20=window.MEDIA20||{};
const GAMES=window.GAMESALL||{};
function exData(id){return EX20[id]?{d:EX20[id],dec:'2020s'}:{d:EX00[id],dec:'2000s'};}
function mediaFor(id){return EX20[id]?(MED20[id]||null):(MED00[id]||null);}
const EMOJI00={y2k:'\u{1f4bb}',sms:'\u{1f4ac}',friendster:'\u{1f465}',ofw:'\u2708\uFE0F',bpo:'\u{1f3a7}',meteor:'\u{1f4fa}',boxing:'\u{1f94a}',mall:'\u{1f6cd}\uFE0F',cafe:'\u{1f5a5}\uFE0F',load:'\u{1f4b8}',camera:'\u{1f4f7}',cameraphone:'\u{1f933}',socialgames:'\u{1f69c}',smartphone:'\u{1f4f1}'};
const EMOJI20={tiktok:'\u{1f4f1}',ppop:'\u{1f3a4}',ai:'\u{1f916}',bini:'\u{1f33a}',multo:'\u{1f47b}',lolla:'\u{1f3a4}'};
function em(id){const{d,dec}=exData(id);return dec==='2020s'?(EMOJI20[id]||'\u{1f5bf}'):(EMOJI00[id]||'\u{1f5bf}');}
function thenNowHTML(d){
 if(d.thenNow)return '<b>Then vs now:</b> '+d.thenNow;
 if(d.then||d.now)return '<b>Then:</b> '+(d.then||'')+'<br><b>Now:</b> '+(d.now||'');
 return '';
}
function sourceHTML(d){
 if(d.url)return '<p><a href="'+d.url+'" target="_blank" rel="noopener">Source</a></p>';
 if(d.sources&&d.sources[0])return '<p><a href="'+d.sources[0][1]+'" target="_blank" rel="noopener">'+d.sources[0][0]+'</a></p>';
 return '';
}
const COMPARE=[
 {a:'friendster',b:'tiktok',t:'The profile becomes the feed',n:'2007: your Top 8 friends defined you. 2020: the For You Page defines what you see. From profiles to streams.'},
 {a:'cameraphone',b:'vlog',t:'From camera to creator',n:'2004: the camera moved into the phone. 2019: the camera became the job. Everyone films, everyone posts.'},
 {a:'smartphone',b:'ai',t:'The phone gets a brain',n:'2010: the keypad disappeared. 2023: the phone started thinking. From touchscreens to AI classmates.'},
 {a:'boxing',b:'ppop',t:'Filipino pride takes the stage',n:'2008: the whole barangay watched Pacquiao. 2021: millions stream P-pop comebacks. Same pride, new arena.'}
];
const HALL00=['y2k','sms','ofw','meteor','cameraphone','load','cafe','friendster','boxing','socialgames','smartphone'];
const HALL20=['tiktok','ppop','ai','bini','multo','lolla'];
const PANOS={
 facade:'https://i.imgur.com/BWkIoEn.jpg',
 hall00:'https://i.imgur.com/Jdsf0vP.jpg',
 gallery:'https://i.imgur.com/McqlRaC.jpg',
 hall20:'https://i.imgur.com/yyk6To4.jpg'
};
const TITLES={facade:'Museum Facade',hall00:'2000s Hall',gallery:'Then vs Now Gallery',hall20:'2020s Hall'};

/* ---------- photo cache ---------- */
const PHOTOS={};
function photoFor(id){
 if(PHOTOS[id]!==undefined)return PHOTOS[id];
 const m=mediaFor(id);
 if(!m||!m.src){PHOTOS[id]=null;return null;}
 const im=new Image();
 im.onload=()=>{PHOTOS[id]=im;};
 im.onerror=()=>{PHOTOS[id]=null;};
 im.src=m.src;
 PHOTOS[id]=undefined; // loading
 return undefined;
}
[...HALL00,...HALL20].forEach(id=>photoFor(id));
COMPARE.forEach(c=>{photoFor(c.a);photoFor(c.b);});

/* ---------- stamps ---------- */
function stampKey(id){return EX20[id]?'museum-stamps-2020s-v1':'museum-stamps-v1';}
function hasStamp(id){try{return !!(JSON.parse(localStorage.getItem(stampKey(id))||'{}')[id]);}catch(e){return false;}}
function awardStamp(id){
 const k=stampKey(id);let s={};try{s=JSON.parse(localStorage.getItem(k)||'{}');}catch(e){}
 if(s[id])return false;s[id]=true;try{localStorage.setItem(k,JSON.stringify(s));}catch(e){}
 updateWalkBadge();return true;
}
function updateWalkBadge(){
 let n=0;['museum-stamps-v1','museum-stamps-2020s-v1'].forEach(k=>{
  try{n+=Object.keys(JSON.parse(localStorage.getItem(k)||'{}')).length;}catch(e){}});
 const b=document.getElementById('stamp-count');if(b)b.textContent=n+'/28';
}

/* ---------- modal (plaque + mini-game) ---------- */
const modal=document.getElementById('walk-modal'),mbox=document.getElementById('walk-mbox');
let modalOpen=false;
function closeModal(){const st=mbox.querySelector('#walk-stage');if(st&&st._cleanup)st._cleanup();modalOpen=false;modal.hidden=true;mbox.innerHTML='';}
if(modal)modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&modalOpen)closeModal();});
function openModal(it){
 if(!mbox)return;
 modalOpen=true;modal.hidden=false;
 if(it.cmp){
  const c=it.cmp,a=exData(c.a),b=exData(c.b);
  mbox.innerHTML='<button class="walk-x" aria-label="Close">\u00d7</button>'
  +'<p class="walk-kick">THEN \u2194 NOW</p><h3>'+c.t+'</h3>'
  +'<div class="walk-cmp"><div><p class="walk-kick">2000s</p><p><b>'+a.d.title+'</b> ('+a.d.year+')</p><p>'+a.d.body.split('.')[0]+'.</p></div>'
  +'<div><p class="walk-kick">2020s</p><p><b>'+b.d.title+'</b> ('+b.d.year+')</p><p>'+b.d.body.split('.')[0]+'.</p></div></div>'
  +'<p class="walk-tn"><b>The bridge:</b> '+c.n+'</p>';
 }else{
  const id=it.id,{d,dec}=exData(id);
  const stamped=hasStamp(id);
  mbox.innerHTML='<button class="walk-x" aria-label="Close">\u00d7</button>'
  +'<p class="walk-kick">'+dec+' \u00b7 '+d.year+'</p><h3>'+em(id)+' '+d.title+'</h3>'
  +'<p>'+d.body+'</p><p class="walk-tn">'+thenNowHTML(d)+'</p>'+sourceHTML(d)
  +'<div class="walk-actions"><button class="mini-again" id="walk-play">'
  +(stamped?'\u2713 Stamped \u2014 play again':'\u25b6 Play the mini-game')+'</button></div><div id="walk-stage"></div>';
  mbox.querySelector('#walk-play').addEventListener('click',()=>{
   const st=mbox.querySelector('#walk-stage');
   const spec=GAMES[d.game]();
   st.innerHTML='<h4 style="margin:14px 0 4px">'+spec.title+'</h4><p style="color:#b9c8ca">'+spec.intro+'</p><div class="mini-stage" id="walk-mini"></div><p id="walk-res" style="min-height:24px;font-weight:700"></p>';
   const res=st.querySelector('#walk-res');
   let currentCleanup=null;const setCleanup=fn=>{currentCleanup=fn};
   const cleanup=()=>{if(typeof currentCleanup==='function'){try{currentCleanup();}catch(_){}currentCleanup=null;}};
   spec.render(st.querySelector('#walk-mini'),{
    win:m=>{cleanup();res.textContent=m;const fresh=awardStamp(id);if(fresh)res.textContent+=' \u2014 stamp earned!';mbox.querySelector('#walk-play').textContent='\u2713 Stamped \u2014 play again';},
    lose:m=>{cleanup();res.textContent=m;}
   },setCleanup);
   st._cleanup=cleanup;
   if(st.scrollIntoView)st.scrollIntoView({block:'nearest',behavior:'smooth'});
  });
 }
 mbox.querySelector('.walk-x').addEventListener('click',closeModal);
}

/* ---------- scenes ---------- */
function spread(ids,pitch){
 return ids.map((id,i)=>({yaw:i*(360/ids.length),pitch:pitch,kind:'frame',id:id}));
}
const SCENES={
 facade:{img:null,panorama:PANOS.facade,frames:[],nav:[{yaw:0,pitch:-14,to:'__time',label:'Enter the museum'}]},
 hall00:{img:null,panorama:PANOS.hall00,frames:spread(HALL00,7),nav:[{yaw:180,pitch:-16,to:'facade',label:'Back to facade'},{yaw:0,pitch:-16,to:'hall20',label:'Enter the 2020s wing'}]},
 gallery:{img:null,panorama:PANOS.gallery,frames:COMPARE.map((c,i)=>({yaw:i*60+30,pitch:7,kind:'cmpframe',cmp:c})),nav:[{yaw:180,pitch:-16,to:'hall20',label:'Back to 2020s hall'},{yaw:0,pitch:-16,to:'facade',label:'Back to facade'}]},
 hall20:{img:null,panorama:PANOS.hall20,frames:spread(HALL20,7),nav:[{yaw:180,pitch:-16,to:'hall00',label:'Back to 2000s hall'},{yaw:0,pitch:-16,to:'gallery',label:'Then vs Now gallery'}]}
};
Object.keys(SCENES).forEach(k=>{
 const im=new Image();
 const done=()=>{SCENES[k].img=im;SCENES[k].ready=true;};
 im.onload=()=>{if(im.decode)im.decode().then(done).catch(done);else done();};
 im.onerror=()=>{SCENES[k].ready=true;};
 im.src=SCENES[k].panorama;
});

/* ---------- viewer state ---------- */
let cur='facade',yaw=0,pitch=0,tYaw=0,tPitch=0,fov=90,auto=false;
let fade=0,fadeDir=0,pending=null,hotRects=[],hoverKey=null,tick=0;
const wrapDeg=d=>((d%360)+540)%360-180;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));

function gotoScene(id){
 if(id===cur||fadeDir!==0||!SCENES[id])return;
 pending=id;fadeDir=1;
}
function drawCover(img,dx,dy,dw,dh){
 const ir=img.naturalWidth/img.naturalHeight,dr=dw/dh;
 let sw,sh,sx,sy;
 if(ir>dr){sh=img.naturalHeight;sw=sh*dr;sx=(img.naturalWidth-sw)/2;sy=0;}
 else{sw=img.naturalWidth;sh=sw/dr;sx=0;sy=(img.naturalHeight-sh)/2;}
 g.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
}
function rr(x,px,py,w,h,r){x.beginPath();x.moveTo(px+r,py);x.arcTo(px+w,py,px+w,py+h,r);x.arcTo(px+w,py+h,px,py+h,r);x.arcTo(px,py+h,px,py,r);x.arcTo(px,py,px+w,py,r);x.closePath();}
function fitText(x,text,cx,y,maxW,base,color){
 let s=base||13;x.font='700 '+s+'px system-ui';
 while(s>9&&x.measureText(text).width>maxW){s--;x.font='700 '+s+'px system-ui';}
 let t=text;
 while(x.measureText(t).width>maxW&&t.length>4){t=t.slice(0,-2);}
 if(t!==text)t=t.trim()+'\u2026';
 x.fillStyle=color||'#fff';x.textAlign='center';x.fillText(t,cx,y);
}

function drawFrame(h,px,py,hover){
 const W=150,H=103;
 const x0=px-W/2,y0=py-H/2;
 // shadow
 g.fillStyle='rgba(0,0,0,.45)';rr(g,x0+5,y0+7,W,H,4);g.fill();
 // frame
 g.fillStyle=hover?'#f4c65b':'#8a6d3b';rr(g,x0-10,y0-10,W+20,H+20,6);g.fill();
 g.fillStyle='#0d1322';rr(g,x0-4,y0-4,W+8,H+8,4);g.fill();
 if(h.kind==='cmpframe'){
  const c=h.cmp,ia=photoFor(c.a),ib=photoFor(c.b);
  if(ia&&ib){drawCover(ia,x0,y0,W/2,H);drawCover(ib,x0+W/2,y0,W/2,H);}
  else if(ia){drawCover(ia,x0,y0,W,H);}
  else if(ib){drawCover(ib,x0,y0,W,H);}
  else{g.fillStyle='#141c2e';g.fillRect(x0,y0,W,H);
   g.font='54px serif';g.textAlign='center';g.fillText(em(c.a),x0+W/4,y0+92);g.fillText(em(c.b),x0+3*W/4,y0+92);}
  g.fillStyle='#f4c65b';g.beginPath();g.arc(px,py,17,0,7);g.fill();
  g.fillStyle='#0d1322';g.font='800 20px system-ui';g.textAlign='center';g.fillText('\u2194',px,py+7);
 }else{
  const img=photoFor(h.id);
  if(img){drawCover(img,x0,y0,W,H);}
  else{g.fillStyle='#0e1a2e';g.fillRect(x0,y0,W,H);
   g.font='64px serif';g.textAlign='center';g.fillText(em(h.id),px,y0+96);}
 }
 // caption plate: year + topic
 const pw=236,ph=60,pxx=px-pw/2,pyy=y0+H+20;
 g.fillStyle='rgba(10,14,24,.92)';rr(g,pxx,pyy,pw,ph,8);g.fill();
 g.strokeStyle=hover?'#f4c65b':'#8a6d3b';g.lineWidth=2;rr(g,pxx,pyy,pw,ph,8);g.stroke();
 const d=exData(h.kind==='cmpframe'?h.cmp.a:h.id).d;
 const yr=h.kind==='cmpframe'?'2000s \u2194 2020s':d.year;
 const topic=h.kind==='cmpframe'?h.cmp.t:d.title;
 g.fillStyle='#f4c65b';g.font='800 12px system-ui';g.textAlign='center';
 g.fillText(yr,px,pyy+19);
 fitText(g,topic,px,pyy+42,pw-20,13,'#fff');
 return {x:x0-10,y:y0-10,w:W+20,h:H+20+20+ph};
}

function project(h){
 const dx=wrapDeg(h.yaw-yaw);
 if(Math.abs(dx)>70)return null;
 const ppd=VW/fov;
 return {x:VW/2+dx*ppd, y:VH/2-(h.pitch-pitch)*ppd};
}

function draw(){
 const sc=SCENES[cur];
 tick++;
 g.fillStyle='#0d1322';g.fillRect(0,0,VW,VH);
 yaw+=(tYaw-yaw)*.16;pitch+=(tPitch-pitch)*.16;
 yaw=wrapDeg(yaw);
 if(auto&&fadeDir===0)tYaw=wrapDeg(tYaw+.1);
 const img=sc.img;
 if(img&&sc.ready&&img.naturalWidth){
  // source-rect panorama: exactly fov degrees across VW, so drag, hotspots and walls move in lockstep
  const W=img.naturalWidth,H=img.naturalHeight;
  const srcW=(fov/360)*W,scale=VW/srcW,srcH=VH/scale;
  let sx=(yaw/360)*W-srcW/2;
  sx=((sx%W)+W)%W;
  const sy=clamp(H/2-srcH/2+(pitch/180)*H,0,Math.max(0,H-srcH));
  if(sx+srcW<=W){
   g.drawImage(img,sx,sy,srcW,srcH,0,0,VW,VH);
  }else{
   const w1=W-sx,dw1=w1*scale,w2=srcW-w1;
   g.drawImage(img,sx,sy,w1,srcH,0,0,dw1,VH);
   if(w2>0.5)g.drawImage(img,0,sy,w2,srcH,dw1,0,VW-dw1,VH);
  }
 }else{
  g.fillStyle='rgba(255,255,255,.55)';g.font='700 16px system-ui';g.textAlign='center';
  g.fillText('Loading panorama\u2026',VW/2,VH/2);
 }
 g.fillStyle='rgba(8,12,20,.5)';g.fillRect(0,0,VW,34);g.fillRect(0,VH-34,VW,34);
 hotRects=[];
 // frames
 sc.frames.forEach(h=>{
  const p=project(h);if(!p)return;
  const key=(h.id||h.cmp.t);
  const r=drawFrame(h,p.x,p.y,hoverKey===key);
  hotRects.push({x:r.x,y:r.y,w:r.w,h:r.h,hot:h,key:key});
 });
 // nav chevrons (low, like floor markers)
 sc.nav.forEach(nv=>{
  const p=project(nv);if(!p)return;
  const r=24;
  const pulse=(Math.sin(tick*0.07)+1)/2;
  g.strokeStyle='rgba(244,198,91,'+(0.35+0.45*pulse)+')';g.lineWidth=4;
  g.beginPath();g.arc(p.x,p.y,r+6+4*pulse,0,7);g.stroke();
  g.fillStyle='#8e2f32';g.beginPath();g.arc(p.x,p.y,r,0,7);g.fill();
  g.strokeStyle='#fff';g.lineWidth=3;g.beginPath();g.arc(p.x,p.y,r,0,7);g.stroke();
  g.fillStyle='#fff';g.font='800 26px system-ui';g.textAlign='center';g.fillText('\u203a',p.x,p.y+9);
  fitText(g,nv.label,p.x,p.y+r+22,190,12,'rgba(255,255,255,.9)');
  hotRects.push({x:p.x-r-8,y:p.y-r-8,w:2*r+16,h:2*r+16+30,hot:{nav:nv},key:'nav'+nv.to});
 });
 if(fadeDir!==0){
  fade+=fadeDir*.09;
  if(fade>=1&&pending){cur=pending;pending=null;tYaw=(typeof arriveYaw==='number'?arriveYaw:0);arriveYaw=null;tPitch=0;syncChrome();fadeDir=-1;}
  if(fade<=0){fade=0;fadeDir=0;}
  g.fillStyle='rgba(8,12,20,'+Math.min(1,fade)+')';g.fillRect(0,0,VW,VH);
 }
}

/* ---------- input ---------- */
let pdown=false,sx0=0,sy0=0,sy0v=0,sp0=0,moved=0;
cv.style.touchAction='none';
cv.addEventListener('pointerdown',e=>{pdown=true;sx0=e.clientX;sy0=e.clientY;sy0v=tYaw;sp0=tPitch;moved=0;if(cv.setPointerCapture){try{cv.setPointerCapture(e.pointerId);}catch(_){}}});
cv.addEventListener('pointermove',e=>{
 if(pdown){
  const dx=e.clientX-sx0,dy=e.clientY-sy0;
  moved=Math.max(moved,Math.abs(dx)+Math.abs(dy));
  const ppd=VW/fov;
  tYaw=wrapDeg(sy0v-dx/ppd);
  tPitch=clamp(sp0+dy/ppd,-32,32);
 }else{
  // hover highlight (desktop)
  const r=cv.getBoundingClientRect();
  const px=(e.clientX-r.left)*(VW/r.width),py=(e.clientY-r.top)*(VH/r.height);
  let found=null;
  for(const hr of hotRects){if(px>=hr.x&&px<=hr.x+hr.w&&py>=hr.y&&py<=hr.y+hr.h){found=hr.key;break;}}
  if(found!==hoverKey){hoverKey=found;cv.style.cursor=found?'pointer':'grab';}
 }
});
function endPointer(e){
 if(!pdown)return;pdown=false;
 if(moved<10){
  const r=cv.getBoundingClientRect();
  const px=(e.clientX-r.left)*(VW/r.width),py=(e.clientY-r.top)*(VH/r.height);
  for(const hr of hotRects){
   if(px>=hr.x&&px<=hr.x+hr.w&&py>=hr.y&&py<=hr.y+hr.h){
    const h=hr.hot;
    if(h.nav){if(h.nav.to==='__time')openTimeMachine();else gotoScene(h.nav.to);}
    else if(h.cmp)openModal({cmp:h.cmp});
    else openModal({id:h.id});
    break;
   }
  }
 }
}
cv.addEventListener('pointerup',endPointer);
cv.addEventListener('pointercancel',()=>{pdown=false;});
cv.addEventListener('wheel',e=>{
 if(!e.ctrlKey)return; // let normal scroll pass through to the page
 e.preventDefault();
 fov=clamp(fov+e.deltaY*.05,55,120);
},{passive:false});

/* ---------- chrome ---------- */
function syncChrome(){
 const t=document.getElementById('tour-title');
 if(t)t.textContent=TITLES[cur];
 document.querySelectorAll('.tour-thumbwrap').forEach(w=>w.classList.toggle('on',w.dataset.scene===cur));
}
function buildChrome(){
 const touch=document.querySelector('.walk-touch');if(touch)touch.style.display='none';
 const hint=document.querySelector('.walk-hint');
 if(hint)hint.textContent='Drag to look around \u00b7 Tap a painting for its story + mini-game \u00b7 Tap a chevron to walk on';
 const title=document.createElement('div');title.id='tour-title';title.className='tour-title';
 stage.appendChild(title);
 const thumbs=document.createElement('div');thumbs.id='tour-thumbs';thumbs.className='tour-thumbs';
 Object.keys(PANOS).forEach(id=>{
  const w=document.createElement('button');w.className='tour-thumbwrap';w.dataset.scene=id;
  const im=document.createElement('img');im.src=PANOS[id];im.alt=TITLES[id];im.className='tour-thumb';im.loading='lazy';
  const lab=document.createElement('span');lab.textContent=TITLES[id];
  w.appendChild(im);w.appendChild(lab);
  w.addEventListener('click',()=>gotoScene(id));
  thumbs.appendChild(w);
 });
 stage.appendChild(thumbs);
 const ctl=document.createElement('div');ctl.className='tour-ctl';
 ctl.innerHTML='<button id="tour-zout" class="tour-btn" title="Zoom out" aria-label="Zoom out">\u2212</button>'
  +'<button id="tour-zin" class="tour-btn" title="Zoom in" aria-label="Zoom in">+</button>'
  +'<button id="tour-auto" class="tour-btn" title="Auto-look" aria-label="Auto-look">\u27f3</button>'
  +'<button id="tour-full" class="tour-btn" title="Fullscreen" aria-label="Fullscreen">\u26f6</button>'
  +'<button id="tour-time" class="tour-btn" title="Time machine" aria-label="Time machine">\uD83D\uDD70\uFE0F</button>';
 stage.appendChild(ctl);
 document.getElementById('tour-zin').addEventListener('click',()=>{fov=clamp(fov-12,55,120);});
 document.getElementById('tour-zout').addEventListener('click',()=>{fov=clamp(fov+12,55,120);});
 document.getElementById('tour-auto').addEventListener('click',function(){auto=!auto;this.classList.toggle('on',auto);});
 document.getElementById('tour-time').addEventListener('click',openTimeMachine);
document.getElementById('tour-full').addEventListener('click',()=>{
  if(document.fullscreenElement)document.exitFullscreen();
  else if(stage.requestFullscreen)stage.requestFullscreen();
 });
 const sp=document.createElement('div');sp.id='tour-splash';sp.className='tour-splash';
 sp.innerHTML='<div class="tour-splash-card"><p class="kicker">The 2000s Called</p>'
  +'<h2>THE GRAND HALL</h2>'
  +'<p class="tour-legend"><span>\u{1f441}\uFE0f Drag to look around</span><span>\u{1f5bc}\uFE0f Tap a painting for its story + mini-game</span><span>\u203a Tap chevrons to walk between rooms</span></p>'
  +'<button class="mini-again tour-enter" id="tour-enter">Enter the hall</button></div>';
 stage.appendChild(sp);
 document.getElementById('tour-enter').addEventListener('click',()=>{sp.classList.add('off');setTimeout(()=>sp.remove(),450);});
 syncChrome();
}
buildChrome();
updateWalkBadge();
(function loop(){
 requestAnimationFrame(loop);
 if(!modalOpen)draw();
})();
// bridge for the time machine console (outside the IIFE)
window.TOUR_API={
 gotoScene:function(id){gotoScene(id);},
 yawForYear:function(year,hall){
  const ids=hall==='hall00'?HALL00:HALL20;
  let best=0,bd=9999;
  ids.forEach(function(id,i){
   const y=parseInt(exData(id).d.year,10);
   const d=Math.abs(y-year);
   if(d<bd){bd=d;best=i;}
  });
  return best*(360/ids.length);
 }
};
})();

/* ---------- Time machine console ---------- */
const TM_YEARS=[2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2020,2021,2023,2024,2025,2026];
let tmIdx=7, tmBusy=false, arriveYaw=null;
function tmYear(){return TM_YEARS[tmIdx];}
function tmHall(){return tmYear()<=2010?'hall00':'hall20';}
function tmPaint(){
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
}
function closeTimeMachine(){
  document.getElementById('timemachine').hidden=true;
}
function timeTravel(key){
  // gallery shortcut bypasses the console
  document.getElementById('tt-label').textContent='TRAVELING TO '+(key==='hall00'?'THE 2000s':key==='hall20'?'THE 2020s':'THE GALLERY')+'...';
  document.getElementById('timetravel').hidden=false;
  setTimeout(()=>{
    document.getElementById('timetravel').hidden=true;
    closeTimeMachine();
    window.TOUR_API.gotoScene(key);
  },1200);
}
function tmEngage(){
  if(tmBusy)return;
  tmBusy=true;
  const yr=tmYear(), hall=tmHall();
  const engage=document.getElementById('tm-engage');
  const lights=document.getElementById('tm-lights');
  const status=document.getElementById('tm-status');
  const yearEl=document.getElementById('tm-year');
  engage.disabled=true;
  lights.classList.add('charging');
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
        document.getElementById('tt-label').textContent='TRAVELING TO '+yr+'...';
        document.getElementById('timetravel').hidden=false;
        setTimeout(()=>{
          document.getElementById('timetravel').hidden=true;
          closeTimeMachine();
          try{arriveYaw=yawForYear(yr,hall);}catch(e){arriveYaw=0;}
          window.TOUR_API.gotoScene(hall);
          tmBusy=false;
          engage.disabled=false;
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
