# Standards und Primärquellen

## Quellenstatus

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) ist eine W3C Recommendation mit testbaren Erfolgskriterien und Konformitätsmodell. Ziellevel und vollständige Prozesse gehören zum vereinbarten Prüfumfang.
- Der [HTML Standard](https://html.spec.whatwg.org/) definiert Elemente, Attribute und browserseitiges Verhalten.
- [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/) definiert Rollen, Zustände und Eigenschaften. Hostsprachen wie HTML schränken ihre Nutzung zusätzlich ein.
- Der [ARIA in HTML Standard](https://www.w3.org/TR/html-aria/) beschreibt erlaubte ARIA-Verwendung in HTML.
- Der [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) ist eine informative Implementierungs- und Patternreferenz. Seine Beispiele sind keine zusätzlichen WCAG-Erfolgskriterien und nicht automatisch produktionsfertig.
- [Understanding WCAG](https://www.w3.org/WAI/WCAG22/Understanding/) und [Techniques](https://www.w3.org/WAI/WCAG22/Techniques/) unterstützen die Interpretation. Techniken sind informativ; auch andere belastbare Lösungen können ein Erfolgskriterium erfüllen.
- [ACT Rules](https://www.w3.org/WAI/standards-guidelines/act/rules/) können automatisierte und halbautomatisierte Prüfregeln vereinheitlichen. Die W3C-Veröffentlichung einer Regel bedeutet nicht, dass jede Implementierung oder jeder einzelne Test vollständige Konformität bewertet.
- Der [BIK WCAG-Test (Web)](https://bitvtest.de/pruefverfahren/wcag-22-web) ist ein öffentlich dokumentiertes Prüfverfahren mit praxisnahen Prüfschritten. Es unterstützt reproduzierbare Prüfungen, ist aber eine Sekundär- und Methodenquelle: Maßgeblich für WCAG-Konformität bleibt der normative W3C-Text.
- Der [Playwright-Leitfaden zum Accessibility Testing](https://playwright.dev/docs/accessibility-testing) beschreibt browserbasierte Regressionstests mit `@axe-core/playwright`, Zustandsprüfungen, Scopes und den Umgang mit bekannten Befunden.
- [axe-core](https://github.com/dequelabs/axe-core) ist eine automatisierte Prüfengine mit WCAG-bezogenen und zusätzlichen Regeln. Toolregeln und ihre Resultate sind weder eigene normative Anforderungen noch ein vollständiger Konformitätsnachweis.

Prüfe bei normativ wichtigen Aussagen immer Version, Datum, Level, Definitionen, Ausnahmen und Konformitätsrahmen in der Primärquelle.

## WCAG sauber verwenden

WCAG-Erfolgskriterien sind technologieunabhängige, testbare Aussagen. Prinzipien und Guidelines geben Struktur, sind aber nicht selbst der vollständige Konformitätstest. Sufficient Techniques zeigen dokumentierte Wege; Advisory Techniques sind Empfehlungen. Auch WCAG-Konformität deckt nicht alle Bedürfnisse aller Menschen ab.

WCAG 2.2 entfernte 4.1.1 Parsing. Wenn Verträge oder Gesetze ausdrücklich WCAG 2.0/2.1 verlangen, kann dessen Prüfung dennoch relevant bleiben. Erfinde keine Success Criteria und leite aus APG, Best Practice oder einem Toolbefund keine zusätzliche normative Pflicht ab.

Konformität bezieht sich auf vollständige Webseiten und vollständige Prozesse im definierten Scope. Eine begründete Stichprobe kann ein Angebot repräsentieren, erweitert den nachgewiesenen Konformitätsumfang aber nicht automatisch auf ungeprüfte Seiten. Halte Standard, Level, Seitenmenge, Produktstand und Testzeitpunkt fest.

## Jurisdiktionsabhängige Einordnung

Diese Themen ergänzen den universellen Kern, hängen aber von Produkt, Markt, Organisation und Zeitpunkt ab:

- EN 301 549 für europäische Beschaffung und regulatorische Kontexte;
- European Accessibility Act und nationale Umsetzung;
- Barrierefreiheitsstärkungsgesetz (BFSG) in Deutschland;
- BITV 2.0 für ihren deutschen öffentlich-rechtlichen Geltungsbereich.

Welche Fassung, Übergangsregel oder Ausnahme gilt, ist eine rechtliche und projektspezifische Frage. Das Toolkit bietet keine Rechtsberatung. Prüfe amtliche Quellen oder qualifizierte Rechtsberatung, bevor du Pflichten behauptest.

## Quellenpflege

Verlinke möglichst auf stabile Primärquellen. Übernimm keine längeren fremden Texte. Paraphrasiere, prüfe Lizenz und Attribution und dokumentiere den eigenen Normbezug. Öffentliche Guides – einschließlich `KreerC/ACCESSIBILITY.md` – sind Impulse, keine automatisch belastbare oder lizenzfreie Hauptquelle.
