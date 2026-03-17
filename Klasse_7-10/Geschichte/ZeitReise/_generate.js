const fs = require('fs');
const src = fs.readFileSync("C:/Users/matri/Documents/ClaudeCode/HTML Appz/Schulbildung/Klasse_7-10/Physik/PhysikProfi/index.html","utf8");

// Split at <script> to get CSS/HTML part and JS part
const firstScriptIdx = src.indexOf('<script>');
const htmlPart = src.substring(0, firstScriptIdx);

// Transform HTML part
let html = htmlPart;
// Title
html = html.replace('PhysikProfi — Interaktive Physik-Lernapp', 'ZeitReise — Interaktive Geschichts-Lernapp');
html = html.replace('Interaktive Physik-Lernapp für Klasse 7-10 mit Gamification, Quizzen und Boss-Challenges', 'Interaktive Geschichts-Lernapp für Klasse 7-10 mit Gamification, Quizzen und Boss-Challenges');
// Header logo letter
html = html.replace('>P</text>', '>Z</text>');
// Header text
html = html.replace('<div class="header-logo-main">PhysikProfi</div>', '<div class="header-logo-main">ZeitReise</div>');
html = html.replace('<div class="header-logo-sub">Physik Klasse 7-10</div>', '<div class="header-logo-sub">Geschichte Klasse 7-10</div>');
// Sidebar level
html = html.replace('id="sidebarLevel">Kraft-Neuling', 'id="sidebarLevel">Geschichts-Neuling');
// Welcome screen
html = html.replace('<div style="font-size:64px;margin-bottom:16px">&#9883;</div>', '<div style="font-size:64px;margin-bottom:16px">&#127981;</div>');
html = html.replace('<h1>PhysikProfi</h1>', '<h1>ZeitReise</h1>');
html = html.replace('Entdecke die Welt der Physik — von Mechanik und Elektrizitaet bis Atomphysik und Astronomie!', 'Reise durch die Geschichte — von der Antike ueber das Mittelalter bis zur modernen Welt!');
html = html.replace("Los geht's! &#9883;", "Los geht's! &#127981;");
// Impressum
html = html.replace('PhysikProfi — Interaktive Physik-Lernapp für Klasse 7-10.', 'ZeitReise — Interaktive Geschichts-Lernapp für Klasse 7-10.');

// Now build the JS
const js = `<script>
function showImpressum(){document.getElementById('impressumOverlay').classList.add('active')}
function showDatenschutz(){document.getElementById('datenschutzOverlay').classList.add('active')}

// === XOR Quiz Encryption ===
const _qk=[0x4A,0x7F,0x2B,0x61,0x5C,0x3E,0x18,0x73];
function _d(h,i){return h^_qk[i%_qk.length]}

// === Levels ===
const LEVELS=[
{name:'Geschichts-Neuling',xp:0},{name:'Quellen-Leser',xp:40},{name:'Zeitleisten-Kenner',xp:100},
{name:'Epochen-Entdecker',xp:180},{name:'Chronik-Schreiber',xp:280},{name:'Archiv-Forscher',xp:400},
{name:'Historien-Kenner',xp:540},{name:'Zeitzeugen-Hoerer',xp:700},{name:'Epochen-Wanderer',xp:880},
{name:'Quellenanalyst',xp:1080},{name:'Geschichts-Kenner',xp:1300},{name:'Ereignis-Experte',xp:1540},
{name:'Historiker-Novize',xp:1800},{name:'Archiv-Meister',xp:2080},{name:'Epochen-Spezialist',xp:2380},
{name:'Geschichts-Virtuose',xp:2700},{name:'Chronist',xp:3040},{name:'Historien-Meister',xp:3400},
{name:'Zeitreisender',xp:3780},{name:'Geschichts-Genie',xp:4200}
];

// === Badges ===
const BADGES=[
{id:'m0',name:'Pyramiden-Bauer',icon:'\uD83C\uDFDB',desc:'Modul 1 abgeschlossen'},
{id:'m1',name:'Philosophen-Schueler',icon:'\uD83C\uDFDB\uFE0F',desc:'Modul 2 abgeschlossen'},
{id:'m2',name:'Legionaer',icon:'\u2694\uFE0F',desc:'Modul 3 abgeschlossen'},
{id:'m3',name:'Ritter',icon:'\uD83D\uDDE1\uFE0F',desc:'Modul 4 abgeschlossen'},
{id:'m4',name:'Humanist',icon:'\uD83D\uDCDC',desc:'Modul 5 abgeschlossen'},
{id:'m5',name:'Aufklaerer',icon:'\uD83D\uDCA1',desc:'Modul 6 abgeschlossen'},
{id:'m6',name:'Revolutionaer',icon:'\uD83C\uDFF4',desc:'Modul 7 abgeschlossen'},
{id:'m7',name:'Industrie-Pionier',icon:'\uD83C\uDFED',desc:'Modul 8 abgeschlossen'},
{id:'m8',name:'Friedensstifter',icon:'\u262E\uFE0F',desc:'Modul 9 abgeschlossen'},
{id:'m9',name:'Zeitzeuge',icon:'\uD83D\uDDDE\uFE0F',desc:'Modul 10 abgeschlossen'},
{id:'first_quiz',name:'Quiz-Neuling',icon:'\u2753',desc:'Erstes Quiz bestanden'},
{id:'perfect_quiz',name:'Perfektionist',icon:'\uD83D\uDC8E',desc:'Quiz mit 5/5 bestanden'},
{id:'first_boss',name:'Boss-Bezwinger',icon:'\uD83D\uDC51',desc:'Erste Boss-Challenge bestanden'},
{id:'all_bosses',name:'Endgegner',icon:'\uD83C\uDFC6',desc:'Alle Boss-Challenges bestanden'},
{id:'streak3',name:'Durchstarter',icon:'\uD83D\uDD25',desc:'3 Tage in Folge gelernt'},
{id:'streak7',name:'Wochenkrieger',icon:'\u2694\uFE0F',desc:'7 Tage in Folge gelernt'},
{id:'half_done',name:'Halbzeit',icon:'\u23F3',desc:'5 Module abgeschlossen'},
{id:'speed_quiz',name:'Blitz-Denker',icon:'\u26A1',desc:'Quiz in unter 60 Sekunden'},
{id:'explorer',name:'Entdecker',icon:'\uD83D\uDDFA\uFE0F',desc:'Alle Module angesehen'},
{id:'graduate',name:'Absolvent',icon:'\uD83C\uDF93',desc:'Alle 10 Module abgeschlossen'}
];

// === Theme Config ===
const THEME_CONFIG={
cyber:{name:'Cyber Neon',emoji:'\uD83D\uDDA5',color:'#3b82f6',desc:'Futuristisch & Digital'},
retro:{name:'Retro Arcade',emoji:'\uD83D\uDD79',color:'#ffd700',desc:'80er Arcade-Feeling'},
nature:{name:'Nature Forest',emoji:'\uD83C\uDF33',color:'#4ade80',desc:'Nat\u00fcrlich & Organisch'},
space:{name:'Deep Space',emoji:'\uD83D\uDE80',color:'#c084fc',desc:'Kosmisch & Geheimnisvoll'},
comic:{name:'Comic Pop',emoji:'\uD83D\uDCA5',color:'#ff6b6b',desc:'Bunt & Verspielt'},
sketchy:{name:'Sketchy',emoji:'\u270D\uFE0F',color:'#d97706',desc:'Handgemacht & Warm'},
'nature-code':{name:'Nature x Code',emoji:'\uD83C\uDF3F',color:'#10b981',desc:'Natur trifft Technik'},
glass:{name:'Glasmorphism',emoji:'\uD83D\uDCA0',color:'#00d9ff',desc:'Modern & Transparent'}
};

// === Modules ===
const modules=[
`;

fs.writeFileSync("C:/Users/matri/Documents/ClaudeCode/HTML Appz/Schulbildung/Klasse_7-10/Geschichte/ZeitReise/_part1.txt", html + js);
console.log("Part 1 written:", (html + js).length, "bytes");
