const exhibits00 = {
  sms:{room:0,year:'2001',title:'Prepaid texting and the cost of keeping in touch',body:'By 2001, texting had developed its own language and etiquette in the Philippines. Prepaid service helped make short messages an everyday way to keep in touch.',then:'A phone and enough load could make a short message possible; the cost of each send still mattered.',now:'Messaging apps can send photos, voice, and video, but they still require a working device and connection.',question:'Who could afford to keep a conversation going?',flow:[{label:'Prepaid load',detail:'Buying load at a sari-sari store or via a scratch card was the everyday way to top up.'},{label:'Short message',detail:'A 160-character limit pushed users to invent shorthand: "tx" for text, "u" for you.'}],sources:[['Philstar, 15 May 2001','https://www.philstar.com/lifestyle/business-life/2001/05/15/85823/philippine-text-messaging-phenomenon/amp/'],['ITU, 2002','https://www.itu.int/net/wsis/tunis/newsroom/stats/mobile_internet_2002.pdf']],game:'sms'},
  friendster:{room:0,year:'2007',title:'Friendster profiles needed internet access',body:'Profiles, testimonials, and photo albums gave users ways to present themselves and keep up with friends. A 2007 report described the platform’s new photo-sharing features in the Philippines.',then:'Keeping a profile meant finding a device and internet connection, at home or elsewhere.',now:'Social profiles travel in a pocket, although connectivity and device costs still shape who participates.',question:'Where would you go to check a friend’s update?',flow:[{label:'Go online',detail:'Home dial-up, a workplace PC, or a rented hour at an internet café.'},{label:'Open profile',detail:'Friendster pages loaded slowly; testimonials and comments were the draw.'},{label:'Share with friends',detail:'Photo albums replaced the earlier "friendster layout" copy-paste culture.'}],sources:[['Philstar, 10 Apr 2007','https://www.philstar.com/business/technology/2007/04/10/393746/friendster-frenzy-lives-on']],game:'friendster'},
  ofw:{room:1,year:'2002',title:'OFW families kept in touch across borders',body:'A 2002 report described overseas Filipino workers and families using text messages and shared videophone centers to stay connected. Distance shaped when and how they could talk.',then:'A family might have to coordinate across countries, find a shared facility, and pay for communication.',now:'Video calls are more accessible on personal devices, but time zones and data access still shape the conversation.',question:'What would a family need to arrange before talking?',flow:[{label:'Worker abroad',detail:'Working hours and location set the only window for a call home.'},{label:'Time difference',detail:'A quick "kumusta" had to fit both sides of the clock.'},{label:'Family at home',detail:'Videophone centers were shared facilities, not private rooms.'}],sources:[['WIRED, Jun 2002','https://www.wired.com/2002/06/philippines/']],game:'ofw'},
  meteor:{room:1,year:'2003',title:'Meteor Garden reached local TV in Tagalog',body:'ABS-CBN aired a Tagalog-dubbed version of the Taiwanese drama Meteor Garden in May 2003. A foreign story reached Filipino viewers through a local broadcast and language.',then:'Watching meant being near a television when the scheduled episode aired.',now:'Streaming may let viewers choose a time and device, while availability still varies by service and connection.',question:'How did a story from Taiwan reach a Filipino living room?',flow:[{label:'Taiwanese drama',detail:'The original series had already been a hit across East and Southeast Asia.'},{label:'Tagalog dub',detail:'Local dubbing brought the story closer to Filipino viewers.'},{label:'Local TV',detail:'A fixed broadcast schedule meant being home when it aired.'}],sources:[['Philstar retrospective, 3 Sep 2021','https://www.philstar.com/entertainment/2021/09/03/2124416/fans-mark-meteor-garden-18th-anniversary-vic-chou-comeback-series-premieres-today/amp/']],game:'meteor'},
  boxing:{room:2,year:'2008',title:'Malaybalay announced a public boxing screen',body:'On 15 March 2008, MindaNews reported that Malaybalay City had announced a free public screening at Freedom Park for a Pacquiao–Marquez fight. The report documents the plan; it does not establish how many people attended.',then:'The event had a fixed time and a shared location. Being there was part of the experience.',now:'A fight can be watched on a personal screen, yet people still gather for major live events.',question:'What changes when watching becomes a shared public event?',flow:[{label:'Scheduled fight',detail:'A single broadcast time meant everyone tuned in together.'},{label:'Freedom Park',detail:'A public plaza hosted the crowd instead of private living rooms.'},{label:'Public screen',detail:'The city arranged the screen; attendance was free.'}],sources:[['MindaNews, 15 Mar 2008','https://mindanews.com/c3-news/2008/03/malaybalay-sets-up-wide-screen-for-pacquiao-watchers/']],game:'boxing'},
  cafe:{room:2,year:'2006',title:'Internet cafés rented computer time',body:'A 2006 industry report described internet cafés as a pay-as-you-use option when owning a computer and connection was expensive. Gaming, browsing, and printing were among their services.',then:'Computer time could be rented, making access possible without buying a PC; the session still had a cost.',now:'A personal phone may handle many of those tasks, but reliable data, a computer, and a place to work are still unevenly available.',question:'What could you do with a rented hour online?',flow:[{label:'Pay for time',detail:'Rates were often per hour, counted from a logbook at the counter.'},{label:'Shared PC',detail:'The same machine might be used for homework, email, and gaming in turn.'},{label:'Games or research',detail:'LAN gaming (Counter-Strike, DOTA) shared the space with schoolwork.'}],sources:[['GMA News / IDC, 14 Jul 2006','https://www.gmanetwork.com/news/money/content/10727/rp-internet-cafe-industry-to-boom-study/story/']],game:'cafe'},
  y2k:{room:0,year:'2000',title:'Y2K: the bug that made the world hold its breath',body:'In the late 1990s, many programs stored years as two digits: 1998 became "98", because computer memory was expensive. People feared that when clocks rolled to "00", systems would read 2000 as 1900 and fail. Banks, airlines, and governments spent the decade\u2019s final years checking and rewriting code. When midnight came, few major failures happened, largely because programmers had patched the bug in advance.',then:'A two-digit shortcut, made when memory was expensive, forced a worldwide code review.',now:'Date bugs still surface. The "Year 2038 problem" is next, but four-digit years are the norm.',question:'Was the panic wasted, or did all that fixing prevent the disaster?',flow:[{label:'Two-digit years',detail:'Storing "98" instead of "1998" saved precious memory in old systems.'},{label:'The rollover fear',detail:'"00" could sort before "99", or be read as 1900.'},{label:'The patch',detail:'Programmers worldwide checked and rewrote date code before midnight.'}],sources:[['Wikipedia: Year 2000 problem','http://en.wikipedia.org/wiki/Year_2000_problem']],game:'y2k'},
  cameraphone:{room:0,year:'2004',title:'The camera moved into the phone',body:'Sharp\u2019s J-SH04, released in Japan in November 2000, was the first phone with a back-facing camera that could send photos electronically, just 110,000 pixels. Nokia\u2019s 7650 followed in 2002 with a 0.3-megapixel camera, and Nokia\u2019s 7610 hit 1 megapixel in 2004. The megapixel race was on: by 2005 the Nokia N90 would reach 2 megapixels with a Carl Zeiss lens.',then:'A 0.3-megapixel photo was exciting, and worth sending by MMS.',now:'Phone cameras now beat the 2007 digicams that once outclassed them.',question:'When did the phone become "good enough" as a camera?',flow:[{label:'J-SH04 (2000)',detail:'110,000 pixels: the first phone that could send a photo electronically.'},{label:'Nokia 7650 (2002)',detail:'0.3 megapixels. Nokia\u2019s first camera phone.'},{label:'Megapixel race',detail:'The Nokia 7610 reached 1 megapixel in 2004; the N90 hit 2 in 2005.'}],sources:[['Wikipedia: J-SH04','http://en.wikipedia.org/wiki/J-SH04'],['Wikipedia: Nokia 7650','http://en.wikipedia.org/wiki/Nokia_7650'],['Wikipedia: Nokia 7610','https://en.wikipedia.org/wiki/Nokia_7610']],game:'cameraphone'},
  load:{room:2,year:'2005',title:'Load became something you could share',body:'The Philippines ran on prepaid. Load was sold as scratch cards at sari-sari stores, and "pasaload" (from "pasa", to pass or share) let one person send load to another: text the 11-digit number and the amount to 808, then reply YES to confirm. A few pesos of load could keep a conversation alive.',then:'No load meant no texts, and borrowing load from a friend was normal.',now:'E-wallets and apps move load around, but the sari-sari store still sells it.',question:'What did it mean that connection itself could be passed hand to hand?',flow:[{label:'Buy load',detail:'Scratch cards and electronic load at the corner sari-sari store.'},{label:'Text to 808',detail:'Type the 11-digit number, a space, and the amount, then send to 808.'},{label:'Reply YES',detail:'Confirm the transfer; a \u20b11 transaction fee applied.'}],sources:[['TechPinas: How to Pasaload','https://techpilipinas.com/how-to-pasaload-in-smart-and-tnt/']],game:'load'},
  socialgames:{room:2,year:'2009',title:'Everyone\u2019s tito was farming on Facebook',body:'Zynga\u2019s FarmVille launched on Facebook on 19 June 2009. Players planted, harvested, and visited neighbors\u2019 farms, and the game spread through friend lists and notifications until it counted tens of millions of players a day. The social feed became a farm report.',then:'A game lived inside your social network: your neighbors were your actual friends.',now:'Mobile games took over, but the "invite your friends" loop never left.',question:'Was it a game, or just another way to talk to people?',flow:[{label:'Plant',detail:'Plow, plant, and wait. Crops grew in real time.'},{label:'Harvest',detail:'Come back before crops withered; timing mattered.'},{label:'Neighbors',detail:'Friends as neighbors: visit farms, help out, send gifts.'}],sources:[['Wikipedia: FarmVille','https://en.wikipedia.org/wiki/FarmVille']],game:'socialgames'},
  smartphone:{room:0,year:'2010',title:'The keypad started disappearing',body:'The first iPhone was announced in January 2007 and released that June with a multi-touch screen and almost no buttons; Android phones like the HTC Dream followed in 2008. By 2010, touchscreens, app stores, and mobile internet were converging. The phone was becoming a pocket computer, and the decade\u2019s gadgets were starting to look like the next decade\u2019s.',then:'Typing on glass felt strange. Where were the buttons?',now:'The keypad never came back.',question:'What did we lose when the buttons disappeared?',flow:[{label:'iPhone (2007)',detail:'A multi-touch phone with almost no buttons. Type on glass.'},{label:'Android (2008)',detail:'The HTC Dream brought a competing touchscreen platform.'},{label:'2010 convergence',detail:'Touchscreens, apps, and mobile data met in one device.'}],sources:[['Wikipedia: iPhone (1st generation)','https://en.wikipedia.org/wiki/IPhone_(1st_generation)']],game:'smartphone'}
};
const rooms00=[
  {title:'Technology & Connection',short:'Technology',ids:['sms','friendster','y2k','cameraphone','smartphone']},
  {title:'Global Links',short:'Global links',ids:['ofw','meteor']},
  {title:'Shared Spaces',short:'Shared spaces',ids:['boxing','cafe','load','socialgames']}
];
const lenses00={
  cost:{name:'Cost',ids:['sms','ofw','cafe','load','cameraphone'],recap:'Texts, calls home, rented computer time, shared load, and sharper cameras each came with a price. Those costs decided who got to join in.',points:['A prepaid text cost load. Every character had a price.','Calling family abroad meant pricey calls or shared videophone centers.','An hour online meant renting a PC by the hour.','Pasaload let friends pass connection hand to hand: a few pesos of load kept a conversation alive.','Each sharper camera was a reason to buy the next, pricier phone.'],question:'Which costs moved or disappeared with today\u2019s connected phone, and which costs remain?',quiz:{prompt:'Which cost feels most removed from your own everyday life today?',options:[['Prepaid load per text','Sending a single text no longer costs load on most apps.'],['Long-distance calls and videophone centers','Most people now call abroad over Wi-Fi or data.'],['Renting computer time by the hour','Personal phones handle most tasks that once required a rented PC.'],['Passing load to a friend via pasaload','E-wallets moved load around, but sharing connection is still normal.'],['Paying extra for a sharper phone camera','Good cameras are now standard even on cheaper phones.']]}},
  time:{name:'Time',ids:['boxing','y2k','smartphone'],recap:'A fight aired once, the world raced a midnight deadline, and then the keypad vanished. Time set the terms.',points:['A free public screening happened once, at a fixed time and place.','The whole world worked against one deadline: midnight, 31 December 1999.','By 2010 the keypad was disappearing. The decade\u2019s gadgets started looking like the next decade\u2019s.'],question:'Which part of your day would you have had to rearrange?',quiz:{prompt:'Which timing constraint would be hardest to accept today?',options:[['Being home when a TV episode airs','Streaming removed most of this constraint for those with access.'],['Racing the Y2K midnight deadline','The worldwide fix mostly held. Midnight came and went quietly.'],['Waiting years for touchscreens to replace keypads','Typing on glass is now the default.']]}},
  place:{name:'Place',ids:['friendster','meteor','socialgames'],recap:'A profile needed internet somewhere, a drama reached the living-room TV, and then the farm moved onto Facebook.',points:['Checking a profile meant finding internet access first.','A dubbed drama reached Filipino homes through local television.','By 2009 the tambayan had a virtual address: everyone\u2019s tito was farming on Facebook.'],question:'Which experiences now happen anywhere, and which still need a shared place?',quiz:{prompt:'Which of these still needs a shared physical place today?',options:[['Checking a friend\u2019s profile','Now doable anywhere with a phone and a signal.'],['Watching a TV episode','Streaming freed this, though access varies.'],['Meeting friends in person','Still needs a shared place and time.'],['Visiting a neighbor\u2019s Facebook farm','The farm games faded, but the feed stayed.']]}}
};
const DECADE=(window.MUSEUM_DECADE==='2020s')?'2020s':'2000s';
const STATE_KEY='museum-state-v1';
const VOTE_KEY='museum-votes-v1';
const STAMP_KEY=DECADE==='2020s'?'museum-stamps-2020s-v1':'museum-stamps-v1';
/* Decade selection: 2020s pages load wing2020s.js first, which sets
   window.MUSEUM_DECADE and provides EXHIBITS20/ROOMS20/LENSES20/MEDIA20. */
const exhibits=DECADE==='2020s'?(window.EXHIBITS20||{}):exhibits00;
const rooms=DECADE==='2020s'?(window.ROOMS20||[]):rooms00;
const lenses=DECADE==='2020s'?(window.LENSES20||{}):lenses00;
const GB_KEY='museum-guestbook-v1';
// To share guestbook entries across ALL visitors, deploy the backend in
// guestbook-server/ (see DEPLOY.md) and paste its URL here, e.g.
// 'https://two-thousands-called-guestbook.onrender.com'.
// Leave it empty to keep the guestbook on this device only.
const GUESTBOOK_API_URL='https://two000s-called-guestbook.onrender.com';

const $=s=>document.querySelector(s);
const routeList=$('#route-list'),stage=$('#stage'),content=$('#stage-content'),lensLabel=$('#lens-label'),stepCount=$('#step-count'),progressFill=$('#progress-fill'),stampBar=$('#stamp-bar'),stampBadge=$('#stamp-badge'),stampCount=$('#stamp-count');

function lsGet(k,def){try{const raw=localStorage.getItem(k);return raw?JSON.parse(raw):def}catch(e){return def}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}

const stored=lsGet(STATE_KEY,null);
const query=new URLSearchParams(location.search);
let lens=Object.hasOwn(lenses,query.get('lens'))?query.get('lens'):(stored&&Object.hasOwn(lenses,stored.lens)?stored.lens:'cost');
let step=Math.min(3,Math.max(0,parseInt(query.get('step')||(stored?stored.step:0),10)||0));
let currentGameCleanup=null;

const sourceHTML=s=>s.map(([t,u])=>`<a class="source-link" target="_blank" rel="noopener noreferrer" href="${u}">${t}</a>`).join(' &nbsp;·&nbsp; ');
const flowHTML=(items,id)=>`<div class="flow">${items.map((p,i)=>`${i?'<span class="arrow" aria-hidden="true">→</span>':''}<button type="button" class="flow-item" data-flow="${id}-${i}" aria-expanded="false">${p.label}</button>`).join('')}</div>`;
const media00={
  sms:{src:'phones-2005.jpg',alt:'Three mobile phones photographed in 2005',caption:'Cell phones, 2005 · Larry D. Moore / CC BY 4.0'},
  cafe:{src:'internet-cafe-2010.jpg',alt:'Internet café in Cavite, 2010',caption:'Internet café, Cavite, 2010 · N. J. Henry / U.S. public domain'},
  friendster:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/Student%20with%20computer.JPG?width=600',alt:'Student using a computer',caption:'Student at a computer \u00b7 Courtcourtwest / CC BY-SA 4.0'},
  ofw:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/Nokia%203310%20blue.jpg?width=480',alt:'Blue Nokia 3310 mobile phone',caption:'Nokia 3310 \u00b7 Michael Brandtner / public domain'},
  meteor:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/1990s%20Television%20Set.jpg?width=480',alt:'CRT television with a VCR',caption:'CRT television with VCR \u00b7 ProtoKiwi / CC BY 4.0'},
  boxing:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/Manny%20Pacman%20Pacquiao%201.jpg?width=480',alt:'Manny Pacquiao before a fight',caption:'Manny Pacquiao \u00b7 SCRyan / CC BY-SA 3.0'},
  y2k:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/Apple%20IMac(de).jpg?width=600',alt:'Apple iMac CRT all-in-one computer from 1998',caption:'iMac, 1998 \u00b7 Stahlkocher / CC BY-SA 3.0'},
  cameraphone:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/Nokia%207650%2001.jpg?width=480',alt:'Nokia 7650, Nokia\u2019s first camera phone from 2002',caption:'Nokia 7650 \u00b7 Miguel Dur\u00e1n / CC BY-SA 2.5'},
  load:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/Sari-Sari%20Store%20Cavite.jpg?width=600',alt:'Sari-sari store in Cavite, Philippines',caption:'Sari-sari store, Cavite \u00b7 Glen / CC BY 2.0'},
  socialgames:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/Campus%20Party%20Brasil,%2011%20a%2017%20de%20fevereiro%20de%202008%20em%20S.P.%20-%20panoramio.jpg?width=600',alt:'Crowd of people using desktop computers at a tech event in 2008',caption:'LAN event, 2008 \u00b7 Claudio Oliveira Lima / CC BY-SA 3.0'},
  smartphone:{src:'https://commons.wikimedia.org/wiki/Special:FilePath/Apple-iPhone-002.jpg?width=480',alt:'First-generation iPhone showing its touchscreen',caption:'First iPhone, 2007 \u00b7 Eliya / CC BY'}
};
const media=DECADE==='2020s'?(window.MEDIA20||{}):media00;
const visualHTML=(id,kind)=>{const m=media[id];return m?`<figure class="${kind} ${m.style||''}"><img src="${m.src}" alt="${m.alt}" loading="lazy"><figcaption>${m.caption}</figcaption></figure>`:`<div class="${kind} type"><span>${exhibits[id].year}</span></div>`};

function stamps(){return lsGet(STAMP_KEY,{})}
function hasStamp(id){return !!stamps()[id]}
function awardStamp(id){
  const before=Object.keys(stamps()).length;
  const s=stamps();s[id]=true;lsSet(STAMP_KEY,s);updateStampUI();
  stampPop(id);
  if(Object.keys(stamps()).length===Object.keys(exhibits).length&&before<Object.keys(exhibits).length)showCelebration();
}
function updateStampUI(){
  const s=stamps();const ids=Object.keys(exhibits);const got=ids.filter(id=>s[id]).length;
  let bg=got,bt=ids.length;
  if(window.COMBINED_STAMPS&&window.EXHIBITS20){const s2=lsGet('museum-stamps-2020s-v1',{});const ids2=Object.keys(window.EXHIBITS20);bg+=ids2.filter(id=>s2[id]).length;bt+=ids2.length;}
  stampCount.textContent=`${bg}/${bt}`;passUI(got,ids.length);
  stampBadge.classList.toggle('off',got<ids.length);
  if(stampBar)stampBar.innerHTML=ids.map(id=>`<span class="s ${s[id]?'got':''}" title="${s[id]?'Collected':'Not yet'}">${s[id]?'★':'·'}</span>`).join('');
  document.querySelectorAll('#archive .card').forEach(cd=>{const cid=cd.id.replace(/^exhibit-/,'');const dot=cd.querySelector('.card-stamp');if(dot)dot.classList.toggle('got',!!s[cid]);});
}
function syncURL(push){const url=new URL(location.href);url.searchParams.set('lens',lens);url.searchParams.set('step',String(step));history[push?'pushState':'replaceState']({lens,step},'',url)}

/* ---------- Juice: confetti, stamps, celebration ---------- */
const confettiCanvas=document.getElementById('confetti-canvas');
const cctx=confettiCanvas.getContext('2d');
let confettiParts=[],confettiRAF=null;
function sizeConfetti(){confettiCanvas.width=window.innerWidth;confettiCanvas.height=window.innerHeight}
window.addEventListener('resize',sizeConfetti);sizeConfetti();
function launchConfetti(opts){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const count=(opts&&opts.count)||80;
  const colors=['#2b9fe3','#7cc7ee','#f4c65b','#2f6fd0','#3fae6b','#ffffff'];
  for(let i=0;i<count;i++){
    confettiParts.push({x:Math.random()*confettiCanvas.width,y:-24-Math.random()*confettiCanvas.height*0.25,w:6+Math.random()*8,h:8+Math.random()*10,c:colors[i%colors.length],vy:2+Math.random()*3.4,vx:-1.6+Math.random()*3.2,r:Math.random()*Math.PI,vr:-.12+Math.random()*.24});
  }
  if(!confettiRAF)confettiTick();
}
function confettiTick(){
  cctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
  confettiParts=confettiParts.filter(p=>p.y<confettiCanvas.height+30);
  for(const p of confettiParts){
    p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;p.vy+=0.05;
    cctx.save();cctx.translate(p.x,p.y);cctx.rotate(p.r);cctx.fillStyle=p.c;cctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);cctx.restore();
  }
  if(confettiParts.length){confettiRAF=requestAnimationFrame(confettiTick)}else{confettiRAF=null;cctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height)}
}
function stampPop(id){
  const ids=Object.keys(exhibits);const idx=ids.indexOf(id);
  const dots=document.querySelectorAll('#stamp-bar .s');
  if(dots[idx]){dots[idx].classList.add('pop');setTimeout(()=>dots[idx].classList.remove('pop'),700)}
  const card=document.querySelector('#exhibit-'+id+' .card-stamp');
  if(card){card.classList.add('pop');setTimeout(()=>card.classList.remove('pop'),700)}
}
function showCelebration(){
  const c=document.getElementById('celebrate');if(!c||!c.hidden)return;
  c.hidden=false;document.body.classList.add('no-scroll');
  launchConfetti({count:170});
  document.getElementById('celebrate-close').focus();
}
function closeCelebration(){
  const c=document.getElementById('celebrate');if(!c||c.hidden)return;
  c.hidden=true;document.body.classList.remove('no-scroll');
  stage.focus({preventScroll:true});
}

/* ---------- Mini-games ---------- */
const games={
  sms(){return{
    title:'Compose under 160',
    intro:'Type a text message. Stay under 160 characters. That was the SMS limit. Real 2000s shorthand (u, ur, txt, 2, =, :)) saves space.',
    render(el,{win,lose}){
      el.innerHTML=`<textarea class="compose-box" id="cg-box" placeholder="hi! r u gng 2 d mall l8r? :)" maxlength="300"></textarea>
        <div class="compose-count" id="cg-count"><b>0</b> / 160 characters</div>
        <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap"><button class="mini-again" id="cg-send">Send message</button></div>`;
      const box=el.querySelector('#cg-box'),ct=el.querySelector('#cg-count'),send=el.querySelector('#cg-send');
      const upd=()=>{const n=box.value.length;ct.innerHTML=`<b>${n}</b> / 160 characters`;ct.classList.toggle('over',n>160)};
      box.addEventListener('input',upd);upd();
      send.addEventListener('click',()=>{const n=box.value.trim().length;if(!n){lose('Write something first. Even a short "kumusta?" works.');return}if(n>160){lose(`Too long! ${n} characters. Cut ${n-160} more.`);return}win(`Sent! Your message was ${n} characters. The recipient got it.`) });
    }
  }},
  camera(){return{
    title:'Transfer the photo',
    intro:'You took a photo in 2007. Click the three steps in the right order to get it from camera to Friendster.',
    render(el,{win,lose}){
      const steps=['📷 Take photo','🔌 Connect via USB / card','💻 Upload to Friendster'];
      el.innerHTML=`<div class="transfer-grid" id="tr-grid">${steps.map((s,i)=>`<button class="transfer-btn" data-i="${i}">${s}</button>`).join('')}</div>
        <p style="margin:14px 0 0;color:#b9c8ca;font-size:.88rem" id="tr-hint">Click them in order.</p>`;
      let next=0;
      el.querySelectorAll('[data-i]').forEach(b=>b.addEventListener('click',()=>{
        const i=Number(b.dataset.i);
        if(i===next){b.classList.add('correct');b.disabled=true;next++;if(next===3){setTimeout(()=>win('Photo uploaded! In 2007 this could take a whole afternoon.'),300)}}
        else{b.classList.add('wrong');setTimeout(()=>b.classList.remove('wrong'),600);lose('Not quite. That step comes later.')}
      }));
    }
  }},
  friendster(){return{
    title:'Build your Top 8',
    intro:'Friendster Top 8 was serious business. Bea is your best friend (#1), Paolo is your crush (#2), and Dave still owes you ₱50 (#8). Reorder the list to match.',
    render(el,{win}){
      const names=['Marianne','Paolo','Bea','Joshua','Rica','Dave','Anna','Miguel'];
      el.innerHTML=`<ul class="top8-list" id="t8-list">${names.map((n,i)=>`<li><span class="t8-name">${n}</span><button data-dir="-1" data-i="${i}" ${i===0?'disabled':''}>↑</button><button data-dir="1" data-i="${i}" ${i===names.length-1?'disabled':''}>↓</button></li>`).join('')}</ul>
        <p style="color:#b9c8ca;font-size:.88rem;margin:0" id="t8-hint">Use the arrows to rearrange. It locks in when all three rules are true.</p>`;
      let moves=0;
      el.querySelector('#t8-list').addEventListener('click',e=>{
        const b=e.target.closest('button[data-dir]');if(!b)return;
        const i=Number(b.dataset.i),d=Number(b.dataset.dir);
        const list=el.querySelectorAll('#t8-list li');const j=i+d;
        const swapA=list[i],swapB=list[j];
        if(d<0)swapA.parentNode.insertBefore(swapA,swapB);else swapA.parentNode.insertBefore(swapB,swapA);
        renum();
        moves++;const o=[...el.querySelectorAll('.t8-name')].map(x=>x.textContent);if(o[0]==='Bea'&&o[1]==='Paolo'&&o[7]==='Dave')win('Top 8 locked in: Bea first, Paolo second, Dave last. Now everyone knows.');
      });
      function renum(){
        const list=el.querySelectorAll('#t8-list li');
        list.forEach((li,idx)=>{
          li.querySelector('.t8-name').textContent=li.querySelector('.t8-name').textContent;
          li.querySelectorAll('button').forEach(b=>{const d=Number(b.dataset.dir);b.dataset.i=idx;b.disabled=(d<0&&idx===0)||(d>0&&idx===list.length-1)});
        });
      }
    }
  }},
  ofw(){return{
    title:'Find the right hour',
    intro:'A worker is in Dubai (UTC+4). Family is in Manila (UTC+8). It is 10 a.m. in Manila. What time is it in Dubai?',
    render(el,{win,lose}){
      const opts=['6 a.m.','8 a.m.','10 a.m.','2 p.m.'];
      el.innerHTML=`<div class="clock-pick" id="clk">${opts.map(o=>`<button class="clock-btn" data-o="${o}">${o}</button>`).join('')}</div>
        <p style="color:#b9c8ca;font-size:.88rem;margin:14px 0 0">Manila is 4 hours ahead of Dubai.</p>`;
      el.querySelectorAll('.clock-btn').forEach(b=>b.addEventListener('click',()=>{
        if(b.dataset.o==='6 a.m.'){b.classList.add('correct');win('Right! 6 a.m. in Dubai. Now the family has to decide if that\'s too early to call.')}
        else{b.classList.add('wrong');setTimeout(()=>b.classList.remove('wrong'),700);lose('Not quite. Manila is ahead of Dubai.')}
      }));
    }
  }},
  bpo(){return{
    title:'Survive the night shift',
    intro:'Your sleepiness rises over 10 seconds. Click the coffee every time it spikes to stay awake.',
    render(el,{win,lose},setCleanup){
      el.innerHTML=`<div class="sleepy-wrap"><div class="sleepy-fill" id="sl-fill"></div><div class="sleepy-label" id="sl-label">Sleepy: 0%</div></div>
        <button class="coffee-btn" id="sl-coffee">☕ Drink coffee</button>
        <p style="color:#b9c8ca;font-size:.88rem;margin:14px 0 0">Shift runs 9 p.m. – 6 a.m.</p>`;
      let sleep=0,alive=true;
      const fill=el.querySelector('#sl-fill'),label=el.querySelector('#sl-label'),coffee=el.querySelector('#sl-coffee');
      const interval=setInterval(()=>{
        if(!alive)return;
        sleep+=4;fill.style.width=Math.min(sleep,100)+'%';
        label.textContent=`Sleepy: ${Math.min(Math.round(sleep),100)}%`;
        if(sleep>=100){alive=false;clearInterval(interval);lose('You nodded off at 3 a.m. Try again and click faster.')}
      },200);
      const onCoffee=()=>{if(!alive)return;sleep=Math.max(0,sleep-22);fill.style.width=sleep+'%';label.textContent=`Sleepy: ${Math.round(sleep)}%`;if(sleep===0){alive=false;clearInterval(interval);win('Shift over. You survived the 9 p.m. – 6 a.m. call center shift.')}};
      coffee.addEventListener('click',onCoffee);
      setCleanup(()=>clearInterval(interval));
    }
  }},
  meteor(){return{
    title:'Catch the episode',
    intro:'Meteor Garden aired once, at a fixed time. Pick the slot that matches the show: 8:30 p.m., weekdays.',
    render(el,{win,lose}){
      const slots=[
        ['6:00 p.m. · Weekdays','After the news'],
        ['8:30 p.m. · Weekdays','Primetime drama slot'],
        ['10:00 p.m. · Weekends','Late night rerun'],
        ['4:00 p.m. · Sundays','Afternoon special']
      ];
      el.innerHTML=`<div class="tv-slots" id="tv">${slots.map((s,i)=>`<button class="tv-slot" data-i="${i}">${s[0]}<small>${s[1]}</small></button>`).join('')}</div>`;
      el.querySelectorAll('.tv-slot').forEach(b=>b.addEventListener('click',()=>{
        if(b.dataset.i==='1'){b.classList.add('correct');win('Primetime it is. In 2003 you had to be home. No streaming yet.')}
        else{b.classList.add('wrong');setTimeout(()=>b.classList.remove('wrong'),700);lose('Wrong slot. Try the primetime drama block.')}
      }));
    }
  }},
  boxing(){return{
    title:'Pack the park',
    intro:'It is 7 p.m. The fight starts at 8. Click empty seats to fill the park before time runs out.',
    render(el,{win,lose},setCleanup){
      const total=25;
      el.innerHTML=`<div class="mini-hud"><span id="pk-t">Time: 20s</span><span id="pk-p">Filled: 0 / 25</span></div>
        <div class="park-grid" id="pk-grid">${Array.from({length:total},(_,i)=>`<button class="park-seat" data-i="${i}">·</button>`).join('')}</div>`;
      let filled=0,t=20,alive=true;
      const grid=el.querySelector('#pk-grid'),tEl=el.querySelector('#pk-t'),pEl=el.querySelector('#pk-p');
      const interval=setInterval(()=>{if(!alive)return;t--;tEl.textContent=`Time: ${t}s`;if(t<=0){alive=false;clearInterval(interval);lose(`Time's up! You filled ${filled} of 25 seats.`)}},1000);
      grid.addEventListener('click',e=>{const b=e.target.closest('.park-seat');if(!b||!alive||b.classList.contains('filled'))return;b.classList.add('filled');b.textContent='👤';filled++;pEl.textContent=`Filled: ${filled} / 25`;if(filled===total){alive=false;clearInterval(interval);win('Freedom Park is packed! Nothing like a shared screen.')}});
      setCleanup(()=>clearInterval(interval));
    }
  }},
  mall(){return{
    title:'Meet at the fountain',
    intro:'Three friends are texting you where to meet. Match each friend to the right mall landmark.',
    render(el,{win,lose}){
      const pairs=[
        {friend:'"Dito sa sinehan!" (I\'m at the cinema!)',where:'Cinema lobby'},
        {friend:'"Sa may fountain, tabi ng bench."',where:'Fountain'},
        {friend:'"Food court tayo, gutom na ako."',where:'Food court'}
      ];
      el.innerHTML=`<div class="fountain-match">
        <div class="fountain-friends" id="fm-friends">${pairs.map((p,i)=>`<button class="friend-chip" data-i="${i}">${p.friend}</button>`).join('')}</div>
        <div class="landmarks" id="fm-where">${['Cinema lobby','Fountain','Food court','Department store'].map(w=>`<button class="landmark-btn" data-w="${w}">${w}</button>`).join('')}</div>
      </div>
      <p style="margin:12px 0 0;color:#b9c8ca;font-size:.85rem" id="fm-hint">Click a friend, then their landmark.</p>`;
      let active=-1,solved=0;
      el.querySelectorAll('.friend-chip').forEach(b=>b.addEventListener('click',()=>{if(b.classList.contains('done'))return;el.querySelectorAll('.friend-chip').forEach(x=>x.classList.remove('active'));b.classList.add('active');active=Number(b.dataset.i)}));
      el.querySelectorAll('.landmark-btn').forEach(b=>b.addEventListener('click',()=>{
        if(active<0){lose('Pick a friend first.');return}
        if(pairs[active].where===b.dataset.w){const chip=el.querySelector(`.friend-chip[data-i="${active}"]`);chip.classList.remove('active');chip.classList.add('done');solved++;active=-1;if(solved===3)win('Everyone found each other. Malls were the tambayan.')}
        else lose('Not that landmark. Read the message again.')
      }));
    }
  }},
  cafe(){return{
    title:'Rent an hour for ₱60',
    intro:'You have ₱60 for one hour at the internet café. Pick which tasks to fit in. Complete three tasks.',
    render(el,{win,lose}){
      const tasks=[
        {name:'Check email',cost:15},
        {name:'Print one page',cost:10},
        {name:'Play DOTA (30 min)',cost:25},
        {name:'Research for homework',cost:20},
        {name:'Friendster upload',cost:15}
      ];
      el.innerHTML=`<div class="mini-hud"><span id="rc-budget">₱60 left</span><span id="rc-done">0 / 3 tasks</span></div>
        <div class="rent-tasks" id="rc-tasks">${tasks.map((t,i)=>`<div class="rent-task" data-i="${i}"><span class="rt-name">${t.name}</span><span class="rt-cost">₱${t.cost}</span><button class="rt-btn">Do it</button></div>`).join('')}</div>`;
      let budget=60,done=0;
      const bEl=el.querySelector('#rc-budget'),dEl=el.querySelector('#rc-done');
      el.querySelectorAll('.rent-task').forEach(row=>row.querySelector('button').addEventListener('click',()=>{
        if(row.classList.contains('done'))return;
        const cost=Number(row.querySelector('.rt-cost').textContent.replace('₱',''));
        if(cost>budget){lose(`Not enough budget. That costs ₱${cost}, you have ₱${budget} left.`);return}
        budget-=cost;done++;
        bEl.textContent=`₱${budget} left`;dEl.textContent=`${done} / 3 tasks`;
        row.classList.add('done');row.querySelector('.rt-btn').textContent='✓';
        if(done>=3)win(`Hour well spent. ₱${budget} left over for a merienda.`);
      }));
      /* --- Dial-up modem experience: synthesized 56k handshake, no audio files --- */
      el.insertAdjacentHTML('beforeend',`<div class="modem-box">
        <h4>📞 The dial-up ritual</h4>
        <p>No broadband yet. The café's backup line is dial-up. Press play to hear a 56k modem connect, synthesized live in your browser.</p>
        <div class="modem-lights" aria-hidden="true"><span class="ml on">PWR</span><span class="ml" id="mdm-dial">DIAL</span><span class="ml" id="mdm-link">LINK</span></div>
        <p class="modem-status" id="mdm-status" aria-live="polite">Modem idle.</p>
        <div class="t9-ctl"><button type="button" id="mdm-play">▶ Hear 56k connect</button><button type="button" id="mdm-stop" disabled>■ Stop</button></div>
      </div>`);
      const mdmPlay=el.querySelector('#mdm-play'),mdmStop=el.querySelector('#mdm-stop'),mdmStatus=el.querySelector('#mdm-status'),mdmDial=el.querySelector('#mdm-dial'),mdmLink=el.querySelector('#mdm-link');
      let AC=null,mdmTimers=[];
      const mdmLater=(ms,fn)=>mdmTimers.push(setTimeout(fn,ms));
      function mdmHush(){if(AC){try{AC.close()}catch(e){}AC=null}}
      function mdmStopAll(silent){
        mdmTimers.forEach(clearTimeout);mdmTimers=[];mdmHush();
        mdmPlay.disabled=false;mdmStop.disabled=true;
        mdmDial.classList.remove('on','blink');mdmLink.classList.remove('on');
        if(!silent)mdmStatus.textContent='Modem idle.';
      }
      setCleanup(()=>mdmStopAll(true));
      mdmStop.addEventListener('click',()=>mdmStopAll(false));
      mdmPlay.addEventListener('click',()=>{
        if(AC)return;
        const Ctx=window.AudioContext||window.webkitAudioContext;
        if(!Ctx){mdmStatus.textContent='Audio is not supported in this browser.';return}
        AC=new Ctx();mdmPlay.disabled=true;mdmStop.disabled=false;
        const t0=AC.currentTime+0.05;
        const master=AC.createGain();master.gain.value=0.12;master.connect(AC.destination);
        const tone=(f,at,dur,type)=>{const o=AC.createOscillator(),g=AC.createGain();o.type=type||'sine';o.frequency.value=f;g.gain.setValueAtTime(0.0001,at);g.gain.exponentialRampToValueAtTime(0.9,at+0.02);g.gain.exponentialRampToValueAtTime(0.0001,at+dur);o.connect(g);g.connect(master);o.start(at);o.stop(at+dur+0.05)};
        const noiseBurst=(at,dur)=>{const len=Math.floor(AC.sampleRate*dur),buf=AC.createBuffer(1,len,AC.sampleRate),d=buf.getChannelData(0);for(let i=0;i<len;i++)d[i]=Math.random()*2-1;const s=AC.createBufferSource();s.buffer=buf;const f=AC.createBiquadFilter();f.type='bandpass';f.frequency.value=1800;f.Q.value=0.6;const g=AC.createGain();g.gain.setValueAtTime(0.5,at);g.gain.exponentialRampToValueAtTime(0.0001,at+dur);s.connect(f);f.connect(g);g.connect(master);s.start(at);s.stop(at+dur+0.05)};
        const sweep=(at,dur,f0,f1)=>{const o=AC.createOscillator(),g=AC.createGain();o.type='sawtooth';o.frequency.setValueAtTime(f0,at);o.frequency.exponentialRampToValueAtTime(f1,at+dur);g.gain.setValueAtTime(0.0001,at);g.gain.exponentialRampToValueAtTime(0.35,at+0.05);g.gain.exponentialRampToValueAtTime(0.0001,at+dur);o.connect(g);g.connect(master);o.start(at);o.stop(at+dur+0.05)};
        tone(350,t0,1.0);tone(440,t0,1.0);
        mdmStatus.textContent='Dialing…';mdmDial.classList.add('on','blink');
        const DTMF={'1':[697,1209],'2':[697,1336],'3':[697,1477],'4':[770,1209],'5':[770,1336],'6':[770,1477],'7':[852,1209],'8':[852,1336],'9':[852,1477],'0':[941,1336]};
        let dt=t0+1.15;
        '835'.split('').forEach(dg=>{const pr=DTMF[dg];tone(pr[0],dt,0.12);tone(pr[1],dt,0.12);dt+=0.22});
        noiseBurst(dt+0.1,0.7);
        mdmLater(2600,()=>{mdmStatus.textContent='Handshaking…'});
        let ht=dt+0.9;
        for(let i=0;i<6;i++){tone(i%2?2250:1200,ht,0.12,'square');ht+=0.13}
        sweep(ht,1.1,400,2400);
        const ct=ht+1.25;
        tone(660,ct,0.16);tone(880,ct+0.18,0.3);
        mdmLater(Math.round((ct-t0+0.6)*1000),()=>{mdmDial.classList.remove('on','blink');mdmLink.classList.add('on');mdmStatus.textContent='Connected at 56 kbps!';mdmPlay.disabled=false;mdmStop.disabled=true;mdmHush()});
      });
    }
  }},

  y2k(){return{
    title:'Patch the Y2K bug',
    intro:'Midnight is coming in 20 seconds. Tap every 2-digit year. Those are the ones that will break. Leave the 4-digit years alone. Three wrong taps and the system crashes.',
    render(el,{win,lose},setCleanup){
      const buggy=['97','98','99','00','01','85'],safe=['1997','1998','1999','2000','2001','1985'];
      const chips=[...buggy.map(y=>({y,bad:true})),...safe.map(y=>({y,bad:false}))].sort(()=>Math.random()-.5);
      let left=buggy.length,strikes=0,time=20,done=false;
      const timer=setInterval(()=>{time--;clock.textContent=`\u23f0 ${time}s to midnight`;if(time<=0)end(false)},1000);
      setCleanup(()=>clearInterval(timer));
      el.innerHTML=`<p class="y2k-clock" id="y2k-clock">\u23f0 20s to midnight</p>
        <div class="chip-grid">${chips.map((c,i)=>`<button type="button" class="y2k-chip" data-i="${i}">${c.y}</button>`).join('')}</div>
        <p class="mini-msg" id="y2k-msg">Patched: 0/${buggy.length} \u00b7 Strikes: 0/3</p>`;
      const msg=el.querySelector('#y2k-msg'),clock=el.querySelector('#y2k-clock');
      const end=ok=>{if(done)return;done=true;clearInterval(timer);ok?win('All dates patched before midnight! The world survived, just like the real 2000.'):lose('The clock struck midnight with bugs still in the system.')};
      el.querySelectorAll('.y2k-chip').forEach(b=>b.addEventListener('click',()=>{
        if(done||b.disabled)return;
        const c=chips[Number(b.dataset.i)];
        if(c.bad){b.classList.add('correct');b.disabled=true;left--;msg.textContent=`Patched: ${buggy.length-left}/${buggy.length} \u00b7 Strikes: ${strikes}/3`;if(!left)end(true)}
        else{b.classList.add('wrong');strikes++;msg.textContent=`Patched: ${buggy.length-left}/${buggy.length} \u00b7 Strikes: ${strikes}/3`;setTimeout(()=>b.classList.remove('wrong'),500);if(strikes>=3)end(false)}
      }));
    }
  }},
  cameraphone(){return{
    title:'Higher or lower: megapixels',
    intro:'Camera phones got sharper fast. For each phone, guess whether its camera had HIGHER or LOWER megapixels than the one before. Get at least 4 of 5 right.',
    render(el,{win,lose}){
      const seq=[['Sharp J-SH04 (2000)','0.11'],['Nokia 7650 (2002)','0.3'],['Nokia 7610 (2004)','1.0'],['Nokia N90 (2005)','2.0'],['Nokia N95 (2007)','5.0'],['Sharp J-SH04 (2000)','0.11']];
      let i=0,score=0;
      const ask=()=>{
        if(i>=5){score>=4?win(`You got ${score}/5! From 0.11 to 5 megapixels in seven years. The camera ate the phone.`):lose(`You got ${score}/5. The megapixel race was relentless. Try again!`);return}
        const [name,mp]=seq[i],[nname,nmp]=seq[i+1];
        const higher=parseFloat(nmp)>parseFloat(mp);
        el.innerHTML=`<p class="mini-msg">${name}: <b>${mp} MP</b></p>
          <p class="mini-msg">Was the <b>${nname}</b> camera\u2026</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap"><button type="button" class="mini-again" data-g="h">\ud83d\udcc8 HIGHER</button><button type="button" class="mini-again" data-g="l">\ud83d\udcc9 LOWER</button></div>
          <p class="mini-msg">Score: ${score}/${i} \u00b7 need 4/5</p>`;
        el.querySelectorAll('[data-g]').forEach(b=>b.addEventListener('click',()=>{
          if((b.dataset.g==='h')===higher)score++;
          i++;ask();
        }));
      };
      ask();
    }
  }},
  load(){return{
    title:'Pasaload, please!',
    intro:'Your friend is out of load. Tap the three steps in the right order to send \u20b120 via Pasaload.',
    render(el,{win,lose}){
      const steps=['\ud83d\udcb0 Check balance covers \u20b120 + \u20b11 fee','\u2328\ufe0f Text "09XX XXX XXXX 20" to 808','\u2705 Reply YES to the confirmation'];
      el.innerHTML=`<div class="transfer-grid">${steps.map((s,i)=>`<button type="button" class="transfer-btn" data-i="${i}">${s}</button>`).join('')}</div>
        <p style="margin:14px 0 0;font-size:.88rem;opacity:.75">Tap them in order.</p>`;
      let next=0;
      el.querySelectorAll('[data-i]').forEach(b=>b.addEventListener('click',()=>{
        const i=Number(b.dataset.i);
        if(i===next){b.classList.add('correct');b.disabled=true;next++;if(next===3)setTimeout(()=>win('Load sent! Your friend can text again. That\u2019s the bayanihan of the 2000s.'),300)}
        else{b.classList.add('wrong');setTimeout(()=>b.classList.remove('wrong'),600);lose('Not quite. Check the real Pasaload steps and try again.')}
      }));
    }
  }},
  socialgames(){return{
    title:'Harvest rush',
    intro:'Your FarmVille crops are ripe! Tap 12 ready crops (\ud83c\udf3e) before the 25-second timer runs out. Don\u2019t tap growing ones (\ud83c\udf31). 3 strikes and the harvest fails.',
    render(el,{win,lose},setCleanup){
      const cells=Array.from({length:20},()=>Math.random()<0.6?'\ud83c\udf3e':'\ud83c\udf31');
      for(let i=0;cells.filter(c=>c==='\ud83c\udf3e').length<14&&i<20;i++)if(cells[i]==='\ud83c\udf31')cells[i]='\ud83c\udf3e';
      let ripe=0,strikes=0,time=25,done=false;
      const timer=setInterval(()=>{time--;clock.textContent=`\u23f0 ${time}s`;if(time<=0)end(false)},1000);
      setCleanup(()=>clearInterval(timer));
      el.innerHTML=`<p class="y2k-clock" id="hv-clock">\u23f0 25s</p>
        <div class="chip-grid">${cells.map((c,i)=>`<button type="button" class="y2k-chip farm" data-i="${i}">${c}</button>`).join('')}</div>
        <p class="mini-msg" id="hv-msg">Harvested: 0/12 \u00b7 Strikes: 0/3</p>`;
      const msg=el.querySelector('#hv-msg'),clock=el.querySelector('#hv-clock');
      const end=ok=>{if(done)return;done=true;clearInterval(timer);ok?win('Harvest complete! Your neighbors are impressed.'):lose('The crops withered\u2026 or the strikes piled up. Try again!')};
      el.querySelectorAll('.farm').forEach(b=>b.addEventListener('click',()=>{
        if(done||b.disabled)return;
        if(cells[Number(b.dataset.i)]==='\ud83c\udf3e'){b.classList.add('correct');b.textContent='\u2705';b.disabled=true;ripe++;msg.textContent=`Harvested: ${ripe}/12 \u00b7 Strikes: ${strikes}/3`;if(ripe>=12)end(true)}
        else{b.classList.add('wrong');strikes++;msg.textContent=`Harvested: ${ripe}/12 \u00b7 Strikes: ${strikes}/3`;setTimeout(()=>b.classList.remove('wrong'),500);if(strikes>=3)end(false)}
      }));
    }
  }},
  smartphone(){return{
    title:'Ditch the stylus',
    intro:'It\u2019s 2010 and screens finally respond to fingers. Tap 10 targets (\ud83d\udcf1) in 20 seconds. No stylus needed.',
    render(el,{win,lose},setCleanup){
      let hits=0,time=20,done=false,cur=-1;
      const timer=setInterval(()=>{time--;clock.textContent=`\u23f0 ${time}s`;if(time<=0)end(false)},1000);
      setCleanup(()=>clearInterval(timer));
      el.innerHTML=`<p class="y2k-clock" id="ts-clock">\u23f0 20s</p>
        <div class="chip-grid tap-grid">${Array.from({length:9},(_,i)=>`<button type="button" class="y2k-chip tap" data-i="${i}"></button>`).join('')}</div>
        <p class="mini-msg" id="ts-msg">Tapped: 0/10</p>`;
      const msg=el.querySelector('#ts-msg'),clock=el.querySelector('#ts-clock'),btns=[...el.querySelectorAll('.tap')];
      const place=()=>{btns.forEach(b=>{b.textContent='';b.classList.remove('target')});cur=Math.floor(Math.random()*9);btns[cur].textContent='\ud83d\udcf1';btns[cur].classList.add('target')};
      const end=ok=>{if(done)return;done=true;clearInterval(timer);ok?win('10 taps! Capacitive touch wins. The stylus era is over.'):lose(`Time! You got ${hits}/10. Those fingers need practice.`)};
      btns.forEach(b=>b.addEventListener('click',()=>{
        if(done)return;
        if(Number(b.dataset.i)===cur){hits++;msg.textContent=`Tapped: ${hits}/10`;if(hits>=10){end(true);return}place()}
        else{b.classList.add('wrong');setTimeout(()=>b.classList.remove('wrong'),300)}
      }));
      place();
    }
  }}

};

if(window.GAMES20)Object.assign(games,window.GAMES20);
window.EXHIBITS00=exhibits00;window.GAMESALL=games;window.MEDIA00=media00;

/* ---------- Game renderer ---------- */
function renderGamePanel(exhibitId){
  const gameFactory=games[exhibits[exhibitId].game];
  if(!gameFactory)return '';
  const got=hasStamp(exhibitId);
  return `<section class="mini-game" data-exhibit="${exhibitId}">
    <div class="mini-head"><h3>🎮 Mini-game · ${got?'Completed':'Not played yet'}</h3><span class="mini-tag">${got?'★ Stamp earned':'Play to earn a stamp'}</span></div>
    <div class="mini-body">
      <div class="mini-intro" id="mg-intro"></div>
      <div class="mini-stage" id="mg-stage"></div>
      <div class="mini-result" id="mg-result"></div>
      <button class="mini-start" id="mg-start">▶ Start game</button>
    </div>
  </section>`;
}
function initGame(exhibitId,root){
  const scope=root||content;
  const panel=scope.querySelector(`.mini-game[data-exhibit="${exhibitId}"]`);
  if(!panel)return;
  const spec=games[exhibits[exhibitId].game]();
  const intro=panel.querySelector('#mg-intro'),stage=panel.querySelector('#mg-stage'),result=panel.querySelector('#mg-result'),startBtn=panel.querySelector('#mg-start');
  intro.textContent=spec.intro;
  function play(){
    startBtn.style.display='none';stage.classList.add('active');stage.innerHTML='';result.classList.remove('active');result.innerHTML='';
    let cleaned=false;const cleanupFn=()=>{cleaned=true;if(typeof currentCleanup==='function')currentCleanup()};let currentCleanup=null;
    const setCleanup=fn=>{currentCleanup=fn};
    spec.render(stage,{
      win(msg){if(cleaned)return;cleaned=true;if(currentCleanup)currentCleanup();awardStamp(exhibitId);launchConfetti({count:70});panel.classList.add('won');setTimeout(()=>panel.classList.remove('won'),850);stage.classList.remove('active');result.classList.add('active');result.innerHTML=`<div class="stamp-earned">★ STAMP EARNED</div><p class="mini-msg">${msg}</p><button class="mini-again">↻ Play again</button>`;result.querySelector('.mini-again').addEventListener('click',play)},
      lose(msg){if(cleaned)return;stage.classList.remove('active');result.classList.add('active');result.innerHTML=`<p class="mini-msg bad">✗ ${msg}</p><button class="mini-again">↻ Try again</button>`;result.querySelector('.mini-again').addEventListener('click',play);panel.classList.add('shake');setTimeout(()=>panel.classList.remove('shake'),500);if(currentCleanup){currentCleanup();currentCleanup=null}}
    },setCleanup);
  }
  startBtn.addEventListener('click',play);
  if(hasStamp(exhibitId)){panel.querySelector('.mini-head h3').textContent='🎮 Mini-game · Completed';panel.querySelector('.mini-tag').textContent='★ Stamp earned'}
}

/* ---------- Render stage ---------- */
function render(){
  if(!document.getElementById('stage'))return;
  const spec=lenses[lens];
  const N=spec.ids.length;
  document.querySelectorAll('.lens-button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lens===lens)));
  lensLabel.textContent=`${spec.name.toUpperCase()} LENS`;
  stepCount.textContent=step===N?'RECAP':`${String(step+1).padStart(2,'0')} / ${String(N).padStart(2,'0')}`;
  progressFill.style.width=`${(step/N)*100}%`;
  routeList.innerHTML=spec.ids.map((id,i)=>`<li><button type="button" data-step="${i}" ${step===i?'aria-current="step"':''}><span>0${i+1} / ${rooms[exhibits[id].room].short.toUpperCase()}</span>${exhibits[id].title}</button></li>`).join('');

  if(step===N){
    const q=lenses[lens].quiz;const votes=lsGet(VOTE_KEY,{});const myVote=votes[lens];
    const seed=[...lens].reduce((a,c)=>a+c.charCodeAt(0),0);const base=q.options.map((_,i)=>18+((seed*(i+3))%37));const total=base.reduce((a,b)=>a+b,0)+(myVote!==undefined?1:0);
    content.innerHTML=`<p class="room-kicker">${N} STOPS / ONE QUESTION</p>
      <h2>${spec.name} shaped these experiences</h2>
      <p class="recap-intro">${spec.recap}</p>
      <div class="recap-list">${spec.ids.map((id,i)=>`<div><strong>0${i+1} / ${rooms[exhibits[id].room].short}</strong><p>${spec.points[i]}</p></div>`).join('')}</div>
      <div class="quiz"><h3>Quick poll</h3><p class="q-intro">${q.prompt}</p>
      <div class="quiz-options">${q.options.map(([label,note],i)=>{const c=base[i]+(myVote===i?1:0);const pct=Math.round((c/total)*100);return `<button type="button" class="quiz-option ${myVote!==undefined?'answered':''}" data-quiz="${lens}" data-opt="${i}" ${myVote!==undefined?'disabled':''} aria-pressed="${myVote===i}"><span class="vote-bar" style="width:${myVote!==undefined?pct:0}%"></span><span class="opt-label">${label}<small style="display:block;font-weight:400;font-size:.78rem;color:#a7b6c4;margin-top:3px">${note}</small></span><span class="opt-pct">${myVote!==undefined?pct+'%':''}</span></button>`}).join('')}</div>
      ${myVote!==undefined?`<p class="quiz-result">You picked "${q.options[myVote][0]}". Stored on your device only.</p><button type="button" class="quiz-reset" data-quiz-reset="${lens}">Reset my answer</button>`:`<p class="quiz-result">Pick one to see an illustrative split. Stored on your device only.</p>`}
      </div>
      <p class="recap-question">${spec.question}</p>
      <p class="fine">This comparison draws on sourced examples. It does not describe one person's experience.</p>
      <div class="stage-actions"><button class="action" type="button" data-action="restart">Choose another route</button><button class="action secondary" type="button" data-action="back">Return to last exhibit</button><a class="text-link" href="#archive">Browse all fourteen exhibits</a></div>`;
    finishRender();
    return;
  }
  const id=spec.ids[step],ex=exhibits[id];
  content.innerHTML=`<p class="room-kicker">STOP 0${step+1} / ${rooms[ex.room].title.toUpperCase()} / ${ex.year}</p>
    <h2>${ex.title}</h2>
    <div class="stage-hero">${visualHTML(id,'stage-visual')}<p class="context">${ex.body}</p></div>
    ${flowHTML(ex.flow,id)}
    <div class="compare">
      <button type="button" class="flip-card" aria-expanded="false" data-flip aria-label="Then, 2000s. Activate to reveal."><span class="flip-inner"><span class="flip-face flip-front"><span class="label">Then · 2000s</span><span class="flip-hint">Click to reveal</span></span><span class="flip-face flip-back"><span class="label">Then · 2000s</span><p class="flip-body">${ex.then}</p></span></span></button>
      <button type="button" class="flip-card" aria-expanded="false" data-flip aria-label="Now, comparison. Activate to reveal."><span class="flip-inner"><span class="flip-face flip-front"><span class="label">Now · comparison</span><span class="flip-hint">Click to reveal</span></span><span class="flip-face flip-back"><span class="label">Now · comparison</span><p class="flip-body">${ex.now}</p></span></span></button>
    </div>
    <p class="ask">Ask: ${ex.question}</p>
    <div class="sources"><span class="source-tag">Sources for this exhibit</span><br>${sourceHTML(ex.sources)}</div>
    ${renderGamePanel(id)}
    <div class="stage-actions">${step>0?'<button class="action secondary" type="button" data-action="back">← Previous stop</button>':''}<button class="action" type="button" data-action="next">${step===N-1?`Compare your ${N} stops`:'Next stop →'}</button><a class="text-link" href="#archive">Browse all fourteen exhibits</a><span class="kbd-hint"><kbd>←</kbd> <kbd>→</kbd> to navigate</span></div>`;
  initGame(id);
  lsSet(STATE_KEY,{lens,step});
  finishRender();
}

function updateStepDots(){
  const d=document.getElementById('step-dots');if(!d)return;
  const n=lenses[lens].ids.length+1;d.innerHTML=Array.from({length:n},(_,i)=>'<span class="sdot'+(i===step?' on':'')+'"></span>').join('');
}
function finishRender(){
  updateStepDots();
  content.classList.remove('stage-enter');void content.offsetWidth;content.classList.add('stage-enter');
}
function move(n,push=true){if(!stage)return;const N=lenses[lens].ids.length;step=Math.min(N,Math.max(0,n));syncURL(push);render();stage.focus({preventScroll:true});stage.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}

/* ---------- Events ---------- */
const lensOpts=document.querySelector('.lens-options');
if(lensOpts)lensOpts.addEventListener('click',e=>{const b=e.target.closest('[data-lens]');if(!b)return;lens=b.dataset.lens;move(0)});
if(routeList)routeList.addEventListener('click',e=>{const b=e.target.closest('[data-step]');if(b)move(Number(b.dataset.step))});

if(content)content.addEventListener('click',e=>{
  const flowBtn=e.target.closest('[data-flow]');
  if(flowBtn){
    const open=flowBtn.getAttribute('aria-expanded')==='true';
    flowBtn.parentElement.querySelectorAll('[data-flow]').forEach(b=>{if(b!==flowBtn)b.setAttribute('aria-expanded','false')});
    flowBtn.setAttribute('aria-expanded',String(!open));
    const ex=flowBtn.parentElement.querySelector('.flow-detail');if(ex)ex.remove();
    if(!open){const [exId,idx]=flowBtn.dataset.flow.split('-');const detail=exhibits[exId].flow[Number(idx)].detail;const div=document.createElement('div');div.className='flow-detail';div.innerHTML=`<b>Step ${Number(idx)+1}</b>${detail}`;flowBtn.parentElement.appendChild(div)}
    return;
  }
  const flip=e.target.closest('[data-flip]');
  if(flip){const open=flip.getAttribute('aria-expanded')==='true';flip.setAttribute('aria-expanded',String(!open));return}
  const qr=e.target.closest('[data-quiz-reset]');
  if(qr){const v=lsGet(VOTE_KEY,{});delete v[qr.dataset.quizReset];lsSet(VOTE_KEY,v);render();return}
  const qopt=e.target.closest('[data-quiz]');
  if(qopt){const qkey=qopt.dataset.quiz;const opt=Number(qopt.dataset.opt);const votes=lsGet(VOTE_KEY,{});if(votes[qkey]!==undefined)return;votes[qkey]=opt;lsSet(VOTE_KEY,votes);render();return}
  const b=e.target.closest('[data-action]');if(!b)return;
  if(b.dataset.action==='next')move(step+1);
  if(b.dataset.action==='back')move(step-1);
  if(b.dataset.action==='restart'){document.getElementById('choose').scrollIntoView({behavior:'smooth'});document.querySelector('.lens-button').focus()}
});

if(stage)document.addEventListener('keydown',e=>{
  const cel=document.getElementById('celebrate');
  if(cel&&!cel.hidden){if(e.key==='Escape'){e.preventDefault();closeCelebration()}return}
  if(e.target.closest('input, textarea, select'))return;
  if(e.key==='ArrowRight'&&!e.target.closest('a[href]')){e.preventDefault();move(step+1)}
  else if(e.key==='ArrowLeft'&&!e.target.closest('a[href]')){e.preventDefault();move(step-1)}
  else if(e.key==='Escape'){document.getElementById('choose').scrollIntoView({behavior:'smooth'})}
});

let tx=null,ty=null;
if(stage)stage.addEventListener('touchstart',e=>{if(e.touches.length!==1)return;tx=e.touches[0].clientX;ty=e.touches[0].clientY},{passive:true});
if(stage)stage.addEventListener('touchend',e=>{
  if(tx===null)return;const dx=e.changedTouches[0].clientX-tx,dy=e.changedTouches[0].clientY-ty;
  if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.4)move(step+(dx<0?1:-1));
  tx=null;ty=null
},{passive:true});

if(stage)window.addEventListener('popstate',()=>{const p=new URLSearchParams(location.search);lens=Object.hasOwn(lenses,p.get('lens'))?p.get('lens'):'cost';step=Math.min(lenses[lens].ids.length,Math.max(0,parseInt(p.get('step')||'0',10)||0));render()});

/* ---------- Archive (chronological) ---------- */
if(document.getElementById('rooms')){const cids=Object.keys(exhibits).sort((a,b)=>exhibits[a].year<exhibits[b].year?-1:exhibits[a].year>exhibits[b].year?1:exhibits[a].title<exhibits[b].title?-1:1);const byYear={};cids.forEach(id=>{(byYear[exhibits[id].year]=byYear[exhibits[id].year]||[]).push(id)});const roomName=id=>rooms[exhibits[id].room].short;document.getElementById('rooms').innerHTML=Object.keys(byYear).sort().map(y=>`<section class="room" aria-labelledby="room-${y}">
  <div class="room-head"><span>YEAR</span><h3 id="room-${y}">${y}</h3></div>
  <div class="cards">${byYear[y].map(id=>{const e=exhibits[id];const got=hasStamp(id);
    return `<article class="card" id="exhibit-${id}" data-year="${e.year}">
      <div style="position:relative">${visualHTML(id,'card-media')}<div class="card-stamp ${got?'got':''}">★</div></div>
      <div class="card-body">
        <p class="source-tag">${e.year} / ${roomName(id)}</p>
        <h4>${e.title}</h4>
        <p>${e.body}</p>
        <p class="mini-flow">${e.flow.map(f=>f.label).join(' → ')}</p>
        <div>${sourceHTML(e.sources)}</div>
        <div><button type="button" class="mini-again card-play" data-play="${id}">\u25b6 Play mini-game</button></div>
        <div class="card-game" hidden></div>
      </div>
    </article>`}).join('')}</div>
</section>`).join('');
document.querySelectorAll('#rooms [data-play]').forEach(b=>b.addEventListener('click',()=>{
  const card=b.closest('.card'),id=b.dataset.play,slot=card.querySelector('.card-game');
  if(!slot.innerHTML){slot.innerHTML=renderGamePanel(id);initGame(id,card)}
  slot.hidden=!slot.hidden;
  b.textContent=slot.hidden?'\u25b6 Play mini-game':'\u2715 Close game';
}));}

/* ---------- Arcade ---------- */
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function passUI(got,total){const c=$('#pass-card');if(!c)return;const left=total-got;$('#pass-n').textContent=`${got}/${total}`;c.classList.toggle('done',!left);$('#pass-msg').textContent=left?`Museum pass: ${left} more stamp${left>1?'s':''} to collect. Win each exhibit's mini-game to earn one.`:'Certified '+(DECADE==='2020s'?'2020s':'2000s')+' kid. All '+total+' exhibits stamped.';$('#pass-copy').hidden=!!left}
const passCopy=$('#pass-copy');
if(passCopy)passCopy.addEventListener('click',e=>{const b=e.currentTarget;const t='I collected all 14 stamps at The 2000s Called, a Philippine pop culture museum.';try{navigator.clipboard.writeText(t).then(()=>b.textContent='Copied!')}catch(x){b.textContent='Copy failed'}});

(()=>{/* Pasaload Snake */
if(!document.getElementById('snk'))return;
const cv=$('#snk'),g=cv.getContext('2d'),N=16,M=12,S=20,scEl=$('#snk-score'),bEl=$('#snk-best'),msg=$('#snk-msg'),go=$('#snk-go');
const D={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0],w:[0,-1],s:[0,1],a:[-1,0],d:[1,0]};
let sn,d,q,f,sc=0,tm=null,paused=false,best=lsGet('museum-snake',0);bEl.textContent=best;
const put=()=>{do f=[Math.random()*N|0,Math.random()*M|0];while(sn.some(p=>p[0]===f[0]&&p[1]===f[1]))};
function draw(){g.fillStyle='#b5cc7a';g.fillRect(0,0,320,240);g.fillStyle='#1e2b12';sn.forEach(p=>g.fillRect(p[0]*S+1,p[1]*S+1,S-2,S-2));g.font='bold 16px "Space Mono",monospace';g.textBaseline='top';g.fillText('₱',f[0]*S+3,f[1]*S+2)}
function end(){cv.classList.add('dead');setTimeout(()=>cv.classList.remove('dead'),700);clearInterval(tm);tm=null;if(sc>best){best=sc;lsSet('museum-snake',best);bEl.textContent=best}msg.textContent=`Line cut at ₱${sc} load. Press Redial to try again.`;go.textContent='↻ Redial'}
function tick(){d=q;const h=[(sn[0][0]+d[0]+N)%N,(sn[0][1]+d[1]+M)%M];if(sn.some(p=>p[0]===h[0]&&p[1]===h[1])){end();return}sn.unshift(h);if(h[0]===f[0]&&h[1]===f[1]){sc+=5;scEl.textContent=sc;const sp=scEl.parentElement;sp.classList.add('bump');setTimeout(()=>sp.classList.remove('bump'),320);put()}else sn.pop();draw()}
function start(){cv.classList.remove('dead');sn=[[5,6],[4,6],[3,6]];d=q=[1,0];sc=0;scEl.textContent=0;put();msg.textContent='Eat the ₱ to top up. Don’t bite your own line.';clearInterval(tm);tm=setInterval(tick,115);paused=false;draw();cv.focus({preventScroll:true})}
const steer=v=>{if(!tm||!v)return;if(v[0]!==-d[0]||v[1]!==-d[1])q=v};
go.addEventListener('click',start);
cv.addEventListener('keydown',e=>{const v=D[e.key.length>1?e.key:e.key.toLowerCase()];if(v){e.preventDefault();e.stopPropagation();steer(v)}});
cv.addEventListener('blur',()=>{if(tm){clearInterval(tm);tm=null;paused=true;msg.textContent='Paused. Click the screen to resume.'}});
cv.addEventListener('focus',()=>{if(paused){paused=false;tm=setInterval(tick,115);msg.textContent='Back on the line.'}});
cv.addEventListener('click',()=>cv.focus());
document.querySelector('.dpad').addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(b){if(!tm&&!paused)start();steer(D[b.dataset.k])}});
let sx,sy;cv.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});
cv.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.max(Math.abs(dx),Math.abs(dy))<20)return;steer(Math.abs(dx)>Math.abs(dy)?D[dx>0?'ArrowRight':'ArrowLeft']:D[dy>0?'ArrowDown':'ArrowUp'])},{passive:true});
sn=[[5,6],[4,6],[3,6]];f=[10,6];draw();
})();

(()=>{/* T9 Texter */
if(!document.getElementById('t9-pad'))return;
const K={2:'abc',3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz',0:' '},P=['kumusta','tara na','miss u'],pad=$('#t9-pad');
let r,txt,lk,lt,t0,pr,fin;
pad.innerHTML=[1,2,3,4,5,6,7,8,9,'*',0,'#'].map(k=>{if(k===1||k==='*'||k==='#')return `<button type="button" disabled aria-label="Key ${k}, not needed for these messages"><b>${k}</b><small>&nbsp;</small></button>`;return `<button type="button" data-k="${k}"><b>${k===0?'␣':k}</b><small>${K[k].trim()||'space'}</small></button>`}).join('');
function show(){$('#t9-target').textContent=P[Math.min(r,2)];$('#t9-out').textContent=txt+'▮';if(!fin)$('#t9-info').textContent=`Message ${r+1}/3 · ${pr} presses`}
function reset(){r=0;txt='';lk=null;lt=0;t0=0;pr=0;fin=false;show()}
pad.addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(!b||fin)return;b.classList.add('tap');setTimeout(()=>b.classList.remove('tap'),170);const k=b.dataset.k,L=K[k],now=Date.now();if(!t0)t0=now;pr++;
  if(k===lk&&now-lt<900&&L.length>1)txt=txt.slice(0,-1)+L[(L.indexOf(txt.slice(-1))+1)%L.length];else txt+=L[0];
  lk=k;lt=now;
  if(txt===P[r]){r++;txt='';lk=null;if(r===3){fin=true;const s=((now-t0)/1000).toFixed(1),old=lsGet('museum-t9',null);if(old===null||+s<old)lsSet('museum-t9',+s);$('#t9-info').textContent=`Sent all 3 in ${s}s with ${pr} presses. Best: ${lsGet('museum-t9',s)}s`;$('#t9-target').textContent='All sent!';$('#t9-out').textContent='✓ Delivered';return}}
  show()});
$('#t9-del').addEventListener('click',()=>{if(fin)return;txt=txt.slice(0,-1);lk=null;show()});
$('#t9-reset').addEventListener('click',reset);reset();
})();

(()=>{/* Sari-Sari Sukli */
if(!document.getElementById('suk-pad'))return;
const pad=$('#suk-pad'),give=$('#suk-give'),clr=$('#suk-clear'),again=$('#suk-again');
const tEl=$('#suk-total'),pEl=$('#suk-paid'),dEl=$('#suk-due'),rEl=$('#suk-tray'),info=$('#suk-info'),msg=$('#suk-msg');
const scEl=$('#suk-score'),missEl=$('#suk-miss'),bestEl=$('#suk-best');
const card=pad.closest('.arc-card');
let total,paid,due,tray,cust,score,miss,over,best=lsGet('museum-sukli',0);
if(best)bestEl.textContent=best;
function update(){
  tEl.textContent='₱'+total;pEl.textContent='₱'+paid;dEl.textContent='₱'+due;rEl.textContent='₱'+tray;
  info.textContent=`Customer ${cust+1}/10`;scEl.textContent=score;missEl.textContent=miss;
}
function newCustomer(){
  total=5+Math.floor(Math.random()*91);
  paid=[20,50,100].find(b=>b>total);
  due=paid-total;tray=0;update();
}
function reset(){
  cust=0;score=0;miss=0;over=false;again.hidden=true;
  msg.textContent='Give the EXACT change. Tap coins and bills, then hit “Give change”.';
  newCustomer();
}
function finish(won){
  over=true;
  if(score>best){best=score;lsSet('museum-sukli',best);bestEl.textContent=best}
  msg.textContent=won
    ?`🎉 Shift complete! You served all 10 customers. Best shift: ${best}.`
    :`Shift over. 3 mistakes. You served ${score} customer${score===1?'':'s'}. Best: ${best}.`;
  again.hidden=false;
}
pad.addEventListener('click',e=>{const b=e.target.closest('button[data-v]');if(!b||over)return;tray+=Number(b.dataset.v);update()});
clr.addEventListener('click',()=>{if(over)return;tray=0;update()});
give.addEventListener('click',()=>{
  if(over)return;
  if(tray===due){
    score++;cust++;update();
    if(cust>=10){finish(true);return}
    msg.textContent=`Sakto! Customer ${cust} served. Next customer, please.`;
    setTimeout(()=>{if(!over)newCustomer()},650);
  }else{
    miss++;update();
    card.classList.add('shake');setTimeout(()=>card.classList.remove('shake'),500);
    if(miss>=3){finish(false);return}
    msg.textContent=tray>due
      ?`Too much. Take back ₱${tray-due} and try again.`
      :`Kulang pa. Short by ₱${due-tray}. Add more.`;
  }
});
again.addEventListener('click',reset);
reset();
})();

(()=>{/* Nokia mode */
const t=$('#lcd-toggle');if(!t)return;const set=on=>{document.documentElement.classList.toggle('nokia',on);t.setAttribute('aria-pressed',String(on));lsSet('museum-nokia',on)};
t.addEventListener('click',()=>set(t.getAttribute('aria-pressed')!=='true'));if(lsGet('museum-nokia',false))set(true);
})();

/* ---------- Guestbook: shared backend with localStorage fallback ---------- */
if(document.getElementById('gb-form')){
const gbForm=document.getElementById('gb-form'),gbEntries=document.getElementById('gb-entries'),gbBadge=document.getElementById('gb-badge'),gbNote=document.getElementById('gb-note');
let gbLive=false;
const gbBase=()=>GUESTBOOK_API_URL.replace(/\/$/,'');
function gbShowNote(msg){gbNote.textContent=msg;gbNote.hidden=!msg}
function gbEntryHTML(e){
  let ts='';try{ts=e.ts?new Date(e.ts).toLocaleString('en-PH',{day:'numeric',month:'short',year:'numeric',hour:'numeric',minute:'2-digit'}):''}catch(_){ts=''}
  return `<div class="gb-entry"><div class="gb-who">${esc(e.who)}${e.where?' · '+esc(e.where):''}${ts?'<span class="gb-ts">'+esc(ts)+'</span>':''}</div><p class="gb-msg">${esc(e.msg)}</p></div>`;
}
function renderGB(list){
  if(!list.length){gbEntries.innerHTML='<p class="gb-empty">📼 The tape is blank.<br>Be the first to sign the guestbook.</p>';return}
  gbEntries.innerHTML=list.slice().reverse().map(gbEntryHTML).join('');
}
function gbGoLocal(){
  gbLive=false;gbBadge.hidden=true;
  gbShowNote('Couldn\'t reach the shared guestbook. Showing entries from this device.');
  renderGB(lsGet(GB_KEY,[]));
}
async function gbLoad(){
  if(!GUESTBOOK_API_URL){gbGoLocal();return}
  gbShowNote('Waking up the shared guestbook\u2026');
  try{
    const r=await fetch(gbBase()+'/api/entries');
    if(!r.ok)throw new Error('bad status');
    const list=await r.json();
    gbLive=true;gbBadge.hidden=false;gbShowNote('');
    const server=Array.isArray(list)?list:[];
    const gk=e=>[e.who||'',e.where||'',e.msg||''].join('\u00a6');
    const seen=new Set(server.map(gk));
    const onlyLocal=lsGet(GB_KEY,[]).filter(e=>!seen.has(gk(e)));
    renderGB(server.concat(onlyLocal));
    if(onlyLocal.length){
      try{
        for(const e of onlyLocal){
          const pr=await fetch(gbBase()+'/api/entries',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({who:e.who,where:e.where,msg:e.msg})});
          if(!pr.ok)throw new Error('sync failed');
        }
        lsSet(GB_KEY,[]);
        const r2=await fetch(gbBase()+'/api/entries');
        if(r2.ok){const l2=await r2.json();renderGB(Array.isArray(l2)?l2:[]);}
      }catch(_){}
    }
  }catch(e){gbGoLocal()}
}
gbForm.addEventListener('submit',async e=>{
  e.preventDefault();
  const who=document.getElementById('gb-name').value.trim();
  const where=document.getElementById('gb-where').value.trim();
  const msg=document.getElementById('gb-msg').value.trim();
  if(!who||!msg)return;
  const btn=gbForm.querySelector('button[type="submit"]'),oldLabel=btn.textContent;
  btn.disabled=true;btn.textContent='Signing…';
  try{
    if(gbLive){
      const r=await fetch(gbBase()+'/api/entries',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({who,where,msg})});
      if(!r.ok)throw new Error('post failed');
      await r.json();
      await gbLoad();
    }else{
      const list=lsGet(GB_KEY,[]);
      list.push({who,where,msg,ts:Date.now()});
      lsSet(GB_KEY,list);
      renderGB(list);
    }
    gbForm.reset();
  }catch(err){
    const list=lsGet(GB_KEY,[]);
    list.push({who,where,msg,ts:Date.now()});
    lsSet(GB_KEY,list);
    gbGoLocal();
    gbForm.reset();
  }finally{
    btn.disabled=false;btn.textContent=oldLabel;
  }
});
gbLoad();
}

/* ---------- Init ---------- */
updateStampUI();
if(document.getElementById('stage')){syncURL(false);render();}

/* ---------- Enhancement init ---------- */
(function(){
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.room,.card,.arc-card,.section-heading,.guestbook-inner').forEach(el=>el.classList.add('reveal'));
  const revealEls=document.querySelectorAll('.reveal');
  if(!reduceMotion&&'IntersectionObserver' in window){
    const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('revealed');io.unobserve(en.target)}}),{threshold:.1,rootMargin:'0px 0px -36px 0px'});
    revealEls.forEach(el=>io.observe(el));
  }else{revealEls.forEach(el=>el.classList.add('revealed'))}
  const toTop=document.getElementById('to-top');
  window.addEventListener('scroll',()=>{toTop.classList.toggle('show',window.scrollY>700)},{passive:true});
  toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:reduceMotion?'auto':'smooth'}));
  document.getElementById('celebrate-close').addEventListener('click',closeCelebration);
  document.getElementById('celebrate').addEventListener('click',e=>{if(e.target.id==='celebrate')closeCelebration()});
  const coverArt=document.querySelector('.cover-art');
  if(coverArt&&!reduceMotion){
    let ticking=false;
    window.addEventListener('scroll',()=>{
      if(ticking)return;ticking=true;
      requestAnimationFrame(()=>{
        const r=coverArt.getBoundingClientRect();
        if(r.bottom>0&&r.top<window.innerHeight){
          const off=Math.max(-36,Math.min(36,(r.top+r.height/2-window.innerHeight/2)*-0.05));
          coverArt.style.transform='translateY('+off.toFixed(1)+'px)';
        }
        ticking=false;
      });
    },{passive:true});
  }
})();

/* ============ PASS 3: quiz, photo booth, soundboard, timeline, i18n, presence, memory wall ============ */
(()=>{
'use strict';
const $=s=>document.querySelector(s);
const esc2=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------------- Taglish toggle ---------------- */
let LANG='en';
try{LANG=localStorage.getItem('museum-lang')||'en'}catch(e){}
const T={
 'nav-home':['Lobby','Lobby'],
 'nav-archive':['Exhibit Halls','Mga Exhibit'],
 'nav-play':['Arcade & Playground','Arcade at Palaruan'],
 'nav-gb':['Guestbook','Guestbook'],
 'archive-title':['Browse all fourteen exhibits','Tingnan ang labing-apat na exhibit'],
 'arch-sub':['The full collection in chronological order, 2000 to 2010. Each card links to its source and the exhibit\u2019s mini-game.','Ang buong koleksyon ayon sa taon, 2000 hanggang 2010. Bawat card may link sa source at mini-game.'],
 'arc-title':['The Arcade','Ang Arcade'],
 'arc-sub':['Three bonus games from the phone in your pocket. Play any time, no stamp needed.','Tatlong bonus game mula sa bulsa mo. Laroin kahit kailan, walang stamp na kailangan.'],
 'quiz-title':['Which 2000s icon are you?','Anong 2000s icon ka?'],
 'quiz-sub':['Answer 5 quick questions. We will match you to the exhibit that raised you, then generate a shareable ID card.','Sagutin ang 5 mabilis na tanong. Itutugma ka namin sa exhibit na nagpalaki sa iyo, at gagawa kami ng ID card na puwede mong i-share.'],
 'pg-title':['Time-machine playground','Palaruan ng time machine'],
 'pg-sub':['Remix yourself into the 2000s, then press play on its sounds.','I-remix ang sarili mo pabalik sa 2000s, tapos i-play ang mga tunog nito.'],
 'pb-title':['\ud83d\udcf8 2000s photo booth','\ud83d\udcf8 Photo booth ng 2000s'],
 'pb-sub':['Upload a photo and get it back the 2007 way: pixelated, timestamped, Friendster-framed.','Mag-upload ng litrato at ibabalik namin itong 2007-style: pixelated, may timestamp, may Friendster frame.'],
 'pb-choose':['Choose photo','Pumili ng litrato'],
 'pb-dl':['Download photo','I-download ang litrato'],
 'sb-title':['\ud83d\udd0a Soundboard','\ud83d\udd0a Soundboard'],
 'sb-sub':['Every sound synthesized live in your browser. No audio files, just WebAudio.','Bawat tunog gawa mismo sa browser mo. Walang audio file, WebAudio lang.'],
 'sb-nokia':['Nokia tune','Nokia tune'],
 'sb-static':['TV static','TV static'],
 'sb-dial':['Dial-up','Dial-up'],
 'sb-sms':['Text received','May text'],
 'sb-ring':['Landline ring','Landline ring'],
 'sb-busy':['Busy signal','Busy signal'],
 'sb-shutter':['Digicam shutter','Digicam shutter'],
 'sb-pager':['Pager beep','Pager beep'],
 'sb-windows':['Windows startup','Windows startup'],
 'sb-videoke':['Videoke countdown','Videoke countdown'],
 'gb-title':['Sign the guestbook','Lumagda sa guestbook'],
 'gb-intro':['Leave a note about your favourite 2000s memory.','Mag-iwan ng mensahe tungkol sa paborito mong alaala noong 2000s.'],
 'gb-submit':['Sign the guestbook \u2192','Lumagda sa guestbook \u2192'],
 'presence-txt':['visiting right now','bumibisita ngayon'],
 'mem-title':['Community memory wall','Pader ng mga alaala'],
 'mem-sub':['Pin your own 2000s memory for every visitor to read.','I-pin ang sarili mong alaala noong 2000s para mabasa ng lahat.'],
 'mem-submit':['Pin my memory \u2192','I-pin ang alaala ko \u2192']
};
if(window.T20)Object.assign(T,window.T20);
const TPH={
 'gb-name':['Your name or handle','Pangalan o handle'],
 'gb-where':['Where are you visiting from? (optional)','Taga-saan ka? (opsyonal)'],
 'gb-msg':['What do you remember from the 2000s?','Anong naaalala mo noong 2000s?'],
 'mem-name':['Your name','Pangalan mo'],
 'mem-when':['Year (e.g. 2007)','Taon (hal. 2007)'],
 'mem-msg':['Your 2000s memory\u2026','Ang alaala mo noong 2000s\u2026']
};
function applyLang(){
  for(const id in T){const el=document.getElementById(id);if(el)el.textContent=T[id][LANG==='tl'?1:0];}
  for(const id in TPH){const el=document.getElementById(id);if(el)el.placeholder=TPH[id][LANG==='tl'?1:0];}
  const b=document.getElementById('lang-toggle');
  if(b){b.classList.toggle('on',LANG==='tl');b.setAttribute('aria-pressed',LANG==='tl');}
  try{localStorage.setItem('museum-lang',LANG)}catch(e){}
  pqRender();
}
document.getElementById('lang-toggle').addEventListener('click',()=>{LANG=LANG==='tl'?'en':'tl';applyLang();});

/* ---------------- Quiz: which 2000s icon are you? ---------------- */
const ARCH00={
 sms:{n:['The Texter','Ang Texter'],ex:'sms'},
 friendster:{n:['The Profile Curator','Ang Curator ng Profile'],ex:'friendster'},
 ofw:{n:['The Bridge','Ang Tulay'],ex:'ofw'},
 meteor:{n:['The Teleserye Devotee','Ang Teleserye Fan'],ex:'meteor'},
 boxing:{n:['The Fight Night Fan','Ang Fight Night Fan'],ex:'boxing'},
 cafe:{n:['The Piso Net Regular','Ang Suki ng Piso Net'],ex:'cafe'}
};
const ARCH=(DECADE==='2020s'&&window.ARCH20)?window.ARCH20:ARCH00;
const PQQ00=[
 {q:['It\u2019s Friday night in 2007. Where are you?','Biyernes ng gabi, 2007. Nasaan ka?'],o:[
  ['At the barangay Pacquiao screening','Sa public screening ng laban ni Pacquiao','boxing'],
  ['Racking up hours at the internet caf\u00e9','Nagpapalipas ng oras sa internet caf\u00e9','cafe'],
  ['Glued to the TV at home','Nakatutok sa TV sa bahay','meteor'],
  ['Texting everyone I know','Tine-text ang lahat ng kakilala','sms']]},
 {q:['Pick a sound:','Pumili ng tunog:'],o:[
  ['The Nokia tune','Ang Nokia tune','sms'],
  ['The dial-up handshake','Ang dial-up handshake','cafe'],
  ['TV static before your show','TV static bago ang palabas','meteor'],
  ['An OFW\u2019s voice on a crackling line','Boses ng OFW sa mahinang linya','ofw']]},
 {q:['Your last \u20b120 of load goes to\u2026','Ang huling \u20b120 ng load mo ay para sa\u2026'],o:[
  ['Texting your crush','Pag-text sa crush','sms'],
  ['Updating your Friendster profile','Pag-update ng Friendster profile','friendster'],
  ['Calling family abroad','Pagtawag sa pamilya sa abroad','ofw'],
  ['An hour of piso net','Isang oras ng piso net','cafe']]},
 {q:['Choose a 2000s superpower:','Pumili ng 2000s superpower:'],o:[
  ['Teleporting to a Pacquiao fight','Teleport papunta sa laban ni Pacquiao','boxing'],
  ['Texting at 160 characters per minute','Mabilis mag-text, 160 characters kada minuto','sms'],
  ['A Friendster profile with 500 friends','Friendster profile na may 500 friends','friendster'],
  ['A text that crosses oceans instantly','Text na tumatawid ng karagatan','ofw']]},
 {q:['Your ideal pasalubong from 2007:','Ang ideal mong pasalubong mula 2007:'],o:[
  ['A phonebook full of crush numbers','Phonebook na puno ng number ng crush','sms'],
  ['A perfectly curated profile','Perpektong profile','friendster'],
  ['An hour of uninterrupted piso net','Isang oras ng tuloy-tuloy na piso net','cafe'],
  ['The Meteor Garden finale on CD','Ang finale ng Meteor Garden sa CD','meteor']]}
];
const PQQ=(DECADE==='2020s'&&window.PQQ20)?window.PQQ20:PQQ00;
let pqStep=0,pqScore={},pqDots=null;
function pqTone(f,d,type,g){try{const c=ac();if(c.state==='suspended')c.resume();tone(f,c.currentTime+.02,d||.07,type||'square',g||.07);}catch(e){}}
function pqFanfare(){[523.25,659.25,783.99,1046.5].forEach((f,i)=>{try{const c=ac();if(c.state==='suspended')c.resume();tone(f,c.currentTime+.02+i*.11,.16,'triangle',.09);}catch(e){}})}
function pqRender(){
  if(!document.getElementById('pq-q'))return;
  const box=$('#pquiz'),res=$('#pq-result');
  if(!pqDots){pqDots=document.createElement('div');pqDots.className='pq-dots';pqDots.setAttribute('aria-hidden','true');box.insertBefore(pqDots,box.firstChild);}
  if(pqStep>=PQQ.length){box.hidden=true;res.hidden=false;pqDraw();
    const card=$('#pq-card');card.classList.remove('deal');void card.offsetWidth;card.classList.add('deal');
    launchConfetti({count:90});pqFanfare();return;}
  box.hidden=false;res.hidden=true;
  pqDots.innerHTML=[0,1,2,3,4].map(i=>'<span class="'+(i<pqStep?'done':i===pqStep?'on':'')+'"></span>').join('');
  const q=PQQ[pqStep],li=LANG==='tl'?1:0;
  $('#pq-q').textContent=(pqStep+1)+'. '+q.q[li];
  $('#pq-opts').innerHTML=q.o.map((o,i)=>'<button type="button" class="pq-opt" data-a="'+o[2]+'">'+esc2(o[li])+'</button>').join('');
  $('#pq-progress').textContent=(li?'Tanong ':'Question ')+(pqStep+1)+' / '+PQQ.length;
  $('#pq-opts').querySelectorAll('.pq-opt').forEach(b=>b.addEventListener('click',()=>{
    pqTone(740);setTimeout(()=>pqTone(1108),55);pqScore[b.dataset.a]=(pqScore[b.dataset.a]||0)+1;pqStep++;pqRender();
  }));
}
function pqWinner(){
  let best='sms',bs=-1;
  for(const k in ARCH){const v=pqScore[k]||0;if(v>bs){bs=v;best=k;}}
  return best;
}
function pqDraw(){
  const c=$('#pq-card'),x=c.getContext('2d'),li=LANG==='tl'?1:0;
  const w=pqWinner(),a=ARCH[w];
  let exTitle='',exYear='';
  try{exTitle=exhibits[a.ex].title;exYear=exhibits[a.ex].year;}catch(e){}
  x.fillStyle='#fffefa';x.fillRect(0,0,600,340);
  x.strokeStyle='#101927';x.lineWidth=6;x.strokeRect(8,8,584,324);
  x.fillStyle='#101927';x.fillRect(8,8,584,64);
  x.fillStyle='#fffefa';x.font='900 26px Archivo Black, Impact, sans-serif';x.textAlign='center';
  x.fillText(DECADE==='2020s'?'THE 2020s CALLING.':'THE 2000s CALLED.',300,52);
  x.fillStyle='#ff835d';x.font='900 44px Archivo Black, Impact, sans-serif';
  const nm=a.n[li];x.fillText(nm.length>22?nm.slice(0,22):nm,300,140);
  x.fillStyle='#4a5a6a';x.font='16px "DM Sans", sans-serif';
  const wrap=exTitle;let line='';
  const words=String(wrap).split(' ');
  let yy=180;
  words.forEach(wd=>{if((line+' '+wd).length>44){x.fillText(line.trim(),300,yy);yy+=22;line='';}line+=' '+wd;});
  x.fillText(line.trim(),300,yy);yy+=26;
  x.fillStyle='#101927';x.font='bold 15px "Space Mono", monospace';
  x.fillText('MATCHED EXHIBIT \u00b7 '+exYear,300,yy+8);
  x.save();x.translate(480,250);x.rotate(-0.22);
  x.strokeStyle='#d33f2e';x.lineWidth=3;x.strokeRect(-110,-34,220,68);
  x.fillStyle='#d33f2e';x.font='900 20px Archivo Black, Impact, sans-serif';
  x.fillText(li?'CERTIFIED':'CERTIFIED',0,8);x.restore();
  x.fillStyle='#6b7d90';x.font='13px "Space Mono", monospace';x.textAlign='left';
  const d=new Date();
  x.fillText('Issued '+(d.getMonth()+1)+'/'+d.getDate()+'/'+d.getFullYear()+' \u00b7 '+(DECADE==='2020s'?'the-2020s-calling':'the-2000s-called-museum'),28,316);
}
const pqDl=$('#pq-dl');
if(pqDl)pqDl.addEventListener('click',()=>{pqTone(1320,.05);
  const a=document.createElement('a');
  a.download=(DECADE==='2020s'?'2020s':'2000s')+'-id-card.png';a.href=$('#pq-card').toDataURL('image/png');a.click();
});
const pqRt=$('#pq-retry');
if(pqRt)pqRt.addEventListener('click',()=>{pqTone(520);setTimeout(()=>pqTone(340),70);pqStep=0;pqScore={};pqRender();});

/* ---------------- Photo booth ---------------- */
const pbC=$('#pb-canvas');
if(pbC){
const pbX=pbC.getContext('2d');
let pbImg=null,pbFilter=window.PB_DEFAULT||'y2k';
function pbDraw(){
  if(window.pbDraw20&&['fyp','igstory','zoom'].includes(pbFilter))return window.pbDraw20(pbX,pbImg);
  const W=480,H=360;pbX.fillStyle='#101927';pbX.fillRect(0,0,W,H);
  if(!pbImg){pbX.fillStyle='#6b7d90';pbX.font='15px "DM Sans",sans-serif';pbX.textAlign='center';pbX.fillText(LANG==='tl'?'Pumili ng litrato':'Choose a photo',W/2,H/2);return;}
  const ir=pbImg.width/pbImg.height,cr=W/H;
  let sw,sh,sx,sy;
  if(ir>cr){sh=pbImg.height;sw=sh*cr;sx=(pbImg.width-sw)/2;sy=0;}else{sw=pbImg.width;sh=sw/cr;sx=0;sy=(pbImg.height-sh)/2;}
  if(pbFilter==='y2k'){
    const tw=96,th=Math.round(96*H/W);
    const off=document.createElement('canvas');off.width=tw;off.height=th;
    const ox=off.getContext('2d');ox.drawImage(pbImg,sx,sy,sw,sh,0,0,tw,th);
    pbX.imageSmoothingEnabled=false;pbX.drawImage(off,0,0,tw,th,0,0,W,H);pbX.imageSmoothingEnabled=true;
    pbX.fillStyle='rgba(255,255,255,.92)';pbX.font='bold 17px "Space Mono",monospace';pbX.textAlign='right';
    pbX.fillText('07\u00b714\u00b72007',W-14,H-14);
  }else if(pbFilter==='friendster'){
    pbX.fillStyle='#fff';pbX.fillRect(0,0,W,H);
    pbX.drawImage(pbImg,sx,sy,sw,sh,24,20,W-48,H-110);
    pbX.fillStyle='#101927';pbX.font='bold 19px "DM Sans",sans-serif';pbX.textAlign='center';
    pbX.fillText('\u2665 my profile pic \u2665',W/2,H-52);
    pbX.fillStyle='#8fa4b5';pbX.font='13px "Space Mono",monospace';
    pbX.fillText('friendster.com \u00b7 2007',W/2,H-28);
  }else{ /* cctv */
    pbX.drawImage(pbImg,sx,sy,sw,sh,0,0,W,H);
    const id=pbX.getImageData(0,0,W,H),d=id.data;
    for(let i=0;i<d.length;i+=4){const g=d[i]*.3+d[i+1]*.59+d[i+2]*.11;d[i]=d[i+1]=d[i+2]=g;}
    pbX.putImageData(id,0,0);
    pbX.fillStyle='rgba(0,0,0,.16)';
    for(let y=0;y<H;y+=4)pbX.fillRect(0,y,W,2);
    pbX.fillStyle='#ff3b30';pbX.beginPath();pbX.arc(28,28,7,0,7);pbX.fill();
    pbX.fillStyle='#fff';pbX.font='bold 16px "Space Mono",monospace';pbX.textAlign='left';
    pbX.fillText('CAM 04',44,34);pbX.textAlign='right';pbX.fillText('2007-07-14 21:37',W-14,34);
  }
}
$('#pb-file').addEventListener('change',e=>{
  const f=e.target.files[0];if(!f)return;
  const img=new Image();
  img.onload=()=>{pbImg=img;pbDraw();URL.revokeObjectURL(img.src);};
  img.src=URL.createObjectURL(f);
});

document.querySelectorAll('.chip[data-f]').forEach(ch=>ch.addEventListener('click',()=>{
  document.querySelectorAll('.chip[data-f]').forEach(c=>c.classList.remove('on'));
  ch.classList.add('on');pbFilter=ch.dataset.f;pbDraw();
}));
$('#pb-dl').addEventListener('click',()=>{
  if(!pbImg)return;
  const a=document.createElement('a');a.download=(DECADE==='2020s'?'2020s':'2000s')+'-photo.png';a.href=pbC.toDataURL('image/png');a.click();
});
pbDraw();
}

/* ---------------- Soundboard (WebAudio, synthesized) ---------------- */
let AC=null;
const ac=()=>AC||(AC=new (window.AudioContext||window.webkitAudioContext)());
function tone(f,t,d,type,g){
  const c=ac(),o=c.createOscillator(),v=c.createGain();
  o.type=type||'sine';o.frequency.value=f;
  v.gain.setValueAtTime(0.0001,t);v.gain.exponentialRampToValueAtTime(g||.18,t+.015);
  v.gain.exponentialRampToValueAtTime(0.0001,t+d);
  o.connect(v);v.connect(c.destination);o.start(t);o.stop(t+d+.05);
}
function sbNote(m){$('#sb-note').textContent=m;}
if(document.getElementById('sb-nokia'))document.getElementById('sb-nokia').addEventListener('click',()=>{
  const c=ac();if(c.state==='suspended')c.resume();
  const N=[[659.25,.16],[587.33,.16],[369.99,.32],[415.30,.32],[554.37,.16],[493.88,.16],[293.66,.32],[329.63,.32],[493.88,.16],[440,.16],[277.18,.32],[329.63,.32],[440,.8]];
  let t=c.currentTime+.05;
  N.forEach(n=>{tone(n[0],t,n[1],'square',.07);t+=n[1]+.02;});
  sbNote(LANG==='tl'?'Gran Vals, ang Nokia tune':'Gran Vals, the Nokia tune');
});
if(document.getElementById('sb-static'))document.getElementById('sb-static').addEventListener('click',()=>{
  const c=ac();if(c.state==='suspended')c.resume();
  const len=c.sampleRate*1.4,buf=c.createBuffer(1,len,c.sampleRate),d=buf.getChannelData(0);
  for(let i=0;i<len;i++)d[i]=Math.random()*2-1;
  const src=c.createBufferSource();src.buffer=buf;
  const f=c.createBiquadFilter();f.type='bandpass';f.frequency.value=1800;f.Q.value=.6;
  const g=c.createGain();g.gain.setValueAtTime(.22,c.currentTime);
  g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+1.4);
  src.connect(f);f.connect(g);g.connect(c.destination);src.start();
  sbNote(LANG==='tl'?'TV static, hintay ng palabas':'TV static, waiting for the show');
});
if(document.getElementById('sb-dial'))document.getElementById('sb-dial').addEventListener('click',()=>{
  const c=ac();if(c.state==='suspended')c.resume();
  let t=c.currentTime+.05;
  tone(350,t,.35,'sine',.12);tone(440,t,.35,'sine',.12);t+=.45;
  [[1200,.07],[2200,.07],[1200,.07],[2400,.12],[1400,.07],[2400,.07],[1400,.12]].forEach(n=>{tone(n[0],t,n[1],'sine',.1);t+=n[1]+.03;});
  sbNote('56k handshake');
});
if(document.getElementById('sb-sms'))document.getElementById('sb-sms').addEventListener('click',()=>{
  const c=ac();if(c.state==='suspended')c.resume();
  const t=c.currentTime+.05;
  tone(880,t,.1,'sine',.16);tone(880,t+.16,.14,'sine',.16);
  sbNote(LANG==='tl'?'May text ka!':'You\u2019ve got text!');
});

if(document.getElementById('sb-ring'))document.getElementById('sb-ring').addEventListener('click',()=>{
  const c=ac();if(c.state==='suspended')c.resume();
  const t0=c.currentTime+.05;
  const o=c.createOscillator(),o2=c.createOscillator(),g=c.createGain(),lfo=c.createOscillator(),lg=c.createGain();
  o.frequency.value=440;o2.frequency.value=480;lfo.frequency.value=20;lg.gain.value=.09;g.gain.value=.14;
  lfo.connect(lg.gain);o.connect(g);o2.connect(g);lg.connect(g.gain);g.connect(c.destination);
  o.start(t0);o2.start(t0);lfo.start(t0);
  const stop=t0+1.6;o.stop(stop);o2.stop(stop);lfo.stop(stop);
  sbNote(LANG==='tl'?'May tumatawag sa landline!':'Landline ringing!');
});
if(document.getElementById('sb-busy'))document.getElementById('sb-busy').addEventListener('click',()=>{
  const c=ac();if(c.state==='suspended')c.resume();
  const t=c.currentTime+.05;
  for(let i=0;i<4;i++){tone(480,t+i*.5,.25,'sine',.13);tone(620,t+i*.5,.25,'sine',.13);}
  sbNote(LANG==='tl'?'Busy. Ibaba mo muna.':'Busy signal. Try again later.');
});
if(document.getElementById('sb-shutter'))document.getElementById('sb-shutter').addEventListener('click',()=>{
  const c=ac();if(c.state==='suspended')c.resume();
  const t=c.currentTime+.05;
  const burst=(at,dur,vol,type,ff)=>{const len=Math.floor(c.sampleRate*dur),buf=c.createBuffer(1,len,c.sampleRate),d=buf.getChannelData(0);
    for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,2);
    const src=c.createBufferSource();src.buffer=buf;
    const f=c.createBiquadFilter();f.type=type;f.frequency.value=ff;
    const g=c.createGain();g.gain.value=vol;
    src.connect(f);f.connect(g);g.connect(c.destination);src.start(at);};
  burst(t,.03,.6,'highpass',3200);
  burst(t+.14,.09,.7,'lowpass',700);tone(140,t+.14,.09,'sine',.25);
  sbNote(LANG==='tl'?'Kunan!':'Digicam shutter.');
});
if(document.getElementById('sb-pager'))document.getElementById('sb-pager').addEventListener('click',()=>{
  const c=ac();if(c.state==='suspended')c.resume();
  const t=c.currentTime+.05;
  for(let i=0;i<4;i++)tone(1568,t+i*.19,.09,'square',.07);
  sbNote(LANG==='tl'?'May beep ang pager mo!':'Pager beeping!');
});
if(document.getElementById('sb-windows'))document.getElementById('sb-windows').addEventListener('click',()=>{
  const c=ac();if(c.state==='suspended')c.resume();
  const t0=c.currentTime+.05;
  const dl=c.createDelay(1);dl.delayTime.value=.32;
  const fb=c.createGain();fb.gain.value=.38;
  const wet=c.createGain();wet.gain.value=.35;
  dl.connect(fb);fb.connect(dl);dl.connect(wet);wet.connect(c.destination);
  const nlen=Math.floor(c.sampleRate*1.2),nbuf=c.createBuffer(1,nlen,c.sampleRate),nd=nbuf.getChannelData(0);
  for(let i=0;i<nlen;i++)nd[i]=(Math.random()*2-1)*Math.sin(Math.PI*i/nlen);
  const nsrc=c.createBufferSource();nsrc.buffer=nbuf;
  const bp=c.createBiquadFilter();bp.type='bandpass';bp.frequency.value=2800;bp.Q.value=.8;
  const ng=c.createGain();ng.gain.value=.12;
  nsrc.connect(bp);bp.connect(ng);ng.connect(c.destination);ng.connect(dl);nsrc.start(t0);
  [146.83,220,293.66,369.99,440].forEach((f,i)=>{
    const o=c.createOscillator(),g=c.createGain();
    o.type='sine';o.frequency.value=f*1.002;
    g.gain.setValueAtTime(.0001,t0+.3);
    g.gain.linearRampToValueAtTime(.045,t0+1.2+i*.1);
    g.gain.exponentialRampToValueAtTime(.0001,t0+3.8);
    o.connect(g);g.connect(c.destination);o.start(t0+.3);o.stop(t0+4);
  });
  const pluck=(f,at,dur,vol)=>{
    const o=c.createOscillator(),g=c.createGain();
    o.type='triangle';o.frequency.value=f;
    g.gain.setValueAtTime(.0001,at);
    g.gain.linearRampToValueAtTime(vol,at+.02);
    g.gain.exponentialRampToValueAtTime(.0001,at+dur);
    o.connect(g);g.connect(c.destination);g.connect(dl);
    o.start(at);o.stop(at+dur+.1);
  };
  pluck(659.25,t0+1.05,.35,.13);
  pluck(739.99,t0+1.35,.35,.13);
  pluck(880,t0+1.65,.4,.14);
  pluck(987.77,t0+2.0,1.8,.16);
  sbNote('Windows startup');
});
if(document.getElementById('sb-videoke'))document.getElementById('sb-videoke').addEventListener('click',()=>{
  const c=ac();if(c.state==='suspended')c.resume();
  const t=c.currentTime+.05;
  tone(660,t,.12,'square',.09);tone(660,t+.2,.12,'square',.09);tone(660,t+.4,.12,'square',.09);tone(880,t+.6,.32,'square',.09);
  sbNote(LANG==='tl'?'Kanta na!':'Videoke countdown. Sing!');
});

/* ---------------- Live presence ---------------- */
const GB_URL=(typeof GUESTBOOK_API_URL!=='undefined'&&GUESTBOOK_API_URL)?GUESTBOOK_API_URL.replace(/\/$/,''): '';
let PID='';try{PID=sessionStorage.getItem('museum-pid')||''}catch(e){}
if(!PID){PID=Math.random().toString(36).slice(2)+Date.now().toString(36);try{sessionStorage.setItem('museum-pid',PID)}catch(e){}}
async function heartbeat(){
  if(!GB_URL)return;
  try{
    await fetch(GB_URL+'/api/presence',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:PID})});
    const r=await fetch(GB_URL+'/api/presence');
    if(r.ok){const d=await r.json();const el=$('#presence');if(el){el.hidden=false;$('#presence-count').textContent=d.count||1;}}
  }catch(e){}
}
if(GB_URL){heartbeat();setInterval(heartbeat,30000);}

/* ---------------- Community memory wall ---------------- */
const MEM_KEY='museum-memories-v1';
const memForm=$('#mem-form'),memEntries=$('#mem-entries'),memNote=$('#mem-note');
let memLive=false;
function memGet(k,d){try{const r=localStorage.getItem(k);return r?JSON.parse(r):d}catch(e){return d}}
function memSet(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function memRender(list){
  if(!list.length){memEntries.innerHTML='<p class="gb-empty">'+(LANG==='tl'?'\ud83d\udcfc Walang alaala pa. Ikaw ang mauna.':'\ud83d\udcfc The wall is blank. Pin the first memory.')+'</p>';return;}
  memEntries.innerHTML=list.slice().reverse().map(e=>
    '<div class="gb-entry"><div class="gb-who">'+esc2(e.who)+(e.when?' \u00b7 '+esc2(e.when):'')+'</div><p class="gb-msg">'+esc2(e.msg)+'</p></div>'
  ).join('');
}
function memLocal(){$('#mem-note').hidden=false;$('#mem-note').textContent=LANG==='tl'?'Hindi maabot ang server. Mga alaala mula sa device na ito.':'Server unreachable. Showing memories from this device.';memRender(memGet(MEM_KEY,[]));}
async function memLoad(){
  if(!document.getElementById('mem-entries'))return;
  if(!GB_URL){memLocal();return;}
  try{
    const r=await fetch(GB_URL+'/api/memories');if(!r.ok)throw 0;
    const list=await r.json();memLive=true;$('#mem-note').hidden=true;
    const server=Array.isArray(list)?list:[];
    const gk=e=>[e.who||'',e.when||'',e.msg||''].join('¦');
    const seen=new Set(server.map(gk));
    const onlyLocal=memGet(MEM_KEY,[]).filter(e=>!seen.has(gk(e)));
    memRender(server.concat(onlyLocal));
    if(onlyLocal.length){
      try{
        for(const e of onlyLocal){
          const pr=await fetch(GB_URL+'/api/memories',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({who:e.who,when:e.when,msg:e.msg})});
          if(!pr.ok)throw 0;
        }
        memSet(MEM_KEY,[]);
        const r2=await fetch(GB_URL+'/api/memories');
        if(r2.ok){const l2=await r2.json();memRender(Array.isArray(l2)?l2:[]);}
      }catch(_){}
    }
  }catch(e){memLocal();}
}
if(memForm)memForm.addEventListener('submit',async e=>{
  e.preventDefault();
  const who=$('#mem-name').value.trim(),when=$('#mem-when').value.trim(),msg=$('#mem-msg').value.trim();
  if(!who||!msg)return;
  const btn=memForm.querySelector('button[type="submit"]');
  btn.disabled=true;
  try{
    if(memLive){
      const r=await fetch(GB_URL+'/api/memories',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({who,when,msg})});
      if(!r.ok)throw 0;await r.json();await memLoad();
    }else{const l=memGet(MEM_KEY,[]);l.push({who,when,msg,ts:Date.now()});memSet(MEM_KEY,l);memLocal();}
    memForm.reset();
  }catch(err){const l=memGet(MEM_KEY,[]);l.push({who,when,msg,ts:Date.now()});memSet(MEM_KEY,l);memLocal();memForm.reset();}
  finally{btn.disabled=false;}
});

/* ---------------- init ---------------- */
applyLang();
memLoad();

/* ---------------- Nokia main menu (lobby) ---------------- */
if(document.getElementById('nokia-screen')){
  const NK=[
    {t:'Exhibit Halls',d:'14 exhibits \u00b7 3 guided routes',h:'exhibits.html'},
    {t:'Arcade & Playground',d:'17 games \u00b7 quiz \u00b7 photo booth',h:'play.html'},
    {t:'Guestbook',d:'sign \u00b7 live visitors \u00b7 memories',h:'guestbook.html'}
  ];
  let nkI=0;
  const nkMenu=document.getElementById('nk-menu'),nkScr=document.getElementById('nokia-screen');
  function nkBlip(f){try{const c=ac(),t=c.currentTime+.02;tone(f,t,.07,'square',.05);}catch(e){}}
  function nkRender(){nkMenu.innerHTML=NK.map((m,i)=>'<li role="menuitem" class="'+(i===nkI?'sel':'')+'"><b>'+m.t+'</b><small>'+m.d+'</small></li>').join('');}
  function nkMove(d){nkI=(nkI+d+NK.length)%NK.length;nkRender();nkBlip(d>0?520:440);}
  function nkGo(){nkBlip(880);setTimeout(()=>{location.href=NK[nkI].h;},120);}
  nkRender();
  document.getElementById('nk-up').addEventListener('click',()=>nkMove(-1));
  document.getElementById('nk-down').addEventListener('click',()=>nkMove(1));
  document.getElementById('nk-back').addEventListener('click',()=>nkMove(-1));
  document.getElementById('nk-fwd').addEventListener('click',()=>nkMove(1));
  document.getElementById('nk-ok').addEventListener('click',nkGo);
  nkMenu.addEventListener('click',e=>{const li=e.target.closest('li');if(!li)return;nkI=Array.prototype.indexOf.call(nkMenu.children,li);nkGo();});
  nkScr.addEventListener('keydown',e=>{
    if(e.key==='ArrowUp'){e.preventDefault();nkMove(-1);}
    else if(e.key==='ArrowDown'){e.preventDefault();nkMove(1);}
    else if(e.key==='Enter'){e.preventDefault();nkGo();}
  });
  const nkClock=document.getElementById('nk-clock');
  function nkTick(){const d=new Date();nkClock.textContent=String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');}
  nkTick();setInterval(nkTick,20000);
}

})();
/* sitewide dust background: same bubbles as the Grand Hall (walk.js) */
function buildSiteDust(){
  var dust=document.getElementById('site-dust');
  if(!dust||dust.dataset.done)return;
  dust.dataset.done='1';
  for(var i=0;i<24;i++){
    var p=document.createElement('i');
    p.style.left=Math.random()*100+'%';
    p.style.bottom='-10px';
    p.style.animationDuration=(9+Math.random()*14)+'s';
    p.style.animationDelay=(Math.random()*14)+'s';
    var sz=2+Math.random()*3;
    p.style.width=p.style.height=sz+'px';
    dust.appendChild(p);
  }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',buildSiteDust);else buildSiteDust();
