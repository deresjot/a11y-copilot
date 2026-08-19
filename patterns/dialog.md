# Dialog

Ein Dialog ist ein fokussierter Interaktionskontext. Verwende ihn nur, wenn eine Unterbrechung oder begrenzte Teilaufgabe sinnvoller ist als normaler Seiteninhalt.

## Pattern

- Bevorzuge bei geeigneter Unterstützung das native `dialog`-Element mit `showModal()`; prüfe Semantik und Verhalten in der Zielumgebung.
- Gib dem Dialog einen sichtbaren, programmatisch zugeordneten Titel. Eine zusätzliche Beschreibung ist nur sinnvoll, wenn sie kurz und hilfreich ist.
- Setze den initialen Fokus kontextabhängig. Bei langen oder strukturierten Inhalten kann eine fokussierbare Überschrift/Einleitung sinnvoller sein als das erste Control.
- Halte Tastaturfokus in einem modalen Dialog. Der Hintergrund muss auch programmatisch inaktiv sein.
- Biete eine sichtbare Schließmöglichkeit. Escape schließt gemäß nativem Dialogverhalten beziehungsweise APG typischerweise modale Dialoge; kritische Workflows können zusätzlich vor Datenverlust schützen.
- Gib Fokus beim Schließen meist zum Auslöser zurück. Wurde er entfernt oder führt der nächste Schritt weiter, wähle ein logisches Ziel.
- Teste Scrollen, kleine Viewports, 400 % Zoom, Screenreader, verschachtelte Inhalte und Abbruch.

## Antipatterns

Lange Dokumente gehören normalerweise auf eine eigene, verlinkbare Seite. Eine begründete Ausnahme kann eine klar begrenzte Transferaufgabe sein, bei der Menschen maschinenlesbaren Inhalt prüfen und vollständig in ein anderes Werkzeug kopieren. Dann braucht der Dialog einen direkten Dateilink als Fallback, eine eindeutige Kopieraktion, verständliche Rückmeldung, robuste Fokus-Rückkehr und eine scrollbare Darstellung. Weitere Antipatterns sind mehrere verschachtelte Dialoge, Icon-only-Schließen ohne Namen, Fokus im Hintergrund und automatische Fokuswahl auf destruktive Aktionen.

Quelle: [APG Dialog (Modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/). APG ist eine informative Patternreferenz, keine eigene WCAG-Anforderung.
