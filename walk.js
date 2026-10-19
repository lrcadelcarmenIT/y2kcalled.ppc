/* The Grand Hall: walkable museum, both decades + comparison gallery */
(function(){
'use strict';
const cv=document.getElementById('walk-canvas');
if(!cv)return;
const g=cv.getContext('2d');
const W=960,H=600;

/* ---------- data ---------- */
const EX00=window.EXHIBITS00||{};
const GAMES=window.GAMESALL||{};
const EX20=window.EXHIBITS20||{};
function exData(id){return EX20[id]?{d:EX20[id],dec:'2020s'}:{d:EX00[id],dec:'2000s'};}
const EMOJI00={y2k:'\u{1f4bb}',sms:'\u{1f4ac}',friendster:'\u{1f465}',ofw:'\u2708\uFE0F',bpo:'\u{1f3a7}',meteor:'\u{1f4fa}',boxing:'\u{1f94a}',mall:'\u{1f6cd}\uFE0F',cafe:'\u{1f5a5}\uFE0F',load:'\u{1f4b8}',camera:'\u{1f4f7}',cameraphone:'\u{1f933}',socialgames:'\u{1f69c}',smartphone:'\u{1f4f1}'};
function em(id){const{d,dec}=exData(id);return dec==='2020s'?d.emoji:(EMOJI00[id]||'\u{1f5bf}');}
function thenNowHTML(d){
 if(d.thenNow)return `<b>Then vs now:</b> ${d.thenNow}`;
 if(d.then||d.now)return `<b>Then:</b> ${d.then||''}<br><b>Now:</b> ${d.now||''}`;
 return '';
}
function sourceHTML(d){
 if(d.url)return `<p><a href="${d.url}" target="_blank" rel="noopener">Source</a></p>`;
 if(d.sources&&d.sources[0])return `<p><a href="${d.sources[0][1]}" target="_blank" rel="noopener">${d.sources[0][0]}</a></p>`;
 return '';
}

const WING00=[
{room:'Technology & Connection',ids:['y2k','friendster','sms','load','camera']},
 {room:'Global Links',ids:['ofw','bpo','mall','cameraphone','cafe']},
 {room:'Shared Spaces',ids:['boxing','meteor','socialgames','smartphone']}
];
const WING20=[
 {room:'Screens & Streams',ids:['tiktok','streaming','vlog','onlineclass','meme']},
 {room:'Money & Play',ids:['gcash','shopee','mlbb','axie','livesell']},
 {room:'Life, Remixed',ids:['delivery','pantry','ppop','ai']}
];
const COMPARE=[
 {a:'load',b:'gcash',t:'Passing value, hand to hand',n:'2003: pasaload moved pesos through text. 2020s: e-wallets move millions through QR codes. Same trust, new rails.'},
 {a:'friendster',b:'tiktok',t:'The profile becomes the feed',n:'2004: your Top 8 friends defined you. 2020s: the For You Page defines what you see. From profiles to streams.'},
 {a:'mall',b:'shopee',t:'The mall fits in your pocket',n:'2000s: the aircon mall was the weekend. 2020s: the 11:11 sale is the weekend, and the mall delivers to your gate.'},
 {a:'cafe',b:'onlineclass',t:'The rented hour',n:'2000s: you rented a computer by the hour. 2020s: the computer moved into your room, and class followed.'},
 {a:'boxing',b:'mlbb',t:'Fight night becomes game night',n:'2000s: the whole barangay watched Pacquiao. 2020s: millions watch MLBB world championships. Same pride, new arena.'},
 {a:'camera',b:'vlog',t:'From camera to creator',n:'2000s: the digicam captured the trip. 2020s: the camera is the job. Everyone films, everyone posts.'}
];

/* ---------- map ---------- */
const walls=[];
function wall(x,y,w,h){walls.push({x,y,w,h});}
wall(80,340,580,40);wall(80,620,580,40);wall(80,340,40,320);
wall(620,380,40,80);wall(620,540,40,80);
wall(620,340,120,40);wall(860,340,120,40);
wall(700,340,40,80);wall(860,340,40,80);
wall(620,620,360,40);
wall(980,380,40,80);wall(980,540,40,80);
wall(940,340,580,40);wall(940,620,580,40);wall(1480,340,40,320);
wall(580,80,440,40);wall(580,80,40,260);wall(980,80,40,260);

const pedestals=[];
function ped(x,y,id){pedestals.push({x,y,id,r:22});}
WING00.forEach((cl,ci)=>{
 const y=[445,505,565][ci],xs=ci<2?[170,250,330,410,490]:[210,310,410,510];
 cl.ids.forEach((id,i)=>ped(xs[i],y,id));
});
WING20.forEach((cl,ci)=>{
 const y=[445,505,565][ci],xs=ci<2?[1050,1130,1210,1290,1370]:[1090,1190,1290,1390];
 cl.ids.forEach((id,i)=>ped(xs[i],y,id));
});
COMPARE.forEach((c,i)=>{pedestals.push({x:[710,800,890][i%3],y:i<3?190:280,cmp:c,r:24});});
pedestals.push({x:800,y:560,dir:true,r:24});

const plants=[[150,410],[590,590],[1010,410],[1450,590],[650,150],[950,310],[740,560],[860,560]];
const WORLD={w:1600,h:1000};

/* ---------- player ---------- */
const P={x:800,y:500,r:13,spd:3.4,face:1};
const keys={};
window.addEventListener('keydown',e=>{
 if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' '].includes(e.key))e.preventDefault();
 keys[e.key.toLowerCase()]=true;
 if((e.key==='e'||e.key==='E')&&near&&!modalOpen)openModal(near);
});
window.addEventListener('keyup',e=>{keys[e.key.toLowerCase()]=false;});

function collide(nx,ny){
 for(const w of walls){
  const cx=Math.max(w.x,Math.min(nx,w.x+w.w)),cy=Math.max(w.y,Math.min(ny,w.y+w.h));
  if((nx-cx)*(nx-cx)+(ny-cy)*(ny-cy)<P.r*P.r)return true;
 }
 return false;
}
function move(dx,dy){
 const nx=P.x+dx;
 if(!collide(nx,P.y))P.x=Math.max(20,Math.min(WORLD.w-20,nx));
 const ny=P.y+dy;
 if(!collide(P.x,ny))P.y=Math.max(20,Math.min(WORLD.h-20,ny));
 if(dx)P.face=dx>0?1:-1;
}

/* joystick */
let joy={on:false,id:null,sx:0,sy:0,dx:0,dy:0};
const joyZone=document.getElementById('walk-joy'),joyKnob=document.getElementById('walk-knob');
if(joyZone){
 joyZone.addEventListener('touchstart',e=>{const t=e.changedTouches[0];joy.on=true;joy.id=t.identifier;joy.sx=t.clientX;joy.sy=t.clientY;joy.dx=0;joy.dy=0;e.preventDefault();},{passive:false});
 window.addEventListener('touchmove',e=>{
  for(const t of e.changedTouches){if(joy.on&&t.identifier===joy.id){
   joy.dx=Math.max(-40,Math.min(40,t.clientX-joy.sx));joy.dy=Math.max(-40,Math.min(40,t.clientY-joy.sy));
   joyKnob.style.transform=`translate(${joy.dx}px,${joy.dy}px)`;}}
 },{passive:true});
 window.addEventListener('touchend',e=>{for(const t of e.changedTouches){if(t.identifier===joy.id){joy.on=false;joy.dx=0;joy.dy=0;joyKnob.style.transform='';}}});
}

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

/* ---------- modal ---------- */
const modal=document.getElementById('walk-modal'),mbox=document.getElementById('walk-mbox');
let modalOpen=false,near=null;
function closeModal(){modalOpen=false;modal.hidden=true;mbox.innerHTML='';}
modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});

function openModal(p){
 modalOpen=true;modal.hidden=false;
 if(p.dir){
  mbox.innerHTML=`<button class="walk-x" aria-label="Close">\u00d7</button>
   <h3>\u{1f5fa} Grand Hall Directory</h3>
   <p><b>West wing:</b> the 2000s, three rooms (Technology &amp; Connection, Global Links, Shared Spaces), 14 exhibits.</p>
   <p><b>East wing:</b> the 2020s, three rooms (Screens &amp; Streams, Money &amp; Play, Life Remixed), 14 exhibits.</p>
   <p><b>North gallery:</b> Then \u2194 Now, 6 comparison pedestals pairing a 2000s icon with its 2020s heir.</p>
   <p style="color:#b9c8ca">Walk up to a pedestal and press E to read its plaque. Play its mini-game to earn the stamp.</p>`;
 }else if(p.cmp){
  const c=p.cmp,a=exData(c.a),b=exData(c.b);
  mbox.innerHTML=`<button class="walk-x" aria-label="Close">\u00d7</button>
   <p class="walk-kick">THEN \u2194 NOW</p>
   <h3>${c.t}</h3>
   <div class="walk-cmp">
    <div><p class="walk-kick">2000s</p><p><b>${a.d.title}</b> (${a.d.year})</p><p>${a.d.body.split('.')[0]}.</p></div>
    <div><p class="walk-kick">2020s</p><p><b>${b.d.title}</b> (${b.d.year})</p><p>${b.d.body.split('.')[0]}.</p></div>
   </div>
   <p class="walk-tn"><b>The bridge:</b> ${c.n}</p>`;
 }else{
  const{id}=p,{d,dec}=exData(id);
  const stamped=hasStamp(id);
  mbox.innerHTML=`<button class="walk-x" aria-label="Close">\u00d7</button>
   <p class="walk-kick">${dec} \u00b7 ${d.year}</p>
   <h3>${em(id)} ${d.title}</h3>
   <p>${d.body}</p>
   <p class="walk-tn">${thenNowHTML(d)}</p>
   ${sourceHTML(d)}
   <div class="walk-actions">
    <button class="mini-again" id="walk-play">${stamped?'\u2713 Stamped \u2014 play again':'\u25b6 Play the mini-game'}</button>
   </div>
   <div id="walk-stage"></div>`;
  mbox.querySelector('#walk-play').addEventListener('click',()=>{
   const st=mbox.querySelector('#walk-stage');
   const spec=GAMES[d.game]();
   st.innerHTML=`<h4 style="margin:14px 0 4px">${spec.title}</h4><p style="color:#b9c8ca">${spec.intro}</p><div class="mini-stage" id="walk-mini"></div><p id="walk-res" style="min-height:24px;font-weight:700"></p>`;
   const res=st.querySelector('#walk-res');
   spec.render(st.querySelector('#walk-mini'),{
    win:m=>{res.textContent=m;const fresh=awardStamp(id);if(fresh){res.textContent+=' \u2014 stamp earned!';}mbox.querySelector('#walk-play').textContent='\u2713 Stamped \u2014 play again';},
    lose:m=>{res.textContent=m;}
   });
   st.scrollIntoView({block:'nearest',behavior:'smooth'});
  });
 }
 mbox.querySelector('.walk-x').addEventListener('click',closeModal);
}
const actBtn=document.getElementById('walk-act');
if(actBtn)actBtn.addEventListener('click',()=>{if(near&&!modalOpen)openModal(near);});

/* ---------- render ---------- */
let cam={x:0,y:0};
function draw(){
 // camera
 cam.x=Math.max(0,Math.min(WORLD.w-W,P.x-W/2));
 cam.y=Math.max(0,Math.min(WORLD.h-H,P.y-H/2));
 g.save();g.translate(-cam.x,-cam.y);
 // floors
 const floorCols=[
  {x:120,y:380,w:500,h:240,c:'#31405e'},
  {x:620,y:380,w:360,h:240,c:'#4a4030'},
  {x:980,y:380,w:500,h:240,c:'#5e5231'},
  {x:620,y:120,w:360,h:220,c:'#3d4451'}
 ];
 floorCols.forEach(f=>{g.fillStyle=f.c;g.fillRect(f.x,f.y,f.w,f.h);});
 // corridor floor
 g.fillStyle='#4a4030';g.fillRect(740,340,120,40);
 // room labels
 g.fillStyle='rgba(255,255,255,.55)';g.font='700 15px system-ui';g.textAlign='center';
 g.fillText('2000s WING',370,404);
 g.fillText('2020s WING',1230,404);
 g.fillText('THEN \u2194 NOW GALLERY',800,144);
 g.font='600 11px system-ui';g.fillStyle='rgba(255,255,255,.4)';
 WING00.forEach((cl,ci)=>g.fillText(cl.room.toUpperCase(),370,[445,505,565][ci]-32));
 WING20.forEach((cl,ci)=>g.fillText(cl.room.toUpperCase(),1230,[445,505,565][ci]-32));
 // entrance doors
 g.fillStyle='#1a2436';g.fillRect(740,620,120,12);
 g.fillStyle='rgba(255,255,255,.5)';g.font='700 13px system-ui';g.fillText('ENTRANCE',800,648);
 // walls
 walls.forEach(w=>{g.fillStyle='#141c2e';g.fillRect(w.x,w.y,w.w,w.h);
  g.fillStyle='#232f4a';g.fillRect(w.x,w.y,w.w,6);});
 // plants
 g.font='26px serif';g.textAlign='center';
 plants.forEach(p=>g.fillText('\u{1fab4}',p[0],p[1]));
 // pedestals
 pedestals.forEach(p=>{
  const isNear=p===near;
  g.fillStyle=isNear?'#f4c65b':'#6b7a99';
  g.beginPath();g.arc(p.x,p.y,p.r,0,7);g.fill();
  g.fillStyle='#141c2e';g.beginPath();g.arc(p.x,p.y,p.r-5,0,7);g.fill();
  g.font='20px serif';
  let emIcon='\u{1f5fa}';
  if(p.cmp)emIcon='\u2194';
  else emIcon=em(p.id);
  g.fillText(emIcon,p.x,p.y+7);
  if(isNear){const label=p.dir?'DIRECTORY':(p.cmp?'THEN \u2194 NOW':exData(p.id).d.title);
   g.font='700 12px system-ui';const tw=g.measureText(label).width;
   g.fillStyle='rgba(10,14,24,.88)';g.beginPath();
   if(g.roundRect)g.roundRect(p.x-tw/2-9,p.y-p.r-30,tw+18,22,11);else g.rect(p.x-tw/2-9,p.y-p.r-30,tw+18,22);
   g.fill();g.fillStyle='#fff';g.fillText(label,p.x,p.y-p.r-13);}
 });
 // player
 g.font='30px serif';
 g.save();g.translate(P.x,P.y);g.scale(P.face,1);g.fillText('\u{1f6b6}',0,10);g.restore();
 // shadow
 g.restore();
 // vignette prompt
 if(near&&!modalOpen){
  g.fillStyle='rgba(10,14,24,.75)';g.fillRect(W/2-130,H-56,260,40);
  g.fillStyle='#fff';g.font='700 14px system-ui';g.textAlign='center';
  g.fillText('Press E / tap the pedestal',W/2,H-30);
 }
}

/* ---------- loop ---------- */
let last=0;
function frame(t){
 requestAnimationFrame(frame);
 if(modalOpen)return;
 const dt=Math.min(50,t-last);last=t;
 const k=dt/16.7;
 let dx=0,dy=0;
 if(keys['a']||keys['arrowleft'])dx-=1;
 if(keys['d']||keys['arrowright'])dx+=1;
 if(keys['w']||keys['arrowup'])dy-=1;
 if(keys['s']||keys['arrowdown'])dy+=1;
 if(joy.on&&(Math.abs(joy.dx)>6||Math.abs(joy.dy)>6)){dx=joy.dx/40;dy=joy.dy/40;}
 if(dx||dy){const m=Math.hypot(dx,dy);move(dx/m*P.spd*k,dy/m*P.spd*k);}
 // nearest pedestal
 near=null;let best=80;
 pedestals.forEach(p=>{const d=Math.hypot(P.x-p.x,P.y-p.y);if(d<best){best=d;near=p;}});
 draw();
}
updateWalkBadge();
requestAnimationFrame(frame);
cv.addEventListener('click',e=>{
 if(near&&!modalOpen){
  const r=cv.getBoundingClientRect();
  const wx=(e.clientX-r.left)*(W/r.width)+cam.x,wy=(e.clientY-r.top)*(H/r.height)+cam.y;
  if(Math.hypot(wx-near.x,wy-near.y)<60)openModal(near);
 }
});
})();
