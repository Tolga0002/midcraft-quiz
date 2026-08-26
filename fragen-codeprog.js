'use strict';
// Zusatzfragen "Programmcode erraten" (mit Code-Anzeige)
window.FRAGEN_EXTRA_CODE = [
  {
    f: 'Der Agent startet auf einem freien Feld. Wie weit ist er nach diesem Programm vom Startfeld entfernt?',
    code: [
      ['blau', 'bewege vorwärts um 4'],
      ['blau', 'bewege rückwärts um 1']
    ],
    a: ['3 Felder', '4 Felder', '5 Felder', '1 Feld'],
    r: 0,
    e: 'Erst 4 Felder vor, dann 1 zurück: 4 minus 1 = 3. Rückwärtsbewegungen musst du beim Nachverfolgen abziehen, nicht addieren.'
  },
  {
    f: 'Der Agent baut einen Teppich. Wie viele Wolle-Blöcke liegen am Ende im Boden?',
    code: [
      ['gruen', 'wiederhole 4 mal:'],
      ['braun', '   zerstöre unten'],
      ['braun', '   platziere unten [Wolle rot]'],
      ['blau', '   bewege vorwärts um 1']
    ],
    a: ['4', '1', '5', '8'],
    r: 0,
    e: 'Pro Durchlauf wird genau 1 Block getauscht: erst das Gras zerstören, dann Wolle platzieren. 4 Durchläufe ergeben einen Teppich aus 4 Blöcken.'
  },
  {
    f: 'Wie viele Felder legt der Agent mit diesem Programm insgesamt zurück?',
    code: [
      ['gruen', 'wiederhole 5 mal:'],
      ['blau', '   bewege vorwärts um 2']
    ],
    a: ['10 Felder', '5 Felder', '7 Felder', '2 Felder'],
    r: 0,
    e: 'Beliebte Falle! Die Schleife läuft 5-mal, aber pro Durchlauf geht der Agent 2 Felder: 5 mal 2 = 10. Immer Durchläufe mal Schrittweite rechnen.'
  },
  {
    f: 'Auf dem dritten Feld vor dem Agenten steht eine Mauer. Wo steht der Agent nach diesem Programm? (Er kann nicht durch Blöcke laufen!)',
    code: [
      ['gruen', 'wiederhole 5 mal:'],
      ['blau', '   bewege vorwärts um 1']
    ],
    a: ['2 Felder weiter, direkt vor der Mauer', '5 Felder weiter, hinter der Mauer', 'Oben auf der Mauer', 'Wieder auf dem Startfeld'],
    r: 0,
    e: 'Der Agent schafft 2 Schritte, dann blockiert die Mauer. Die restlichen 3 Befehle laufen zwar noch, sind aber nur Rempler — er bleibt vor der Mauer stehen.'
  },
  {
    f: 'Der Agent schwebt über einer Brücke aus 8 Feldern, aber an 3 Stellen fehlt der Boden (Lücken). Wie viele Erde-Blöcke platziert er?',
    code: [
      ['gruen', 'wiederhole 8 mal:'],
      ['gruen', '   wenn nicht (erkennt Block unten) dann:'],
      ['braun', '      platziere unten [Erde]'],
      ['blau', '   bewege vorwärts um 1']
    ],
    a: ['3 — genau über den Lücken', '8 — auf jedem Feld', '5 — auf den festen Feldern', '0 — die Bedingung ist nie wahr'],
    r: 0,
    e: 'Durch das nicht wird nur platziert, wenn unten KEIN Block erkannt wird — also genau über den 3 Lücken. So repariert der Agent die Brücke, ohne den festen Boden anzurühren.'
  },
  {
    f: 'Der Agent steht auf freier Fläche — vor ihm ist KEIN Block. Was passiert bei diesem Programm?',
    code: [
      ['gruen', 'wiederhole solange (erkennt Block vorne):'],
      ['braun', '   zerstöre vorne'],
      ['blau', '   bewege vorwärts um 1']
    ],
    a: ['Nichts — die Bedingung ist sofort falsch, die Schleife läuft kein einziges Mal', 'Der Agent läuft endlos geradeaus', 'Der Agent zerstört genau einen Block', 'Der Agent läuft, bis er einen Block findet'],
    r: 0,
    e: 'Wiederhole solange läuft nur, SOLANGE die Bedingung wahr ist — hier also nur, wenn vorne ein Block steht. Nicht mit wiederhole bis verwechseln, das genau andersherum funktioniert!'
  },
  {
    f: 'Wie viele Felder fliegt der Agent mit diesem Programm nach oben?',
    code: [
      ['lila', 'setze x auf 3'],
      ['lila', 'ändere x um 2'],
      ['gruen', 'wiederhole x mal:'],
      ['blau', '   bewege hoch um 1']
    ],
    a: ['5', '3', '2', '6'],
    r: 0,
    e: 'Erst wird x auf 3 gesetzt, dann um 2 erhöht — x ist also 5, bevor die Schleife startet. Ändere um addiert zum alten Wert, es ersetzt ihn nicht.'
  },
  {
    f: 'Der Agent schwebt direkt über dem Gras und soll einen Turm bauen. Was ist das Ergebnis?',
    code: [
      ['blau', 'bewege hoch um 2'],
      ['gruen', 'wiederhole 3 mal:'],
      ['braun', '   platziere unten [Stein]'],
      ['blau', '   bewege hoch um 1']
    ],
    a: ['Ein Turm aus 3 Blöcken, der in der Luft schwebt — mit Lücke zum Boden', 'Ein Turm aus 3 Blöcken, der fest auf dem Boden steht', 'Nur 1 Block, der Rest schlägt fehl', 'Ein Turm aus 5 Blöcken bis zum Boden'],
    r: 0,
    e: 'Der Agent fliegt ZUERST 2 Felder hoch und platziert erst dann — der unterste Block hängt also über dem Boden, und dazwischen bleibt eine Lücke. Reihenfolge ist alles: Wer am Boden anfangen will, muss vor dem Hochfliegen platzieren.'
  },
  {
    f: 'Wie viele Steinblöcke stehen am Ende insgesamt in der Welt?',
    code: [
      ['lila', 'Funktion Säule:'],
      ['braun', '   platziere vorne [Stein]'],
      ['blau', '   bewege hoch um 1'],
      ['braun', '   platziere vorne [Stein]'],
      ['blau', '   bewege runter um 1'],
      ['gruen', 'wiederhole 3 mal:'],
      ['lila', '   rufe Säule auf'],
      ['blau', '   bewege rückwärts um 2']
    ],
    a: ['6 — drei Säulen aus je 2 Blöcken', '2 — die Funktion läuft nur einmal', '3 — ein Block pro Durchlauf', '9 — drei Säulen aus je 3 Blöcken'],
    r: 0,
    e: 'Die Funktion Säule platziert pro Aufruf 2 Blöcke übereinander. Die Schleife ruft sie 3-mal auf: 3 mal 2 = 6. Der Agent weicht rückwärts aus, damit er nicht gegen seine eigene Säule rempelt.'
  },
  {
    f: 'Wie viele Blöcke platziert der Agent insgesamt — und welche Form entsteht von oben gesehen?',
    code: [
      ['blau', 'bewege hoch um 1'],
      ['gruen', 'wiederhole 4 mal:'],
      ['gruen', '   wiederhole 3 mal:'],
      ['braun', '      platziere unten [Stein]'],
      ['blau', '      bewege vorwärts um 1'],
      ['blau', '   drehe rechts']
    ],
    a: ['12 Blöcke — ein geschlossener quadratischer Rahmen', '7 Blöcke — eine abgeknickte Linie', '3 Blöcke — eine kurze Reihe', '16 Blöcke — ein ausgefülltes Quadrat'],
    r: 0,
    e: 'Verschachtelte Schleifen multiplizieren sich: Die innere legt 3 Blöcke pro Seite, die äußere wiederholt das 4-mal mit Drehung — 4 mal 3 = 12 Blöcke, die einen geschlossenen Rahmen bilden. Hochfliegen am Anfang sorgt dafür, dass die Blöcke sichtbar AUF dem Gras landen.'
  }
];

// Zusatzfragen Programmier-Wissen (ohne Code)
window.FRAGEN_EXTRA_PROG = [
  {
    f: 'Was macht ein Compiler?',
    a: ['Er übersetzt ein Programm in eine Sprache, die der Computer direkt ausführen kann', 'Er entfernt automatisch alle Fehler aus dem Programm', 'Er macht den Computer schneller', 'Er speichert Programme in der Cloud'],
    r: 0,
    e: 'Computer verstehen nur Maschinencode aus Nullen und Einsen. Der Compiler übersetzt den für Menschen lesbaren Programmtext in diese Maschinensprache — wie ein Dolmetscher zwischen dir und dem Prozessor.'
  },
  {
    f: 'Was bedeutet es, wenn Software Open Source ist?',
    a: ['Der Quellcode ist öffentlich — jeder darf ihn lesen, nutzen und verbessern', 'Die Software ist immer kostenlos und werbefrei', 'Die Software läuft nur im Internet-Browser', 'Die Software wurde von einer KI geschrieben'],
    r: 0,
    e: 'Open Source heißt offener Quellcode: Jeder kann nachschauen, wie das Programm funktioniert, und mithelfen, es besser zu machen. Bekannte Beispiele sind Linux, Firefox und Blockly — die Block-Bibliothek hinter MidCraft Studio.'
  },
  {
    f: 'Was ist ein Pixel?',
    a: ['Der kleinste Bildpunkt auf einem Bildschirm', 'Ein Speicherchip im Computer', 'Ein Programm zum Malen', 'Die Helligkeit eines Monitors'],
    r: 0,
    e: 'Jedes Bild auf dem Bildschirm besteht aus Millionen winziger Farbpunkte — den Pixeln. Je mehr Pixel, desto schärfer das Bild. Die Klötzchen-Optik von Minecraft-Texturen entsteht durch bewusst wenige Pixel, zum Beispiel 16 mal 16.'
  },
  {
    f: 'Wie speichert ein Computer Bilder und Musik?',
    a: ['Als lange Reihen von Zahlen — am Ende nur Nullen und Einsen', 'Als winzige Fotos und Tonaufnahmen auf dem Chip', 'Als Text in deutscher Sprache', 'Gar nicht — Bilder liegen immer im Internet'],
    r: 0,
    e: 'Für den Computer ist alles eine Zahl: Jeder Pixel bekommt Zahlen für seine Farbe, jeder Ton eine Zahl für seine Schwingung. Gespeichert wird alles als Bits — Nullen und Einsen.'
  },
  {
    f: 'Welche Aussage über WLAN stimmt?',
    a: ['WLAN ist nicht das Internet selbst, sondern nur die Funkverbindung zum Router', 'WLAN erzeugt das Internet direkt in deiner Wohnung', 'WLAN ist ein anderes Wort für Browser', 'Ohne WLAN kann ein Computer nie ins Internet'],
    r: 0,
    e: 'WLAN ist nur die letzte Funkstrecke zwischen deinem Gerät und dem Router. Der Router leitet die Daten dann über Kabel weiter ins eigentliche Internet — deshalb kann das WLAN top sein und das Internet trotzdem ausfallen.'
  },
  {
    f: 'Was ist eine Endlosschleife?',
    a: ['Eine Schleife, deren Abbruchbedingung nie eintritt — sie läuft ewig weiter', 'Eine Schleife, die genau 1000-mal läuft', 'Eine Schleife, die sich selbst löscht', 'Ein Kabel, das im Kreis verlegt ist'],
    r: 0,
    e: 'Wenn die Bedingung zum Aufhören niemals wahr wird, wiederholt sich die Schleife für immer — das Programm hängt fest. Deshalb prüfen Profis bei jeder Schleife: Kann sie sicher enden?'
  },
  {
    f: 'Was ist Pseudocode?',
    a: ['Ein Programmablauf in normaler Sprache aufgeschrieben — für Menschen, nicht für Computer', 'Geheimer Code, den nur Hacker lesen können', 'Programmcode mit absichtlich eingebauten Fehlern', 'Eine besonders schnelle Programmiersprache'],
    r: 0,
    e: 'Mit Pseudocode planst du dein Programm erst mal in Alltagssprache, etwa: Wiederhole 5-mal gehe vor und baue. Ein Computer kann das nicht ausführen — aber du kannst deine Idee prüfen, bevor du richtig programmierst.'
  },
  {
    f: 'Warum testen Programmierer ihre Programme immer wieder?',
    a: ['Weil sich Fehler leicht einschleichen — auch eine kleine Änderung kann woanders etwas kaputt machen', 'Weil Programme sich nach einiger Zeit von selbst verändern', 'Weil der Computer sonst den Code vergisst', 'Nur um die Zeit bis zum Feierabend zu füllen'],
    r: 0,
    e: 'Fehler, sogenannte Bugs, verstecken sich oft an unerwarteten Stellen. Deshalb wird nach jeder Änderung erneut getestet — so merkt man sofort, wenn etwas Altes plötzlich nicht mehr funktioniert.'
  },
  {
    f: 'Wie lernt eine KI mit maschinellem Lernen?',
    a: ['Sie erkennt Muster in sehr vielen Beispielen, statt feste Regeln einprogrammiert zu bekommen', 'Ein Mensch tippt ihr jede einzelne Antwort vorher ein', 'Sie liest heimlich die Gedanken der Nutzer', 'Sie würfelt zufällig und hat meistens Glück'],
    r: 0,
    e: 'Statt fester Wenn-Dann-Regeln bekommt die KI tausende Beispiele — etwa Katzenfotos — und findet die Muster selbst. Je mehr gute Beispiele, desto besser wird sie. Deshalb heißt es maschinelles LERNEN.'
  },
  {
    f: 'Wer gilt als erste Programmiererin der Geschichte?',
    a: ['Ada Lovelace — sie schrieb schon im 19. Jahrhundert ein Programm, lange vor dem ersten Computer', 'Marie Curie — sie programmierte Röntgengeräte', 'Angela Merkel — sie schrieb das erste Betriebssystem', 'Ada Lovelace lebte nie, sie ist eine Filmfigur'],
    r: 0,
    e: 'Ada Lovelace entwarf um 1843 ein Programm für die geplante Rechenmaschine von Charles Babbage — über 100 Jahre bevor es echte Computer gab. Nach ihr ist sogar eine Programmiersprache benannt: Ada.'
  }
];
