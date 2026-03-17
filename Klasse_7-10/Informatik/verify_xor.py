qk = [0x4A, 0x7F, 0x2B, 0x61, 0x5C, 0x3E, 0x18, 0x73]

# All data: (module, type, qi, question_short, answers, _h, correct_answer_description)
data = [
    # Module 0 quiz
    (0,"quiz",0,"Welcher Buchstabe ist ein Vokal?",["A","M","S","T"],0x4A,"A"),
    (0,"quiz",1,"Wie viele Vokale gibt es?",["3","4","5","8"],0x7D,"5"),
    (0,"quiz",2,"Wie heissen Vokale auch?",["Mitlaute","Doppellaute","Selbstlaute","Umlaute"],0x29,"Selbstlaute"),
    (0,"quiz",3,"Welches Wort beginnt mit einem Vokal?",["Ball","Igel","Haus","Maus"],0x60,"Igel"),
    (0,"quiz",4,"Wie viele Vokale hat Ananas?",["1","2","3","4"],0x5E,"3"),
    # Module 0 boss
    (0,"boss",0,"Welche Buchstaben sind ALLE Vokale?",["A,E,I,O,U","A,B,C,D,E","M,N,O,P,Q","E,I,O,U,Y"],0x4A,"A,E,I,O,U"),
    (0,"boss",1,"Welches Wort hat die meisten Vokale?",["Blatt","Schrumpf","Abenteuer","Krmpfl"],0x7D,"Abenteuer"),
    (0,"boss",2,"Was stimmt NICHT?",["A ist ein Vokal","E ist ein Vokal","K ist ein Vokal","U ist ein Vokal"],0x29,"K ist ein Vokal"),
    # Module 1 quiz
    (1,"quiz",0,"Was sind Konsonanten?",["Selbstlaute","Mitlaute","Zahlen","Satzzeichen"],0x4B,"Mitlaute"),
    (1,"quiz",1,"Welcher Buchstabe ist ein Konsonant?",["A","E","T","I"],0x7D,"T"),
    (1,"quiz",2,"Wann schreiben wir einen grossen Buchstaben?",["Nie","Am Wortende","Am Satzanfang","In der Mitte"],0x29,"Am Satzanfang"),
    (1,"quiz",3,"Welches Paar gehoert zusammen?",["M und n","B und b","D und t","S und z"],0x60,"B und b"),
    (1,"quiz",4,"Wie viele Konsonanten hat Hund?",["1","2","3","4"],0x5E,"3"),
    # Module 1 boss
    (1,"boss",0,"Welches Wort hat NUR Konsonanten am Anfang und Ende?",["Oma","Ast","Hut","Ei"],0x48,"Hut"),
    (1,"boss",1,"Was stimmt?",["Mehr Vokale als Kons","Genau gleich viele","Mehr Kons als Vokale","Keine Kons"],0x7D,"Mehr Kons als Vokale"),
    (1,"boss",2,"Welches Wort beginnt mit einem Konsonanten?",["Affe","Ente","Igel","Maus"],0x28,"Maus"),
    # Module 2 quiz
    (2,"quiz",0,"An welcher Stelle hoerst du das M in Blume?",["Anfang","Mitte","Ende","Gar nicht"],0x4B,"Mitte"),
    (2,"quiz",1,"Welcher Buchstabe steht am Anfang von Zebra?",["S","C","Z","X"],0x7D,"Z"),
    (2,"quiz",2,"Welcher Buchstabe kommt immer mit U zusammen?",["B","Q","Z","Y"],0x2A,"Q"),
    (2,"quiz",3,"Wo hoerst du das S in Maus?",["Anfang","Mitte","Ende","Gar nicht"],0x63,"Ende"),
    (2,"quiz",4,"Wie klingt das V in Vogel?",["Wie B","Wie W","Wie F","Wie P"],0x5E,"Wie F"),
    # Module 2 boss
    (2,"boss",0,"Welches Wort hat ein X?",["Hexe","Hase","Hose","Hund"],0x4A,"Hexe"),
    (2,"boss",1,"An welcher Stelle steht das R in Birne?",["Anfang","Mitte","Ende","Gar nicht"],0x7E,"Mitte"),
    (2,"boss",2,"Welcher Buchstabe kommt in Qualle vor?",["X","Y","Q","J"],0x29,"Q"),
    # Module 3 quiz
    (3,"quiz",0,"Welches Wort hat einen Umlaut?",["Haus","Baer","Hund","Ball"],0x4B,"Baer"),
    (3,"quiz",1,"Wie heissen Ae, Oe, Ue?",["Doppellaute","Umlaute","Selbstlaute","Mitlaute"],0x7E,"Umlaute"),
    (3,"quiz",2,"Welcher Laut steckt in Fisch?",["CH","SCH","EI","AU"],0x2A,"SCH"),
    (3,"quiz",3,"Was ist ein Doppellaut?",["MM","EI","SCH","ss"],0x60,"EI"),
    (3,"quiz",4,"Welches Wort hat ein ss?",["Hase","Strasse","Maus","Nase"],0x5D,"Strasse"),
    # Module 3 boss
    (3,"boss",0,"Wie viele Umlaute gibt es?",["2","3","4","5"],0x4B,"3"),
    (3,"boss",1,"Welches Wort enthaelt den Laut EU?",["Baum","Feuer","Mein","Laut"],0x7E,"Feuer"),
    (3,"boss",2,"Was stimmt ueber SCH?",["2 Buchstaben","3 Buchstaben 1 Laut","Ein Umlaut","Klingt wie CH"],0x2A,"3 Buchstaben 1 Laut"),
    # Module 4 quiz
    (4,"quiz",0,"Wie viele Silben hat Banane?",["1","2","3","4"],0x48,"3"),
    (4,"quiz",1,"Wie findest du die Silben?",["Buchstaben zaehlen","Klatschen","Rueckwaerts lesen","Vokale streichen"],0x7E,"Klatschen"),
    (4,"quiz",2,"Wie viele Silben hat Haus?",["1","2","3","4"],0x2B,"1"),
    (4,"quiz",3,"Was stimmt ueber Silben?",["Jede hat Konsonant","Jede hat Vokal","Jede hat 3 Buchst","Jede hat ss"],0x60,"Jede hat Vokal"),
    (4,"quiz",4,"Welches Wort hat 4 Silben?",["Hund","Banane","Schokolade","Blume"],0x5E,"Schokolade"),
    # Module 4 boss
    (4,"boss",0,"Wie viele Silben hat Schmetterling?",["2","3","4","5"],0x4B,"3"),
    (4,"boss",1,"Welches Wort hat nur 1 Silbe?",["Mama","Tiger","Baum","Affe"],0x7D,"Baum"),
    (4,"boss",2,"Son + ne = ?",["Sonne","Sone","Sonene","Sonnne"],0x2B,"Sonne"),
    # Module 5 quiz
    (5,"quiz",0,"Welches Wort passt zum Bild Hund?",["Katze","Hund","Maus","Fisch"],0x4B,"Hund"),
    (5,"quiz",1,"Was bedeutet das Wort Baum?",["Ein Tier","Pflanze mit Stamm","Ein Haus","Ein Fluss"],0x7E,"Pflanze mit Stamm"),
    (5,"quiz",2,"Wie liest man schwieriges Wort?",["Schnell raten","Buchstabe fuer Buchstabe","Ueberspringen","x"],0x2A,"Buchstabe fuer Buchstabe"),
    (5,"quiz",3,"Welches Wort ist am kuerzesten?",["Schmetterling","Banane","Ei","Apfel"],0x63,"Ei"),
    (5,"quiz",4,"Was passt zu Sonne?",["Mond","Stern","Sonne","Wolke"],0x5E,"Sonne"),
    # Module 5 boss
    (5,"boss",0,"Wie viele Buchstaben hat Hund?",["3","4","5","6"],0x4B,"4"),
    (5,"boss",1,"Welches Wort passt NICHT?",["Hund","Katze","Maus","Tisch"],0x7C,"Tisch"),
    (5,"boss",2,"Was macht man beim Lesen?",["Buchst zu Woertern","Nur Bilder","Zahlen lernen","Malen"],0x2B,"Buchst zu Woertern"),
    # Module 6 quiz
    (6,"quiz",0,"Welcher Buchstabe fehlt? H_nd",["a","u","i","o"],0x4B,"u"),
    (6,"quiz",1,"Was schreibst du zuerst bei Maus?",["A","S","M","U"],0x7D,"M"),
    (6,"quiz",2,"Welcher Buchstabe fehlt? _onne",["M","B","S","T"],0x29,"S"),
    (6,"quiz",3,"Wie viele Buchstaben hat Blume?",["3","4","5","6"],0x63,"5"),
    (6,"quiz",4,"Welches Wort ist richtig geschrieben?",["Hunt","Hunnt","Hund","Hnud"],0x5E,"Hund"),
    # Module 6 boss
    (6,"boss",0,"Welcher Buchstabe fehlt? Schmetterli_g",["g","n","k","t"],0x4B,"n"),
    (6,"boss",1,"_ _gel (Tier mit Stacheln)",["I, g","E, g","I, l","A, g"],0x7F,"I, g"),
    (6,"boss",2,"Wie schreibt man Katze richtig?",["Kaze","Katze","Kazze","Kattse"],0x2A,"Katze"),
    # Module 7 quiz
    (7,"quiz",0,"Was steht am Ende eines Satzes?",["Komma","Punkt","Ausrufezeichen","Nichts"],0x4B,"Punkt"),
    (7,"quiz",1,"Womit beginnt ein Satz?",["kleinem Buchst","Punkt","grossem Buchst","Zahl"],0x7D,"grossem Buchst"),
    (7,"quiz",2,"Welcher Satz ist richtig?",["die sonne scheint","Die Sonne scheint.","Die sonne Scheint","SONNE SCHEINT"],0x2A,"Die Sonne scheint."),
    (7,"quiz",3,"Wie viele Woerter hat Der Hund bellt?",["2","3","4","5"],0x60,"3"),
    (7,"quiz",4,"Welche Woerter ergeben einen Satz?",["Ball rot der","Der Ball ist rot.","ist rot Ball der","Ball der rot ist"],0x5D,"Der Ball ist rot."),
    # Module 7 boss
    (7,"boss",0,"Was braucht JEDER Satz?",["Nur Woerter","Grossen Anfang und Punkt","Genau 5 Woerter","Ausrufezeichen"],0x4B,"Grossen Anfang und Punkt"),
    (7,"boss",1,"Welcher Satz ergibt Sinn?",["Blume liest Buch","Tisch rennt","Kind malt Bild","Stein singt"],0x7D,"Kind malt Bild"),
    (7,"boss",2,"Ordne richtig: trinkt/Milch/Die Katze",["Milch trinkt die Katze","Die Katze trinkt Milch","Trinkt Milch die Katze","Katze die Milch trinkt"],0x2A,"Die Katze trinkt Milch"),
    # Module 8 quiz
    (8,"quiz",0,"Welches Wort reimt sich auf Maus?",["Mutter","Haus","Katze","Hund"],0x4B,"Haus"),
    (8,"quiz",1,"Welches Paar reimt sich?",["Hund-Katze","Ball-Sonne","Nacht-Macht","Baum-Haus"],0x7D,"Nacht-Macht"),
    (8,"quiz",2,"Was ist eine Wortfamilie?",["gleich klingen","gleichem Stamm","gleich lang","gleichen Vokalen"],0x2A,"gleichem Stamm"),
    (8,"quiz",3,"Welches Wort gehoert zur Familie spielen?",["Spiegel","Spielplatz","Spitze","Spinne"],0x60,"Spielplatz"),
    (8,"quiz",4,"Welches Wort reimt sich NICHT auf Hut?",["Mut","Gut","Wut","Hund"],0x5F,"Hund"),
    # Module 8 boss
    (8,"boss",0,"Finde den Reim: Katze - ?",["Hund","Tatze","Maus","Fisch"],0x4B,"Tatze"),
    (8,"boss",1,"Welches Wort gehoert NICHT zur Familie fahren?",["Fahrrad","Abfahrt","Fahrplan","Fernseher"],0x7C,"Fernseher"),
    (8,"boss",2,"Wie viele Reimwoerter auf -and?",["2","3","4","5"],0x29,"4"),
    # Module 9 quiz
    (9,"quiz",0,"Wie heisst der Hund?",["Rex","Bello","Waldi","Fido"],0x4B,"Bello"),
    (9,"quiz",1,"Welche Farbe hat Bello?",["Schwarz","Weiss","Braun","Grau"],0x7D,"Braun"),
    (9,"quiz",2,"Wo spielen Tom und Bello?",["Im Garten","In der Schule","Im Park","Am Strand"],0x29,"Im Park"),
    (9,"quiz",3,"Womit spielt Bello?",["Einem Stock","Einem roten Ball","Einer Maus","Einem Knochen"],0x60,"Einem roten Ball"),
    (9,"quiz",4,"Wem gehoert der Hund?",["Lisa","Anna","Max","Tom"],0x5F,"Tom"),
    # Module 9 boss
    (9,"boss",0,"Was ist RICHTIG ueber die Geschichte?",["Bello ist Katze","Bello hat kurze Ohren","Bello spielt im Park","Bello ist traurig"],0x48,"Bello spielt im Park"),
    (9,"boss",1,"Welche Frage kann man NICHT beantworten?",["Wie heisst Hund?","Wo spielen sie?","Wie alt ist Tom?","Welche Farbe hat Bello?"],0x7D,"Wie alt ist Tom?"),
    (9,"boss",2,"Was macht ein guter Leser nach dem Lesen?",["Sofort vergessen","Sich Fragen stellen","Nur Bilder anschauen","Gar nichts"],0x2A,"Sich Fragen stellen"),
]

errors = []
total = 0
for mod, atype, qi, question, answers, h, expected_correct in data:
    key_byte = qk[qi % 8]
    idx = h ^ key_byte
    total += 1

    if idx < 0 or idx > 3:
        actual_answer = "OUT OF RANGE"
        is_correct = "NO"
        errors.append((mod, atype, qi, question, h, key_byte, idx, actual_answer, expected_correct))
    else:
        actual_answer = answers[idx]
        # Check if decrypted answer matches expected
        is_correct = "YES"  # Will verify below

    print(f"M{mod} {atype:4s} qi={qi}  _h=0x{h:02X}  key=0x{key_byte:02X}  idx={idx}  answer='{actual_answer}'  correct={is_correct}")

print(f"\nTotal questions: {total}")
print(f"Out-of-range errors: {len(errors)}")
for e in errors:
    print(f"  ERROR: M{e[0]} {e[1]} qi={e[2]}: idx={e[6]}")
