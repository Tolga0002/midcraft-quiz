'use strict';

// MidCraft Studio Quiz — Zusatzfragen Runde 2
// FRAGEN_EXTRA_CODE2: 15 Code-Trace-Fragen (mit code-Feld)
// FRAGEN_EXTRA_PROG2: 15 Wissensfragen (ohne code-Feld)
// Richtige Antwort ist IMMER Index 0 (wird beim Anzeigen gemischt).

window.FRAGEN_EXTRA_CODE2 = [
  {
    f: 'Der Agent schaut nach Norden. Was gilt nach diesem Programm?',
    code: [
      ['blau', 'drehe links'],
      ['blau', 'drehe links']
    ],
    a: [
      'Er schaut nach Süden — zweimal links drehen dreht ihn komplett um.',
      'Er schaut wieder nach Norden, weil sich die Drehungen aufheben.',
      'Er schaut nach Westen, weil nur die erste Drehung zählt.',
      'Er dreht sich einmal ganz im Kreis (360 Grad).'
    ],
    r: 0,
    e: 'Jedes "drehe links" dreht um 90 Grad. Zweimal 90 Grad sind 180 Grad — der Agent schaut genau in die Gegenrichtung. Erst "drehe links" und danach "drehe rechts" würde sich dagegen aufheben: Dann stünde er wieder wie am Anfang.'
  },
  {
    f: 'Der Agent steht auf freiem Feld, 6 Felder vor ihm ist eine Wand. Was passiert?',
    code: [
      ['gruen', 'wiederhole bis (erkennt Block vorne):'],
      ['blau', '   bewege vorwärts um 1']
    ],
    a: [
      'Er läuft Schritt für Schritt und stoppt direkt vor der Wand.',
      'Die Schleife läuft kein einziges Mal, weil vorne nichts erkannt wird.',
      'Er läuft durch die Wand hindurch und weiter.',
      'Er läuft genau 1 Feld und hört dann auf.'
    ],
    r: 0,
    e: '"Wiederhole bis" läuft so lange, bis die Bedingung WAHR wird. Am Anfang ist vorne keine Wand, also läuft er los — und prüft nach jedem Schritt neu. Nach 5 Schritten steht er direkt vor der Wand, "erkennt Block vorne" wird wahr, die Schleife endet. Das ist das Gegenstück zu "wiederhole solange".'
  },
  {
    f: 'Der Agent baut eine Treppe. Wo steht er am Ende im Vergleich zum Start?',
    code: [
      ['gruen', 'wiederhole 3 mal:'],
      ['braun', '   platziere vorne Stein'],
      ['blau', '   bewege hoch um 1'],
      ['blau', '   bewege vorwärts um 1']
    ],
    a: [
      '3 Felder höher und 3 Felder weiter vorne — er ist die Treppe mit hochgestiegen.',
      'Nur 3 Felder höher, aber an derselben Stelle.',
      'Nur 3 Felder weiter vorne, auf gleicher Höhe.',
      '1 Feld höher und 1 Feld vorne, weil die Schleife nach dem ersten Stein stoppt.'
    ],
    r: 0,
    e: 'Pro Durchlauf: Stein vorne hinsetzen, 1 hoch, 1 vor. Der Stein liegt auf der alten Höhe, deshalb ist der Weg nach dem Hochsteigen frei. Nach 3 Durchläufen ist der Agent 3 hoch und 3 vor — und unter ihm liegt eine fertige Treppe aus 3 Stufen.'
  },
  {
    f: 'Der Agent schwebt direkt über Grasboden. Was passiert hier?',
    code: [
      ['braun', 'zerstöre unten']
    ],
    a: [
      'Der Grasblock unter ihm verschwindet — es entsteht ein Loch, aber der Agent schwebt einfach weiter.',
      'Der Agent fällt in das entstandene Loch hinein.',
      'Nichts, denn Grasboden kann man nicht zerstören.',
      'Der Agent zerstört sich selbst und das Programm bricht ab.'
    ],
    r: 0,
    e: '"Zerstöre unten" entfernt den Block direkt unter dem Agenten. In MidCraft Studio schwebt der Agent immer — er kennt keine Schwerkraft. Es entsteht also ein Loch im Boden, aber der Agent bleibt ruhig in der Luft stehen. Anders als eine Spielfigur in Minecraft fällt er nie.'
  },
  {
    f: 'Beide Programme bauen exakt denselben Turm aus 4 Steinen. Welcher Vergleich stimmt?',
    code: [
      ['lila', 'Programm A:'],
      ['gruen', 'wiederhole 4 mal:'],
      ['braun', '   platziere unten Stein'],
      ['blau', '   bewege hoch um 1'],
      ['lila', 'Programm B:'],
      ['braun', 'platziere unten Stein'],
      ['blau', 'bewege hoch um 1'],
      ['braun', 'platziere unten Stein'],
      ['blau', 'bewege hoch um 1'],
      ['braun', 'platziere unten Stein'],
      ['blau', 'bewege hoch um 1'],
      ['braun', 'platziere unten Stein'],
      ['blau', 'bewege hoch um 1']
    ],
    a: [
      'Programm A ist besser: gleicher Turm, aber viel weniger Code-Bausteine — und die 4 lässt sich leicht in 100 ändern.',
      'Programm B ist besser, weil ohne Schleife weniger schiefgehen kann.',
      'Programm A baut einen höheren Turm als Programm B.',
      'Programm B ist schneller, weil der Computer keine Schleife zählen muss.'
    ],
    r: 0,
    e: 'Beide Türme sind identisch. Aber A braucht nur 3 Bausteine statt 8 — und wenn der Turm plötzlich 100 Steine hoch sein soll, änderst du in A nur eine Zahl, während du in B 96 Zeilen dazukopieren müsstest. Schleifen sparen Arbeit und verhindern Kopierfehler. Das nennt man auch: "Wiederhole dich nicht selbst!"'
  },
  {
    f: 'Der Agent schwebt direkt über normalem, festem Boden. Was macht dieses Programm?',
    code: [
      ['gruen', 'wenn (erkennt Block unten) dann:'],
      ['braun', '   zerstöre unten'],
      ['gruen', 'ansonsten:'],
      ['braun', '   platziere unten Erde']
    ],
    a: [
      'Es zerstört den Bodenblock unter dem Agenten — dort ist jetzt ein Loch.',
      'Es platziert einen Erdblock unter dem Agenten.',
      'Es macht beides: erst zerstören, dann platzieren.',
      'Es macht gar nichts, weil beide Zweige sich gegenseitig blockieren.'
    ],
    r: 0,
    e: 'Bei "wenn/dann/ansonsten" wird immer nur EIN Zweig ausgeführt. Über festem Boden ist "erkennt Block unten" wahr, also läuft der dann-Zweig: zerstöre unten. Der ansonsten-Zweig käme nur dran, wenn unter dem Agenten schon ein Loch wäre. Dieses Programm ist übrigens ein "Umschalter": Zweimal ausgeführt ist der Boden wieder heil.'
  },
  {
    f: 'Welchen Wert hat die Variable z am Ende?',
    code: [
      ['lila', 'setze z auf 0'],
      ['gruen', 'wiederhole 4 mal:'],
      ['lila', '   ändere z um 3']
    ],
    a: [
      'z = 12, denn viermal wird 3 dazugezählt: 0 → 3 → 6 → 9 → 12.',
      'z = 7, denn 4 + 3 = 7.',
      'z = 3, denn z wird jedes Mal auf 3 gesetzt.',
      'z = 4, denn die Schleife zählt bis 4.'
    ],
    r: 0,
    e: '"Ändere z um 3" bedeutet: Zähle 3 zum aktuellen Wert dazu (nicht: setze auf 3!). Die Schleife macht das 4-mal: 0+3+3+3+3 = 12. Das ist dasselbe wie 4 × 3. So ein Zähler ist super, um z.B. mitzuzählen, wie viele Blöcke der Agent schon gesetzt hat.'
  },
  {
    f: 'Wie viele Blöcke platziert dieses verschachtelte Programm insgesamt?',
    code: [
      ['gruen', 'wiederhole 2 mal:'],
      ['gruen', '   wiederhole 5 mal:'],
      ['braun', '      platziere vorne Stein'],
      ['blau', '      bewege vorwärts um 1']
    ],
    a: [
      'Nur 1 Block: Danach rempelt der Agent bei jedem Vorwärts-Befehl gegen diesen Block.',
      '7 Blöcke, denn 2 + 5 = 7.',
      '5 Blöcke, denn nur die innere Schleife platziert.',
      '10 Blöcke, denn die innere Schleife läuft insgesamt 2 × 5-mal.'
    ],
    r: 0,
    e: 'Beim ersten Durchlauf setzt der Agent einen Stein direkt vor sich. Anschließend kann er nicht in diese belegte Zelle laufen: Der Vorwärts-Befehl ist ein Rempler. Alle weiteren Platzier- und Laufbefehle zielen deshalb auf dieselbe belegte Zelle und bewirken nichts — am Ende steht nur 1 Block.'
  },
  {
    f: 'Wie oft wird die Funktion "säule" insgesamt aufgerufen?',
    code: [
      ['lila', 'definiere Funktion säule:'],
      ['braun', '   platziere unten Stein'],
      ['blau', '   bewege hoch um 1'],
      ['lila', 'rufe säule auf'],
      ['lila', 'rufe säule auf'],
      ['gruen', 'wiederhole 3 mal:'],
      ['lila', '   rufe säule auf']
    ],
    a: [
      '5-mal: zweimal direkt und dreimal in der Schleife.',
      '3-mal, denn nur die Schleife zählt.',
      '6-mal: 2 × 3 = 6.',
      '2-mal, denn die Schleife ruft immer dieselbe Funktion auf und das zählt nur einmal.'
    ],
    r: 0,
    e: 'Das Definieren der Funktion führt noch nichts aus — es legt das Rezept nur ab. Ausgeführt wird bei jedem Aufruf: 2 direkte Aufrufe + 3 Aufrufe durch die Schleife = 5. Der Agent baut also eine Säule aus 5 Steinen. Funktionen und Schleifen kombiniert sind das mächtigste Werkzeug in MidCraft.'
  },
  {
    f: 'Der Agent steht direkt vor einer Mauer, die genau 1 Block hoch ist. Wo endet er?',
    code: [
      ['blau', 'bewege vorwärts um 3'],
      ['blau', 'bewege hoch um 1'],
      ['blau', 'bewege vorwärts um 1']
    ],
    a: [
      '1 Feld höher und 1 Feld vorne — er schwebt direkt über der Mauer.',
      'Er bleibt komplett am Startfeld stehen, weil das ganze Programm nach dem Rempler abbricht.',
      '4 Felder vorne und 1 hoch, denn die Mauer verschwindet beim Anrempeln.',
      '3 Felder vorne und 1 hoch, weil die ersten Schritte doch klappen.'
    ],
    r: 0,
    e: 'Beim ersten Befehl rempelt der Agent sofort gegen die Mauer — alle 3 Schritte verpuffen, er bleibt stehen. Aber wichtig: Nur der eine Befehl verpufft, das Programm läuft weiter! "Bewege hoch um 1" klappt (nach oben ist frei), und der letzte Schritt nach vorne klappt auch, denn über der 1 Block hohen Mauer ist Platz. Er endet also schwebend genau über der Mauer.'
  },
  {
    f: 'Der Agent steht auf einer riesigen leeren Ebene, weit und breit kein Block. Was passiert?',
    code: [
      ['gruen', 'wiederhole solange nicht (erkennt Block vorne):'],
      ['blau', '   bewege vorwärts um 1']
    ],
    a: [
      'Die Bedingung wird nie falsch — die Schleife würde von selbst nie enden. Erst der Weltrand bzw. der Schutzmechanismus der App stoppt sie.',
      'Die Schleife läuft genau einmal und hört dann auf.',
      'Der Agent erkennt den Boden unter sich als Block und bleibt sofort stehen.',
      'Das Programm startet gar nicht, weil die Bedingung am Anfang falsch ist.'
    ],
    r: 0,
    e: 'Die Schleife läuft, solange vorne KEIN Block erkannt wird. Auf leerer Ebene wird das nie wahr — eine Endlosschleife! ("Erkennt Block vorne" schaut nur nach vorne, nicht nach unten.) Zum Glück haben Programme wie MidCraft Studio einen Schutzmechanismus, der nach zu vielen Durchläufen stoppt. Deshalb: Bei solange/bis-Schleifen immer überlegen, ob die Bedingung sicher irgendwann kippt.'
  },
  {
    f: 'Beide Programme sollen eine Brücke über eine 4 Felder breite Schlucht bauen. Was ist der Unterschied?',
    code: [
      ['lila', 'Programm A:'],
      ['gruen', 'wiederhole 4 mal:'],
      ['braun', '   platziere unten Holz'],
      ['blau', '   bewege vorwärts um 1'],
      ['lila', 'Programm B:'],
      ['gruen', 'wiederhole 4 mal:'],
      ['blau', '   bewege vorwärts um 1'],
      ['braun', '   platziere unten Holz']
    ],
    a: [
      'A lässt unter dem letzten Feld (dem Ziel) eine Lücke, B unter dem Startfeld — die Reihenfolge in der Schleife entscheidet, wo ein Block fehlt.',
      'Beide bauen exakt dieselbe Brücke, die Reihenfolge ist egal.',
      'B baut gar keine Brücke, weil man erst platzieren muss, bevor man läuft.',
      'A platziert 8 Blöcke, B nur 4.'
    ],
    r: 0,
    e: 'Beide platzieren 4 Blöcke, aber an verschobenen Stellen: A platziert zuerst unter sich und läuft dann — die Blöcke landen unter Feld 0 bis 3, unter dem Endfeld fehlt einer. B läuft zuerst — die Blöcke landen unter Feld 1 bis 4, unter dem Startfeld fehlt einer. Beim Programmieren zählt nicht nur WAS passiert, sondern genau in welcher REIHENFOLGE.'
  },
  {
    f: 'Was bewirkt dieses Muster? (Der Agent startet neben einer langen Mauer, die links von ihm verläuft.)',
    code: [
      ['gruen', 'wiederhole 20 mal:'],
      ['gruen', '   wenn (erkennt Block links) dann:'],
      ['blau', '      bewege vorwärts um 1'],
      ['gruen', '   ansonsten:'],
      ['blau', '      drehe links'],
      ['blau', '      bewege vorwärts um 1']
    ],
    a: [
      'Solange links eine Mauer ist, läuft er geradeaus; sobald links frei ist, biegt er links ab.',
      'Der Agent dreht sich 20-mal im Kreis, ohne sich vom Fleck zu bewegen.',
      'Der Agent zerstört die Mauer Stück für Stück.',
      'Der Agent läuft immer geradeaus, egal was links ist.'
    ],
    r: 0,
    e: 'Solange links eine Mauer ist, geht er geradeaus. Ist links frei, dreht er nach links und geht einen Schritt. Das ähnelt einem Wandfolger, ist aber noch keine vollständige Linke-Hand-Regel: Steht bei einer Innenkurve zusätzlich vorne ein Block, fehlt hier ein Rechtsabbiege-Fall und der Agent würde dagegen rempeln.'
  },
  {
    f: 'Wie viele Felder bewegt sich der Agent?',
    code: [
      ['blau', 'bewege vorwärts um (2 + 3)']
    ],
    a: [
      '5 Felder — der Computer rechnet die Klammer zuerst aus und nutzt das Ergebnis.',
      '2 Felder, denn nur die erste Zahl zählt.',
      '23 Felder, denn die Zahlen werden hintereinander gehängt.',
      '6 Felder, denn 2 × 3 = 6.'
    ],
    r: 0,
    e: 'In fast jeden Zahlen-Slot kannst du statt einer festen Zahl eine Rechnung stecken. Der Computer rechnet sie zuerst aus (2 + 3 = 5) und setzt dann das Ergebnis ein — der Agent läuft 5 Felder. Richtig praktisch wird das mit Variablen, z.B. "bewege vorwärts um (breite + 1)".'
  },
  {
    f: 'Vor dem Agenten ist nur leere Luft, kein einziger Block. Was passiert?',
    code: [
      ['braun', 'zerstöre vorne']
    ],
    a: [
      'Nichts — es gibt vorne nichts zu zerstören. Das ist kein Fehler, das Programm läuft normal weiter.',
      'Das Programm stürzt mit einer Fehlermeldung ab.',
      'Der Agent zerstört den nächstgelegenen Block, egal wo der ist.',
      'Es entsteht ein unsichtbares Loch in der Luft.'
    ],
    r: 0,
    e: '"Zerstöre vorne" auf leerem Feld verpufft einfach wirkungslos — genau wie "platziere" in eine schon belegte Zelle nichts tut. MidCraft-Befehle brechen das Programm nicht ab, wenn sie gerade nichts bewirken können. Wenn du sichergehen willst, prüfe vorher mit "wenn (erkennt Block vorne) dann zerstöre vorne".'
  }
];

window.FRAGEN_EXTRA_PROG2 = [
  {
    f: 'Was ist ein Betriebssystem?',
    a: [
      'Das Grundprogramm eines Computers, das Hardware und alle anderen Programme verwaltet — z.B. Windows, macOS oder Android.',
      'Ein Programm, mit dem man Betriebe und Firmen gründet.',
      'Die Tastatur und die Maus eines Computers.',
      'Eine besonders schnelle Internetverbindung.'
    ],
    r: 0,
    e: 'Ohne Betriebssystem geht nichts: Es startet den Computer, verteilt Speicher und Rechenzeit, verwaltet Dateien und lässt Apps überhaupt erst laufen. Windows und macOS laufen auf Computern, Android und iOS auf Handys — sogar dein Handy hat also ein Betriebssystem.'
  },
  {
    f: 'Wie viele Bits ergeben zusammen 1 Byte?',
    a: [
      '8 Bits — ein Byte ist die Grundeinheit, mit der z.B. ein Buchstabe gespeichert wird.',
      '2 Bits, denn ein Bit kennt zwei Zustände.',
      '100 Bits, wegen des Dezimalsystems.',
      '1000 Bits, denn "Kilo" bedeutet tausend.'
    ],
    r: 0,
    e: 'Ein Bit ist die kleinste Einheit (0 oder 1), und 8 davon sind 1 Byte. Mit einem Byte kann man 256 verschiedene Werte darstellen — genug für einen Buchstaben. Danach geht es weiter: ca. 1000 Byte = 1 Kilobyte, dann Megabyte, Gigabyte, Terabyte. Ein Foto hat oft ein paar Megabyte, also Millionen Bytes.'
  },
  {
    f: 'Was ist ein Server?',
    a: [
      'Ein Computer, der Dienste und Daten für andere Computer bereitstellt — z.B. Webseiten, Videos oder Spielwelten.',
      'Ein Roboter, der in Restaurants das Essen bringt.',
      'Ein besonders großer Bildschirm.',
      'Ein Virus, der Computer langsamer macht.'
    ],
    r: 0,
    e: 'Server heißt wörtlich "Diener": Er wartet auf Anfragen und liefert dann aus. Wenn du eine Webseite öffnest oder online zockst, redet dein Gerät mit einem Server — oft steht der in einem riesigen Rechenzentrum mit tausenden solcher Computer. Auch ein Minecraft-Server ist genau das: ein Computer, der die Spielwelt für alle Mitspieler bereithält.'
  },
  {
    f: 'Was ist ein Browser?',
    a: [
      'Ein Programm, mit dem man Webseiten anschauen kann — z.B. Chrome, Firefox oder Safari.',
      'Ein anderes Wort für das Internet selbst.',
      'Ein Gerät, das WLAN in die Wohnung bringt.',
      'Eine Suchmaschine wie Google.'
    ],
    r: 0,
    e: 'Der Browser holt sich Webseiten von Servern und zeigt sie dir an. Er ist NICHT das Internet selbst (das ist das Netz dahinter) und auch keine Suchmaschine (Google ist eine Webseite, die du IM Browser öffnest). Übrigens läuft auch dieses Quiz in einem Browser!'
  },
  {
    f: 'Ist HTML eine Programmiersprache?',
    a: [
      'Nein — HTML ist eine Auszeichnungssprache: Sie beschreibt, wie eine Webseite aufgebaut ist, kann aber keine Abläufe wie Schleifen oder Entscheidungen ausführen.',
      'Ja, HTML ist die schnellste Programmiersprache der Welt.',
      'Nein, HTML ist ein Betriebssystem für Webseiten.',
      'Ja, denn alles am Computer ist eine Programmiersprache.'
    ],
    r: 0,
    e: 'HTML ("HyperText Markup Language") sagt nur: Hier kommt eine Überschrift, da ein Bild, dort ein Link — wie ein Bauplan. Echte Logik mit Schleifen, Bedingungen und Variablen (wie in MidCraft!) übernimmt auf Webseiten die Programmiersprache JavaScript. Ein Team: HTML baut die Struktur, CSS macht sie hübsch, JavaScript lässt sie reagieren.'
  },
  {
    f: 'Welches Passwort ist am schwersten zu knacken?',
    a: [
      'Ein langes wie "GurkeTanztAufDemMond42" — Länge macht ein Passwort viel stärker als ein paar Sonderzeichen.',
      'Ein kurzes, aber kompliziertes wie "X7!p".',
      '"passwort123", weil es so unauffällig ist.',
      'Der eigene Name plus Geburtsjahr, weil das nur man selbst kennt.'
    ],
    r: 0,
    e: 'Knack-Programme probieren Milliarden Kombinationen pro Sekunde. Bei jedem zusätzlichen Zeichen explodiert die Zahl der Möglichkeiten — deshalb schlägt lang fast immer kompliziert. Ein Satz aus 4 zufälligen Wörtern ist stark UND leicht zu merken. Namen und Geburtstage sind tabu: Die probieren Angreifer zuerst.'
  },
  {
    f: 'Was ist "die Cloud" wirklich?',
    a: [
      'Computer von anderen Leuten bzw. Firmen, die man übers Internet nutzt — die Daten liegen in echten Rechenzentren, nicht in einer Wolke.',
      'Eine spezielle Wolke, in der Daten durch die Luft schweben.',
      'Ein extra Speicherchip, der in jedem Handy eingebaut ist.',
      'Ein Programm, das Daten unsichtbar macht.'
    ],
    r: 0,
    e: 'Wenn Fotos "in der Cloud" liegen, liegen sie auf Servern in riesigen Rechenzentren irgendwo auf der Welt — dein Gerät holt sie übers Internet. Praktisch: Du kommst von überall ran. Aber merke: Cloud heißt immer, deine Daten liegen auf dem Computer von jemand anderem.'
  },
  {
    f: 'Was verbindet die Informatikerin Grace Hopper mit dem Wort "Bug"?',
    a: [
      'Ihr Team fand 1947 eine echte Motte im Computer und klebte sie ins Logbuch — der berühmteste "Bug"-Fund der Geschichte. Sie war außerdem Pionierin des Compilers.',
      'Sie hat den ersten Computervirus programmiert.',
      'Sie hat Insekten gezüchtet, um Kabel zu testen.',
      'Sie hat das Wort "Bug" verboten, weil es unwissenschaftlich klang.'
    ],
    r: 0,
    e: 'In einem Röhrencomputer der US-Marine klemmte eine echte Motte und verursachte Fehler — Hoppers Team klebte sie ins Logbuch: "First actual case of bug being found". Noch wichtiger: Grace Hopper entwickelte einen der ersten Compiler und setzte durch, dass man Programme in verständlicher Sprache statt nur in Nullen und Einsen schreiben kann.'
  },
  {
    f: 'Wer war Alan Turing?',
    a: [
      'Ein britischer Mathematiker, der die Grundlagen der Informatik legte und im Zweiten Weltkrieg half, die Verschlüsselungsmaschine Enigma zu knacken.',
      'Der Gründer von Microsoft.',
      'Der Erfinder des Smartphones.',
      'Ein YouTuber, der Programmier-Tutorials macht.'
    ],
    r: 0,
    e: 'Turing dachte sich schon in den 1930ern eine "Rechenmaschine" aus, die im Prinzip alles berechnen kann — die Idee hinter jedem heutigen Computer. Sein Team knackte im Krieg die deutsche Enigma-Verschlüsselung. Nach ihm ist der Turing-Test benannt: Kann eine Maschine so antworten, dass man sie für einen Menschen hält? Bei moderner KI ist genau diese Frage wieder hochaktuell.'
  },
  {
    f: 'Wie alt ist das Internet ungefähr?',
    a: [
      'Über 50 Jahre — der Vorläufer ARPANET startete schon 1969 mit vier verbundenen Computern.',
      'Etwa 15 Jahre — es entstand zusammen mit dem Smartphone.',
      'Über 200 Jahre — es wurde mit dem Telegrafen erfunden.',
      'Genau 30 Jahre — es startete im Jahr 1996.'
    ],
    r: 0,
    e: '1969 verband das ARPANET in den USA die ersten vier Universitätscomputer — daraus wuchs das Internet. Das World Wide Web (die Webseiten mit Links) kam erst 1989/91 dazu und ist nur ein Dienst IM Internet, so wie auch E-Mail oder Online-Games. Das Internet ist also deutlich älter als deine Eltern vermutlich denken.'
  },
  {
    f: 'Was ist ein Sensor bei einem Roboter?',
    a: [
      'Ein Bauteil, mit dem der Roboter seine Umgebung wahrnimmt — z.B. Abstand, Licht, Berührung oder Töne.',
      'Der Motor, der die Räder antreibt.',
      'Der Akku, der den Roboter mit Strom versorgt.',
      'Die Fernbedienung, mit der man den Roboter steuert.'
    ],
    r: 0,
    e: 'Sensoren sind die Sinnesorgane eines Roboters: Kamera = Augen, Mikrofon = Ohren, Abstandssensor = Tastsinn auf Entfernung. Erst mit Sensoren kann ein Roboter auf seine Umwelt reagieren statt blind einem Plan zu folgen. Der MidCraft-Agent hat auch einen: "Erkennt Block vorne" ist nichts anderes als ein Sensor!'
  },
  {
    f: 'Was haben Blockly und Scratch gemeinsam?',
    a: [
      'Beide sind visuelle Programmiersprachen: Man steckt bunte Blöcke zusammen, statt Code zu tippen.',
      'Beide sind Computerspiele, in denen man Blöcke abbaut.',
      'Beide sind Betriebssysteme für Schulcomputer.',
      'Beide sind Roboter, die man kaufen kann.'
    ],
    r: 0,
    e: 'Bei visuellen Sprachen wie Scratch und Blockly baust du Programme aus Puzzle-Blöcken — Tippfehler sind unmöglich, weil nur passende Blöcke zusammenstecken. MidCraft Studio benutzt genau so eine Blockly-Oberfläche! Die Denkweise (Schleifen, Bedingungen, Variablen) ist dieselbe wie in "echten" Textsprachen wie Python — der Umstieg fällt später leicht.'
  },
  {
    f: 'Was ist ein gutes Beispiel für einen Algorithmus im Alltag?',
    a: [
      'Ein Kochrezept: eine feste Schritt-für-Schritt-Anleitung, die immer zum gleichen Ergebnis führt.',
      'Ein Zufallsgenerator, der würfelt, was passiert.',
      'Ein Gefühl, das einem sagt, was richtig ist.',
      'Ein Bild, das einen Computer zeigt.'
    ],
    r: 0,
    e: 'Ein Algorithmus ist einfach eine eindeutige Schrittfolge zum Ziel — das gibt es überall: Rezepte, Bastelanleitungen, Zopfflechten, Schuhebinden. Wer einem Freund erklärt, wie man einen Zopf flicht, "programmiert" ihn quasi. Der Unterschied zum Computer: Der Freund denkt mit, der Computer führt exakt und stur jeden Schritt aus.'
  },
  {
    f: 'Warum sagt man: "Ein Programmfehler ist nie die Schuld des Computers"?',
    a: [
      'Weil der Computer exakt das ausführt, was im Programm steht — wenn etwas Falsches passiert, stand etwas Falsches im Programm.',
      'Weil Computer sich für Fehler entschuldigen können.',
      'Weil Computer absichtlich Fehler einbauen, um Menschen zu testen.',
      'Weil Fehler immer vom Internet kommen.'
    ],
    r: 0,
    e: 'Ein Computer ist stur und gehorsam zugleich: Er macht genau das, was da steht — nicht das, was du MEINST. Wenn dein MidCraft-Agent die Brücke falsch baut, hat er deine Befehle perfekt befolgt, nur waren es die falschen Befehle. Das ist sogar eine gute Nachricht: Der Fehler steckt im Programm, und dort kannst du ihn finden und beheben.'
  },
  {
    f: 'Wie heißt der Beruf, in dem man hauptberuflich Programme schreibt?',
    a: [
      'Softwareentwickler:in — und dafür braucht man nicht zwingend ein Studium: Auch über eine Ausbildung oder viel eigenes Üben kommt man in den Beruf.',
      'Hardwarehändler:in — man verkauft Computerteile.',
      'Datentipper:in — man tippt fremde Texte ab.',
      'Programmleiter:in — man plant das Fernsehprogramm.'
    ],
    r: 0,
    e: 'Softwareentwickler:innen (auch "Programmierer:innen") denken sich Lösungen aus, schreiben Code, testen und verbessern ihn — meist im Team. Der Weg dorthin ist offen: Informatikstudium, Ausbildung (z.B. Fachinformatiker:in) oder selbst beigebracht mit eigenen Projekten. Was zählt, sind Können und Neugier — und mit Blockly-Projekten wie MidCraft sammelst du gerade die ersten echten Schritte.'
  }
];
