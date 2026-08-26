'use strict';

// Zusätzliche Minecraft-Fragen (Satz 2) für das MidCraft-Quiz.
// Richtige Antwort steht IMMER an Index 0 (r: 0) — das Quiz mischt die Antworten selbst.

window.FRAGEN_EXTRA_MC2 = [
  {
    f: 'Wie bekommt man in Minecraft Milch von einer Kuh?',
    a: ['Man melkt sie mit einem leeren Eimer', 'Man füttert sie mit Weizen', 'Man schlägt sie vorsichtig mit der Hand', 'Man stellt sie über Nacht in einen Stall'],
    r: 0,
    e: 'Ein Rechtsklick mit dem leeren Eimer auf die Kuh füllt ihn mit Milch. Aha-Fakt: Wer Milch trinkt, entfernt damit alle Statuseffekte — auch Vergiftungen!'
  },
  {
    f: 'Was kann passieren, wenn man ein Hühnerei wirft?',
    a: ['Mit etwas Glück schlüpft ein Küken', 'Es entsteht immer ein erwachsenes Huhn', 'Das Ei explodiert wie ein kleines TNT', 'Es verwandelt sich in eine Feder'],
    r: 0,
    e: 'Jedes geworfene Ei hat eine Chance von etwa 1 zu 8, ein Küken schlüpfen zu lassen. Hühner legen ihre Eier übrigens ganz von allein alle paar Minuten.'
  },
  {
    f: 'Was passiert mit den meisten Zombies, wenn die Sonne aufgeht?',
    a: ['Sie fangen Feuer und verbrennen', 'Sie werden schneller und stärker', 'Sie verwandeln sich in Dorfbewohner', 'Sie graben sich in den Boden ein'],
    r: 0,
    e: 'Zombies und Skelette brennen im direkten Sonnenlicht. Trägt ein Zombie aber einen Helm oder steht im Schatten oder Wasser, überlebt er den Tag.'
  },
  {
    f: 'Mit welcher Waffe greifen Skelette Spieler an?',
    a: ['Mit Pfeil und Bogen', 'Mit einem Schwert', 'Mit einem Dreizack', 'Mit geworfenen Knochen'],
    r: 0,
    e: 'Skelette sind Fernkämpfer und schießen mit dem Bogen. Mit etwas Glück lassen sie beim Besiegen sogar ihren Bogen fallen — manchmal sogar verzaubert.'
  },
  {
    f: 'Was können Spinnen, was die meisten anderen Monster nicht können?',
    a: ['Senkrechte Wände hochklettern', 'Unter Wasser atmen', 'Durch Türen gehen', 'Sich unsichtbar machen'],
    r: 0,
    e: 'Spinnen können senkrechte Flächen hochklettern. Bei ausreichend hellem Umgebungslicht sind sie neutral und greifen nur an, wenn sie bereits ein Ziel haben oder zuerst angegriffen werden — bloße Tageszeit allein garantiert das im Schatten nicht.'
  },
  {
    f: 'Womit kann man einen TNT-Block zünden?',
    a: ['Mit einem Feuerzeug oder einem Redstone-Signal', 'Nur mit einer Fackel', 'Indem man ihn mit der Faust schlägt', 'Mit einem Wassereimer'],
    r: 0,
    e: 'Feuerzeug, Redstone-Signal oder Feuer bringen TNT zum Zünden. Aha-Fakt: Untergetauchtes TNT zerstört normalerweise keine Blöcke, kann aber Kreaturen, fallengelassene Items und manche andere Entities beschädigen.'
  },
  {
    f: 'Woraus baut man ein Boot?',
    a: ['Aus 5 Holzbrettern', 'Aus 3 Eisenbarren', 'Aus 5 Stöcken', 'Aus 2 Holzbrettern und einem Segel'],
    r: 0,
    e: '5 Holzbretter in U-Form ergeben ein Boot. Aha-Fakt: Auf blauem Eis gleiten Boote rasend schnell — schneller als fast jedes andere Fortbewegungsmittel.'
  },
  {
    f: 'Was kann man beim Angeln außer Fischen noch aus dem Wasser ziehen?',
    a: ['Schätze wie verzauberte Bücher oder Sättel', 'Diamanten und Smaragde', 'Lebendige Delfine', 'Nichts, nur Fische'],
    r: 0,
    e: 'Mit Glück angelt man Schätze wie verzauberte Bücher, Sättel oder Namensschilder — aber auch Müll wie alte Stiefel. Die Verzauberung "Glück des Meeres" erhöht die Schatz-Chance.'
  },
  {
    f: 'Wie wachsen Kürbisse und Melonen in Minecraft?',
    a: ['Die Frucht erscheint auf einem freien Block neben dem Stängel', 'Sie wachsen direkt auf dem Stängel nach oben', 'Sie fallen von Bäumen herunter', 'Sie wachsen nur unter der Erde'],
    r: 0,
    e: 'Aus dem Stängel wächst die Frucht auf einen freien Nachbarblock. Aha-Fakt: Der Stängel bleibt beim Ernten stehen und trägt immer wieder neue Früchte.'
  },
  {
    f: 'Worauf können Kakteen wachsen?',
    a: ['Auf Sand, rotem Sand, verdächtigem Sand oder einem anderen Kaktus', 'Auf jedem Erdblock', 'Nur auf Stein', 'Auf Ackerboden'],
    r: 0,
    e: 'Kakteen lassen sich auf Sand, rotem Sand, verdächtigem Sand oder einem anderen Kaktus platzieren und brauchen seitlich Platz. Sie verletzen viele Wesen bei Berührung und zerstören Items, die mit ihnen kollidieren.'
  },
  {
    f: 'Was entsteht, wenn Wasser auf eine Lavaquelle fließt?',
    a: ['Obsidian', 'Glas', 'Sand', 'Netherrack'],
    r: 0,
    e: 'Wasser verwandelt eine Lavaquelle in Obsidian, einen der härtesten Blöcke im Spiel. Trifft Wasser dagegen nur auf fließende Lava, entsteht Bruchstein.'
  },
  {
    f: 'Was passiert mit einem Werkzeug, wenn man es lange benutzt?',
    a: ['Es verliert Haltbarkeit und geht irgendwann kaputt', 'Es wird mit der Zeit immer stärker', 'Es verwandelt sich in ein besseres Werkzeug', 'Nichts, Werkzeuge halten ewig'],
    r: 0,
    e: 'Jede Benutzung kostet Haltbarkeit, bis das Werkzeug zerbricht. Aha-Fakt: Goldwerkzeuge arbeiten am schnellsten, gehen aber auch am schnellsten kaputt.'
  },
  {
    f: 'Aus wie vielen Teilen besteht eine komplette Rüstung?',
    a: ['4 — Helm, Brustpanzer, Hose und Stiefel', '3 — Helm, Brustpanzer und Stiefel', '5 — inklusive Handschuhen', '2 — Brustpanzer und Helm'],
    r: 0,
    e: 'Eine volle Rüstung hat vier Teile: Helm, Brustpanzer, Hose und Stiefel. Der Brustpanzer schützt dabei am meisten und kostet auch die meisten Barren.'
  },
  {
    f: 'Was braucht man, um einen Schild zu craften?',
    a: ['6 Holzbretter und 1 Eisenbarren', '6 Eisenbarren und 1 Holzbrett', '9 Holzbretter', '4 Lederstücke und 2 Stöcke'],
    r: 0,
    e: 'Der Schild besteht aus 6 Holzbrettern und einem Eisenbarren und blockt Angriffe, solange man die rechte Maustaste gedrückt hält. Aha-Fakt: Man kann ihn mit einem Banner verzieren.'
  },
  {
    f: 'Was braucht man in der Java Edition, um eine Karte zu craften?',
    a: ['8 Papier und 1 Kompass', '9 Papier', '4 Papier und 1 Feder', '1 Buch und 1 Kompass'],
    r: 0,
    e: 'Ein Kompass umringt von 8 Papier ergibt eine leere Karte. Aha-Fakt: An einem Kartentisch kann man die Karte später vergrößern, sodass sie viel mehr Land zeigt.'
  },
  {
    f: 'Wohin zeigt die Nadel eines normalen Kompasses?',
    a: ['Zum Weltspawnpunkt', 'Zum eigenen Bett', 'Immer nach Norden', 'Zum nächsten Dorf'],
    r: 0,
    e: 'Der Kompass zeigt zum aktuellen Weltspawnpunkt — nicht zum persönlichen Bett! In Nether und Ende dreht sich die Nadel ohne Bindung an einen Leitstein nur wild im Kreis.'
  },
  {
    f: 'Wie sammelt man Honig, ohne die Bienen wütend zu machen?',
    a: ['Ein Lagerfeuer unter das Nest stellen und dann die Glasflasche benutzen', 'Das Nest einfach mit der Axt abschlagen', 'Die Bienen vorher mit Wasser nass machen', 'Honig kann man nur nachts sammeln'],
    r: 0,
    e: 'Der Rauch eines Lagerfeuers unter dem Nest beruhigt die Bienen — dann kann man gefahrlos mit der Glasflasche Honig zapfen. Ohne Rauch greift der ganze Schwarm an!'
  },
  {
    f: 'Wie transportiert man ein Axolotl am einfachsten?',
    a: ['Man fängt es mit einem Wassereimer ein', 'Man lockt es mit Knochen an', 'Man setzt es auf eine Leine an Land', 'Man trägt es einfach in der Hand'],
    r: 0,
    e: 'Axolotl lassen sich wie Fische mit einem Wassereimer einfangen und mitnehmen. Aha-Fakt: Im Kampf stellen sie sich manchmal tot, um sich heimlich zu heilen.'
  },
  {
    f: 'Was fressen Pandas am liebsten?',
    a: ['Bambus', 'Weizen', 'Kekse', 'Fleisch'],
    r: 0,
    e: 'Pandas leben im Dschungel und lieben Bambus. Aha-Fakt: Ganz selten wird ein braunes Panda-Baby geboren — eine der seltensten Kreaturen im Spiel.'
  },
  {
    f: 'Warum darf man Papageien niemals Kekse füttern?',
    a: ['Kekse sind für sie giftig — der Papagei stirbt sofort', 'Sie werden davon aggressiv', 'Sie können danach nicht mehr fliegen', 'Sie verwandeln sich in Hühner'],
    r: 0,
    e: 'Kekse enthalten Kakao, und Schokolade ist für echte Papageien giftig — Mojang hat das absichtlich ins Spiel eingebaut. Zähmen kann man Papageien stattdessen mit Samen.'
  },
  {
    f: 'Wie baut man einen Schneegolem?',
    a: ['2 Schneeblöcke übereinander, geschnitzter Kürbis obendrauf', '4 Schneeblöcke in T-Form mit Kürbis', '3 Schneebälle auf einen Eisblock werfen', '2 Eisblöcke mit einer Fackel obendrauf'],
    r: 0,
    e: 'Zwei Schneeblöcke übereinander plus ein geschnitzter Kürbis als Kopf — fertig ist der Schneegolem. Er bewirft Monster mit Schneebällen und hinterlässt eine Schneespur.'
  },
  {
    f: 'Wie baut man selbst einen Eisengolem?',
    a: ['4 Eisenblöcke in T-Form, geschnitzter Kürbis als Kopf', '4 Eisenblöcke im Quadrat mit einer Fackel', '9 Eisenbarren auf einer Werkbank', '2 Eisenblöcke übereinander mit Kürbis'],
    r: 0,
    e: 'Vier Eisenblöcke in T-Form und ein geschnitzter Kürbis als Kopf erwecken den Golem zum Leben. Aha-Fakt: Selbst gebaute Eisengolems greifen ihren Erbauer niemals an.'
  },
  {
    f: 'Wie kann man in der aktuellen Java Edition einen Sattel craften?',
    a: ['Aus 3 Lederstücken und 1 Eisenbarren', 'Aus 5 Lederstücken und 2 Eisenbarren', 'Aus 3 Lederstücken ohne weitere Zutat', 'Sättel lassen sich nicht craften'],
    r: 0,
    e: 'Seit Java Edition 1.21.6 lassen sich Sättel aus 3 Lederstücken und 1 Eisenbarren craften. Einige ältere Fundorte enthalten stattdessen Leder; weitere Sättel bekommt man unter anderem durch Handeln oder von bereits gesattelten Kreaturen.'
  },
  {
    f: 'Wofür benutzt man ein Leitseil (Leine)?',
    a: ['Um Tiere anzubinden und hinter sich herzuführen', 'Um schneller zu klettern', 'Um Monster zu fangen', 'Um Gegenstände aus der Ferne aufzuheben'],
    r: 0,
    e: 'Mit dem Leitseil führt man geeignete Kreaturen mit sich. Seit Java Edition 1.21.6 werden 2 Leinen aus insgesamt 5 Fäden hergestellt; der frühere Schleimball ist nicht mehr nötig. Eine Leine kann außerdem an einem Zaun festgeknotet werden.'
  }
];

window.FRAGEN_EXTRA_MCPRO2 = [
  {
    f: 'Was bewirkt die Verzauberung "Fluch des Verschwindens" auf einem Gegenstand?',
    a: ['Der Gegenstand wird beim Tod des Spielers zerstört, statt zu droppen', 'Der Gegenstand wird nach 10 Minuten unsichtbar', 'Der Gegenstand verliert doppelt so schnell Haltbarkeit', 'Der Gegenstand kann nicht mehr fallen gelassen werden'],
    r: 0,
    e: 'Stirbt man, löst sich das verfluchte Item in Luft auf — niemand kann es einsammeln. Sein Gegenstück, der "Fluch der Bindung", verhindert dagegen das Ablegen von Rüstung.'
  },
  {
    f: 'Was ist das Besondere am Inventar einer Endertruhe?',
    a: ['Jeder Spieler sieht sein eigenes Inventar — an jeder Endertruhe der Welt dasselbe', 'Sie hat doppelt so viele Slots wie eine normale Truhe', 'Alle Spieler teilen sich gemeinsam ein Inventar', 'Items darin werden automatisch sortiert'],
    r: 0,
    e: 'Alle Endertruhen greifen auf dasselbe persönliche Inventar zu — perfekt als tragbarer Tresor. Aha-Fakt: Ohne Behutsamkeit droppt eine abgebaute Endertruhe nur 8 Obsidian.'
  },
  {
    f: 'Was macht Shulker-Boxen so besonders wertvoll?',
    a: ['Sie behalten ihren Inhalt, wenn man sie abbaut', 'Sie haben unendlich viele Slots', 'Sie können nicht durch Explosionen zerstört werden', 'Sie sammeln Items in der Nähe automatisch ein'],
    r: 0,
    e: 'Eine abgebaute Shulker-Box behält alle Items und landet als volles Paket im Inventar. Gecraftet wird sie aus einer Truhe und zwei Shulker-Schalen aus dem Ende.'
  },
  {
    f: 'Wie stark ist das maximale Redstone-Signal?',
    a: ['Stärke 15', 'Stärke 10', 'Stärke 20', 'Stärke 64'],
    r: 0,
    e: 'Ein Redstone-Signal startet mit Stärke 15 und verliert pro Block Kabel eine Stufe. Aha-Fakt: Ein Verstärker (Repeater) frischt das Signal wieder auf volle 15 auf.'
  },
  {
    f: 'Was macht ein Beobachter (Observer)?',
    a: ['Er erkennt Blockveränderungen vor seinem Gesicht und sendet einen kurzen Redstone-Impuls', 'Er speichert Redstone-Signale wie eine Batterie', 'Er sieht Spieler und meldet sie an Redstone-Lampen', 'Er verdoppelt die Stärke eines Redstone-Signals'],
    r: 0,
    e: 'Der Beobachter feuert einen kurzen Impuls aus seiner Rückseite, sobald sich der Block vor seinem "Gesicht" verändert. Damit baut man z.B. vollautomatische Farmen, die Ernten sofort bemerken.'
  },
  {
    f: 'Was passiert, wenn ein Trichter (Hopper) ein Redstone-Signal erhält?',
    a: ['Er wird gesperrt und transportiert keine Items mehr', 'Er transportiert Items doppelt so schnell', 'Er wirft alle Items aus', 'Er zieht Items aus größerer Entfernung an'],
    r: 0,
    e: 'Ein Redstone-Signal sperrt den Trichter komplett. Ein ungesperrter Trichter überträgt in Java pro Transferrichtung normalerweise 1 Item je 0,4 Sekunden; Ziehen und Weitergeben können dabei beide stattfinden.'
  },
  {
    f: 'Was ist der wichtigste Unterschied zwischen Schleimblock und Honigblock bei Kolben-Maschinen?',
    a: ['Sie kleben beide an Blöcken, aber nicht aneinander', 'Der Honigblock kann keine Blöcke mitziehen', 'Der Schleimblock schmilzt in der Nähe von Lava', 'Es gibt keinen Unterschied'],
    r: 0,
    e: 'Beide ziehen benachbarte Blöcke mit, wenn ein Kolben sie bewegt — aber Schleim und Honig haften nie aneinander. Genau dieser Trick ermöglicht komplexe Flugmaschinen mit zwei getrennten Hälften.'
  },
  {
    f: 'Welchen Mob findet man in einer Netherfestung, aber nicht in einer Piglin-Bastion?',
    a: ['Blazes', 'Hoglins', 'Piglin-Barbaren', 'Plünderer'],
    r: 0,
    e: 'Blaze-Spawner gibt es nur in Netherfestungen — dort holt man sich die Blazeruten für Enderaugen. Bastionen gehören dagegen den Piglins und Hoglins und sind voller Gold.'
  },
  {
    f: 'Wie funktioniert der Tauschhandel mit Piglins?',
    a: ['Man wirft ihnen einen Goldbarren zu und erhält dafür ein zufälliges Item', 'Man öffnet per Rechtsklick ein Handelsmenü wie bei Dorfbewohnern', 'Man legt Gold in eine Truhe neben ihnen', 'Man tauscht Smaragde gegen Netherit'],
    r: 0,
    e: 'Ein zugeworfener oder überreichter Goldbarren wird einige Sekunden begutachtet, dann wirft der Piglin ein zufälliges Item zurück — mit Glück sogar Enderperlen. Erwachsene gewöhnliche Piglins sind Spielern ohne Goldrüstung gegenüber feindlich; Piglin-Barbaren greifen unabhängig von der Rüstung an, Baby-Piglins dagegen nicht.'
  },
  {
    f: 'Was passiert, wenn man sich mit einer Enderperle teleportiert?',
    a: ['Man erhält beim Ankommen 5 Punkte Basisschaden (2,5 Herzen), bevor Schutzwirkungen berücksichtigt werden', 'Man teleportiert sich völlig ohne Nachteil', 'Man wird für 5 Sekunden unsichtbar', 'Man verliert eine Erfahrungsstufe'],
    r: 0,
    e: 'Die Teleportation verursacht unabhängig von der Strecke 5 Punkte Basisschaden. Verzauberungen wie Schutz oder Federfall und andere Schutzwirkungen können den tatsächlich verlorenen Schaden verringern.'
  },
  {
    f: 'Was bewirkt das Essen einer Chorusfrucht?',
    a: ['Man wird zufällig bis zu 8 Blöcke weit wegteleportiert', 'Man kann kurz in der Luft schweben', 'Man sieht 30 Sekunden im Dunkeln', 'Man wird sofort satt'],
    r: 0,
    e: 'Die Frucht aus dem Ende füllt etwas Hunger und teleportiert einen zufällig in die Umgebung — ähnlich wie ein Enderman. Praktisch, um sich aus eingeschlossenen Höhlen zu befreien!'
  },
  {
    f: 'Welchen dieser Effekte kann ein Leuchtfeuer (Beacon) an Spieler verteilen?',
    a: ['Eile — schnelleres Abbauen von Blöcken', 'Feuerresistenz', 'Unsichtbarkeit', 'Nachtsicht'],
    r: 0,
    e: 'Leuchtfeuer bieten Geschwindigkeit, Eile, Resistenz, Sprungkraft und Stärke — bei voller Pyramide zusätzlich Regeneration. Feuerresistenz oder Unsichtbarkeit gibt es nur als Trank.'
  },
  {
    f: 'Welche Zutat verwandelt eine Wasserflasche im Braustand in die Basis für fast alle Tränke?',
    a: ['Die Netherwarze', 'Redstone-Staub', 'Zucker', 'Eine Spinnenauge'],
    r: 0,
    e: 'Die Netherwarze erzeugt den "Seltsamen Trank", die Grundlage fast aller Tränke. Ohne den Ausflug in den Nether bleibt die Braukunst also verschlossen.'
  },
  {
    f: 'Mit welcher Zutat braut man einen Trank der Feuerresistenz?',
    a: ['Mit Magmacreme', 'Mit einer Blazerute', 'Mit Obsidianstaub', 'Mit einem Eisblock'],
    r: 0,
    e: 'Magmacreme auf einen Seltsamen Trank ergibt Feuerresistenz — damit kann man sogar in Lava baden. Die Creme droppen Magmawürfel, oder man craftet sie aus Blazestaub und Schleimball.'
  },
  {
    f: 'Wie sammelt man Drachenatem?',
    a: ['Mit einer Glasflasche aus den lila Wolken des Drachenangriffs', 'Man fängt ihn mit einem leeren Eimer', 'Der Drache droppt ihn beim Tod', 'Man kratzt ihn mit einer Schere vom Endstein'],
    r: 0,
    e: 'Spuckt der Enderdrache seine lila Säurewolke, hält man einfach eine Glasflasche hinein. Drachenatem braucht man für Verweiltränke, die als Wolke am Boden wirken.'
  },
  {
    f: 'Wo funktioniert der Respawn-Anker als Wiedereinstiegspunkt?',
    a: ['Nur im Nether — in der Oberwelt explodiert er beim Benutzen', 'In jeder Dimension', 'Nur in der Oberwelt', 'Nur im Ende'],
    r: 0,
    e: 'Der Respawn-Anker ist das Nether-Gegenstück zum Bett und wird mit Leuchtstein aufgeladen — bis zu 4 Ladungen. In Oberwelt und Ende explodiert er beim Versuch, den Spawnpunkt zu setzen, ähnlich wie ein Bett in Nether und Ende.'
  },
  {
    f: 'Was passiert, wenn man einen Kompass an einem Leitstein (Lodestone) benutzt?',
    a: ['Der Kompass zeigt auf diesen Leitstein, solange beide in derselben Dimension sind und der Leitstein existiert', 'Der Kompass zeigt zum nächsten Netherportal', 'Der Leitstein wird zum neuen Weltspawn', 'Der Kompass wird zerstört'],
    r: 0,
    e: 'Ein Rechtsklick verbindet den Kompass mit dem Leitstein. Er zeigt in jeder Dimension zuverlässig dorthin, solange Kompass und Leitstein in derselben Dimension sind und der Leitstein noch existiert. Seit Java Edition 1.21.5 wird der Leitstein aus 1 Eisenbarren und 8 gemeißelten Steinziegeln hergestellt.'
  },
  {
    f: 'Was tut ein Sculk-Katalysator, wenn in seiner Nähe ein Mob stirbt, der Erfahrung fallen lassen würde?',
    a: ['Er absorbiert die Erfahrung und breitet Sculk auf den umliegenden Blöcken aus', 'Er belebt den Mob als Sculk-Version wieder', 'Er ruft den Warden herbei', 'Er erzeugt einen Redstone-Impuls der Stärke 15'],
    r: 0,
    e: 'Der Katalysator "blüht" auf, schluckt die XP des toten Mobs und überzieht die Umgebung mit Sculk. So kann man den Deep-Dark-Bewuchs sogar in die eigene Basis holen.'
  },
  {
    f: 'Was bewirkt die Dreizack-Verzauberung "Kanalisierung" (Channeling)?',
    a: ['Bei Gewitter schlägt ein Blitz in getroffene Ziele ein', 'Der Dreizack kehrt automatisch zurück', 'Der Dreizack zieht den Werfer mit sich', 'Der Dreizack macht unter Wasser doppelten Schaden'],
    r: 0,
    e: 'Trifft der geworfene Dreizack bei Gewitter ein Ziel unter freiem Himmel, fährt ein Blitz herab. So verwandelt man Creeper gezielt in geladene Creeper, mit denen sich bestimmte Mob-Köpfe erzeugen lassen.'
  },
  {
    f: 'Wie kann man dem Laserangriff eines Wächters (Guardian) entgehen?',
    a: ['Die Sichtlinie unterbrechen, bevor der Laser fertig aufgeladen ist', 'Schnell wegschwimmen, wenn der Laser abgefeuert wurde', 'Einen Schild in Laserrichtung halten', 'Unsichtbarkeitstrank trinken — der Laser trifft trotzdem nie'],
    r: 0,
    e: 'Der Laser lädt sich einige Sekunden sichtbar auf. Unterbricht man die Sichtlinie rechtzeitig mit einem festen Block, wird der Angriff abgebrochen; ein Schild allein blockiert den Strahl nicht.'
  },
  {
    f: 'Wodurch kann in einem Dorf auf natürliche Weise ein Eisengolem entstehen?',
    a: ['Dorfbewohner beschwören ihn selbst, etwa wenn sie vor Monstern in Panik geraten', 'Er spawnt automatisch, sobald das Dorf 10 Häuser hat', 'Ein Spieler muss zuerst mit allen Dorfbewohnern handeln', 'Er entsteht aus Eisenerz, das im Dorf vergraben liegt'],
    r: 0,
    e: 'In der Java Edition rufen die Dorfbewohner ihren Beschützer selbst herbei, zum Beispiel wenn sie vor Zombies in Panik geraten. Diese Mechanik nutzen Spieler für riesige automatische Eisenfarmen.'
  },
  {
    f: 'Wie startet man einen Überfall (Raid) auf ein Dorf?',
    a: ['Mit dem Statuseffekt "Böses Omen" ein Dorf betreten', 'Nachts eine Glocke im Dorf läuten', '10 Dorfbewohner hintereinander schubsen', 'Ein Banner in der Dorfmitte platzieren'],
    r: 0,
    e: 'Seit Version 1.21 erhält man "Böses Omen" durch das Trinken einer unheilvollen Flasche. Beim Betreten eines Dorfes wird daraus zunächst für 30 Sekunden "Überfall-Omen"; läuft dieser Effekt ab, beginnen die Angriffswellen. Milch kann den Effekt vorher entfernen.'
  },
  {
    f: 'Was passiert im Hardcore-Modus, wenn der Spieler stirbt?',
    a: ['Er kann die Welt nur noch im Zuschauermodus betrachten — kein Respawn', 'Er verliert nur sein gesamtes Inventar', 'Er startet in einem zufälligen neuen Biom', 'Die Welt wird automatisch gelöscht, ohne Nachfrage'],
    r: 0,
    e: 'Im Hardcore-Modus gibt es genau ein Leben; nach dem Tod bleibt nur der Zuschauermodus. Der Schwierigkeitsgrad ist dauerhaft auf "Schwer" festgenagelt, und die Herzen haben ein eigenes Design.'
  },
  {
    f: 'Welchen Schatz findet man ausschließlich in Truhen der Antiken Stätte im Deep Dark?',
    a: ['Die Verzauberung "Huschen" (Swift Sneak)', 'Elytra-Flügel', 'Ein Drachenei', 'Netherit-Rüstung'],
    r: 0,
    e: '"Huschen" lässt einen beim Schleichen fast normal schnell laufen — überlebenswichtig in der Nähe des Wardens. Außerdem gibt es dort Echoscherben für den Bergungskompass, der zum letzten Todesort zeigt.'
  }
];
