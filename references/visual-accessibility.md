# Visuelle Zugänglichkeit

## Kontrast und Farbe

Prüfe Textkontrast in allen Zuständen, einschließlich Placeholder, deaktivierten Darstellungen, Hover, Fokus, Fehler und Auswahl. Die normativen Ausnahmen für Logos, inaktive Komponenten und rein dekorative Inhalte müssen exakt gelesen werden. Nicht-Text-Kontrast betrifft visuelle Information, die zum Erkennen von Controls, Zuständen und grafischen Objekten erforderlich ist.

Information braucht neben Farbe Form, Text, Muster, Position oder ein anderes Merkmal. Das gilt auch für Charts, Pflichtfelder, Fehler und Links im Fließtext.

## Vergrößerung und Reflow

Prüfe mindestens:

- Browserzoom 200 % und 400 %;
- Viewport 320 CSS-Pixel Breite beziehungsweise äquivalente Vergrößerung;
- Text-only-Vergrößerung auf 200 %;
- WCAG-Textabstände;
- lange Wörter, URLs, lokalisierte Texte und dynamische Fehlermeldungen.

Zweidimensionales Scrollen kann für Datentabellen, Karten, Diagramme oder andere zweidimensionale Inhalte wesentlich sein. Halte umliegende Bedienung und Seite dennoch nutzbar.

## Forced Colors

Teste mit Windows High Contrast/Forced Colors. Verwende Systemfarben und `currentColor`, wo sinnvoll. Rahmen oder Icons, die nur durch Hintergrundbilder entstehen, können verschwinden. `forced-color-adjust: none` ist eine gezielte Ausnahme, keine pauschale Reparatur; danach muss der Kontrast selbst abgesichert werden.

## Bewegung

Reduziere nicht wesentliche Animation bei `prefers-reduced-motion: reduce`. Biete für automatisch startende, länger laufende oder parallel dargestellte Bewegung passende Steuerung, wenn der normative Scope greift. Vermeide Flashes oberhalb zulässiger Schwellen. Bewegung aus Interaktion und vestibuläre Risiken brauchen eigene Bewertung.
