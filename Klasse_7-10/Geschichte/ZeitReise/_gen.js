const fs = require('fs');
const src = fs.readFileSync(process.argv[2], 'utf8');

// Get CSS+HTML part (before first <script>)
const scriptIdx = src.indexOf('<script>');
let html = src.substring(0, scriptIdx);

// Replacements for ZeitReise
const reps = [
  ['PhysikProfi \u2014 Interaktive Physik-Lernapp', 'ZeitReise \u2014 Interaktive Geschichts-Lernapp'],
  ['Interaktive Physik-Lernapp f\u00fcr Klasse 7-10 mit Gamification', 'Interaktive Geschichts-Lernapp f\u00fcr Klasse 7-10 mit Gamification'],
  ['>P</text>', '>Z</text>'],
  ['header-logo-main">PhysikProfi', 'header-logo-main">ZeitReise'],
  ['header-logo-sub">Physik Klasse 7-10', 'header-logo-sub">Geschichte Klasse 7-10'],
  ['sidebarLevel">Kraft-Neuling', 'sidebarLevel">Geschichts-Neuling'],
  ['font-size:64px;margin-bottom:16px">&#9883;', 'font-size:64px;margin-bottom:16px">&#127981;'],
  ['<h1>PhysikProfi</h1>', '<h1>ZeitReise</h1>'],
  ['Entdecke die Welt der Physik \u2014 von Mechanik und Elektrizitaet bis Atomphysik und Astronomie!', 'Reise durch die Geschichte \u2014 von der Antike ueber das Mittelalter bis zur modernen Welt!'],
  ["Los geht's! &#9883;", "Los geht's! &#127981;"],
  ['PhysikProfi \u2014 Interaktive Physik-Lernapp f\u00fcr Klasse 7-10.', 'ZeitReise \u2014 Interaktive Geschichts-Lernapp f\u00fcr Klasse 7-10.'],
];
for (const [a, b] of reps) html = html.replace(a, b);

// Get the module lock script and zoom script (after main </script>)
const lastParts = src.substring(src.indexOf('</s' + 'cript>\n\n<s' + 'cript>\n(function(){\nvar KEY'));
// Actually let's grab from the second <script> block onwards
const allScripts = src.split('<script>');
// allScripts[0] = before first script
// allScripts[1] = main JS + </script> + ...
// allScripts[2] = module lock script
// allScripts[3] = zoom script

const lockScript = '<script>' + allScripts[2];
const zoomHtml = allScripts[3] ? '<script>' + allScripts[3] : '';

// Get zoom controls div
const zoomDiv = src.substring(src.indexOf('<div class="zoom-controls"'), src.indexOf('<script>\n(function(){\nvar zl=100'));

fs.writeFileSync(process.argv[3], 'HTMLPART', 'utf8');
// Write parts to separate files for assembly
fs.writeFileSync(process.argv[3] + '.html', html, 'utf8');
fs.writeFileSync(process.argv[3] + '.lock', lockScript, 'utf8');
fs.writeFileSync(process.argv[3] + '.zoom', zoomDiv + '<script>' + allScripts[3], 'utf8');
console.log('HTML part:', html.length);
console.log('Lock script:', lockScript.length);
console.log('Zoom+div:', (zoomDiv + '<script>' + allScripts[3]).length);
console.log('Total scripts found:', allScripts.length);
