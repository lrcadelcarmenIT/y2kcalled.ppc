/* The Grand Hall: first-person gallery tour (NMFA-style), in our theme */
(function(){
'use strict';
const cv=document.getElementById('walk-canvas');
if(!cv)return;
const g=cv.getContext('2d');
const VW=960,VH=600,STRIP_W=2880;

/* ---------- data ---------- */
const EX00=window.EXHIBITS00||{},EX20=window.EXHIBITS20||{};
const MED00=window.MEDIA00||{},MED20=window.MEDIA20||{};
const GAMES=window.GAMESALL||{};
function exData(id){return EX20[id]?{d:EX20[id],dec:'2020s'}:{d:EX00[id],dec:'2000s'};}
function mediaFor(id){return EX20[id]?(MED20[id]||null):(MED00[id]||null);}
const EMOJI00={y2k:'\u{1f4bb}',sms:'\u{1f4ac}',friendster:'\u{1f465}',ofw:'\u2708\uFE0F',bpo:'\u{1f3a7}',meteor:'\u{1f4fa}',boxing:'\u{1f94a}',mall:'\u{1f6cd}\uFE0F',cafe:'\u{1f5a5}\uFE0F',load:'\u{1f4b8}',camera:'\u{1f4f7}',cameraphone:'\u{1f933}',socialgames:'\u{1f69c}',smartphone:'\u{1f4f1}'};
function em(id){const{d,dec}=exData(id);return dec==='2020s'?d.emoji:(EMOJI00[id]||'\u{1f5bf}');}
function shortTitle(id){return exData(id).d.title;}
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

const SCENES=[
 {id:'facade',title:'Museum Facade',sub:'The Grand Hall',wall:'#232f4a',trim:'#f4c65b',floor:'#3a3f4a',
  frames:[],links:[{to:'hall00a',label:'Enter the 2000s wing',at:2300}]},
 {id:'hall00a',title:'2000s Hall · Technology',sub:'West wing',wall:'#2b3a55',trim:'#7cc7ee',floor:'#33302a',
  frames:['y2k','friendster','sms','load','camera','cameraphone','smartphone'],
  links:[{to:'facade',label:'Back to facade',at:120},{to:'hall00b',label:'2000s Hall B',at:2700}]},
 {id:'hall00b',title:'2000s Hall · Global & Shared',sub:'West wing',wall:'#2b3a55',trim:'#7cc7ee',floor:'#33302a',
  frames:['ofw','bpo','mall','cafe','boxing','meteor','socialgames'],
  links:[{to:'hall00a',label:'2000s Hall A',at:120},{to:'gallery',label:'Then vs Now gallery',at:2700}]},
 {id:'gallery',title:'Then vs Now Gallery',sub:'The bridge',wall:'#3d4451',trim:'#f4c65b',floor:'#3a332a',
  frames:[],cmps:COMPARE,
  links:[{to:'hall00b',label:'2000s wing',at:120},{to:'hall20a',label:'2020s wing',at:2700}]},
 {id:'hall20a',title:'2020s Hall · Screens',sub:'East wing',wall:'#4a4230',trim:'#f4c65b',floor:'#2e2a24',
  frames:['tiktok','streaming','vlog','onlineclass','meme','ppop','ai'],
  links:[{to:'gallery',label:'Then vs Now gallery',at:120},{to:'hall20b',label:'2020s Hall B',at:2700}]},
 {id:'hall20b',title:'2020s Hall · Money & Life',sub:'East wing',wall:'#4a4230',trim:'#f4c65b',floor:'#2e2a24',
  frames:['delivery','pantry','gcash','shopee','mlbb','axie','livesell'],
  links:[{to:'hall20a',label:'2020s Hall A',at:120}]}
];

/* ---------- image preloading ---------- */
const IMGS={};
function imgFor(id){
 const m=mediaFor(id);if(!m||!m.src)return null;
 if(IMGS[id])return IMGS[id];
 const im=new Image();im.crossOrigin='anonymous';
 im.onload=()=>{const sc=SCENES[cur];if(sc)paintScene(sc);paintThumbs();};
 im.src=m.src;IMGS[id]=im;return im;
}

/* ---------- scene painting ---------- */
function rr(x,px,py,w,h,r){x.beginPath();x.moveTo(px+r,py);x.arcTo(px+w,py,px+w,py+h,r);x.arcTo(px+w,py+h,px,py+h,r);x.arcTo(px,py+h,px,py,r);x.arcTo(px,py,px+w,py,r);x.closePath();}
function fitText(x,text,cx,y,maxW,base){
 let s=base||13;x.font='700 '+s+'px system-ui';
 while(s>9&&x.measureText(text).width>maxW){s--;x.font='700 '+s+'px system-ui';}
 let t=text;
 while(x.measureText(t).width>maxW&&t.length>4){t=t.slice(0,-2);}
 if(t!==text)t=t.trim()+'\u2026';
 x.fillText(t,cx,y);
}
function drawCover(x,img,dx,dy,dw,dh){
 const ir=img.naturalWidth/img.naturalHeight,dr=dw/dh;
 let sw,sh,sx,sy;
 if(ir>dr){sh=img.naturalHeight;sw=sh*dr;sx=(img.naturalWidth-sw)/2;sy=0;}
 else{sw=img.naturalWidth;sh=sw/dr;sx=0;sy=(img.naturalHeight-sh)/2;}
 x.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
}
function frameX(i,n){const gap=STRIP_W/(n+1);return gap*(i+1);}

function paintScene(sc){
 if(!sc.strip){sc.strip=document.createElement('canvas');sc.strip.width=STRIP_W;sc.strip.height=VH;}
 const x=sc.strip.getContext('2d');
 x.fillStyle=sc.wall;x.fillRect(0,0,STRIP_W,VH);
 // picture rail + wainscot
 x.fillStyle='rgba(0,0,0,.25)';x.fillRect(0,96,STRIP_W,8);
 x.fillStyle=sc.trim;x.fillRect(0,VH-190,STRIP_W,12);
 // floor
 x.fillStyle=sc.floor;x.fillRect(0,VH-178,STRIP_W,178);
 x.strokeStyle='rgba(0,0,0,.18)';x.lineWidth=2;
 for(let i=0;i<STRIP_W;i+=140){x.beginPath();x.moveTo(i,VH-178);x.lineTo(i-46,VH);x.stroke();}
 x.fillStyle='rgba(255,255,255,.06)';x.fillRect(0,VH-178,STRIP_W,10);
 // wall label
 x.fillStyle='rgba(255,255,255,.35)';x.font='800 22px system-ui';x.textAlign='center';
 x.fillText(sc.title.toUpperCase(),STRIP_W/2,60);
 x.font='600 14px system-ui';x.fillStyle='rgba(255,255,255,.25)';
 x.fillText('THE 2000s CALLED \u00b7 '+sc.sub.toUpperCase(),STRIP_W/2,84);

 if(sc.id==='facade'){paintFacade(x,sc);return;}
 const items=sc.frames.length?sc.frames.map(id=>({id})):sc.cmps.map(c=>({cmp:c}));
 const n=items.length;
 items.forEach((it,i)=>{
  const cx=frameX(i,n),w=250,h=170,y=150;
  // frame
  x.fillStyle='#0d1322';rr(x,cx-w/2-12,y-12,w+24,h+24,8);x.fill();
  x.fillStyle='#8a6d3b';rr(x,cx-w/2-8,y-8,w+16,h+16,6);x.fill();
  if(it.cmp){
   const c=it.cmp;
   x.fillStyle='#141c2e';x.fillRect(cx-w/2,y,w,h);
   x.font='64px serif';x.textAlign='center';
   x.fillText(em(c.a),cx-62,y+105);x.fillText(em(c.b),cx+62,y+105);
   x.fillStyle='#f4c65b';x.font='800 30px system-ui';x.fillText('\u2194',cx,y+100);
  }else{
   const img=imgFor(it.id);
   if(img&&img.complete&&img.naturalWidth){drawCover(x,img,cx-w/2,y,w,h);}
   else{x.fillStyle='#0e1a2e';x.fillRect(cx-w/2,y,w,h);
    x.font='76px serif';x.textAlign='center';x.fillText(em(it.id),cx,y+118);}
  }
  // plaque
  x.fillStyle='#0d1322';rr(x,cx-120,y+h+22,240,52,6);x.fill();
  x.fillStyle='#f4c65b';
  const label=it.cmp?it.cmp.t:shortTitle(it.id);
  fitText(x,label,cx,y+h+48,224,13);
  x.fillStyle='rgba(255,255,255,.45)';x.font='600 11px system-ui';
  const yr=it.cmp?'2000s \u2194 2020s':exData(it.id).d.year;
  x.fillText(yr,cx,y+h+66);
  // hotspot anchors (strip coords)
  it.hx=cx+w/2-4;it.hy=y+2;
 });
 sc.items=items;
 // nav doors
 sc.links.forEach(L=>{
  const dx=L.at;
  x.fillStyle='#0d1322';rr(x,dx-90,200,180,220,10);x.fill();
  x.fillStyle='rgba(244,198,91,.15)';rr(x,dx-78,212,156,196,8);x.fill();
  x.fillStyle='#f4c65b';x.font='800 15px system-ui';x.textAlign='center';
  fitText(x,L.label,dx,430,160,14);
  L.hx=dx;L.hy=200;
 });
}
function paintFacade(x,sc){
 // columns
 for(let i=0;i<6;i++){const cx=240+i*480;
  x.fillStyle='#e8e2d4';x.fillRect(cx-34,120,68,300);
  x.fillStyle='#d5cdb8';x.fillRect(cx-44,108,88,20);x.fillRect(cx-44,412,88,20);}
 // pediment sign
 x.fillStyle='#0d1322';rr(x,STRIP_W/2-330,150,660,120,10);x.fill();
 x.fillStyle='#f4c65b';x.font='800 40px system-ui';x.textAlign='center';
 x.fillText('THE 2000s CALLED',STRIP_W/2,200);
 x.fillStyle='rgba(255,255,255,.7)';x.font='600 17px system-ui';
 x.fillText('MUSEUM OF PHILIPPINE POP CULTURE \u00b7 GRAND HALL',STRIP_W/2,232);
 // big double doors at link position
 const L=sc.links[0],dx=L.at;
 x.fillStyle='#0d1322';rr(x,dx-110,180,220,260,10);x.fill();
 x.fillStyle='#5a3d1e';x.fillRect(dx-96,194,88,232);x.fillRect(dx+8,194,88,232);
 x.fillStyle='#f4c65b';x.beginPath();x.arc(dx-16,314,7,0,7);x.fill();x.beginPath();x.arc(dx+16,314,7,0,7);x.fill();
 x.fillStyle='#f4c65b';x.font='800 16px system-ui';
 fitText(x,L.label,dx,470,200,15);
 L.hx=dx;L.hy=180;
 // steps
 x.fillStyle='rgba(0,0,0,.2)';x.fillRect(0,VH-178,STRIP_W,178);
}

/* ---------- state ---------- */
let cur=0,viewX=(STRIP_W-VW)/2,targetX=viewX,auto=false,fade=0,fadeDir=0,pendingScene=-1;
let hotRects=[];
SCENES.forEach(paintScene);

function gotoScene(i){
 if(i===cur||fadeDir!==0)return;
 pendingScene=i;fadeDir=1;
}
function paintThumbs(){
 const bar=document.getElementById('tour-thumbs');if(!bar)return;
 bar.innerHTML='';
 SCENES.forEach((sc,i)=>{
  const t=document.createElement('canvas');t.width=120;t.height=60;t.className='tour-thumb'+(i===cur?' on':'');
  t.title=sc.title;
  const tx=t.getContext('2d');
  tx.drawImage(sc.strip,STRIP_W/2-480,40,960,480,0,0,120,60);
  t.addEventListener('click',()=>gotoScene(i));
  const lab=document.createElement('span');lab.textContent=sc.title;
  const wrap=document.createElement('button');wrap.className='tour-thumbwrap';wrap.appendChild(t);wrap.appendChild(lab);
  wrap.addEventListener('click',()=>gotoScene(i));
  bar.appendChild(wrap);
 });
 const on=bar.querySelectorAll('.tour-thumb');
 on.forEach((t,i)=>t.classList.toggle('on',i===cur));
}

/* ---------- render ---------- */
function draw(){
 const sc=SCENES[cur];
 g.clearRect(0,0,VW,VH);
 // smooth pan
 viewX+=(targetX-viewX)*.18;
 if(Math.abs(targetX-viewX)<.5)viewX=targetX;
 if(auto&&fadeDir===0){targetX+=.9;if(targetX>STRIP_W-VW){targetX=STRIP_W-VW;auto=false;syncAuto();}if(targetX<0)targetX=0;}
 g.drawImage(sc.strip,viewX,0,VW,VH,0,0,VW,VH);
 hotRects=[];
 // info hotspots
 (sc.items||[]).forEach(it=>{
  const sx=it.hx-viewX;
  if(sx>-40&&sx<VW+40){
   g.fillStyle='#2b9fe3';g.beginPath();g.arc(sx,it.hy,17,0,7);g.fill();
   g.fillStyle='#fff';g.beginPath();g.arc(sx,it.hy,14,0,7);g.fill();
   g.fillStyle='#2b9fe3';g.font='800 19px system-ui';g.textAlign='center';g.fillText('i',sx,it.hy+7);
   hotRects.push({x:sx-20,y:it.hy-20,w:40,h:40,it});
  }
 });
 // nav hotspots
 sc.links.forEach(L=>{
  const sx=L.hx-viewX;
  if(sx>-70&&sx<VW+70){
   g.fillStyle='#8e2f32';rr(g,sx-34,200,68,52,26);g.fill();
   g.fillStyle='#fff';g.font='800 26px system-ui';g.textAlign='center';
   const right=L.hx>STRIP_W/2;
   g.fillText(right?'\u203a':'\u2039',sx,238);
   g.font='700 12px system-ui';
   const tw=Math.min(180,g.measureText(L.label).width+18);
   g.fillStyle='rgba(10,14,24,.85)';rr(g,sx-tw/2,262,tw,24,12);g.fill();
   g.fillStyle='#fff';g.fillText(L.label,sx,279);
   hotRects.push({x:sx-38,y:196,w:76,h:92,link:L});
  }
 });
 // fade
 if(fadeDir!==0){
  fade+=fadeDir*.08;
  if(fade>=1&&pendingScene>=0){cur=pendingScene;pendingScene=-1;viewX=targetX=(STRIP_W-VW)/2;paintThumbs();syncTitle();fadeDir=-1;}
  if(fade<=0){fade=0;fadeDir=0;}
  g.fillStyle='rgba(8,12,20,'+Math.min(1,fade)+')';g.fillRect(0,0,VW,VH);
 }
}

/* ---------- input: drag to look, tap hotspots ---------- */
let pdown=false,pstartX=0,pstartView=0,pmoved=0;
cv.style.touchAction='none';
cv.addEventListener('pointerdown',e=>{pdown=true;pstartX=e.clientX;pstartView=targetX;pmoved=0;if(cv.setPointerCapture){try{cv.setPointerCapture(e.pointerId);}catch(_){}}});
cv.addEventListener('pointermove',e=>{
 if(!pdown)return;
 const dx=e.clientX-pstartX;pmoved=Math.max(pmoved,Math.abs(dx));
 targetX=Math.max(0,Math.min(STRIP_W-VW,pstartView-dx));
});
cv.addEventListener('pointerup',e=>{
 pdown=false;
 if(pmoved<8){
  const r=cv.getBoundingClientRect();
  const sx=(e.clientX-r.left)*(VW/r.width),sy=(e.clientY-r.top)*(VH/r.height);
  for(const h of hotRects){
   if(sx>=h.x&&sx<=h.x+h.w&&sy>=h.y&&sy<=h.y+h.h){
    if(h.link){const i=SCENES.findIndex(s=>s.id===h.link.to);gotoScene(i);}
    else openModal(h.it);
    break;
   }
  }
 }
});

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
   st.dataset.cleanup='1';st._cleanup=cleanup;
   if(st.scrollIntoView)st.scrollIntoView({block:'nearest',behavior:'smooth'});
  });
 }
 mbox.querySelector('.walk-x').addEventListener('click',closeModal);
}

/* ---------- chrome ---------- */
function syncTitle(){
 const t=document.getElementById('tour-title');
 if(t)t.textContent=SCENES[cur].title;
}
function syncAuto(){
 const b=document.getElementById('tour-auto');
 if(b)b.classList.toggle('on',auto);
}
function buildChrome(){
 const stage=document.querySelector('.walk-stage');if(!stage)return;
 // hide old touch controls from the top-down version
 const touch=document.querySelector('.walk-touch');if(touch)touch.style.display='none';
 const hint=document.querySelector('.walk-hint');
 if(hint)hint.textContent='Drag to look around \u00b7 Tap the blue i for a plaque \u00b7 Tap a chevron to walk to the next room';
 // title
 const title=document.createElement('div');title.id='tour-title';title.className='tour-title';
 stage.appendChild(title);
 // thumbs
 const thumbs=document.createElement('div');thumbs.id='tour-thumbs';thumbs.className='tour-thumbs';
 stage.appendChild(thumbs);
 // controls
 const ctl=document.createElement('div');ctl.className='tour-ctl';
 ctl.innerHTML='<button id="tour-auto" class="tour-btn" title="Auto-look" aria-label="Auto-look">\u27f3</button>'
  +'<button id="tour-full" class="tour-btn" title="Fullscreen" aria-label="Fullscreen">\u26f6</button>';
 stage.appendChild(ctl);
 document.getElementById('tour-auto').addEventListener('click',()=>{auto=!auto;syncAuto();});
 document.getElementById('tour-full').addEventListener('click',()=>{
  if(document.fullscreenElement)document.exitFullscreen();
  else stage.requestFullscreen&&stage.requestFullscreen();
 });
 // splash
 const sp=document.createElement('div');sp.id='tour-splash';sp.className='tour-splash';
 sp.innerHTML='<div class="tour-splash-card"><p class="kicker">The 2000s Called</p>'
  +'<h2>THE GRAND HALL</h2>'
  +'<p class="tour-legend"><span>\u{1f441}\uFE0f Drag to look around</span><span>\u2139\uFE0f Tap blue badges for plaques</span><span>\u203a Tap chevrons to walk</span></p>'
  +'<button class="mini-again tour-enter" id="tour-enter">Enter the hall</button></div>';
 stage.appendChild(sp);
 document.getElementById('tour-enter').addEventListener('click',()=>{sp.classList.add('off');setTimeout(()=>sp.remove(),450);});
 syncTitle();syncAuto();paintThumbs();
}

/* ---------- go ---------- */
buildChrome();
updateWalkBadge();
(function loop(){
 requestAnimationFrame(loop);
 if(!modalOpen)draw();
})();
})();
