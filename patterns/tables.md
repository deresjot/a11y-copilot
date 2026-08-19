# Tabellen

## Pattern

- Nutze native Tabellen für Daten mit Zeilen-/Spaltenbeziehungen; Layout gehört in CSS.
- Eine `caption` beschreibt Zweck oder Kontext. Kopfzellen brauchen passende Beziehungen über Struktur, `scope` oder bei komplexen Tabellen `headers`/`id`.
- Sortierung erfolgt über echte Buttons in Kopfzellen. Der Zustand muss sichtbar und programmatisch verständlich sein; `aria-sort` gehört auf die betroffene Kopfzelle.
- Biete bei großen Tabellen Filtern, Suche, Pagination oder Downloads an, ohne den Informationszugang einzuschränken.
- Auf kleinen Viewports darf horizontales Scrollen für die zweidimensionale Tabelle notwendig sein. Der restliche Seiteninhalt soll reflowen; Fokus und Überschriftenbezug müssen erhalten bleiben.
- Ein Kartenlayout ist nur dann eine Alternative, wenn keine wesentlichen Beziehungen verloren gehen.

## Interaktive Grids

Ein ARIA-Grid ist für app-ähnliche Zellnavigation. Es verlangt ein vollständiges Pfeiltasten- und Fokusmodell und ist für statische Tabellen meist unnötig. Siehe [APG Grid Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/).
