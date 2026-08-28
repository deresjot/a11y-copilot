# a11y-copilot benutzen

`a11y-copilot` gibt Menschen und KI-Systemen eine gemeinsame fachliche Grundlage. Er prüft kein Produkt selbstständig im Hintergrund. Du wählst den passenden Einstieg, gibst den nötigen Kontext und prüfst das Ergebnis anschließend im echten Produkt.

## Schritt 1 von 7: Den passenden Weg wählen

- **Konkrete Frage im KI-Chat:** Verwende das Startpaket aus [PROMPT.md](PROMPT.md) und [ACCESSIBILITY.md](ACCESSIBILITY.md).
- **Arbeit im Repository:** Verwende zusätzlich [SKILL.md](SKILL.md), die nötigen Dateien aus `references/` und `patterns/` sowie bei automatisierten Prüfungen `rulesets/`.
- **Selbst nachschlagen:** Beginne mit der Arbeitsgrundlage und folge nur den thematisch passenden Vertiefungen.

Du musst nicht das gesamte Repository in jeden Chat kopieren.

## Schritt 2 von 7: Das Startpaket vorbereiten

Die Website kopiert Startanweisung und Arbeitsgrundlage mit „Startpaket kopieren“ gemeinsam. Alternativ stellst du beide Dateien als ersten Kontext eines neuen Chats bereit. Der KI-Chat soll die Grundlage anwenden, aber nicht vollständig wiederholen.

## Schritt 3 von 7: Einen neuen KI-Chat beginnen

Füge das Startpaket als erste Nachricht in den KI-Chat oder Assistenten ein, den du ohnehin verwendest. Bei einem neuen Chat oder wenn der Kontext nicht mehr zuverlässig vorhanden ist, gib das Startpaket erneut mit.

## Schritt 4 von 7: Die Aufgabe konkret beschreiben

Nenne möglichst:

- das Ziel des Menschen;
- den vollständigen Ablauf und relevante Initial-, Lade-, Fehler- und Erfolgszustände;
- Code, Text, Entwurf, Screenshot oder URL;
- bekannte Browser, Geräte, Eingabemethoden und assistive Technologien;
- ob du Review, Umsetzung, Testplan oder konformitätsorientierte Prüfung erwartest.

## Schritt 5 von 7: Quellen und Aussagegrenzen verlangen

Bitte um direkte Primärquellen für normative Aussagen. Lass unterscheiden, was normative Anforderung, belastbare Umsetzung, Best Practice, Pattern oder Kontextentscheidung ist. Nicht praktisch geprüfte Punkte müssen als offen benannt werden.

## Schritt 6 von 7: Im Repository arbeiten

Ein Coding-Agent liest zuerst [SKILL.md](SKILL.md) und [ACCESSIBILITY.md](ACCESSIBILITY.md). Danach lädt er nur die für die Aufgabe notwendigen Vertiefungen. Für automatisierte Tests wählt er das fachliche Profil aus [`rulesets/catalog.json`](rulesets/catalog.json), protokolliert die tatsächliche Engine-Version und Regel-IDs und behandelt `incomplete` als manuelle Prüfliste.

Beispielauftrag:

```text
Lies SKILL.md und ACCESSIBILITY.md vollständig. Untersuche anschließend den
Checkout-Prozess dieses Repositorys auf digitale Barrierefreiheit. Lade nur
die benötigten Referenzen, Patterns und Ruleset-Profile. Bestimme vor einer
Änderung Ursache, Nutzerwirkung, belastbaren Normbezug und Teststrategie.
Implementiere und prüfe die kleinste robuste Lösung. Dokumentiere auch, was
nicht geprüft werden konnte.
```

## Schritt 7 von 7: Das Ergebnis im Produkt prüfen

Eine überzeugend klingende Antwort ist kein Nachweis. Prüfe Änderungen im vollständigen Ablauf und in den relevanten Zuständen. Dokumentiere Scope, Browser, Viewports, Eingabemethoden, assistive Technologien, automatisierte Ergebnisse, manuelle Evidenz und offene Punkte. Abhängig von Risiko und Anspruch gehören Tests mit Menschen hinzu.

Ein automatisierter Lauf, eine einzelne Browser-/Screenreader-Kombination oder eine KI-Ausgabe belegt keine vollständige Barrierefreiheit und keine rechtliche Konformität.
