# Tastatur und Fokus

## Basistest

- Seite neu laden und nur mit Tastatur bedienen.
- Vorwärts und rückwärts navigieren; Reihenfolge, Sichtbarkeit und Zweck jedes Fokusziels prüfen.
- Alle Aktionen auslösen und Abbruchwege testen.
- Overlays, Fehler, Nachladen, Entfernen und Routenwechsel prüfen.
- Test bei 400 % Zoom und mit Sticky-/Fixed-Elementen wiederholen.
- Zeichenbasierte Shortcuts ohne Modifikatortaste mit Spracheingabe und bei Fokus in Eingabefeldern prüfen; Abschalten, Neuzuordnung oder Begrenzung auf Komponentenfokus kann erforderlich sein.

## Implementierung

Native Controls liefern erwartete Tasteninteraktion. Für zusammengesetzte Widgets kann ein roving `tabindex` oder `aria-activedescendant` passen; wähle genau das Tastaturmodell des Patterns und teste es vollständig. Fokus und Auswahl sind getrennte Zustände.

`tabindex="-1"` kann ein programmatisches Fokusziel erzeugen. `tabindex="0"` nimmt ein Element in die Tabreihenfolge auf, liefert aber weder Rolle noch Aktion. Positive Werte sind selten robust.

## Fokusmanagement

- Setze initialen Fokus in Dialogen abhängig von Inhalt, Risiko und erwarteter Aufgabe: erstes sinnvolles Control, statische Überschrift/Einleitung oder am wenigsten destruktive Aktion können jeweils passen.
- Nach asynchronen Änderungen Fokus nicht reflexartig verschieben. Eine Statusmeldung kann besser sein.
- Entfernte fokussierte Elemente brauchen ein logisch angrenzendes Ersatzziel.
- Bei clientseitiger Navigation können Dokumenttitel, Fokus auf Hauptüberschrift oder Hauptinhalt und Statusmeldung gemeinsam Orientierung schaffen; das genaue Modell ist kontextabhängig.
- Fokusindikatoren brauchen ausreichende Sichtbarkeit, Kontrast und Fläche. `:focus-visible` kann Pointer- und Tastaturdarstellung differenzieren, darf aber relevante Eingabesituationen nicht ausblenden.

## Fallen

Keyboard-Event-Simulation ersetzt keinen manuellen Test. Prüfe System- und Browserkonventionen, besonders auf macOS. Ein Fokus-Trap ist nur in einem tatsächlich modalen Kontext angemessen; Hintergrundinhalte müssen dann auch visuell und programmatisch inaktiv sein.

Unterscheide Fokus-Sichtbarkeit von Fokus-Verdeckung: Ein sichtbarer Indikator betrifft WCAG 2.4.7. WCAG 2.4.11 verlangt auf Level AA, dass die fokussierte Komponente nicht vollständig durch autorenseitigen Inhalt verdeckt wird. Prüfe Sticky Header, Footer, Cookie-Hinweise und nicht-modale Overlays bei verschiedenen Viewports.
