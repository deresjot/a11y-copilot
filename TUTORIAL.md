# a11y-copilot benutzen

`a11y-copilot` ist fachlicher Kontext für Menschen und KI-Systeme. Die Dateien prüfen keine Website selbstständig. Sie helfen einem Sprachmodell oder Coding-Agenten, Accessibility-Fragen einzuordnen, relevante Quellen zu wählen, Grenzen zu benennen und aus einer konkreten Aufgabe prüfbare nächste Schritte abzuleiten.

Wähle den Weg, der zu deiner Aufgabe passt. Du musst nicht das gesamte Repository in jeden Chat kopieren.

## 1. Eine konkrete Frage im KI-Chat

Dieser Weg passt für einen einzelnen Text, Entwurf, Screenshot, Codeausschnitt oder Nutzungspfad.

1. Öffne einen neuen KI-Chat.
2. Gib [PROMPT.md](PROMPT.md) und [ACCESSIBILITY.md](ACCESSIBILITY.md) als ersten Kontext mit. Die Website fasst beides als **Startpaket** zusammen und kopiert es mit einer Aktion.
3. Stelle deine konkrete Aufgabe in einer zweiten Nachricht. Nenne Ziel, Ablauf, relevante Zustände und vorhandenes Material.
4. Verlange direkte Quellen für normative Aussagen und eine klare Liste der Punkte, die praktisch geprüft werden müssen.
5. Prüfe die vorgeschlagene Lösung im echten Produkt.

Der KI-Chat darf die Startanweisung bestätigen, soll aber nicht die komplette Arbeitsgrundlage wiederholen. Bei einer langen Unterhaltung oder einem neuen Chat gibst du das Startpaket erneut mit.

## 2. In einem Repository oder mit einem Coding-Agenten arbeiten

Dieser Weg passt, wenn ein Agent Code, Dokumentation oder Tests im Projekt untersuchen und verändern darf.

Stelle mindestens diese Inhalte als Repository- oder Projektkontext bereit:

- [SKILL.md](SKILL.md) für den Arbeitsablauf;
- [ACCESSIBILITY.md](ACCESSIBILITY.md) als fachliche Hauptquelle;
- `references/` für thematische Vertiefungen;
- `patterns/` für konkrete Komponenten.

Beispielauftrag:

```text
Lies SKILL.md und die dort vorgeschriebene ACCESSIBILITY.md vollständig.
Untersuche anschließend den Checkout-Prozess dieses Repositorys auf digitale
Barrierefreiheit. Lade nur die für die Aufgabe benötigten Referenzen und
Patterns. Bestimme vor einer Änderung Ursache, Nutzerwirkung, belastbaren
Normbezug und Teststrategie. Implementiere und prüfe danach die kleinste
robuste Lösung. Dokumentiere auch, was nicht geprüft werden konnte.
```

Der Agent soll Zusammenhänge gemeinsam bearbeiten. Eine Rollenwahl ist nicht nötig: Ein Dialog kann gleichzeitig Semantik, visuelle Gestaltung, Fokusmanagement, verständliche Beschriftungen und Tests betreffen.

## 3. Selbst nachschlagen und vertiefen

Dieser Weg passt, wenn du eine Aussage, Quelle oder Komponente direkt nachvollziehen möchtest.

- [ACCESSIBILITY.md](ACCESSIBILITY.md) enthält den gemeinsamen fachlichen Kern.
- [Standards und Primärquellen](references/standards.md) ordnet WCAG, HTML, WAI-ARIA, APG, BIK und rechtliche Bezüge ein.
- Die übrigen Dateien unter `references/` vertiefen Semantik, Tastatur und Fokus, Formulare, visuelle Zugänglichkeit, Medien, ARIA und Testing.
- `patterns/` beschreibt wiederkehrende Komponenten wie Dialoge, Tabs, Comboboxes, Navigation, Formulare und Tabellen.

Vertiefungen ersetzen die Hauptquelle nicht. Sie werden nur hinzugezogen, wenn die konkrete Aufgabe sie braucht.

## Was eine gute Aufgabe enthält

Beschreibe möglichst:

- das Ziel des Menschen statt nur den Namen einer Komponente;
- den vollständigen Ablauf und relevante Initial-, Lade-, Fehler- und Erfolgszustände;
- Code, Text, Entwurf, Screenshot oder URL;
- bekannte Browser, Geräte, Eingabemethoden und assistive Technologien;
- ob du einen fokussierten Review, eine Umsetzung, einen Testplan oder eine konformitätsorientierte Prüfung erwartest.

Ein brauchbares Beispiel steht in [PROMPT.md](PROMPT.md).

## Ergebnis und Grenzen

Eine überzeugend klingende Antwort ist kein Nachweis. Übernimm Änderungen nicht ungeprüft. Dokumentiere den geprüften Scope, die verwendeten Umgebungen und Methoden, reproduzierbare Evidenz, offene manuelle Prüfungen und nicht erreichbare Bereiche. Ein automatisierter Lauf, eine einzelne Browser-/Screenreader-Kombination oder eine KI-Ausgabe belegt keine vollständige Barrierefreiheit und keine rechtliche Konformität.
