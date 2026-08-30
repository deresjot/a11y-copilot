# Testing

Diese Referenz übersetzt WCAG 2.2 in eine eigenständige, handhabbare Prüfstruktur. Der [BIK WCAG-Test (Web)](https://bitvtest.de/pruefverfahren/wcag-22-web) war ein methodischer Abgleich für Anwendbarkeit, manuelle Prüfhandlungen und Abgrenzungen. Seine Texte und Bewertungen werden nicht übernommen. Normative Quelle bleibt [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

## Inhalt

- [Scope und Stichprobe](#scope-und-stichprobe)
- [Prüfstatus](#prüfstatus)
- [Prüfreihenfolge](#prüfreihenfolge)
- [Werkzeugunabhängige Prüfroutinen](#werkzeugunabhängige-prüfroutinen)
- [Prüfmatrix WCAG 2.2 AA](#prüfmatrix-wcag-22-aa)
- [Automatisierung](#automatisierung)
- [Screenreader-orientierte Prüfung](#screenreader-orientierte-prüfung)
- [Befund und Bewertung](#befund-und-bewertung)

## Scope und Stichprobe

Definiere Standard, Version, Konformitätslevel, Produktstand und Testzeitpunkt. Erfasse gemeinsame Seiten, unterschiedliche Seitentypen, zentrale Funktionen, Technologien, Medien, Dokumente, Drittinhalte und komplette Prozesse. Ein Prozess umfasst alle notwendigen Schritte bis zum Ergebnis, nicht nur einen einzelnen Screen.

Bei einer Stichprobe müssen typische und risikoreiche Varianten enthalten sein: Start- und Inhaltsseiten, Navigation, Suche, Formulare, Authentifizierung, Fehlerzustände, Transaktionen, responsive Varianten und dynamische Widgets. Konformität kann nur für tatsächlich vollständig geprüfte Seiten und vollständige Prozesse bewertet werden; Änderungen nach dem Test können das Ergebnis entwerten.

## Prüfstatus

- **Erfüllt:** Im geprüften Scope wurde kein Verstoß gegen den anwendbaren normativen Text festgestellt.
- **Nicht erfüllt:** Mindestens ein belastbarer Verstoß wurde nachgewiesen.
- **Nicht anwendbar:** Der für den Prüfpunkt notwendige Inhalt oder Mechanismus ist nicht vorhanden.
- **Nicht geprüft:** Der Punkt lag außerhalb des Scope oder konnte nicht belastbar geprüft werden.
- **Offen:** Evidenz oder fachliche Einordnung reicht noch nicht aus.

Abgestufte Schweregrade können bei der Priorisierung helfen, verändern aber nicht den binären Konformitätsansatz der WCAG. Dokumentiere Bewertungen pro Seite, Zustand und Ausprägung; mittlere Punktwerte dürfen Verstöße nicht verdecken.

## Prüfreihenfolge

1. Seite und vollständigen Prozess in Standarddarstellung verstehen.
2. Inhalt, DOM, Accessibility Tree, Namen, Rollen, Werte und Zustände prüfen.
3. Tastaturbedienung und Fokus vorwärts/rückwärts sowie in allen Overlays testen.
4. 200 % Text, 400 % Zoom beziehungsweise 320 CSS-Pixel, Textabstände und Ausrichtung testen.
5. Farbe, Kontrast, Fokus, Forced Colors, Animation, Audio und Flackern prüfen.
6. Pointer, Touch, Dragging, Gesten und Zielgrößen prüfen.
7. Relevante Pfade mit dokumentiertem Browser und Screenreader prüfen.
8. Fehler, Zeitbegrenzungen, Authentifizierung, Wiederholung und Statusmeldungen testen.
9. Automatisierte Regeln in allen relevanten Zuständen ausführen und Befunde manuell verifizieren.

## Werkzeugunabhängige Prüfroutinen

### Struktur und programmatische Information

1. CSS soweit sinnvoll deaktivieren oder eine linearisierte Ansicht verwenden, ohne diese Darstellung allein zu bewerten.
2. Überschriften, Landmarken, Listen, Zitate, Tabellen, Gruppen und Formbeziehungen im DOM und Accessibility Tree prüfen.
3. Sichtbare Reihenfolge mit DOM-, Lese- und Fokusreihenfolge vergleichen.
4. Für jedes interaktive Element berechneten Namen, Rolle, Wert und Zustände vor und nach der Interaktion prüfen.
5. Doppelte IDs, ungültige Verschachtelung und Parsingprobleme nur dann als WCAG-2.2-Befund behandeln, wenn daraus ein Verstoß gegen ein aktuelles Erfolgskriterium folgt.

### Tastatur und Fokus

1. Seite neu laden und Maus beziehungsweise Touch nicht verwenden.
2. Mit `Tab` und `Shift`+`Tab` alle erwarteten Fokusziele in beide Richtungen erreichen.
3. Native und dokumentierte Widget-Tasten einsetzen; Aktionen, Auswahl, Abbruch und Rückkehr testen.
4. Bei jedem Schritt Reihenfolge, sichtbaren Fokus, vollständige Sichtbarkeit der Komponente und unerwartete Kontextwechsel beobachten.
5. Overlays, Sticky-Bereiche, Cookie-Hinweise, Fehlermeldungen und dynamisch entfernte Elemente einbeziehen.
6. Zeichenbasierte Shortcuts mit Fokus im Dokument und in Eingabefeldern sowie, wenn relevant, mit Spracheingabe prüfen.

### Vergrößerung, Reflow und Textabstände

1. Text in Browsern, die eine reine Textvergrößerung anbieten, auf 200 % stellen und Inhalt sowie Funktionen prüfen.
2. Bei 400 % Browserzoom und einem Ausgangsviewport von 1280 CSS-Pixeln die resultierende Breite von etwa 320 CSS-Pixeln prüfen.
3. Für vertikal geschriebene Inhalte den entsprechenden Höhenfall berücksichtigen.
4. Zweidimensionales Scrollen nur für Inhalte akzeptieren, die eine zweidimensionale Darstellung wesentlich benötigen; Navigation, Formulare und Text gehören typischerweise nicht dazu.
5. Zeilenhöhe auf 1,5, Absatzabstand auf 2, Zeichenabstand auf 0,12 und Wortabstand auf 0,16 der Schriftgröße setzen. Inhalt, Fokus und Bedienung dürfen nicht verloren gehen.
6. Hoch- und Querformat sowie Text in Buttons, Labels, Tabellen, Overlays und Fehlermeldungen einbeziehen.

### Farbe, Kontrast und Zustände

1. Relevante Vorder- und Hintergrundfarben im tatsächlichen Zustand messen; Transparenz, Verläufe, Bilder und Antialiasing berücksichtigen.
2. Textgröße, Schriftgewicht, Ausnahmen und angrenzende Farben vor Anwendung eines Grenzwerts bestimmen.
3. Bei Controls und Grafiken nur die Teile messen, die zum Erkennen von Komponente, Zustand oder Information erforderlich sind.
4. Graustufen- oder Farbfilter können Hinweise geben, ersetzen aber nicht die Prüfung, ob Information auch strukturell oder textlich vermittelt wird.
5. Fokus, Hover, Auswahl, Fehler, deaktivierte und High-Contrast-/Forced-Colors-Zustände separat prüfen.

### Pointer, Touch und Bewegung

1. Jede Mehrpunkt-, Pfad- oder Drag-Geste inventarisieren und die alternative Ein-Zeiger-Bedienung tatsächlich ausführen.
2. Down-, Move- und Up-Events sowie Abbruch außerhalb des Ziels testen; irreversible Aktionen besonders beachten.
3. Zielgröße und Abstand anhand der tatsächlich anklickbaren Fläche messen, nicht anhand des sichtbaren Icons.
4. Gerätebewegung deaktivieren und die entsprechende UI-Alternative prüfen.
5. Automatisch startende Bewegung, Aktualisierung und Audio über die jeweils relevanten Zeitgrenzen hinweg beobachten.
6. Bei möglichem Flackern ein geeignetes Analysewerkzeug verwenden; subjektives Empfinden ist kein belastbarer Grenzwerttest.

### Formulare und Prozesse

1. Formular ohne Eingabe, mit Teilangaben, fehlerhaften Angaben und erfolgreicher Eingabe absenden.
2. Labels, Gruppen, Hinweise, Pflichtangaben und Eingabezwecke vor der Eingabe prüfen.
3. Nach Fehlern Textbeschreibung, programmatische Zuordnung, erhaltene Werte, Fokus und Korrekturhilfe prüfen.
4. Mehrstufigen Prozess vollständig durchlaufen; zurücknavigieren, Sitzung verlängern, erneut anmelden und Wiederaufnahme testen.
5. Bereits eingegebene Informationen, rechtliche oder finanzielle Bestätigung, Löschung und andere Datenänderungen gezielt prüfen.
6. Passwortmanager, Einfügen, Einmalcodes und vorhandene nicht-kognitive Authentifizierungsalternativen testen.

## Prüfmatrix WCAG 2.2 AA

Die Fragen sind Prüfauslöser, keine Ersatzformulierungen der Erfolgskriterien. Lies für Bewertung, Ausnahmen und Definitionen den verlinkten WCAG-Text.

### 1 Wahrnehmbar

#### Textalternativen und Medien

- **1.1.1a Funktionale Bilder:** Haben grafische Links, Buttons, Image-Maps und ähnliche Bedienelemente einen Namen, der Zweck oder Ziel vermittelt?
- **1.1.1b Informative Grafiken:** Vermittelt die Textalternative die im Kontext relevante Information; gibt es für komplexe Grafiken eine zugängliche ausführliche Beschreibung?
- **1.1.1c Dekoration:** Werden rein dekorative oder redundante Bilder von assistiven Technologien ignoriert, ohne Information zu verlieren?
- **1.1.1d CAPTCHA:** Sind Zweck und Inhalt textlich beschrieben und stehen Alternativen für unterschiedliche Wahrnehmungsarten bereit?
- **1.2.1 Audio oder stummes Video:** Gibt es für aufgezeichnetes Nur-Audio eine Textalternative und für stummes Video eine gleichwertige Alternative?
- **1.2.2 Untertitel, aufgezeichnet:** Sind alle relevanten gesprochenen und nicht gesprochenen Audioinformationen in synchronen Untertiteln enthalten?
- **1.2.3 Audiodeskription oder Medienalternative:** Ist relevante visuelle Information aufgezeichneter Videos als Audiodeskription oder zulässige vollständige Medienalternative verfügbar?
- **1.2.4 Untertitel, live:** Sind Live-Audioinhalte in synchronisierten Medien untertitelt?
- **1.2.5 Audiodeskription:** Gibt es für relevante visuelle Information aufgezeichneter Videos eine Audiodeskription, soweit das Erfolgskriterium anwendbar ist?

#### Struktur, Beziehungen und Reihenfolge

- **1.3.1a Überschriften:** Sind inhaltliche Überschriften semantisch als solche ausgezeichnet und bilden Ebenen die Beziehungen sinnvoll ab?
- **1.3.1b Listen:** Sind tatsächliche Listen und Listenelemente programmatisch ermittelbar?
- **1.3.1c Zitate:** Wird Zitat-Markup für Zitate statt für Einrückung oder Gestaltung verwendet?
- **1.3.1d Gliederung:** Sind Absätze, Gruppen, Regionen und andere visuell erkennbare Strukturen programmatisch oder textlich verfügbar?
- **1.3.1e Datentabellen:** Werden Datenbeziehungen mit echten Tabellen, Kopfzellen und einer sinnvollen Tabellenstruktur vermittelt?
- **1.3.1f Zellzuordnung:** Sind Datenzellen bei komplexen Kopfstrukturen eindeutig ihren Überschriften zugeordnet?
- **1.3.1g Layouttabellen:** Verwendet reines Layout keine Tabellen-Semantik, die falsche Beziehungen erzeugt?
- **1.3.1h Formbeziehungen:** Sind sichtbare Beschriftungen und Gruppierungen programmatisch mit den passenden Feldern verbunden?
- **1.3.2 Reihenfolge:** Bleiben Bedeutung und Bedienung in DOM-, Lese- und Fokusreihenfolge erhalten?
- **1.3.3 Sensorische Merkmale:** Funktionieren Anweisungen ohne alleinigen Bezug auf Form, Farbe, Größe, Position, Richtung oder Klang?
- **1.3.4 Ausrichtung:** Ist Inhalt ohne unnötige Beschränkung auf Hoch- oder Querformat nutzbar?
- **1.3.5 Eingabezweck:** Sind Felder für definierte persönliche Daten mit passenden maschinenlesbaren Zwecken ausgezeichnet?

#### Unterscheidbarkeit

- **1.4.1 Farbe:** Werden Information, Zustand und Aktion zusätzlich zur Farbe vermittelt?
- **1.4.2 Audio:** Kann automatisch länger wiedergegebenes Audio unabhängig pausiert, gestoppt oder in der Lautstärke geregelt werden?
- **1.4.3 Textkontrast:** Erreichen Texte und Schriftgrafiken die erforderlichen Kontraste unter Beachtung von Größe und Ausnahmen?
- **1.4.4 Textvergrößerung:** Bleiben Text und Funktion bei 200 % Textvergrößerung ohne assistive Technik erhalten?
- **1.4.5 Schriftgrafiken:** Wird echter Text verwendet, wenn die Darstellung nicht wesentlich oder nutzerseitig anpassbar ist?
- **1.4.10 Reflow:** Bleibt Inhalt bei 320 CSS-Pixeln Breite beziehungsweise 256 CSS-Pixeln Höhe ohne unnötiges zweidimensionales Scrollen nutzbar?
- **1.4.11 Nicht-Text-Kontrast:** Haben erforderliche Grenzen, Zustände, Fokusindikatoren und informative Grafikteile ausreichenden Kontrast zu angrenzenden Farben?
- **1.4.12 Textabstände:** Verursachen die WCAG-Testwerte für Zeilen-, Absatz-, Zeichen- und Wortabstand keinen Verlust von Inhalt oder Funktion?
- **1.4.13 Hover-/Fokus-Inhalte:** Sind zusätzliche Inhalte verwerfbar, hoverbar und persistent, soweit die jeweiligen Bedingungen anwendbar sind?

### 2 Bedienbar

#### Tastatur, Zeit und Bewegung

- **2.1.1 Tastatur:** Sind alle nicht wesentlich pfadabhängigen Funktionen über eine Tastaturschnittstelle erreichbar und bedienbar?
- **2.1.2 Tastaturfalle:** Kann Fokus mit Standard- oder dokumentierter Tastaturbedienung aus jedem Bereich wieder herausbewegt werden?
- **2.1.4 Zeichen-Shortcuts:** Lassen sich Shortcuts aus einzelnen Buchstaben, Zahlen, Satz- oder Symbolzeichen abschalten, neu zuordnen oder nur bei Komponentenfokus aktivieren?
- **2.2.1 Zeitbegrenzungen:** Können anwendbare Zeitlimits abgeschaltet, angepasst oder ausreichend verlängert werden; greifen nur die normativen Ausnahmen?
- **2.2.2 Pause, Stopp, Ausblenden:** Können automatisch startende bewegte, blinkende, scrollende oder aktualisierte Inhalte entsprechend den Bedingungen kontrolliert werden?
- **2.3.1 Flackern:** Bleibt Inhalt unter den Grenzwerten für drei Blitze beziehungsweise allgemeines und rotes Flackern?

#### Navigation und Fokus

- **2.4.1 Blöcke umgehen:** Gibt es einen Mechanismus, wiederkehrende Inhaltsblöcke zu überspringen?
- **2.4.2 Dokumenttitel:** Beschreibt jeder Titel Thema oder Zweck der Seite beziehungsweise Ansicht?
- **2.4.3 Fokusreihenfolge:** Erhält die Reihenfolge fokussierbarer Elemente Bedeutung und Bedienbarkeit?
- **2.4.4 Linkzweck:** Ist der Zweck jedes Links aus Linktext oder zulässigem Kontext ermittelbar?
- **2.4.5 Mehrere Wege:** Gibt es für Seiten innerhalb eines Angebots mindestens zwei Zugangswege, soweit keine Ausnahme greift?
- **2.4.6 Überschriften und Labels:** Beschreiben Überschriften und Beschriftungen Thema oder Zweck verständlich?
- **2.4.7 Fokus sichtbar:** Ist der Tastaturfokus in allen relevanten Zuständen wahrnehmbar?
- **2.4.11 Fokus nicht verdeckt:** Wird ein fokussiertes Element nicht vollständig von autorenseitigem Inhalt verdeckt; kann aktiv eingeblendete Überlagerung ohne Fokusverschiebung beseitigt werden?

#### Pointer und Eingabealternativen

- **2.5.1 Komplexe Gesten:** Gibt es für Mehrpunkt- oder pfadbasierte Gesten eine Ein-Zeiger-Alternative, sofern die Geste nicht wesentlich ist?
- **2.5.2 Pointer-Abbruch:** Wird die Funktion nicht unnötig beim Down-Event abgeschlossen oder kann sie abgebrochen, rückgängig gemacht beziehungsweise durch Up-Event kontrolliert werden?
- **2.5.3 Label im Namen:** Enthält der zugängliche Name die sichtbare Beschriftung, möglichst in gleicher Reihenfolge?
- **2.5.4 Bewegungsaktivierung:** Gibt es eine UI-Alternative und eine Abschaltmöglichkeit für Geräte- oder Nutzerbewegung, sofern keine Ausnahme greift?
- **2.5.7 Dragging:** Ist jede nicht wesentlich auf Ziehen angewiesene Funktion ohne Dragging mit einem einzelnen Zeiger bedienbar?
- **2.5.8 Zielgröße:** Erfüllen Pointer-Ziele mindestens 24 × 24 CSS-Pixel oder eine der normativen Abstands- beziehungsweise Ausnahmeregeln?

### 3 Verständlich

#### Sprache und Vorhersagbarkeit

- **3.1.1 Hauptsprache:** Ist die primäre natürliche Sprache jeder Seite programmatisch bestimmt?
- **3.1.2 Sprachwechsel:** Sind anderssprachige Passagen und Wörter ausgezeichnet, soweit Aussprache-, Namens- und Fachausnahmen nicht greifen?
- **3.2.1 Fokus:** Verursacht das Erhalten des Fokus keine unerwartete Kontextänderung?
- **3.2.2 Eingabe:** Verursacht eine Eingabe keine unerwartete Kontextänderung, sofern diese nicht vorher angekündigt wurde?
- **3.2.3 Navigation:** Bleiben wiederkehrende Navigationsmechanismen in relativer Reihenfolge konsistent?
- **3.2.4 Bezeichnung:** Werden Komponenten mit gleicher Funktion konsistent identifiziert?
- **3.2.6 Hilfe:** Erscheinen wiederkehrende Kontakt-, Selbsthilfe- oder automatisierte Hilfemechanismen in konsistenter relativer Reihenfolge?

#### Eingabeunterstützung und Authentifizierung

- **3.3.1 Fehlererkennung:** Werden automatisch erkannte Eingabefehler identifiziert und in Text beschrieben?
- **3.3.2 Labels und Anweisungen:** Sind notwendige Beschriftungen oder Anweisungen vorhanden, bevor Nutzende Eingaben machen?
- **3.3.3 Fehlerhilfe:** Werden bekannte Korrekturvorschläge angeboten, sofern dies Sicherheit oder Zweck nicht gefährdet?
- **3.3.4 Fehlervermeidung:** Können rechtliche, finanzielle oder datenverändernde Eingaben je nach Scope rückgängig gemacht, geprüft oder bestätigt werden?
- **3.3.7 Redundante Eingabe:** Müssen bereits im selben Prozess angegebene Informationen nicht erneut eingegeben werden oder stehen Auswahl-/Auto-Fill-Mechanismen bereit, soweit keine Ausnahme greift?
- **3.3.8 Authentifizierung:** Verlangt Authentifizierung keinen kognitiven Funktionstest ohne zulässige Alternative, Unterstützung oder Ausnahme?

### 4 Robust

- **4.1.1 Parsing:** WCAG 2.2 entfernte dieses Erfolgskriterium. Syntaxfehler bleiben technisch relevant, wenn sie Semantik, Beziehungen oder Bedienung beschädigen; in älteren oder gesetzlich referenzierten Standards kann 4.1.1 weiterhin im Scope liegen.
- **4.1.2 Name, Rolle, Wert:** Sind Name und Rolle sowie gesetzte Werte und Zustände für alle UI-Komponenten programmatisch verfügbar und werden Änderungen mitgeteilt?
- **4.1.3 Statusmeldungen:** Können assistive Technologien anwendbare Statusmeldungen ohne Fokusverschiebung bestimmen?

## Automatisierung

Automatisierte Prüfungen sind eine Regressionsebene, kein Audit. Werkzeuge wie axe-core, Accessibility Insights, Lighthouse, HTML-Validatoren und Linters finden einen Teil technisch bestimmbarer Probleme. Sie beurteilen unter anderem Verständlichkeit, sinnvolle Fokusführung, die Qualität von Textalternativen, vollständige Tastaturbedienung und die Wirkung eines Prozesses nicht zuverlässig.

Öffne relevante Zustände vor dem Scan: Menüs, Dialoge, Fehler, Validierung, Lade- und Erfolgsmeldungen. Ordne jeden Befund manuell ein. Null Violations bedeutet nur, dass die ausgeführten Regeln im geprüften Zustand keinen Befund meldeten.

### axe-core einordnen

[axe-core](https://github.com/dequelabs/axe-core) ist eine automatisierte Prüfengine für HTML-Oberflächen. Sie stellt Regeln für mehrere WCAG-Fassungen und -Level sowie zusätzliche Best Practices bereit. Welche Regeln tatsächlich laufen, hängt von installierter Version, Konfiguration, Tags, Browser und geprüftem DOM-Zustand ab. Halte diese Angaben deshalb im Testbericht fest.

Behandle die Ergebnisgruppen unterschiedlich:

- `violations` sind automatisch festgestellte Regelverstöße und müssen auf Anwendbarkeit, Auswirkung und Ursache geprüft werden;
- `incomplete` enthält Fälle, die das Werkzeug nicht abschließend entscheiden konnte und die manuell untersucht werden müssen;
- `passes` belegt nur bestandene automatisierte Regeln im konkreten Zustand, nicht die Konformität einer Seite oder eines Prozesses.

Scans in einer simulierten DOM-Umgebung haben zusätzliche Einschränkungen. axe-core weist beispielsweise darauf hin, dass die Kontrastregel in JSDOM nicht funktioniert. Für browserabhängige Eigenschaften ist deshalb ein echter Browserlauf erforderlich.

### Playwright mit axe-core

Der offizielle [Playwright-Leitfaden zum Accessibility Testing](https://playwright.dev/docs/accessibility-testing) verwendet `@axe-core/playwright`. Scanne nicht nur die geladene Startansicht: Stelle den zu prüfenden Zustand zuerst durch reale Interaktion her, warte auf sein sichtbares Ergebnis und führe axe anschließend aus.

```ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('geöffneter Profildialog: automatisierter Scan', async ({ page }, testInfo) => {
  await page.goto('/konto');
  await page.getByRole('button', { name: 'Profil bearbeiten' }).click();

  const dialog = page.getByRole('dialog', { name: 'Profil bearbeiten' });
  await expect(dialog).toBeVisible();

  const result = await new AxeBuilder({ page })
    .include('[role="dialog"]')
    .analyze();

  await testInfo.attach('axe-result', {
    body: JSON.stringify(result, null, 2),
    contentType: 'application/json',
  });

  expect(result.violations).toEqual([]);
});
```

Nutze `.include()` nur, wenn ein begrenzter Komponenten-Scan beabsichtigt und als solcher benannt ist. Ergänze ihn für Seiten- oder Prozesstests durch Scans des gesamten Dokuments. Variiere relevante Viewports, Browser, Inhalte und Zustände; ein einzelner Lauf ist keine repräsentative Stichprobe.

Regel-Tags sind versionsabhängig. Stimme sie auf die installierte axe-core-Version und den vereinbarten Standard ab, statt ungeprüft eine Tagliste zu kopieren. Der Standardsatz enthält neben WCAG-bezogenen Regeln auch Best-Practice-Regeln; ein solcher Befund ist nicht automatisch ein WCAG-Verstoß.

Verwende dafür das fachliche Profil und den axe-Adapter aus [Automatisierte Rulesets und Versionswechsel](automated-rulesets.md). Ein WCAG-2.2-AA-Lauf umfasst in axe-core die weiterhin anwendbaren A-/AA-Regeln aus WCAG 2.0 und 2.1 sowie die zusätzlichen 2.2-Regeln. `wcag22aa` allein bildet diesen Umfang nicht ab. Halte die tatsächlich von der installierten Engine aufgelöste Regel-ID-Liste als Artefakt fest; nur so bleiben ein späterer Regelzugang, eine Umklassifizierung oder eine entfernte Regel sichtbar.

Ausgeschlossene Bereiche und deaktivierte Regeln können reale Barrieren verbergen. Verwende sie so klein wie möglich und dokumentiere Begründung, verantwortliche Person, Ablaufdatum und Retest. Für bekannte Befunde sind stabile Fingerprints aus Regel-ID und betroffenem Ziel meist belastbarer als Snapshots des gesamten Ergebnisobjekts. Bewahre vollständige Resultate einschließlich `incomplete` als Testartefakt auf.

Automatisiere bevorzugt wiederkehrende Zustände und Regressionen. Ergänze jeden Lauf durch die manuellen Routinen und die Prüfmatrix dieses Dokuments sowie – abhängig von Risiko und Anspruch – Tests mit assistiven Technologien und Menschen.

## Screenreader-orientierte Prüfung

Teste nicht nur lineares Vorlesen. Nutze Überschriften-, Landmarken-, Link-, Formular- und Tabellen-Navigation. Prüfe Namen, Zustände, Gruppierungen, Beschreibungen, Lesereihenfolge, Live-Meldungen und Widget-Bedienung. Dokumentiere Betriebssystem, Browser, Screenreader und Version. Eine Kombination ist kein Stellvertreter für alle Plattformen.

## Befund und Bewertung

Ein reproduzierbarer Befund nennt:

- ID, Titel, Seite, Komponente, Zustand und Pfad;
- Umgebung, Viewport und Eingabemethode;
- erwartetes und tatsächliches Ergebnis;
- Nutzerwirkung und Evidenz;
- Normbezug mit Version und Level, falls belastbar;
- empfohlene Lösung, Alternativen und offene Entscheidungen;
- Status, Verantwortlichkeit und Retest;
- nicht geprüfte Bereiche und offene Punkte.

Priorisiere nach Blockadegrad, Häufigkeit, Reichweite, vollständigen Prozessen, Sicherheits-/Geschäftsrisiko und Reparaturabhängigkeiten. Ein Audit ersetzt keine Forschung mit Menschen; Forschung ersetzt umgekehrt keinen normorientierten Audit.
