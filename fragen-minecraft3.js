'use strict';

// Zusatzfragen Minecraft — sehr schwer / technische Java-Edition-Mechaniken
window.FRAGEN_EXTRA_MCPRO3 = [
  {
    f: 'Was gibt ein Redstone-Komparator im Subtraktionsmodus aus?',
    a: ['Die Stärke des hinteren Signals minus dem stärksten Seitensignal, mindestens 0', 'Immer die volle Signalstärke 15', 'Die Summe aller drei Eingangssignale', 'Nur das stärkste Seitensignal'],
    r: 0,
    e: 'Im Subtraktionsmodus rechnet der Komparator: hinteres Signal minus stärkeres der beiden Seitensignale. Ein negatives Ergebnis wird zu 0. Damit lassen sich zum Beispiel Schwellenwerte und analoge Redstone-Schaltungen bauen.'
  },
  {
    f: 'Was bezeichnet „Quasi-Konnektivität“ bei Redstone-Schaltungen in der Java Edition?',
    a: ['Ein Kolben, Spender oder Werfer kann durch eine Redstone-Aktualisierung von oben aktiviert werden, obwohl der Strom nicht direkt an ihm liegt', 'Redstone-Signale können diagonal durch Luft fließen', 'Zwei Redstone-Leitungen verbinden sich automatisch über Eck', 'Ein Komparator kann ein Signal verdoppeln'],
    r: 0,
    e: 'Bei bestimmten Blöcken wirkt eine Stromversorgung aus dem Blockraum direkt über ihnen — auch wenn dieser Block selbst nicht normal an den Zielblock angeschlossen ist. Oft braucht die Schaltung zusätzlich eine Block-Aktualisierung, damit der Kolben reagiert.'
  },
  {
    f: 'Unter welcher Bedingung können Schleime in einem Schleimchunk spawnen?',
    a: ['Unterhalb von Y=40, unabhängig vom Lichtlevel, sofern die übrigen Spawnbedingungen erfüllt sind', 'Nur bei Lichtlevel 0 unterhalb von Y=0', 'Über Y=40 bei Vollmond', 'Nur in Sümpfen und niemals unter der Erde'],
    r: 0,
    e: 'In der Java Edition können Schleime in dafür bestimmten Chunks unterhalb von Y=40 spawnen. Anders als gewöhnliche feindliche Mobs brauchen sie dort keine Dunkelheit. Der Seed und die Chunk-Koordinaten bestimmen, welche Chunks Schleimchunks sind.'
  },
  {
    f: 'Was passiert, wenn in der Nähe eines Spielers das natürliche Monsterlimit bereits erreicht ist?',
    a: ['Neue natürlich gespawnte Monster werden verhindert, ein Monster-Spawner kann aber weiterhin Kreaturen erzeugen', 'Alle vorhandenen Monster verschwinden sofort', 'Auch Monster-Spawner und Befehle können dann nichts mehr erzeugen', 'Das Spiel erhöht automatisch das Limit'],
    r: 0,
    e: 'Das natürliche Mob-Limit begrenzt die regulären Spawnversuche. Monster aus einem Spawner unterliegen diesem globalen natürlichen Limit nicht auf dieselbe Weise — deshalb funktionieren Spawnerfarmen auch dann, wenn die Umgebung viele natürliche Monster enthält.'
  },
  {
    f: 'Was beeinflusst die Spielregel „randomTickSpeed“?',
    a: ['Zufällige Blockticks wie Pflanzenwachstum, Laubabbau und Feuer — nicht direkt Redstone-Takte oder Mob-Spawns', 'Die Geschwindigkeit aller Redstone-Signale und jedes Mob-Spawns', 'Nur die Bildrate und Bewegungsgeschwindigkeit des Spielers', 'Ausschließlich die Tageslänge'],
    r: 0,
    e: 'Zufällige Blockticks bearbeiten bestimmte Blöcke stichprobenartig. Eine höhere Zahl lässt zum Beispiel Pflanzen schneller wachsen, macht aber keine Redstone-Uhr schneller und erhöht nicht automatisch die natürliche Mob-Spawnrate.'
  },
  {
    f: 'Warum werden Spawnplattformen für feindliche Mobs meist nicht weiter als 128 Blöcke vom Spieler entfernt gebaut?',
    a: ['Weil die meisten feindlichen Mobs außerhalb einer Distanz von 128 Blöcken vom Spieler despawnen', 'Weil Redstone ab 128 Blöcken nicht mehr funktioniert', 'Weil Chunks exakt 128 Blöcke breit sind', 'Weil Monster nur bis 128 Blöcke weit sehen können'],
    r: 0,
    e: 'Für die natürliche Mobfarm muss der Spieler nah genug bleiben, damit die Mobs nicht sofort aus der Welt entfernt werden. Zusätzlich dürfen die Plattformen nicht zu nah sein: Natürliche feindliche Mobs spawnen normalerweise nicht innerhalb von 24 Blöcken um einen Spieler.'
  },
  {
    f: 'Welche Aussage über den Schallangriff des Wardens stimmt?',
    a: ['Er kann durch Wände treffen und wird nicht von einem Schild blockiert', 'Er funktioniert nur, wenn der Warden den Spieler direkt sehen kann', 'Er verursacht nur Rückstoß, aber keinen Schaden', 'Er kann durch Wasser vollständig aufgehalten werden'],
    r: 0,
    e: 'Der Fernangriff des Wardens ist gerade deshalb gefährlich, weil Verstecken hinter einer Wand nicht genügt. Schleichen, Distanz und das Vermeiden von Vibrationen sind entscheidend — ein Schild ist gegen den Schallangriff kein zuverlässiger Schutz.'
  },
  {
    f: 'Wie kann man eine Vibration zuverlässig zu einem Sculk-Sensor hin abschirmen?',
    a: ['Indem man Wolle oder einen Wollteppich zwischen Quelle und Sensor platziert', 'Indem man Redstone-Staub auf den Sensor legt', 'Indem man Wasser zwischen Quelle und Sensor setzt', 'Indem man den Sensor mit Glas überbaut'],
    r: 0,
    e: 'Wolle dämpft Vibrationen und verhindert, dass sie den Sensor auf der anderen Seite erreichen. Das ist der Kern vieler Deep-Dark-Schaltungen: Ein Wollteppich kann sogar direkt unter einer laufenden Figur den erzeugten Schritt-Schall abschirmen.'
  },
  {
    f: 'Welche Besonderheit haben Trial-Spawner in einer Trial Chamber?',
    a: ['Die Mob-Kategorie eines Trial-Spawners wird pro Struktur festgelegt und bleibt dort gleich', 'Jeder Trial-Spawner wechselt bei jedem Start zufällig zwischen allen Mobs', 'Trial-Spawner funktionieren nur bei Nacht', 'Trial-Spawner erzeugen ausschließlich Zombies'],
    r: 0,
    e: 'Bei der Generierung der Trial Chamber wird für die jeweilige Trial-Spawner-Kategorie ein Mob festgelegt. Dadurch kann ein Spawner in einer Struktur zum Beispiel immer Bogenschützen erzeugen, während derselbe Spawner-Typ in einer anderen Struktur andere Gegner nutzt.'
  },
  {
    f: 'Was bedeutet es bei einem Vault in einer Trial Chamber, dass er „pro Spieler“ funktioniert?',
    a: ['Jeder Spieler kann denselben Vault einmal mit einem passenden Schlüssel öffnen; danach ist er nur für diesen Spieler gesperrt', 'Der Vault kann insgesamt nur einmal für die ganze Welt geöffnet werden', 'Nur der Spieler, der ihn zuerst sieht, darf ihn öffnen', 'Ein Vault kann beliebig oft von demselben Spieler geöffnet werden'],
    r: 0,
    e: 'Ein Vault speichert, welche Spieler ihn bereits geöffnet haben. So kann dieselbe Struktur einer Gruppe Beute geben, ohne dass der erste Spieler alle Belohnungen für die anderen wegnehmen kann. Für einen weiteren Versuch braucht derselbe Spieler einen anderen Vault.'
  },
  {
    f: 'Was benötigt ein vollständig aktivierter Conduit?',
    a: ['42 gültige Prismarinblöcke in einem Rahmen; dann reicht seine Wirkung bis zu 96 Blöcke weit', 'Einen Rahmen aus genau 16 Diamantblöcken mit einer Fackel', 'Eine massive 5×5×5-Kugel aus Seelensand', 'Nur Wasser direkt unter dem Conduit'],
    r: 0,
    e: 'Ein Conduit wird mit mindestens 16 gültigen Blöcken aktiviert. Die vollständige Rahmenstruktur umfasst 42 Blöcke aus Prismarinvarianten oder Seelaternen und vergrößert die Reichweite der Conduit-Kraft auf bis zu 96 Blöcke.'
  },
  {
    f: 'Was ist das entscheidende Prinzip hinter dem Smash-Angriff einer Keule?',
    a: ['Der Schaden steigt mit der Fallstrecke; bei einem erfolgreichen Treffer wird der daraus entstehende Fallschaden aufgehoben', 'Die Keule verursacht immer doppelten Schaden, sobald man springt', 'Der Angriff funktioniert nur unter Wasser', 'Die Fallhöhe spielt keine Rolle, nur die Haltbarkeit der Keule'],
    r: 0,
    e: 'Eine Keule belohnt einen Treffer aus dem Sturz: Je länger der Fall vor dem Einschlag, desto stärker der Smash-Angriff. Trifft er erfolgreich, nimmt der Spieler den Fallschaden dieses Angriffs nicht zusätzlich.'
  },
  {
    f: 'Wozu dient die Verzauberung „Windstoß“ (Wind Burst) auf einer Keule?',
    a: ['Sie schleudert den Angreifer nach einem erfolgreichen Smash-Treffer wieder nach oben', 'Sie lässt die Keule automatisch zum Spieler zurückfliegen', 'Sie macht jeden normalen Schwerthieb zu einem Fernangriff', 'Sie löscht den Fallschaden aller Spieler in der Umgebung'],
    r: 0,
    e: 'Windstoß erzeugt nach einem erfolgreichen Smash-Treffer eine Windexplosion, die den Spieler nach oben schleudert. Geübte Spieler können dadurch mehrere Smash-Angriffe hintereinander an verschiedenen Gegnern ausführen.'
  },
  {
    f: 'Wovon hängt es in der Java Edition ab, ob ein von einem Zombie getroffener Dorfbewohner zum Zombie-Dorfbewohner wird?',
    a: ['Vom Schwierigkeitsgrad: auf Einfach nie, auf Normal mit Zufall und auf Schwer garantiert', 'Nur davon, ob der Dorfbewohner einen Beruf hat', 'Von der Tageszeit: nachts immer, tagsüber nie', 'Vom verwendeten Werkzeug des Zombies'],
    r: 0,
    e: 'Auf Einfach sterben Dorfbewohner durch diesen Angriff, auf Normal besteht eine 50-Prozent-Chance auf Umwandlung, und auf Schwer ist die Umwandlung garantiert. Das macht den Schwierigkeitsgrad bei Zombifizierungs- und Heilungsfarmen entscheidend.'
  },
  {
    f: 'Wie verändert Plünderung III die Chance auf einen Witherskelettschädel?',
    a: ['Sie erhöht die Grundchance von 2,5 % um 3 Prozentpunkte auf 5,5 %', 'Sie macht den Schädel-Drop garantiert', 'Sie verdreifacht die Chance auf exakt 7,5 %', 'Sie wirkt bei Witherskeletten überhaupt nicht'],
    r: 0,
    e: 'Bei einem normalen Schwert beträgt die Grundchance 2,5 Prozent. Jede Stufe Plünderung fügt einen Prozentpunkt hinzu, also kommt Plünderung III auf 5,5 Prozent. Das ist eine Erhöhung, aber noch lange keine Garantie.'
  },
  {
    f: 'Was bewirkt „Aufspießen“ (Impaling) in der Java Edition?',
    a: ['Es erhöht den Schaden gegen aquatische Kreaturen, nicht gegen jedes Wesen, das nur im Wasser steht', 'Es erhöht den Schaden gegen alle Kreaturen, sobald es regnet', 'Es macht den Dreizack automatisch zu einem Blitzableiter', 'Es lässt den Dreizack unter Wasser schneller fliegen, verursacht aber keinen Zusatzschaden'],
    r: 0,
    e: 'In der Java Edition bezieht sich Aufspießen auf aquatische Kreaturen. Das ist ein wichtiger Editionsunterschied: Die Bedrock Edition behandelt die Bedingung anders und berücksichtigt Kreaturen, die Wasser oder Regen berühren.'
  },
  {
    f: 'Wie viele Blöcke kann ein Kolben in der Java Edition höchstens als zusammenhängende Gruppe bewegen?',
    a: ['12 Blöcke; wenn mehr bewegt werden müssten, bewegt sich die Gruppe nicht', '8 Blöcke; der zwölfte Block wird immer zerstört', '16 Blöcke, passend zur Breite eines Chunks', 'Unbegrenzt, solange die Blöcke aneinanderkleben'],
    r: 0,
    e: 'Ein Kolben kann höchstens 12 Blöcke bewegen. Schleim- und Honigblöcke können daraus große bewegte Gruppen bilden, aber sobald die Gesamtzahl der bewegbaren Blöcke das Limit überschreitet, scheitert die Bewegung.'
  },
  {
    f: 'Welcher Block erzeugt eine nach unten gerichtete Blasensäule?',
    a: ['Ein Magmablock', 'Seelensand', 'Ein Schwamm', 'Ein Felsblock mit Wasser darüber'],
    r: 0,
    e: 'Magmablöcke ziehen Wasserblasen nach unten und können dadurch Spieler oder Items in die Tiefe befördern. Seelensand erzeugt dagegen die aufwärts gerichtete Blasensäule — diese Unterscheidung ist für Wasseraufzüge und Sortieranlagen entscheidend.'
  },
  {
    f: 'Wie liest ein Komparator den Inhalt einer Truhe aus?',
    a: ['Er gibt ein Signal nach dem Verhältnis des belegten Inventars zur Gesamtkapazität aus, nicht einfach nach der Itemanzahl', 'Er gibt immer ein Signal der Stärke 1 aus, sobald mindestens ein Item darin liegt', 'Er zählt nur die unterschiedlichen Itemtypen und ignoriert Stapelgrößen', 'Er gibt die Anzahl der belegten Slots direkt als Signalstärke aus'],
    r: 0,
    e: 'Der Komparator betrachtet, wie voll der Behälter insgesamt ist. Ein einzelnes volles Item oder ein einzelner belegter Slot kann deshalb je nach Behältergröße unterschiedliche Signalstärken ergeben. Das ermöglicht präzise Lager- und Sortierschaltungen.'
  },
  {
    f: 'Welche Aussage über eine mit einem Schleimblock bewegte Struktur stimmt?',
    a: ['Schleim- und Honigblöcke ziehen angrenzende Blöcke mit, kleben aber nicht aneinander', 'Schleimblöcke ziehen nur Spieler, aber niemals Blöcke mit', 'Honigblöcke kleben grundsätzlich an Schleimblöcken', 'Jeder angrenzende Block wird bewegt, auch wenn der Kolben nur einen Block weit fährt'],
    r: 0,
    e: 'Schleim- und Honigblöcke wirken ähnlich, haften aber nicht aneinander. Diese Eigenschaft trennt bewegte Maschinen in zwei unabhängige Hälften — ein Grundprinzip vieler Flugmaschinen und komplexer Kolbenkonstruktionen.'
  },
  {
    f: 'Welche Aussage über natürliche Mob-Spawns in Trial Chambers stimmt?',
    a: ['Dort gibt es keine normalen natürlichen Mob-Spawns; die Gegner kommen aus den Trial-Spawnern', 'Dort spawnen nachts nur Creeper, aber keine anderen Mobs', 'Dort spawnen alle feindlichen Mobs doppelt so schnell', 'Trial-Spawner ersetzen nur passive Tiere, normale Monster spawnen weiterhin'],
    r: 0,
    e: 'Trial Chambers sind so gestaltet, dass die normalen natürlichen Spawnversuche dort ausbleiben. Die Herausforderung wird kontrolliert durch Trial-Spawner und ihre jeweilige Mob-Kategorie erzeugt — nicht durch zufällig auftauchende Höhlenmonster.'
  },
  {
    f: 'Welche Bedingung braucht ein Dreizack mit „Strömung“ (Riptide), um den Spieler zu bewegen?',
    a: ['Der Spieler muss sich im Wasser befinden oder im Regen stehen', 'Der Spieler muss auf trockenem Netherrack stehen', 'Der Dreizack muss zuvor einen Blitz getroffen haben', 'Die Verzauberung funktioniert nur in einer Trial Chamber'],
    r: 0,
    e: 'Strömung schleudert den Spieler nur, wenn Wasser oder Regen vorhanden ist. In der Luft und bei trockenem Wetter kann der Dreizack damit nicht als Fortbewegungsmittel eingesetzt werden — im Regen funktioniert er aber ebenfalls.'
  },
  {
    f: 'Was ist der zentrale Unterschied zwischen einem normalen und einem ominösen Vault?',
    a: ['Ein ominöser Vault verlangt einen ominösen Trial-Schlüssel und bietet die schwerer zugängliche, bessere Beute', 'Ein normaler Vault kann nur im Kreativmodus geöffnet werden', 'Ein ominöser Vault enthält immer ein Drachenei', 'Normale Vaults sind einmalig, ominöse Vaults können unendlich oft geöffnet werden'],
    r: 0,
    e: 'Ominöse Vaults gehören zur anspruchsvolleren Variante der Trial Chambers. Sie brauchen einen ominösen Trial-Schlüssel, der aus den härteren Herausforderungen stammt, und können besondere bzw. bessere Belohnungen enthalten.'
  },
  {
    f: 'Welche Verzauberungskombination ist auf einem normalen Rüstungsteil nicht möglich?',
    a: ['Schutz und Feuerschutz gleichzeitig', 'Schutz und Haltbarkeit gleichzeitig', 'Schutz und Reparatur gleichzeitig', 'Schutz und Dornen gleichzeitig'],
    r: 0,
    e: 'Schutz, Feuerschutz, Explosionsschutz und Geschosschutz gehören zur selben Schutzfamilie und schließen sich auf demselben Rüstungsteil aus. Haltbarkeit, Reparatur und Dornen können dagegen damit kombiniert werden.'
  },
  {
    f: 'Was bedeutet „Zu teuer!“ bei einer Amboss-Reparatur in der Java Edition?',
    a: ['Die berechneten Kosten betragen mindestens 40 Erfahrungslevel und der Vorgang wird im Überlebensmodus abgelehnt', 'Der Gegenstand ist endgültig verflucht', 'Der Amboss hat keine Haltbarkeit mehr und explodiert', 'Der Vorgang kostet genau 40 Diamanten'],
    r: 0,
    e: 'Im Überlebensmodus verweigert der Amboss Vorgänge ab 40 Leveln. Verzauberungen, vorherige Ambossarbeiten und das Kombinieren von Gegenständen können die Kosten so weit erhöhen. Im Kreativmodus gilt diese Levelgrenze nicht.'
  },
  {
    f: 'Was steuert die Spielregel „maxEntityCramming“?',
    a: ['Wie viele schiebende Kreaturen sich standardmäßig in einem engen Raum sammeln dürfen, bevor sie durch Zusammendrängen Schaden nehmen', 'Wie viele Items in einer Truhe liegen dürfen', 'Wie viele Spieler gleichzeitig einem Server beitreten dürfen', 'Wie viele Blöcke ein Kolben bewegen kann'],
    r: 0,
    e: 'Der Standardwert ist 24. Werden mehr schiebende Entities auf engem Raum zusammengequetscht, erleiden sie Cramming-Schaden. Die Regel wird deshalb bei Tierfarmen und Villageranlagen oft angepasst.'
  },
  {
    f: 'Was bewirkt die Spielregel „doInsomnia“?',
    a: ['Sie bestimmt, ob Phantome nach längerer Zeit ohne Schlaf spawnen dürfen', 'Sie schaltet alle feindlichen Monster aus', 'Sie verhindert, dass Spieler im Bett schlafen können', 'Sie verlängert die Nacht für alle Spieler'],
    r: 0,
    e: '„Insomnia“ bezeichnet im Spiel die Zeit, die ein Spieler nicht geschlafen hat. Mit doInsomnia=false werden Phantom-Spawns verhindert — Zombies, Skelette und andere Mob-Kategorien bleiben davon unberührt.'
  },
  {
    f: 'Wie kann man in Pulverschnee stehen, ohne einzusinken?',
    a: ['Man trägt Lederschuhe; sie verhindern das Einsinken in Pulverschnee', 'Man trägt Netheritstiefel', 'Man hält einen Wassereimer in der Nebenhand', 'Man setzt einen Teppich auf den Pulverschnee'],
    r: 0,
    e: 'Lederschuhe schützen vor dem Einsinken. Das ist eine besondere Eigenschaft der Lederstiefel und nicht einfach eine Folge der höheren Rüstungsstufe anderer Schuhe.'
  },
  {
    f: 'Wie löst ein Crafter in der Java Edition normalerweise einen Crafting-Vorgang aus?',
    a: ['Durch die steigende Flanke eines Redstone-Signals, sofern ein gültiges Rezept eingelegt ist', 'Durch dauerhaft anliegenden Strom bei jedem Spieltick', 'Durch einen Rechtsklick mit einer Werkbank', 'Nur durch ein Signal von einem Komparator'],
    r: 0,
    e: 'Der Crafter arbeitet auf einen Redstone-Impuls hin, nicht ununterbrochen bei dauerhaftem Strom. Deaktivierte Slots und ein gültiges Rezept bestimmen zusätzlich, ob und welches Item hergestellt wird.'
  },
  {
    f: 'Was kann ein Windstoß (Wind Charge) in der Umgebung auslösen?',
    a: ['Er kann bestimmte Schalter und Mechanismen wie Knöpfe, Hebel, Türen oder Falltüren betätigen', 'Er kann nur Spieler wegschleudern, aber keine Blöcke beeinflussen', 'Er kann ausschließlich Feuer entzünden', 'Er ersetzt ein Redstone-Signal dauerhaft'],
    r: 0,
    e: 'Die Druckwelle einer Windladung kann bestimmte interaktive Blöcke auslösen oder umschalten. Darum ist sie nicht nur ein Kampfgeschoss, sondern auch ein Werkzeug für Fallen und kleine Redstone-Experimente.'
  },
  {
    f: 'Wovon hängt die Farbe eines Froschlichts (Froglight) ab?',
    a: ['Von der Variante des Frosches, der den kleinen Magmawürfel frisst', 'Von der Farbe des darunterliegenden Blocks', 'Vom Biom, in dem das Froschlicht platziert wird', 'Von der Tageszeit beim Herstellen'],
    r: 0,
    e: 'Temperate, kalte und warme Frösche erzeugen jeweils unterschiedliche Froschlicht-Farben, wenn sie einen kleinen Magmawürfel fressen. Die Farbe wird also beim Drop durch den Frosch bestimmt.'
  },
  {
    f: 'Wie hängt ein Creaking mit seinem Creaking-Herz zusammen?',
    a: ['Das Herz ist sein verknüpfter Schwachpunkt; der Creaking nimmt normalen Angriffsschaden nicht wie ein gewöhnlicher Mob', 'Das Herz heilt alle Mobs in der Nähe', 'Das Herz kann nur mit einer Diamantspitzhacke abgebaut werden', 'Der Creaking erscheint nur, wenn das Herz unter Wasser liegt'],
    r: 0,
    e: 'Beim Angriff auf den Creaking zeigen Partikel die Verbindung zum zugehörigen Herzen. Der Creaking wird nicht einfach über eine normale Lebensleiste besiegt — die Herz-Mechanik ist der entscheidende Teil seines Kampfes.'
  },
  {
    f: 'Wie verteilt „Reparatur“ (Mending) Erfahrung, wenn mehrere getragene Gegenstände beschädigt sind?',
    a: ['Für jede XP-Kugel wird zufällig ein geeigneter beschädigter Gegenstand ausgewählt, bevor übrige Erfahrung das Level auffüllt', 'Immer zuerst der Gegenstand in der Haupthand, danach alle anderen', 'Alle beschädigten Gegenstände werden gleichzeitig gleich stark repariert', 'Reparatur wirkt nur auf den Gegenstand, den man gerade ansieht'],
    r: 0,
    e: 'Reparatur nimmt eine geeignete beschädigte Ausrüstung aus der Auswahl und verwendet die XP zunächst dafür. Erst wenn keine passende Reparatur mehr nötig ist, landet die übrige Erfahrung im normalen Erfahrungsbalken.'
  }
];
