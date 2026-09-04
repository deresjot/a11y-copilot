# Automatisierte Rulesets und Versionswechsel

## Zweck und Grenze

Ein automatisiertes Ruleset ist ein Werkzeugprofil, keine eigenständige Norm und kein Konformitätsnachweis. Der a11y-copilot trennt deshalb vier Ebenen:

1. **Fachliches Profil:** benannter Standard, Fassung, Ziellevel und Scope;
2. **Zuordnung:** beispielsweise EN 301 549, ACT oder eine vertraglich vereinbarte Prüfmethode;
3. **Werkzeugadapter:** konkrete Engine, Version, Tags, Regeln und Konfiguration;
4. **Prüfergebnis:** ausgeführte Zustände, `violations`, `incomplete`, `passes`, nicht anwendbare Regeln und manuelle Evidenz.

Die maschinenlesbare Fassung steht in [`rulesets/catalog.json`](../rulesets/catalog.json). Konsumierende Projekte dürfen eigene Adapter ergänzen, sollen die Bedeutung eines vorhandenen Profils aber nicht verändern.

## Standardprofil WCAG 2.2 A/AA

Für allgemeine Webprüfungen ist `web-wcag-2.2-aa` das Ausgangsprofil. Normative Grundlage bleibt [WCAG 2.2](https://www.w3.org/TR/WCAG22/). Der Adapter für axe-core verwendet die weiterhin anwendbaren Regeln aus WCAG 2.0 und 2.1 zusammen mit den zusätzlichen Regeln für WCAG 2.2. Der Tag `wcag22aa` allein genügt nicht, weil er in axe-core nur die zusätzlichen WCAG-2.2-Regeln auswählt.

Die Tags sind eine Auswahlhilfe, keine stabile Regelregistrierung. Vor einem Lauf muss das konsumierende Projekt deshalb:

- die exakte axe-core-Version protokollieren;
- die von dieser Version aufgelösten Regel-IDs sichern;
- Browser, Viewport, URL, Scope und hergestellten Zustand festhalten;
- deaktivierte Regeln und ausgeschlossene Bereiche mit Begründung, Verantwortlichkeit und Retest-Termin dokumentieren;
- `incomplete` vollständig in eine manuelle Prüfliste übernehmen.

## Getrennte Bewertungsspuren

- **Normatives Profil:** Befunde werden erst nach Prüfung von Anwendbarkeit, Ausnahme und Ursache einem WCAG-Erfolgskriterium zugeordnet.
- **EN 301 549:** Die Engine-Zuordnung unterstützt europäische Berichte, ersetzt aber weder die ausgewählte Normfassung noch die Prüfung nicht-webbezogener Anforderungen. EN 301 549 V4.1.1 ist veröffentlicht und integriert WCAG 2.2; ob und in welchem Umfang eine Fassung für einen Rechtsakt harmonisiert oder anderweitig verbindlich ist, wird davon getrennt geprüft und mit Bewertungszeitpunkt dokumentiert.
- **ACT:** Eine ACT-Zuordnung macht Regelannahmen vergleichbarer. Sie belegt weder vollständige ACT-Abdeckung noch WCAG-Konformität einer Seite.
- **Best Practice:** Läuft als beratende Spur. Ein Befund darf nicht als WCAG-Verstoß oder rechtliche Abweichung bezeichnet werden, wenn dafür keine eigenständige Grundlage besteht.
- **Experimentell:** Ist standardmäßig ausgeschaltet. Eine Aktivierung braucht Version, Zweck und manuelle Bestätigung; experimentelle Ergebnisse dürfen kein blockierendes Qualitätsgate bilden.
- **Jurisdiktionsprofile:** Section 508/Trusted Tester, RGAA oder weitere Profile werden nur bei passendem Markt, Vertrag oder Prüfauftrag aktiviert. Sie sind keine pauschalen Erweiterungen des universellen Kerns.

## Manuelle Ergänzung

Auch ein vollständig ausgeführter Adapter deckt nur automatisch entscheidbare Teile ab. Mindestens Tastatur und Fokus, Screenreader-Ausgabe, Zoom und Reflow, Textabstände, vollständige Prozesse, dynamische Fehler- und Erfolgszustände, Qualität von Alternativtexten und verständliche Kommunikation bleiben abhängig vom Gegenstand manuell zu prüfen. Reale Tests mit Menschen sind eine zusätzliche Evidenzebene und werden nicht durch Toolresultate simuliert.

## Versionswechsel einer Engine

Ein Engine-Update ist eine fachliche Änderung, wenn Regeln hinzukommen, entfallen, ihre Tags wechseln oder sich Auswertungslogik und Impact ändern. Vor der Übernahme:

1. Release Notes und aktuelle Regelbeschreibung der Engine prüfen;
2. alte und neue aufgelöste Regel-ID-Liste vergleichen;
3. neue oder umklassifizierte Regeln fachlich einordnen;
4. bekannte Ausnahmen und Fingerprints gegen die neue Version testen;
5. repräsentative Zustände erneut laufen lassen;
6. Adapterstatus, Testartefakte und Changelog aktualisieren.

Eine veränderliche Dokumentationsseite wie ein `develop`-Branch ist eine Recherchequelle, aber keine reproduzierbare Versionsangabe. Berichte nennen die installierte Engine-Version und verlinken nach Möglichkeit auf deren versionierten Release- oder Quellstand.

Parsing- oder Validatorregeln dürfen im WCAG-2.2-Profil nicht pauschal als Verstoß gegen 4.1.1 ausgewertet werden. Für HTML und XML gilt 4.1.1 nach den aktuellen W3C-Konformitätshinweisen auch unter WCAG 2.0 und 2.1 als stets erfüllt. Nur eine festgestellte Auswirkung auf ein weiterhin geltendes Kriterium wird in der normativen Spur entsprechend zugeordnet; reine Syntaxqualität kann getrennt als technische oder Best-Practice-Spur erhalten bleiben.

## Vorbereitung auf WCAG 3

[WCAG 3](https://www.w3.org/TR/wcag-3.0/) ist erst dann eine technische oder normative Grundlage dieses Copiloten, wenn ihr Status, ihr Konformitätsmodell und der vereinbarte Einsatz dies tragen. Bis dahin darf sie als Entwicklung beobachtet, aber nicht als Ersatz für WCAG 2.2 ausgegeben werden.

Eine spätere Einführung erfolgt als neues Profil mit eigener ID, eigener Norm-URI, eigenem Status, eigener Bewertungslogik und neuen Adaptern. WCAG-2.2-Profile und historische Ergebnisse bleiben unverändert erhalten. Erst eine ausdrücklich dokumentierte Migrationsentscheidung legt fest, welches Profil für neue Prüfungen standardmäßig gilt.

## Quellen

- [axe-core Regelbeschreibungen](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- [axe-core API und Regel-Tags](https://github.com/dequelabs/axe-core/blob/develop/doc/API.md)
- [Deque DevTools Rulesets](https://docs.deque.com/devtools-for-web/4/en/rulesets/)
- [W3C ACT Rules](https://www.w3.org/WAI/standards-guidelines/act/rules/)
- [W3C-Übersicht der axe-core-ACT-Implementierung](https://www.w3.org/WAI/standards-guidelines/act/implementations/axe-core/)
- [Playwright Accessibility Testing](https://playwright.dev/docs/accessibility-testing)
