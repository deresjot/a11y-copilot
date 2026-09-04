# a11y-copilot

> Zentrale fachliche Quelle für digitale Barrierefreiheit über den Lebenszyklus digitaler Angebote.

Barrierefreiheit ist eine Eigenschaft digitaler Angebote und der Prozesse, die sie hervorbringen. Sie steckt in Strategie und Budget, Beschaffung und Anforderungen, Research und Konzeption, Gestaltung und Sprache, Technik und Dokumentation sowie Prüfung, Support und Betrieb. Wenn sie erst beim abschließenden Toollauf auftaucht, ist ein großer Teil der Arbeit bereits an der falschen Stelle passiert.

Diese Datei gibt Menschen und AI-Agents einen gemeinsamen fachlichen Kontext. Sie hilft dabei, Ausschlussrisiken zu erkennen und daraus Entscheidungen, Anforderungen, Gestaltung, Inhalte, technische Lösungen, Prüfungen und betriebliche Maßnahmen abzuleiten. Für die Nutzung mit einer LLM wird der Inhalt vor der eigentlichen Accessibility-Frage in den Chat kopiert oder als Datei angehängt. Danach folgen die konkrete Aufgabe, das betroffene Angebot oder Artefakt, der Nutzungskontext und bekannte Rahmenbedingungen.

Eine Antwort soll normative Aussagen auf eine konkrete Quelle zurückführen. Maßgeblich sind insbesondere [WCAG 2.2](https://www.w3.org/TR/WCAG22/), der [HTML Standard](https://html.spec.whatwg.org/), [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/), [ARIA in HTML](https://www.w3.org/TR/html-aria/) und – als Prüfmethode – der [BIK WCAG-Test](https://bitvtest.de/pruefverfahren/wcag-22-web). Der [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) ist eine informative Patternreferenz und keine zusätzliche WCAG-Anforderung. Weitere Einordnung steht in [Standards und Primärquellen](references/standards.md).

WCAG 2.2 ist dabei die Zielbasis für Webinhalte. Bei Non-Web-Dokumenten, Software und anderer ICT müssen der konkrete Artefakttyp und die dafür anwendbaren Normen, Plattformvorgaben, Verträge und Rechtsakte bestimmt werden. [WCAG2ICT](https://www.w3.org/TR/wcag2ict-22/) hilft informativ bei der Übertragung von WCAG auf Non-Web-Dokumente und Software, setzt aber selbst keine Anforderungen.

Normfassungen und automatisierte Prüfregeln ändern sich unabhängig voneinander. Der jeweils vereinbarte Standard wird deshalb als fachliches Profil behandelt und erst danach mit einem konkreten Werkzeugadapter verbunden. Die versionierte Zuordnung für axe-core, ACT, EN 301 549, Best Practices und experimentelle Regeln steht in [Automatisierte Rulesets und Versionswechsel](references/automated-rulesets.md); die maschinenlesbare Konfiguration liegt unter [`rulesets/`](rulesets/). Dadurch kann eine künftige normative Grundlage wie WCAG 3 ergänzt werden, ohne WCAG 2.2, historische Nachweise oder werkzeugspezifische Regeln stillschweigend umzudeuten.

Diese Arbeitsgrundlage ersetzt keinen vollständigen Audit und keine Tests mit Menschen. Sie garantiert keine Konformität und leistet keine Rechtsberatung.

## So ist diese Quelle zu lesen

Die Datei unterscheidet zwischen normativen Anforderungen, technisch belastbaren Umsetzungen, Best Practices, Komponenten-Patterns und Entscheidungen, die vom Produktkontext abhängen. Eine normative Aussage nennt die zugrunde liegende Norm oder Spezifikation und berücksichtigt Geltungsbereich, Level, Definitionen und Ausnahmen. Eine etablierte technische Lösung bleibt im Zielsystem zu testen. APG-Patterns und verbreitete Best Practices werden nicht dadurch zu WCAG-Anforderungen, dass sie sinnvoll oder häufig verwendet sind.

Das Wort „muss“ ist normativen oder unmittelbar spezifikationsbedingten Aussagen vorbehalten. Wo mehrere Lösungen vertretbar sind, wird die Entscheidung nicht als universelle Regel ausgegeben.

## Accessibility-first

Beginne mit der Aufgabe, die ein Mensch erledigen will. Prüfe dann, welche Fähigkeiten das Produkt stillschweigend voraussetzt. Dazu gehören nicht nur Sehen und Hören, sondern auch Feinmotorik, Konzentration, Erinnerung, Sprachverständnis und die Möglichkeit, eine bestimmte Eingabemethode zu verwenden.

Eine belastbare Lösung berücksichtigt unterschiedliche Wahrnehmung, Bedienung und Verständnisweisen sowie wechselnde Situationen. Bei Weboberflächen gehören dazu unter anderem Tastatur und alternative Eingaben, Screenreader oder Vergrößerung, kleine Viewports, Zoom, Forced Colors und reduzierte Bewegung. Andere digitale Artefakte oder Plattformen brauchen ihre jeweils passenden Prüfverfahren und Standards. Diese Bedingungen gehören in Strategie, Beschaffung, Research, Anforderungen, Gestaltung, Komponenten, Content, Implementierung, Dokumentation, Tests und Betrieb. Späte Reparaturen sind teurer und lösen häufig nur den sichtbarsten Teil des Problems.

## Vom Grundsatz zur Entscheidung

Digitale Barrierefreiheit erzeugt nicht nur technische Aufgaben. Aus einem erkannten Ausschlussrisiko können sich mehrere zusammenhängende Konsequenzen ergeben:

- Strategie und Governance bestimmen Anspruch, Ressourcen, Verantwortlichkeit, Kompetenzen und den Umgang mit bekannten Barrieren.
- Beschaffung verlangt prüfbare Anforderungen, Zugang zu Testständen, belastbare Nachweise, dokumentierte Abweichungen und klare Abnahmekriterien. Selbstauskünfte oder Konformitätsbehauptungen von Anbietern sind Evidenz, aber kein Ersatz für eine angemessene Prüfung.
- Research und Konzeption betrachten Menschen mit Behinderungen nicht als nachträglichen Sonderfall. Aufgaben, Nutzungssituationen, assistive Technologien, alternative Abläufe und Ausschlussrisiken gehören in die Problemdefinition.
- Anforderungen und Gestaltung beschreiben erwartbare Ergebnisse für Wahrnehmung, Bedienung, Verständnis und Robustheit, ohne vorschnell eine ungeprüfte technische Lösung festzuschreiben.
- Inhalte, Dokumente, Medien und Supportinformationen müssen auffindbar, verständlich und in den benötigten Alternativen verfügbar sein.
- Entwicklung und Integration erhalten Semantik, Bedienlogik, Anpassbarkeit und Plattformkompatibilität über Komponenten und vollständige Prozesse hinweg.
- Qualitätssicherung verbindet frühe Reviews, automatisierte Regressionstests, manuelle Prüfungen, assistive Technologien und – abhängig vom Risiko – Tests mit Menschen.
- Veröffentlichung und Betrieb benötigen Monitoring, erreichbare Rückmeldewege, Priorisierung, nachvollziehbare Behebung, Regressionsschutz und transparente Kommunikation über bekannte Einschränkungen.

Welche Ableitung relevant ist, hängt vom Auftrag und Artefakt ab. Eine Codefrage kann eine unklare Anforderung offenlegen; ein wiederkehrender Inhaltsfehler kann eine Redaktions- oder Systementscheidung erfordern; eine Barriere eines eingekauften Produkts kann Beschaffung, Vertrag, Support und Alternativprozess betreffen. Der Copilot soll diese Zusammenhänge sichtbar machen, ohne jede Antwort künstlich auf alle Phasen auszuweiten.

## Semantik und Struktur

Verwende HTML entsprechend seiner Bedeutung. Native Elemente bringen Semantik, Tastaturverhalten und Plattformintegration mit, die bei Eigenbauten vollständig nachgebildet und getestet werden müssten.

- Gib jeder Seite einen aussagekräftigen Dokumenttitel und die passende Hauptsprache; kennzeichne Sprachwechsel, wenn sie für Aussprache oder Verständnis relevant sind.
- Gliedere Inhalte mit echten Überschriften. Die Hierarchie soll Inhalt und Beziehungen abbilden, nicht Schriftgrößen erzeugen.
- Kennzeichne Hauptinhalt und wiederkehrende Bereiche mit passenden HTML-Elementen. Mehrere gleichartige Navigations- oder Regionenbereiche brauchen unterscheidbare Namen, wenn dies der Orientierung dient.
- Verwende Listen für Listen, Tabellen für tabellarische Beziehungen und `fieldset`/`legend` für zusammengehörige Formulareingaben, wo diese Semantik passt.
- Die DOM- und Lesereihenfolge soll sinnvoll sein. Visuelle CSS-Umsortierung darf keine widersprüchliche Tastatur- oder Screenreader-Reihenfolge erzeugen.
- Biete bei umfangreichen wiederkehrenden Blöcken einen robusten Weg zum Hauptinhalt, etwa einen Skiplink.

Mehr dazu: [Semantik und Struktur](references/semantics-and-structure.md).

## Native Elemente, ARIA und zugängliche Namen

Bevorzuge ein geeignetes natives Element gegenüber einer nachgebauten ARIA-Variante. ARIA ergänzt Semantik; es implementiert weder Verhalten noch Fokusführung.

Für interaktive Elemente müssen Name, Rolle, Wert und relevante Zustände programmatisch ermittelbar sein. Der zugängliche Name soll Zweck und sichtbare Beschriftung widerspiegeln. `aria-label` ist eine mögliche Benennungsmethode, keine allgemeine Pflicht und kein Ersatz für sichtbaren Text.

- Nutze Links für Navigation und Buttons für Aktionen.
- Behalte sichtbare Beschriftungen als Teil des zugänglichen Namens bei, damit Sprachsteuerung und visuelle Orientierung zusammenpassen.
- Setze ARIA-Zustände wie `aria-expanded`, `aria-selected`, `aria-pressed` oder `aria-invalid` nur passend zur Rolle und synchron zum tatsächlichen Zustand.
- Verstecke fokussierbare oder relevante Inhalte nicht versehentlich vor assistiven Technologien.
- Prüfe die berechnete Accessibility-Struktur im Browser und mit realen Nutzungspfaden.

Die WAI-ARIA-Spezifikation ist normativ für ARIA. Der [WAI-ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/) bietet informative Patterns und Beispiele. Ein APG-Tastaturmodell kann für ein gewähltes Widget sehr belastbar sein, ist aber nicht als solches ein zusätzliches WCAG-Erfolgskriterium. Siehe [ARIA und Komponenten](references/aria-and-components.md).

## Tastatur und Fokus

Alle Funktionen, die nicht wesentlich von einem Pfad oder einer analogen Bewegung abhängen, müssen ohne Maus bedienbar sein. Teste in beide Richtungen und ohne Sonderwissen.

- Fokusreihenfolge und Bedienfolge müssen Bedeutung und Bedienung erhalten.
- Der Fokusindikator muss sichtbar sein und darf bei den relevanten Zuständen nicht vollständig verdeckt werden.
- Entferne Browserfokus nicht ohne mindestens gleichwertigen Ersatz.
- Vermeide positive `tabindex`-Werte; sie erzeugen leicht eine von DOM und Darstellung getrennte Reihenfolge.
- Fokusmanagement ist bei Dialogen, entfernten Elementen, clientseitiger Navigation und dynamischen Workflows bewusst zu planen.
- Verschiebe Fokus nur, wenn das die Aufgabe unterstützt und für Nutzende nachvollziehbar ist.
- Nach dem Schließen eines temporären Kontexts ist die auslösende Stelle häufig ein guter Rückkehrpunkt; wenn sie nicht mehr existiert, braucht es ein sinnvolles alternatives Ziel.
- Ein Escape-Verhalten ist für viele temporäre Overlays erwartbar und in mehreren APG-Patterns vorgesehen, aber keine universelle Regel für jede Oberfläche.

Details: [Tastatur und Fokus](references/keyboard-and-focus.md).

## Formulare, Hinweise, Fehler und Status

Formulare verbinden Semantik, Content, visuelle Zustände, Validierung und dynamische Rückmeldung.

- Gib jeder Eingabe eine dauerhafte, verständliche Beschriftung. Placeholder sind Beispiele oder Formatangaben, keine robuste alleinige Beschriftung.
- Ordne Hinweise vor der Eingabe oder am erwartbaren Ort an und verknüpfe relevante Hilfen programmatisch.
- Kennzeichne erforderliche Angaben verständlich. Das HTML-Attribut `required` ist für native Felder meist die passendste technische Basis; eine sichtbare Erklärung bleibt wichtig.
- Nutze passende Eingabetypen und `autocomplete`-Tokens, wenn der Zweck der Daten dies zulässt.
- Identifiziere Fehler in Text, ordne sie dem Feld zu und nenne eine Korrekturmöglichkeit, sofern bekannt. Farbe oder ein Icon allein reichen nicht.
- Bewahre gültige Eingaben nach Fehlern. Setze Fokus nach Validierung nicht pauschal um; entscheide anhand des Ablaufs, etwa Fehlerzusammenfassung plus Feldlinks oder erstes fehlerhaftes Feld.
- Aktualisiere `aria-invalid` und Fehlerbeschreibungen synchron. Füge Live-Regionen möglichst vor der Meldung in den DOM ein und aktualisiere deren Inhalt sparsam.
- Statusmeldungen sollen ohne unerwarteten Fokuswechsel wahrnehmbar sein, wenn sie unter WCAG 4.1.3 fallen. Nicht jede Inhaltsänderung braucht eine Ansage.
- Bei rechtlichen, finanziellen oder datenverändernden Vorgängen können Prüfung, Bestätigung oder Umkehrbarkeit normativ relevant sein.

Siehe [Formulare, Fehler und Status](references/forms-errors-and-status.md) und [Formulare](patterns/forms.md).

## Dynamische Inhalte

Bei clientseitigen Aktualisierungen müssen Wahrnehmbarkeit, Kontext und Bedienbarkeit erhalten bleiben.

- Halte sichtbaren Text, DOM-Zustand und programmatische Zustände synchron.
- Kündige wesentliche Ergebnisse wie Ladezustand, Trefferzahl, Speichern oder Fehler angemessen an; vermeide doppelte und dauerhaft geschwätzige Live-Regionen.
- Bewahre Fokus, Eingaben und Orientierung bei Nachladen, Filtern, Sortieren und Routenwechseln.
- Stelle eine robuste Alternative zu unendlichem Scrollen bereit, wenn sonst Orientierung, Rückkehr oder Footerzugriff beeinträchtigt werden.
- Teste Loading-, Empty-, Error-, Partial- und Success-Zustände.

## Zeit, Bewegung und Eingabeereignisse

- Zeitbegrenzungen können je nach Zweck abschaltbar, anpassbar oder ausreichend verlängerbar sein. Prüfe Warnung, Verlängerung, Datenverlust und Wiederaufnahme im vollständigen Ablauf; Sicherheits- oder Echtzeitausnahmen gelten nicht pauschal.
- Automatisch startende Bewegung, Blinken, Scrollen oder Aktualisieren kann Mechanismen zum Pausieren, Stoppen oder Ausblenden erfordern. `prefers-reduced-motion` ist eine wichtige Nutzerpräferenz, erfüllt aber nicht automatisch alle Anforderungen aus WCAG 2.2.2.
- Inhalte dürfen die normativen Grenzwerte für Flackern nicht überschreiten. Eine bloße Sichtprüfung kann grenznahe oder großflächige Effekte nicht zuverlässig bewerten.
- Zeichenbasierte Tastatur-Kurzbefehle können versehentlich durch Spracheingabe ausgelöst werden. Wenn ein einzelnes druckbares Zeichen ohne Modifikatortaste eine Funktion startet, müssen die Bedingungen von WCAG 2.1.4 geprüft werden.
- Pointer-Aktionen sollen nicht unnötig allein beim Down-Event abgeschlossen werden. Prüfe Abbruch, Rücknahme, Up-Event und wesentliche Ausnahmen.

## Navigation, Links und Buttons

- Linktexte müssen ihren Zweck im jeweiligen Kontext erkennen lassen. Wiederholtes „Mehr“ kann mit ausreichend Kontext zulässig sein, ist aber oft weniger robust als ein eigenständiger Name.
- Kennzeichne die aktuelle Seite oder den aktuellen Schritt sichtbar und, wo passend, programmatisch.
- Navigation soll in Reihenfolge und Benennung konsistent sein, sofern keine sinnvolle Änderung erforderlich ist.
- Seiten innerhalb eines Angebots brauchen, soweit das Erfolgskriterium anwendbar ist, mehr als einen Zugangsweg, etwa Navigation, Suche, Inhaltsverzeichnis oder Sitemap.
- Wiederkehrende Hilfe wie Kontaktoptionen, Selbsthilfe oder automatisierte Unterstützung soll in derselben relativen Reihenfolge erscheinen, sofern keine durch Nutzende ausgelöste Änderung vorliegt.
- Responsive Navigation braucht definierte Zustände für Öffnen, Schließen, Fokus und Vergrößerung. Ein Website-Menü ist meist eine Liste normaler Links, nicht automatisch ein ARIA-`menu`.
- Öffne neue Fenster nicht unerwartet; wenn es nötig ist, mache das Verhalten vor der Aktivierung verständlich.

Siehe [Navigation](patterns/navigation.md).

## Tabellen

Verwende Tabellen für Datenbeziehungen, nicht für Layout. Nutze `caption`, Kopfzellen und bei komplexeren Strukturen passende `scope`- oder `headers`-Beziehungen. Eine responsive Darstellung darf Beziehungen oder Daten nicht kommentarlos verlieren. Sortierung und Filterung benötigen klare Bedienelemente und Zustände. Ein ARIA-Grid ist ein interaktives Widget mit eigenem Tastaturmodell und kein Synonym für eine Datentabelle.

Siehe [Tabellen](patterns/tables.md).

## Bilder, Audio und Video

Textalternativen richten sich nach Zweck und Kontext:

- Informative Bilder brauchen eine äquivalente kurze Alternative oder bei komplexen Grafiken eine knappe Alternative plus ausführliche Beschreibung.
- Funktionale Bilder werden nach der Aktion oder dem Ziel benannt.
- Dekorative Bilder können mit leerem `alt` aus der Ausgabe genommen werden; CSS-Hintergründe dürfen keine alleinige Information tragen.
- Vermeide redundante Wörter wie „Bild von“, wenn die Rolle bereits vermittelt wird.

Zeitbasierte Medien können je nach Art und Konformitätsziel Untertitel, Audiodeskription, Transkript oder Medienalternative erfordern. Plane Alternativen vor der Produktion. Medien sollen nicht unerwartet starten; automatisch abgespieltes Audio und bewegte Inhalte unterliegen zusätzlichen Anforderungen.

Siehe [Content und Medien](references/content-and-media.md).

## Visuelle Zugänglichkeit

- Normaler Text benötigt für WCAG 2.2 AA in der Regel mindestens 4,5:1 Kontrast, großer Text mindestens 3:1; Definitionen und Ausnahmen sind mitzulesen.
- Für relevante grafische Objekte, Zustände und visuell erforderliche Grenzen gilt unter WCAG 1.4.11 häufig 3:1 zu angrenzenden Farben. Nicht jede dekorative Linie fällt darunter.
- Verwende Farbe nicht als einzigen Informationsträger.
- Inhalte müssen bei 200 % Textvergrößerung nutzbar bleiben und bei einer Breite entsprechend 320 CSS-Pixeln ohne zweidimensionales Scrollen reflowen, ausgenommen Inhalte, die dies wesentlich benötigen.
- Prüfe Textabstände gemäß WCAG 1.4.12, ohne Inhalte oder Funktionen zu verlieren.
- Unterstütze Forced Colors: erhalte native Controls, vermeide bedeutungstragende Hintergrundbilder und prüfe Fokus, Grenzen, Icons und Zustände.
- Vermeide unnötige Bewegung. Respektiere `prefers-reduced-motion`; eine Medienabfrage ersetzt nicht die Prüfung von Pause-, Stopp-, Blink- und Flash-Anforderungen.

Details und Grenzfälle: [Visuelle Zugänglichkeit](references/visual-accessibility.md).

## Touch, Pointer und responsive Nutzung

- Biete für Mehrpunkt- oder pfadbasierte Gesten eine Ein-Zeiger-Alternative, sofern die Geste nicht wesentlich ist.
- Eine Funktion, die Dragging nutzt, braucht unter WCAG 2.5.7 eine Bedienmöglichkeit ohne Ziehbewegung, sofern Dragging nicht wesentlich ist.
- Ziele müssen die Anforderungen von WCAG 2.5.8 einschließlich Abstands- und Ausnahmeregeln erfüllen. Größere Ziele als das Minimum sind eine sinnvolle Best Practice.
- Vermeide Auslösung allein beim Pointer-Down, wenn Abbruch oder Rücknahme erforderlich ist.
- Beschränke Ausrichtung oder Eingabemethode nicht ohne wesentlichen Grund.
- Teste schmale und hohe Viewports, Touch plus externe Tastatur sowie Vergrößerung ohne horizontale Inhaltsverluste.

## Authentifizierung

WCAG 2.2 begrenzt kognitive Funktionstests in Authentifizierungsprozessen, sofern keine zugängliche Alternative oder unterstützende Mechanik vorhanden ist. Ermögliche Passwortmanager und Einfügen, blockiere Zwischenablage nicht und vermeide Gedächtnisaufgaben. CAPTCHAs, Einmalcodes, Gerätewechsel und Timeouts brauchen Tests über den vollständigen Ablauf; Sicherheit und Accessibility sind gemeinsam zu gestalten.

Verlange Informationen innerhalb desselben Prozesses nicht unnötig erneut. Vorhandene Werte können automatisch eingesetzt oder zur Auswahl angeboten werden; notwendige Sicherheitsbestätigung und veraltete Daten sind kontextabhängig zu behandeln.

## Komplexe Widgets

Frage zuerst, ob das Widget nötig ist und ob native HTML- oder einfachere Inhaltsmodelle genügen. Bei Combobox, Tabs, Dialog, Menü, Tree, Grid oder Slider:

1. Zweck, Zustände und erwartete Eingaben definieren.
2. Passendes Pattern und unterstützte Plattformen prüfen.
3. Semantik, Fokusmodell und Tastaturinteraktion vollständig implementieren.
4. Pointer, Touch, Zoom, Screenreader und Fehlerzustände testen.
5. Bei unzureichender Robustheit vereinfachen.

Siehe [Dialog](patterns/dialog.md), [Combobox](patterns/combobox.md), [Tabs](patterns/tabs.md) und [ARIA und Komponenten](references/aria-and-components.md).

## Anforderungen und Akzeptanzkriterien

„Muss barrierefrei sein“ ist nicht testbar genug. Gute Akzeptanzkriterien benennen:

- betroffenen Nutzungspfad und relevante Zustände;
- erwartbares Ergebnis statt eine vorschnell festgelegte Technik;
- Eingabemethoden, Vergrößerung oder assistive Technologien, wenn relevant;
- anzuwendenden Standard, Version, Level oder projektspezifische Vereinbarung;
- manuelle und automatisierte Prüfschritte;
- bekannte Ausnahmen, Abhängigkeiten und nicht geprüfte Bereiche.

Beispiel: „Nach fehlerhaftem Absenden bleiben gültige Eingaben erhalten. Jeder Fehler wird in Text identifiziert, dem Feld programmatisch zugeordnet und per Tastatur erreichbar. Der vollständige Ablauf wird bei 400 % Zoom und mit Tastatur geprüft.“ Ob und wie Fokus verschoben wird, bleibt eine begründete Kontextentscheidung.

## Testing

Automatisierte Tools erkennen nur einen Teil möglicher Barrieren. Ein Lauf ohne Befunde ist kein Konformitätsnachweis. AI kann Code und Inhalte untersuchen, aber weder tatsächliche Bedienbarkeit noch Nutzerwirkung zuverlässig garantieren.

Eine belastbare Prüfung kombiniert:

- HTML- und Accessibility-Tree-Inspektion;
- Tastaturbedienung vorwärts und rückwärts;
- Zoom, Reflow, Textvergrößerung und Textabstände;
- Kontrast, Forced Colors und reduzierte Bewegung;
- Screenreader-orientierte Pfade mit einer dokumentierten Browser-/AT-Kombination;
- Touch, Pointer und alternative Eingaben entsprechend dem Produkt;
- automatisierte Checks in Entwicklung und CI;
- repräsentative Aufgaben, Zustände, Fehlersituationen und vollständige Prozesse;
- bei angemessenem Risiko Tests mit Menschen mit Behinderungen.

Dokumentiere Prüfgegenstand, Anwendbarkeit, Umgebung, Pfad, erwartetes und tatsächliches Ergebnis, Auswirkung, Evidenz, Empfehlung, Status und offene Punkte. Nutze bei umfassenden Prüfungen eine begründete Seitenauswahl und erfasse vollständige Prozesse. Mehr: [Testing](references/testing.md).

## Typische Antipatterns

- klickbare `div`- oder `span`-Elemente statt Links oder Buttons;
- `tabindex="0"` ohne passende Rolle und Bedienlogik;
- positive `tabindex`-Werte zur Reparatur visueller Reihenfolgen;
- `aria-label` als pauschale Lösung oder ein zugänglicher Name, der sichtbare Wörter nicht enthält;
- ARIA-Zustände, die nicht mit UI und Verhalten synchron sind;
- Placeholder als einziges Label;
- Fehler, Auswahl oder Status nur durch Farbe;
- Fokusentfernung mit `outline: none` ohne Ersatz;
- Hover-only-Inhalte oder kleine Icon-Ziele ohne robuste Alternative;
- Modals für normale Dokumentinhalte;
- automatisch wechselnde Carousels mit zentralen Inhalten;
- horizontales Abschneiden statt Reflow;
- Tests ausschließlich mit axe, Lighthouse oder einer AI-Ausgabe;
- pauschale Behauptungen über WCAG-Konformität nach Komponenten- oder Seitentests.

## Fachliche Grundlage

Der universelle Kern stützt sich auf [WCAG 2.2](https://www.w3.org/TR/WCAG22/), den [HTML Standard](https://html.spec.whatwg.org/), [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/) und den [APG](https://www.w3.org/WAI/ARIA/apg/). Einordnung, Quellenstatus und jurisdiktionsabhängige Standards stehen in [Standards und Primärquellen](references/standards.md).

Wenn eine Aussage für Audit, Vertrag, Beschaffung oder Recht entscheidend ist, prüfe den exakten Wortlaut der aktuellen Primärquelle und den vereinbarten Geltungsbereich.
