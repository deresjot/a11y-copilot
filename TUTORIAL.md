# Von der Frage zum belastbaren Ergebnis

Du lieferst den echten Kontext. Der a11y-copilot ordnet ein, belegt und begrenzt seine Aussage. Am Ende siehst du sofort, was bearbeitet wurde und was noch praktisch geprüft werden muss.

## Schritt 1 von 7: Was soll am Ende vorliegen?

- **KI-Chat:** Startpaket nutzen.
- **Arbeit im Code:** Projektdateien ergänzen.
- **Nachschlagen:** direkt in die fachliche Quelle einsteigen.

Du musst nicht jedes Mal das ganze Repository laden.

## Schritt 2 von 7: Ein Paket, eine gemeinsame Grundlage

Klicke auf der Website auf **„Startpaket kopieren“**. Damit kopierst du die kurze Startanweisung und die fachliche Arbeitsgrundlage zusammen. Du musst nichts einzeln zusammensuchen.

## Schritt 3 von 7: Erst Grundlage, dann Auftrag

Füge das Startpaket als erste Nachricht in deinen KI-Chat ein. Die KI soll den Erhalt kurz bestätigen und auf deine Aufgabe warten. Wenn du später einen neuen Chat anfängst, kopierst du das Paket einfach noch einmal hinein.

## Schritt 4 von 7: Beschreibe den Moment, der funktionieren muss

Nenne Ziel, betroffene Seite oder Funktion und das gewünschte Ergebnis. Ergänze Code, Text, Screenshot oder URL, wenn vorhanden. Zum Beispiel:

> Nach einem Eingabefehler soll die Person das Formular verstehen, korrigieren und ohne Datenverlust absenden können.

Gib mit, was du weißt. Die KI soll mit den vorhandenen Angaben arbeiten und nur nachfragen, wenn eine entscheidende Information fehlt.

## Schritt 5 von 7: Was wurde wirklich bearbeitet?

Die Antwort soll mit dem Ergebnis beginnen: Was wurde angesehen, vorgeschlagen, geändert oder getestet? Danach folgen konkrete Befunde, Maßnahmen und offene Punkte. Eine gewöhnliche Antwort soll kurz bleiben; ausführliche Berichte kannst du ausdrücklich anfordern.

Wichtige Regeln brauchen einen geprüften Beleg. Vermutungen und nicht durchgeführte Tests sollen erkennbar sein. Fehlt eine entscheidende Quelle, soll die KI gezielt nachschlagen. Umfangreiche Recherche ist für eine normale Einzelaufgabe kein Pflichtschritt. Wenn die Aufgabe bearbeitet ist, soll die KI abschließen.

## Schritt 6 von 7: Der Agent arbeitet am konkreten Artefakt

Dann soll dein Coding-Agent zuerst [SKILL.md](SKILL.md) und [ACCESSIBILITY.md](ACCESSIBILITY.md) lesen. Weitere Dateien lädt er nur, wenn sie für deine Aufgabe wirklich nötig sind. Automatische Testergebnisse mit dem Status `incomplete` sind keine Entwarnung: Diese Punkte müssen noch von einem Menschen geprüft werden.

Ein einfacher Beispielauftrag:

```text
Lies SKILL.md und ACCESSIBILITY.md. Untersuche im beigefügten Checkout-Code
die Feldbeschriftungen und Fehlermeldungen. Behebe belegte Probleme und teste
die betroffenen Zustände, soweit dein Werkzeugzugang das ermöglicht.
Beginne mit dem Ergebnis: Was wurde geändert, was wurde tatsächlich geprüft,
was bleibt offen? Nenne zu jedem Befund die konkrete Stelle und den Beleg.
```

## Schritt 7 von 7: Die letzte Antwort gibt das Produkt

Prüfe vorgeschlagene Änderungen im echten Ablauf: zum Beispiel mit Tastatur, Vergrößerung und einem kleinen Bildschirm. Je nach Änderung und Risiko gehören auch Screenreader-Tests und Tests mit Menschen dazu. Sieh im Ergebnis nach, welche Prüfungen tatsächlich erfolgt sind und welche noch fehlen.

Kurz gesagt: KI und automatische Tests helfen dir. Sie können aber nicht allein beweisen, dass wirklich alles barrierefrei oder rechtlich konform ist.
