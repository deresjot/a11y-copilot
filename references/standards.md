# Standards und Primärquellen

## Quellenstatus

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) ist eine W3C Recommendation mit testbaren Erfolgskriterien und Konformitätsmodell. Ziellevel und vollständige Prozesse gehören zum vereinbarten Prüfumfang.
- WCAG ist ein Standard für Webinhalte. Für Non-Web-Dokumente und Software bestimmt nicht WCAG allein die verbindlichen Anforderungen; dort sind der einschlägige Produkt-, Vertrags- und Rechtsrahmen sowie passende Plattformstandards zu ermitteln.
- Der [HTML Standard](https://html.spec.whatwg.org/) definiert Elemente, Attribute und browserseitiges Verhalten.
- [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/) definiert Rollen, Zustände und Eigenschaften. Hostsprachen wie HTML schränken ihre Nutzung zusätzlich ein.
- Der [ARIA in HTML Standard](https://www.w3.org/TR/html-aria/) beschreibt erlaubte ARIA-Verwendung in HTML.
- Der [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) ist eine informative Implementierungs- und Patternreferenz. Seine Beispiele sind keine zusätzlichen WCAG-Erfolgskriterien und nicht automatisch produktionsfertig.
- [Understanding WCAG](https://www.w3.org/WAI/WCAG22/Understanding/) und [Techniques](https://www.w3.org/WAI/WCAG22/Techniques/) unterstützen die Interpretation. Techniken sind informativ; auch andere belastbare Lösungen können ein Erfolgskriterium erfüllen.
- [ACT Rules](https://www.w3.org/WAI/standards-guidelines/act/rules/) können automatisierte und halbautomatisierte Prüfregeln vereinheitlichen. Die W3C-Veröffentlichung einer Regel bedeutet nicht, dass jede Implementierung oder jeder einzelne Test vollständige Konformität bewertet.
- [Automatisierte Rulesets und Versionswechsel](automated-rulesets.md) trennt normative Profile, juristische Zuordnungen, Werkzeugadapter und manuelle Prüflücken. Diese Trennung ist auch die Migrationsgrenze für künftige Standards: Eine neue Fassung wird als neues Profil ergänzt und ersetzt bestehende Profile erst nach einer ausdrücklich dokumentierten Entscheidung.
- Der [BIK WCAG-Test (Web)](https://bitvtest.de/pruefverfahren/wcag-22-web) ist ein öffentlich dokumentiertes Prüfverfahren mit praxisnahen Prüfschritten. Es unterstützt reproduzierbare Prüfungen, ist aber eine Sekundär- und Methodenquelle: Maßgeblich für WCAG-Konformität bleibt der normative W3C-Text.
- Der [Playwright-Leitfaden zum Accessibility Testing](https://playwright.dev/docs/accessibility-testing) beschreibt browserbasierte Regressionstests mit `@axe-core/playwright`, Zustandsprüfungen, Scopes und den Umgang mit bekannten Befunden.
- [axe-core](https://github.com/dequelabs/axe-core) ist eine automatisierte Prüfengine mit WCAG-bezogenen und zusätzlichen Regeln. Toolregeln und ihre Resultate sind weder eigene normative Anforderungen noch ein vollständiger Konformitätsnachweis.

Prüfe bei normativ wichtigen Aussagen immer Version, Datum, Level, Definitionen, Ausnahmen und Konformitätsrahmen in der Primärquelle.

## Web, Non-Web und europäische Normfassungen

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) ist die aktuelle WCAG-2-Fassung als W3C Recommendation für Webinhalte. Sie setzt nicht aus sich heraus Anforderungen für Non-Web-Dokumente oder Software und ist nicht allein durch ihre Veröffentlichung in jedem Rechts- oder Vertragskontext verbindlich.
- [EN 301 549 V4.1.1 (2026-09)](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/04.01.01_60/en_301549v040101p.pdf) ist seit 2. September 2026 als europäischer Standard veröffentlicht. Sie integriert WCAG 2.2 und enthält getrennte Anforderungen für Web, Non-Web-Dokumente, Non-Web-Software und weitere ICT.
- Veröffentlichung einer EN-Fassung und rechtliche Harmonisierung sind verschiedene Schritte. Eine konkrete Fassung erzeugt eine unionsrechtliche Konformitätsvermutung erst im Umfang des jeweiligen Rechtsakts, wenn ihre Referenz im Amtsblatt der Europäischen Union veröffentlicht wurde und dort weiterhin geführt wird. Für die Web Accessibility Directive nennt die [Europäische Kommission](https://digital-strategy.ec.europa.eu/en/policies/web-accessibility-directive-standards-and-harmonisation) derzeit EN 301 549 V3.2.1 als harmonisierte Fassung. V4.1.1 darf deshalb nicht pauschal als bereits harmonisierte oder überall verbindliche Fassung bezeichnet werden.
- [WCAG2ICT](https://www.w3.org/TR/wcag2ict-22/) ist eine informative W3C Group Note zur Übertragung der WCAG-2.0-, 2.1- und 2.2-Erfolgskriterien der Level A und AA auf Non-Web-Dokumente und Software. Sie setzt selbst keine Anforderungen, ist kein Konformitätsstandard und ersetzt weder EN 301 549 noch andere anwendbare Produkt-, Plattform- oder Rechtsvorgaben.

Halte bei europäischen Aussagen mindestens Normfassung, Produktart, Rechtsakt, Jurisdiktion und Bewertungszeitpunkt fest. „Veröffentlicht“, „harmonisiert“, „vertraglich vereinbart“ und „gesetzlich verbindlich“ sind keine austauschbaren Statusangaben.

## WCAG sauber verwenden

WCAG-Erfolgskriterien sind technologieunabhängige, testbare Aussagen. Prinzipien und Guidelines geben Struktur, sind aber nicht selbst der vollständige Konformitätstest. Sufficient Techniques zeigen dokumentierte Wege; Advisory Techniques sind Empfehlungen. Auch WCAG-Konformität deckt nicht alle Bedürfnisse aller Menschen ab.

WCAG 2.2 entfernte 4.1.1 Parsing. Die aktuellen W3C-Konformitätshinweise zu WCAG 2.0 und 2.1 stellen das Kriterium für Inhalte in HTML oder XML ebenfalls als stets erfüllt dar. Syntax- und Validatorfehler bleiben technisch wichtig, sind unter WCAG 2.2 aber nur dann ein Accessibility-Befund, wenn ihre tatsächliche Wirkung gegen ein weiterhin geltendes Erfolgskriterium verstößt, etwa 1.3.1 oder 4.1.2. Für andere Markupsprachen sowie ausdrücklich fixierte historische Norm- oder Vertragsfassungen ist der konkrete Konformitätsrahmen gesondert zu prüfen. Erfinde keine Success Criteria und leite aus APG, Best Practice oder einem Toolbefund keine zusätzliche normative Pflicht ab.

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
