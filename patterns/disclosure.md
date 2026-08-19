# Disclosure und Accordion

Für einen einzelnen aufklappbaren Bereich kann `details`/`summary` passend sein. Ein Button mit `aria-expanded` und `aria-controls` kann sinnvoll sein, wenn eigenes Verhalten oder Styling erforderlich ist. Ein Accordion gruppiert mehrere solcher Bereiche unter Überschriften.

## Pattern

- Auslöser sind verständlich benannte Buttons beziehungsweise `summary`-Elemente.
- Zustand ist sichtbar und programmatisch ermittelbar.
- Verborgene Inhalte sind nicht fokussierbar oder anderweitig bedienbar.
- Ein-/Ausklappen verschiebt Fokus nicht unerwartet.
- Im Accordion stehen Buttons in einer nachvollziehbaren Überschriftenstruktur. APG-Pfeiltasten zwischen Headern sind optional, nicht pauschal erforderlich.
- Prüfe Drucken, Suche-im-Dokument, Deep Links und ob das Verbergen überhaupt hilfreich ist.

Quellen: [APG Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) und [APG Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).
