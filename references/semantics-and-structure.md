# Semantik und Struktur

## Prüfreihenfolge

1. Inhalte ohne CSS in DOM-Reihenfolge lesen.
2. Dokumenttitel, Sprache, Hauptüberschrift und weitere Überschriften prüfen.
3. Landmarken, Navigation, Listen, Zitate, Tabellen und Formgruppen semantisch prüfen.
4. Accessibility Tree auf Namen und Beziehungen kontrollieren.
5. Bei 400 % Zoom und veränderten Textabständen erneut prüfen.

## Leitplanken

- Ein `main`-Bereich pro dargestelltem Dokument ist eine robuste Grundlage. Wiederholte Navigationsbereiche können mit unterscheidbaren Namen versehen werden.
- Überschriftenebenen folgen der Inhaltsstruktur. Eine übersprungene Ebene ist nicht pauschal ein WCAG-Verstoß; eine unverständliche Hierarchie kann dennoch Barrieren erzeugen.
- `section` erhält nicht automatisch einen zugänglichen Namen und ist kein Ersatz für jede Layoutgruppe.
- Listenmarkup bildet Zusammengehörigkeit ab. Verwende Tabellen nur, wenn Zeilen-/Spaltenbeziehungen relevant sind.
- Sichtbare Reihenfolge, Lesereihenfolge und Fokusreihenfolge sollen dasselbe Verständnis ermöglichen.
- `display: contents`, CSS-Reordering, Shadow DOM und Portals können die zugängliche Struktur oder Navigation je nach Browser beeinflussen und brauchen Zielplattformtests.

## Elementwahl

Wähle zuerst die Bedeutung des Inhalts und erst danach das Element. Die [MDN-Elementreferenz](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements) ist ein guter Arbeitsindex; für normative Entscheidungen bleibt der [HTML Standard](https://html.spec.whatwg.org/) maßgeblich.

- `header`, `main`, `nav` und `footer` bilden wiederkehrende Seitenbereiche ab. Mehrere gleichartige Landmarken erhalten unterscheidbare Namen, wenn sie sonst nicht auseinanderzuhalten sind.
- `section` ist für einen eigenständigen thematischen Abschnitt gedacht und braucht im Regelfall eine Überschrift. Ein reiner Layout-Wrapper bleibt besser ein `div`.
- `article` passt zu eigenständig nutzbaren oder wiederverwendbaren Inhalten; `aside` zu ergänzendem, nur indirekt verbundenem Inhalt.
- `address` enthält Kontaktinformation zur nächstgelegenen Person, Organisation oder zum zugehörigen Artikel, nicht jede beliebige Anschrift. `time` macht Datum oder Zeitpunkt maschinenlesbar.
- `figure` und `figcaption` verbinden selbstständigen Inhalt mit seiner Beschriftung. Sie ersetzen keinen kontextgerechten Alternativtext.
- `details` und `summary` sind für Offenlegen und Verbergen gedacht. Halte `summary` als erstes Kind einfach und teste Browser-/Screenreader-Kombinationen, weil verschachtelte Überschriften nicht überall gleich abgebildet werden.
- `dialog` ist für einen Dialog oder eine modale Teilaufgabe gedacht, nicht für normale Dokumentnavigation. Öffne modale Dialoge mit `showModal()`, biete einen sichtbaren Schließbutton und plane Anfangs- sowie Rückkehrfokus passend zur Aufgabe.

Prüfe nach der Elementwahl, ob Inhalt ohne JavaScript erreichbar bleibt, ob native Tastaturbedienung erhalten ist und ob zusätzliche ARIA überhaupt noch benötigt wird.

## Links und Bedienelemente

Ein Link führt zu einer Ressource oder Position; ein Button löst eine Aktion aus. Styling ändert die Semantik nicht. Vermeide verschachtelte interaktive Elemente. Namen sollen unterscheidbar, knapp und zweckbezogen sein; zusätzlicher Kontext darf einbezogen werden, wenn er programmatisch bestimmbar ist.

## Tabellen

Einfache Tabellen nutzen `table`, optional `caption`, `th` und sinnvolle `scope`-Werte. Komplexe mehrstufige Beziehungen können explizite `headers`/`id`-Zuordnung oder eine vereinfachte Darstellung brauchen. Visuell ausgeblendete Spalten, Kartenansichten und Sticky-Header sind darauf zu prüfen, ob Beziehungen und Fokus erhalten bleiben.
