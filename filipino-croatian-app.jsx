import { useState, useRef, useEffect } from "react";

const T = {
  hr: {
    welcome: "Dobrodošli u Hrvatsku", subtitle: "Nauči hrvatski i razumij kulturu — korak po korak. 🌺",
    chooseLesson: "Odaberi lekciju", phrases: "fraza", questions: "pitanja",
    madeWith: "Napravljeno s ❤️ za filipinske radnike u Hrvatskoj",
    lessonsCompleted: "lekcija završeno", croatian: "Hrvatski", tagalog: "Filipino (Tagalog)",
    tapToReveal: "Tapni za prijevod 👆", culturalBtn: "Kulturna razlika — važno!",
    culturalHide: "Sakrij kulturnu napomenu", nextPhrase: "Sljedeća fraza →",
    goToQuiz: "Idi na kviz 🎯", question: "Pitanje",
    correct: "✅ Točno! Odlično!", wrong: "❌ Nije točno — pogledaj točan odgovor iznad.",
    nextQuestion: "Sljedeće pitanje →", finishQuiz: "Idi na pisanje ✍️",
    perfect: "Savršeno!", great: "Odlično!", keepPracticing: "Nastavi vježbati!",
    correctAnswers: "točnih odgovora", backHome: "← Povratak na početak",
    repeatLesson: "🔄 Ponovi lekciju", quiz: "Kviz", of: "od",
    lessonGoal: "Cilj lekcije", keywordsIntro: "Ove ključne riječi ćeš naučiti:",
    startLesson: "Počni lekciju →", keywords: "Ključne riječi",
    writing: "Pisanje", writingInstruction: "Upiši nedostajuću riječ:",
    checkAnswer: "Provjeri →", writingCorrect: "✅ Točno!",
    writingAlmost: "👍 Skoro točno! Točan odgovor:", writingWrong: "❌ Netočno. Točan odgovor:",
    nextWord: "Sljedeća rečenica →", finishWriting: "Završi lekciju 🎉",
    writingScore: "točno napisano", fillBlank: "Popuni prazninu",
    tagalogHint: "Filipinski:",
    navWork: "Posao", navLife: "Svakodnevni život",
    navWorkSub: "Lekcije za radno mjesto", navLifeSub: "Lekcije za život izvan posla",
    navBack: "← Natrag", searchPlaceholder: "Pretraži lekcije...", searchNoResults: "Nema rezultata za",
    navGrammar: "Osnove jezika", navGrammarSub: "Abeceda, padeži, glagoli i gramatika",
    grammarTable: "Tablica", ruleTitle: "Pravilo",
    feedbackBtn: "💡 Prijedlozi i pitanja",
    feedbackTitle: "Tvoj prijedlog",
    feedbackSub: "Što te zbunjuje? Kakve lekcije trebaš? S čim se suočavaš?",
    feedbackPlaceholder: "Napiši ovdje... npr. 'Ne znam kako pitati za bolovanje', 'Zbunjuju me situacije u banci'...",
    feedbackSend: "Pošalji prijedlog →",
    feedbackSent: "✅ Hvala! Tvoj prijedlog je zabilježen.",
    feedbackSentSub: "Čitat ćemo sve prijedloge i dodavati nove lekcije.",
    feedbackBack: "← Natrag",
    feedbackAnon: "Prijedlog je anoniman — ne šalješ osobne podatke.",
  },
  tl: {
    welcome: "Maligayang pagdating sa Croatia", subtitle: "Matuto ng Croatian at maunawaan ang kultura — hakbang-hakbang. 🌺",
    chooseLesson: "Pumili ng aralin", phrases: "parirala", questions: "tanong",
    madeWith: "Ginawa nang may ❤️ para sa mga Pilipinong manggagawa sa Croatia",
    lessonsCompleted: "aralin na tapos", croatian: "Croatian", tagalog: "Filipino (Tagalog)",
    tapToReveal: "Pindutin para makita ang salin 👆", culturalBtn: "Pagkakaiba ng kultura — mahalaga!",
    culturalHide: "Itago ang kulturang tala", nextPhrase: "Susunod na parirala →",
    goToQuiz: "Pumunta sa pagsubok 🎯", question: "Tanong",
    correct: "✅ Tama! Napakagaling!", wrong: "❌ Mali — tingnan ang tamang sagot sa itaas.",
    nextQuestion: "Susunod na tanong →", finishQuiz: "Pumunta sa pagsulat ✍️",
    perfect: "Perpekto!", great: "Napakagaling!", keepPracticing: "Magpatuloy sa pagsasanay!",
    correctAnswers: "tamang sagot", backHome: "← Bumalik sa simula",
    repeatLesson: "🔄 Ulitin ang aralin", quiz: "Pagsubok", of: "mula sa",
    lessonGoal: "Layunin ng aralin", keywordsIntro: "Matututunan mo ang mga salitang ito:",
    startLesson: "Simulan ang aralin →", keywords: "Mga pangunahing salita",
    writing: "Pagsulat", writingInstruction: "Isulat ang nawawalang salita:",
    checkAnswer: "Suriin →", writingCorrect: "✅ Tama!",
    writingAlmost: "👍 Malapit na! Tamang sagot:", writingWrong: "❌ Mali. Tamang sagot:",
    nextWord: "Susunod na pangungusap →", finishWriting: "Tapusin ang aralin 🎉",
    writingScore: "tamang nasulat", fillBlank: "Punan ang patlang",
    tagalogHint: "Filipino:",
    navWork: "Trabaho", navLife: "Pang-araw-araw na Buhay",
    navWorkSub: "Mga aralin para sa lugar ng trabaho", navLifeSub: "Mga aralin para sa buhay sa labas ng trabaho",
    navBack: "← Bumalik", searchPlaceholder: "Maghanap ng aralin...", searchNoResults: "Walang resulta para sa",
    navGrammar: "Pundasyon ng Wika", navGrammarSub: "Alpabeto, mga kaso, pandiwa at gramatika",
    grammarTable: "Talahanayan", ruleTitle: "Tuntunin",
    feedbackBtn: "💡 Mga Mungkahi at Tanong",
    feedbackTitle: "Ang Iyong Mungkahi",
    feedbackSub: "Ano ang nakalilito sa iyo? Anong mga aralin ang kailangan mo? Ano ang iyong kinakaharap?",
    feedbackPlaceholder: "Isulat dito... hal. 'Hindi ko alam kung paano humingi ng sick leave', 'Nalilito ako sa mga sitwasyon sa bangko'...",
    feedbackSend: "Ipadala ang mungkahi →",
    feedbackSent: "✅ Salamat! Ang iyong mungkahi ay naitala na.",
    feedbackSentSub: "Babasahin namin ang lahat ng mungkahi at magdadagdag ng mga bagong aralin.",
    feedbackBack: "← Bumalik",
    feedbackAnon: "Ang mungkahi ay anonymous — hindi ka nagpapadala ng personal na impormasyon.",
  }
};

// Each phrase has its own culturalNote + culturalNoteTagalog
// Writing exercises: each phrase has a `blank` = the keyword to remove, creating a fill-in-the-blank
const lessons = [
  {
    id: 1, category: "Radne situacije", categoryTl: "Situasyon sa Trabaho", emoji: "🏭", color: "#FF6B35",
    title: "Na poslu — prvog dana", titleTl: "Sa Trabaho — Unang Araw",
    keywords: [
      { word: "radnik", meaning: "manggagawa" },
      { word: "radno mjesto", meaning: "lugar sa trabaho" },
      { word: "upute", meaning: "mga tagubilin" },
      { word: "razumijem", meaning: "naiintindihan" },
      { word: "pomoć", meaning: "tulong" },
    ],
    phrases: [
      {
        hr: "Dobro jutro, ja sam novi radnik.",
        tl: "Magandang umaga, ako ang bagong manggagawa.",
        pronunciation: "DOB-ro YU-tro, ya sam NO-vi RAD-nik",
        blank: "radnik",
        culturalNote: "🇭🇷 Na prvom danu u Hrvatskoj — uvijek se rukovajte pri upoznavanju. Čvrst stisak ruke znači povjerenje. Mlohav stisak ostavlja loš dojam.",
        culturalNoteTagalog: "🇵🇭 Sa Pilipinas, ang pagbati ay ngiti at paguurong ng braso — sa Croatia, lagi kang nakikipagkamay nang mahigpit.",
      },
      {
        hr: "Gdje je moje radno mjesto?",
        tl: "Nasaan ang aking lugar sa trabaho?",
        pronunciation: "GDYE ye MO-ye RAD-no MYES-to",
        blank: "radno mjesto",
        culturalNote: "🇭🇷 Pitanje je uvijek dobrodošlo — ne čekajte da pogodite gdje trebate sjediti ili stajati. Pitanje pokazuje ozbiljnost, ne neznanje.",
        culturalNoteTagalog: "🇵🇭 Huwag mahiyang magtanong — sa Croatia, ang pagtanong ay tanda ng responsibilidad, hindi ng kahihiyan.",
      },
      {
        hr: "Mogu li dobiti upute za posao?",
        tl: "Maaari bang makakuha ng mga tagubilin para sa trabaho?",
        pronunciation: "MO-gu li DOB-iti UP-ute ZA PO-sao",
        blank: "upute",
        culturalNote: "🇭🇷 Uvijek tražite pisane upute ako je moguće — Hrvati cijene preciznost i dokumentaciju. Usmene upute često se zaborave.",
        culturalNoteTagalog: "🇵🇭 Mas mainam kung nakasulat ang mga tagubilin — ang mga Croat ay nagpapahalaga sa katumpakan at dokumentasyon.",
      },
      {
        hr: "Ne razumijem upute. Možete li mi pomoći?",
        tl: "Hindi ko naiintindihan. Ulitin ninyo?",
        pronunciation: "ne ra-ZU-mi-yem UP-ute. MO-zhete li po-NO-viti",
        blank: "razumijem",
        culturalNote: "🇭🇷 Reći 'ne razumijem' nije sramota — puno je gore raditi krivo nego pitati. Ali pazi — zapamti upute kad ti se jednom kažu. Stalno zapitkivanje ostavlja dojam nepažnje i nezainteresiranosti.",
        culturalNoteTagalog: "🇵🇭 Hindi kahihiyan ang sabihing 'hindi ko naiintindihan' — mas masama ang gumawa ng mali kaysa sa magtanong. Pero tandaan — isaulo ang mga tagubilin kapag sinabi na sa iyo. Ang patuloy na pagtatanong ay nagpapakita ng hindi pagbibigay-pansin.",
      },
      {
        hr: "Pozdrav svima! Ja sam Mark, novi radnik.",
        tl: "Kumusta kayong lahat! Ako si Mark, bagong empleyado.",
        pronunciation: "POZ-drav SVA-ma! YA sam MARK, NO-vi RAD-nik",
        blank: "sam",
        culturalNote: "🇭🇷 Predstavi se kolegama prvog dana — ne čekaj da te netko pita. Kratko, vedro, s osmijehom. Hrvati cijene skromnost — samo ime i da si novi, ostalo dolazi prirodno.",
        culturalNoteTagalog: "🇵🇭 Magpakilala sa mga katrabaho sa unang araw — huwag hintayin na magtanong. Maikli, masaya, may ngiti. Pinahahalagahan ng mga Croat ang kababaang-loob — pangalan lang at na bago ka, ang iba ay darating nang natural.",
      },
      {
        hr: "Razumijem. Hvala na pomoći!",
        tl: "Naiintindihan ko. Salamat sa tulong!",
        pronunciation: "ra-ZU-mi-yem. HVA-la na PO-mo-chi",
        blank: "razumijem",
        culturalNote: "🇭🇷 Uvijek zahvalite kolegi koji vam pomogne — kratko 'hvala' je dovoljno i obavezno. Ignoriranje pomoći smatra se nepristojnim.",
        culturalNoteTagalog: "🇵🇭 Palaging magpasalamat sa tumutulong sa iyo — kahit isang 'hvala' ay sapat na at kinakailangan.",
      },
      {
        hr: "Gospodine Horvat, što trebam dalje napraviti?",
        tl: "Ginoong Horvat, ano ang susunod kong gagawin?",
        pronunciation: "GOS-po-di-ne HOR-vat, SHTO TRE-bam DAL-ye na-PRA-vi-ti",
        blank: "napraviti",
        culturalNote: "🇭🇷 Voditelju i šefu uvijek se obraćamo s 'gospodine' + prezime i s VI — nikad s TI dok oni sami ne predlože. To vrijedi čak i ako su mlađi od vas. Poštovanje prema nadređenima je standard u hrvatskoj radnoj kulturi.",
        culturalNoteTagalog: "🇵🇭 Palaging tawagan ang supervisor at boss ng 'gospodine' + apelyido at gamitin ang VI — huwag kailanman TI hanggang hindi nila mismo iminumungkahi. Naaangkop ito kahit mas bata sila sa inyo. Ang paggalang sa mga nakatataas ay pamantayan sa kulturang trabaho sa Croatia.",
      },
    ],
    quiz: [
      { question: "Kako kažeš 'manggagawa' na hrvatskom?", options: ["voditelj", "radnik", "posao", "upute"], answer: 1 },
      { question: "Što znači 'Ne razumijem'?", options: ["Razumijem sve", "Hindi ko naiintindihan", "Ayoko", "Salamat"], answer: 1 },
      { question: "Kako tražiš pomoć na hrvatskom?", options: ["Razumijem", "Gdje je?", "Trebam pomoć", "Dobro jutro"], answer: 2 },
      { question: "Što znači 'upute'?", options: ["tulong", "trabaho", "mga tagubilin", "lugar"], answer: 2 },
    ]
  },
  {
    id: 7, category: "Radne situacije", categoryTl: "Situasyon sa Trabaho", emoji: "☕", color: "#A0522D",
    title: "Pauza — više od odmora", titleTl: "Pahinga — Higit pa sa Pahinga",
    keywords: [
      { word: "pauza", meaning: "pahinga / break" },
      { word: "kava", meaning: "kape" },
      { word: "kolega", meaning: "katrabaho" },
      { word: "vikend", meaning: "weekend" },
      { word: "pridružiti se", meaning: "sumama" },
    ],
    phrases: [
      {
        hr: "Idemo na kavu, hoćeš li se pridružiti?",
        tl: "Pupunta kami sa kape, sasama ka ba?",
        pronunciation: "I-de-mo na KA-vu, HO-chesh li se pri-DRU-zhi-ti",
        blank: "pridružiti",
        culturalNote: "🇭🇷 Kava s kolegama nije opcija — to je nepisano pravilo. Kolega koji nikad ne ide na kavu smatra se hladnim i nezainteresiranim za tim. Čak i ako ne piješ kavu, idi i naruči vodu ili sok.",
        culturalNoteTagalog: "🇵🇭 Sa Pilipinas, ang patuloy na pagtatrabaho ay nagpapakita ng sipag — sa Croatia, ang hindi pagsama sa kape ay nagpapakita na hindi ka interesado sa iyong mga katrabaho. Kahit hindi ka umiinom ng kape, sumama ka.",
      },
      {
        hr: "Imam pauzu trideset minuta.",
        tl: "May tatlumpung minutong pahinga ako.",
        pronunciation: "I-mam PAU-zu TRI-de-set MI-nu-ta",
        blank: "minuta",
        culturalNote: "🇭🇷 VAŽNO: Ne radi za vrijeme pauze! U Filipinima rad za pauze pokazuje marljivost. U Hrvatskoj kolege misle da se ulizuješ šefu — i neće ti to oprostiti. Pauza je sveta.",
        culturalNoteTagalog: "🇵🇭 Ito ang PINAKAMAHALAGANG pagkakaiba: sa Pilipinas, ang pagtatrabaho sa pahinga = sipag. Sa Croatia, ang pagtatrabaho sa pahinga = nagpapaimbabaw ka sa boss — at ikaw ay mapopoot ng mga katrabaho.",
      },
      {
        hr: "Što si radio/la za vikend?",
        tl: "Ano ang ginawa mo noong weekend?",
        pronunciation: "SHTO si RA-dio/LA ZA VI-kend",
        blank: "vikend",
        culturalNote: "🇭🇷 Ovo je najčešće pitanje za pauze. Pripremi kratki odgovor — čak i 'bio sam doma, odmarao' je sasvim u redu. Ne moraš imati uzbudljiv vikend da razgovaraš.",
        culturalNoteTagalog: "🇵🇭 Ito ang pinakakaraniwang tanong sa oras ng pahinga. Maghanda ng maikling sagot — kahit nasa bahay lang ako, nagpahinga ay okay na.",
      },
      {
        hr: "Gledao/la sam utakmicu jučer.",
        tl: "Nanood ako ng laro kahapon.",
        pronunciation: "GLE-dao/LA sam u-TAK-mi-tsu YU-cher",
        blank: "utakmicu",
        culturalNote: "🇭🇷 Nogomet je religija u Hrvatskoj. Znati koji klub je lokalni i reći da si gledao utakmicu odmah te čini bližim kolegama — čak i ako ne razumiješ baš sve.",
        culturalNoteTagalog: "🇵🇭 Ang football ay relihiyon sa Croatia. Ang pagkaalam kung aling koponan ang lokal at pagsasabing nanood ka ng laro ay agad kang naglalapitan sa mga katrabaho.",
      },
      {
        hr: "Ideš li na ručak s nama?",
        tl: "Sasama ka ba sa amin sa tanghalian?",
        pronunciation: "I-desh li NA RU-chak S NA-ma",
        blank: "ručak",
        culturalNote: "🇭🇷 Zajednički ručak gradi tim. Ako uvijek jedeš sam, kolege pretpostavljaju da ih izbjegavaš — čak i ako to nije istina. Barem povremeno idi s njima.",
        culturalNoteTagalog: "🇵🇭 Ang pagkain nang magkasama ay nagtatayo ng koponan. Kung palagi kang kumakain nang mag-isa, ang mga katrabaho ay mag-iisip na iniiwasan mo sila.",
      },
      {
        hr: "Puši li netko? Idem na pušačku pauzu.",
        tl: "May naninigarilyo ba? Pupunta ako sa smoking break.",
        pronunciation: "PU-shi li NET-ko? I-dem NA PU-sha-chku PAU-zu",
        blank: "minuta",
        culturalNote: "🇭🇷 Pušačka pauza je gdje se odvijaju neformalni razgovori — čak i o poslu i napredovanju. Nepušači slobodno mogu izaći vani i stajati s pušačima. To nije čudno, to je pametno.",
        culturalNoteTagalog: "🇵🇭 Ang smoking break ay kung saan nangyayari ang mga impormal na pag-uusap. Ang mga hindi naninigarilyo ay maaaring lumabas at tumayo lang kasama nila. Hindi ito kakaiba — ito ay matalino.",
      },
      {
        hr: "Jesi li dobro?",
        tl: "Okay ka ba?",
        pronunciation: "YE-si li DOB-ro",
        blank: "redu",
        culturalNote: "🇭🇷 U Hrvatskoj ovo pitanje nije samo formalnost. 'Dobro, hvala' je dovoljno. Dugačka tužna priča nije primjerena za pauzu — sačuvaj je za bliskog prijatelja.",
        culturalNoteTagalog: "🇵🇭 Sa Croatia, ang tanong na ito ay hindi lang pormalidad. Ang 'Dobro, hvala' ay sapat na. Ang mahabang malungkot na kuwento ay hindi angkop sa pahinga.",
      },
    ],
    quiz: [
      { question: "Zašto ne smiješ raditi za pauzu u Hrvatskoj?", options: ["Jer je zabranjeno zakonom", "Jer kolege misle da se ulizuješ šefu", "Jer šef to ne voli", "Jer je to opasno"], answer: 1 },
      { question: "Kako kažeš 'sasama ka ba?' na hrvatskom?", options: ["Hoćeš li se pridružiti?", "Gdje je kava?", "Imam pauzu", "Idem na ručak"], answer: 0 },
      { question: "Što znači 'kolega'?", options: ["boss", "katrabaho", "pahinga", "kape"], answer: 1 },
      { question: "Koja je sigurna tema za razgovor za pauze?", options: ["Politika i plaća", "Osobni problemi", "Sport i vikend", "Problemi s šefom"], answer: 2 },
    ]
  },
  {
    id: 2, category: "Radne situacije", categoryTl: "Situasyon sa Trabaho", emoji: "⚠️", color: "#E63946",
    title: "Sigurnost na radu", titleTl: "Kaligtasan sa Trabaho",
    keywords: [
      { word: "opasno", meaning: "mapanganib" },
      { word: "zaštita", meaning: "proteksyon" },
      { word: "pomoć", meaning: "tulong" },
      { word: "izlaz", meaning: "labasan" },
      { word: "hitno", meaning: "emergency" },
    ],
    phrases: [
      {
        hr: "Gdje je zaštitna oprema?",
        tl: "Nasaan ang protective equipment?",
        pronunciation: "GDYE su ZASH-tit-na SRED-stva",
        blank: "zaštitna",
        culturalNote: "🇭🇷 Zaštitna oprema nije opcija — u Hrvatskoj je zakonski obavezna. Odbijanje nošenja može rezultirati otkazom ili novčanom kaznom.",
        culturalNoteTagalog: "🇵🇭 Ang kagamitang pangproteksyon ay hindi opsyonal sa Croatia — ito ay batas. Ang pagtanggi ay maaaring magresulta sa pagpapaalis.",
      },
      {
        hr: "Ovo je opasno, trebam zaštitu.",
        tl: "Ito ay mapanganib, kailangan ko ng proteksyon.",
        pronunciation: "O-vo ye o-PAS-no, TRE-bam ZASH-ti-tu",
        blank: "opasno",
        culturalNote: "🇭🇷 Ako vam se čini da je nešto opasno — recite to glasno. Šutnja se u radnom okruženju tumači kao pristanak. Vaša sigurnost je vaša odgovornost.",
        culturalNoteTagalog: "🇵🇭 Kung sa tingin mo ay mapanganib ang isang bagay — sabihin mo ito nang malakas. Ang katahimikan ay itinuturing na pahintulot.",
      },
      {
        hr: "Hitno! Zovite pomoć!",
        tl: "Emergency! Tumawag ng tulong!",
        pronunciation: "HIT-no! ZO-vi-te PO-moch!",
        blank: "pomoć",
        culturalNote: "🇭🇷 Broj hitne pomoći u Hrvatskoj je 112. Zapamtite ga! Operateri govore engleski, ali pokušajte reći lokaciju na hrvatskom.",
        culturalNoteTagalog: "🇵🇭 Ang emergency number sa Croatia ay 112. Tandaan ito! Ang mga operator ay nagsasalita ng Ingles.",
      },
      {
        hr: "Ovo nije opasno, imam zaštitu.",
        tl: "Hindi ito mapanganib, mayroon akong proteksyon.",
        pronunciation: "O-vo NI-ye o-PAS-no, I-mam ZASH-ti-tu",
        blank: "zaštitu",
        culturalNote: "🇭🇷 Znati razlikovati opasno od sigurnog pokazuje profesionalnost. Pretjerana briga može usporiti rad, ali premala može uzrokovati nesreću.",
        culturalNoteTagalog: "🇵🇭 Ang pagkilala sa pagkakaiba ng mapanganib at ligtas ay nagpapakita ng propesyonalismo.",
      },
      {
        hr: "Kolega je ozlijeđen, zovite pomoć!",
        tl: "Nasugatan ang katrabaho, tumawag ng tulong!",
        pronunciation: "KO-le-ga ye oz-LI-ye-djen, ZO-vi-te PO-moch",
        blank: "ozlijeđen",
        culturalNote: "🇭🇷 Ako vidite da je kolega ozlijeđen — ne čekajte. Odmah javite nadređenom i ostanite s njim. Napuštanje ozlijeđene osobe je kazneno djelo.",
        culturalNoteTagalog: "🇵🇭 Kung may nasugatan na katrabaho — huwag mag-atubili. Tumawag agad ng tulong at manatili sa kanya.",
      },
    ],
    quiz: [
      { question: "Što znači 'opasno'?", options: ["masaya", "mapanganib", "maayos", "malayo"], answer: 1 },
      { question: "Kako kažeš 'emergency exit' na hrvatskom?", options: ["hitna pomoć", "zaštitna sredstva", "hitni izlaz", "opasno mjesto"], answer: 2 },
      { question: "Što znači 'zaštita'?", options: ["tulong", "proteksyon", "labasan", "emergency"], answer: 1 },
      { question: "Kolega je ozlijeđen. Što radiš?", options: ["Nastaviš raditi", "Ideš kući", "Odmah javiš nadređenom i ostaneš s njim", "Čekaš da se sam oporavi"], answer: 2 },
    ]
  },
  {
    id: 3, category: "Praktični život", categoryTl: "Praktikal na Buhay", emoji: "🛒", color: "#2A9D8F",
    title: "U dućanu", titleTl: "Sa Tindahan",
    keywords: [
      { word: "košta", meaning: "magkano" },
      { word: "platiti", meaning: "magbayad" },
      { word: "blagajna", meaning: "kahera" },
      { word: "kartica", meaning: "card" },
      { word: "račun", meaning: "resibo" },
    ],
    phrases: [
      {
        hr: "Dobar dan! Koliko košta ovo?",
        tl: "Magandang tanghali! Magkano ito?",
        pronunciation: "DOB-ar DAN! KO-li-ko KOSH-ta O-vo",
        blank: "košta",
        culturalNote: "🇭🇷 U manjim dućanima uvijek pozdravite prodavača kad uđete — 'Dobar dan!' je obavezno. Ignoriranje prodavača smatra se grubim.",
        culturalNoteTagalog: "🇵🇭 Sa maliliit na tindahan, palaging batiin ang tindera ng 'Dobar dan!' pagpasok — hindi pagbati ay itinuturing na kabastusan.",
      },
      {
        hr: "Mogu li platiti karticom?",
        tl: "Maaari bang magbayad gamit ang card?",
        pronunciation: "MO-gu li pla-TI-ti KAR-ti-tsom",
        blank: "platiti",
        culturalNote: "🇭🇷 Kartično plaćanje je uobičajeno u većini dućana, ali manji dućani i tržnice često primaju samo gotovinu. Uvijek imajte malo gotovine sa sobom.",
        culturalNoteTagalog: "🇵🇭 Ang pagbabayad gamit ang card ay karaniwan sa mga malalaking tindahan, pero ang maliliit na tindahan ay kadalasang cash lamang.",
      },
      {
        hr: "Gdje je blagajna?",
        tl: "Nasaan ang kahera?",
        pronunciation: "GDYE ye bla-GAY-na",
        blank: "blagajna",
        culturalNote: "🇭🇷 Na blagajni ne razgovarajte na telefonu — to se smatra nepristojnim prema blagajniku. Završite razgovor prije nego priđete blagajni.",
        culturalNoteTagalog: "🇵🇭 Sa kahera, huwag makipag-usap sa telepono — ito ay itinuturing na kabastusan sa blagajnik. Tapusin ang tawag bago lumapit.",
      },
      {
        hr: "Koliko košta zajedno?",
        tl: "Magkano ang lahat?",
        pronunciation: "KO-li-ko KOSH-ta za-YED-no",
        blank: "košta",
        culturalNote: "🇭🇷 Cjenkanje nije uobičajeno u dućanima — cijene su fiksne. Jedino na tržnicama možete pokušati dogovoriti popust, ali pristojno.",
        culturalNoteTagalog: "🇵🇭 Hindi karaniwan ang pagtawad sa mga tindahan — ang mga presyo ay nakatakda. Sa palengke lamang maaari kang magtawad, ngunit maayos.",
      },
      {
        hr: "Mogu li dobiti račun?",
        tl: "Maaari bang makakuha ng resibo?",
        pronunciation: "MO-gu li DOB-iti RA-chun",
        blank: "račun",
        culturalNote: "🇭🇷 Uvijek uzmite račun — to je vaše pravo i zakonska obveza prodavača da ga izda. Bez računa nema reklamacije.",
        culturalNoteTagalog: "🇵🇭 Palaging kumuha ng resibo — ito ang iyong karapatan at legal na obligasyon ng nagbebenta. Walang resibo, walang reklamo.",
      },
      {
        hr: "Ne mogu platiti karticom, imam gotovinu.",
        tl: "Hindi ako makakabayad gamit ang card, mayroon akong cash.",
        pronunciation: "ne MO-gu pla-TI-ti KAR-ti-tsom",
        blank: "platiti",
        culturalNote: "🇭🇷 Ako kartica ne radi, mirno objasnite situaciju. Nikad ne pokazujte frustraciju prema osoblju — to se smatra nepristojnim i može eskalirati situaciju.",
        culturalNoteTagalog: "🇵🇭 Kung hindi gumagana ang iyong card, ipaliwanag nang mahinahon. Huwag ipakita ang pagkabigo — ito ay itinuturing na kabastusan.",
      },
      {
        hr: "Idite na blagajnu za račun.",
        tl: "Pumunta sa kahera para sa resibo.",
        pronunciation: "I-di-te na bla-GAY-nu za RA-chun",
        blank: "blagajnu",
        culturalNote: "🇭🇷 Ako zaposlenik dućana nešto traži od vas — slušajte mirno. Rasprava s osobljem rijetko donosi rezultat i može vas dovesti u neugodnu situaciju.",
        culturalNoteTagalog: "🇵🇭 Kung ang empleyado ng tindahan ay humiling ng isang bagay — makinig nang mahinahon. Ang pakikipagtalo sa kawani ay bihirang magbunga ng mabuti.",
      },
    ],
    quiz: [
      { question: "Što znači 'košta'?", options: ["magbayad", "magkano", "kahera", "resibo"], answer: 1 },
      { question: "Kako kažeš 'magbayad' na hrvatskom?", options: ["košta", "račun", "platiti", "kartica"], answer: 2 },
      { question: "Što znači 'blagajna'?", options: ["card", "resibo", "magkano", "kahera"], answer: 3 },
      { question: "Kako tražiš račun?", options: ["Koliko košta?", "Mogu li platiti?", "Mogu li dobiti račun?", "Gdje je blagajna?"], answer: 2 },
    ]
  },

  {
    id: 4, category: "Praktični život", categoryTl: "Praktikal na Buhay", emoji: "🏥", color: "#457B9D",
    title: "Kod liječnika", titleTl: "Sa Doktor",
    keywords: [
      { word: "boli", meaning: "masakit" },
      { word: "temperatura", meaning: "lagnat" },
      { word: "alergičan", meaning: "allergy" },
      { word: "recept", meaning: "reseta" },
      { word: "liječnik", meaning: "doktor" },
    ],
    phrases: [
      {
        hr: "Doktore, boli me glava.",
        tl: "Doktor, masakit ang aking ulo.",
        pronunciation: "DOK-to-re, BO-li me GLA-va",
        blank: "boli",
        culturalNote: "🇭🇷 Liječnika uvijek oslovite s 'doktore' ili 'doktorice' — nikad imenom dok on sam ne predloži. To pokazuje poštovanje prema struci.",
        culturalNoteTagalog: "🇵🇭 Palaging tawagan ang doktor ng 'doktore' o 'doktorice' — hindi kailanman sa pangalan hanggang hindi niya ito iminungkahi.",
      },
      {
        hr: "Boli me trbuh i imam temperaturu.",
        tl: "Masakit ang aking tiyan at mayroon akong lagnat.",
        pronunciation: "BO-li me STO-mak i I-mam tem-pe-ra-TU-ru",
        blank: "temperaturu",
        culturalNote: "🇭🇷 Opišite simptome jasno i konkretno — koliko dugo, kako jako, što pomaže. Liječnici nemaju puno vremena i cijene precizne informacije.",
        culturalNoteTagalog: "🇵🇭 Ilarawan ang mga sintomas nang malinaw — gaano katagal, gaano kalakas, ano ang nakakatulong. Ang mga doktor ay walang maraming oras.",
      },
      {
        hr: "Alergičan sam na penicilin.",
        tl: "Allergy ako sa penicillin.",
        pronunciation: "a-ler-GI-chan SAM na pe-ni-TSI-lin",
        blank: "alergičan",
        culturalNote: "🇭🇷 Alergije uvijek recite na početku pregleda — čak i ako vas liječnik ne pita. To može biti pitanje života i smrti.",
        culturalNoteTagalog: "🇵🇭 Palaging sabihin ang mga allergy sa simula ng konsultasyon — kahit hindi ka tinanong ng doktor. Maaari itong maging usapin ng buhay at kamatayan.",
      },
      {
        hr: "Liječnik, trebam recept za lijek.",
        tl: "Doktor, kailangan ko ng reseta para sa gamot.",
        pronunciation: "LI-yech-nik, TRE-bam RE-tsept ZA li-yek",
        blank: "recept",
        culturalNote: "🇭🇷 U Hrvatskoj mnogi lijekovi zahtijevaju recept — ne možete ih kupiti bez njega. Ne tražite recept za lijek koji ste koristili u Filipinima bez konzultacije.",
        culturalNoteTagalog: "🇵🇭 Sa Croatia, maraming gamot ay nangangailangan ng reseta — hindi mo ito mabibili nang wala ito. Huwag humingi ng reseta para sa gamot mula sa Pilipinas nang hindi nagkukonsulta.",
      },
      {
        hr: "Boli me cijelo tijelo, imam visoku temperaturu.",
        tl: "Masakit ang buong katawan ko, mayroon akong mataas na lagnat.",
        pronunciation: "BO-li me TSI-ye-lo TI-ye-lo",
        blank: "temperaturu",
        culturalNote: "🇭🇷 Visoka temperatura (iznad 38.5°C) je razlog za posjet liječniku. Ne čekajte da 'prođe samo od sebe'.",
        culturalNoteTagalog: "🇵🇭 Ang mataas na temperatura (higit sa 38.5°C) ay dahilan para sa emergency. Huwag maghintay na 'lumipas na lang' — ang mga Croat ay agad na pumupunta sa doktor.",
      },
      {
        hr: "Nisam alergičan ni na što.",
        tl: "Wala akong allergy sa kahit ano.",
        pronunciation: "NI-sam a-ler-GI-chan ni na SHTO",
        blank: "alergičan",
        culturalNote: "🇭🇷 Čak i ako nemate alergija, važno je to reći — liječnik mora znati. Ne pretpostavljajte da je liječniku svejedno ili da on zna.",
        culturalNoteTagalog: "🇵🇭 Kahit wala kang allergy, mahalagang sabihin ito — kailangang malaman ng doktor. Huwag ipagpalagay na alam na ng doktor o wala itong pakialam.",
      },
      {
        hr: "Liječnik mi je dao recept.",
        tl: "Binigyan ako ng doktor ng reseta.",
        pronunciation: "LI-yech-nik mi ye DAO RE-tsept",
        blank: "recept",
        culturalNote: "🇭🇷 Recept vrijedi određeno vrijeme — pročitajte rok valjanosti. Lijek kupujte u ljekarni (apoteci), ne u dućanu.",
        culturalNoteTagalog: "🇵🇭 Ang reseta ay may limitadong bisa — basahin ang petsa ng pagkawala ng bisa. Bilhin ang gamot sa parmasya (apoteka), hindi sa tindahan.",
      },
    ],
    quiz: [
      { question: "Što znači 'boli'?", options: ["lagnat", "masakit", "allergy", "reseta"], answer: 1 },
      { question: "Kako kažeš 'lagnat' na hrvatskom?", options: ["bol", "alergija", "temperatura", "recept"], answer: 2 },
      { question: "Što znači 'recept'?", options: ["allergy", "lagnat", "doktor", "reseta"], answer: 3 },
      { question: "Kako se obraćaš liječniku?", options: ["Hej ti!", "Gospodine!", "Doktore!", "Prijatelju!"], answer: 2 },
    ]
  },
  {
    id: 8, category: "Prava radnika", categoryTl: "Karapatan ng Manggagawa", emoji: "⚖️", color: "#2E86AB",
    title: "Moja prava na poslu", titleTl: "Ang Aking mga Karapatan sa Trabaho",
    keywords: [
      { word: "plaća", meaning: "sahod" },
      { word: "prekovremeni", meaning: "overtime" },
      { word: "bolovanje", meaning: "sick leave" },
      { word: "otkaz", meaning: "pagpapaalis" },
      { word: "ugovor", meaning: "kontrata / kasunduan" },
    ],
    phrases: [
      {
        hr: "Kada se isplaćuje plaća?",
        tl: "Kailan ibinabayad ang sahod?",
        pronunciation: "KA-da se is-PLA-chu-ye PLA-cha",
        blank: "plaća",
        culturalNote: "🇭🇷 Plaća se mora isplatiti do 15. u mjesecu. Ako kasni, pitajte mirno i privatno — nasamo s šefom ili računovodstvom. Nikad ne spominjite svoja 'prava' pred kolegama ili glasno. Tko odmah viče o pravima, brzo postaje 'problematičan radnik' u očima svih.",
        culturalNoteTagalog: "🇵🇭 Ang sahod ay dapat ibayad bago mag-ika-15. Kung nahuhuli, magtanong nang mahinahon at pribado — nang mag-isa sa boss. Huwag banggitin ang 'mga karapatan' sa harap ng lahat. Ang palaging nagrereklamo ay mabilis na nagiging 'maproblemang manggagawa'.",
      },
      {
        hr: "Prekovremeni rad mora biti dogovoren unaprijed.",
        tl: "Ang overtime ay dapat napagkasunduan nang maaga.",
        pronunciation: "pre-ko-VRE-me-ni RAD MO-ra BI-ti do-go-VO-ren u-NA-pri-yed",
        blank: "dogovoren",
        culturalNote: "🇭🇷 Prekovremeni rad, plaća, slobodni dani — sve se to dogovara PRIJE prvog radnog dana, ne poslije. Ako poslodavac zatraži prekovremeni a nije ugovoreno — to je neugodna situacija. Žalba šefu neće nužno naići na pozitivnu reakciju i može narušiti odnos. Informirajte se o uvjetima PRIJE potpisivanja ugovora.",
        culturalNoteTagalog: "🇵🇭 Ang overtime, sahod, libreng araw — lahat ito ay napagkasunduan BAGO ang unang araw ng trabaho, hindi pagkatapos. Kung hihilingin ng employer ang overtime na hindi napagkasunduan — ito ay isang hindi komportableng sitwasyon. Ang pagreklamo sa boss ay hindi palaging magdudulot ng positibong tugon at maaaring masira ang relasyon. Alamin ang mga kondisyon BAGO pumirma ng kontrata.",
      },
      {
        hr: "Koliko dana godišnjeg odmora imam?",
        tl: "Ilang araw ng bakasyon ang mayroon ako?",
        pronunciation: "KO-li-ko DA-na go-DISH-nyeg OD-mo-ra I-mam",
        blank: "odmora",
        culturalNote: "🇭🇷 Svaki radnik ima pravo na 20 radnih dana godišnjeg odmora. Ali — ne tražite odmor u prvim mjesecima rada. Sačekajte da se dokažete, izgradite povjerenje, pa tek onda tiho dogovorite termin. Novi radnik koji odmah traži godišnji ostavlja loš dojam.",
        culturalNoteTagalog: "🇵🇭 Ang bawat manggagawa ay may karapatang sa 20 araw ng bakasyon. Pero — huwag humingi ng bakasyon sa unang ilang buwan. Maghintay na mapatunayan ang iyong sarili, bumuo ng tiwala, pagkatapos ay tahimik na ayusin ang petsa. Ang bagong manggagawang agad humihingi ng bakasyon ay naglalagay ng masamang impresyon.",
      },
      {
        hr: "Bolestan sam, trebam bolovanje.",
        tl: "Maysakit ako, kailangan ko ng sick leave.",
        pronunciation: "BO-lan/bo-LES-na sam, TRE-bam bo-LO-va-nye",
        blank: "bolovanje",
        culturalNote: "🇭🇷 Ako ste bolesni — ne idite na posao, idite liječniku. Ali budite svjesni: previše bolovanja u prvoj godini može narušiti vaš ugled. Kolege i šef gledaju obrazac. Koristite bolovanje kad stvarno trebate, ne iz navike.",
        culturalNoteTagalog: "🇵🇭 Kung maysakit ka — huwag pumunta sa trabaho, pumunta sa doktor. Pero magbigay-alam: ang labis na sick leave sa unang taon ay maaaring makapinsala sa iyong reputasyon. Ang mga katrabaho at boss ay nagmamasid ng pattern. Gamitin ang sick leave kapag tunay na kailangan.",
      },
      {
        hr: "Koliki mi je otkazni rok?",
        tl: "Ano ang aking notice period?",
        pronunciation: "KA-kav ye MOJ ot-KAZ-ni ROK",
        blank: "otkazni",
        culturalNote: "🇭🇷 Pročitajte ugovor o radu tiho, za sebe — znati otkazni rok je pametno i zaštitno. Ali nikad ne pričajte o otkazu ili otkaznom roku s kolegama. To stvara nervozu u timu i šef to čuje brže nego što mislite.",
        culturalNoteTagalog: "🇵🇭 Basahin ang iyong kontrata nang tahimik, para sa iyong sarili — ang pagkaalam ng notice period ay matalino at nagpoprotekta sa iyo. Pero huwag kailanman pag-usapan ang tungkol sa pagpapaalis o notice period sa mga katrabaho. Lumilikha ito ng kaba sa koponan at maririnig ito ng boss nang mas mabilis kaysa sa iyong inaasahan.",
      },
      {
        hr: "Mogu li dobiti kopiju svog ugovora?",
        tl: "Maaari bang makakuha ng kopya ng aking kontrata?",
        pronunciation: "MO-gu li DOB-iti KO-pi-yu SVOG u-GO-vo-ra",
        blank: "ugovora",
        culturalNote: "🇭🇷 Imate pravo na kopiju ugovora — ali tražite je tiho i privatno, ne pred svima. Recite jednostavno: 'Mogu li dobiti kopiju za svoje evidencije?' Bez dramatike, bez spominjanja prava. Mirna, profesionalna osoba dobiva što treba — glasna ne dobiva ništa osim reputacije problematičnog radnika.",
        culturalNoteTagalog: "🇵🇭 Mayroon kang karapatang makakuha ng kopya ng kontrata — pero humingi nang tahimik at pribado, hindi sa harap ng lahat. Sabihin lamang: 'Maaari bang makakuha ng kopya para sa aking mga rekord?' Walang drama, walang pagbanggit ng mga karapatan. Ang tahimik at propesyonal na tao ay nakakakuha ng kailangan nila — ang maingay ay walang nakukuha kundi ang reputasyon ng maproblemang manggagawa.",
      },
    ],
    quiz: [
      { question: "Do kada mora biti isplaćena plaća?", options: ["Do 1. u mjesecu", "Do 15. u mjesecu", "Do 30. u mjesecu", "Kad poslodavac odluči"], answer: 1 },
      { question: "Što znači 'bolovanje'?", options: ["overtime", "pagpapaalis", "sick leave", "sahod"], answer: 2 },
      { question: "Kome se žališ ako poslodavac krši tvoja prava?", options: ["Policiji", "Sudu", "Inspektoru rada", "Odvjetniku"], answer: 2 },
      { question: "Koliko dana godišnjeg odmora imaš pravo?", options: ["10 dana", "15 dana", "20 dana", "30 dana"], answer: 2 },
    ]
  },
  {
    id: 9, category: "Praktični život", categoryTl: "Praktikal na Buhay", emoji: "🏠", color: "#6A994E",
    title: "Stan — prava i problemi", titleTl: "Apartment — Mga Karapatan at Problema",
    keywords: [
      { word: "stanodavac", meaning: "landlord" },
      { word: "najam", meaning: "renta" },
      { word: "kvar", meaning: "sira / breakdown" },
      { word: "ugovor", meaning: "kontrata" },
      { word: "susjed", meaning: "kapitbahay" },
    ],
    phrases: [
      {
        hr: "Imam ugovor o najmu stana.",
        tl: "Mayroon akong kontrata sa pag-upa ng apartment.",
        pronunciation: "I-mam u-GO-vor o NAY-mu STA-na",
        blank: "ugovor",
        culturalNote: "🇭🇷 UVIJEK tražite pisani ugovor o najmu — nikad ne živite u stanu bez ugovora. Bez ugovora nemate zakonsku zaštitu ako stanodavac odluči izbaciti vas ili zadržati depozit.",
        culturalNoteTagalog: "🇵🇭 PALAGING humingi ng nakasulat na kontrata sa pag-upa — huwag kailanman manirahan sa apartment nang walang kontrata. Kung wala kang kontrata, wala kang legal na proteksyon.",
      },
      {
        hr: "Koliko iznosi najam i što je uključeno?",
        tl: "Magkano ang renta at ano ang kasama?",
        pronunciation: "KO-li-ko IZ-no-si NAY-am i SHTO ye uk-LYU-che-no",
        blank: "najam",
        culturalNote: "🇭🇷 Pitajte točno što je uključeno u najam — struja, voda, grijanje, internet? U Hrvatskoj stanovi često ne uključuju režije. Iznenadni računi znaju biti veliki šok.",
        culturalNoteTagalog: "🇵🇭 Itanong kung ano ang kasama sa renta — kuryente, tubig, heating, internet? Sa Croatia, ang mga apartment ay madalas na hindi kasama ang mga utility bills. Ang mga hindi inaasahang bayarin ay maaaring maging malaking sorpresa.",
      },
      {
        hr: "Imam kvar u stanu, treba popravak.",
        tl: "May sira sa aking apartment, kailangan ng pagkukumpuni.",
        pronunciation: "I-mam KVAR u STA-nu, TRE-ba po-PRA-vak",
        blank: "kvar",
        culturalNote: "🇭🇷 Kvar prijavite stanodavcu pisanom porukom (SMS ili email) — ne samo usmeno. Tako imate dokaz da ste prijavili. Stanodavac je dužan popraviti kvar u razumnom roku.",
        culturalNoteTagalog: "🇵🇭 Iulat ang sira sa landlord sa pamamagitan ng nakasulat na mensahe (SMS o email) — hindi lang verbal. Sa gayon ay mayroon kang patunay. Ang landlord ay obligadong ayusin ang sira sa loob ng makatwirang panahon.",
      },
      {
        hr: "Stanodavac ne vraća depozit.",
        tl: "Hindi ibinabalik ng landlord ang aking deposito.",
        pronunciation: "STA-no-da-vats ne VRA-cha DE-po-zit",
        blank: "depozit",
        culturalNote: "🇭🇷 Stanodavac mora vratiti depozit u roku od 30 dana nakon odlaska, osim ako postoji pisani dokaz o oštećenju. Fotografirajte stan pri ulasku I izlasku — to je vaša zaštita.",
        culturalNoteTagalog: "🇵🇭 Ang landlord ay dapat ibalik ang deposito sa loob ng 30 araw pagkatapos umalis, maliban kung may nakasulat na patunay ng pinsala. Kumuha ng larawan ng apartment sa pagpasok at pag-alis — ito ang iyong proteksyon.",
      },
      {
        hr: "Susjed stvara buku pa ne mogu spavati.",
        tl: "Ang kapitbahay ay maingay, hindi ako makatulog.",
        pronunciation: "SUS-yed BU-chi, ne MO-gu SPA-va-ti",
        blank: "susjed",
        culturalNote: "🇭🇷 Noćni mir u Hrvatskoj počinje u 22:00 — buka nakon toga je kažnjiva. Prvo ljubazno razgovarajte sa susjedom. Ako ne pomogne, možete zvati policiju.",
        culturalNoteTagalog: "🇵🇭 Ang quiet hours sa Croatia ay nagsisimula sa 22:00 — ang ingay pagkatapos nito ay maaaring parusahan. Una, makipag-usap nang magalang sa kapitbahay. Kung hindi gumana, maaari kang tumawag ng pulis.",
      },
      {
        hr: "Gdje se prijaviti za privremeni boravak?",
        tl: "Saan magpaparehistro para sa temporary residence?",
        pronunciation: "GDYE se pri-YA-vi-ti ZA pri-VRE-me-ni BO-ra-vak",
        blank: "boravak",
        culturalNote: "🇭🇷 Prijava boravišta je OBAVEZNA — to obično radi poslodavac ili agencija. Provjeri s njima jer stranac to ne može uvijek sam napraviti. Bez prijave nemaš pristup zdravstvenoj zaštiti ni administrativnim uslugama.",
        culturalNoteTagalog: "🇵🇭 Ang pagpaparehistro ng tirahan ay OBLIGATORYO sa loob ng 3 araw mula sa paglipat sa bagong apartment — ginagawa ito ng landlord o ikaw mismo sa MUP. Kung walang rehistro, wala kang access sa pangangalagang pangkalusugan.",
      },
      {
        hr: "Želim raskinuti ugovor o najmu.",
        tl: "Gusto kong wakasan ang kontrata sa pag-upa.",
        pronunciation: "ZHE-lim RAS-ki-nu-ti u-GO-vor o NAY-mu",
        blank: "ugovor",
        culturalNote: "🇭🇷 Otkazni rok za najam stana je obično 30 dana — provjerite ugovor. Obavijestite stanodavca pisanom porukom. Ne napuštajte stan bez obavijesti — možete biti odgovorni za plaćanje najma i dalje.",
        culturalNoteTagalog: "🇵🇭 Ang notice period para sa pag-upa ay karaniwang 30 araw — suriin ang kontrata. Ipaalam sa landlord sa pamamagitan ng nakasulat na mensahe. Huwag umalis nang walang abiso — maaari kang manatiling responsable sa pagbabayad ng renta.",
      },
    ],
    quiz: [
      { question: "Što znači 'stanodavac'?", options: ["susjed", "landlord", "kontrata", "renta"], answer: 1 },
      { question: "Tko obično prijavljuje boravište stranog radnika?", options: ["Radnik sam u MUP-u", "Poslodavac ili agencija", "Susjed", "Nitko ne treba"], answer: 1 },
      { question: "Kako prijaviti kvar stanodavcu?", options: ["Usmeno, nije važno", "Pisanom porukom — SMS ili email", "Nazvati policiju", "Ignorirati"], answer: 1 },
      { question: "Što znači 'najam'?", options: ["kapitbahay", "landlord", "kontrata", "renta"], answer: 3 },
    ]
  },
  {
    id: 10, category: "Praktični život", categoryTl: "Praktikal na Buhay", emoji: "🇭🇷", color: "#C1121F",
    title: "Dva tipa Hrvata", titleTl: "Dalawang Uri ng mga Croat",
    keywords: [
      { word: "tradicionalan", meaning: "tradisyonal" },
      { word: "otvoren", meaning: "bukas ang isip" },
      { word: "vjera", meaning: "relihiyon" },
      { word: "politika", meaning: "pulitika" },
      { word: "stranac", meaning: "dayuhan" },
    ],
    phrases: [
      {
        hr: "U ovom kraju žive tradicionalniji ljudi.",
        tl: "Ang mga tao sa lugar na ito ay mas tradisyonal.",
        pronunciation: "u O-vom KRA-yu ZHI-ve tra-di-tsi-O-na-lni-yi LYU-di",
        blank: "tradicionalno",
        culturalNote: "🇭🇷 Tradicionalni Hrvati — starija generacija, manji gradovi, religiozniji, konzervativniji. Znakovi: križ u autu ili uredu, razgovor o crkvi, komentari o 'starim vrijednostima'. Nisu loši ljudi — samo imaju drugačiji svjetonazor. Prilagodite ton.",
        culturalNoteTagalog: "🇵🇭 Ang mga tradisyonal na Croat — mas matandang henerasyon, maliliit na lungsod, mas relihiyoso, mas konserbatibo. Mga senyales: krus sa kotse o opisina, pag-uusap tungkol sa simbahan. Hindi sila masasamang tao — naiiba lang ang kanilang pananaw.",
      },
      {
        hr: "Kolega je otvoren za razgovor.",
        tl: "Bukas sa usapan ang katrabaho.",
        pronunciation: "ko-LE-ga ye o-tvo-REN ZA raz-GO-vor",
        blank: "otvoren",
        culturalNote: "🇭🇷 Otvoreniji Hrvati — mlađa generacija, veći gradovi, Zagreb, Split, Rijeka. Putovali su, govore engleski, navikli su na strance. S njima možete biti opušteniji, pričati o kulturi Filipina, biti direktniji.",
        culturalNoteTagalog: "🇵🇭 Ang mas bukas na mga Croat — mas batang henerasyon, malalaking lungsod, Zagreb, Split, Rijeka. Naglakbay sila, nagsasalita ng Ingles, sanay sa mga dayuhan. Sa kanila, maaari kang maging mas relaxed, magsalita tungkol sa kulturang Pilipino.",
      },
      {
        hr: "Izbjegavam temu vjere na poslu.",
        tl: "Iniiwasan ko ang paksa ng relihiyon sa trabaho.",
        pronunciation: "iz-BYE-ga-vam TE-mu VYE-re NA POS-lu",
        blank: "vjere",
        culturalNote: "🇭🇷 Vjera je privatna stvar u Hrvatskoj — ali za tradicionaliste je jako važna. Nikad ne kritizujte katoličku crkvu, čak ni u šali. Ako vas pitaju jeste li vjernik — kratko i neutralno: 'Da, na svoj način.' Tema zatvori, nema problema.",
        culturalNoteTagalog: "🇵🇭 Ang relihiyon ay pribadong bagay sa Croatia — pero para sa mga tradisyonal, ito ay napakahalaga. Huwag kailanman punahin ang Katolikong simbahan, kahit biro lang. Kung tatanungin ka kung relihiyoso ka — maikli at neutral: 'Oo, sa sarili kong paraan.'",
      },
      {
        hr: "Ne pratim baš politiku.",
        tl: "Hindi ako masyadong sumusunod sa pulitika.",
        pronunciation: "ne PRA-tim BASH po-LI-ti-ku",
        blank: "politici",
        culturalNote: "🇭🇷 Politika je minsko polje u Hrvatskoj — Domovinski rat je još uvijek svjež za mnoge. Nikad ne komentirajte hrvatsku povijest, rat, Srbiju. Ako tema dođe — klimnite glavom i promijenite temu. Ovo vrijedi za SVE Hrvate, ne samo tradicionaliste.",
        culturalNoteTagalog: "🇵🇭 Ang pulitika ay minefield sa Croatia — ang Domovinski rat ay sariwa pa rin para sa marami. Huwag kailanman magkomento sa kasaysayan ng Croatia, digmaan, Serbia. Kung lumabas ang paksa — tumango at palitan ang paksa. Ito ay naaangkop sa LAHAT ng Croat.",
      },
      {
        hr: "Poštivam vaše običaje i tradiciju.",
        tl: "Iginagalang ko ang inyong mga kaugalian at tradisyon.",
        pronunciation: "POSH-ti-vam VA-she o-BI-cha-ye i tra-DI-tsi-yu",
        blank: "tradiciju",
        culturalNote: "🇭🇷 Ova rečenica otvara vrata s tradicionalistima. Ako znate da je netko tradicionalan — pokažite interes za njihovu kulturu, ne svoju. Pitajte o lokalnim blagdanima, hrani, običajima. To gradi povjerenje brže nego sto razgovora.",
        culturalNoteTagalog: "🇵🇭 Ang pangungusap na ito ay nagbubukas ng mga pinto sa mga tradisyonal. Kung alam mong tradisyonal ang isang tao — magpakita ng interes sa kanilang kultura, hindi sa iyong sarili. Magtanong tungkol sa mga lokal na pista opisyal, pagkain, kaugalian.",
      },
      {
        hr: "Kao stranac, učim o vašoj kulturi.",
        tl: "Bilang isang dayuhan, natututo ako tungkol sa inyong kultura.",
        pronunciation: "KAO STRA-nats, U-chim O VA-shoj KUL-tu-ri",
        blank: "stranac",
        culturalNote: "🇭🇷 Ova rečenica radi čuda s OBJEMA skupinama. Tradicionalistima pokazuje poniznost i poštovanje — otvorenima pokazuje znatiželju. Nikad ne uspoređujte Hrvatsku negativno s Filipinima — ni u šali. Hrvatska je za Hrvate uvijek bolja.",
        culturalNoteTagalog: "🇵🇭 Ang pangungusap na ito ay gumagawa ng himala sa PAREHONG grupo. Sa mga tradisyonal, nagpapakita ng kababaang-loob at paggalang — sa mga bukas, nagpapakita ng pag-usisa. Huwag kailanman ikumpara ang Croatia nang negatibo sa Pilipinas — kahit biro lang.",
      },
      {
        hr: "Svaki čovjek zaslužuje poštovanje.",
        tl: "Ang bawat tao ay karapat-dapat sa paggalang.",
        pronunciation: "SVA-ki CHO-vyek za-SLYU-zhu-ye POSH-to-va-nye",
        blank: "poštovanje",
        culturalNote: "🇭🇷 Najvažniji savjet: ne pokušavajte promijeniti nikog. Niste tu da mijenjate mišljenja — tu ste da radite, zaradite i živite mirno. Tradicionalist koji vidi da ste vredni, tihi i pristojni — poštovat će vas bez obzira na razlike. To je vaš cilj.",
        culturalNoteTagalog: "🇵🇭 Pinakamahalagang payo: huwag subukang baguhin ang sinuman. Wala ka doon para baguhin ang mga opinyon — nandoon ka para magtrabaho, kumita, at mabuhay nang mapayapa. Ang tradisyonalistang nakakakita na ikaw ay masipag, tahimik, at magalang — igagalang ka niya anuman ang pagkakaiba.",
      },
    ],
    quiz: [
      { question: "Zašto ne razgovaraš o politici s kolegama?", options: ["Jer te ne zanima", "Jer je politika minsko polje i može uvrijediti", "Jer je zabranjeno na poslu", "Jer ne razumiješ politiku"], answer: 1 },
      { question: "Što znači 'otvoren'?", options: ["tradisyonal", "relihiyoso", "bukas ang isip", "konserbatibo"], answer: 2 },
      { question: "Kako se ponašaš kad tema vjere dođe na poslu?", options: ["Kažeš da si ateist", "Kritiziraš crkvu", "Kratko i neutralno odgovoriš i zatvoriš temu", "Raspravljaš o religiji"], answer: 2 },
      { question: "Što znači 'stranac'?", options: ["tradisyonal", "dayuhan", "relihiyon", "pulitika"], answer: 1 },
    ]
  },
  {
    id: 11, category: "Osnove jezika", categoryTl: "Mga Pundasyon ng Wika", emoji: "🔤", color: "#6A0572",
    title: "Abeceda i izgovor", titleTl: "Alpabeto at Pagbigkas",
    keywords: [
      { word: "slovo", meaning: "letra" },
      { word: "samoglasnik", meaning: "patinig" },
      { word: "suglasnik", meaning: "katinig" },
      { word: "izgovor", meaning: "pagbigkas" },
      { word: "naglasak", meaning: "diin" },
    ],
    grammarTable: {
      title: "Posebna hrvatska slova",
      titleTl: "Mga espesyal na letra sa Croatian",
      rows: [
        { col1: "Č č", col2: "kao 'č' u 'čaj'", col2tl: "tulad ng 'ch' sa 'church'" },
        { col1: "Ć ć", col2: "mekše od Č", col2tl: "mas malambot kaysa Č" },
        { col1: "Š š", col2: "kao 'sh' u engleskom", col2tl: "tulad ng 'sh' sa 'shoe'" },
        { col1: "Ž ž", col2: "kao 'zh' — meko S", col2tl: "tulad ng 's' sa 'measure'" },
        { col1: "Đ đ", col2: "kao 'dj' u engleskom", col2tl: "tulad ng 'j' sa 'judge'" },
        { col1: "Dž dž", col2: "kao 'j' u engleskom", col2tl: "tulad ng 'j' sa 'jungle'" },
      ]
    },
    phrases: [
      { hr: "Kako se izgovara ovo slovo?", tl: "Paano bigkasin ang letrang ito?", pronunciation: "KA-ko se iz-GO-va-ra O-vo SLO-vo", blank: "slovo", culturalNote: "🇭🇷 Hrvatski je fonetski jezik — svako slovo se uvijek čita jednako. Za razliku od engleskog, nema iznimaka. Ako znaš izgovor slova, možeš čitati sve!", culturalNoteTagalog: "🇵🇭 Ang Croatian ay fonetikong wika — ang bawat letra ay palaging binibigkas nang pareho. Hindi tulad ng Ingles, walang mga pagbubukod. Kung alam mo ang pagbigkas ng mga letra, mababasa mo ang lahat!" },
      { hr: "Svaki samoglasnik se jasno izgovara.", tl: "Ang bawat patinig ay malinaw na binibigkas.", pronunciation: "SVA-ki sa-mo-GLAS-nik se YAS-no iz-GO-va-ra", blank: "samoglasnik", culturalNote: "🇭🇷 Samoglasnici u hrvatskom: A, E, I, O, U — uvijek kratki i jasni. Nema 'nejasnih' samoglasnika kao u engleskom. Ovo olakšava učenje!", culturalNoteTagalog: "🇵🇭 Ang mga patinig sa Croatian: A, E, I, O, U — palaging maikli at malinaw. Walang 'malabong' patinig tulad ng sa Ingles. Ginagawa nitong mas madali ang pag-aaral!" },
      { hr: "Š se izgovara kao 'sh' u engleskom.", tl: "Ang Š ay binibigkas tulad ng 'sh' sa Ingles.", pronunciation: "SH se iz-GO-va-ra KAO 'sh' u EN-gle-skom", blank: "izgovara", culturalNote: "🇭🇷 Zapamti: Š=SH, Č=CH, Ž=ZH, Đ=DJ. Ova četiri slova su osnova hrvatskog izgovora. Vježbaj ih svaki dan!", culturalNoteTagalog: "🇵🇭 Tandaan: Š=SH, Č=CH, Ž=ZH, Đ=DJ. Ang apat na letrang ito ang pundasyon ng pagbigkas sa Croatian. Magsanay araw-araw!" },
      { hr: "Naglasak pada na prvi slog.", tl: "Ang diin ay nahuhulog sa unang pantig.", pronunciation: "NA-gla-sak PA-da NA PRI-vi SLOG", blank: "naglasak", culturalNote: "🇭🇷 U hrvatskom naglasak često pada na prvi ili drugi slog. Nema strogog pravila, ali s praksom ćeš to prirodno osjetiti.", culturalNoteTagalog: "🇵🇭 Sa Croatian, ang diin ay madalas na nahuhulog sa una o pangalawang pantig. Walang mahigpit na tuntunin, pero sa pagsasanay, mararamdaman mo ito nang natural." },
      { hr: "Suglasnici se uvijek izgovaraju jasno.", tl: "Ang mga katinig ay palaging binibigkas nang malinaw.", pronunciation: "su-GLAS-ni-tsi se UV-ijek iz-GO-va-ra-yu YAS-no", blank: "suglasnici", culturalNote: "🇭🇷 Za razliku od engleskog, u hrvatskom se svi suglasnici izgovaraju — nema 'nijemih' slova. Na primjer, 'k' se uvijek čita.", culturalNoteTagalog: "🇵🇭 Hindi tulad ng Ingles, sa Croatian lahat ng katinig ay binibigkas — walang 'tahimik' na mga letra. Halimbawa, ang 'k' ay palaging binabasa." },
      { hr: "Vježbam izgovor svaki dan.", tl: "Nagsasanay ako ng pagbigkas araw-araw.", pronunciation: "VYEZH-bam iz-GO-vor SVA-ki DAN", blank: "izgovor", culturalNote: "🇭🇷 Najbrži način da poboljšaš izgovor je slušanje hrvatskog radija ili TV-a. Čak i kad ne razumiješ — uho se navikava na ritam jezika.", culturalNoteTagalog: "🇵🇭 Ang pinakamabilis na paraan upang mapabuti ang pagbigkas ay ang pakikinig sa Croatian radio o TV. Kahit hindi mo naiintindihan — nasanay ang tainga sa ritmo ng wika." },
    ],
    quiz: [
      { question: "Kako se izgovara slovo Š?", options: ["Kao 'S'", "Kao 'SH' u engleskom", "Kao 'Z'", "Kao 'CH'"], answer: 1 },
      { question: "Što znači 'izgovor'?", options: ["letra", "patinig", "pagbigkas", "diin"], answer: 2 },
      { question: "Koliko samoglasnika ima hrvatska abeceda?", options: ["3", "4", "5", "6"], answer: 2 },
      { question: "Kako se izgovara slovo Č?", options: ["Kao 'S'", "Kao 'SH'", "Kao 'CH' u 'church'", "Kao 'Z'"], answer: 2 },
    ]
  },
  {
    id: 12, category: "Osnove jezika", categoryTl: "Mga Pundasyon ng Wika", emoji: "🔢", color: "#6A0572",
    title: "Brojevi i datum", titleTl: "Mga Numero at Petsa",
    keywords: [
      { word: "broj", meaning: "numero" },
      { word: "datum", meaning: "petsa" },
      { word: "tjedan", meaning: "linggo" },
      { word: "godina", meaning: "taon" },
      { word: "sat", meaning: "oras" },
    ],
    grammarTable: {
      title: "Brojevi 1-20",
      titleTl: "Mga numero 1-20",
      rows: [
        { col1: "1 — jedan", col2: "11 — jedanaest", col2tl: "" },
        { col1: "2 — dva", col2: "12 — dvanaest", col2tl: "" },
        { col1: "3 — tri", col2: "13 — trinaest", col2tl: "" },
        { col1: "4 — četiri", col2: "20 — dvadeset", col2tl: "" },
        { col1: "5 — pet", col2: "30 — trideset", col2tl: "" },
        { col1: "10 — deset", col2: "100 — sto", col2tl: "" },
      ]
    },
    phrases: [
      { hr: "Koliko košta? — Dvadeset eura.", tl: "Magkano? — Dalawampung euro.", pronunciation: "KO-li-ko KOSH-ta? — DVA-de-set EU-ra", blank: "Dvadeset", culturalNote: "🇭🇷 Cijene u Hrvatskoj su u eurima od 2023. Zapamti: 1€ ≈ 7.5 kuna (stara valuta koju još stariji Hrvati spominju).", culturalNoteTagalog: "🇵🇭 Ang mga presyo sa Croatia ay nasa euro mula 2023. Tandaan: 1€ ≈ 7.5 kuna (lumang pera na madalas pa ring binabanggit ng mas matatandang Croat)." },
      { hr: "Imam sat vremena — dođem u tri.", tl: "Mayroon akong isang oras — darating ako sa alas-tres.", pronunciation: "I-mam SAT VRE-me-na — DO-chem u TRI", blank: "sat", culturalNote: "🇭🇷 Hrvati su precizni u pogledu vremena — 'u tri' znači točno u 15:00. Kašnjenje od 15+ minuta smatra se nepristojnim, posebno na poslu.", culturalNoteTagalog: "🇵🇭 Ang mga Croat ay tumpak pagdating sa oras — ang 'u tri' ay nangangahulugang eksakto sa 15:00. Ang pagkaantala ng 15+ minuto ay itinuturing na kabastusan, lalo na sa trabaho." },
      { hr: "Danas je dvadeset prvi travnja.", tl: "Ngayon ay ika-dalawampu't isa ng Abril.", pronunciation: "DA-nas ye DVA-de-set PR-vi TRA-vnya", blank: "travnja", culturalNote: "🇭🇷 Datum se kaže: dvadeset prvi travnja, petnaesti kolovoza. Format pisanja: 21.4. ili 21. travnja. Suprotno od filipinskog gdje ide mjesec pa dan — u Hrvatskoj uvijek ide DAN pa MJESEC.", culturalNoteTagalog: "🇵🇭 Ang petsa ay sinasabi: dvadeset prvi travnja, petnaesti kolovoza. Format ng pagsulat: 21.4. o 21. travnja. Kabaligtaran ng Filipino kung saan buwan muna bago araw — sa Croatia palaging ARAW muna bago BUWAN." },
      { hr: "Radim osam sati dnevno.", tl: "Nagtatrabaho ako ng walong oras sa isang araw.", pronunciation: "RA-dim O-sam SA-ti DNEV-no", blank: "sati", culturalNote: "🇭🇷 Standardni radni dan je 8 sati — od 8 do 16h ili od 7 do 15h. Mnoge tvrtke rade 'jutarnju smjenu'. Pitaj točno kad počinješ.", culturalNoteTagalog: "🇵🇭 Ang karaniwang araw ng trabaho ay 8 oras — mula 8 hanggang 16h o mula 7 hanggang 15h. Maraming kumpanya ang may 'morning shift'. Itanong nang eksakto kung kailan ka magsisimula." },
      { hr: "Rođen/a sam tisuću devetsto devedeset.", tl: "Ipinanganak ako noong isang libo't siyam na raan at siyamnapu.", pronunciation: "RO-djen/a sam TI-su-chu DE-vet-sto de-VED-e-set", blank: "tisuću", culturalNote: "🇭🇷 Godina na dokumentima se piše brojkama. Ali u razgovoru — znati reći godinu rođenja je korisno kod liječnika, u banci ili na administraciji.", culturalNoteTagalog: "🇵🇭 Ang taon sa mga dokumento ay nakasulat sa mga numero. Pero sa pag-uusap — ang pagkaalam kung paano sabihin ang taon ng kapanganakan ay kapaki-pakinabang sa doktor, bangko, o administrasyon." },
      { hr: "Imam datum — petnaestog osmog.", tl: "Mayroon akong petsa — ika-labinlima ng ikawalong buwan.", pronunciation: "I-mam DA-tum — PET-na-es-tog OS-mog", blank: "datum", culturalNote: "🇭🇷 Datum u Hrvatskoj se piše: dan.mjesec.godina — npr. 15.8.2024. Suprotno od američkog formata gdje je prvo mjesec pa dan.", culturalNoteTagalog: "🇵🇭 Ang petsa sa Croatia ay isinusulat: araw.buwan.taon — hal. 15.8.2024. Kabaligtaran ng American format kung saan ang buwan ay nauuna." },
    ],
    quiz: [
      { question: "Kako se kaže broj 20 na hrvatskom?", options: ["deset", "dvanaest", "dvadeset", "trideset"], answer: 2 },
      { question: "Što znači 'datum'?", options: ["numero", "oras", "linggo", "petsa"], answer: 3 },
      { question: "Kako se piše datum u Hrvatskoj?", options: ["Mjesec.Dan.Godina", "Dan.Mjesec.Godina", "Godina.Mjesec.Dan", "Dan/Godina/Mjesec"], answer: 1 },
      { question: "Što znači 'tjedan'?", options: ["taon", "oras", "linggo", "petsa"], answer: 2 },
    ]
  },
  {
    id: 13, category: "Osnove jezika", categoryTl: "Mga Pundasyon ng Wika", emoji: "⚧", color: "#6A0572",
    title: "Muški, ženski, srednji rod", titleTl: "Panlalaki, Pambabae, Walang Kasarian",
    keywords: [
      { word: "rod", meaning: "kasarian" },
      { word: "muški", meaning: "panlalaki" },
      { word: "ženski", meaning: "pambabae" },
      { word: "srednji", meaning: "walang kasarian" },
      { word: "nastavak", meaning: "ending / hulapi" },
    ],
    grammarTable: {
      title: "Kako prepoznati rod?",
      titleTl: "Paano makilala ang kasarian?",
      rows: [
        { col1: "Muški rod", col2: "završava suglasnikom", col2tl: "nagtatapos sa katinig: brat, auto, grad" },
        { col1: "Ženski rod", col2: "završava na -A", col2tl: "nagtatapos sa -A: sestra, mama, škola" },
        { col1: "Srednji rod", col2: "završava na -O ili -E", col2tl: "nagtatapos sa -O/-E: dijete, more, selo" },
      ]
    },
    phrases: [
      { hr: "Brat je muški rod — on.", tl: "Ang brat (kapatid na lalaki) ay panlalaki — siya (lalaki).", pronunciation: "BRAT ye MUSH-ki ROD — ON", blank: "muški", culturalNote: "🇭🇷 U hrvatskom svaka imenica ima rod — muški, ženski ili srednji. Rod utječe na pridjeve i glagole koji idu uz imenicu. Ovo je jedna od najvećih razlika od filipinskog.", culturalNoteTagalog: "🇵🇭 Sa Croatian, ang bawat pangngalan ay may kasarian — panlalaki, pambabae, o walang kasarian. Nakakaapekto ito sa mga pang-uri at pandiwa. Ito ay isa sa pinakamahalagang pagkakaiba mula sa Filipino." },
      { hr: "Sestra je ženski rod — ona.", tl: "Ang sestra (kapatid na babae) ay pambabae — siya (babae).", pronunciation: "SES-tra ye ZHEN-ski ROD — O-na", blank: "ženski", culturalNote: "🇭🇷 Ženski rod najlakše prepoznaješ po završetku -A. Mama, sestra, škola, voda, ruka — sve su ženskog roda. Ovo je korisno pravilo za pamćenje.", culturalNoteTagalog: "🇵🇭 Ang pambabae ay pinakamadaling makilala sa ending na -A. Mama, sestra, škola, voda, ruka — lahat ay pambabae. Ito ay isang kapaki-pakinabang na tuntunin para sa pag-aalala." },
      { hr: "Dijete je srednji rod — ono.", tl: "Ang dijete (bata) ay walang kasarian — ito.", pronunciation: "DI-ye-te ye SRED-nyi ROD — O-no", blank: "srednji", culturalNote: "🇭🇷 Srednji rod je specifičan za slavenske jezike. Završava na -O ili -E. More, polje, dijete, selo — srednji rod. U filipinskom nema ovog koncepta — to je normalno da ti je čudno!", culturalNoteTagalog: "🇵🇭 Ang walang kasarian ay tiyak sa mga Slavic na wika. Nagtatapos sa -O o -E. More, polje, dijete, selo — walang kasarian. Sa Filipino wala itong konsepto — normal lang na makaramdam ng kalituhan!" },
      { hr: "Auto je muški rod — on je velik.", tl: "Ang auto (kotse) ay panlalaki — malaki siya.", pronunciation: "AU-to ye MUSH-ki ROD — ON ye VE-lik", blank: "muški", culturalNote: "🇭🇷 Pažnja: neke imenice imaju rod koji nije intuitivan. Auto je muški rod iako završava samoglasnikom. S vremenom ćeš to naučiti kroz praksu.", culturalNoteTagalog: "🇵🇭 Paunawa: ang ilang pangngalan ay may kasariang hindi intuitive. Ang auto ay panlalaki kahit nagtatapos sa patinig. Sa paglipas ng panahon, matututunan mo ito sa pamamagitan ng pagsasanay." },
      { hr: "Pridjevi se mijenjaju prema rodu.", tl: "Ang mga pang-uri ay nagbabago ayon sa kasarian.", pronunciation: "PRI-djevi se MI-ye-nya-yu PREM-a RO-du", blank: "rodu", culturalNote: "🇭🇷 Npr: 'dobar radnik' (M), 'dobra radnica' (Ž), 'dobro dijete' (S). Isti pridjev, ali različit nastavak. Ovo je važno za ispravan govor.", culturalNoteTagalog: "🇵🇭 Hal: 'dobar radnik' (M), 'dobra radnica' (Ž), 'dobro dijete' (S). Parehong pang-uri, pero iba ang ending. Ito ay mahalaga para sa tamang pagsasalita." },
      { hr: "Nastavak -A označava ženski rod.", tl: "Ang ending na -A ay nagpapahiwatig ng pambabae.", pronunciation: "NA-sta-vak -A oz-NA-cha-va ZHEN-ski ROD", blank: "nastavak", culturalNote: "🇭🇷 Praktičan savjet: ako ne znaš rod neke imenice, pogledaj završetak. -A = najvjerojatnije ženski, suglasnik = muški, -O/-E = srednji. Nije 100% točno, ali pomaže.", culturalNoteTagalog: "🇵🇭 Praktikal na payo: kung hindi mo alam ang kasarian ng isang pangngalan, tingnan ang ending. -A = malamang pambabae, katinig = panlalaki, -O/-E = walang kasarian. Hindi 100% tumpak, pero nakakatulong." },
    ],
    quiz: [
      { question: "Koji je rod imenice 'sestra'?", options: ["Muški", "Ženski", "Srednji", "Nema rod"], answer: 1 },
      { question: "Što znači 'rod' u gramatici?", options: ["numero", "kasarian", "linggo", "hulapi"], answer: 1 },
      { question: "Koje završetke ima srednji rod?", options: ["-A i -E", "-O i suglasnik", "-O i -E", "-A i -O"], answer: 2 },
      { question: "Koja je rečenica ispravna?", options: ["Dobar sestra", "Dobra sestra", "Dobro sestra", "Dobare sestra"], answer: 1 },
    ]
  },
  {
    id: 14, category: "Osnove jezika", categoryTl: "Mga Pundasyon ng Wika", emoji: "📅", color: "#6A0572",
    title: "Dani i mjeseci", titleTl: "Mga Araw at Buwan",
    keywords: [
      { word: "ponedjeljak", meaning: "Lunes" },
      { word: "vikend", meaning: "weekend" },
      { word: "mjesec", meaning: "buwan" },
      { word: "blagdan", meaning: "pista opisyal" },
      { word: "godišnjica", meaning: "anibersaryo" },
    ],
    grammarTable: {
      title: "Dani u tjednu i mjeseci",
      titleTl: "Mga araw at buwan",
      rows: [
        { col1: "Pon — ponedjeljak", col2: "Sij — siječanj", col2tl: "Enero" },
        { col1: "Uto — utorak", col2: "Velj — veljača", col2tl: "Pebrero" },
        { col1: "Sri — srijeda", col2: "Ožu — ožujak", col2tl: "Marso" },
        { col1: "Čet — četvrtak", col2: "Tra — travanj", col2tl: "Abril" },
        { col1: "Pet — petak", col2: "Svi — svibanj", col2tl: "Mayo" },
        { col1: "Sub — subota", col2: "Lip — lipanj", col2tl: "Hunyo" },
        { col1: "Ned — nedjelja", col2: "Srp — srpanj", col2tl: "Hulyo" },
      ]
    },
    phrases: [
      { hr: "Što ćemo raditi za vikend?", tl: "Ano ang gagawin natin sa weekend?", pronunciation: "SHTO CHE-mo RA-di-ti ZA VI-kend", blank: "vikend", culturalNote: "🇭🇷 Vikend je svetinja u Hrvatskoj — ne rade se telefonski pozivi u vezi posla subotom ni nedjeljom osim ako je hitno. Poštuj to i kod kolega i kod šefa.", culturalNoteTagalog: "🇵🇭 Ang weekend ay sagrado sa Croatia — walang mga tawag sa trabaho tuwing Sabado o Linggo maliban kung emergency. Igalang ito sa mga katrabaho at boss." },
      { hr: "Ponedjeljak je teži dan za sve.", tl: "Ang Lunes ay mas mahirap na araw para sa lahat.", pronunciation: "po-ned-YEL-yak ye TE-zhi DAN ZA SVE", blank: "travnja", culturalNote: "🇭🇷 Ponedjeljak ujutro — ne razgovaraj o poslu odmah. Pozdrav, kava, mali razgovor o vikendu — pa tek posao. Hrvati trebaju lagani ulaz u radni tjedan.", culturalNoteTagalog: "🇵🇭 Lunes ng umaga — huwag agad pag-usapan ang trabaho. Pagbati, kape, maikling pag-uusap tungkol sa weekend — pagkatapos ay trabaho. Kailangan ng mga Croat ng mahinahong pasok sa linggo ng trabaho." },
      { hr: "Koji je danas datum? — Prvog lipnja.", tl: "Anong petsa ngayon? — Una ng Hunyo.", pronunciation: "KO-ji ye DA-nas DA-tum? — PRV-og LIP-nya", blank: "datum", culturalNote: "🇭🇷 Nazivi hrvatskih mjeseci su potpuno različiti od engleskih — to je čest izvor zabune. Svi počinju s malim slovom u pisanju.", culturalNoteTagalog: "🇵🇭 Ang mga pangalan ng buwan sa Croatian ay ganap na naiiba mula sa Ingles — ito ay karaniwang pinagmumulan ng kalituhan. Lahat ay nagsisimula sa maliliit na titik sa pagsulat." },
      { hr: "Blagdan je slobodan dan.", tl: "Ang pista opisyal ay libreng araw.", pronunciation: "BLA-gdan ye SLO-bo-dan DAN", blank: "blagdan", culturalNote: "🇭🇷 Hrvatska ima mnogo državnih blagdana — oko 13 godišnje. Na blagdan sve je zatvoreno osim benzinskih i nekih dućana. Ne planiraj obaveze za blagdane.", culturalNoteTagalog: "🇵🇭 Ang Croatia ay may maraming pista opisyal — humigit-kumulang 13 bawat taon. Sa pista opisyal, lahat ay sarado maliban sa mga gasolinahan at ilang tindahan." },
      { hr: "Godišnjica tvrtke je u listopadu.", tl: "Ang anibersaryo ng kumpanya ay sa Oktubre.", pronunciation: "go-DISH-nyi-tsa TVRТ-ke ye u lis-TO-pa-du", blank: "godišnjica", culturalNote: "🇭🇷 Tvrtke u Hrvatskoj često slave godišnjice s druženjem za sve zaposlenike. To je prilika za neformalno upoznavanje kolega — obavezno idi!", culturalNoteTagalog: "🇵🇭 Ang mga kumpanya sa Croatia ay madalas nagdiriwang ng mga anibersaryo sa pagtitipon ng lahat ng empleyado. Ito ay pagkakataon para sa impormal na pakikilala sa mga katrabaho — pumunta ka nang walang fail!" },
      { hr: "Radim svaki dan osim vikenda.", tl: "Nagtatrabaho ako araw-araw maliban sa weekend.", pronunciation: "RA-dim SVA-ki DAN O-sim VI-ken-da", blank: "vikenda", culturalNote: "🇭🇷 Radno vrijeme je obično od ponedjeljka do petka. Ako te šef traži da radiš vikendom redovito bez naknade — to je kršenje prava. Sjetite se lekcije o pravima radnika.", culturalNoteTagalog: "🇵🇭 Ang oras ng trabaho ay karaniwang mula Lunes hanggang Biyernes. Kung hinihiling sa iyo ng boss na magtrabaho sa weekend nang regular na walang kabayaran — paglabag ito sa mga karapatan." },
    ],
    quiz: [
      { question: "Koji dan dolazi poslije petka?", options: ["Utorak", "Četvrtak", "Subota", "Ponedjeljak"], answer: 2 },
      { question: "Što znači 'blagdan'?", options: ["linggo", "buwan", "pista opisyal", "anibersaryo"], answer: 2 },
      { question: "Kako se na hrvatskom kaže 'Hunyo'?", options: ["Svibanj", "Lipanj", "Srpanj", "Kolovoz"], answer: 1 },
      { question: "Što znači 'ponedjeljak'?", options: ["Sabado", "Linggo", "Lunes", "Martes"], answer: 2 },
    ]
  },
  {
    id: 15, category: "Osnove jezika", categoryTl: "Mga Pundasyon ng Wika", emoji: "🔄", color: "#6A0572",
    title: "Osnove glagola", titleTl: "Mga Pundasyon ng Pandiwa",
    keywords: [
      { word: "glagol", meaning: "pandiwa" },
      { word: "infinitiv", meaning: "infinitibo" },
      { word: "sadašnjost", meaning: "kasalukuyan" },
      { word: "prošlost", meaning: "nakaraan" },
      { word: "lice", meaning: "panauhan" },
    ],
    grammarTable: {
      title: "Glagol BITI (to be) — sadašnjost",
      titleTl: "Pandiwa BITI (maging) — kasalukuyan",
      rows: [
        { col1: "Ja sam", col2: "Ako ay / Ako nga", col2tl: "I am" },
        { col1: "Ti si", col2: "Ikaw ay / Ikaw nga", col2tl: "You are" },
        { col1: "On/ona/ono je", col2: "Siya ay", col2tl: "He/she/it is" },
        { col1: "Mi smo", col2: "Kami/tayo ay", col2tl: "We are" },
        { col1: "Vi ste", col2: "Kayo ay", col2tl: "You (pl.) are" },
        { col1: "Oni su", col2: "Sila ay", col2tl: "They are" },
      ]
    },
    phrases: [
      { hr: "Ja sam novi radnik.", tl: "Ako ay bagong manggagawa.", pronunciation: "YA sam NO-vi RAD-nik", blank: "sam", culturalNote: "🇭🇷 Glagol 'biti' je najvažniji glagol u hrvatskom. Koristimo ga za predstavljanje, opisivanje i kao pomoćni glagol. Nauči ga napamet!", culturalNoteTagalog: "🇵🇭 Ang pandiwa 'biti' ay ang pinakamahalagang pandiwa sa Croatian. Ginagamit namin ito para sa pagpapakilala, paglalarawan, at bilang auxiliary verb. Saulo ito!" },
      { hr: "Ti si dobar kolega.", tl: "Ikaw ay isang mabuting katrabaho.", pronunciation: "TI si DOB-ar ko-LE-ga", blank: "si", culturalNote: "🇭🇷 'Ti' je neformalno — koristite ga s prijateljima i kolegama. 'Vi' je formalno — koristite ga sa šefom, starijima i strancima koje ne poznajete.", culturalNoteTagalog: "🇵🇭 'Ti' ay impormal — gamitin sa mga kaibigan at katrabaho. 'Vi' ay pormal — gamitin sa boss, matatanda, at mga estranghero na hindi mo kilala." },
      { hr: "On je iz Hrvatske, ona je iz Filipina.", tl: "Siya ay mula sa Croatia, siya ay mula sa Pilipinas.", pronunciation: "ON ye iz HRVA-tske, O-na ye iz fi-LI-pi-na", blank: "iz", culturalNote: "🇭🇷 U hrvatskom postoje različite zamjenice za muški (on) i ženski (ona) rod. Za razliku od filipinskog 'siya' koje vrijedi za oba. Ovo je česta greška pri učenju.", culturalNoteTagalog: "🇵🇭 Sa Croatian, may magkaibang panghalip para sa panlalaki (on) at pambabae (ona). Hindi tulad ng Filipino 'siya' na ginagamit para sa parehong kasarian. Ito ay karaniwang pagkakamali sa pag-aaral." },
      { hr: "Bili smo na poslu jučer.", tl: "Nasa trabaho kami kahapon.", pronunciation: "BI-li smo NA POS-lu YU-cher", blank: "smo", culturalNote: "🇭🇷 Prošlo vrijeme u hrvatskom — glagol 'biti' se mijenja: bio sam (M), bila sam (Ž). Ovo je važna razlika ovisno o rodu govornika.", culturalNoteTagalog: "🇵🇭 Nakaraan sa Croatian — ang pandiwa 'biti' ay nagbabago: bio sam (M), bila sam (Ž). Ito ay mahalagang pagkakaiba depende sa kasarian ng nagsasalita." },
      { hr: "Jesam li radnik ili volonter?", tl: "Ako ba ay manggagawa o boluntaryo?", pronunciation: "YE-sam li RAD-nik ILI vo-LON-ter", blank: "li", culturalNote: "🇭🇷 Čestica 'li' pretvara rečenicu u pitanje. Ovo je jednostavan i čest način tvorbe pitanja u hrvatskom. Zapamti: 'Jesam li', 'Jesi li', 'Je li'.", culturalNoteTagalog: "🇵🇭 Ang particle 'li' ay nagpapalit ng pangungusap sa tanong. Ito ay isang simple at karaniwang paraan ng pagbuo ng tanong sa Croatian. Tandaan: 'Jesam li', 'Jesi li', 'Je li'." },
      { hr: "Glagol se mijenja prema licu i broju.", tl: "Ang pandiwa ay nagbabago ayon sa panauhan at bilang.", pronunciation: "GLA-gol se MI-ye-nya PREM-a LI-tsu i BRO-yu", blank: "licu", culturalNote: "🇭🇷 Svaki glagol u hrvatskom ima 6 oblika — za svako lice (ja, ti, on/ona, mi, vi, oni). Ovo se zove konjugacija. Na početku je teško — s vremenom postaje automatsko.", culturalNoteTagalog: "🇵🇭 Ang bawat pandiwa sa Croatian ay may 6 na anyo — para sa bawat panauhan (ja, ti, on/ona, mi, vi, oni). Ito ay tinatawag na conjugation. Sa simula ito ay mahirap — sa paglipas ng panahon ito ay nagiging awtomatiko." },
    ],
    quiz: [
      { question: "Kako kažeš 'Ako ay' na hrvatskom?", options: ["Ti si", "On je", "Ja sam", "Mi smo"], answer: 2 },
      { question: "Što znači 'glagol'?", options: ["pangngalan", "pang-uri", "pandiwa", "panghalip"], answer: 2 },
      { question: "Koja je formalna zamjenica u hrvatskom?", options: ["Ti", "On", "Vi", "Oni"], answer: 2 },
      { question: "Kako kažeš 'We are' na hrvatskom?", options: ["Ja sam", "Ti si", "On je", "Mi smo"], answer: 3 },
    ]
  },
  {
    id: 16, category: "Osnove jezika", categoryTl: "Mga Pundasyon ng Wika", emoji: "🧩", color: "#6A0572",
    title: "Padeži — uvod", titleTl: "Mga Kaso — Panimula",
    keywords: [
      { word: "padež", meaning: "kaso / case" },
      { word: "nominativ", meaning: "nominatibo — tko?" },
      { word: "akuzativ", meaning: "akusatibo — koga/što?" },
      { word: "dativ", meaning: "datibo — komu/čemu?" },
      { word: "genitiv", meaning: "genitibo — koga/čega?" },
    ],
    grammarTable: {
      title: "7 padeža — kratki pregled",
      titleTl: "7 kaso — maikling pangkalahatang-ideya",
      rows: [
        { col1: "Nominativ", col2: "Tko? Što? → radnik radi", col2tl: "Sino? Ano? → ang manggagawa ay nagtatrabaho" },
        { col1: "Genitiv", col2: "Koga? Čega? → bez radnika", col2tl: "Kanino? Ng ano? → walang manggagawa" },
        { col1: "Dativ", col2: "Komu? → dajem radniku", col2tl: "Kanino? → ibinibigay ko sa manggagawa" },
        { col1: "Akuzativ", col2: "Koga? Što? → vidim radnika", col2tl: "Sino? Ano? → nakikita ko ang manggagawa" },
        { col1: "Vokativ", col2: "Dozivanje → radniče!", col2tl: "Pagtawag → manggagawa!" },
        { col1: "Lokativ", col2: "O čemu? → o radniku", col2tl: "Tungkol sa ano? → tungkol sa manggagawa" },
        { col1: "Instrumental", col2: "S kim? Čime? → s radnikom", col2tl: "Kasama sino? → kasama ang manggagawa" },
      ]
    },
    phrases: [
      { hr: "Radnik radi — to je nominativ.", tl: "Ang manggagawa ay nagtatrabaho — ito ay nominatibo.", pronunciation: "RAD-nik RA-di — TO ye no-mi-NA-tiv", blank: "nominativ", culturalNote: "🇭🇷 Nominativ je osnovni oblik imenice — onaj koji nađeš u rječniku. Koristi se kad je imenica subjekt rečenice — tko radi radnju.", culturalNoteTagalog: "🇵🇭 Ang nominatibo ay ang pangunahing anyo ng pangngalan — ang makikita mo sa diksyunaryo. Ginagamit kapag ang pangngalan ay paksa ng pangungusap — sino ang gumagawa ng kilos." },
      { hr: "Vidim radnika — to je akuzativ.", tl: "Nakikita ko ang manggagawa — ito ay akusatibo.", pronunciation: "VI-dim RAD-ni-ka — TO ye a-ku-ZA-tiv", blank: "akuzativ", culturalNote: "🇭🇷 Akuzativ je padež izravnog objekta — što ili koga glagol zahvaća. 'Vidim radnika' — 'radnika' je u akuzativu. Primijetite: 'radnik' postaje 'radnika'.", culturalNoteTagalog: "🇵🇭 Ang akusatibo ay ang kaso ng direktang object — ano o sino ang naaapektuhan ng pandiwa. 'Vidim radnika' — ang 'radnika' ay nasa akusatibo. Mapansin: ang 'radnik' ay nagiging 'radnika'." },
      { hr: "Dajem plaću radniku — to je dativ.", tl: "Ibinibigay ko ang sahod sa manggagawa — ito ay datibo.", pronunciation: "DA-yem PLA-chu RAD-ni-ku — TO ye DA-tiv", blank: "dativ", culturalNote: "🇭🇷 Dativ odgovara na pitanje 'komu' ili 'čemu'. Koristi se kad nekome dajemo, govorimo ili pišemo nešto. 'Radniku' je dativni oblik od 'radnik'.", culturalNoteTagalog: "🇵🇭 Ang datibo ay sumasagot sa tanong na 'kanino' o 'para saan'. Ginagamit kapag nagbibigay, nagsasalita, o sumusulat ng isang bagay sa isang tao." },
      { hr: "Padeži mijenjaju završetak riječi.", tl: "Ang mga kaso ay nagbabago ng ending ng salita.", pronunciation: "PA-de-zhi MI-ye-nya-yu ZA-vr-she-tak RI-ye-chi", blank: "padeži", culturalNote: "🇭🇷 Ovo je najveća razlika između hrvatskog i filipinskog. U filipinskom redosljed riječi određuje smisao — u hrvatskom to rade padeži. Zato Hrvati mogu mijenjati redosljed i rečenica i dalje ima smisla.", culturalNoteTagalog: "🇵🇭 Ito ang pinakamalaking pagkakaiba sa pagitan ng Croatian at Filipino. Sa Filipino, ang pagkakasunod-sunod ng mga salita ang nagtatakda ng kahulugan — sa Croatian, ginagawa ito ng mga kaso." },
      { hr: "Ne trebaš odmah naučiti sve padeže.", tl: "Hindi mo kailangang matutunan agad ang lahat ng kaso.", pronunciation: "ne TRE-bash OD-mah na-U-chi-ti SVE PA-de-zhe", blank: "padeže", culturalNote: "🇭🇷 7 padeža zvuči strašno — ali u praksi koristiš uglavnom nominativ i akuzativ. Ostale naučiš polako, kroz razgovor. Ne paničari!", culturalNoteTagalog: "🇵🇭 Ang 7 kaso ay mukhang nakakatakot — pero sa praktis, kadalasan ay gumagamit ka ng nominatibo at akusatibo. Natututo ka ng iba nang dahan-dahan, sa pamamagitan ng pag-uusap. Huwag pumikit!" },
      { hr: "S radnikom — to je instrumental.", tl: "Kasama ang manggagawa — ito ay instrumental.", pronunciation: "s RAD-ni-kom — TO ye ins-tru-MEN-tal", blank: "instrumental", culturalNote: "🇭🇷 Instrumental se koristi s prijedlogom 's/sa' — s kim si, s čime radiš. 'Radim s kolegom' — 'kolegom' je instrumental. Prijedlog 's' uvijek zahtijeva instrumental.", culturalNoteTagalog: "🇵🇭 Ang instrumental ay ginagamit sa panlapi na 's/sa' — kasama sino, gamit ano. 'Radim s kolegom' — ang 'kolegom' ay nasa instrumental. Ang panlaping 's' ay palaging nangangailangan ng instrumental." },
    ],
    quiz: [
      { question: "Koji padež odgovara na pitanje 'Tko?'", options: ["Akuzativ", "Dativ", "Nominativ", "Genitiv"], answer: 2 },
      { question: "Što znači 'padež'?", options: ["pandiwa", "pang-uri", "kaso / case", "panghalip"], answer: 2 },
      { question: "U kojoj rečenici je 'radnika' u akuzativu?", options: ["Radnik radi", "Vidim radnika", "Dajem radniku", "S radnikom"], answer: 1 },
      { question: "Koliko padeža ima hrvatski jezik?", options: ["5", "6", "7", "8"], answer: 2 },
    ]
  },
  {
    id: 17, category: "Osnove jezika", categoryTl: "Mga Pundasyon ng Wika", emoji: "🤝", color: "#6A0572",
    title: "Ti ili Vi — kada koristiti?", titleTl: "Ti o Vi — Kailan Gamitin?",
    keywords: [
      { word: "ti", meaning: "ikaw (neformalno)" },
      { word: "vi", meaning: "kayo (formalno)" },
      { word: "osloviti", meaning: "tawagan / address" },
      { word: "prešli smo na ti", meaning: "pumunta na kami sa ti" },
      { word: "poštovanje", meaning: "paggalang" },
    ],
    grammarTable: {
      title: "TI vs VI — kada koristiti?",
      titleTl: "TI vs VI — kailan gamitin?",
      rows: [
        { col1: "TI — neformalno", col2: "kolege iste razine, prijatelji, mlađi", col2tl: "katrabaho, kaibigan, mas bata" },
        { col1: "VI — formalno", col2: "šef, liječnik, stariji, stranac", col2tl: "boss, doktor, matatanda, estranghero" },
        { col1: "VI → TI prijelaz", col2: "uvijek predlaže starija/nadređena osoba", col2tl: "ang mas matanda o mas mataas ang nagmumungkahi" },
        { col1: "🇵🇭 kayo (1 osoba) = 🇭🇷 VI", col2: "kayo (više osoba) = VI množina", col2tl: "Isti princip kao po/opo u filipinskom!" },
      ]
    },
    phrases: [
      {
        hr: "Dobro jutro, kako ste Vi danas?",
        tl: "Magandang umaga, kumusta kayo ngayon?",
        pronunciation: "DOB-ro YU-tro, KA-ko STE VI DA-nas",
        blank: "ste",
        culturalNote: "🇭🇷 VI koristimo sa šefom, liječnikom, starijima i strancima. Glagol ide u množinu: kako STE (ne kako si). Ovo je znak poštovanja, ne hladnoće.",
        culturalNoteTagalog: "🇵🇭 Ang VI ay ginagamit sa boss, doktor, matatanda, at estranghero. Ang pandiwa ay nagiging pangmaramihan: kako STE (hindi kako si). Ito ay tanda ng paggalang, hindi kalamigan.",
      },
      {
        hr: "Hej, kako si ti danas?",
        tl: "Hoy, kumusta ka ngayon?",
        pronunciation: "HEY, KA-ko SI TI DA-nas",
        blank: "si",
        culturalNote: "🇭🇷 TI koristimo s kolegama iste razine, prijateljima i mlađima. Ako nisi siguran — uvijek počni s VI. Bolje biti previše formalan nego neformalan.",
        culturalNoteTagalog: "🇵🇭 Ang TI ay ginagamit sa mga katrabaho sa parehong antas, kaibigan, at mas bata. Kung hindi ka sigurado — laging magsimula sa VI. Mas mabuting maging masyadong pormal kaysa impormal.",
      },
      {
        hr: "Gospodine, možete li mi pomoći?",
        tl: "Ginoo, maaari ba kayong tulungan ako?",
        pronunciation: "GOS-po-di-ne, MO-zhe-te li mi po-MO-chi",
        blank: "možete",
        culturalNote: "🇭🇷 S nepoznatim muškarcem — Gospodine + VI. S nepoznatom ženom — Gospođo + VI. Filipinci često griješe i odmah koriste TI s nepoznatima — to zvuči grubo.",
        culturalNoteTagalog: "🇵🇭 Sa hindi kilalang lalaki — Gospodine + VI. Sa hindi kilalang babae — Gospođo + VI. Madalas nagkakamali ang mga Pilipino at agad gumagamit ng TI sa mga estranghero — mukhang bastos ito.",
      },
      {
        hr: "Možemo li prijeći na ti?",
        tl: "Maaari ba tayong lumipat sa ti?",
        pronunciation: "MO-zhe-mo li pri-YE-chi NA TI",
        blank: "prijeći",
        culturalNote: "🇭🇷 VAŽNO: Uvijek starija ili nadređena osoba predlaže prijelaz na TI. Ako šef kaže možemo na ti — to je čast. Ako ti predložiš šefu — to je nepristojno.",
        culturalNoteTagalog: "🇵🇭 MAHALAGA: Ang mas matanda o mas mataas na antas ang laging nagmumungkahi ng paglipat sa TI. Kung sinabi ng boss na možemo na ti — iyon ay karangalan. Kung ikaw ang magmungkahi sa boss — iyon ay kabastusan.",
      },
      {
        hr: "S kolegama brzo prelazimo na ti.",
        tl: "Sa mga katrabaho, mabilis kaming lumipat sa ti.",
        pronunciation: "s ko-LE-ga-ma BR-zo PRE-la-zi-mo NA TI",
        blank: "ti",
        culturalNote: "🇭🇷 Između kolega iste razine TI je normalno i brzo se uspostavi. Ali s novim šefom, HR-om ili seniorima uvijek počnite s VI dok oni ne predlože drugačije.",
        culturalNoteTagalog: "🇵🇭 Sa pagitan ng mga katrabaho sa parehong antas, ang TI ay normal at mabilis na naitatag. Pero sa bagong boss, HR, o mas mataas na antas, palaging magsimula sa VI.",
      },
      {
        hr: "Doktore, kako da Vas oslovim?",
        tl: "Doktor, paano ko kayo tatawagan?",
        pronunciation: "DOK-to-re, KA-ko da VAS os-LO-vim",
        blank: "Vas",
        culturalNote: "🇭🇷 S liječnicima, profesorima i sucima uvijek VI i titula. Doktore, Profesore, Sutkinja. Nikad samo ime dok oni sami ne predlože drugačije. Slično filipinskom po/opo.",
        culturalNoteTagalog: "🇵🇭 Sa mga doktor, propesor, at hukom, palaging VI at titulo. Doktore, Profesore, Sutkinja. Huwag kailanman gamitin ang pangalan lamang. Katulad ng po/opo sa Pilipinas.",
      },
      {
        hr: "Oprostite, jeste li Vi gospodin Horvat?",
        tl: "Excuse me, kayo ba si Ginoong Horvat?",
        pronunciation: "o-PROS-ti-te, YES-te li VI GOS-po-din HOR-vat",
        blank: "jeste",
        culturalNote: "🇭🇷 Kad ne poznaješ osobu — uvijek VI i oprostite. Vrijedi na ulici, u liftu, u čekaonici. Direktno TI strancu zvuči agresivno u hrvatskoj kulturi.",
        culturalNoteTagalog: "🇵🇭 Kapag hindi mo kilala ang tao — palaging VI at oprostite. Naaangkop sa kalye, elevator, waiting room. Ang direktang TI sa estranghero ay mukhang agresibo sa kulturang Croatian.",
      },
    ],
    quiz: [
      { question: "Kako se obraćaš šefu kojeg tek upoznaješ?", options: ["Hej, kako si?", "Dobro jutro, kako ste?", "Ej, što ima?", "Cao!"], answer: 1 },
      { question: "Tko predlaže prijelaz s VI na TI?", options: ["Uvijek mlađa osoba", "Svejedno tko", "Stranac uvijek", "Starija ili nadređena osoba"], answer: 3 },
      { question: "Tagalog kayo (1 osoba) = Hrvatski?", options: ["ti", "oni", "vi", "mi"], answer: 2 },
      { question: "Ulaziš u banku. Kako oslovljaš zaposlenika?", options: ["Hej ti!", "Oprostite, možete li mi pomoći?", "Ej brate!", "Cao!"], answer: 1 },
    ]
  },

  {
    id: 18, category: "Radne situacije", categoryTl: "Situasyon sa Trabaho", emoji: "🏪", color: "#E76F51",
    title: "Na blagajni — rad u dućanu", titleTl: "Sa Kahera — Trabaho sa Tindahan",
    keywords: [
      { word: "izvolite", meaning: "heto / sige (poslužujem te)" },
      { word: "ukupno", meaning: "kabuuan / total" },
      { word: "kusur", meaning: "sukli / change" },
      { word: "smjena", meaning: "shift / dežurstvo" },
      { word: "račun", meaning: "resibo" },
    ],
    grammarTable: {
      title: "Ključne rečenice na blagajni",
      titleTl: "Mahahalagang parirala sa kahera",
      rows: [
        { col1: "Dobar dan!", col2: "Magandang araw! — uvijek prvi pozdravljaš", col2tl: "palagi kang unang bumabati" },
        { col1: "Izvolite!", col2: "Heto! — kad daješ nešto kupcu", col2tl: "kapag nagbibigay ka ng isang bagay sa customer" },
        { col1: "Ukupno je...", col2: "Ang kabuuan ay... — ukupna cijena", col2tl: "kabuuang presyo" },
        { col1: "Izvolite kusur.", col2: "Heto ang inyong sukli. — vraćaš novac", col2tl: "ibinibigay mo ang sukli" },
        { col1: "Hvala, doviđenja!", col2: "Salamat, paalam! — uvijek se oprašta", col2tl: "palagi kang nagpapaalam" },
      ]
    },
    phrases: [
      {
        hr: "Dobar dan!",
        tl: "Magandang araw!",
        pronunciation: "DOB-ar DAN",
        blank: "dan",
        culturalNote: "🇭🇷 Kad kupac uđe — pozdravi ga s 'dobar dan' i ostavi ga na miru 1-2 minute. Ne jurišaj odmah s ponudama pomoći. Kupac treba trenutak da se orijentira. Pratite ga nenametljivo pogledom.",
        culturalNoteTagalog: "🇵🇭 Kapag pumasok ang customer — batiin siya ng 'dobar dan' at hayaan siyang mag-isa nang 1-2 minuto. Huwag agad sumugod na mag-alok ng tulong. Kailangan ng customer ng sandali para ma-orient. Bantayan siya nang hindi mapanghimasok.",
      },
      {
        hr: "Trebate li pomoć?",
        tl: "Kailangan ba ninyo ng tulong?",
        pronunciation: "TRE-ba-te li po-MOCH",
        blank: "pomoć",
        culturalNote: "🇭🇷 Tek kad primijetiš da kupac stoji zbunjeno, gleda okolo ili traži nešto — priđi i pitaj samo: 'Trebate pomoć?' Kratko i nenametljivo. Ne čekaj da te sam traži — ali ne nameći se ni prerano.",
        culturalNoteTagalog: "🇵🇭 Kapag napansin mong nakatayo ang customer nang malito, tumitingin sa paligid, o naghahanap ng isang bagay — lapitan at tanungin lamang: 'Trebate pomoć?' Maikli at hindi mapanghimasok. Huwag hintayin na ikaw mismo ang hanapin — pero huwag ring magmadali.",
      },
      {
        hr: "Da, tražim gdje vam stoji brašno.",
        tl: "Oo, hinahanap ko kung nasaan ang inyong harina.",
        pronunciation: "DA, TRA-zhim GDYE VAM STO-ji BRAH-no",
        blank: "stoji",
        culturalNote: "🇭🇷 Ovo je tipična rečenica kupca kad traži proizvod. 'Gdje vam stoji...' je najčešći način pitanja u dućanu. Nauči je napamet — čut ćeš je svaki dan. Ostale varijante: 'Gdje vam je...', 'Imate li...'",
        culturalNoteTagalog: "🇵🇭 Ito ang tipikal na pangungusap ng customer kapag naghahanap ng produkto. Ang 'Gdje vam stoji...' ay ang pinaka-karaniwang paraan ng pagtatanong sa tindahan. Saulo ito — maririnig mo ito araw-araw. Iba pang bersyon: 'Gdje vam je...', 'Imate li...'",
      },
      {
        hr: "Evo, sad ću vam pokazati.",
        tl: "Heto, ipapakita ko na sa inyo.",
        pronunciation: "E-vo, SAD chu VAM po-KA-za-ti",
        blank: "pokazati",
        culturalNote: "🇭🇷 Nikad samo pokaži prstom i reci 'tamo'. Uvijek ODVEDI kupca do proizvoda. To je standard u hrvatskoj usluzi. Kupac koji je osobno odveden osjeća se dobro usluženim i vraća se.",
        culturalNoteTagalog: "🇵🇭 Huwag kailanman ituro lang ng daliri at sabihing 'doon'. Palaging SAMAHAN ang customer sa produkto. Ito ang pamantayan sa serbisyo sa Croatia. Ang customer na personal na sinamahan ay mararamdamang mahusay na nasilbihan at babalik.",
      },
      {
        hr: "Ukupno je dvanaest eura i pedeset centi.",
        tl: "Ang kabuuan ay labindalawang euro at limampung sentimo.",
        pronunciation: "u-KUP-no ye DVA-na-est EU-ra i PE-de-set TSEN-ti",
        blank: "Ukupno",
        culturalNote: "🇭🇷 Uvijek jasno i glasno izgovori ukupan iznos — nikad samo pokaži prstom na ekran. Kupci koji ne razumiju dobro hrvatski trebaju čuti broj. Govori polako i ponovi ako kupac ne razumije.",
        culturalNoteTagalog: "🇵🇭 Palaging malinaw at malakas na sabihin ang kabuuang halaga — huwag kailanman ituro lang sa screen. Ang mga customer na hindi marunong ng Croatian ay kailangang marinig ang numero. Magsalita nang dahan-dahan at ulitin kung hindi naiintindihan ng customer.",
      },
      {
        hr: "Plaćate li gotovinom ili karticom?",
        tl: "Magbabayad ba kayo nang cash o card?",
        pronunciation: "pla-CHA-te li go-TO-vi-nom ILI KAR-ti-tsom",
        blank: "karticom",
        culturalNote: "🇭🇷 Uvijek pitaj kupca kako želi platiti — ne pretpostavljaj. U manjim dućanima kartica ponekad ne radi ili ima minimalni iznos. Ako je problem, objasni mirno: 'Kartica ne prolazi, imate li gotovinu?'",
        culturalNoteTagalog: "🇵🇭 Palaging tanungin ang customer kung paano sila magbabayad — huwag ipagpalagay. Sa maliliit na tindahan, minsan hindi gumagana ang card o may minimum na halaga. Kung may problema, ipaliwanag nang mahinahon: 'Kartica ne prolazi, imate li gotovinu?'",
      },
      {
        hr: "Izvolite kusur — tri eura i pedeset.",
        tl: "Heto ang inyong sukli — tatlong euro at limampu.",
        pronunciation: "iz-VO-li-te KU-sur — TRI EU-ra i PE-de-set",
        blank: "kusur",
        culturalNote: "🇭🇷 Kusur uvijek glasno izgovori, prebrojaj i vrati DIREKTNO U RUKE kupcu — nikad ne stavljaj na pult. To je standard koji sprječava sporove — kupac ne može tvrditi da mu nisi vratio novac. Iznimka: ako kupac sam stavi novac na pult ili kaže 'stavite tu' — tada i ti staviš na pult. Prati signal kupca.",
        culturalNoteTagalog: "🇵🇭 Palaging malakas na sabihin, bilangin, at ibalik ang sukli DIREKTA SA KAMAY ng customer — huwag kailanman ilagay sa counter. Ito ang pamantayan na pumipigil sa mga alitan — hindi maaaring sabihin ng customer na hindi mo ibinalik ang pera. Pagbubukod: kung ang customer mismo ay naglagay ng pera sa counter o nagsabing 'ilagay mo doon' — ilagay mo rin sa counter. Sundin ang signal ng customer.",
      },
      {
        hr: "Izvolite račun!",
        tl: "Heto ang inyong resibo!",
        pronunciation: "iz-VO-li-te RA-chun",
        blank: "račun",
        culturalNote: "🇭🇷 Račun uvijek ponudi kupcu — ne čekaj da traži. U Hrvatskoj je zakonska obveza izdati račun. Ako kupac odbije, to je njegovo pravo — ali ti ga moraš ponuditi. Bez računa nema reklamacije.",
        culturalNoteTagalog: "🇵🇭 Palaging ialay ang resibo sa customer — huwag maghintay na hilingin nila. Sa Croatia, legal na obligasyon ang mag-isyu ng resibo. Kung tatanggihan ito ng customer, iyon ang kanilang karapatan — pero kailangan mo itong ialay. Kung walang resibo, walang reklamo.",
      },

      {
        hr: "Blagajna je zatvorena.",
        tl: "Ang kahera ay sarado na.",
        pronunciation: "bla-GAY-na ye za-TVOR-ye-na",
        blank: "zatvorena",
        culturalNote: "🇭🇷 Dovoljno je reći 'Blagajna je zatvorena' i kupac će sam zaključiti što treba napraviti. Dodavanje 'idite na drugu' može zvučati bezobrazno — kao da ga otjeruješ. Kratko i neutralno uvijek bolje prolazi.",
        culturalNoteTagalog: "🇵🇭 Sapat na ang sabihing 'Blagajna je zatvorena' at malalaman ng customer kung ano ang dapat gawin. Ang pagdaragdag ng 'pumunta sa isa pa' ay maaaring mukhang bastos — parang tinatanggal mo sila. Ang maikli at neutral ay palaging mas epektibo.",
      },
    ],
    quiz: [
      { question: "Što je 'kusur'?", options: ["kabuuan", "resibo", "sukli / change", "reklamo"], answer: 2 },
      { question: "Mora li kupac tražiti račun ili ti ga nudiš?", options: ["Kupac mora tražiti", "Ti uvijek nudiš", "Svejedno", "Samo ako kupac plati karticom"], answer: 1 },
      { question: "Tko rješava reklamacije koje ti ne možeš riješiti?", options: ["Kupac sam", "Voditelj / nadređeni", "Drugi prodavač", "Nitko"], answer: 1 },
    ]
  },

  {
    id: 19, category: "Praktični život", categoryTl: "Praktikal na Buhay", emoji: "👮", color: "#1D3557",
    title: "U policijskoj postaji", titleTl: "Sa Istasyon ng Pulisya",
    keywords: [
      { word: "osobna iskaznica", meaning: "ID card / pagkakakilanlan" },
      { word: "boravišna dozvola", meaning: "residence permit" },
      { word: "ne razumijem", meaning: "hindi ko naiintindihan" },
      { word: "prevoditelj", meaning: "tagasalin / interpreter" },
      { word: "potpisati", meaning: "pumirma / lagdaan" },
    ],
    grammarTable: {
      title: "⚠️ Ključne riječi — obrati pažnju!",
      titleTl: "⚠️ Mga susing salita — magbigay-pansin!",
      rows: [
        { col1: "Potpišite", col2: "Lagdaan — traže potpis", col2tl: "NIKAD ne potpisuj bez razumijevanja!" },
        { col1: "Pritvoren/a", col2: "Detained — zadržani ste", col2tl: "Imate pravo na prevoditelja i konzulat" },
        { col1: "Kazna", col2: "Multa / parusa — novčana kazna", col2tl: "Pitaj za pojašnjenje — ne plaćaj odmah" },
        { col1: "Dokumenti", col2: "Mga dokumento — papiri", col2tl: "Uvijek nosite ORIGINALE uz sebe — zakonska obveza!" },
        { col1: "Svjedok", col2: "Saksi — witness", col2tl: "Mogu tražiti da budete svjedok" },
      ]
    },
    phrases: [
      {
        hr: "Dobar dan. Ne govorim dobro hrvatski.",
        tl: "Magandang araw. Hindi ako mahusay magsalita ng Croatian.",
        pronunciation: "DOB-ar DAN. ne GO-vo-rim DOB-ro HRVA-tski",
        blank: "govorim",
        culturalNote: "🇭🇷 Odmah na početku reci da ne govoriš dobro hrvatski — to nije slabost, to je važna informacija. Policajac će tada govoriti sporije ili potražiti pomoć. Nemoj šutjeti i praviti se da razumiješ.",
        culturalNoteTagalog: "🇵🇭 Sabihin agad sa simula na hindi ka marunong ng Croatian — hindi ito kahinaan, ito ay mahalagang impormasyon. Ang pulis ay magsasalita nang mas mabagal o maghahanap ng tulong. Huwag tumahimik at magpanggap na naiintindihan mo.",
      },
      {
        hr: "Mogu li dobiti prevoditelja?",
        tl: "Maaari ba akong makakuha ng tagasalin?",
        pronunciation: "MO-gu li DOB-iti pre-VO-di-tel-ya",
        blank: "prevoditelja",
        culturalNote: "🇭🇷 Ovo je tvoje ZAKONSKO PRAVO u Hrvatskoj. Policija ti je dužna osigurati prevoditelja ako ga tražiš, posebno u ozbiljnim situacijama. Ne boj se tražiti — to nije znak krivnje, to je tvoje pravo.",
        culturalNoteTagalog: "🇵🇭 Ito ang iyong LEGAL NA KARAPATAN sa Croatia. Ang pulisya ay obligadong magbigay sa iyo ng tagasalin kung hihilingin mo, lalo na sa seryosong sitwasyon. Huwag matakot na humingi — hindi ito tanda ng pagkakasala, ito ang iyong karapatan.",
      },
      {
        hr: "Ne razumijem. Možete li ponoviti sporije?",
        tl: "Hindi ko naiintindihan. Maaari ba kayong ulitin nang mas mabagal?",
        pronunciation: "ne ra-ZU-mi-yem. MO-zhe-te li po-NO-vi-ti SPO-ri-ye",
        blank: "razumijem",
        culturalNote: "🇭🇷 Uvijek reci kad ne razumiješ — čak i ako moraš reći to više puta. Šutnja se može protumačiti kao da se slažeš. U policijskoj postaji razumijevanje je jako važno — ne pogađaj što su rekli.",
        culturalNoteTagalog: "🇵🇭 Palaging sabihin kung hindi mo naiintindihan — kahit kailangang sabihin ito nang maraming beses. Ang katahimikan ay maaaring ipakahulugang sumasang-ayon ka. Sa istasyon ng pulisya, ang pag-unawa ay napakahalaga — huwag hulaan kung ano ang sinabi nila.",
      },
      {
        hr: "Evo moja osobna iskaznica i boravišna dozvola.",
        tl: "Heto ang aking ID card at residence permit.",
        pronunciation: "E-vo MO-ya OS-ob-na is-KAZ-ni-tsa i bo-RA-vish-na DOZ-vo-la",
        blank: "boravišna",
        culturalNote: "🇭🇷 Kao strani radnik uvijek moraš imati originalne dokumente uz sebe — osobnu iskaznicu i boravišnu dozvolu. To je zakonska obveza. Ako nemaš dokumente pri sebi, možeš dobiti kaznu na licu mjesta.",
        culturalNoteTagalog: "🇵🇭 Bilang dayuhang manggagawa, palagi kang dapat may dalang mga orihinal na dokumento — ID card at residence permit. Ito ay legal na obligasyon. Kung wala kang mga dokumento sa iyo, maaari kang makatanggap ng multa sa lugar.",
      },
      {
        hr: "Mogu li nazvati svoju agenciju ili poslodavca?",
        tl: "Maaari bang tumawag sa aking ahensya?",
        pronunciation: "MO-gu li na-ZVA-ti SVO-yu a-GEN-tsi-yu ILI po-slo-DAV-tsa",
        blank: "agenciju",
        culturalNote: "🇭🇷 Uvijek imaš pravo nazvati osobu od povjerenja — agenciju, poslodavca ili konzulat. Ako si zadržan/a, imaš pravo na telefonski poziv. Ovo pravo možeš tražiti mirno i jasno bez straha.",
        culturalNoteTagalog: "🇵🇭 Palagi kang may karapatang tumawag sa isang mapagkakatiwalaang tao — ahensya, employer, o konsulado. Kung ikaw ay nadetain, mayroon kang karapatang sa isang tawag sa telepono. Maaari mong hilingin ang karapatang ito nang mahinahon at malinaw nang walang takot.",
      },
      {
        hr: "Ne smijem potpisati dok ne razumijem.",
        tl: "Hindi ako pipirma kung hindi ko naiintindihan.",
        pronunciation: "ne SMI-yem pot-PI-sa-ti DOK ne ra-ZU-mi-yem",
        blank: "potpisati",
        culturalNote: "🇭🇷 NAJVAŽNIJA REČENICA: Nikad ne potpisuj dokument koji ne razumiješ — čak i ako te pritišću ili žure. Potpis je pravno obvezujući. Uvijek zatraži prijevod ili prevoditelja prije potpisa. Ovo vrijedi i za kazne.",
        culturalNoteTagalog: "🇵🇭 PINAKAMAHALAGANG PANGUNGUSAP: Huwag kailanman pumirma ng dokumentong hindi mo naiintindihan — kahit pinipigilan ka o nagmamadali sila. Ang pirma ay legal na obligasyon. Palaging humingi ng pagsasalin o tagasalin bago pumirma. Naaangkop din ito sa mga multa.",
      },
      {
        hr: "Mirno i polako — sve će biti u redu.",
        tl: "Kalmado lang — magiging maayos.",
        pronunciation: "MIR-no i PO-la-ko — SVE che BI-ti u RE-du",
        blank: "redu",
        culturalNote: "🇭🇷 Policija u Hrvatskoj radi posao — nije neprijatelj. Mirno ponašanje, jasna komunikacija i ispravni dokumenti rješavaju 99% situacija bez problema. Strah je razumljiv, ali panika samo otežava situaciju.",
        culturalNoteTagalog: "🇵🇭 Ang pulisya sa Croatia ay gumagawa ng trabaho — hindi sila kaaway. Ang mahinahong pag-uugali, malinaw na komunikasyon, at tamang mga dokumento ay nagreresulta sa 99% ng mga sitwasyon nang walang problema. Ang takot ay maiintindihan, pero ang panic ay nagpapalala ng sitwasyon.",
      },
    ],
    quiz: [
      { question: "Što je tvoje zakonsko pravo u policijskoj postaji?", options: ["Šutjeti i ne odgovarati", "Odmah potpisati sve dokumente", "Tražiti prevoditelja", "Pobjeći"], answer: 2 },
      { question: "Što znači 'boravišna dozvola'?", options: ["ID card", "residence permit", "potvrda o radu", "putovnica"], answer: 1 },
      { question: "Smije li se potpisati dokument koji ne razumiješ?", options: ["Da, uvijek", "Da, ako policajac kaže", "Ne, uvijek traži prijevod", "Da, ako si u žurbi"], answer: 2 },
      { question: "Što moraš imati uvijek uz sebe kao strani radnik?", options: ["Kopije dokumenata", "Originalne dokumente", "Samo putovnicu", "Ništa — nije obavezno"], answer: 1 },
    ]
  },

  {
    id: 20, category: "Radne situacije", categoryTl: "Situasyon sa Trabaho", emoji: "🏠", color: "#E9C46A",
    title: "Njegovateljica — briga o osobi", titleTl: "Caregiver — Pag-aalaga ng Tao",
    keywords: [
      { word: "štićenik", meaning: "inaalagaan / care recipient" },
      { word: "lijek", meaning: "gamot / medisina" },
      { word: "doza", meaning: "dosis" },
      { word: "inkontinencija", meaning: "hindi makontrol ang ihi/dumi" },
      { word: "hitna pomoć", meaning: "emergency / ambulansya" },
    ],
    grammarTable: {
      title: "Ključne fraze u njezi",
      titleTl: "Mahahalagang parirala sa pag-aalaga",
      rows: [
        { col1: "Kako se osjećate?", col2: "Kumusta ang pakiramdam ninyo?", col2tl: "pita štićenika svako jutro" },
        { col1: "Vrijeme je za lijek.", col2: "Oras na para sa gamot.", col2tl: "podsjetnik za lijekove" },
        { col1: "Trebate li pomoć?", col2: "Kailangan ba ninyo ng tulong?", col2tl: "prije svakog premještanja" },
        { col1: "Zovem hitnu pomoć.", col2: "Tatawag ako ng ambulansya.", col2tl: "u hitnom slučaju" },
        { col1: "Javit ću obitelji.", col2: "Ipapaalam ko sa pamilya.", col2tl: "kod svake promjene stanja" },
      ]
    },
    phrases: [
      {
        hr: "Dobro jutro! Kako ste se naspavali?",
        tl: "Magandang umaga! Kumusta ang tulog ninyo?",
        pronunciation: "DOB-ro YU-tro! KA-ko STE se NAS-pa-va-li",
        blank: "naspavali",
        culturalNote: "🇭🇷 Jutarnji pozdrav štićeniku je ritual — uvijek topao i strpljiv ton. Starije osobe u Hrvatskoj cijene dosljednost i rutinu. Isti pozdrav, isto vrijeme, svaki dan — to gradi povjerenje.",
        culturalNoteTagalog: "🇵🇭 Ang pagbati sa umaga sa inaalagaan ay isang ritwal — palaging mainit at mapagtiis na tono. Ang mga matatandang tao sa Croatia ay nagpapahalaga ng pagkakatulad at gawain. Parehong pagbati, parehong oras, araw-araw — nagtatayo ito ng tiwala.",
      },
      {
        hr: "Vrijeme je za lijek — dvije tablete uz čašu vode.",
        tl: "Oras na para sa gamot — dalawang tableta na may basong tubig.",
        pronunciation: "VRI-ye-me ye ZA LI-yek — DVI-ye TA-ble-te UZ CHA-shu VO-de",
        blank: "tablete",
        culturalNote: "🇭🇷 Nikad ne davaj lijek na svoju ruku — samo ono što piše u uputama ili što je rekao liječnik. Ako nisi siguran/a za dozu — nazovi obitelj ili liječnika PRIJE davanja. Greška s lijekovima može biti opasna.",
        culturalNoteTagalog: "🇵🇭 Huwag kailanman magbigay ng gamot nang sa iyong sariling desisyon — ang nasa instruksyon lamang o sinabi ng doktor. Kung hindi ka sigurado sa dosis — tawagan ang pamilya o doktor BAGO ibigay. Ang pagkakamali sa gamot ay maaaring mapanganib.",
      },
      {
        hr: "Trebate pomoć s ustajanjem?",
        tl: "Kailangan ba ninyo ng tulong sa pagtayo?",
        pronunciation: "TRE-ba-te po-MOCH s us-TA-ya-njem",
        blank: "ustajanjem",
        culturalNote: "🇭🇷 Razgovor je jednako važan kao i fizička njega — mnogi štićenici su jako usamljeni i ti si često jedina osoba s kojom razgovaraju cijeli dan. Dok pomažeš s ustajanjem, pričaj: 'Polako, nema žurbe, tu sam.' Topla riječ znači više nego što misliš.",
        culturalNoteTagalog: "🇵🇭 Ang pakikipag-usap ay kasinghalaga ng pisikal na pag-aalaga — maraming inaalagaan ay napaka-nag-iisa at ikaw ay madalas ang tanging taong nakakausap nila sa buong araw. Habang tumutulong sa pagtayo, makipag-usap: 'Dahan-dahan, walang madalian, nandito ako.' Ang mainit na salita ay nagkakahalaga nang higit pa sa iyong naiisip.",
      },
      {
        hr: "Danas ćemo se kupati — voda je topla.",
        tl: "Maliligo tayo ngayon — mainit ang tubig.",
        pronunciation: "DA-nas CHE-mo se KU-pa-ti — VO-da ye TO-pla",
        blank: "kupati",
        culturalNote: "🇭🇷 Najavi sve aktivnosti unaprijed — kupanje, obrok, šetnju. Starije osobe ne vole iznenađenja. Govori polako i jasno, gledaj osobu u oči. Ako odbija kupanje — ne sili, javi obitelji.",
        culturalNoteTagalog: "🇵🇭 Iulat nang maaga ang lahat ng aktibidad — paliligo, pagkain, paglalakad. Hindi gusto ng mga matatanda ang mga sorpresa. Magsalita nang dahan-dahan at malinaw, tumingin sa mata ng tao. Kung tumatanggi sa paliligo — huwag pilitin, ipaalam sa pamilya.",
      },
      {
        hr: "Hitna pomoć!",
        tl: "Ambulansya!",
        pronunciation: "HIT-na PO-moch",
        blank: "pomoć",
        culturalNote: "🇭🇷 U Hrvatskoj se hitna pomoć zove SAMO u stvarnoj životnoj opasnosti — pad s gubitkom svijesti, bol u prsima, prestanak disanja. Sve ostalo — prvo javi nadređenom ili obitelji koji odlučuju. Nepotrebno zvanje hitne može imati posljedice. Poslodavac će ti jasno reći koje situacije zahtijevaju hitnu, a koje ne.",
        culturalNoteTagalog: "🇵🇭 Sa Croatia, ang ambulansya ay tinatawagan LAMANG sa tunay na panganib sa buhay — pagkahulog na may pagkawala ng malay, sakit sa dibdib, paghinto ng paghinga. Para sa lahat ng iba — iulat muna sa nakatataas o pamilya na sila ang magpapasya. Ang hindi kinakailangang pagtawag sa ambulansya ay maaaring magkaroon ng kahihinatnan. Ang iyong employer ay magsasabi sa iyo nang malinaw kung aling sitwasyon ang nangangailangan ng ambulansya.",
      },
      {
        hr: "Javit ću obitelji o promjeni stanja.",
        tl: "Ipapaalam ko sa pamilya.",
        pronunciation: "ya-VIT chu o-BI-tel-yi O pro-MYE-ni STA-nya",
        blank: "obitelji",
        culturalNote: "🇭🇷 Obitelj uvijek mora biti informirana o svakoj promjeni — dobrog ili lošeg. To je tvoja profesionalna odgovornost. Bilježi što si primijetio/la — promjena raspoloženja, apetita, spavanja. To su važni signali.",
        culturalNoteTagalog: "🇵🇭 Ang pamilya ay dapat palaging maabisuhan tungkol sa anumang pagbabago — mabuti man o masama. Ito ang iyong propesyonal na responsibilidad. Itala ang napansin mo — pagbabago ng mood, gana sa pagkain, tulog. Ito ay mahahalagang senyales.",
      },
      {
        hr: "Razumijem, ponovit ću.",
        tl: "Naiintindihan ko, uulitin ko.",
        pronunciation: "ra-ZU-mi-yem, po-NO-vit chu",
        blank: "ponovit",
        culturalNote: "🇭🇷 Razgovor i strpljenje su temelj dobrog njegovatelja. Pitaj kako su spavali, sjećaju li se nekog lijepog, što su radili mladi — to ih oživljava. Mnogi su tjednima bez pravog razgovora. Tvoja prisutnost i pažnja su im dar, ne samo obaveza.",
        culturalNoteTagalog: "🇵🇭 Ang pakikipag-usap at pasensya ay pundasyon ng isang magandang caregiver. Tanungin kung paano sila natulog, kung may naalala silang maganda, kung ano ang ginawa nila noong bata — binibigyan nito sila ng buhay. Marami ang linggong walang tunay na pag-uusap. Ang iyong presensya at atensyon ay regalo para sa kanila, hindi lang obligasyon.",
      },
    ],
    quiz: [
      { question: "Što radiš prije nego pomogneš štićeniku ustati?", options: ["Samo ga digneš", "Pitaš ga pristaje li", "Čekaš da sam traži", "Zoveš obitelj"], answer: 1 },
      { question: "Što znači 'hitna pomoć'?", options: ["gamot", "ambulansya", "pamilya", "dosis"], answer: 1 },
      { question: "Što radiš ako nisi siguran/a za dozu lijeka?", options: ["Daješ polovicu", "Preskočiš dozu", "Zoveš obitelj ili liječnika", "Daješ duplu dozu"], answer: 2 },
      { question: "Primijećuješ nešto neobično kod štićenika. Što radiš?", options: ["Čekaš da prođe", "Odmah zoveš 112", "Pitaš susjede", "Nastaviš s rutinom"], answer: 1 },
    ]
  },
  {
    id: 21, category: "Radne situacije", categoryTl: "Situasyon sa Trabaho", emoji: "🏗️", color: "#6B705C",
    title: "Građevina — na gradilištu", titleTl: "Konstruksyon — sa Lugar ng Trabaho",
    keywords: [
      { word: "skela", meaning: "andamyo / scaffolding" },
      { word: "kaciga", meaning: "helmet / safety helmet" },
      { word: "materijal", meaning: "materyales" },
      { word: "pauza", meaning: "pahinga / break" },
      { word: "pažnja", meaning: "ingat / pansin" },
    ],
    grammarTable: {
      title: "Sigurnosne naredbe — čut ćeš ih svaki dan",
      titleTl: "Mga utos sa kaligtasan — maririnig mo ito araw-araw",
      rows: [
        { col1: "Pazi!", col2: "Mag-ingat! — opasnost odmah", col2tl: "panganib ngayon" },
        { col1: "Stani!", col2: "Tigil! / Hinto! — ne kreći se", col2tl: "huwag gumalaw" },
        { col1: "Makni se!", col2: "Umalis ka! — odmakni se brzo", col2tl: "lumayo nang mabilis" },
        { col1: "Pomozi!", col2: "Tulong! — treba pomoć", col2tl: "kailangan ng tulong" },
        { col1: "Oprez — pada!", col2: "Mag-ingat — bumabagsak!", col2tl: "nangangahulugang tumakas" },
      ]
    },
    phrases: [
      {
        hr: "Gdje su zaštitne rukavice i kaciga?",
        tl: "Nasaan ang protective gloves at helmet?",
        pronunciation: "GDYE su zash-TIT-ne ru-KA-vi-tse i KA-tsi-ga",
        blank: "kaciga",
        culturalNote: "🇭🇷 Zaštitna oprema nije opcija — na gradilištu je zakonska obveza. Kaciga, rukavice, zaštitne cipele uvijek. Ako šef ili kolega kaže da nije potrebno — ne slušaj. Tvoja sigurnost je na prvom mjestu.",
        culturalNoteTagalog: "🇵🇭 Ang protective equipment ay hindi opsyon — sa construction site ito ay legal na obligasyon. Helmet, guwantes, safety shoes palagi. Kung ang boss o katrabaho ay magsabi na hindi kailangan — huwag sumunod. Ang iyong kaligtasan ay nasa unahan.",
      },
      {
        hr: "Ne razumijem — možete li pokazati?",
        tl: "Hindi ko naiintindihan — ipakita ninyo?",
        pronunciation: "ne ra-ZU-mi-yem — MO-zhe-te li po-KA-za-ti",
        blank: "pokazati",
        culturalNote: "🇭🇷 Na gradilištu nikad ne pretpostavljaj što se od tebe traži. Ako ne razumiješ naredbu — odmah pitaj ili traži da ti pokažu. Krivo napravljen posao na gradilištu može biti opasno po život.",
        culturalNoteTagalog: "🇵🇭 Sa construction site, huwag kailanman ipagpalagay kung ano ang hinihingi sa iyo. Kung hindi mo naiintindihan ang utos — agad magtanong o humingi na ipakita sa iyo. Ang maling ginawang trabaho sa construction site ay maaaring mapanganib sa buhay.",
      },
      {
        hr: "Trebam još cementa i dasaka.",
        tl: "Kailangan ko pa ng semento at mga tabla.",
        pronunciation: "TRE-bam YOSH TSE-men-ta i DA-sa-ka",
        blank: "cementa",
        culturalNote: "🇭🇷 Nauči nazive osnovnih materijala odmah — cigla, cement, pijesak, daske, čelik, žica. Kad šef kaže donesi ili pripremi, trebaš znati o čemu govori. Pitanje je uvijek bolje od krive akcije.",
        culturalNoteTagalog: "🇵🇭 Matutunan agad ang mga pangalan ng pangunahing materyales — cigla (laryo), cement, pijesak (buhangin), daske (tabla), čelik (bakal), žica (alambre). Kapag sinabi ng boss na magdala o maghanda, kailangan mong malaman kung tungkol saan siya nagsasalita.",
      },
      {
        hr: "Pazi — pada materijal odozgo!",
        tl: "Mag-ingat — may bumabagsak mula sa itaas!",
        pronunciation: "PA-zi — PA-da ma-TE-ri-yal o-DOZ-go",
        blank: "materijal",
        culturalNote: "🇭🇷 Ove sigurnosne uzvike moraš razumjeti i reagirati ODMAH — bez razmišljanja. Vježbaj ih napamet. Na gradilištu sekunda može biti razlika između ozljede i sigurnosti.",
        culturalNoteTagalog: "🇵🇭 Ang mga sigaw na ito para sa kaligtasan ay dapat mong maunawaan at tumugon AGAD — nang walang pag-iisip. Saulo ang mga ito. Sa construction site ang isang segundo ay maaaring pagkakaiba sa pagitan ng pinsala at kaligtasan.",
      },
      {
        hr: "Ozlijedio sam se — gdje je prva pomoć?",
        tl: "Nasaktan ako — nasaan ang first aid?",
        pronunciation: "oz-LI-ye-dio SAM se — GDYE ye PR-va po-MOCH",
        blank: "pomoć",
        culturalNote: "🇭🇷 Svaka ozljeda na radu mora biti odmah prijavljena — čak i mala. Ne skrivaj ozljedu iz straha da ćeš izgubiti posao. Neprijavljene ozljede su tvoj problem ako se stanje pogorša. Šef je dužan osigurati prvu pomoć.",
        culturalNoteTagalog: "🇵🇭 Ang bawat pinsala sa trabaho ay dapat agad na iulat — kahit maliit. Huwag itago ang pinsala dahil sa takot na mawalan ng trabaho. Ang hindi iulat na pinsala ay iyong problema kung lumala ang kondisyon. Ang boss ay obligadong magbigay ng first aid.",
      },
      {
        hr: "Kada je pauza i gdje jedemo?",
        tl: "Kailan ang pahinga at saan tayo kakain?",
        pronunciation: "KA-da ye PAU-za i GDYE YE-de-mo",
        blank: "pauza",
        culturalNote: "🇭🇷 Na gradilištu pauze su strogo regulirane — obično 30 minuta za ručak. Jede se najčešće na gradilištu ili u blizini. Pitaj kolegu prvog dana — ne pretpostavljaj. Kasnjenje s pauze se ne tolerira.",
        culturalNoteTagalog: "🇵🇭 Sa construction site, ang mga pahinga ay mahigpit na kinokontrol — karaniwang 30 minuto para sa tanghalian. Madalas kumain sa construction site o sa malapit. Tanungin ang katrabaho sa unang araw — huwag ipagpalagay. Hindi tinotolerate ang huli sa pahinga.",
      },
      {
        hr: "Do kada smo danas?",
        tl: "Hanggang kailan tayo ngayon?",
        pronunciation: "DO KA-da SMO DA-nas",
        blank: "kada",
        culturalNote: "🇭🇷 Pitaj na početku ili sredinom dana — ne čekaj kraj smjene pa se iznenaditi. Uvjeti rada, uključujući prekovremeni, dogovaraju se prije zaposlenja — ne pitaj za to na gradilištu, ostavlja loš dojam. Umor na gradilištu je opasan, ne skrivaj iscrpljenost.",
        culturalNoteTagalog: "🇵🇭 Magtanong sa simula o kalagitnaan ng araw — huwag hintayin ang katapusan ng shift. Ang mga kondisyon ng trabaho, kasama ang overtime, ay napagkasunduan bago ang trabaho — huwag itanong iyon sa construction site, nagpapahiwatig ito ng masamang impresyon. Ang pagod sa construction site ay mapanganib, huwag itago ang pagkahapo.",
      },
    ],
    quiz: [
      { question: "Je li zaštitna oprema obavezna na gradilištu?", options: ["Samo ponekad", "Samo za nove radnike", "Da, uvijek — zakonska obveza", "Samo ako šef kaže"], answer: 2 },
      { question: "Što znači 'Pazi!' na gradilištu?", options: ["Odmori se", "Opasnost — reagiraj odmah", "Dođi ovdje", "Završi posao"], answer: 1 },
      { question: "Što radiš ako se ozlijediš na poslu?", options: ["Sakriješ ozljedu", "Nastaviš raditi", "Odmah prijaviš i tražiš prvu pomoć", "Ideš kući bez javljanja"], answer: 2 },
      { question: "Što znači 'skela'?", options: ["helmet", "materyales", "andamyo / scaffolding", "pahinga"], answer: 2 },
    ]
  },
  {
    id: 22, category: "Radne situacije", categoryTl: "Situasyon sa Trabaho", emoji: "🧹", color: "#8ECAE6",
    title: "Čistačica — predmeti i izrazi", titleTl: "Cleaner — Mga Bagay at Ekspresyon",
    keywords: [
      { word: "usisavač", meaning: "vacuum cleaner" },
      { word: "krpa", meaning: "basahan / mop cloth" },
      { word: "sredstvo", meaning: "panlinis / cleaning product" },
      { word: "koš za smeće", meaning: "basurahan / trash bin" },
      { word: "kolica", meaning: "cleaning cart / kariton" },
    ],
    grammarTable: {
      title: "Predmeti za čišćenje",
      titleTl: "Mga kagamitan sa paglilinis",
      rows: [
        { col1: "usisavač", col2: "vacuum cleaner", col2tl: "para sa tepih i pod" },
        { col1: "mop / brisač poda", col2: "mop", col2tl: "para sa mokri pod" },
        { col1: "krpa", col2: "basahan / cloth", col2tl: "za brisanje površina" },
        { col1: "spužva", col2: "espongha / sponge", col2tl: "za sudoper i kupaonicu" },
        { col1: "lopata i metla", col2: "pala at walis", col2tl: "za sakupljanje smeća" },
        { col1: "vjedro", col2: "timba / bucket", col2tl: "za vodu i otopinu" },
        { col1: "sredstvo za WC", col2: "panlinis ng CR", col2tl: "dezinficijens za zahod" },
        { col1: "sredstvo za staklo", col2: "panlinis ng salamin", col2tl: "za prozore i ogledala" },
      ]
    },
    phrases: [
      {
        hr: "Gdje su kolica i sredstva za čišćenje?",
        tl: "Nasaan ang cleaning cart at mga panlinis?",
        pronunciation: "GDYE su KO-li-tsa i SRED-stva ZA CHISH-che-nye",
        blank: "sredstva",
        culturalNote: "🇭🇷 Kolica su osnova organiziranog čišćenja — sve na jednom mjestu. Na kolicima obično stoje: sredstva, krpe, rukavice, vreće za smeće, rezervni ručnici i posteljina. Nauči gdje se nadopunjuju zalihe.",
        culturalNoteTagalog: "🇵🇭 Ang cleaning cart ay pundasyon ng organisadong paglilinis — lahat sa isang lugar. Sa cart ay karaniwang nasa: mga panlinis, basahan, guwantes, basura bag, spare tuwalya at bedsheet. Alamin kung saan mapupunan ang mga supply.",
      },
      {
        hr: "Trebam novu vreću za smeće.",
        tl: "Kailangan ko ng bagong basura bag.",
        pronunciation: "TRE-bam NO-vu VRE-chu ZA SME-che",
        blank: "smeće",
        culturalNote: "🇭🇷 U Hrvatskoj postoji razvrstavanje otpada — papir, plastika, staklo, bio otpad. U hotelima i uredima obično postoje označeni koševi. Pitaj nadređenog kako razvrstavati — razlikuje se od mjesta do mjesta.",
        culturalNoteTagalog: "🇵🇭 Sa Croatia mayroon itong paghihiwalay ng basura — papel, plastik, salamin, bio basura. Sa mga hotel at opisina ay karaniwang may mga lalagyan na may label. Tanungin ang nakatataas kung paano mag-sort — naiiba ito sa bawat lugar.",
      },
      {
        hr: "Usisavač ne radi — gdje je zamjena?",
        tl: "Hindi gumagana ang vacuum — nasaan ang kapalit?",
        pronunciation: "u-SI-sa-vach ne RA-di — GDYE ye ZA-mye-na",
        blank: "zamjena",
        culturalNote: "🇭🇷 Ako se nešto pokvari ili ne radi — odmah javi nadređenom, ne improvizuj. Pokvarenu opremu ne popravljaj sam/sama. Zabilježi što se dogodilo — koji stroj, kada, što si primijetio/la.",
        culturalNoteTagalog: "🇵🇭 Kung may masira o hindi gumagana — agad iulat sa nakatataas, huwag mag-improvise. Huwag ayusin ang sirang kagamitan nang mag-isa. Itala ang nangyari — aling makina, kailan, ano ang napansin mo.",
      },
      {
        hr: "Koje sredstvo koristim za kupaonicu?",
        tl: "Anong panlinis ang gagamitin ko sa banyo?",
        pronunciation: "KO-ye SRED-stvo ko-RIS-tim ZA ku-pa-O-ni-tsu",
        blank: "sredstvo",
        culturalNote: "🇭🇷 Svako sredstvo ima svoju namjenu — sredstvo za WC, za staklo, za pod, za kuhinjske površine. Sapun koristimo samo za pranje ruku. Nikad ne miješaj sredstva — može biti opasno. Ako nisi siguran/a koje sredstvo za koji prostor — pitaj.",
        culturalNoteTagalog: "🇵🇭 Ang bawat panlinis ay may sariling layunin — para sa CR, salamin, sahig, kusina. Ang sabon ay para lamang sa paghuhugas ng kamay. Huwag kailanman paghaluin ang mga panlinis — maaaring mapanganib. Kung hindi ka sigurado kung aling panlinis para sa aling espasyo — magtanong.",
      },
      {
        hr: "Nema papirnatih ručnika — trebam dopuniti.",
        tl: "Wala nang paper towel — mag-rerefill ako.",
        pronunciation: "NE-ma PA-pir-na-tih RU-chni-ka — TRE-bam do-PU-ni-ti",
        blank: "dopuniti",
        culturalNote: "🇭🇷 Dio posla čistačice je i dopunjavanje potrošnog materijala — sapun, toaletni papir, papirni ručnici, vrećice. Provjeri svaku prostoriju i dopuni bez čekanja da netko kaže.",
        culturalNoteTagalog: "🇵🇭 Bahagi ng trabaho ng cleaner ang pagpuno ng consumable materials — sabon, tissue, paper towel, plastic bag. Suriin ang bawat kwarto at punan nang hindi naghihintay na may magsabi.",
      },
      {
        hr: "Prozori se čiste sredstvom za staklo i krpom.",
        tl: "Salamin at basahan ang gamitin sa mga bintana.",
        pronunciation: "PRO-zo-ri se CHIS-te SRED-stvom ZA STAK-lo i KR-pom",
        blank: "staklo",
        culturalNote: "🇭🇷 Za prozore koristimo sredstvo za staklo i čistu krpu — krpa ne smije biti masna ni prašnjava. Prozori se čiste kružnim pokretima od vrha prema dolje. Izbjegavaj čišćenje na direktnom suncu — ostavljaju pruge.",
        culturalNoteTagalog: "🇵🇭 Para sa mga bintana, gumamit ng panlinis ng salamin at malinis na basahan — ang basahan ay hindi dapat may mantsa ng langis o alikabok. Ang mga bintana ay nililinis sa paikot na galaw mula sa itaas pababa. Iwasan ang paglilinis sa direktang sikat ng araw — nagdudulot ito ng mga marka.",
      },
      {
        hr: "Gotova sam s katom — što je sljedeće?",
        tl: "Tapos na ako sa palapag — ano na?",
        pronunciation: "GO-to-va sam s KA-tom — SHTO ye SL-ye-de-che",
        blank: "sljedeće",
        culturalNote: "🇭🇷 Uvijek javi kad završiš s područjem i pitaj za sljedeći zadatak — ne čekaj pasivno. To pokazuje profesionalnost i inicijativu. Nadređeni cijene radnike koji ne trebaju stalno biti vođeni.",
        culturalNoteTagalog: "🇵🇭 Palaging iulat kapag natapos ka sa isang lugar at magtanong tungkol sa susunod na gawain — huwag pasibong maghintay. Nagpapakita ito ng propesyonalismo at inisyatibo. Pinahahalagahan ng mga nakatataas ang mga manggagawang hindi kailangang palaging gabayan.",
      },
    ],
    quiz: [
      { question: "Čime se čiste prozori?", options: ["Samo vodom", "Krpom i sapunom", "Sredstvom za staklo i krpom", "Usisavačem"], answer: 2 },
      { question: "Što znači 'vjedro'?", options: ["vacuum cleaner", "timba / bucket", "basahan", "kariton"], answer: 1 },
      { question: "Usisavač se pokvario. Što radiš?", options: ["Popravljaš ga sam/sama", "Nastaviš bez njega", "Javiš nadređenom", "Ideš kući"], answer: 2 },
      { question: "Što još spada u posao čistačice osim čišćenja?", options: ["Kuhanje", "Dopunjavanje sapuna, papira i ručnika", "Primanje gostiju", "Nošenje prtljage"], answer: 1 },
    ]
  },

];

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Nunito+Sans:wght@400;600&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .lesson-card { transition: transform 0.18s ease, box-shadow 0.18s ease; cursor: pointer; }
  .lesson-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(180,100,40,0.12); }
  .lesson-card:active { transform: scale(0.98); }
  .tap-btn { transition: all 0.15s ease; cursor: pointer; }
  .tap-btn:active { transform: scale(0.97); }
  .opt-btn { transition: all 0.15s ease; }
  .opt-btn:active { transform: scale(0.98); }
  .lang-btn { transition: all 0.15s ease; cursor: pointer; }
  @keyframes pop { 0%{transform:scale(0.5);opacity:0} 80%{transform:scale(1.1)} 100%{transform:scale(1);opacity:1} }
  @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
  @keyframes slideIn { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:translateX(0)} }
  .write-input { transition: border 0.2s, box-shadow 0.2s; }
  .write-input:focus { outline: none; }
`;

function normalise(str) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim();
}

function checkWriting(input, correct) {
  const a = normalise(input), b = normalise(correct);
  if (a === b) return "correct";
  if (Math.abs(a.length - b.length) <= 2) {
    let diff = 0;
    for (let i = 0; i < Math.max(a.length, b.length); i++) if (a[i] !== b[i]) diff++;
    if (diff <= 2) return "almost";
  }
  return "wrong";
}

// Build fill-in-the-blank sentence: replace blank word with ___
function buildBlank(sentence, blank) {
  const re = new RegExp(blank, "i");
  return sentence.replace(re, "___");
}

function HighlightedPhrase({ text, keywords, color }) {
  const matches = [];
  keywords.forEach(kw => {
    const re = new RegExp(`\\b${kw.word}\\b`, "gi");
    let m;
    while ((m = re.exec(text)) !== null) matches.push({ start: m.index, end: m.index + m[0].length });
  });
  if (!matches.length) return <span style={{ fontFamily:"'Nunito',sans-serif", fontSize:"clamp(18px,5vw,24px)", fontWeight:800, lineHeight:1.4, color:"#2D1B00" }}>{text}</span>;
  matches.sort((a,b) => a.start - b.start);
  const els = []; let pos = 0;
  matches.forEach((m,i) => {
    if (m.start > pos) els.push(<span key={`t${i}`}>{text.slice(pos, m.start)}</span>);
    els.push(<span key={`k${i}`} style={{ color, fontWeight:900 }}>{text.slice(m.start, m.end)}</span>);
    pos = m.end;
  });
  if (pos < text.length) els.push(<span key="end">{text.slice(pos)}</span>);
  return <span style={{ fontFamily:"'Nunito',sans-serif", fontSize:"clamp(18px,5vw,24px)", fontWeight:800, lineHeight:1.4, color:"#2D1B00" }}>{els}</span>;
}

function LangSwitch({ lang, setLang, dark }) {
  return (
    <div style={{ display:"flex", gap:3, background:dark?"rgba(255,255,255,0.22)":"#FF6B3515", borderRadius:20, padding:"3px" }}>
      {["hr","tl"].map(l => (
        <button key={l} className="lang-btn" onClick={() => setLang(l)} style={{ background:lang===l?"#fff":"transparent", border:"none", borderRadius:16, padding:"5px 11px", fontFamily:"'Nunito',sans-serif", fontSize:12, fontWeight:800, color:lang===l?"#FF6B35":dark?"rgba(255,255,255,0.8)":"#FF6B35", boxShadow:lang===l?"0 2px 8px rgba(0,0,0,0.12)":"none" }}>
          {l==="hr"?"🇭🇷 HR":"🇵🇭 TL"}
        </button>
      ))}
    </div>
  );
}

function TopBar({ onBack, progress, rightLabel, accent, title, right }) {
  return (
    <div style={{ background:accent, padding:"14px 18px 12px", display:"flex", alignItems:"center", gap:12, boxShadow:`0 4px 16px ${accent}40`, position:"sticky", top:0, zIndex:10 }}>
      <button onClick={onBack} style={{ background:"rgba(255,255,255,0.25)", border:"none", color:"#fff", fontSize:20, cursor:"pointer", padding:"5px 10px", borderRadius:10, fontWeight:900, lineHeight:1 }}>‹</button>
      {progress != null
        ? <div style={{ flex:1 }}><div style={{ height:7, background:"rgba(255,255,255,0.3)", borderRadius:8, overflow:"hidden" }}><div style={{ height:"100%", width:`${progress}%`, background:"#fff", borderRadius:8, transition:"width 0.3s ease" }} /></div></div>
        : <div style={{ flex:1, fontFamily:"'Nunito',sans-serif", fontSize:14, fontWeight:800, color:"#fff" }}>{title}</div>
      }
      {rightLabel && <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:12, fontWeight:800, color:"rgba(255,255,255,0.9)" }}>{rightLabel}</div>}
      {right}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("hr");
  const [screen, setScreen] = useState("home");
  const [mainCategory, setMainCategory] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentLesson, setCurrentLesson] = useState(null);
  const [lessonPhase, setLessonPhase] = useState("goal");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showCultural, setShowCultural] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [writeIndex, setWriteIndex] = useState(0);
  const [writeInput, setWriteInput] = useState("");
  const [writeResult, setWriteResult] = useState(null);
  const [writeScore, setWriteScore] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const inputRef = useRef(null);
  const t = T[lang];
  const accent = currentLesson?.color || "#FF6B35";

  const openLesson = (lesson) => {
    setCurrentLesson(lesson); setLessonPhase("goal");
    setPhraseIndex(0); setShowTranslation(false); setShowCultural(false);
    setQuizIndex(0); setQuizAnswer(null); setQuizScore(0);
    setWriteIndex(0); setWriteInput(""); setWriteResult(null); setWriteScore(0);
    setScreen("lesson");
  };

  const nextPhrase = () => {
    if (phraseIndex < currentLesson.phrases.length - 1) {
      setPhraseIndex(i => i+1); setShowTranslation(false); setShowCultural(false);
    } else { setLessonPhase("quiz"); setQuizIndex(0); setQuizAnswer(null); }
  };

  const handleQuizAnswer = (idx) => {
    if (quizAnswer !== null) return;
    setQuizAnswer(idx);
    if (idx === currentLesson.quiz[quizIndex].answer) setQuizScore(s => s+1);
  };

  const nextQuestion = () => {
    if (quizIndex < currentLesson.quiz.length - 1) { setQuizIndex(i => i+1); setQuizAnswer(null); }
    else { setLessonPhase("writing"); setWriteIndex(0); setWriteInput(""); setWriteResult(null); setWriteScore(0); }
  };

  const handleCheck = () => {
    if (!writeInput.trim()) return;
    const blank = currentLesson.phrases[writeIndex].blank;
    const result = checkWriting(writeInput, blank);
    setWriteResult(result);
    if (result === "correct" || result === "almost") setWriteScore(s => s+1);
  };

  const nextWrite = () => {
    if (writeIndex < currentLesson.phrases.length - 1) {
      setWriteIndex(i => i+1); setWriteInput(""); setWriteResult(null);
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      if (!completedLessons.includes(currentLesson.id)) setCompletedLessons(c => [...c, currentLesson.id]);
      setScreen("complete");
    }
  };

  useEffect(() => { if (lessonPhase === "writing") setTimeout(() => inputRef.current?.focus(), 200); }, [lessonPhase, writeIndex]);

  // ---- FEEDBACK ----
  if (showFeedback) return (
    <div style={{ minHeight:"100vh", background:"#FFF8F0", fontFamily:"'Nunito Sans',sans-serif", display:"flex", flexDirection:"column" }}>
      <style>{STYLES}</style>
      <div style={{ background:"linear-gradient(150deg,#FF6B35,#FF8C42)", padding:"44px 24px 32px", textAlign:"center", borderRadius:"0 0 36px 36px", boxShadow:"0 6px 28px rgba(255,107,53,0.28)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-50, right:-50, width:160, height:160, borderRadius:"50%", background:"rgba(255,255,255,0.1)" }} />
        <button onClick={() => { setShowFeedback(false); setFeedbackSubmitted(false); setFeedbackText(""); }} style={{ position:"absolute", top:16, left:16, background:"rgba(255,255,255,0.25)", border:"none", color:"#fff", fontSize:13, fontFamily:"'Nunito',sans-serif", fontWeight:800, padding:"6px 14px", borderRadius:20, cursor:"pointer" }}>{t.feedbackBack}</button>
        <div style={{ position:"absolute", top:16, right:16 }}><LangSwitch lang={lang} setLang={setLang} dark /></div>
        <div style={{ fontSize:48, marginBottom:10 }}>💡</div>
        <h1 style={{ fontFamily:"'Nunito',sans-serif", fontSize:"clamp(22px,6vw,34px)", fontWeight:900, color:"#fff", marginBottom:8, textShadow:"0 2px 10px rgba(0,0,0,0.15)" }}>{t.feedbackTitle}</h1>
        <p style={{ fontFamily:"'Nunito Sans',sans-serif", fontSize:15, color:"rgba(255,255,255,0.9)", maxWidth:340, margin:"0 auto", lineHeight:1.6 }}>{t.feedbackSub}</p>
      </div>

      <div style={{ flex:1, padding:"28px 18px", maxWidth:480, width:"100%", margin:"0 auto", display:"flex", flexDirection:"column", gap:16 }}>
        {!feedbackSubmitted ? (
          <>
            <textarea
              value={feedbackText}
              onChange={e => setFeedbackText(e.target.value)}
              placeholder={t.feedbackPlaceholder}
              rows={8}
              style={{ width:"100%", fontFamily:"'Nunito Sans',sans-serif", fontSize:15, color:"#2D1B00", background:"#fff", border:"2px solid #F0E0D0", borderRadius:16, padding:"16px", resize:"none", outline:"none", lineHeight:1.6, boxSizing:"border-box" }}
            />
            <div style={{ background:"#FFF8F0", border:"1px solid #F0E0D0", borderRadius:12, padding:"12px 16px", fontSize:13, color:"#B08060", fontFamily:"'Nunito Sans',sans-serif" }}>
              🔒 {t.feedbackAnon}
            </div>
            <button
              onClick={() => { if (feedbackText.trim()) setFeedbackSubmitted(true); }}
              disabled={!feedbackText.trim()}
              style={{ width:"100%", background:feedbackText.trim()?"linear-gradient(135deg,#FF6B35,#FF8C42)":"#F0E0D0", color:feedbackText.trim()?"#fff":"#C0A080", border:"none", borderRadius:16, padding:"18px", fontSize:16, fontFamily:"'Nunito',sans-serif", fontWeight:800, cursor:feedbackText.trim()?"pointer":"default", boxShadow:feedbackText.trim()?"0 6px 20px rgba(255,107,53,0.35)":"none" }}>
              {t.feedbackSend}
            </button>
          </>
        ) : (
          <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", flex:1, textAlign:"center", padding:"40px 0", gap:16 }}>
            <div style={{ fontSize:80, animation:"pop 0.5s ease forwards" }}>🎉</div>
            <h2 style={{ fontFamily:"'Nunito',sans-serif", fontSize:24, fontWeight:900, color:"#2D1B00" }}>{t.feedbackSent}</h2>
            <p style={{ fontFamily:"'Nunito Sans',sans-serif", fontSize:15, color:"#B08060", maxWidth:300, lineHeight:1.6 }}>{t.feedbackSentSub}</p>
            <button onClick={() => { setShowFeedback(false); setFeedbackSubmitted(false); setFeedbackText(""); }} style={{ marginTop:16, background:"linear-gradient(135deg,#FF6B35,#FF8C42)", color:"#fff", border:"none", borderRadius:16, padding:"16px 40px", fontSize:15, fontFamily:"'Nunito',sans-serif", fontWeight:800, cursor:"pointer" }}>
              {t.feedbackBack}
            </button>
          </div>
        )}
      </div>
    </div>
  );

  // ---- HOME: MAIN MENU ----
  const workLessons = lessons.filter(l => ["Radne situacije","Prava radnika"].includes(l.category));
  const grammarLessons = lessons.filter(l => l.category === "Osnove jezika");
  const lifeLessons = lessons.filter(l => ["Praktični život"].includes(l.category));

  if (screen === "home" && !mainCategory) return (
    <div style={{ minHeight:"100vh", background:"#FFF8F0", fontFamily:"'Nunito Sans',sans-serif", paddingBottom:60 }}>
      <style>{STYLES}</style>
      <div style={{ background:"linear-gradient(150deg,#FF6B35 0%,#FF8C42 60%,#FFAA5C 100%)", padding:"44px 24px 40px", textAlign:"center", borderRadius:"0 0 36px 36px", boxShadow:"0 6px 28px rgba(255,107,53,0.28)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-50, right:-50, width:180, height:180, borderRadius:"50%", background:"rgba(255,255,255,0.1)" }} />
        <div style={{ position:"absolute", bottom:-30, left:-30, width:120, height:120, borderRadius:"50%", background:"rgba(255,255,255,0.08)" }} />
        <div style={{ position:"absolute", top:16, right:16 }}><LangSwitch lang={lang} setLang={setLang} dark /></div>
        <div style={{ fontSize:50, marginBottom:10 }}>🇵🇭 → 🇭🇷</div>
        <h1 style={{ fontFamily:"'Nunito',sans-serif", fontSize:"clamp(22px,6vw,36px)", fontWeight:900, color:"#fff", marginBottom:6, textShadow:"0 2px 10px rgba(0,0,0,0.15)" }}>Maligayang pagdating!</h1>
        <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:13, color:"rgba(255,255,255,0.85)", letterSpacing:"2px", textTransform:"uppercase", marginBottom:12, fontWeight:700 }}>{t.welcome}</p>
        <p style={{ fontFamily:"'Nunito Sans',sans-serif", fontSize:15, color:"rgba(255,255,255,0.9)", maxWidth:320, margin:"0 auto", lineHeight:1.65 }}>{t.subtitle}</p>
        {completedLessons.length > 0 && <div style={{ marginTop:16, display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.25)", borderRadius:24, padding:"7px 18px", fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:800, color:"#fff" }}>🌟 {completedLessons.length}/{lessons.length} {t.lessonsCompleted}</div>}
      </div>

      <div style={{ padding:"32px 18px 0", maxWidth:480, margin:"0 auto", display:"flex", flexDirection:"column", gap:16 }}>
        {/* POSAO */}
        <div className="lesson-card" onClick={() => setMainCategory("work")} style={{ background:"#fff", border:"2px solid #FF6B3530", borderRadius:24, padding:"24px 20px", boxShadow:"0 4px 20px rgba(255,107,53,0.1)", display:"flex", alignItems:"center", gap:18 }}>
          <div style={{ width:64, height:64, background:"linear-gradient(135deg,#FF6B3525,#FF8C4215)", borderRadius:18, display:"flex", alignItems:"center", justifyContent:"center", fontSize:32, flexShrink:0, border:"2px solid #FF6B3530" }}>💼</div>
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:22, fontWeight:900, color:"#FF6B35", marginBottom:4 }}>{t.navWork}</div>
            <div style={{ fontFamily:"'Nunito Sans',sans-serif", fontSize:13, color:"#B08060", marginBottom:8 }}>{t.navWorkSub}</div>
            <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
              {workLessons.map(l => <span key={l.id} style={{ background:l.color+"18", borderRadius:12, padding:"2px 10px", fontSize:11, fontFamily:"'Nunito',sans-serif", fontWeight:800, color:l.color, border:`1px solid ${l.color}30` }}>{completedLessons.includes(l.id) ? "✅" : l.emoji}</span>)}
            </div>
            <div style={{ marginTop:10, height:6, background:"rgba(255,107,53,0.15)", borderRadius:6, overflow:"hidden" }}>
              <div style={{ height:"100%", width:`${Math.round((workLessons.filter(l=>completedLessons.includes(l.id)).length/workLessons.length)*100)}%`, background:"#FF6B35", borderRadius:6, transition:"width 0.4s ease" }} />
            </div>
          </div>
          <div style={{ color:"#FF6B35", fontSize:24, fontWeight:900 }}>›</div>
        </div>

        {/* SVAKODNEVNI ŽIVOT */}
        <div className="lesson-card" onClick={() => setMainCategory("life")} style={{ background:"#fff", border:"2px solid #2A9D8F30", borderRadius:24, padding:"24px 20px", boxShadow:"0 4px 20px rgba(42,157,143,0.1)", display:"flex", alignItems:"center", gap:18 }}>
          <div style={{ width:64, height:64, background:"linear-gradient(135deg,#2A9D8F25,#2A9D8F15)", borderRadius:18, display:"flex", alignItems:"center", justifyContent:"center", fontSize:32, flexShrink:0, border:"2px solid #2A9D8F30" }}>🌍</div>
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:22, fontWeight:900, color:"#2A9D8F", marginBottom:4 }}>{t.navLife}</div>
            <div style={{ fontFamily:"'Nunito Sans',sans-serif", fontSize:13, color:"#B08060", marginBottom:8 }}>{t.navLifeSub}</div>
            <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
              {lifeLessons.map(l => <span key={l.id} style={{ background:l.color+"18", borderRadius:12, padding:"2px 10px", fontSize:11, fontFamily:"'Nunito',sans-serif", fontWeight:800, color:l.color, border:`1px solid ${l.color}30` }}>{completedLessons.includes(l.id) ? "✅" : l.emoji}</span>)}
            </div>
            <div style={{ marginTop:10, height:6, background:"rgba(42,157,143,0.15)", borderRadius:6, overflow:"hidden" }}>
              <div style={{ height:"100%", width:`${Math.round((lifeLessons.filter(l=>completedLessons.includes(l.id)).length/lifeLessons.length)*100)}%`, background:"#2A9D8F", borderRadius:6, transition:"width 0.4s ease" }} />
            </div>
          </div>
          <div style={{ color:"#2A9D8F", fontSize:24, fontWeight:900 }}>›</div>
        </div>
        {/* OSNOVE JEZIKA */}
        <div className="lesson-card" onClick={() => setMainCategory("grammar")} style={{ background:"#fff", border:"2px solid #6A057230", borderRadius:24, padding:"24px 20px", boxShadow:"0 4px 20px rgba(106,5,114,0.1)", display:"flex", alignItems:"center", gap:18 }}>
          <div style={{ width:64, height:64, background:"linear-gradient(135deg,#6A057225,#6A057215)", borderRadius:18, display:"flex", alignItems:"center", justifyContent:"center", fontSize:32, flexShrink:0, border:"2px solid #6A057230" }}>📚</div>
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:22, fontWeight:900, color:"#6A0572", marginBottom:4 }}>{t.navGrammar}</div>
            <div style={{ fontFamily:"'Nunito Sans',sans-serif", fontSize:13, color:"#B08060", marginBottom:8 }}>{t.navGrammarSub}</div>
            <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
              {grammarLessons.map(l => <span key={l.id} style={{ background:l.color+"18", borderRadius:12, padding:"2px 10px", fontSize:11, fontFamily:"'Nunito',sans-serif", fontWeight:800, color:l.color, border:`1px solid ${l.color}30` }}>{completedLessons.includes(l.id) ? "✅" : l.emoji}</span>)}
            </div>
            <div style={{ marginTop:10, height:6, background:"rgba(106,5,114,0.12)", borderRadius:6, overflow:"hidden" }}>
              <div style={{ height:"100%", width:`${Math.round((grammarLessons.filter(l=>completedLessons.includes(l.id)).length/grammarLessons.length)*100)}%`, background:"#6A0572", borderRadius:6, transition:"width 0.4s ease" }} />
            </div>
          </div>
          <div style={{ color:"#6A0572", fontSize:24, fontWeight:900 }}>›</div>
        </div>
      </div>

      <div style={{ textAlign:"center", marginTop:24, marginBottom:8, padding:"0 18px" }}>
        <button onClick={() => setShowFeedback(true)} style={{ background:"#fff", border:"2px solid #FF6B3530", borderRadius:16, padding:"14px 20px", fontFamily:"'Nunito',sans-serif", fontSize:14, fontWeight:800, color:"#FF6B35", cursor:"pointer", width:"100%", maxWidth:480 }}>
          {t.feedbackBtn}
        </button>
      </div>
      <div style={{ textAlign:"center", marginTop:12, fontFamily:"'Nunito Sans',sans-serif", fontSize:12, color:"#D0A880" }}>{t.madeWith}</div>
    </div>
  );

  // ---- HOME: LESSON LIST ----
  if (screen === "home" && mainCategory) {
    const isWork = mainCategory === "work";
    const isGrammar = mainCategory === "grammar";
    const filtered = isWork ? workLessons : isGrammar ? grammarLessons : lifeLessons;
    const catColor = isWork ? "#FF6B35" : isGrammar ? "#6A0572" : "#2A9D8F";
    const catLabel = isWork ? t.navWork : isGrammar ? t.navGrammar : t.navLife;
    const catEmoji = isWork ? "💼" : isGrammar ? "📚" : "🌍";
    const q = searchQuery.toLowerCase().trim();
    const visible = q ? filtered.filter(l =>
      l.title.toLowerCase().includes(q) ||
      l.titleTl.toLowerCase().includes(q) ||
      l.category.toLowerCase().includes(q) ||
      l.keywords.some(kw => kw.word.toLowerCase().includes(q) || kw.meaning.toLowerCase().includes(q))
    ) : filtered;
    return (
      <div style={{ minHeight:"100vh", background:"#FFF8F0", fontFamily:"'Nunito Sans',sans-serif", paddingBottom:60 }}>
        <style>{STYLES}</style>
        <div style={{ background:`linear-gradient(150deg,${catColor} 0%,${catColor}CC 100%)`, padding:"44px 24px 20px", textAlign:"center", borderRadius:"0 0 36px 36px", boxShadow:`0 6px 28px ${catColor}40`, position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:-50, right:-50, width:180, height:180, borderRadius:"50%", background:"rgba(255,255,255,0.1)" }} />
          <button onClick={() => { setMainCategory(null); setSearchQuery(""); }} style={{ position:"absolute", top:16, left:16, background:"rgba(255,255,255,0.25)", border:"none", color:"#fff", fontSize:13, fontFamily:"'Nunito',sans-serif", fontWeight:800, padding:"6px 14px", borderRadius:20, cursor:"pointer" }}>{t.navBack}</button>
          <div style={{ position:"absolute", top:16, right:16 }}><LangSwitch lang={lang} setLang={setLang} dark /></div>
          <div style={{ fontSize:40, marginBottom:8 }}>{catEmoji}</div>
          <h1 style={{ fontFamily:"'Nunito',sans-serif", fontSize:"clamp(22px,6vw,34px)", fontWeight:900, color:"#fff", marginBottom:4, textShadow:"0 2px 10px rgba(0,0,0,0.15)" }}>{catLabel}</h1>
          <p style={{ fontFamily:"'Nunito Sans',sans-serif", fontSize:13, color:"rgba(255,255,255,0.85)", marginBottom:16 }}>
            {filtered.filter(l => completedLessons.includes(l.id)).length}/{filtered.length} {t.lessonsCompleted}
          </p>
          {/* Search bar */}
          <div style={{ position:"relative", maxWidth:360, margin:"0 auto" }}>
            <span style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", fontSize:16, opacity:0.5 }}>🔍</span>
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              style={{ width:"100%", background:"rgba(255,255,255,0.95)", border:"none", borderRadius:16, padding:"12px 16px 12px 40px", fontSize:15, fontFamily:"'Nunito',sans-serif", fontWeight:600, color:"#2D1B00", outline:"none", boxShadow:"0 2px 12px rgba(0,0,0,0.12)" }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} style={{ position:"absolute", right:12, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#999", lineHeight:1 }}>×</button>
            )}
          </div>
        </div>
        <div style={{ padding:"20px 18px 0", maxWidth:480, margin:"0 auto" }}>
          {!searchQuery && <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:12, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:"#C07840", marginBottom:14 }}>{t.chooseLesson}</p>}
          {visible.length === 0 && (
            <div style={{ textAlign:"center", padding:"40px 20px", color:"#B08060", fontFamily:"'Nunito',sans-serif", fontSize:15, fontWeight:700 }}>
              <div style={{ fontSize:40, marginBottom:12 }}>🔍</div>
              {t.searchNoResults} "<strong>{searchQuery}</strong>"
            </div>
          )}
          {visible.map(lesson => {
            const done = completedLessons.includes(lesson.id);
            const title = lang==="tl" ? lesson.titleTl : lesson.title;
            const highlighted = q ? title.replace(new RegExp(`(${q})`, "gi"), "|||$1|||") : title;
            return (
              <div key={lesson.id} className="lesson-card" onClick={() => openLesson(lesson)} style={{ background: done ? "linear-gradient(135deg,#F0FBF4,#E8F7EE)" : "#F8F8F8", border: done ? "2px solid #2A9D8F60" : "2px solid #E0E0E0", borderRadius:20, padding:"15px 14px", marginBottom:11, display:"flex", alignItems:"center", gap:13, boxShadow: done ? "0 2px 10px rgba(42,157,143,0.12)" : "0 1px 4px rgba(0,0,0,0.06)", opacity: done ? 1 : 0.72 }}>
                <div style={{ width:54, height:54, background: done ? "linear-gradient(135deg,#2A9D8F25,#2A9D8F10)" : "linear-gradient(135deg,#E0E0E025,#D0D0D010)", borderRadius:15, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, border: done ? "2px solid #2A9D8F40" : "2px solid #D0D0D040" }}>{done ? "✅" : lesson.emoji}</div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:10, fontWeight:900, letterSpacing:"1.5px", textTransform:"uppercase", color: done ? "#2A9D8F" : "#AAA", marginBottom:2 }}>{lang==="tl" ? lesson.categoryTl : lesson.category}</div>
                  <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:15, fontWeight:800, color: done ? "#1A5C40" : "#888", lineHeight:1.3 }}>
                    {highlighted.split("|||").map((part, i) =>
                      part.toLowerCase() === q && q ? <mark key={i} style={{ background:lesson.color+"35", color:lesson.color, borderRadius:4, padding:"0 2px" }}>{part}</mark> : part
                    )}
                  </div>
                  <div style={{ fontFamily:"'Nunito Sans',sans-serif", fontSize:12, color: done ? "#5A9A70" : "#BBB", marginTop:3 }}>{done ? (lang==="tl" ? "Tapos na ✓" : "Završeno ✓") : `${lesson.keywords.length} ${t.keywords.toLowerCase()} · ${lesson.phrases.length} ${t.phrases} · ${lesson.quiz.length} ${t.questions}`}</div>
                </div>
                <div style={{ width:32, height:32, background: done ? "#2A9D8F20" : "#E8E8E8", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color: done ? "#2A9D8F" : "#BBB", fontSize:19, fontWeight:900 }}>›</div>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign:"center", marginTop:28, fontFamily:"'Nunito Sans',sans-serif", fontSize:12, color:"#D0A880" }}>{t.madeWith}</div>
      </div>
    );
  }

  // ---- GOAL ----
  if (screen === "lesson" && lessonPhase === "goal") return (
    <div style={{ minHeight:"100vh", background:"#FFF8F0", fontFamily:"'Nunito Sans',sans-serif", display:"flex", flexDirection:"column" }}>
      <style>{STYLES}</style>
      <TopBar onBack={() => setScreen("home")} title={`${currentLesson.emoji} ${lang==="tl" ? currentLesson.titleTl : currentLesson.title}`} accent={accent} right={<LangSwitch lang={lang} setLang={setLang} dark />} />
      <div style={{ flex:1, padding:"24px 18px", maxWidth:480, width:"100%", margin:"0 auto", animation:"slideIn 0.3s ease" }}>
        <div style={{ background:accent+"15", border:`2px solid ${accent}30`, borderRadius:20, padding:"20px 18px", marginBottom:18 }}>
          <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:11, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:accent, marginBottom:10 }}>🎯 {t.lessonGoal}</div>
          <p style={{ fontFamily:"'Nunito Sans',sans-serif", fontSize:15, color:"#5A3010", lineHeight:1.6 }}>{t.keywordsIntro}</p>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:9, marginBottom:20 }}>
          {currentLesson.keywords.map((kw,i) => (
            <div key={i} style={{ background:"#fff", border:`2px solid ${accent}25`, borderLeft:`4px solid ${accent}`, borderRadius:14, padding:"13px 15px", display:"flex", alignItems:"center", gap:13, boxShadow:"0 2px 8px rgba(180,100,40,0.07)", animation:`fadeIn 0.3s ease ${i*0.07}s both` }}>
              <div style={{ width:30, height:30, background:accent+"20", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:900, color:accent, flexShrink:0 }}>{i+1}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:17, fontWeight:900, color:accent }}>{kw.word}</div>
                <div style={{ fontFamily:"'Nunito Sans',sans-serif", fontSize:13, color:"#A07040", marginTop:1 }}>🇵🇭 {kw.meaning}</div>
              </div>
            </div>
          ))}
        </div>
        {currentLesson.grammarTable && (
          <div style={{ background:"#fff", border:`2px solid ${accent}25`, borderRadius:16, padding:"16px 18px", marginBottom:20, boxShadow:"0 2px 8px rgba(0,0,0,0.06)" }}>
            <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:12, fontWeight:900, letterSpacing:"1.5px", textTransform:"uppercase", color:accent, marginBottom:12 }}>
              📋 {lang==="tl" ? currentLesson.grammarTable.titleTl : currentLesson.grammarTable.title}
            </div>
            <table style={{ width:"100%", borderCollapse:"collapse" }}>
              <tbody>
                {currentLesson.grammarTable.rows.map((row, i) => (
                  <tr key={i} style={{ background: i%2===0 ? accent+"08" : "transparent" }}>
                    <td style={{ padding:"8px 10px", fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:accent, borderRadius:i===0?"8px 0 0 0":i===currentLesson.grammarTable.rows.length-1?"0 0 0 8px":"0", whiteSpace:"nowrap" }}>{row.col1}</td>
                    <td style={{ padding:"8px 10px", fontFamily:"'Nunito Sans',sans-serif", fontSize:13, color:"#5A3010" }}>{lang==="tl" && row.col2tl ? row.col2tl : row.col2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div style={{ padding:"0 18px 32px", maxWidth:480, width:"100%", margin:"0 auto" }}>
        <button onClick={() => { setLessonPhase("phrases"); setPhraseIndex(0); setShowTranslation(false); setShowCultural(false); }} style={{ width:"100%", background:`linear-gradient(135deg,${accent},${accent}DD)`, color:"#fff", border:"none", borderRadius:16, padding:"18px", fontSize:16, fontFamily:"'Nunito',sans-serif", fontWeight:800, cursor:"pointer", boxShadow:`0 6px 20px ${accent}40` }}>{t.startLesson}</button>
      </div>
    </div>
  );

  // ---- PHRASES ----
  if (screen === "lesson" && lessonPhase === "phrases") {
    const phrase = currentLesson.phrases[phraseIndex];
    const progress = ((phraseIndex+1) / currentLesson.phrases.length) * 100;
    return (
      <div style={{ minHeight:"100vh", background:"#FFF8F0", fontFamily:"'Nunito Sans',sans-serif", color:"#2D1B00", display:"flex", flexDirection:"column" }}>
        <style>{STYLES}</style>
        <TopBar onBack={() => setLessonPhase("goal")} progress={progress} rightLabel={`${phraseIndex+1}/${currentLesson.phrases.length}`} accent={accent} right={<LangSwitch lang={lang} setLang={setLang} dark />} />
        {/* Keywords bar */}
        <div style={{ background:"#fff", borderBottom:"1px solid #F0E0D0", padding:"8px 18px", display:"flex", gap:6, overflowX:"auto" }}>
          {currentLesson.keywords.map((kw,i) => <span key={i} style={{ background:accent+"15", borderRadius:20, padding:"3px 10px", fontSize:12, fontFamily:"'Nunito',sans-serif", fontWeight:800, color:accent, whiteSpace:"nowrap", border:`1px solid ${accent}30` }}>{kw.word}</span>)}
        </div>
        <div style={{ flex:1, padding:"16px 18px 0", display:"flex", flexDirection:"column", gap:12, maxWidth:480, width:"100%", margin:"0 auto" }}>
          {/* Croatian */}
          <div style={{ background:"#fff", border:`2px solid ${accent}40`, borderTop:`4px solid ${accent}`, borderRadius:20, padding:"20px 18px", boxShadow:"0 4px 16px rgba(180,100,40,0.08)", animation:"slideIn 0.25s ease" }}>
            <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:10, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:"#B08060", marginBottom:9 }}>🇭🇷 {t.croatian}</div>
            <div style={{ marginBottom:11 }}><HighlightedPhrase text={phrase.hr} keywords={currentLesson.keywords} color={accent} /></div>
            <div style={{ background:"#FFF0E8", borderRadius:10, padding:"9px 13px", fontSize:13, color:"#C07840", fontStyle:"italic" }}>🔊 {phrase.pronunciation}</div>
          </div>
          {/* Tagalog */}
          <div className="tap-btn" onClick={() => setShowTranslation(true)} style={{ background:showTranslation?"#fff":"#FFF8F0", border:`2px solid ${showTranslation?"#2A9D8F50":"#F0E0D0"}`, borderTop:`4px solid ${showTranslation?"#2A9D8F":"#F0D0C0"}`, borderRadius:20, padding:"20px 18px" }}>
            <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:10, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:"#B08060", marginBottom:9 }}>🇵🇭 {t.tagalog}</div>
            {showTranslation ? <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:"clamp(15px,4vw,20px)", fontWeight:800, lineHeight:1.45, color:"#1A7A70", animation:"fadeIn 0.25s ease" }}>{phrase.tl}</div> : <div style={{ fontSize:14, color:"#C0A080", fontStyle:"italic" }}>{t.tapToReveal}</div>}
          </div>
          {/* Cultural note — unique per phrase */}
          <button className="tap-btn" onClick={() => setShowCultural(!showCultural)} style={{ background:showCultural?"#FFFBF0":"#fff", border:`2px solid ${showCultural?"#FFAA5C":"#F0E0D0"}`, borderRadius:14, padding:"11px 15px", cursor:"pointer", textAlign:"left", display:"flex", alignItems:"center", gap:10, fontFamily:"'Nunito',sans-serif", fontSize:13, fontWeight:800, color:"#D08030" }}>
            <span style={{ fontSize:17 }}>🌺</span><span style={{ flex:1 }}>{showCultural ? t.culturalHide : t.culturalBtn}</span><span>{showCultural?"▲":"▼"}</span>
          </button>
          {showCultural && (
            <div style={{ background:"#FFFBF0", border:"2px solid #FFAA5C40", borderRadius:16, padding:"15px 17px", fontSize:14, lineHeight:1.7, color:"#7A4810", animation:"fadeIn 0.25s ease" }}>
              <p style={{ marginBottom:11 }}>{phrase.culturalNote}</p>
              <p style={{ color:"#A07040", borderTop:"1px solid #FFD0A0", paddingTop:11 }}>{phrase.culturalNoteTagalog}</p>
            </div>
          )}
        </div>
        <div style={{ padding:"16px 18px 32px", maxWidth:480, width:"100%", margin:"0 auto" }}>
          <button className="tap-btn" onClick={nextPhrase} style={{ width:"100%", background:`linear-gradient(135deg,${accent},${accent}DD)`, color:"#fff", border:"none", borderRadius:16, padding:"18px", fontSize:16, fontFamily:"'Nunito',sans-serif", fontWeight:800, cursor:"pointer", boxShadow:`0 6px 20px ${accent}40` }}>
            {phraseIndex < currentLesson.phrases.length-1 ? t.nextPhrase : t.goToQuiz}
          </button>
        </div>
      </div>
    );
  }

  // ---- QUIZ ----
  if (screen === "lesson" && lessonPhase === "quiz") {
    const q = currentLesson.quiz[quizIndex];
    const progress = ((quizIndex+1) / currentLesson.quiz.length) * 100;
    return (
      <div style={{ minHeight:"100vh", background:"#FFF8F0", fontFamily:"'Nunito Sans',sans-serif", color:"#2D1B00", display:"flex", flexDirection:"column" }}>
        <style>{STYLES}</style>
        <TopBar onBack={() => setLessonPhase("phrases")} progress={progress} rightLabel={`${t.quiz} ${quizIndex+1}/${currentLesson.quiz.length}`} accent="#FF8C42" right={<LangSwitch lang={lang} setLang={setLang} dark />} />
        <div style={{ flex:1, padding:"22px 18px", display:"flex", flexDirection:"column", maxWidth:480, width:"100%", margin:"0 auto" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#FFF0E8", borderRadius:10, padding:"6px 14px", marginBottom:18, alignSelf:"flex-start", fontFamily:"'Nunito',sans-serif", fontSize:11, fontWeight:900, color:"#FF6B35", letterSpacing:"1px", textTransform:"uppercase" }}>🎯 {t.question}</div>
          <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:"clamp(16px,4.5vw,21px)", fontWeight:800, lineHeight:1.5, color:"#2D1B00", marginBottom:22 }}>{q.question}</div>
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {q.options.map((opt,i) => {
              let bg="#fff", border="#F0E0D0", color="#2D1B00", shadow="0 2px 8px rgba(180,100,40,0.07)";
              if (quizAnswer !== null) {
                if (i===q.answer) { bg="#E8FBF5"; border="#2A9D8F"; color="#1A6B5F"; shadow="0 4px 12px rgba(42,157,143,0.15)"; }
                else if (i===quizAnswer) { bg="#FFF0F0"; border="#E63946"; color="#A02030"; shadow="none"; }
                else { color="#C0A080"; border="#F0E8E0"; bg="#FDFAF8"; }
              }
              return (
                <button key={i} className="opt-btn" onClick={() => handleQuizAnswer(i)} style={{ background:bg, border:`2px solid ${border}`, borderRadius:13, padding:"14px 16px", textAlign:"left", fontSize:14, color, cursor:quizAnswer===null?"pointer":"default", fontFamily:"'Nunito',sans-serif", fontWeight:700, boxShadow:shadow, display:"flex", alignItems:"center", gap:11 }}>
                  <span style={{ width:26, height:26, borderRadius:"50%", background:quizAnswer===null?"#FFF0E8":(i===q.answer?"#2A9D8F20":(i===quizAnswer?"#E6394620":"#F0E8E0")), display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:900, flexShrink:0, color:quizAnswer===null?"#FF6B35":"inherit" }}>{["A","B","C","D"][i]}</span>
                  {opt}
                </button>
              );
            })}
          </div>
          {quizAnswer !== null && <div style={{ marginTop:14, padding:"13px 16px", background:quizAnswer===q.answer?"#E8FBF5":"#FFF0F0", border:`2px solid ${quizAnswer===q.answer?"#2A9D8F40":"#E6394640"}`, borderRadius:13, fontSize:14, fontWeight:700, fontFamily:"'Nunito',sans-serif", color:quizAnswer===q.answer?"#1A6B5F":"#A02030", animation:"fadeIn 0.2s ease" }}>{quizAnswer===q.answer?t.correct:t.wrong}</div>}
        </div>
        {quizAnswer !== null && (
          <div style={{ padding:"0 18px 32px", maxWidth:480, width:"100%", margin:"0 auto" }}>
            <button onClick={nextQuestion} style={{ width:"100%", background:"linear-gradient(135deg,#FF6B35,#FF8C42)", color:"#fff", border:"none", borderRadius:16, padding:"17px", fontSize:16, fontFamily:"'Nunito',sans-serif", fontWeight:800, cursor:"pointer", boxShadow:"0 6px 20px rgba(255,107,53,0.35)" }}>
              {quizIndex < currentLesson.quiz.length-1 ? t.nextQuestion : t.finishQuiz}
            </button>
          </div>
        )}
      </div>
    );
  }

  // ---- WRITING ----
  if (screen === "lesson" && lessonPhase === "writing") {
    const phrase = currentLesson.phrases[writeIndex];
    const progress = ((writeIndex+1) / currentLesson.phrases.length) * 100;
    const blankSentence = buildBlank(phrase.hr, phrase.blank);

    return (
      <div style={{ minHeight:"100vh", background:"#FFF8F0", fontFamily:"'Nunito Sans',sans-serif", color:"#2D1B00", display:"flex", flexDirection:"column" }}>
        <style>{STYLES}</style>
        <TopBar onBack={() => setLessonPhase("quiz")} progress={progress} rightLabel={`✍️ ${writeIndex+1}/${currentLesson.phrases.length}`} accent="#2A9D8F" right={<LangSwitch lang={lang} setLang={setLang} dark />} />

        <div style={{ flex:1, padding:"20px 18px 0", maxWidth:480, width:"100%", margin:"0 auto", display:"flex", flexDirection:"column", gap:14 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#E8FBF5", borderRadius:10, padding:"6px 14px", alignSelf:"flex-start", fontFamily:"'Nunito',sans-serif", fontSize:11, fontWeight:900, color:"#2A9D8F", letterSpacing:"1px", textTransform:"uppercase" }}>
            ✍️ {t.fillBlank}
          </div>

          {/* Sentence with blank */}
          <div style={{ background:"#fff", border:"2px solid #2A9D8F40", borderTop:"4px solid #2A9D8F", borderRadius:20, padding:"22px 18px", boxShadow:"0 4px 16px rgba(42,157,143,0.08)", animation:"slideIn 0.25s ease" }}>
            <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:10, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:"#B08060", marginBottom:12 }}>🇭🇷 {t.croatian}</div>
            <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:"clamp(18px,5vw,24px)", fontWeight:800, lineHeight:1.5, color:"#2D1B00" }}>
              {blankSentence.split("___").map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span style={{ display:"inline-block", minWidth:80, borderBottom:`3px solid ${writeResult ? (writeResult==="correct"?"#2A9D8F":writeResult==="almost"?"#FF8C42":"#E63946") : "#2A9D8F"}`, margin:"0 4px", verticalAlign:"bottom", textAlign:"center", fontWeight:900, color:writeResult==="correct"?"#2A9D8F":writeResult==="almost"?"#FF8C42":writeResult==="wrong"?"#E63946":"#2A9D8F", fontSize:"0.9em" }}>
                      {writeInput || " "}
                    </span>
                  )}
                </span>
              ))}
            </div>
            {/* Tagalog hint */}
            <div style={{ marginTop:14, background:"#F0FBF8", borderRadius:10, padding:"9px 13px", fontSize:13, color:"#2A7A70" }}>
              🇵🇭 {t.tagalogHint} <em>{phrase.tl}</em>
            </div>
          </div>

          {/* Input */}
          <div style={{ background:"#fff", border:`2px solid ${writeResult?(writeResult==="correct"?"#2A9D8F":writeResult==="almost"?"#FF8C42":"#E63946"):"#2A9D8F40"}`, borderRadius:16, padding:"16px 18px", boxShadow:"0 2px 10px rgba(42,157,143,0.08)" }}>
            <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:11, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:"#2A9D8F", marginBottom:10 }}>
              {t.writingInstruction}
            </div>
            <input
              ref={inputRef}
              className="write-input"
              value={writeInput}
              onChange={e => { if (!writeResult) setWriteInput(e.target.value); }}
              onKeyDown={e => { if (e.key==="Enter") { writeResult ? nextWrite() : handleCheck(); } }}
              placeholder={lang==="tl" ? "Isulat ang salita..." : "Napiši riječ..."}
              disabled={!!writeResult}
              style={{ width:"100%", fontFamily:"'Nunito',sans-serif", fontSize:20, fontWeight:800, color:"#2D1B00", background:writeResult?"#F8F8F8":"#F0FBF8", border:`2px solid ${writeResult?(writeResult==="correct"?"#2A9D8F60":writeResult==="almost"?"#FF8C4260":"#E6394660"):"#2A9D8F30"}`, borderRadius:12, padding:"12px 16px" }}
            />
            {writeResult && (
              <div style={{ marginTop:11, padding:"11px 14px", borderRadius:12, fontSize:14, fontWeight:700, fontFamily:"'Nunito',sans-serif", animation:"fadeIn 0.2s ease",
                background:writeResult==="correct"?"#E8FBF5":writeResult==="almost"?"#FFF8E8":"#FFF0F0",
                color:writeResult==="correct"?"#1A6B5F":writeResult==="almost"?"#9A5000":"#A02030",
                border:`1px solid ${writeResult==="correct"?"#2A9D8F30":writeResult==="almost"?"#FF8C4230":"#E6394630"}`
              }}>
                {writeResult==="correct" ? t.writingCorrect : writeResult==="almost" ? <>{t.writingAlmost} <strong>{phrase.blank}</strong></> : <>{t.writingWrong} <strong>{phrase.blank}</strong></>}
              </div>
            )}
          </div>

          {/* Progress dots */}
          <div style={{ display:"flex", justifyContent:"center", gap:6, flexWrap:"wrap" }}>
            {currentLesson.phrases.map((_,i) => (
              <div key={i} style={{ width:8, height:8, borderRadius:"50%", background:i<writeIndex?"#2A9D8F":i===writeIndex?"#FF6B35":"#E0D0C0", transition:"background 0.3s" }} />
            ))}
          </div>
        </div>

        <div style={{ padding:"16px 18px 32px", maxWidth:480, width:"100%", margin:"0 auto" }}>
          {!writeResult ? (
            <button onClick={handleCheck} disabled={!writeInput.trim()} style={{ width:"100%", background:writeInput.trim()?"linear-gradient(135deg,#2A9D8F,#2A9D8FAA)":"#F0E0D0", color:writeInput.trim()?"#fff":"#C0A080", border:"none", borderRadius:16, padding:"17px", fontSize:16, fontFamily:"'Nunito',sans-serif", fontWeight:800, cursor:writeInput.trim()?"pointer":"default", boxShadow:writeInput.trim()?"0 6px 20px rgba(42,157,143,0.35)":"none" }}>
              {t.checkAnswer}
            </button>
          ) : (
            <button onClick={nextWrite} style={{ width:"100%", background:"linear-gradient(135deg,#2A9D8F,#2A9D8FAA)", color:"#fff", border:"none", borderRadius:16, padding:"17px", fontSize:16, fontFamily:"'Nunito',sans-serif", fontWeight:800, cursor:"pointer", boxShadow:"0 6px 20px rgba(42,157,143,0.35)" }}>
              {writeIndex < currentLesson.phrases.length-1 ? t.nextWord : t.finishWriting}
            </button>
          )}
        </div>
      </div>
    );
  }

  // ---- COMPLETE ----
  if (screen === "complete") {
    const qTotal = currentLesson.quiz.length, wTotal = currentLesson.phrases.length;
    const qPct = Math.round((quizScore/qTotal)*100), wPct = Math.round((writeScore/wTotal)*100);
    const overall = Math.round(((quizScore+writeScore)/(qTotal+wTotal))*100);
    return (
      <div style={{ minHeight:"100vh", background:"linear-gradient(160deg,#FFF0E0 0%,#FFF8F0 100%)", fontFamily:"'Nunito',sans-serif", color:"#2D1B00", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"40px 24px", textAlign:"center", position:"relative" }}>
        <style>{STYLES}</style>
        <div style={{ position:"absolute", top:16, right:16 }}>
          <div style={{ display:"flex", gap:3, background:"#FF6B3515", borderRadius:20, padding:"3px" }}>
            {["hr","tl"].map(l => <button key={l} className="lang-btn" onClick={() => setLang(l)} style={{ background:lang===l?"#FF6B35":"transparent", border:"none", borderRadius:16, padding:"5px 11px", fontFamily:"'Nunito',sans-serif", fontSize:12, fontWeight:800, color:lang===l?"#fff":"#FF6B35" }}>{l==="hr"?"🇭🇷 HR":"🇵🇭 TL"}</button>)}
          </div>
        </div>
        <div style={{ fontSize:86, animation:"pop 0.5s ease forwards", marginBottom:14 }}>{overall===100?"🏆":overall>=70?"⭐":"💪"}</div>
        <h2 style={{ fontSize:"clamp(26px,7vw,36px)", fontWeight:900, marginBottom:6 }}>{overall===100?t.perfect:overall>=70?t.great:t.keepPracticing}</h2>
        <p style={{ color:"#B08060", fontSize:14, marginBottom:22, fontWeight:600 }}>{lang==="tl" ? currentLesson.titleTl : currentLesson.title}</p>
        <div style={{ background:"#fff", border:`3px solid ${accent}30`, borderRadius:22, padding:"20px 24px", marginBottom:20, boxShadow:`0 8px 32px ${accent}20`, width:"100%", maxWidth:320 }}>
          <div style={{ display:"flex", justifyContent:"space-around", marginBottom:16 }}>
            <div style={{ textAlign:"center" }}>
              <div style={{ fontSize:38, fontWeight:900, color:"#FF8C42" }}>{qPct}%</div>
              <div style={{ fontSize:12, color:"#B08060", fontWeight:600 }}>🎯 {t.quiz}</div>
            </div>
            <div style={{ width:1, background:"#F0E0D0" }} />
            <div style={{ textAlign:"center" }}>
              <div style={{ fontSize:38, fontWeight:900, color:"#2A9D8F" }}>{wPct}%</div>
              <div style={{ fontSize:12, color:"#B08060", fontWeight:600 }}>✍️ {t.writing}</div>
            </div>
          </div>
          <div style={{ borderTop:"1px solid #F0E0D0", paddingTop:14, textAlign:"center" }}>
            <div style={{ fontSize:48, fontWeight:900, color:accent }}>{overall}%</div>
            <div style={{ color:"#B08060", fontSize:13, fontWeight:600 }}>{t.of} {qTotal+wTotal} {t.correctAnswers}</div>
          </div>
        </div>
        <div style={{ background:"#fff", border:"2px solid #F0E0D0", borderRadius:16, padding:"14px 18px", marginBottom:20, width:"100%", maxWidth:320, textAlign:"left" }}>
          <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:11, fontWeight:900, letterSpacing:"1.5px", textTransform:"uppercase", color:accent, marginBottom:10 }}>🎯 {t.keywords}</div>
          {currentLesson.keywords.map((kw,i) => (
            <div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"5px 0", borderBottom:i<currentLesson.keywords.length-1?"1px solid #F0E8E0":"none" }}>
              <span style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, color:accent, fontSize:14 }}>{kw.word}</span>
              <span style={{ fontFamily:"'Nunito Sans',sans-serif", color:"#A07040", fontSize:13 }}>{kw.meaning}</span>
            </div>
          ))}
        </div>
        <button onClick={() => setScreen("home")} style={{ width:"100%", maxWidth:300, background:`linear-gradient(135deg,${accent},${accent}CC)`, color:"#fff", border:"none", borderRadius:16, padding:"16px", fontSize:15, fontWeight:800, cursor:"pointer", marginBottom:11, boxShadow:`0 6px 20px ${accent}35` }}>{t.backHome}</button>
        <button onClick={() => openLesson(currentLesson)} style={{ width:"100%", maxWidth:300, background:"#fff", color:"#B08060", border:"2px solid #F0E0D0", borderRadius:16, padding:"14px", fontSize:14, fontWeight:700, cursor:"pointer" }}>{t.repeatLesson}</button>
      </div>
    );
  }

  return null;
}
