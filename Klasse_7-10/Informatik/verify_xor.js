const _qk=[0x4A,0x7F,0x2B,0x61,0x5C,0x3E,0x18,0x73];

const modules = [
  // Module 0
  {
    quiz: [
      {q:"Welches Wort passt nicht? Apfel, Birne, Tisch, Banane",a:["Apfel","Birne","Tisch","Banane"],_h:0x48},
      {q:"Oberbegriff Hund,Katze,Maus",a:["Moebel","Farben","Tiere","Essen"],_h:0x7D},
      {q:"Welches Wort passt nicht? Rot, Blau, Hund, Gruen",a:["Rot","Blau","Hund","Gruen"],_h:0x29},
      {q:"Stuhl, Tisch, Schrank sind alles...",a:["Tiere","Moebel","Farben","Obst"],_h:0x60},
      {q:"Welches Wort gehoert zur Gruppe Kleidung?",a:["Banane","Tisch","Jacke","Katze"],_h:0x5E}
    ],
    boss: [
      {q:"Welches Wort passt NICHT zu Fahrzeuge?",a:["Auto","Fahrrad","Blume","Bus"],_h:0x48},
      {q:"Finde den Oberbegriff: Gitarre, Trompete, Floete",a:["Tiere","Instrumente","Moebel","Farben"],_h:0x7E},
      {q:"Welche Gruppe ist richtig?",a:["Apfel, Hund, Stuhl","Tisch, Stuhl, Schrank","Rot, Katze, Birne","Auto, Blau, Maus"],_h:0x2A}
    ]
  },
  // Module 1
  {
    quiz: [
      {q:"Welches Satzzeichen am Ende einer Frage?",a:[". (Punkt)","? (Fragezeichen)","! (Ausrufezeichen)",", (Komma)"],_h:0x4B},
      {q:"Die Katze schlaeft - Satzzeichen?",a:["?","!",".",","],_h:0x7D},
      {q:"Welches Wort zeigt oft eine Frage an?",a:["Und","Aber","Warum","Dann"],_h:0x29},
      {q:"Pass auf - Satzzeichen?",a:[".","?","!",","],_h:0x63},
      {q:"Was stimmt ueber den Punkt?",a:["Er steht bei Fragen","Er steht bei Ausrufen","Er steht bei Aussagen","Er steht ueberall"],_h:0x5E}
    ],
    boss: [
      {q:"Wie viele Satzzeichen fuer das Satzende?",a:["1","2","3","4"],_h:0x48},
      {q:"Wo ist mein Buch - Was fehlt?",a:[".","!","?",","],_h:0x7D},
      {q:"Welcher Satz ist ein Ausruf?",a:["Der Hund schlaeft.","Wo ist er?","Hilfe!","Sie geht."],_h:0x29}
    ]
  },
  // Module 2
  {
    quiz: [
      {q:"Was bedeutet Richtig oder Falsch?",a:["Man raet einfach","Man prueft, ob eine Aussage stimmt","Man schreibt ab","Man liest laut vor"],_h:0x4B},
      {q:"Tim hat eine Katze - Stimmt?",a:["Richtig","Falsch","Weiss nicht","Vielleicht"],_h:0x7E},
      {q:"Worauf achten bei R/F?",a:["Auf die Bilder","Auf genaue Details im Text","Auf die Seitenzahl","Auf die Ueberschrift"],_h:0x2A},
      {q:"Welches kleine Wort veraendert Bedeutung?",a:["Er","geht","nicht","Schule"],_h:0x63},
      {q:"Erster Schritt bei R/F?",a:["Sofort antworten","Die Geschichte aufmerksam lesen","Die Antwort raten","Nur die Frage lesen"],_h:0x5D}
    ],
    boss: [
      {q:"Sara isst gerne Eis - R/F moeglich?",a:["Nein, das ist eine Frage","Ja, man kann pruefen ob es stimmt","Nein, das ist ein Befehl","Das kann man nicht wissen"],_h:0x4B},
      {q:"Was macht ein guter Leser bei R/F?",a:["Schnell raten","Die Stelle im Text suchen","Immer Richtig sagen","Den Text ueberspringen"],_h:0x7E},
      {q:"Welches Wort kann eine Aussage falsch machen?",a:["Und","Auch","Nie","Dann"],_h:0x29}
    ]
  },
  // Module 3
  {
    quiz: [
      {q:"Was beantwortet die Frage Wo?",a:["Eine Person","Einen Ort","Eine Zeit","Eine Handlung"],_h:0x4B},
      {q:"Am Dienstag besucht Oma den Arzt - Wann?",a:["Am Montag","Am Mittwoch","Am Dienstag","Am Freitag"],_h:0x7D},
      {q:"Was ist ein Steckbrief?",a:["Ein langer Text","Eine Sammlung wichtiger Infos","Ein Bild","Ein Lied"],_h:0x2A},
      {q:"Welche Frage fragt nach einer Person?",a:["Wo?","Wann?","Was?","Wer?"],_h:0x62},
      {q:"Tom liest im Bett - Wo?",a:["Im Garten","In der Schule","Im Bett","Im Auto"],_h:0x5E}
    ],
    boss: [
      {q:"Wie viele W-Fragen vorgestellt?",a:["2","3","4","5"],_h:0x48},
      {q:"Am Freitag backt Oma - Wer backt?",a:["Mama","Papa","Tom","Oma"],_h:0x7C},
      {q:"Welche W-Frage passt zu im Park?",a:["Wer?","Was?","Wo?","Wann?"],_h:0x29}
    ]
  },
  // Module 4
  {
    quiz: [
      {q:"Was ist ein Luekentext?",a:["Ein leerer Text","Ein Text mit fehlenden Woertern","Ein sehr kurzer Text","Ein Text ohne Bilder"],_h:0x4B},
      {q:"Der ___ bellt laut.",a:["Stuhl","Blume","Hund","Regen"],_h:0x7D},
      {q:"Was hilft beim Loesen?",a:["Schnell raten","Den Satz laut vorlesen","Die Augen schliessen","Gar nicht lesen"],_h:0x2A},
      {q:"Wie oft wird ein Wort benutzt?",a:["Zweimal","Dreimal","Einmal","Gar nicht"],_h:0x63},
      {q:"Womit anfangen bei schwierigen Luecken?",a:["Mit der schwierigsten Luecke","Mit der einfachsten Luecke","Mit dem letzten Wort","Einfach raten"],_h:0x5D}
    ],
    boss: [
      {q:"Im ___ schwimmen viele Fische.",a:["Himmel","See","Wald","Berg"],_h:0x4B},
      {q:"Was wenn Wort schon eingesetzt?",a:["Nochmal verwenden","Durchstreichen","Vergessen","Neu erfinden"],_h:0x7E},
      {q:"Die Voegel ___ am Morgen.",a:["schlafen","singen","kochen","lesen"],_h:0x2A}
    ]
  },
  // Module 5
  {
    quiz: [
      {q:"Wie viele Teile hat eine Geschichte?",a:["1","2","3","4"],_h:0x48},
      {q:"Was steht am Anfang?",a:["Das Ende","Die Handlung","Die Einleitung","Der Hoehepunkt"],_h:0x7D},
      {q:"Signalwort fuer Ende?",a:["Zuerst","Dann","Ploetzlich","Schliesslich"],_h:0x28},
      {q:"Was passiert im Hauptteil?",a:["Die Personen werden vorgestellt","Die Handlung spielt sich ab","Die Geschichte endet","Nichts"],_h:0x60},
      {q:"Signalwort fuer Anfang?",a:["Am Ende","Schliesslich","Zuerst","Danach"],_h:0x5E}
    ],
    boss: [
      {q:"Was kommt zuerst?",a:["Hauptteil","Schluss","Einleitung","Alle gleichzeitig"],_h:0x48},
      {q:"Signalwort fuer Mitte?",a:["Es war einmal","Schliesslich","Dann","Am Ende"],_h:0x7D},
      {q:"Was macht der Schluss?",a:["Neue Personen vorstellen","Die Geschichte aufloesen","Ein neues Problem starten","Nichts"],_h:0x2A}
    ]
  },
  // Module 6
  {
    quiz: [
      {q:"Welches Gefuehl zeigt weinen?",a:["Freude","Wut","Trauer","Angst"],_h:0x48},
      {q:"Tom springt vor Freude - Gefuehl?",a:["Traurig","Wuetend","Aengstlich","Gluecklich"],_h:0x7C},
      {q:"Welches Wort zeigt Wut?",a:["Lachen","Schimpfen","Weinen","Zittern"],_h:0x2A},
      {q:"Sara versteckt sich - Gefuehl?",a:["Freude","Wut","Angst","Langeweile"],_h:0x63},
      {q:"Wie Gefuehle erkennen?",a:["An der Schriftgroesse","An Handlungen und Woertern","An der Seitenzahl","Am Titel"],_h:0x5D}
    ],
    boss: [
      {q:"Junge ballt Faeuste - Gefuehl?",a:["Freude","Trauer","Wut","Angst"],_h:0x48},
      {q:"Welcher Tipp hilft?",a:["Schnell lesen","Sich in die Person hineinversetzen","Nur die Ueberschrift lesen","Raten"],_h:0x7E},
      {q:"Emoji fuer traurig?",a:["happy","angry","crying","laughing"],_h:0x29}
    ]
  },
  // Module 7
  {
    quiz: [
      {q:"Was ist ein Sachtext?",a:["Eine erfundene Geschichte","Ein Text mit echten Informationen","Ein Gedicht","Ein Lied"],_h:0x4B},
      {q:"Was ist KEIN Sachtext?",a:["Lexikon-Eintrag","Zeitungsartikel","Maerchen","Anleitung"],_h:0x7D},
      {q:"Was zuerst lesen beim Sachtext?",a:["Den ganzen Text","Die letzte Zeile","Die Frage","Die Ueberschrift"],_h:0x29},
      {q:"Was sind Schluesselwoerter?",a:["Woerter mit Schluessel","Wichtige Woerter zum Suchen","Geheime Woerter","Lange Woerter"],_h:0x60},
      {q:"Wie viele Bienen?",a:["600","6.000","60.000","600.000"],_h:0x5E}
    ],
    boss: [
      {q:"Was unterscheidet Sachtext von Geschichte?",a:["Er ist kuerzer","Er enthaelt echte Infos statt Erfundenes","Er hat Bilder","Er ist langweilig"],_h:0x4B},
      {q:"Was hilft beim Suchen im Sachtext?",a:["Den ganzen Text auswendig lernen","Nach Schluesselwoertern suchen","Schnell lesen und raten","Nur die Ueberschrift lesen"],_h:0x7E},
      {q:"Wer legt Eier im Bienenvolk?",a:["Die Arbeiterinnen","Die Drohnen","Die Koenigin","Alle Bienen"],_h:0x29}
    ]
  },
  // Module 8
  {
    quiz: [
      {q:"Was ordnet eine Tabelle?",a:["Bilder","Informationen in Zeilen und Spalten","Buchstaben","Nur Zahlen"],_h:0x4B},
      {q:"Welches Tier hat Tom?",a:["Katze","Hamster","Hund","Vogel"],_h:0x7D},
      {q:"Was sind Spalten?",a:["Waagerechte Reihen","Senkrechte Reihen","Die Ueberschrift","Die Zahlen"],_h:0x2A},
      {q:"Wie alt ist Lenas Katze?",a:["1 Jahr","3 Jahre","5 Jahre","7 Jahre"],_h:0x63},
      {q:"Wo sind Spaltenueberschriften?",a:["In der letzten Zeile","In der Mitte","In der ersten Zeile","Gar nicht"],_h:0x5E}
    ],
    boss: [
      {q:"Wie viele Kinder haben ein Haustier?",a:["1","2","3","4"],_h:0x48},
      {q:"Wer hat das juengste Tier?",a:["Tom","Lena","Max","Alle gleich"],_h:0x7D},
      {q:"Unterschied Tabelle vs Liste?",a:["Eine Tabelle hat Zeilen UND Spalten","Eine Liste hat immer Zahlen","Eine Tabelle hat nur Text","Es gibt keinen Unterschied"],_h:0x2B}
    ]
  },
  // Module 9
  {
    quiz: [
      {q:"Wie heissen die beiden Kinder?",a:["Tom und Lena","Emma und Leon","Max und Sara","Anna und Ben"],_h:0x4B},
      {q:"Wo steht das Baumhaus?",a:["Im Wald","Im Park","Im Garten","Auf dem Dach"],_h:0x7D},
      {q:"An welchem Tag?",a:["Montag","Mittwoch","Freitag","Sonntag"],_h:0x29},
      {q:"Was finden sie unter dem Stein?",a:["Einen Hund","Einen Schluessel","Eine Holzkiste","Ein Buch"],_h:0x63},
      {q:"Von wem ist der Schatz?",a:["Von Papa","Von Oma","Von der Lehrerin","Von einem Freund"],_h:0x5D}
    ],
    boss: [
      {q:"Was steht auf dem Brief?",a:["Kommt zum Essen","Sucht den Schatz unter dem grossen Stein","Geht ins Bett","Raeumt euer Zimmer auf"],_h:0x4B},
      {q:"Was liegt in der Holzkiste?",a:["Goldmuenzen","Schokolade","Bunte Murmeln","Ein Buch"],_h:0x7D},
      {q:"Wie fuehlen sich Emma und Leon am Ende?",a:["Traurig","Wuetend","Aengstlich","Froehlich"],_h:0x28}
    ]
  }
];

let totalQ = 0;
let wrongCount = 0;
let wrongList = [];

for (let m = 0; m < modules.length; m++) {
  for (const type of ["quiz", "boss"]) {
    const arr = modules[m][type];
    for (let qi = 0; qi < arr.length; qi++) {
      const item = arr[qi];
      const decrypted = item._h ^ _qk[qi % 8];
      const isValid = decrypted >= 0 && decrypted <= 3;
      const answer = isValid ? item.a[decrypted] : "OUT_OF_RANGE(" + decrypted + ")";

      console.log("M" + m + " | " + type.padEnd(4) + " | qi=" + qi + " | _h=0x" + item._h.toString(16).toUpperCase().padStart(2,"0") + " | ^_qk[" + (qi%8) + "]=0x" + _qk[qi%8].toString(16).toUpperCase() + " | idx=" + decrypted + " | " + answer);
      totalQ++;
      if (!isValid) {
        wrongCount++;
        wrongList.push("M" + m + " " + type + " qi=" + qi + " idx=" + decrypted);
      }
    }
  }
}
console.log("");
console.log("Total questions: " + totalQ);
console.log("Out of range: " + wrongCount);
if (wrongList.length > 0) {
  console.log("WRONG:");
  wrongList.forEach(w => console.log("  " + w));
}
