const FUTURE_IMAGE_DESCRIPTIONS={
  "2027": "AI-generated concept: Filipino friends creating a short video with an AI-assisted editing tool.",
  "2028": "AI-generated concept: Filipino and Southeast Asian performers sharing a concert stage.",
  "2029": "AI-generated concept: A neighborhood sari-sari store using digital payments and inventory tools.",
  "2030": "AI-generated concept: Commuters boarding an electric minibus at a shaded Philippine street stop.",
  "2031": "AI-generated concept: Friends conversing at an outdoor cafe with discreet translation earbuds.",
  "2032": "AI-generated concept: Friends watching an interactive concert at home while a distant friend joins online.",
  "2033": "AI-generated concept: A teacher guiding Filipino students using tablets and a hands-on learning project.",
  "2034": "AI-generated concept: A neighborhood technician demonstrating a repairable phone at a workbench.",
  "2035": "AI-generated concept: Neighbors gathering in a shaded, tree-filled Philippine community pavilion.",
  "2036": "AI-generated concept: A Filipino barkada playing a shared game across phones and a communal screen.",
  "2037": "AI-generated concept: Filipino filmmakers and animators collaborating on a locally inspired story.",
  "2038": "AI-generated concept: Archivists preserving old phones, games, and digital memories in a museum.",
  "2039": "AI-generated concept: Neighbors sharing a solar-powered charging station and a community repair workbench.",
  "2040": "AI-generated concept: A multigenerational Filipino community sharing a meal with technology set aside."
};
/* Speculative museum stories, not scheduled events or claims about what will happen. */
window.FUTURE_PREDICTIONS = Object.fromEntries([
  [2027,'AI joins the barkada edit','🎬','Short videos could become easier to make with AI-assisted subtitles, editing, and music tools. More Filipino creators might publish in regional languages while keeping their own humor and point of view.','Who gets credit when a video is made with AI?'],
  [2028,'P-pop finds more shared stages','🎤','Filipino pop acts could collaborate more often with artists across Southeast Asia. Fans might follow multilingual releases, local-language performances, and smaller independent groups alongside established names.','What makes a global hit feel Filipino?'],
  [2029,'The sari-sari store gets smarter','🏪','Some neighborhood stores might combine cash, digital payments, and simple inventory tools. Group orders and shared delivery could help small sellers reach nearby customers without giving up the personal touch of the tindahan.','Would digital convenience strengthen neighborhood ties?'],
  [2030,'A quieter ride to the tambayan','🚌','Electric public transport and better trip-planning tools could change some daily commutes. The experience would still depend on affordable fares, accessible routes, charging, and dependable service.','What would make your commute worth changing?'],
  [2031,'Conversations cross more languages','🗣️','Phones and wearables might offer more useful live translation for Filipino and regional languages. Friends and families could communicate more easily across borders, while jokes, tone, and local expressions would still need human understanding.','Which Filipino expression should never be translated literally?'],
  [2032,'Concerts become shared digital hangouts','🎧','Some concerts could mix a physical crowd with interactive online spaces. Barkadas living in different places might watch, chat, and participate together, with the feel of the event shaped by access, cost, and connection quality.','What part of a live concert cannot be recreated online?'],
  [2033,'Learning becomes more personal','📚','Students might use AI tutors for practice, feedback, and explanations in more languages. Teachers could spend more time on discussion and projects, if schools have the training, tools, and access to make that possible.','Where should a teacher always stay involved?'],
  [2034,'Repair becomes part of tech culture','🛠️','Repair shops, refurbished devices, and longer software support could become more attractive as people try to make gadgets last. Sharing repair knowledge might become its own kind of online community.','Would you choose a phone designed to be repaired?'],
  [2035,'The tambayan adapts to a hotter world','🌳','Neighborhood gathering places could place more emphasis on shade, ventilation, trees, and safe water access. Local design and community-led projects might shape places where people can still meet comfortably.','What would a climate-ready tambayan look like?'],
  [2036,'Games move between screens and spaces','🎮','A game session might move more easily between a phone, a shared screen, and an augmented space. Filipino players could build new kinds of community tournaments while deciding when to put the devices away.','Does a shared room make a game more fun?'],
  [2037,'More Filipino stories travel globally','🎞️','Independent films, games, animation, and regional-language stories could find larger audiences through new distribution tools. Creative ownership, fair pay, and the freedom to tell local stories would remain important choices.','Which local story deserves a bigger audience?'],
  [2038,'Internet memories become museum pieces','💾','Communities might preserve old posts, games, fan projects, and digital art more deliberately. Archives could help future visitors understand everyday online life, while raising questions about consent and what should stay private.','Which part of today’s internet would you preserve?'],
  [2039,'Neighborhoods share more tools and energy','☀️','Some communities could experiment with shared charging, repair spaces, and locally produced electricity. Whether these ideas spread would depend on practical costs, maintenance, and cooperation.','What would your neighborhood choose to share?'],
  [2040,'A connected future keeps a human center','🤝','By 2040, daily life could involve more connected devices, digital services, and AI support. A good future would still depend on choices about inclusion, privacy, affordability, and time spent with other people.','What should technology never replace?']
].map(([year,title,emoji,body,question])=>['future'+year,{
  year:String(year),title,emoji,body,question,
  prediction:true,
  image:{src:'assets/future/'+year+'.webp',alt:FUTURE_IMAGE_DESCRIPTIONS[year],width:1020,height:680,caption:'AI-generated concept illustration · '+year},
  note:'Prediction · an imagined possibility, not a confirmed event or promise.'
}]));
