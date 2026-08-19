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

## Links und Bedienelemente

Ein Link führt zu einer Ressource oder Position; ein Button löst eine Aktion aus. Styling ändert die Semantik nicht. Vermeide verschachtelte interaktive Elemente. Namen sollen unterscheidbar, knapp und zweckbezogen sein; zusätzlicher Kontext darf einbezogen werden, wenn er programmatisch bestimmbar ist.

## Tabellen

Einfache Tabellen nutzen `table`, optional `caption`, `th` und sinnvolle `scope`-Werte. Komplexe mehrstufige Beziehungen können explizite `headers`/`id`-Zuordnung oder eine vereinfachte Darstellung brauchen. Visuell ausgeblendete Spalten, Kartenansichten und Sticky-Header sind darauf zu prüfen, ob Beziehungen und Fokus erhalten bleiben.
