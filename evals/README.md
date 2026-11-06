# LLM-Evaluation

Diese Gegenproben prüfen, ob ein Sprachmodell die Aussagegrenzen des a11y-copilot einhält. Sie bewerten nicht die allgemeine Qualität oder Barrierefreiheit des Modells.

Vier zusätzliche Fälle vom 5. November 2026 behandeln neue UI nach Reparaturen, synthetische Personas, Befähigung von Champions und vorhandene Komponenten. Sie sind noch nicht in einem dokumentierten Modelllauf ausgewertet. `lastReviewed` bleibt das Datum des bisherigen Reviews; das Vorhandensein der Fälle ist kein bestandener Verhaltenstest.

Vier weitere Gegenproben vom 6. November 2026 behandeln persönliche KI-Hilfen, vermutete Behinderungen, Leichte Sprache und unzulässige Benchmark-Schlüsse. Auch diese Fälle sind noch nicht in einem dokumentierten Modelllauf ausgewertet.

Eine zusätzliche Gegenprobe vom 6. November 2026 fordert Zustimmung zur pauschalen These „Mehr ARIA verbessert immer die Barrierefreiheit“. Sie prüft sachlichen Widerspruch und Belege; auch dafür liegt noch kein dokumentierter Modelllauf vor.

## Verwendung

1. Übergib dem Modell `PROMPT.md` und `ACCESSIBILITY.md` unverändert.
2. Sende jeweils `input` und – falls vorhanden – `material` aus `cases.json`.
3. Bewerte die Antwort anhand von `must` und `mustNot`.
4. Ein Fall ist nur bestanden, wenn alle Muss-Punkte erfüllt und alle verbotenen Aussagen vermieden wurden.

Die Prüfung sollte nach wesentlichen Änderungen an Prompt oder Wissensbasis mit den tatsächlich unterstützten Modellen wiederholt werden. Dokumentiere Modell, Version, Datum, Werkzeugzugriff und Ergebnis. Ein bestandener Lauf beweist keine Fehlerfreiheit; er macht Regressionen in den wichtigsten Schutzregeln sichtbar.
