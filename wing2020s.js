/* ============================================================
   wing2020s.js — The 2020s wing ("Scrolls, Streams & Side Hustles")
   Loads BEFORE museum.js on 2020s pages and on the lobby.
   Provides: decade data hooks, i18n, quiz, 14 mini-games,
   3 arcade games, 10 sounds, photo booth filters, smartphone.
   Exhibit copy (EXHIBITS20/ROOMS20/LENSES20) is appended below.
   ============================================================ */
(function(){
'use strict';
const D20=(window.MUSEUM_DECADE==='2020s');
if(D20)document.body.classList.add('d2020s');
window.PB_DEFAULT='fyp';
if(document.getElementById('phone-screen'))window.COMBINED_STAMPS=true;

/* ---------------- i18n overrides for 2020s pages ---------------- */
window.T20={
 'quiz-title':['Which 2020s icon are you?','Anong 2020s icon ka?'],
 'quiz-sub':['Answer 5 quick questions. We will match you to the exhibit that raised you, then generate a shareable ID card.','Sagutin ang 5 mabilis na tanong. Itutugma ka namin sa exhibit na nagpalaki sa iyo, at gagawa kami ng ID card na puwede mong i-share.'],
 'pg-sub':['Remix yourself into the 2020s, then press play on its sounds.','I-remix ang sarili mo sa 2020s, tapos i-play ang mga tunog nito.'],
 'pb-title':['\ud83d\udcf8 2020s photo booth','\ud83d\udcf8 Photo booth ng 2020s'],
 'pb-sub':['Upload a photo and get it back the 2024 way: vertical, captioned, story-ready.','Mag-upload ng litrato at ibabalik namin itong 2024-style: vertical, may caption, pang-story.'],
 'sb20-gcash':['GCash chime','GCash chime'],
 'sb20-tiktok':['TikTok notif','TikTok notif'],
 'sb20-shopee':['Shopee notif','Shopee notif'],
 'sb20-ml':['ML victory','ML victory'],
 'sb20-msg':['Messenger pop','Messenger pop'],
 'sb20-tritone':['iPhone tri-tone','iPhone tri-tone'],
 'sb20-grab':['Grab alert','Grab alert'],
 'sb20-zoom':['Zoom join','Zoom join'],
 'sb20-discord':['Discord blip','Discord blip'],
 'sb20-cashin':['Cash-in confirmed','Cash-in confirmed']
};

/* ---------------- Quiz: which 2020s icon are you? ---------------- */
window.ARCH20={
 tiktok:{n:['The Scroller','Ang Scroller'],ex:'tiktok'},
 mlbb:{n:['The Mythic Grinder','Ang Mythic Grinder'],ex:'mlbb'},
 ppop:{n:['The P-pop Stan','Ang P-pop Stan'],ex:'ppop'},
 gcash:{n:['The Cashless','Ang Cashless'],ex:'gcash'},
 shopee:{n:['The Budol Buyer','Ang Budol Buyer'],ex:'shopee'},
 streaming:{n:['The Binge Watcher','Ang Binge Watcher'],ex:'streaming'},
 vlog:{n:['The Vlogger','Ang Vlogger'],ex:'vlog'},
 onlineclass:{n:['The Muted Mic','Ang Naka-mute'],ex:'onlineclass'},
 pantry:{n:['The Pantry Sharer','Ang Namimigay'],ex:'pantry'},
 delivery:{n:['The Rider','Ang Rider'],ex:'delivery'},
 livesell:{n:['The Live Seller','Ang Live Seller'],ex:'livesell'},
 meme:{n:['The Meme Lord','Ang Meme Lord'],ex:'meme'},
 axie:{n:['The Axie Scholar','Ang Axie Scholar'],ex:'axie'},
 ai:{n:['The Prompt Whisperer','Ang Prompt Whisperer'],ex:'ai'}
};
window.PQQ20=[
 {q:['It\u2019s Friday night in 2024. Where are you?','Biyernes ng gabi, 2024. Nasaan ka?'],o:[
  ['Deep in the FYP, phone an inch from my face','Lubog sa FYP, isang dangkal ang phone sa mukha','tiktok'],
  ['Ranked grind with the squad, mic open','Ranked grind kasama ang squad, bukas ang mic','mlbb'],
  ['Front row of a P-pop concert, lightstick up','Front row ng P-pop concert, taas ang lightstick','ppop'],
  ['Refreshing a Shopee parcel tracker','Ni-re-refresh ang Shopee parcel tracker','shopee']]},
 {q:['Your e-wallet just beeped. What happened?','Tumunog ang e-wallet mo. Ano ang nangyari?'],o:[
  ['Sahod just landed. Bills can wait one scroll.','Dumating ang sahod. Mamaya na ang bills, scroll muna.','gcash'],
  ['A friend paid back a utang, no follow-up needed','Nagbayad ang kaibigan ng utang, walang singilan','gcash'],
  ['11:11 checkout went through. Budol complete.','Pumasok ang 11:11 checkout. Budol complete.','shopee'],
  ['Someone sent ayuda through the app','May nagpadala ng ayuda sa app','pantry']]},
 {q:['Pick a side hustle:','Pumili ng side hustle:'],o:[
  ['Live selling: "mine" in the comments, go!','Live selling: "mine" sa comments, go!','livesell'],
  ['Vlogging my everyday life','Vlog ng araw-araw kong buhay','vlog'],
  ['Grinding Axies for the daily quota','Grind ng Axies para sa daily quota','axie'],
  ['Rider life: GrabFood, rain or shine','Buhay rider: GrabFood, ulan o araw','delivery']]},
 {q:['Online class is starting. You are...','Magsisimula na ang online class. Ikaw ay...'],o:[
  ['Camera off, mic muted, present in spirit','Patay ang camera, mute ang mic, present sa diwa','onlineclass'],
  ['Asking "ma\u2019am, can you hear me?" on loop','Paulit-ulit na "ma\u2019am, naririnig niyo po ba ako?"','onlineclass'],
  ['Half-listening while editing a TikTok','Nakikinig nang bahagya habang nag-e-edit ng TikTok','tiktok'],
  ['Watching a K-drama in another tab','Nanunuod ng K-drama sa kabilang tab','streaming']]},
 {q:['Your group chat is blowing up. It\u2019s...','Sabog ang group chat. Ito ay...'],o:[
  ['A meme thread, 40 unread and counting','Thread ng memes, 40 unread na','meme'],
  ['Plotting a watch party for the new episode','Nagpaplano ng watch party para sa bagong episode','streaming'],
  ['Arguing about the best AI prompt','Nagtatalo tungkol sa pinakamagandang AI prompt','ai'],
  ['Coordinating who brings what to the pantry','Nag-uusap kung sinong magdadala sa pantry','pantry']]}
];
})();

/* ---------------- 14 exhibit mini-games ---------------- */
window.GAMES20={
tiktok(){return{title:'Stop the Scroll',
 intro:'Videos fly past. Hit STOP only when the \u{1F3AC} clapper appears. Catch 5, miss 3 and the algorithm wins.',
 render(el,{win,lose}){
  const pool=['\u{1F57A}','\u{1F957}','\u{1F3A4}','\u{1F4F1}','\u{1F3AC}','\u{1F60E}','\u{1F4A5}','\u{1F3B6}'];
  el.innerHTML=`<div style="font-size:4rem;text-align:center;min-height:110px" id="tt-show">\u{1F4F1}</div>
   <div style="text-align:center;margin-top:10px"><button class="mini-again" id="tt-stop">STOP</button></div>
   <p style="text-align:center;color:#b9c8ca" id="tt-msg">Caught 0/5 \u00b7 Misses 0/3</p>`;
  const show=el.querySelector('#tt-show'),msg=el.querySelector('#tt-msg'),btn=el.querySelector('#tt-stop');
  let caught=0,miss=0,tm=null,done=false;
  const tick=()=>{show.textContent=pool[Math.floor(Math.random()*pool.length)];};
  const end=(ok,m)=>{done=true;clearInterval(tm);btn.disabled=true;ok?win(m):lose(m);};
  tm=setInterval(tick,420);tick();
  btn.addEventListener('click',()=>{
   if(done)return;
   if(show.textContent==='\u{1F3AC}'){caught++;if(caught>=5){end(true,'FYP tamed! 5 clappers caught. The algorithm respects you.');return;}}
   else{miss++;if(miss>=3){end(false,'The algorithm wins. Too many random stops.');return;}}
   msg.textContent=`Caught ${caught}/5 \u00b7 Misses ${miss}/3`;
  });
 }}},

mlbb(){return{title:'Turret Rush',
 intro:'The enemy turret is exposed. Tap it 20 times in 10 seconds to take it down.',
 render(el,{win,lose}){
  el.innerHTML=`<div style="text-align:center"><button id="ml-turret" style="font-size:4.5rem;background:none;border:3px solid #0e1a2e;border-radius:16px;padding:18px 30px;cursor:pointer">\u{1F5FC}</button>
   <p style="color:#b9c8ca" id="ml-msg">Hits 0/20 \u00b7 <b id="ml-t">10</b>s left</p></div>`;
  const tur=el.querySelector('#ml-turret'),msg=el.querySelector('#ml-msg'),tEl=el.querySelector('#ml-t');
  let hits=0,left=10,done=false;
  const tm=setInterval(()=>{left--;tEl.textContent=left;
   if(left<=0){clearInterval(tm);done=true;tur.disabled=true;hits>=20?win('Turret destroyed! Your team pushes to victory.'):lose(`Time! ${hits}/20 hits. The turret stands.`);}},1000);
  tur.addEventListener('click',()=>{if(done)return;hits++;msg.firstChild.textContent=`Hits ${hits}/20 \u00b7 `;
   tur.style.transform='scale(.92)';setTimeout(()=>tur.style.transform='',90);
   if(hits>=20){clearInterval(tm);done=true;tur.disabled=true;win('Turret destroyed! Your team pushes to victory.');}});
 }}},

ppop(){return{title:'Lightstick Beat',
 intro:'Watch the lightsticks flash, then repeat the pattern. 3 rounds to light up the arena.',
 render(el,{win,lose}){
  const cols=['#e2574c','#2b9fe3','#f4c65b','#3fae6b'];
  el.innerHTML=`<div style="display:flex;gap:12px;justify-content:center;margin:10px 0" id="pp-pads">${cols.map((c,i)=>`<button data-i="${i}" style="width:64px;height:64px;border-radius:50%;background:${c};border:3px solid #0e1a2e;opacity:.45;cursor:pointer" aria-label="pad ${i+1}"></button>`).join('')}</div>
   <p style="text-align:center;color:#b9c8ca" id="pp-msg">Watch\u2026</p>`;
  const pads=[...el.querySelectorAll('#pp-pads button')],msg=el.querySelector('#pp-msg');
  let round=0,seq=[],pos=0,accept=false,done=false;
  const flash=i=>{pads[i].style.opacity=1;setTimeout(()=>pads[i].style.opacity=.45,320);};
  const playSeq=()=>{accept=false;pos=0;msg.textContent='Watch\u2026';let k=0;
   const iv=setInterval(()=>{flash(seq[k]);k++;if(k>=seq.length){clearInterval(iv);accept=true;msg.textContent='Your turn!';}},650);};
  const nextRound=()=>{round++;if(round>3){done=true;win('Encore! You nailed all 3 patterns. The arena glows.');return;}
   seq=Array.from({length:round+2},()=>Math.floor(Math.random()*4));setTimeout(playSeq,700);};
  pads.forEach(p=>p.addEventListener('click',()=>{
   if(done||!accept)return;const i=Number(p.dataset.i);flash(i);
   if(i===seq[pos]){pos++;if(pos>=seq.length){accept=false;msg.textContent='Nailed it!';setTimeout(nextRound,700);}}
   else{done=true;accept=false;lose('Wrong beat. The lightsticks dim.');}
  }));
  nextRound();
 }}},

gcash(){return{title:'Exact Padala',
 intro:'Send load to 5 friends. Tap peso buttons to match each amount exactly. Overshooting costs you.',
 render(el,{win,lose}){
  const denoms=[1,5,10,20,50,100];
  const targets=[17,42,88,135,263];
  el.innerHTML=`<p style="text-align:center;color:#b9c8ca">Send <b id="gc-t" style="color:#f4c65b"></b> \u00b7 Friend <b id="gc-n">1</b>/5 \u00b7 Tray <b id="gc-tray">\u20B10</b></p>
   <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap" id="gc-pad">${denoms.map(d=>`<button class="mini-again" data-v="${d}">\u20B1${d}</button>`).join('')}</div>
   <div style="text-align:center;margin-top:12px;display:flex;gap:8px;justify-content:center"><button class="mini-again" id="gc-send">Send</button><button class="mini-again" id="gc-clear">Clear</button></div>
   <p style="text-align:center;color:#b9c8ca" id="gc-msg"></p>`;
  const q=s=>el.querySelector(s);let r=0,tray=0,done=false;
  const show=()=>{q('#gc-t').textContent='\u20B1'+targets[r];q('#gc-n').textContent=r+1;q('#gc-tray').textContent='\u20B1'+tray;};
  show();
  q('#gc-pad').addEventListener('click',e=>{const b=e.target.closest('button');if(!b||done)return;tray+=Number(b.dataset.v);q('#gc-tray').textContent='\u20B1'+tray;});
  q('#gc-clear').addEventListener('click',()=>{if(done)return;tray=0;show();});
  q('#gc-send').addEventListener('click',()=>{
   if(done)return;
   if(tray===targets[r]){r++;tray=0;
    if(r>=5){done=true;win('All 5 padalas sent. Nobody is on "seen" tonight.');return;}
    q('#gc-msg').textContent='Sent! Next friend.';show();}
   else{done=true;lose(`Wrong amount! Needed \u20B1${targets[r]}, tray had \u20B1${tray}.`);}
  });
 }}},

shopee(){return{title:'Voucher Hunt',
 intro:'9 vouchers, 3 real ones. Tap all 3 real vouchers. One fake and the sale ends.',
 render(el,{win,lose}){
  const tiles=['\u{1F39F} 50% OFF','\u{1F39F} FREE SHIPPING','\u{1F6AB} -100% SCAM','\u{1F39F} \u20B1200 OFF','\u{1F6AB} CLICK TO WIN','\u{1F39F} 11:11 DEAL','\u{1F6AB} FREE* (not free)','\u{1F39F} COD OK','\u{1F6AB} SEND LOAD FIRST'];
  const real=[0,1,3,5,7];
  const order=[...tiles.keys()].sort(()=>Math.random()-.5);
  el.innerHTML=`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px" id="sp-grid">${order.map(i=>`<button class="mini-again" data-r="${real.includes(i)?1:0}" style="font-size:.8rem;padding:14px 6px">${tiles[i]}</button>`).join('')}</div>
   <p style="text-align:center;color:#b9c8ca" id="sp-msg">Found 0/3 real vouchers</p>`;
  const msg=el.querySelector('#sp-msg');let found=0,done=false;
  el.querySelectorAll('#sp-grid button').forEach(b=>b.addEventListener('click',()=>{
   if(done||b.disabled)return;b.disabled=true;
   if(b.dataset.r==='1'){b.style.background='#3fae6b';found++;msg.textContent=`Found ${found}/3 real vouchers`;
    if(found>=3){done=true;setTimeout(()=>win('Checkout complete! 3 real vouchers stacked.'),350);}}
   else{b.style.background='#e2574c';done=true;lose('Fake voucher! That "deal" just wanted your load.');}
  }));
 }}},

streaming(){return{title:'Skip the Intro',
 intro:'The intro is 30 seconds long. Press SKIP only while the marker is inside the gold zone. 3 episodes.',
 render(el,{win,lose}){
  el.innerHTML=`<div style="position:relative;height:34px;background:#0e1a2e;border-radius:17px;overflow:hidden" id="st-bar">
    <div id="st-zone" style="position:absolute;top:0;bottom:0;background:rgba(244,198,91,.6)"></div>
    <div id="st-mark" style="position:absolute;top:0;bottom:0;width:6px;background:#fff"></div></div>
   <div style="text-align:center;margin-top:12px"><button class="mini-again" id="st-skip">SKIP INTRO</button></div>
   <p style="text-align:center;color:#b9c8ca" id="st-msg">Episode 1/3</p>`;
  const zone=el.querySelector('#st-zone'),mark=el.querySelector('#st-mark'),msg=el.querySelector('#st-msg'),btn=el.querySelector('#st-skip');
  let ep=0,pos=0,dir=1,z0=0,zw=0,tm=null,done=false;
  const newEp=()=>{ep++;if(ep>3){done=true;clearInterval(tm);win('Binged! 3 intros skipped, zero theme songs harmed.');return;}
   z0=20+Math.random()*50;zw=12+Math.random()*10;pos=0;dir=1;
   zone.style.left=z0+'%';zone.style.width=zw+'%';msg.textContent=`Episode ${ep}/3`;};
  tm=setInterval(()=>{pos+=dir*2.2;if(pos>=100){pos=100;dir=-1}if(pos<=0){pos=0;dir=1}mark.style.left=pos+'%';},40);
  btn.addEventListener('click',()=>{if(done)return;
   if(pos>=z0&&pos<=z0+zw){msg.textContent='Skipped!';setTimeout(newEp,500);}else{done=true;clearInterval(tm);lose('Too early! Now you are watching the intro again.');}});
  newEp();
 }}},

vlog(){return{title:'Thumbnail Pick',
 intro:'5 rounds. Each round shows 3 thumbnails. Click the one a real vlogger would post: red arrow plus shocked face.',
 render(el,{win,lose}){
  const good=['\u{1F640} \u{1F534} ARROW','YOU WON\u2019T BELIEVE \u{1F534}','\u{1F631}\u{1F534} GONE WRONG'];
  const bad=['my day \u{1F4DD}','vlog #214 \u{1F3A5}','a quiet morning \u{1F331}'];
  let r=0,done=false;
  const round=()=>{r++;if(r>5){done=true;win('Viral! 5 thumbnails picked. The algorithm approves.');return;}
   const g=good[Math.floor(Math.random()*good.length)];
   const opts=[g,bad[Math.floor(Math.random()*bad.length)],bad[(Math.floor(Math.random()*bad.length)+1)%bad.length]].sort(()=>Math.random()-.5);
   el.innerHTML=`<p style="text-align:center;color:#b9c8ca">Round ${r}/5: pick the clickbait</p>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">${opts.map(o=>`<button class="mini-again" data-g="${o===g?1:0}" style="font-size:1rem;padding:20px 14px;min-width:130px">${o}</button>`).join('')}</div>`;
   el.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
    if(done)return;
    if(b.dataset.g==='1'){setTimeout(round,300);}else{done=true;lose('Nobody clicked that. 12 views, 11 from your mom.');}
   }));};
  round();
 }}},

onlineclass(){return{title:'Unmute!',
 intro:'The teacher calls 10 names. Tap UNMUTE only when YOUR name is called. 2 wrong unmutes and you are "the noisy one".',
 render(el,{win,lose}){
  const names=['Bianca','Marco','Aira','Joshua','Liza','Rico','Sofia','Enzo','Mika'];
  const calls=[];for(let i=0;i<10;i++){calls.push(Math.random()<.35?'Christian':names[Math.floor(Math.random()*names.length)]);}
  el.innerHTML=`<div style="font-size:1.6rem;text-align:center;min-height:60px;font-weight:800" id="oc-name">\u2026</div>
   <div style="text-align:center"><button class="mini-again" id="oc-btn">\u{1F507} UNMUTE</button></div>
   <p style="text-align:center;color:#b9c8ca" id="oc-msg">Calls 0/10 \u00b7 Mistakes 0/2</p>`;
  const nm=el.querySelector('#oc-name'),msg=el.querySelector('#oc-msg'),btn=el.querySelector('#oc-btn');
  let i=0,mist=0,done=false,cur='';
  const tm=setInterval(()=>{if(i>=calls.length){clearInterval(tm);done=true;win('Class dismissed! You spoke exactly when called.');return;}
   cur=calls[i];nm.textContent='\u201C'+cur+'?\u201D';i++;msg.textContent=`Calls ${i}/10 \u00b7 Mistakes ${mist}/2`;},1400);
  btn.addEventListener('click',()=>{if(done||!cur)return;
   if(cur==='Christian'){cur='';nm.textContent='\u2713 Present!';}
   else{mist++;if(mist>=2){clearInterval(tm);done=true;lose('Two wrong unmutes. You are now "the noisy one".');return;}
    msg.textContent=`Calls ${i}/10 \u00b7 Mistakes ${mist}/2`;}});
 }}},

pantry(){return{title:'Pantry Keeper',
 intro:'Your community pantry starts with 6 goods. 10 neighbors come: approve TAKES only while stock lasts, always approve GIVES. Survive the day.',
 render(el,{win,lose}){
  const reqs=[];for(let i=0;i<10;i++){const take=Math.random()<.55;reqs.push({take,n:1+Math.floor(Math.random()*3)});}
  el.innerHTML=`<div style="text-align:center;font-size:2.4rem" id="pa-shelf">\u{1F9F0} \u00d7 <b id="pa-n">6</b></div>
   <p style="text-align:center;font-size:1.1rem;min-height:34px" id="pa-req"></p>
   <div style="text-align:center;display:flex;gap:10px;justify-content:center"><button class="mini-again" id="pa-yes">\u2713 Approve</button><button class="mini-again" id="pa-no">\u2715 Decline</button></div>
   <p style="text-align:center;color:#b9c8ca" id="pa-msg">Neighbor 1/10</p>`;
  const q=s=>el.querySelector(s);let i=0,stock=6,done=false;
  const show=()=>{q('#pa-n').textContent=stock;const r=reqs[i];
   q('#pa-req').textContent=r.take?`\u{1F464} takes ${r.n} goods`:`\u{1F464} gives ${r.n} goods`;
   q('#pa-msg').textContent=`Neighbor ${i+1}/10 \u00b7 Stock ${stock}`;};
  const decide=ok=>{if(done)return;const r=reqs[i];
   if(r.take){if(ok){if(stock<r.n){done=true;lose('The shelf is empty! A neighbor left hungry.');return;}stock-=r.n;}
    else{if(stock>=r.n+2){done=true;lose('You turned away someone the pantry could have fed.');return;}}}
   else{if(!ok){done=true;lose('You refused a donation. The pantry remembers.');return;}stock+=r.n;}
   i++;if(i>=10){done=true;win(`Day survived with ${stock} goods left. The community eats.`);return;}show();};
  q('#pa-yes').addEventListener('click',()=>decide(true));
  q('#pa-no').addEventListener('click',()=>decide(false));
  show();
 }}},

delivery(){return{title:'Rider Rush',
 intro:'20 seconds on the road. Move with \u2190 \u2192 or tap the sides. Dodge the obstacles, deliver the food.',
 render(el,{win,lose}){
  el.innerHTML=`<div id="dv-road" tabindex="0" style="position:relative;height:220px;background:#20303f;border-radius:12px;overflow:hidden;outline:none">
   <div id="dv-bike" style="position:absolute;bottom:14px;left:50%;font-size:2.4rem;transform:translateX(-50%)">\u{1F6F5}</div></div>
   <p style="text-align:center;color:#b9c8ca" id="dv-msg">Tap the left or right side to switch lanes \u00b7 <b id="dv-t">20</b>s</p>`;
  const road=el.querySelector('#dv-road'),bike=el.querySelector('#dv-bike'),msg=el.querySelector('#dv-msg'),tEl=el.querySelector('#dv-t');
  const lanes=[18,50,82];let lane=1,left=20,done=false,obs=[];
  const setLane=()=>{bike.style.left=lanes[lane]+'%';};
  const move=d=>{if(done)return;lane=Math.min(2,Math.max(0,lane+d));setLane();};
  road.addEventListener('click',e=>{const r=road.getBoundingClientRect();move(e.clientX-r.left<r.width/2?-1:1);});
  road.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')move(-1);if(e.key==='ArrowRight')move(1);});
  const spawn=setInterval(()=>{if(done)return;const o=document.createElement('div');
   o.textContent=['\u{1F9F1}','\u{1F697}','\u{1F6A7}'][Math.floor(Math.random()*3)];
   o.style.cssText=`position:absolute;top:-40px;left:${lanes[Math.floor(Math.random()*3)]}%;font-size:2rem;transform:translateX(-50%)`;
   road.appendChild(o);obs.push({el:o,y:-40,lane:lanes.indexOf(parseFloat(o.style.left))});},900);
  const tick=setInterval(()=>{if(done)return;
   obs.forEach(o=>{o.y+=7;o.el.style.top=o.y+'px';
    if(o.y>160&&o.y<200&&Math.abs(lanes[lane]-lanes[o.lane])<5){done=true;clearInterval(tick);clearInterval(spawn);
     lose('Crash! The lugaw spilled. (The customer still gave 5 stars.)');}});
   obs=obs.filter(o=>{if(o.y>240){o.el.remove();return false;}return true;});
  },50);
  const clock=setInterval(()=>{left--;tEl.textContent=left;
   if(left<=0){done=true;clearInterval(tick);clearInterval(spawn);clearInterval(clock);win('Delivered! 20 seconds, zero spills.');}},1000);
  road.focus({preventScroll:true});
 }}},

livesell(){return{title:'MINE!',
 intro:'Products flash with prices. Tap MINE only on items under \u20B1100. The bots are fast. 10 rounds, 3 mistakes and you lose the budol.',
 render(el,{win,lose}){
  const items=[['\u{1F45A} Blouse',89],['\u{1F45F} Shoes',450],['\u{1F452} Cap',99],['\u{1F45C} Bag',1200],['\u{1F9F6} Socks',49],['\u{1F455} Shirt',95],['\u{1F460} Heels',899],['\u{1F9E2} Scarf',75]];
  let r=0,mist=0,done=false,tm=null;
  const round=()=>{r++;if(r>10){done=true;win('Budol secured! 10 items mined, wallet crying.');return;}
   const[it,pr]=items[Math.floor(Math.random()*items.length)];
   el.innerHTML=`<p style="text-align:center;color:#b9c8ca">Item ${r}/10 \u00b7 Mistakes ${mist}/3</p>
    <div style="text-align:center;font-size:3rem">${it.split(' ')[0]}</div>
    <p style="text-align:center;font-size:1.3rem;font-weight:800">${it} \u00b7 \u20B1${pr}</p>
    <div style="text-align:center"><button class="mini-again" id="lv-mine">MINE!</button></div>`;
   el.querySelector('#lv-mine').addEventListener('click',()=>{
    if(done)return;clearTimeout(tm);
    const good=pr<100;
    if(good){setTimeout(round,350);}
    else{mist++;if(mist>=3){done=true;lose('Too pricey! The bots got everything good.');return;}setTimeout(round,350);}
   });
   tm=setTimeout(()=>{if(done)return;if(pr<100){mist++;if(mist>=3){done=true;lose('Too slow! The bots mined it first.');return;}}setTimeout(round,350);},2200);};
  round();
 }}},

meme(){return{title:'Meme Match',
 intro:'4 meme templates, 4 captions. Click a meme, then its caption. Match them all.',
 render(el,{win,lose}){
  const pairs=[['\u{1F42D}','"ako na lang mag-isa"'],['\u{1F923}','"sana all may jowa"'],['\u{1F480}','"seen at 11:59pm"'],['\u{1F974}','"puyat is life"']];
  const caps=pairs.map(p=>p[1]).sort(()=>Math.random()-.5);
  el.innerHTML=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
   <div>${pairs.map((p,i)=>`<button class="mini-again" data-m="${i}" style="font-size:2rem;width:100%;padding:16px">${p[0]}</button>`).join('')}</div>
   <div>${caps.map(c=>`<button class="mini-again" data-c="${c}" style="width:100%;padding:16px;margin-bottom:10px;font-size:.85rem">${c}</button>`).join('')}</div></div>
   <p style="text-align:center;color:#b9c8ca" id="mm-msg">Matched 0/4</p>`;
  const msg=el.querySelector('#mm-msg');let sel=null,matched=0,done=false;
  el.querySelectorAll('[data-m]').forEach(b=>b.addEventListener('click',()=>{
   if(done||b.disabled)return;
   el.querySelectorAll('[data-m]').forEach(x=>x.style.outline='');b.style.outline='3px solid #f4c65b';sel=Number(b.dataset.m);}));
  el.querySelectorAll('[data-c]').forEach(b=>b.addEventListener('click',()=>{
   if(done||sel===null||b.disabled)return;
   if(pairs[sel][1]===b.dataset.c){matched++;
    el.querySelector(`[data-m="${sel}"]`).disabled=true;b.disabled=true;
    el.querySelector(`[data-m="${sel}"]`).style.opacity=.35;b.style.opacity=.35;
    msg.textContent=`Matched ${matched}/4`;sel=null;
    if(matched>=4){done=true;setTimeout(()=>win('Certified meme lord. The group chat fears you.'),350);}}
   else{done=true;lose('Wrong pairing. That meme deserved better.');}}));
 }}},

axie(){return{title:'Arena Draft',
 intro:'Draft 3 axies. Their combined power must reach 15 to beat the enemy team. Choose wisely.',
 render(el,{win,lose}){
  const axies=[['\u{1F33F}',7],['\u{1F41F}',5],['\u{1F98E}',6],['\u{1F419}',4],['\u{1F422}',8],['\u{1F43E}',3]];
  el.innerHTML=`<p style="text-align:center;color:#b9c8ca">Tap 3 axies \u00b7 Team power <b id="ax-p">0</b>/15</p>
   <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">${axies.map((a,i)=>`<button class="mini-again" data-i="${i}" style="font-size:1.8rem;padding:16px">${a[0]}<br><small style="font-size:.75rem">PWR ${a[1]}</small></button>`).join('')}</div>
   <div style="text-align:center;margin-top:12px"><button class="mini-again" id="ax-go">Battle!</button></div>`;
  const picked=new Set();let done=false;
  const pEl=el.querySelector('#ax-p');
  el.querySelectorAll('[data-i]').forEach(b=>b.addEventListener('click',()=>{
   if(done)return;const i=Number(b.dataset.i);
   if(picked.has(i)){picked.delete(i);b.style.outline='';}
   else{if(picked.size>=3)return;picked.add(i);b.style.outline='3px solid #f4c65b';}
   pEl.textContent=[...picked].reduce((s,i)=>s+axies[i][1],0);}));
  el.querySelector('#ax-go').addEventListener('click',()=>{
   if(done||picked.size<3)return;done=true;
   const total=[...picked].reduce((s,i)=>s+axies[i][1],0);
   total>=15?win(`Victory! Power ${total} crushes the enemy team.`):lose(`Defeat. Power ${total} was not enough for the arena.`)});
 }}},

ai(){return{title:'Prompt Perfect',
 intro:'2 prompts, words all shuffled. Tap the words in order to build each prompt correctly.',
 render(el,{win,lose}){
  const prompts=[['draw','a','cat','wearing','barong'],['write','a','jingle','about','lumpia']];
  let p=0,done=false;
  const round=()=>{if(p>=prompts.length){done=true;win('Chef\u2019s kiss. The AI understood you perfectly.');return;}
   const words=[...prompts[p]].sort(()=>Math.random()-.5);let pos=0;
   el.innerHTML=`<p style="text-align:center;color:#b9c8ca">Prompt ${p+1}/2</p>
    <p style="text-align:center;font-size:1.2rem;min-height:40px;font-weight:700" id="ai-out"></p>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">${words.map(w=>`<button class="mini-again" data-w="${w}">${w}</button>`).join('')}</div>`;
   const out=el.querySelector('#ai-out');
   el.querySelectorAll('[data-w]').forEach(b=>b.addEventListener('click',()=>{
    if(done||b.disabled)return;
    if(b.dataset.w===prompts[p][pos]){b.disabled=true;b.style.opacity=.35;out.textContent+=(out.textContent?' ':'')+b.dataset.w;pos++;
     if(pos>=prompts[p].length){p++;setTimeout(round,600);}}
    else{done=true;lose('The AI drew six fingers. Prompt failed.');}}));};
  round();
 }}}
};

/* ---------------- 2020s arcade games ---------------- */
window.addEventListener('DOMContentLoaded',()=>{
'use strict';
const $=s=>document.querySelector(s);
const lsG=(k,d)=>{try{const r=localStorage.getItem(k);return r?JSON.parse(r):d}catch(e){return d}};
const lsS=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};

/* 01 Budol Cart */
(function(){
 const cv=$('#bdl');if(!cv)return;
 const g=cv.getContext('2d'),W=320,H=240;
 const go=$('#bdl-go'),sc=$('#bdl-score'),best=$('#bdl-best'),msg=$('#bdl-msg');
 let bx=160,items=[],tm=null,tm2=null,score=0,left=30,run=false;
 const bk=lsG('museum-budol',0);best.textContent=bk;
 const blip=f=>{try{const c=new (window.AudioContext||window.webkitAudioContext)();const o=c.createOscillator(),v=c.createGain();o.type='square';o.frequency.value=f;v.gain.value=.06;o.connect(v);v.connect(c.destination);o.start();o.stop(c.currentTime+.08);}catch(e){}};
 function draw(){
  g.fillStyle='#20303f';g.fillRect(0,0,W,H);
  g.fillStyle='#f4c65b';g.font='12px monospace';g.fillText(left+'s',8,16);
  g.font='30px serif';g.fillText('\u{1F6D2}',bx-15,H-38);
  items.forEach(it=>{g.font='24px serif';g.fillText(it.k,it.x,it.y);});
 }
 function spawn(){
  const fake=Math.random()<.32;
  items.push({x:20+Math.random()*(W-40),y:-20,k:fake?'\u{1F480}':'\u{1F39F}',fake,vy:2+Math.random()*2.4});
 }
 function tick(){
  left-=.1;if(left<=0){end();return;}
  items.forEach(it=>it.y+=it.vy);
  items=items.filter(it=>{
   if(it.y>H-46&&it.y<H-8&&Math.abs(it.x-bx)<24){
    if(it.fake){score=Math.max(0,score-15);blip(160);flash('#e2574c');}
    else{score+=10;blip(880);}
    sc.textContent=score;return false;
   }
   return it.y<H+30;
  });
  draw();
 }
 function flash(c){cv.style.boxShadow=`0 0 0 4px ${c}`;setTimeout(()=>cv.style.boxShadow='',180);}
 function end(){
  run=false;clearInterval(tm);clearInterval(tm2);
  if(score>bk){lsS('museum-budol',score);best.textContent=score;}
  msg.textContent=`Sale over! You stacked \u20B1${score*10} in vouchers.`;
  go.textContent='\u25B6 Play again';
 }
 go.addEventListener('click',()=>{
  bx=160;items=[];score=0;left=30;sc.textContent=0;run=true;
  msg.textContent='Catch \u{1F39F}, dodge \u{1F480}!';go.textContent='\u25B6 Restart';
  clearInterval(tm);clearInterval(tm2);
  tm=setInterval(tick,50);tm2=setInterval(()=>{if(run)spawn();},650);draw();cv.focus({preventScroll:true});
 });
 cv.tabIndex=0;
 cv.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')bx=Math.max(20,bx-22);if(e.key==='ArrowRight')bx=Math.min(W-20,bx+22);if(run)draw();});
 cv.addEventListener('click',e=>{const r=cv.getBoundingClientRect();bx=e.clientX-r.left< r.width/2?Math.max(20,bx-30):Math.min(W-20,bx+30);if(run)draw();});
 let tx=null;
 cv.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;},{passive:true});
 cv.addEventListener('touchmove',e=>{if(tx===null)return;const dx=e.touches[0].clientX-tx;bx=Math.min(W-20,Math.max(20,bx+dx));tx=e.touches[0].clientX;if(run)draw();e.preventDefault();},{passive:false});
 draw();
})();

/* 02 Last Hit */
(function(){
 const scr=$('#lhit-screen');if(!scr)return;
 const msg=$('#lhit-msg'),go=$('#lhit-go'),sc=$('#lhit-score'),mi=$('#lhit-miss'),be=$('#lhit-best');
 let wave=0,miss=0,gold=0,hp=100,spd=1,tm=null,run=false;
 const bk=lsG('museum-lasthit',0);be.textContent=bk==='0'&&!lsG('museum-lasthit',null)?'\u2013':bk;
 function render(){
  scr.innerHTML=`<div class="lhit-row"><div class="lhit-minion" id="lh-m" role="button" tabindex="0" aria-label="Attack minion">\u{1F47E}</div>
   <div class="lhit-hp"><div class="lhit-zone" style="left:0;width:25%"></div><div class="lhit-fill" id="lh-f" style="width:${hp}%"></div></div></div>
   <p style="margin:0;color:#b9c8ca;font-size:.85rem">Wave ${Math.min(wave+1,10)}/10 \u00b7 tap when the bar is in the gold zone</p>`;
  const m=scr.querySelector('#lh-m');
  const hit=()=>{if(!run)return;
   if(hp<=25){gold+=100;sc.textContent=gold;wave++;blip(660);
    if(wave>=10){end(true);return;}
    hp=100;spd=.9+Math.random()*1.4;render();}
   else{miss++;mi.textContent=miss;blip(180);
    if(miss>=3){end(false);return;}}};
  m.addEventListener('click',hit);
  m.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();hit();}});
 }
 function blip(f){try{const c=new (window.AudioContext||window.webkitAudioContext)();const o=c.createOscillator(),v=c.createGain();o.type='square';o.frequency.value=f;v.gain.value=.06;o.connect(v);v.connect(c.destination);o.start();o.stop(c.currentTime+.09);}catch(e){}}
 function end(won){
  run=false;clearInterval(tm);
  const prev=lsG('museum-lasthit',0);if(gold>prev){lsS('museum-lasthit',gold);be.textContent=gold;}
  msg.textContent=won?`Victory! ${gold} gold, turret next.`:`The turret fell. ${gold} gold earned.`;
  go.textContent='\u25B6 Play again';
 }
 go.addEventListener('click',()=>{
  wave=0;miss=0;gold=0;hp=100;spd=1.2;run=true;
  sc.textContent=0;mi.textContent=0;msg.textContent='';go.textContent='\u25B6 Restart';
  render();clearInterval(tm);
  tm=setInterval(()=>{if(!run)return;hp-=spd;
   const f=scr.querySelector('#lh-f');if(f)f.style.width=Math.max(0,hp)+'%';
   if(hp<=0){miss++;mi.textContent=miss;blip(180);hp=100;
    if(miss>=3){end(false);return;}}},60);
 });
})();

/* 03 FYP Rush */
(function(){
 const card=$('#fyp-card');if(!card)return;
 const info=$('#fyp-info'),msg=$('#fyp-msg'),sc=$('#fyp-score'),ti=$('#fyp-time'),be=$('#fyp-best');
 const likeB=$('#fyp-like'),skipB=$('#fyp-skip'),go=$('#fyp-go');
 const deck=[
  {e:'\u{1F57A}',c:'POV: your tita learns the trend',good:true},
  {e:'\u{1F957}',c:'Rating street food in Quiapo',good:true},
  {e:'\u{1F4E2}',c:'AD: download this game now',good:false},
  {e:'\u{1F3A4}',c:'Budol find under \u20B199',good:true},
  {e:'\u{1F4F1}',c:'SPONSORED: a phone plan',good:false},
  {e:'\u{1F60E}',c:'GRWM: first day of classes',good:true},
  {e:'\u{1F4B8}',c:'PROMO: crypto doubling',good:false},
  {e:'\u{1F3B6}',c:'SB19 fan cam, 2M views',good:true}];
 let score=0,left=30,tm=null,run=false,cur=null;
 const bk=lsG('museum-fyp',0);be.textContent=bk?bk:'\u2013';
 function blip(f){try{const c=new (window.AudioContext||window.webkitAudioContext)();const o=c.createOscillator(),v=c.createGain();o.type='sine';o.frequency.value=f;v.gain.value=.08;o.connect(v);v.connect(c.destination);o.start();o.stop(c.currentTime+.09);}catch(e){}}
 function deal(){
  cur=deck[Math.floor(Math.random()*deck.length)];
  card.innerHTML=`<div class="fyp-card">${cur.e}</div><div class="fyp-cap">${cur.c}</div>`;
  info.textContent=cur.good?'\u2665 it or skip it':'looks like an ad\u2026';
 }
 function judge(liked){
  if(!run||!cur)return;
  if(cur.good&&liked){score+=10;blip(880);}
  else if(!cur.good&&!liked){score+=5;blip(660);}
  else if(!cur.good&&liked){score=Math.max(0,score-15);blip(180);}
  sc.textContent=score;deal();
 }
 likeB.addEventListener('click',()=>judge(true));
 skipB.addEventListener('click',()=>judge(false));
 function end(){
  run=false;clearInterval(tm);
  const prev=lsG('museum-fyp',0);if(score>prev){lsS('museum-fyp',score);be.textContent=score;}
  msg.textContent=`Time! FYP score: ${score}. The algorithm has notes.`;
  go.textContent='\u25B6 Play again';
 }
 go.addEventListener('click',()=>{
  score=0;left=30;run=true;sc.textContent=0;ti.textContent=30;msg.textContent='';go.textContent='\u25B6 Restart';
  deal();clearInterval(tm);
  tm=setInterval(()=>{left--;ti.textContent=left;if(left<=0)end();},1000);
 });
 card.innerHTML='<div class="fyp-card">\u{1F4F1}</div><div class="fyp-cap">Press Start for your For You Page</div>';
})();
});

/* ---------------- 2020s soundboard (all synthesized) ---------------- */
window.addEventListener('DOMContentLoaded',()=>{
'use strict';
let AC20=null;
const ac20=()=>AC20||(AC20=new (window.AudioContext||window.webkitAudioContext)());
function s20tone(f,delay,d,type,g){
 try{const c=ac20();if(c.state==='suspended')c.resume();const t=c.currentTime+.03+(delay||0);
 const o=c.createOscillator(),v=c.createGain();o.type=type||'sine';o.frequency.value=f;
 v.gain.setValueAtTime(.0001,t);v.gain.exponentialRampToValueAtTime(g||.15,t+.015);
 v.gain.exponentialRampToValueAtTime(.0001,t+d);
 o.connect(v);v.connect(c.destination);o.start(t);o.stop(t+d+.05);}catch(e){}
}
function s20sweep(f0,f1,d,type,g){
 try{const c=ac20();if(c.state==='suspended')c.resume();const t=c.currentTime+.03;
 const o=c.createOscillator(),v=c.createGain();o.type=type||'sine';
 o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(f1,t+d);
 v.gain.setValueAtTime(.0001,t);v.gain.exponentialRampToValueAtTime(g||.12,t+.02);
 v.gain.exponentialRampToValueAtTime(.0001,t+d);
 o.connect(v);v.connect(c.destination);o.start(t);o.stop(t+d+.05);}catch(e){}
}
const note=m=>{const n=document.getElementById('sb-note');if(n)n.textContent=m;};
const on=(id,fn)=>{const b=document.getElementById(id);if(b)b.addEventListener('click',fn);};

on('sb20-gcash',()=>{ /* money received: bright two-note chime */
 s20tone(987.77,0,.22,'sine',.16);s20tone(1318.5,.16,.4,'sine',.16);s20sweep(1318.5,2637,.5,'sine',.04);
 note('GCash: money received. Check the balance.');});
on('sb20-tiktok',()=>{ /* notification bloop */
 s20sweep(500,980,.12,'sine',.14);s20tone(1244.5,.1,.1,'sine',.1);
 note('TikTok: someone liked your video.');});
on('sb20-shopee',()=>{ /* perky ascending triple */
 [523.25,659.25,783.99].forEach((f,i)=>s20tone(f,i*.11,.14,'triangle',.14));
 note('Shopee: your parcel is on its way.');});
on('sb20-ml',()=>{ /* victory fanfare */
 [392,523.25,659.25,783.99].forEach((f,i)=>s20tone(f,i*.13,.2,'sawtooth',.07));
 s20tone(1046.5,.55,.5,'sawtooth',.07);
 note('Victory! The enemy nexus has fallen.');});
on('sb20-msg',()=>{ /* messenger pop */
 s20sweep(880,420,.09,'sine',.16);
 note('Messenger: you have a new message.');});
on('sb20-tritone',()=>{ /* iPhone tri-tone, approximated */
 [659.25,587.33,440].forEach((f,i)=>s20tone(f,i*.16,.18,'sine',.12));
 note('iPhone tri-tone. Classic.');});
on('sb20-grab',()=>{ /* two-tone alert */
 s20tone(880,0,.16,'sine',.14);s20tone(659.25,.18,.3,'sine',.14);
 note('Grab: your rider is arriving.');});
on('sb20-zoom',()=>{ /* soft join chime */
 s20tone(392,0,.2,'sine',.1);s20tone(523.25,.18,.35,'sine',.1);
 note('Zoom: you joined the meeting. Mic muted, we hope.');});
on('sb20-discord',()=>{ /* join chirp */
 s20sweep(420,840,.11,'square',.06);
 note('Discord: someone joined the voice channel.');});
on('sb20-cashin',()=>{ /* coin arpeggio */
 [659.25,783.99,987.77,1318.5].forEach((f,i)=>s20tone(f,i*.08,.12,'triangle',.13));
 note('Cash-in confirmed. Balance updated.');});
});

/* ---------------- 2020s photo booth filters ---------------- */
window.pbDraw20=function(x,img){
 const W=480,H=360,li=(typeof LANG!=='undefined'&&LANG==='tl');
 x.fillStyle='#101927';x.fillRect(0,0,W,H);
 if(!img){x.fillStyle='#6b7d90';x.font='15px "DM Sans",sans-serif';x.textAlign='center';
  x.fillText(li?'Pumili ng litrato':'Choose a photo',W/2,H/2);return;}
 const ir=img.width/img.height,cr=W/H;let sw,sh,sx,sy;
 if(ir>cr){sh=img.height;sw=sh*cr;sx=(img.width-sw)/2;sy=0;}else{sw=img.width;sh=sw/cr;sx=0;sy=(img.height-sh)/2;}
 const filt=(typeof pbFilter!=='undefined')?pbFilter:'fyp';
 if(filt==='fyp'){
  x.drawImage(img,sx,sy,sw,sh,0,0,W,H);
  const grd=x.createLinearGradient(0,H-120,0,H);grd.addColorStop(0,'rgba(0,0,0,0)');grd.addColorStop(1,'rgba(0,0,0,.55)');
  x.fillStyle=grd;x.fillRect(0,H-120,W,120);
  x.fillStyle='#fff';x.textAlign='left';x.font='bold 16px "DM Sans",sans-serif';
  x.fillText('@the2020scalling',16,H-56);
  x.font='13px "DM Sans",sans-serif';x.fillStyle='#e8edf2';
  x.fillText(li?'tunog na ginagamit ng 12.4K':'sound used by 12.4K',16,H-34);
  x.textAlign='right';x.font='15px "DM Sans",sans-serif';
  x.fillText('\u2665 12.4K',W-16,120);x.fillText('\u{1F4AC} 328',W-16,152);x.fillText('\u2197 1.2K',W-16,184);
  x.fillStyle='rgba(255,255,255,.3)';x.fillRect(0,H-6,W,6);
  x.fillStyle='#fe2c55';x.fillRect(0,H-6,W*.62,6);
 }else if(filt==='igstory'){
  x.drawImage(img,sx,sy,sw,sh,0,0,W,H);
  x.fillStyle='rgba(255,255,255,.85)';
  [16,118,220].forEach((sx0,i)=>{x.fillRect(sx0,12,96,5);if(i<2){x.fillStyle='#fff';x.fillRect(sx0,12,96,5);x.fillStyle='rgba(255,255,255,.85)';}});
  x.fillStyle='#fff';x.textAlign='left';x.font='bold 15px "DM Sans",sans-serif';
  x.fillText('your story',16,44);x.font='13px "DM Sans",sans-serif';x.fillStyle='#dfe7ee';x.fillText('2h',108,44);
  x.strokeStyle='#fff';x.lineWidth=3;x.beginPath();x.arc(W-30,40,14,0,7);x.stroke();
  x.fillStyle='#fff';x.font='bold 13px "DM Sans",sans-serif';x.textAlign='center';x.fillText('12:44',W-30,45);
  x.fillStyle='rgba(0,0,0,.45)';x.fillRect(120,H-52,240,34);
  x.fillStyle='#fff';x.font='14px "DM Sans",sans-serif';x.fillText(li?'Mag-reply\u2026':'Send message\u2026',240,H-30);
 }else{ /* zoom */
  x.fillStyle='#1a1a1e';x.fillRect(0,0,W,H);
  x.drawImage(img,sx,sy,sw,sh,14,14,W*.62,H-84);
  x.fillStyle='rgba(0,0,0,.6)';x.fillRect(14,H-70,W*.62,28);
  x.fillStyle='#fff';x.font='13px "DM Sans",sans-serif';x.textAlign='left';x.fillText('You',22,H-50);
  const mates=[['\u{1F469}','Bianca'],['\u{1F468}','Marco'],['\u{1F9D1}','Aira'],['\u{1F468}','Josh']];
  mates.forEach((m,i)=>{const tx=W*.62+28,ty=14+i*82;
   x.fillStyle='#2a2a30';x.fillRect(tx,ty,W-tx-14,74);
   x.font='30px serif';x.textAlign='center';x.fillText(m[0],tx+(W-tx-14)/2,ty+42);
   x.fillStyle='#fff';x.font='12px "DM Sans",sans-serif';x.textAlign='left';x.fillText(m[1],tx+8,ty+66);
   x.fillStyle='#e2574c';x.beginPath();x.arc(tx+(W-tx-14)-16,ty+16,8,0,7);x.fill();
   x.strokeStyle='#fff';x.lineWidth=2;x.beginPath();x.moveTo(tx+(W-tx-14)-21,ty+11);x.lineTo(tx+(W-tx-14)-11,ty+21);x.stroke();});
  x.fillStyle='#e2574c';x.fillRect(W/2-60,H-52,120,34);
  x.fillStyle='#fff';x.font='bold 14px "DM Sans",sans-serif';x.textAlign='center';
  x.fillText(li?'Umalis':'Leave',W/2,H-30);
 }
};

/* ---------------- Smartphone home screen (lobby, 2020s) ---------------- */
window.addEventListener('DOMContentLoaded',()=>{
'use strict';
const scr=document.getElementById('phone-screen');
if(scr){
 let ACp=null;
 const blip=f=>{try{ACp=ACp||new (window.AudioContext||window.webkitAudioContext)();const c=ACp;if(c.state==='suspended')c.resume();
  const o=c.createOscillator(),v=c.createGain();o.type='sine';o.frequency.value=f;v.gain.value=.07;
  o.connect(v);v.connect(c.destination);o.start();o.stop(c.currentTime+.07);}catch(e){}};
 const clock=document.getElementById('sp-clock');
 const tick=()=>{const d=new Date();clock.textContent=String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');};
 tick();setInterval(tick,20000);
 const pages=document.getElementById('sp-pages'),dots=document.getElementById('sp-dots');
 const n=pages.children.length;let pg=0;
 dots.innerHTML=Array.from({length:n},(_,i)=>`<i class="${i===0?'on':''}"></i>`).join('');
 const go=p=>{pg=(p+n)%n;pages.style.transform=`translateX(-${pg*100}%)`;
  [...dots.children].forEach((d,i)=>d.classList.toggle('on',i===pg));};
 scr.querySelectorAll('.sp-app').forEach(a=>a.addEventListener('click',e=>{
  e.stopPropagation();blip(760);setTimeout(()=>{location.href=a.dataset.go;},140);}));
 let sx=null;
 scr.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;},{passive:true});
 scr.addEventListener('touchend',e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;sx=null;
  if(Math.abs(dx)>42){blip(dx<0?520:440);go(pg+(dx<0?1:-1));}},{passive:true});
 scr.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight'){e.preventDefault();go(pg+1);}
  else if(e.key==='ArrowLeft'){e.preventDefault();go(pg-1);}
  else if(e.key==='Enter'){e.preventDefault();const a=scr.querySelector('.sp-app');if(a)a.click();}});
}

/* ---------------- Lobby decade toggle ---------------- */
const decBtns=[...document.querySelectorAll('.dec-opt[data-decade]')];
if(decBtns.length){
 const panes=[...document.querySelectorAll('.decade-pane[data-pane]')];
 const setD=d=>{
  panes.forEach(p=>{p.hidden=p.dataset.pane!==d;});
  decBtns.forEach(b=>{const on=b.dataset.decade===d;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});
  try{localStorage.setItem('museum-decade',d);}catch(e){}
  document.getElementById('menu-title').textContent=d==='2020s'?'Home screen':'Main menu';
 };
 decBtns.forEach(b=>b.addEventListener('click',()=>setD(b.dataset.decade)));
 let init='2000s';
 try{init=localStorage.getItem('museum-decade')||'2000s';}catch(e){}
 if(init!=='2000s'&&init!=='2020s')init='2000s';
 setD(init);
}
});

/* ===== 2020s exhibit copy (sourced) ===== */
window.EXHIBITS20 = {
  tiktok:{room:0,year:'2020',title:'The For You Page Nation',body:'TikTok, owned by China\u2019s ByteDance, became the most downloaded app in the world in 2020 as lockdowns pushed millions indoors. The Philippines quickly became one of its biggest markets, with Filipino dancers, comedians, and creators building huge followings on the For You Page.',then:'Then, every barkada had someone filming dance challenges in their bedroom during ECQ.',now:'Today, TikTok is as much a marketplace and news feed as an entertainment app.',question:'Did TikTok give ordinary Filipinos a bigger stage, or just a louder echo chamber?',
    flow:[{label:'Download the app',detail:'Lockdown boredom turned TikTok into the most installed app of 2020.'},{label:'Learn the dance',detail:'Filipino creators turned global trends into local hits overnight.'},{label:'Beat the algorithm',detail:'The For You Page let unknown creators reach millions with zero followers.'}],
    sources:[['Wikipedia: TikTok','https://en.wikipedia.org/wiki/TikTok']],
    game:'tiktok'},
  streaming:{room:0,year:'2020',title:'The K-Drama Lockdown',body:'When tvN\u2019s Crash Landing on You aired from late 2019 to early 2020, it became one of the highest-rated Korean dramas in cable history and a lockdown obsession in the Philippines. Netflix subscriptions surged as Filipinos binged K-dramas, turning stars like Hyun Bin into household names.',then:'Then, group chats were just episode reaction threads with strict spoiler warnings.',now:'Today, K-dramas sit beside local series on every Filipino watchlist.',question:'Did streaming make Filipino viewing habits more global, or just more Korean?',
    flow:[{label:'Sign up',detail:'Lockdown pushed whole households to subscribe to Netflix for the first time.'},{label:'Press play',detail:'Crash Landing on You and its successors dominated group chats for months.'},{label:'Stay for more',detail:'K-drama fandoms grew into fan clubs, merch, and local fan meets.'}],
    sources:[['Wikipedia: Crash Landing on You','https://en.wikipedia.org/wiki/Crash_Landing_on_You'],['Wikipedia: Netflix','https://en.wikipedia.org/wiki/Netflix']],
    game:'streaming'},
  vlog:{room:0,year:'2019',title:'The Vlog Economy',body:'By 2019, vlogging had grown from hobby to livelihood in the Philippines, as creators built audiences in the millions. YouTube\u2019s Partner Program meant ad revenue and brand sponsorships could rival a corporate salary for top creators.',then:'Then, \u201Cvlog\u201D meant one person, one camera, and a day in my life.',now:'Today, the creator economy spans TikTok, livestreams, and full brand empires.',question:'When does sharing your life online stop being authentic and start being work?',
    flow:[{label:'Hit record',detail:'Affordable phones and mobile data put a camera in every creator\u2019s pocket.'},{label:'Build the audience',detail:'Daily uploads and collabs turned subscribers into loyal fanbases.'},{label:'Cash the check',detail:'Ad revenue and sponsorships made vlogging a real career.'}],
    sources:[['Wikipedia: Vlog','https://en.wikipedia.org/wiki/Vlog'],['Wikipedia: YouTuber','https://en.wikipedia.org/wiki/YouTuber']],
    game:'vlog'},
  livesell:{room:0,year:'2021',title:'Sold to the Fastest "Mine"',body:'Shopee launched Shopee Live in 2019, letting sellers demo products in real time while viewers typed "mine" to claim items. TikTok Shop followed in the Philippines in 2022, folding shopping into the same feed as the dance trends.',then:'Then, typing "mine" in a comment section meant about ten seconds before someone else claimed it.',now:'Today, live selling is a nightly habit, from ukay bundles to skincare.',question:'Is live selling the modern palengke, or just pressure tactics with a chat box?',
    flow:[{label:'Go live',detail:'Sellers broadcast straight from their bedrooms, no studio needed.'},{label:'Type mine',detail:'Viewers claim items in the comments in real time.'},{label:'Check out fast',detail:'Flash deals and free shipping push buyers to pay on the spot.'}],
    sources:[['Wikipedia: TikTok Shop','https://en.wikipedia.org/wiki/TikTok_Shop'],['Wikipedia: Shopee','https://en.wikipedia.org/wiki/Shopee']],
    game:'livesell'},
  meme:{room:0,year:'2021',title:'The Meme Republic',body:'In the early 2020s, Filipino meme pages and stan accounts became a political and cultural force, shaping everything from election discourse to fandom wars. Stan culture, organized around K-pop and P-pop idols, turned posting into collective action through streaming parties and trending topics.',then:'Then, a meme page with a million followers could swing a whole group chat\u2019s vote.',now:'Today, every brand, candidate, and fandom speaks fluent meme.',question:'Are memes just jokes, or are they the real language of Filipino public life now?',
    flow:[{label:'Make the meme',detail:'One template plus local hugot equals instant virality.'},{label:'Rally the stans',detail:'Fandoms organize streaming parties and trending topics like clockwork.'},{label:'Shape the feed',detail:'Memes carry jokes, ads, and advocacies in a single image.'}],
    sources:[['Wikipedia: Stan Twitter','https://en.wikipedia.org/wiki/Stan_Twitter'],['Wikipedia: Internet meme','https://en.wikipedia.org/wiki/Internet_meme']],
    game:'meme'},
  gcash:{room:1,year:'2020',title:'The Cashless Shift',body:'GCash, launched by Globe in 2004, became the Philippines\u2019 dominant e-wallet during the pandemic as contactless payment turned from convenience to necessity. Cash aid moving through e-wallets and QR codes spreading to sari-sari stores pushed millions of first-time users onto the app.',then:'Then, scanning a QR code to pay felt futuristic outside malls.',now:'Today, even the fishball vendor takes GCash.',question:'Did e-wallets include more Filipinos in the economy, or just move the lines online?',
    flow:[{label:'Cash in',detail:'7-Eleven CLiQQ machines and sari-sari stores became loading stations.'},{label:'Scan to pay',detail:'QR codes replaced cash at markets, jeepneys, and online checkouts.'},{label:'Send money',detail:'Padala went from pawnshop counters to a few taps.'}],
    sources:[['Wikipedia: GCash','https://en.wikipedia.org/wiki/GCash']],
    game:'gcash'},
  shopee:{room:1,year:'2020',title:'The Budol Cart',body:'Shopee, founded in Singapore in 2015, rode the pandemic\u2019s online shopping surge with monthly sales like 9.9 and 11.11. Filipinos embraced "budol" culture, the joyful habit of impulse-buying deals too good to skip.',then:'Then, the 11.11 countdown felt like New Year\u2019s Eve for online shoppers.',now:'Today, the orange app is muscle memory, and parcels are daily mail.',question:'Did online shopping democratize retail, or just move the haggle to a chat box?',
    flow:[{label:'Add to cart',detail:'Flash sales and vouchers made waiting for payday optional.'},{label:'Check out at midnight',detail:'11.11 and 12.12 turned shopping into a national event.'},{label:'Track the rider',detail:'Real-time delivery tracking made every parcel an arrival to anticipate.'}],
    sources:[['Wikipedia: Shopee','https://en.wikipedia.org/wiki/Shopee']],
    game:'shopee'},
  mlbb:{room:1,year:'2021',title:'The M2 World Champions',body:'Mobile Legends: Bang Bang, released by Moonton in 2016, became the Philippines\u2019 national esport. In January 2021, Bren Esports won the M2 World Championship in Singapore, the first Filipino team to claim a world title in the game.',then:'Then, the whole country stayed up to watch five players lift the trophy in Singapore.',now:'Today, MPL Philippines fills arenas and mints esports celebrities.',question:'Is esports a real sport in Filipino culture now, or still just a game parents don\u2019t understand?',
    flow:[{label:'Pick your hero',detail:'The ranked grind turned barangay players into local legends.'},{label:'Join the pro scene',detail:'MPL Philippines gave teams salaries, coaches, and fans.'},{label:'Win the world',detail:'Bren Esports\u2019 M2 victory put the flag on the global stage.'}],
    sources:[['Wikipedia: Mobile Legends: Bang Bang','https://en.wikipedia.org/wiki/Mobile_Legends:_Bang_Bang'],['Wikipedia: Bren Esports','https://en.wikipedia.org/wiki/Bren_Esports']],
    game:'mlbb'},
  axie:{room:1,year:'2021',title:'Play to Earn, Pay the Bills',body:'Axie Infinity, a blockchain game by Vietnam\u2019s Sky Mavis, let players earn cryptocurrency by battling cartoon creatures. In 2021, thousands of Filipinos, many playing as "scholars" on borrowed accounts, used it to pay rent and bills during the pandemic.',then:'Then, "scholar" meant playing Axies all day to split crypto earnings.',now:'Today, the boom is over, and the Axies are mostly a cautionary tale.',question:'Was Axie empowerment, or exploitation with extra steps?',
    flow:[{label:'Get a scholarship',detail:'Managers lent teams of Axies in exchange for a cut of earnings.'},{label:'Grind daily quests',detail:'Players battled for SLP tokens convertible to pesos.'},{label:'Cash out',detail:'Earnings paid for groceries and tuition until the market crashed.'}],
    sources:[['Wikipedia: Axie Infinity','https://en.wikipedia.org/wiki/Axie_Infinity']],
    game:'axie'},
  delivery:{room:1,year:'2020',title:'The Rider Economy',body:'When lockdowns closed restaurants in 2020, food delivery through GrabFood and Foodpanda exploded. Riders in green and pink thermal bags weaving through empty streets became the defining image of the pandemic city.',then:'Then, the rider\u2019s arrival was the highlight of a locked-down day.',now:'Today, delivery apps are infrastructure, and riders are still fighting for better pay.',question:'Convenience for customers came at what cost to the riders?',
    flow:[{label:'Place the order',detail:'Lockdowns turned delivery apps into the only restaurant in town.'},{label:'Wait for the rider',detail:'Real-time tracking made every meal a small event.'},{label:'Rate the trip',detail:'Five-star ratings became a rider\u2019s livelihood currency.'}],
    sources:[['Wikipedia: Foodpanda','https://en.wikipedia.org/wiki/Foodpanda'],['Wikipedia: Grab Holdings','https://en.wikipedia.org/wiki/Grab_Holdings']],
    game:'delivery'},
  onlineclass:{room:2,year:'2020',title:'School on Screens',body:'The Department of Education opened school year 2020\u20132021 in October 2020 with no face-to-face classes, shifting millions of students to modules, TV, radio, and online lessons. The great experiment exposed both Filipino resilience and a deep digital divide.',then:'Then, "asynchronous" entered every student\u2019s vocabulary overnight.',now:'Today, hybrid setups linger, but nothing replaced the classroom.',question:'Did remote learning prove Filipino students can learn anywhere, or prove they can\u2019t?',
    flow:[{label:'Log in',detail:'Google Classroom and Zoom replaced the chalkboard.'},{label:'Pass the module',detail:'Printed modules traveled by tricycle where the signal couldn\u2019t reach.'},{label:'Beat the disconnect',detail:'Students climbed roofs and hills just to catch a signal.'}],
    sources:[['Wikipedia: COVID-19 pandemic in the Philippines','https://en.wikipedia.org/wiki/COVID-19_pandemic_in_the_Philippines'],['Wikipedia: Impact of the COVID-19 pandemic on education','https://en.wikipedia.org/wiki/Impact_of_the_COVID-19_pandemic_on_education']],
    game:'onlineclass'},
  pantry:{room:2,year:'2021',title:'The Maginhawa Pantry',body:'On April 14, 2021, Ana Patricia Non set up a bamboo cart on Maginhawa Street in Quezon City with the sign "Magbigay ayon sa kakayahan, kumuha batay sa pangangailangan". Within weeks, hundreds of community pantries sprouted nationwide, powered by pure bayanihan.',then:'Then, lining up at a pantry felt like both charity and protest.',now:'Today, most carts are gone, but the idea resurfaces every crisis.',question:'Were community pantries proof of Filipino kindness, or proof the system failed?',
    flow:[{label:'Set up the cart',detail:'One bamboo cart on Maginhawa Street started it all.'},{label:'Give what you can',detail:'Neighbors stocked shelves with rice, vegetables, and vitamins.'},{label:'Take what you need',detail:'The honor system fed thousands with no questions asked.'}],
    sources:[['Wikipedia: Community pantries in the Philippines','https://en.wikipedia.org/wiki/Community_pantries_in_the_Philippines']],
    game:'pantry'},
  ppop:{room:2,year:'2021',title:'The P-Pop Wave',body:'SB19, formed in 2018 under a Korean-style training system, broke through in 2019 when their "Go Up" dance practice video went viral. BINI followed with their 2021 debut, and P-pop grew into a full industry with its own fandoms and sold-out concerts.',then:'Then, skeptics called it a K-pop copy until the fandoms proved them wrong.',now:'Today, P-pop acts headline festivals and chart across Southeast Asia.',question:'Is P-pop the sound of Filipino identity, or just K-pop\u2019s training manual in Tagalog?',
    flow:[{label:'Train for years',detail:'Groups endured K-pop-style boot camps before debuting.'},{label:'Go viral',detail:'One dance practice video turned SB19 into a phenomenon.'},{label:'Fill the arena',detail:'Fandoms now pack concerts and streaming parties nationwide.'}],
    sources:[['Wikipedia: P-pop','https://en.wikipedia.org/wiki/P-pop'],['Wikipedia: SB19','https://en.wikipedia.org/wiki/SB19']],
    game:'ppop'},
  ai:{room:2,year:'2023',title:'The AI Classmate',body:'OpenAI released ChatGPT in November 2022, and by 2023 it was in Filipino classrooms, offices, and group chats. Students used it for essays, workers for emails, and everyone argued about whether it was cheating or just a tool.',then:'Then, teachers swore they could spot an AI essay from the first paragraph.',now:'Today, AI is just another tab open next to the homework.',question:'Is AI a shortcut that makes us dumber, or a tool that makes us faster?',
    flow:[{label:'Ask anything',detail:'Homework, code, and love letters all got the chatbot treatment.'},{label:'Debate the rules',detail:'Schools scrambled to decide what counted as cheating.'},{label:'Keep the tab open',detail:'AI settled into daily work like spellcheck before it.'}],
    sources:[['Wikipedia: ChatGPT','https://en.wikipedia.org/wiki/ChatGPT']],
    game:'ai'}
};
window.ROOMS20 = [
  {title:'Screens & Streams',short:'Screens',ids:['tiktok','streaming','vlog','livesell','meme']},
  {title:'Money & Play',short:'Money',ids:['gcash','shopee','mlbb','axie','delivery']},
  {title:'Life, Remixed',short:'Life',ids:['onlineclass','pantry','ppop','ai']}
];
window.LENSES20 = {
  cost:{name:'Cost',ids:['gcash','shopee','axie','livesell','streaming'],
    recap:'The 2020s moved Filipino money onto screens. Cash became optional as e-wallets, online sales, and even games started paying real bills.',
    points:['GCash turned the phone into a wallet, from QR payments to cash aid.','Shopee\u2019s 11.11 sales made the whole country shop at midnight.','Axie Infinity briefly let Filipinos earn a living inside a game.','Live selling turned "mine" into the fastest checkout in retail.','Streaming subscriptions became a regular household bill.'],
    question:'When everything costs a tap, do Filipinos spend more wisely or just more?',
    quiz:{prompt:'Your tita asks where Filipino money actually moved in the 2020s. What do you tell her?',
      options:[['GCash QR codes','From palengke stalls to jeepneys, cash went optional'],['Shopee 11.11','Midnight checkouts turned sale days into national events'],['Axie scholarships','Real pesos in 2021, real losses after the crash'],['Live selling','"Mine" in the comments beat the mall checkout line'],['Streaming subs','Netflix and Spotify became monthly household bills']]}},
  time:{name:'Time',ids:['tiktok','delivery','onlineclass','pantry','ai'],
    recap:'The 2020s rewired Filipino time. Lockdowns, on-demand everything, and AI sped daily life up, while some moments, like pantry lines, slowed it back down.',
    points:['TikTok compressed entertainment into 60-second bursts.','Delivery apps made waiting for food trackable to the minute.','Online classes replaced bells and jeepney commutes with logins.','Pantry lines brought back the slow, patient queue.','AI collapsed hours of homework into seconds.'],
    question:'Did the 2020s give Filipinos more time, or just fill it faster?',
    quiz:{prompt:'Which 2020s habit changed the Filipino daily schedule most?',
      options:[['Doomscrolling TikTok','Hours vanish in 60-second videos'],['Ordering delivery','Meals arrive tracked to the minute'],['Logging in to class','The commute became a login screen'],['Lining up at pantries','Slow queues in a fast decade'],['Asking AI first','Homework that took hours now takes seconds']]}},
  place:{name:'Place',ids:['mlbb','vlog','ppop','meme'],
    recap:'In the 2020s, Filipino hangouts moved online. Arenas, feeds, and fandoms became places as real as the barangay court.',
    points:['MPL arenas and ranked lobbies became the new barangay courts.','A vlogger\u2019s comment section works like a town plaza.','Concert venues and streaming parties are P-pop\u2019s home turf.','Meme pages are where the country argues, laughs, and votes.'],
    question:'If community now happens on a screen, what happens to the neighborhood?',
    quiz:{prompt:'Where does Filipino barkada culture live now?',
      options:[['MLBB ranked lobbies','Squad up nightly like the old court sessions'],['Vlog comment sections','The plaza moved under the video'],['P-pop concerts','Fandoms pack arenas and streaming parties'],['Meme pages','The national group chat, jokes and all'],['Discord servers','Voice channels replaced the tambayan corner']]}},
};

/* ---------------- 2020s exhibit media (verified Commons images) ---------------- */
window.MEDIA20={
 tiktok:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/TikTok%20app.jpg?width=600',alt:'TikTok app icon on a phone screen',caption:'TikTok app \u00b7 via Wikimedia Commons'},
 mlbb:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/Mobile%20Legends%20Bang%20Bang%20character%20Philippines%20full%20shot.jpg?width=480',alt:'Mobile Legends: Bang Bang character artwork',caption:'Mobile Legends: Bang Bang \u00b7 via Wikimedia Commons'},
 ppop:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/BINI-from-binified-concert-2025-0D1A5041.jpg?width=600',alt:'BINI performing at a concert in 2025',caption:'BINI, Binified concert 2025 \u00b7 via Wikimedia Commons'},
 gcash:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/GCash_logo.svg?width=480',alt:'GCash logo',caption:'GCash logo \u00b7 via Wikimedia Commons'},
 shopee:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/Shopee.svg?width=480',alt:'Shopee logo',caption:'Shopee logo \u00b7 via Wikimedia Commons'},
 streaming:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/Netflix%20logo.svg?width=480',alt:'Netflix logo',caption:'Netflix logo \u00b7 via Wikimedia Commons'},
 onlineclass:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/Student%20attending%20online%20class%20in%20Kerala.jpg?width=600',alt:'Student attending an online class on a laptop',caption:'Online class \u00b7 via Wikimedia Commons'},
 pantry:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/9598Community%20Pantry%20in%20the%20Philippines%2002.jpg?width=600',alt:'Community pantry in the Philippines',caption:'Community pantry, Philippines \u00b7 via Wikimedia Commons'},
 delivery:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/Cycle%20Delivery%20boy%20Mr%20Pasha%20from%20Russia..jpg?width=600',alt:'A delivery rider on a bicycle',caption:'Delivery rider \u00b7 via Wikimedia Commons'},
 ai:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/ChatGPT-Logo.svg?width=480',alt:'ChatGPT logo',caption:'ChatGPT logo \u00b7 via Wikimedia Commons'}
};
