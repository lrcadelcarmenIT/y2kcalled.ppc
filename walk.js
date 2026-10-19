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
const EMOJI20={tiktok:'\u{1f4f1}',streaming:'\u{1f4fa}',vlog:'\u{1f3a5}',onlineclass:'\u{1f4bb}',meme:'\u{1f602}',ppop:'\u{1f3a4}',ai:'\u{1f916}',gcash:'\u{1f4b8}',shopee:'\u{1f6cd}\uFE0F',mlbb:'\u{1f3ae}',axie:'\u{1f43e}',livesell:'\u{1f4e2}',delivery:'\u{1f6f5}',pantry:'\u{1f9fa}'};
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
 {a:'load',b:'gcash',t:'Passing value, hand to hand',n:'2003: pasaload moved pesos through text. 2020s: e-wallets move millions through QR codes. Same trust, new rails.'},
 {a:'friendster',b:'tiktok',t:'The profile becomes the feed',n:'2004: your Top 8 friends defined you. 2020s: the For You Page defines what you see. From profiles to streams.'},
 {a:'mall',b:'shopee',t:'The mall fits in your pocket',n:'2000s: the aircon mall was the weekend. 2020s: the 11:11 sale is the weekend, and the mall delivers to your gate.'},
 {a:'cafe',b:'onlineclass',t:'The rented hour',n:'2000s: you rented a computer by the hour. 2020s: the computer moved into your room, and class followed.'},
 {a:'boxing',b:'mlbb',t:'Fight night becomes game night',n:'2000s: the whole barangay watched Pacquiao. 2020s: millions watch MLBB world championships. Same pride, new arena.'},
 {a:'camera',b:'vlog',t:'From camera to creator',n:'2000s: the digicam captured the trip. 2020s: the camera is the job. Everyone films, everyone posts.'}
];
const HALL00=['y2k','friendster','sms','load','camera','cameraphone','smartphone','ofw','bpo','mall','cafe','boxing','meteor','socialgames'];
const HALL20=['tiktok','streaming','vlog','onlineclass','meme','ppop','ai','gcash','shopee','mlbb','axie','livesell','delivery','pantry'];
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
 facade:{img:null,panorama:PANOS.facade,frames:[],nav:[{yaw:0,pitch:-14,to:'hall00',label:'Enter the 2000s wing'}]},
 hall00:{img:null,panorama:PANOS.hall00,frames:spread(HALL00,7),nav:[{yaw:180,pitch:-16,to:'facade',label:'Back to facade'},{yaw:0,pitch:-16,to:'gallery',label:'Then vs Now gallery'}]},
 gallery:{img:null,panorama:PANOS.gallery,frames:COMPARE.map((c,i)=>({yaw:i*60+30,pitch:7,kind:'cmpframe',cmp:c})),nav:[{yaw:180,pitch:-16,to:'hall00',label:'2000s Hall'},{yaw:0,pitch:-16,to:'hall20',label:'2020s Hall'}]},
 hall20:{img:null,panorama:PANOS.hall20,frames:spread(HALL20,7),nav:[{yaw:180,pitch:-16,to:'gallery',label:'Then vs Now gallery'}]}
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
 const W=216,H=148;
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
  if(fade>=1&&pending){cur=pending;pending=null;tYaw=0;tPitch=0;syncChrome();fadeDir=-1;}
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
    if(h.nav)gotoScene(h.nav.to);
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
  +'<button id="tour-full" class="tour-btn" title="Fullscreen" aria-label="Fullscreen">\u26f6</button>';
 stage.appendChild(ctl);
 document.getElementById('tour-zin').addEventListener('click',()=>{fov=clamp(fov-12,55,120);});
 document.getElementById('tour-zout').addEventListener('click',()=>{fov=clamp(fov+12,55,120);});
 document.getElementById('tour-auto').addEventListener('click',function(){auto=!auto;this.classList.toggle('on',auto);});
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
})();

/* ---------- Living museum map background ---------- */
(function(){
  const cv=document.createElement('canvas');
  cv.id='hall-map';
  cv.setAttribute('aria-hidden','true');
  document.body.prepend(cv);
  const ctx=cv.getContext('2d');
  const rooms=[
    {key:'facade', x:35,y:52,w:30,h:14,label:'ENTRANCE'},
    {key:'hall00', x:6, y:24,w:36,h:24,label:'2000s HALL'},
    {key:'hall20', x:58,y:24,w:36,h:24,label:'2020s HALL'},
    {key:'gallery',x:32,y:4, w:36,h:16,label:'THEN VS NOW'}
  ];
  const order=['facade','hall00','hall20','gallery'];
  let W=0,H=0,scale=1,ox=0,oy=0,hover=null,cur='facade',pulse=0;
  function resize(){
    const dpr=Math.min(2,window.devicePixelRatio||1);
    W=window.innerWidth;H=window.innerHeight;
    cv.width=W*dpr;cv.height=H*dpr;
    cv.style.width=W+'px';cv.style.height=H+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    scale=Math.min((W-48)/100,(H-48)/72);
    ox=(W-100*scale)/2;oy=(H-72*scale)/2;
  }
  function px(r){return [ox+r.x*scale,oy+r.y*scale,r.w*scale,r.h*scale];}
  function ctr(r){const b=px(r);return [b[0]+b[2]/2,b[1]+b[3]/2];}
  function draw(){
    if(!W)return;
    ctx.clearRect(0,0,W,H);
    ctx.save();
    ctx.strokeStyle='rgba(201,162,39,.45)';ctx.lineWidth=2;ctx.setLineDash([7,7]);
    ctx.beginPath();
    const pts=order.map(k=>ctr(rooms.find(r=>r.key===k)));
    pts.push(pts[0]);
    pts.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));
    ctx.stroke();ctx.restore();
    rooms.forEach(r=>{
      const b=px(r),isCur=r.key===cur,isHov=r.key===hover;
      ctx.fillStyle=isHov?'rgba(244,198,91,.25)':isCur?'rgba(244,198,91,.14)':'rgba(195,204,217,.14)';
      ctx.fillRect(b[0],b[1],b[2],b[3]);
      ctx.strokeStyle=isCur?'#c9a227':'#c3ccd9';
      ctx.lineWidth=isCur?2.5:1.5;
      ctx.strokeRect(b[0],b[1],b[2],b[3]);
      ctx.fillStyle=isHov||isCur?'#0e1a2e':'#8a94a6';
      ctx.font='700 '+Math.max(9,Math.round(10*scale))+'px "Space Mono",monospace';
      ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(r.label.split('').join('\u2009'),b[0]+b[2]/2,b[1]+b[3]/2);
    });
    const rc=rooms.find(r=>r.key===cur),c=ctr(rc);
    ctx.beginPath();ctx.arc(c[0],c[1],6+14*pulse,0,7);
    ctx.strokeStyle='rgba(201,162,39,'+(0.55*(1-pulse)).toFixed(2)+')';
    ctx.lineWidth=2;ctx.stroke();
    ctx.beginPath();ctx.arc(c[0],c[1],6,0,7);
    ctx.fillStyle='#c9a227';ctx.fill();
    ctx.strokeStyle='#0e1a2e';ctx.lineWidth=2;ctx.stroke();
  }
  function hit(mx,my){
    return rooms.find(r=>{
      const b=px(r);
      return mx>=b[0]&&mx<=b[0]+b[2]&&my>=b[1]&&my<=b[1]+b[3];
    })||null;
  }
  cv.addEventListener('mousemove',e=>{
    const r=hit(e.clientX,e.clientY),k=r?r.key:null;
    if(k!==hover){hover=k;cv.style.cursor=k?'pointer':'default';}
  });
  cv.addEventListener('mouseleave',()=>{hover=null;});
  cv.addEventListener('click',e=>{
    const r=hit(e.clientX,e.clientY);
    if(r&&window.TOUR&&window.TOUR.go)window.TOUR.go(r.key);
  });
  window.addEventListener('resize',resize);
  window.HALLMAP={setScene(k){cur=k;}};
  resize();
  (function loop(){
    pulse=(pulse+0.02)%1;
    if(document.visibilityState==='visible')draw();
    requestAnimationFrame(loop);
  })();
})();

/* expose tour control for the map */
window.TOUR=window.TOUR||{};
window.TOUR.go=function(key){goScene(key);};
const _origGoScene=goScene;
goScene=function(key){
  _origGoScene(key);
  if(window.HALLMAP)window.HALLMAP.setScene(key);
};
