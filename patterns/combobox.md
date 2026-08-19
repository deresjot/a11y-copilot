# Combobox

Eine Combobox verbindet Eingabe oder Auswahl mit einem Popup. Sie ist ein komplexes Widget; für einfache Auswahlen sind `select`, Radiobuttons oder ein normales Suchfeld oft robuster.

## Pattern

- Wähle die APG-Variante passend zu editierbar/nicht editierbar, Autocomplete und Auswahlmodell.
- Verknüpfe Eingabe, Popup und Optionen programmatisch. Halte geöffneten Zustand, aktiven Nachfahren, Wert und Auswahl synchron.
- Definiere Tastaturverhalten für Öffnen, Pfeilnavigation, Auswahl, Escape und Tab. Überschreibe Textbearbeitungstasten eines editierbaren Felds nicht unnötig.
- Unterscheide DOM-Fokus, visuell aktive Option und ausgewählten Wert.
- Melde Trefferzahl, „keine Ergebnisse“, Lade- und Fehlerzustand zurückhaltend und verständlich.
- Stelle Pointer-, Touch- und Tastaturbedienung gleichwertig bereit. Virtualisierung darf aktive Optionen und Beziehungen nicht aus dem zugänglichen Kontext entfernen.
- Teste mehrere Browser-/Screenreader-Kombinationen; vereinfachte native Alternativen mitprüfen.

Quelle: [APG Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/).
