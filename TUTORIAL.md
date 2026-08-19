# a11y-copilot benutzen

`a11y-copilot` ist Kontext für eine LLM. Die Markdown-Datei wird nicht ausgeführt und sie prüft auch nicht selbstständig eine Website. Du gibst sie einem Sprachmodell, bevor du eine konkrete Accessibility-Frage stellst. Dadurch kennt das Modell die fachlichen Leitplanken, die Quellenhierarchie und die Grenzen seiner eigenen Aussage.

Die folgenden Schritte sind bewusst unabhängig von einem bestimmten Anbieter, einer bestimmten LLM oder einer bestimmten Entwicklungsumgebung formuliert. Ob die verwendete Oberfläche Dateien, Projektkontext, Skills oder nur Texteingabe unterstützt, ändert den Transportweg – nicht den fachlichen Ablauf.

## Schritt für Schritt

### 1. Hauptdatei laden

Öffne [ACCESSIBILITY.md](ACCESSIBILITY.md). Stelle sie der LLM vollständig als Datei, Projektkontext oder eingefügten Text bereit. Wenn das System keine Dateien akzeptiert, kopiere den vollständigen Inhalt in die Unterhaltung.

Schreibe dazu:

```text
Nutze die angehängte ACCESSIBILITY.md als fachliche Grundlage für alle
Accessibility-Aussagen in diesem Chat. Unterscheide normative Anforderungen,
technische Umsetzung, Best Practice und Kontextentscheidung. Verweise bei
wesentlichen Aussagen auf die passende Primär- oder Methodenquelle.
```

Warte auf die Bestätigung, dass die Datei gelesen wurde. Ein Modell mit knappem Kontextfenster kann lange Unterhaltungen später zusammenfassen oder Teile des Kontexts verlieren. Hänge die Datei in einem neuen Chat erneut an.

### 2. Die konkrete Aufgabe beschreiben

Nenne nicht nur die Komponente. Beschreibe, was ein Mensch erreichen möchte, welche Zustände dazugehören und was bereits bekannt ist. Füge den relevanten Code, einen Screenshot oder eine URL hinzu, wenn das verwendete System darauf zugreifen kann.

Ein brauchbarer Auftrag sieht beispielsweise so aus:

```text
Prüfe dieses Registrierungsformular. Menschen sollen ein Konto anlegen,
Serverfehler korrigieren und anschließend an derselben Stelle weiterarbeiten
können. Untersuche Semantik, Tastaturbedienung, Fokus, zugängliche Namen,
Hinweise, Validierung und Statusmeldungen. Nenne die betroffenen WCAG-2.2-
Erfolgskriterien nur dort, wo die Zuordnung belastbar ist. Trenne Befunde,
Empfehlungen und offene manuelle Prüfungen.

[Code oder Link einfügen]
```

### 3. Quellen und Evidenz verlangen

Bitte bei normativen Aussagen um Erfolgskriterium, Version und Level. Bei HTML- oder ARIA-Fragen soll das Modell außerdem den HTML Standard, ARIA in HTML oder WAI-ARIA berücksichtigen. APG und BIK sind wichtige Pattern- beziehungsweise Methodenquellen, aber keine zusätzlichen WCAG-Anforderungen.

```text
Belege jede normative Aussage mit einer direkten Quelle. Kennzeichne APG-
Patterns, BIK-Prüfschritte und Best Practices als informative beziehungsweise
methodische Hilfen. Erkläre, welche Punkte sich aus dem vorliegenden Material
nicht zuverlässig bewerten lassen.
```

### 4. Antwort in eine prüfbare Änderung übersetzen

Lass dir nicht nur eine Liste möglicher Probleme geben. Bitte um eine konkrete Änderung und um die Tests, mit denen genau diese Änderung überprüft wird.

```text
Schlage die kleinste robuste Änderung vor. Zeige den relevanten Code und nenne
danach die manuellen Tastatur-, Zoom-, Reflow- und Screenreader-Prüfungen.
Automatisierte Tests sollen die manuelle Prüfung ergänzen, nicht ersetzen.
```

### 5. Im Produkt testen

Übernimm eine Antwort nicht ungeprüft. Bediene den vollständigen Ablauf mit Tastatur, prüfe Fokus und Fehlersituationen, vergrößere die Darstellung und teste relevante Browser-/Screenreader-Kombinationen. Wenn Playwright und axe-core vorhanden sind, scanne die tatsächlich erreichbaren Zustände und untersuche neben `violations` auch `incomplete`.

Dokumentiere anschließend, was geprüft wurde und was offen blieb. Eine gute Antwort kann die Prüfung vorbereiten. Sie ist selbst kein Audit und kein Konformitätsnachweis.

## Verwendung in einem Repository oder Agent-System

Kopiere `ACCESSIBILITY.md`, `SKILL.md` sowie die benötigten Verzeichnisse `references/` und `patterns/` in das Projekt oder stelle das gesamte Toolkit als Repository-Kontext bereit. Weise den Agent an, zuerst `SKILL.md` und anschließend die dort verlangte Hauptquelle zu lesen.

```text
Lies SKILL.md und die dort vorgeschriebene ACCESSIBILITY.md vollständig.
Untersuche anschließend den Checkout-Prozess dieses Repositorys auf digitale
Barrierefreiheit. Lade nur die für die Aufgabe benötigten Referenzen und
Patterns. Implementiere keine Änderung, bevor du Ursache, Normbezug,
Nutzerwirkung und Teststrategie bestimmt hast.
```

Der Skill verteilt die Arbeit nicht nach Rollen. Das ist beabsichtigt. Ein Dialog kann gleichzeitig HTML-Semantik, visuelle Gestaltung, Fokusmanagement, verständliche Beschriftungen und Tests betreffen. Der Agent soll diese Abhängigkeiten gemeinsam bearbeiten.

## Verwendung für eine einzelne Frage

Auch bei einer einzelnen Frage lohnt sich die Hauptdatei. Hänge `ACCESSIBILITY.md` an und stelle danach die Frage so konkret wie möglich.

```text
Auf Grundlage der angehängten ACCESSIBILITY.md: Ist dieses Element ein Link
oder ein Button? Es öffnet clientseitig einen Dialog, verändert aber nicht die
URL. Begründe die Antwort anhand von HTML-Semantik und nenne die notwendigen
Tastatur- und Fokusprüfungen.
```

## Welche Dateien wann gebraucht werden

Für die normale Verwendung reicht zunächst `ACCESSIBILITY.md`. `SKILL.md` ist für Systeme gedacht, die Skills oder Repository-Anweisungen selbstständig laden können. Die Dateien unter `references/` werden benötigt, wenn eine Frage tiefer in Standards, Semantik, Fokus, Formulare, visuelle Zugänglichkeit, Medien, ARIA oder Testing führt. `patterns/` hilft bei konkreten Komponenten wie Dialogen, Tabs oder Comboboxes.

Die fachliche Hauptquelle bleibt trotzdem `ACCESSIBILITY.md`. Ergänzende Dateien vertiefen eine Frage; sie ersetzen die Hauptquelle nicht und bilden keine Rollenpakete.
