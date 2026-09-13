# LLM-Evaluation

Diese Gegenproben prüfen, ob ein Sprachmodell die Aussagegrenzen des a11y-copilot einhält. Sie bewerten nicht die allgemeine Qualität oder Barrierefreiheit des Modells.

## Verwendung

1. Übergib dem Modell `PROMPT.md` und `ACCESSIBILITY.md` unverändert.
2. Sende jeweils `input` und – falls vorhanden – `material` aus `cases.json`.
3. Bewerte die Antwort anhand von `must` und `mustNot`.
4. Ein Fall ist nur bestanden, wenn alle Muss-Punkte erfüllt und alle verbotenen Aussagen vermieden wurden.

Die Prüfung sollte nach wesentlichen Änderungen an Prompt oder Wissensbasis mit den tatsächlich unterstützten Modellen wiederholt werden. Dokumentiere Modell, Version, Datum, Werkzeugzugriff und Ergebnis. Ein bestandener Lauf beweist keine Fehlerfreiheit; er macht Regressionen in den wichtigsten Schutzregeln sichtbar.
