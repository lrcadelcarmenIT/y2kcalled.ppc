/* The Grand Hall: real 360 virtual tour (custom canvas viewer), in our theme */
(function(){
'use strict';
const stage=document.querySelector('.walk-stage');
const cv=document.getElementById('tour-pano');
if(!stage||!cv)return;
const g=cv.getContext('2d');
const VW=960,VH=600;

/* ---------- data ---------- */
const EX00=window.EXHIBITS00||{},EX20=window.EXHIBITS20||{};
const GAMES=window.GAMESALL||{};
function exData(id){return EX20[id]?{d:EX20[id],dec:'2020s'}:{d:EX00[id],dec:'2000s'};}
const EMOJI00={y2k:'\u{1f4bb}',sms:'\u{1f4ac}',friendster:'\u{1f465}',ofw:'\u2708\uFE0F',bpo:'\u{1f3a7}',meteor:'\u{1f4fa}',boxing:'\u{1f94a}',mall:'\u{1f6cd}\uFE0F',cafe:'\u{1f5a5}\uFE0F',load:'\u{1f4b8}',camera:'\u{1f4f7}',cameraphone:'\u{1f933}',socialgames:'\u{1f69c}',smartphone:'\u{1f4f1}'};
function em(id){const{d,dec}=exData(id);return dec==='2020s'?d.emoji:(EMOJI00[id]||'\u{1f5bf}');}
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
 facade:'https://n.uguu.se/lkZJyTdZ.jpg',
 hall00:'https://h.uguu.se/gooDsbyl.jpg',
 gallery:'https://n.uguu.se/iimWavfC.jpg',
 hall20:'https://n.uguu.se/dzeUKFlm.jpg'
};
const TITLES={facade:'Museum Facade',hall00:'2000s Hall',gallery:'Then vs Now Gallery',hall20:'2020s Hall'};

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

/* ---------- modal (plaque) ---------- */
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

/* ---------- scenes & hotspots ---------- */
function spread(ids,pitch,cls){
 return ids.map((id,i)=>({yaw:i*(360/ids.length),pitch:pitch,cls:cls||'info',id:id,label:exData(id).d.title}));
}
const SCENES={
 facade:{img:null,hotspots:[{yaw:0,pitch:-4,cls:'nav',to:'hall00',label:'Enter the 2000s wing'}]},
 hall00:{img:null,hotspots:[...spread(HALL00,6,'info'),{yaw:180,pitch:-4,cls:'nav',to:'facade',label:'Back to facade'},{yaw:0,pitch:-4,cls:'nav',to:'gallery',label:'Then vs Now gallery'}]},
 gallery:{img:null,hotspots:[...COMPARE.map((c,i)=>({yaw:i*60+30,pitch:6,cls:'cmp',cmp:c,label:c.t})),{yaw:180,pitch:-4,cls:'nav',to:'hall00',label:'2000s Hall'},{yaw:0,pitch:-4,cls:'nav',to:'hall20',label:'2020s Hall'}]},
 hall20:{img:null,hotspots:[...spread(HALL20,6,'info'),{yaw:180,pitch:-4,cls:'nav',to:'gallery',label:'Then vs Now gallery'}]}
};
Object.keys(PANOS).forEach(k=>{
 const im=new Image();
 im.onload=()=>{SCENES[k].img=im;};
 im.src=PANOS[k];
});

/* ---------- 360 viewer state ---------- */
let cur='facade',yaw=0,pitch=0,tYaw=0,tPitch=0,fov=90,auto=false;
let fade=0,fadeDir=0,pending=null,hotRects=[];
const wrapDeg=d=>((d%360)+540)%360-180;

function gotoScene(id){
 if(id===cur||fadeDir!==0||!SCENES[id])return;
 pending=id;fadeDir=1;
}
function project(h){
 const dx=wrapDeg(h.yaw-yaw);
 if(Math.abs(dx)>62)return null;
 const ppd=VW/fov;
 const sx=VW/2+dx*ppd;
 const sy=VH/2-(h.pitch-pitch)*ppd;
 return {x:sx,y:sy,dx};
}
function draw(){
 const sc=SCENES[cur];
 g.fillStyle='#0d1322';g.fillRect(0,0,VW,VH);
 yaw+=(tYaw-yaw)*.15;pitch+=(tPitch-pitch)*.15;
 yaw=wrapDeg(yaw);
 if(auto&&fadeDir===0){tYaw=wrapDeg(tYaw+.35);}
 const img=sc.img;
 if(img&&img.complete&&img.naturalWidth){
  const scale=VH/img.naturalHeight*1.25;
  const dw=img.naturalWidth*scale,dh=img.naturalHeight*scale;
  const ppd=dw/360;
  let xoff=-(yaw/360)*dw;
  xoff=((xoff%dw)+dw)%dw;xoff-=dw;
  const yoff=VH/2-dh/2-(pitch/180)*dh*.9;
  for(let k=0;k<3;k++)g.drawImage(img,xoff+k*dw,yoff,dw,dh);
  // vignette edges top/bottom
  g.fillStyle='rgba(8,12,20,.55)';g.fillRect(0,0,VW,40);g.fillRect(0,VH-40,VW,40);
 }else{
  g.fillStyle='rgba(255,255,255,.5)';g.font='700 16px system-ui';g.textAlign='center';
  g.fillText('Loading panorama\u2026',VW/2,VH/2);
 }
 hotRects=[];
 sc.hotspots.forEach(h=>{
  const p=project(h);if(!p)return;
  const r=h.cls==='nav'?26:19;
  if(h.cls==='nav'){
   g.fillStyle='#8e2f32';g.beginPath();g.arc(p.x,p.y,r,0,7);g.fill();
   g.strokeStyle='#fff';g.lineWidth=3;g.beginPath();g.arc(p.x,p.y,r,0,7);g.stroke();
   g.fillStyle='#fff';g.font='800 26px system-ui';g.textAlign='center';g.fillText('\u203a',p.x,p.y+9);
  }else{
   g.fillStyle=h.cls==='cmp'?'#8e2f32':'#2b9fe3';
   g.beginPath();g.arc(p.x,p.y,r,0,7);g.fill();
   g.strokeStyle='#fff';g.lineWidth=3;g.beginPath();g.arc(p.x,p.y,r,0,7);g.stroke();
   g.fillStyle='#fff';g.font='800 19px system-ui';g.textAlign='center';
   g.fillText(h.cls==='cmp'?'\u2194':'i',p.x,p.y+7);
  }
  // label
  g.font='700 12px system-ui';
  const tw=Math.min(200,g.measureText(h.label).width+18);
  g.fillStyle='rgba(10,14,24,.85)';
  g.beginPath();
  if(g.roundRect)g.roundRect(p.x-tw/2,p.y+r+8,tw,24,12);else g.rect(p.x-tw/2,p.y+r+8,tw,24,12);
  g.fill();
  g.fillStyle='#fff';g.fillText(h.label,p.x,p.y+r+25);
  hotRects.push({x:p.x-r-6,y:p.y-r-6,w:2*r+12,h:2*r+12+34,hot:h});
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
 if(!pdown)return;
 const dx=e.clientX-sx0,dy=e.clientY-sy0;
 moved=Math.max(moved,Math.abs(dx)+Math.abs(dy));
 const ppd=VW/fov;
 tYaw=wrapDeg(sy0v-dx/ppd);
 tPitch=Math.max(-35,Math.min(35,sp0+dy/ppd));
});
cv.addEventListener('pointerup',e=>{
 pdown=false;
 if(moved<10){
  const r=cv.getBoundingClientRect();
  const px=(e.clientX-r.left)*(VW/r.width),py=(e.clientY-r.top)*(VH/r.height);
  for(const hr of hotRects){
   if(px>=hr.x&&px<=hr.x+hr.w&&py>=hr.y&&py<=hr.y+hr.h){
    const h=hr.hot;
    if(h.cls==='nav')gotoScene(h.to);
    else if(h.cmp)openModal({cmp:h.cmp});
    else openModal({id:h.id});
    break;
   }
  }
 }
});
cv.addEventListener('wheel',e=>{
 e.preventDefault();
 fov=Math.max(55,Math.min(120,fov+e.deltaY*.05));
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
 if(hint)hint.textContent='Drag to look around \u00b7 Scroll to zoom \u00b7 Tap a blue badge for a plaque \u00b7 Tap a chevron to walk on';
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
 ctl.innerHTML='<button id="tour-auto" class="tour-btn" title="Auto-look" aria-label="Auto-look">\u27f3</button>'
  +'<button id="tour-full" class="tour-btn" title="Fullscreen" aria-label="Fullscreen">\u26f6</button>';
 stage.appendChild(ctl);
 document.getElementById('tour-auto').addEventListener('click',function(){
  auto=!auto;this.classList.toggle('on',auto);
 });
 document.getElementById('tour-full').addEventListener('click',()=>{
  if(document.fullscreenElement)document.exitFullscreen();
  else if(stage.requestFullscreen)stage.requestFullscreen();
 });
 const sp=document.createElement('div');sp.id='tour-splash';sp.className='tour-splash';
 sp.innerHTML='<div class="tour-splash-card"><p class="kicker">The 2000s Called</p>'
  +'<h2>THE GRAND HALL</h2>'
  +'<p class="tour-legend"><span>\u{1f441}\uFE0f Drag to look around, scroll to zoom</span><span>\u2139\uFE0f Tap blue badges for plaques</span><span>\u203a Tap chevrons to walk between rooms</span></p>'
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
