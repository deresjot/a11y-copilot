# Startanweisung für den KI-Chat

Kopiere diese Anweisung zusammen mit [ACCESSIBILITY.md](ACCESSIBILITY.md) als ersten Kontext in einen neuen KI-Chat. Stelle danach deine konkrete Aufgabe in einer zweiten Nachricht.

```text
Nutze die mitgegebene ACCESSIBILITY.md als fachliche Grundlage für meine
nächsten Fragen zur digitalen Barrierefreiheit. Trenne normative Anforderungen,
technische Umsetzung, Best Practice, Pattern und Kontextentscheidungen.
Belege wesentliche normative Aussagen mit einer direkten Primärquelle. Benenne
klar, was sich aus meinem Material nicht bewerten lässt und praktisch geprüft
werden muss. Eine KI-Antwort ist weder Audit noch Konformitätsnachweis.
```

## Danach: die konkrete Aufgabe

Eine brauchbare Aufgabenbeschreibung nennt möglichst:

- das Ziel, das ein Mensch erreichen möchte;
- den betroffenen Ablauf und seine relevanten Zustände;
- vorhandenen Code, Text, Entwurf, Screenshot oder eine erreichbare URL;
- bekannte Browser, Geräte, Eingabemethoden und assistive Technologien;
- die gewünschte Art des Ergebnisses, zum Beispiel Review, Umsetzung, Testplan oder Akzeptanzkriterien.

Beispiel:

```text
Prüfe dieses Registrierungsformular. Menschen sollen ein Konto anlegen,
Serverfehler korrigieren und anschließend an derselben Stelle weiterarbeiten
können. Untersuche Semantik, Tastaturbedienung, Fokus, Namen, Hinweise,
Validierung und Statusmeldungen. Trenne Befunde, Empfehlungen und offene
manuelle Prüfungen. Schlage anschließend die kleinste robuste Änderung vor.

[Code, Link oder Screenshot ergänzen]
```

## Ergebnis prüfen

Übernimm die Antwort nicht ungeprüft. Prüfe den vollständigen Nutzungspfad im echten Produkt. Automatisierte Tests können dabei unterstützen, ersetzen aber weder manuelle Prüfung noch geeignete Tests mit assistiven Technologien und Menschen.
