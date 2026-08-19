# Tabs

Tabs zeigen jeweils ein Panel aus einer zusammengehörigen Gruppe. Nutze normale Überschriften oder Navigation, wenn Inhalte gleichzeitig sichtbar beziehungsweise eigenständig verlinkbar sein sollen.

## Pattern

- Tablist, Tabs und Panels müssen korrekt benannt und miteinander verbunden sein.
- In der Tabgruppe ist üblicherweise nur der aktive Tab in der Tabreihenfolge; Pfeiltasten bewegen innerhalb der Gruppe.
- Automatische Aktivierung beim Fokus ist nur sinnvoll, wenn Panels ohne merkliche Verzögerung bereitstehen. Sonst kann explizite Aktivierung mit Enter/Leertaste besser sein.
- Tab, Auswahlzustand und sichtbares Panel bleiben synchron. Ein Panel erhält nur dann `tabindex="0"`, wenn es sonst keinen sinnvollen Fokusstart enthält und dies dem Modell dient.
- Home/End und Löschfunktionen sind laut APG je nach Variante optional; implementierte Tasten müssen konsistent sein.
- Bei responsiver Umgestaltung Semantik und Reihenfolge neu prüfen.

Quelle: [APG Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).
