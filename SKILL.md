---
name: a11y-copilot
description: Plant, gestaltet, beschafft, implementiert, prüft und verbessert digitale Barrierefreiheit über den gesamten Lebenszyklus digitaler Angebote. Verwenden bei Strategie, Governance, Beschaffung, Research, Anforderungen, Konzeption, Design, Content, Dokumenten, Websites, Webanwendungen, Software, Komponenten, Entwicklung, Qualitätssicherung, Audits, Support, Betrieb und Weiterentwicklung. Verbindet fachliche, technische, redaktionelle und organisatorische Auswirkungen ohne Rollenwahl; bestimmt die passende Normbasis und unterscheidet Teilprüfung, Audit und Konformitätsaussage.
---

# a11y-copilot anwenden

## Vor jeder Accessibility-Aufgabe

Lies [ACCESSIBILITY.md](ACCESSIBILITY.md) vollständig, bevor du die fachliche Aufgabe bearbeitest. Sie ist die Source of Truth. Dieser Skill enthält nur den Arbeitsablauf und darf keine zweite Fassung des Fachwissens entwickeln.

Führe normative Aussagen immer auf eine konkrete Quelle zurück. Beginne mit [WCAG 2.2](https://www.w3.org/TR/WCAG22/), dem [HTML Standard](https://html.spec.whatwg.org/), [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/) und [ARIA in HTML](https://www.w3.org/TR/html-aria/). Nutze den [BIK WCAG-Test](https://bitvtest.de/pruefverfahren/wcag-22-web) als dokumentierte Prüfmethode und den [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) als informative Patternreferenz. Prüfe bei versionsabhängigen Aussagen die aktuelle Primärquelle; behandle APG, BIK, Toolregeln und Best Practices nicht als zusätzliche WCAG-Kriterien.

Lies anschließend nur die Referenzen und Patterns, die für den Prüfgegenstand relevant sind:

- Normstatus, WCAG, EN, BITV oder Recht: [Standards](references/standards.md)
- vollständiger Test, Auditplanung oder Befundbericht: [Testing](references/testing.md)
- automatisierte Regelprofile, axe-core, ACT, EN 301 549 oder Versionswechsel: [Automatisierte Rulesets](references/automated-rulesets.md) und [`rulesets/catalog.json`](rulesets/catalog.json)
- DOM, Überschriften, Landmarken, Listen, Links oder Tabellen: [Semantik](references/semantics-and-structure.md)
- Tastatur, Fokus, Shortcuts oder Overlays: [Tastatur und Fokus](references/keyboard-and-focus.md)
- Labels, Validierung, Authentifizierung oder Live-Meldungen: [Formulare, Fehler und Status](references/forms-errors-and-status.md)
- Kontrast, Zoom, Reflow, Farbe oder Bewegung: [Visuelle Zugänglichkeit](references/visual-accessibility.md)
- Alternativtexte, Sprache, Audio, Video oder Downloads: [Content und Medien](references/content-and-media.md)
- Custom Widgets und ARIA: [ARIA und Komponenten](references/aria-and-components.md)
- konkrete Komponente: passende Datei unter `patterns/`

Behandle digitale Barrierefreiheit nicht als reine Frontend- oder Prüfaufgabe. Ermittle, welche Entscheidungen vor und nach der konkreten Umsetzung betroffen sind: Zielsetzung, Budget, Beschaffung, Research, Anforderungen, Informationsarchitektur, Gestaltung, Inhalte, Technik, Dokumentation, Qualitätssicherung, Veröffentlichung, Support, Betrieb und Weiterentwicklung. Liefere nur die für den Auftrag relevanten Ableitungen, aber verschweige keine wesentliche Abhängigkeit zu einer anderen Phase.

## 1. Auftrag und Aussagegrenze bestimmen

Ordne die Aufgabe vor dem Prüfen ein:

- **Strategie oder Governance:** Ziele, Verantwortlichkeiten, Entscheidungswege, Kompetenzen, Beschaffung, Qualitätsgates oder kontinuierliche Verbesserung konkretisieren.
- **Research oder Konzeption:** Nutzungssituationen, Ausschlussrisiken, Aufgaben, Informationsarchitektur und Anforderungen untersuchen.
- **Beschaffung oder Auswahl:** nachweisbare Anforderungen, Liefergegenstände, Testzugang, Dokumentation und Abnahmekriterien formulieren; Herstellerbehauptungen nicht ungeprüft übernehmen.
- **Umsetzung:** Anforderungen in Code, Gestaltung oder Content berücksichtigen und die Änderung angemessen testen.
- **Betrieb oder Support:** veröffentlichte Inhalte, Rückmeldungen, bekannte Barrieren, Workarounds, Änderungen und Regressionen nachvollziehbar bearbeiten.
- **Fokussierter Review:** einen Nutzungspfad, eine Komponente oder ausgewählte Kriterien prüfen.
- **Explorative Prüfung:** Barrieren suchen, ohne Vollständigkeits- oder Konformitätsanspruch.
- **Konformitätsorientierte Prüfung:** vereinbarten Standard, Version, Level, Scope, Stichprobe und vollständige Prozesse nachvollziehbar prüfen.

Behaupte bei den ersten drei Formen keine Konformität. Bezeichne automatisierte Ergebnisse nicht als Audit. Wenn der Auftrag unklar ist, arbeite mit einer transparent benannten, engen Annahme weiter.

## 2. Prüfgegenstand modellieren

Erfasse vor Änderungen oder Tests:

- Art des digitalen Angebots oder Artefakts und die dafür einschlägigen Standards, Plattformregeln und Vereinbarungen;
- Ziel des Angebots und zentrale Aufgaben der Nutzenden;
- betroffene Lebenszyklusphase, Entscheidungsträger, Liefergegenstände und nachgelagerte Auswirkungen;
- Seiten, Templates, Komponenten und eingebettete Inhalte;
- vollständige Prozesse über mehrere Seiten oder Zustände;
- Rollen und Berechtigungen, sofern sie verschiedene Oberflächen erzeugen;
- Initial-, Hover-, Fokus-, Aktiv-, Auswahl-, Lade-, Leer-, Fehler-, Erfolgs- und Timeout-Zustände;
- relevante Viewports, Ausrichtungen und Eingabemethoden;
- unterstützte Browser und assistive Technologien;
- Drittinhalte, Dokumente, Medien und technisch nicht erreichbare Bereiche.

Wähle bei einem größeren Angebot eine begründete Stichprobe: gemeinsame Seiten, wesentliche Seitentypen, zentrale Funktionen, unterschiedliche Technologien und mindestens je ein vollständiger kritischer Prozess. Eine Stichprobe erlaubt nur Aussagen über die geprüften Seiten; für den Rest bleibt höchstens eine begründete Vermutung.

## 3. Anwendbarkeit vor Bewertung prüfen

Arbeite nicht mechanisch alle Kriterien als erfüllt ab. Entscheide für jeden einschlägigen Prüfpunkt:

- **anwendbar:** relevante Inhalte oder Funktionen sind vorhanden;
- **nicht anwendbar:** der auslösende Inhalt oder Mechanismus fehlt;
- **nicht geprüft:** Prüfung war im vereinbarten Umfang oder technisch nicht möglich;
- **offen:** Evidenz reicht für eine Bewertung noch nicht aus.

„Nicht anwendbar“ ist kein positives Testergebnis. Dokumentiere den Grund knapp. Prüfe Ausnahmen und Definitionen im normativen Text, bevor du eine Abweichung akzeptierst.

## 4. In Nutzungspfaden prüfen

Prüfe zuerst die Aufgabe, dann einzelne Regeln. Für jeden relevanten Pfad:

1. Mit normaler Darstellung Orientierung, sichtbare Beschriftungen und erwartete Bedienung erfassen.
2. DOM, native Semantik, berechnete Namen, Rollen, Werte, Zustände und Beziehungen inspizieren.
3. Nur mit Tastatur vorwärts und rückwärts bedienen; Shortcuts, Abbruchwege, Fokusmanagement und Überlagerungen einbeziehen.
4. Bei 200 % Textvergrößerung sowie 400 % Zoom beziehungsweise 320 CSS-Pixeln prüfen; Textabstände und Ausrichtung ergänzen.
5. Farbe, Text- und Nicht-Text-Kontrast, Fokusdarstellung, Forced Colors und reduzierte Bewegung prüfen.
6. Pointer, Touch, Zielgrößen, Dragging, komplexe Gesten und Bewegungsaktivierung prüfen, wenn vorhanden.
7. Mit einer dokumentierten Browser-/Screenreader-Kombination Überschriften, Landmarken, Links, Formulare, Tabellen, Widgets und Statusmeldungen prüfen.
8. Fehler, Ladezustände, Zeitbegrenzungen, Authentifizierung und Wiederaufnahme durchspielen.
9. Automatisierte Checks auf alle erreichbaren relevanten Zustände anwenden und jeden Befund manuell einordnen. Wenn Playwright und axe-core verfügbar sind, relevante Zustände im echten Browser herstellen, `violations` und `incomplete` auswerten und vollständige Resultate als Testartefakt sichern.

Wenn automatisierte Rulesets verwendet werden, wähle zuerst das fachliche Profil und dann den Adapter für die tatsächlich installierte Engine. Dokumentiere Profil-ID, exakte Engine-Version, ausgeführte Regel-IDs, Zustände und Ausnahmen. Verwende für WCAG 2.2 A/AA nicht nur den Tag `wcag22aa`: Er bezeichnet in axe-core die zusätzlichen WCAG-2.2-Regeln und ersetzt die Tags der früheren, weiterhin anwendbaren A-/AA-Kriterien nicht. Best-Practice- und experimentelle Regeln laufen in getrennten Bewertungsspuren.

Nutze für eine vollständige Abdeckung die Prüfmatrix in [Testing](references/testing.md). Ein einzelner Toollauf oder eine einzelne Assistive-Technology-Kombination ersetzt diese Abdeckung nicht.

## 5. Norm und Lösung auseinanderhalten

Kennzeichne Aussagen als:

- **Normative Anforderung:** exakt benannter Standard, Version, Erfolgskriterium und Level; Ausnahmen mitprüfen.
- **Belastbare Umsetzung:** etablierter technischer Weg, der im Zielsystem validiert werden muss.
- **Best Practice:** Verbesserung über das nachgewiesene Minimum hinaus.
- **Pattern:** empfohlenes Interaktionsmodell für einen bestimmten Komponententyp.
- **Kontextentscheidung:** mehrere vertretbare Lösungen, abhängig von Produkt und Nutzung.

WCAG-Erfolgskriterien sind normativ. Understanding-Dokumente, Techniques, APG, ACT Rules und BIK-Prüfschritte helfen bei Interpretation oder Prüfung, sind aber nicht selbst zusätzliche WCAG-Anforderungen. Verifiziere kritische Zitate und Grenzwerte in der aktuellen W3C-Primärquelle.

## 6. Implementieren

- Leite aus erkannten Barrieren konkrete Folgen für Anforderungen, Gestaltung, Inhalt, Technik, Tests, Dokumentation und Betrieb ab, soweit sie für den Auftrag wesentlich sind.
- Bevorzuge passendes natives HTML und eine einfache Informationsarchitektur.
- Erhalte DOM-, Lese-, Fokus- und visuelle Reihenfolge in einem nachvollziehbaren Verhältnis.
- Nutze ARIA nur für tatsächlich benötigte Semantik und halte Zustände mit dem UI synchron.
- Implementiere für Custom Widgets das vollständige Tastatur- und Fokusmodell; Semantik allein erzeugt kein Verhalten.
- Vermeide Reparaturen, die eine Barriere in einen anderen Nutzungskanal verschieben.
- Ändere keine fachlich oder rechtlich relevante Aussage allein auf Grundlage eines automatisierten Tools.
- Teste die konkrete Änderung einschließlich angrenzender Zustände und regressionsgefährdeter Komponenten.
- Formuliere bei nichttechnischen Aufgaben entsprechend prüfbare Ergebnisse: Entscheidungskriterien, Ausschreibungstexte, Akzeptanzkriterien, Research-Fragen, Redaktionsregeln, Testpläne, Befunde, Priorisierung oder Maßnahmen für Betrieb und Support.

## 7. Befunde bewerten und berichten

Ein Befund enthält mindestens:

- ID und präzisen Titel;
- Seite, Komponente, Zustand und reproduzierbaren Pfad;
- Umgebung, Viewport und Eingabemethode;
- erwartetes und tatsächliches Ergebnis;
- Auswirkung auf Menschen und Aufgabe;
- Evidenz, beispielsweise DOM-Ausschnitt, Screenshot oder Bedienbeobachtung;
- Normbezug nur, wenn Anwendbarkeit und Zuordnung belastbar sind;
- Lösungsvorschlag mit Alternativen oder offener Kontextentscheidung;
- Status und Retest-Ergebnis.

Priorisiere nach Blockadegrad, Reichweite, Häufigkeit, betroffenen Pfaden, Sicherheits- oder Geschäftsrisiko und Reparaturabhängigkeiten. WCAG-Level allein ist keine ausreichende Produktpriorisierung.

## 8. Abschluss und Aussagekraft

Der Abschluss nennt in zusammenhängender, knapper Form, was geprüft wurde, was nicht erreichbar war, welche Browser-, Assistive-Technology- und Toolkombinationen verwendet wurden und ob die Aussage aus einer Stichprobe, Teilprüfung oder einem vollständig vereinbarten Scope stammt. Offene manuelle Prüfungen und die Aussagekraft des Ergebnisses gehören in denselben Bericht.

Simuliere keine Rechtsberatung. Leite aus Code-Review, Komponentenprüfung, Stichprobe, AI-Ausgabe oder „null Violations“ keine Konformitätsgarantie ab. Verlinke im Ergebnis die Primär- oder Methodenquellen, auf denen wesentliche fachliche Aussagen beruhen.
