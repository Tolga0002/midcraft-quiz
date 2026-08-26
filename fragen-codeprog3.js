'use strict';

// Zusatzfragen Programmcode erraten — dritte Welle
window.FRAGEN_EXTRA_CODE3 = [
  {
    f: 'Der Agent steht vor einem Block. Was passiert?',
    code: [
      ['gruen', 'wenn (erkennt Block vorne) dann:'],
      ['braun', '   zerstöre vorne'],
      ['gruen', 'ansonsten:'],
      ['blau', '   bewege vorwärts um 1']
    ],
    a: ['Er zerstört den Block und bleibt auf seinem Feld', 'Er läuft durch den Block hindurch', 'Er dreht sich um und läuft zurück', 'Er platziert einen zweiten Block davor'],
    r: 0,
    e: 'Weil vorne ein Block erkannt wird, läuft nur der dann-Zweig. Der Agent zerstört den Block; der ansonsten-Zweig wird in diesem Durchlauf nicht ausgeführt.'
  },
  {
    f: 'Wo steht der Agent nach diesem Programm?',
    code: [
      ['gruen', 'wiederhole 4 mal:'],
      ['blau', '   bewege vorwärts um 2'],
      ['blau', '   drehe rechts']
    ],
    a: ['Wieder am Startfeld, aber er schaut in die ursprüngliche Richtung', '8 Felder vor dem Start', '2 Felder rechts vom Start', 'Er steht am Start, schaut aber nach hinten'],
    r: 0,
    e: 'Jede Runde geht er zwei Felder und dreht 90 Grad. Vier gleiche Seiten ergeben ein Quadrat: Er landet am Start und hat sich insgesamt um 360 Grad gedreht.'
  },
  {
    f: 'Welchen Wert hat die Variable punkte am Ende?',
    code: [
      ['lila', 'setze punkte auf 1'],
      ['gruen', 'wiederhole 3 mal:'],
      ['lila', '   ändere punkte um punkte']
    ],
    a: ['8 — aus 1 wird 2, dann 4, dann 8', '4 — die Schleife zählt bis 3', '6 — dreimal wird 1 addiert', '1 — die Variable wird nicht verändert'],
    r: 0,
    e: '„Ändere punkte um punkte“ verdoppelt den aktuellen Wert: 1 → 2 → 4 → 8. Der Wert rechts wird jedes Mal neu aus der Variable gelesen.'
  },
  {
    f: 'Was baut dieses Programm?',
    code: [
      ['gruen', 'wiederhole 3 mal:'],
      ['braun', '   platziere unten Stein'],
      ['blau', '   bewege hoch um 1'],
      ['blau', 'drehe rechts'],
      ['gruen', 'wiederhole 3 mal:'],
      ['braun', '   platziere unten Stein'],
      ['blau', '   bewege hoch um 1']
    ],
    a: ['Zwei Säulen mit je 3 Steinen, die in einer Ecke stehen', 'Eine einzige Säule mit 6 Steinen', 'Eine flache Reihe aus 6 Steinen', 'Gar nichts, weil die zweite Schleife verschachtelt ist'],
    r: 0,
    e: 'Die erste Schleife baut drei Steine und dreht danach rechts. Die zweite baut an der neuen Position weitere drei Steine. Weil die Drehung außerhalb der ersten Schleife steht, entsteht keine Drehung nach jeder Stufe.'
  },
  {
    f: 'Was geschieht in jeder Runde?',
    code: [
      ['lila', 'setze zähler auf 0'],
      ['gruen', 'wiederhole solange (zähler < 3):'],
      ['lila', '   ändere zähler um 1'],
      ['braun', '   platziere vorne Stein']
    ],
    a: ['Der Agent erhöht den Zähler und platziert insgesamt 3 Steine', 'Die Schleife läuft endlos, weil zähler nie geändert wird', 'Er platziert 4 Steine, weil 3 ebenfalls noch kleiner als 4 ist', 'Er platziert keinen Stein, weil zähler am Anfang unbekannt ist'],
    r: 0,
    e: 'Angenommen, zähler startet bei 0: Die Schleife läuft für 0, 1 und 2. In jeder Runde wird zuerst erhöht und dann platziert. Bei 3 ist die Bedingung falsch — insgesamt entstehen 3 Platzier-Versuche.'
  },
  {
    f: 'Warum wird hier kein Block auf dem Startfeld platziert?',
    code: [
      ['blau', 'bewege vorwärts um 1'],
      ['braun', 'platziere unten Stein'],
      ['blau', 'bewege vorwärts um 1']
    ],
    a: ['Der Agent läuft zuerst weg und platziert dann unter dem neuen Feld', '„Platziere unten“ funktioniert nur in Schleifen', 'Der erste Schritt wird automatisch rückgängig gemacht', 'Der Stein wird unter dem zweiten Feld platziert, weil der letzte Befehl zählt'],
    r: 0,
    e: 'Befehle werden streng von oben nach unten ausgeführt. Beim Platzieren steht der Agent bereits ein Feld weiter — genau dort landet der Stein.'
  },
  {
    f: 'Was passiert, wenn der Block vor dem Agenten bereits vorhanden ist?',
    code: [
      ['gruen', 'wiederhole 5 mal:'],
      ['braun', '   platziere vorne Erde'],
      ['blau', '   bewege vorwärts um 1']
    ],
    a: ['Der erste Platzierbefehl verpufft, danach läuft der Agent an dem vorhandenen Block nicht vorbei', 'Der Agent ersetzt den Block und läuft 5 Felder', 'Das Programm bricht sofort mit einer Fehlermeldung ab', 'Er platziert fünf Blöcke übereinander'],
    r: 0,
    e: 'Ein bereits belegtes Feld wird nicht ersetzt. Der Platzierbefehl bewirkt nichts, und der anschließende Vorwärts-Befehl rempelt gegen den Block. In den weiteren Runden wiederholt sich das.'
  },
  {
    f: 'Wie viele Blöcke liegen am Ende unter dem Agenten?',
    code: [
      ['gruen', 'wiederhole 2 mal:'],
      ['braun', '   platziere unten Stein'],
      ['blau', '   bewege hoch um 1'],
      ['gruen', 'wiederhole 2 mal:'],
      ['braun', '   platziere unten Stein'],
      ['blau', '   bewege hoch um 1']
    ],
    a: ['4 Blöcke in einer senkrechten Säule', '2 Blöcke, weil die Schleifen gleich heißen', '8 Blöcke, weil zwei Schleifen multipliziert werden', '3 Blöcke, weil der letzte Schritt keinen Block setzt'],
    r: 0,
    e: 'Beide Schleifen laufen nacheinander, nicht ineinander. Jede setzt zwei Blöcke und steigt danach zweimal hoch. Zusammen sind es 2 + 2 = 4 Blöcke.'
  },
  {
    f: 'Was ist der Unterschied zwischen den beiden Befehlsfolgen?',
    code: [
      ['lila', 'A: zerstöre vorne, bewege vorwärts um 1'],
      ['lila', 'B: bewege vorwärts um 1, zerstöre vorne']
    ],
    a: ['A entfernt den Block am Start und läuft dann vor; B läuft erst vor und entfernt den nächsten Block', 'Beide entfernen immer denselben Block', 'A läuft vor, ohne etwas zu zerstören; B bleibt stehen', 'B zerstört den Boden unter dem Agenten'],
    r: 0,
    e: 'In A wird der Block vor dem Startfeld zerstört. In B geht der Agent zuerst ein Feld weiter; „zerstöre vorne“ zielt danach auf den Block vor seiner neuen Position. Die Reihenfolge verändert also das Ziel.'
  },
  {
    f: 'Was macht der Agent insgesamt?',
    code: [
      ['gruen', 'wiederhole 4 mal:'],
      ['braun', '   platziere vorne Stein'],
      ['blau', '   bewege vorwärts um 1'],
      ['blau', 'drehe rechts']
    ],
    a: ['Er baut vier Blöcke und dreht nach jedem Block rechts', 'Er baut nur einen Block und dreht viermal am selben Ort', 'Er baut ein 4×4-Quadrat aus 16 Blöcken', 'Er läuft vier Felder geradeaus und dreht erst am Ende'],
    r: 0,
    e: 'Die Drehung steht innerhalb der äußeren Wiederholung und wird daher viermal ausgeführt. Pro Runde wird ein Block platziert und danach ein Feld weitergelaufen.'
  }
];

// Zusatzfragen Programmier-Wissen — dritte Welle
window.FRAGEN_EXTRA_PROG3 = [
  {
    f: 'Was ist eine Bedingung in einem Programm?',
    a: ['Eine Aussage, die entweder wahr oder falsch sein kann und einen Ablauf steuert', 'Ein Kommentar, den der Computer immer ausführt', 'Ein Speicherplatz für Bilder', 'Eine Schleife ohne Ende'],
    r: 0,
    e: 'Bedingungen liefern einen Wahrheitswert: wahr oder falsch. Mit ihnen entscheidet ein Programm zum Beispiel, ob es nach links oder rechts abbiegt.'
  },
  {
    f: 'Was ist der Unterschied zwischen „setze x auf 5“ und „ändere x um 5“?',
    a: ['„Setze“ ersetzt den alten Wert durch 5; „ändere“ addiert 5 zum aktuellen Wert', 'Beide Befehle machen immer dasselbe', '„Setze“ subtrahiert 5; „ändere“ setzt x auf 0', 'Nur „ändere“ kann mit Variablen arbeiten'],
    r: 0,
    e: 'Bei x = 3 wird „setze x auf 5“ zu x = 5, während „ändere x um 5“ x = 8 ergibt. Dieser kleine Unterschied ist bei Zählern besonders wichtig.'
  },
  {
    f: 'Was bedeutet es, wenn ein Programm deterministisch ist?',
    a: ['Bei gleichen Eingaben führt es nach denselben Regeln zum gleichen Ergebnis', 'Es funktioniert nur bei ausgeschaltetem Computer', 'Es enthält absichtlich viele Zufallszahlen', 'Es kann keine Entscheidungen treffen'],
    r: 0,
    e: 'Ein deterministisches Programm verhält sich bei gleichen Startbedingungen gleich. Zufall, Sensorwerte oder unterschiedliche Eingaben können dagegen zu verschiedenen Ergebnissen führen.'
  },
  {
    f: 'Was ist ein logischer Fehler?',
    a: ['Das Programm läuft, tut aber wegen einer falschen Idee nicht das Gewünschte', 'Ein Tippfehler, durch den der Code gar nicht gestartet werden kann', 'Ein kaputter Bildschirm', 'Ein Fehler, der nur beim Ausschalten auftritt'],
    r: 0,
    e: 'Bei einem logischen Fehler ist der Code oft gültig und startet. Die Anweisungen ergeben nur nicht die richtige Lösung — deshalb sind solche Fehler manchmal schwerer zu finden als Syntaxfehler.'
  },
  {
    f: 'Was macht ein Debugger?',
    a: ['Er hilft, ein Programm schrittweise auszuführen und Werte währenddessen zu untersuchen', 'Er übersetzt jede Webseite automatisch', 'Er löscht alle Variablen nach dem Start', 'Er erhöht die Internetgeschwindigkeit'],
    r: 0,
    e: 'Mit einem Debugger kann man an Haltepunkten anhalten, Variablen ansehen und den Ablauf Schritt für Schritt verfolgen. So findet man heraus, wo das tatsächliche Verhalten von der Idee abweicht.'
  },
  {
    f: 'Warum ist eine Funktion mit Parametern besonders nützlich?',
    a: ['Ein allgemeines Rezept kann mit unterschiedlichen Werten wiederverwendet werden', 'Sie kann nur einmal im gesamten Programm laufen', 'Sie verhindert automatisch jeden Programmierfehler', 'Sie speichert das Programm dauerhaft im Internet'],
    r: 0,
    e: 'Eine Funktion „baueTurm(höhe)“ kann zum Beispiel Türme mit verschiedenen Höhen bauen. Der Parameter macht aus einem festen Ablauf ein wiederverwendbares Werkzeug.'
  },
  {
    f: 'Was ist ein Eingabewert (Input)?',
    a: ['Eine Information, die ein Programm von außen erhält, bevor oder während es arbeitet', 'Das Ergebnis, das ein Programm am Ende ausgibt', 'Ein Fehler im Quellcode', 'Eine Datei, die immer gelöscht wird'],
    r: 0,
    e: 'Eingaben können Tastendrücke, Sensorwerte, Text, Zahlen oder Dateien sein. Ein Programm verarbeitet diese Informationen und erzeugt daraus oft eine Ausgabe.'
  },
  {
    f: 'Was bedeutet „testen mit Randfällen“?',
    a: ['Man prüft besondere Grenzsituationen wie 0, den kleinsten oder einen ungewöhnlich großen Wert', 'Man testet nur die Eingabe, die am wahrscheinlichsten ist', 'Man führt das Programm ausschließlich am Bildschirmrand aus', 'Man löscht alle Testdaten vor dem Start'],
    r: 0,
    e: 'Viele Fehler treten nicht beim normalen Beispiel, sondern bei Grenzwerten auf: einer leeren Liste, der Zahl 0 oder einem extrem großen Wert. Gute Tests prüfen genau diese Fälle.'
  },
  {
    f: 'Was ist der Zweck eines Kommentars im Quellcode?',
    a: ['Er erklärt den Code für Menschen und wird normalerweise nicht als Programmbefehl ausgeführt', 'Er macht das Programm automatisch schneller', 'Er ersetzt alle Variablen', 'Er verschlüsselt das Programm'],
    r: 0,
    e: 'Kommentare sind Notizen für Menschen. Sie können erklären, warum etwas so gelöst wurde, ohne den Ablauf des Programms zu verändern.'
  },
  {
    f: 'Was beschreibt Abstraktion beim Programmieren?',
    a: ['Komplizierte Einzelheiten werden hinter einer einfachen Oberfläche verborgen', 'Jede einzelne Codezeile muss doppelt geschrieben werden', 'Das Programm wird absichtlich unverständlich gemacht', 'Alle Daten werden in Bilder umgewandelt'],
    r: 0,
    e: 'Bei einer Funktion musst du nur wissen, was sie bewirkt und welche Eingaben sie braucht. Wie sie intern arbeitet, kann verborgen bleiben — genau das macht große Programme beherrschbar.'
  }
];
