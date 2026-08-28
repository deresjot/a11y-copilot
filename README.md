# a11y-copilot

`a11y-copilot` gibt Menschen und Sprachmodellen einen belastbaren Ausgangspunkt für digitale Barrierefreiheit. Es verbindet die Entscheidungen, die von Strategie, Beschaffung und Anforderungen über Research, Gestaltung, Inhalte und Technik bis zu Prüfung, Support, Betrieb und Weiterentwicklung zusammengehören. Der fachliche Schwerpunkt bleibt auf digitalen Angeboten; für konkrete Plattformen und Artefakte muss jeweils die passende Norm- und Prüfgrundlage bestimmt werden.

Ich pflege das Toolkit, weil eine überzeugend klingende Antwort noch lange keine fachlich richtige Antwort ist. Gerade bei Accessibility werden Best Practices regelmäßig zu angeblichen WCAG-Pflichten erklärt, Toolergebnisse mit Audits verwechselt und ARIA-Reparaturen vorgeschlagen, obwohl das zugrunde liegende HTML falsch ist. Der Copilot soll solche Abkürzungen schwieriger machen.

— Sebastian Jansen / [@deresjot](https://sebastianjansen.com/)

## So benutzt du a11y-copilot

Für eine einzelne Aufgabe kopierst du das **Startpaket** aus [PROMPT.md](PROMPT.md) und [ACCESSIBILITY.md](ACCESSIBILITY.md) in einen neuen KI-Chat. Alternativ kannst du beide Dateien als Kontext anhängen. Stelle danach deine konkrete Frage und gib den betroffenen Code, den Nutzungspfad und bekannte Rahmenbedingungen mit. Bitte bei normativen Aussagen um die genaue Quelle und teste die vorgeschlagene Lösung anschließend im echten Produkt.

Eine vollständige Anleitung mit kopierbaren Prompt-Beispielen steht in [TUTORIAL.md](TUTORIAL.md).

In Codex, Claude Code oder vergleichbaren agentenfähigen Werkzeugen kann [SKILL.md](SKILL.md) als Einstieg verwendet werden. Der Skill lädt die fachliche Hauptquelle und zieht abhängig von der Aufgabe die passende Vertiefung hinzu. Eine Rollenwahl gibt es absichtlich nicht. Ein Formularproblem kann gleichzeitig Semantik, Content, Fokus, visuelle Gestaltung und Fehlermanagement betreffen.

## Teil des gemeinsamen Webauftritts

Die öffentliche Copilot-Unterseite ist Teil des Webauftritts von [sebastianjansen.com](https://www.sebastianjansen.com/) und [deresjot.de](https://www.deresjot.de/), keine unabhängige Designinsel. Die Hauptseite mit ihrem a11y-copilot-Teaser ist die verbindliche Referenz für Absender, Sprache, visuelle Grundelemente, Navigation, Footer, responsive Verhalten und Release-Kommunikation. Teaser und Unterseite müssen denselben Zweck, dieselben Einstiege und denselben fachlichen Stand vermitteln. Änderungen an Oberfläche oder Markdown-Kern werden deshalb immer auf beide Berührungspunkte und beide Domains geprüft.

## Was im Repository liegt

[ACCESSIBILITY.md](ACCESSIBILITY.md) ist die fachliche Hauptquelle. [PROMPT.md](PROMPT.md) enthält ausschließlich die Startanweisung und das Schema für eine konkrete Aufgabe. [references/](references/) enthält Vertiefungen und führt zu WCAG, BIK, HTML, WAI-ARIA, APG und weiteren Primär- beziehungsweise Methodenquellen. [patterns/](patterns/) behandelt konkrete Komponenten, wenn eine allgemeine Regel nicht ausreicht. [`rulesets/`](rulesets/) trennt fachliche Standardprofile von versionierten Werkzeugadaptern, damit Regeln aktualisiert oder später um eine normative Grundlage wie WCAG 3 ergänzt werden können, ohne bestehende Nachweise umzudeuten. Die öffentliche Einstiegsseite liegt in [index.html](index.html). Eine technische und redaktionelle Zusammenfassung für die Weitergabe an andere Systeme steht in [HANDOFF.md](HANDOFF.md).

Diese Aufteilung ist bewusst klein. Das Fachwissen soll nicht noch einmal im Skill, im README oder in Rollenpaketen gepflegt werden. Wenn eine Aussage geändert wird, gehört die Änderung in die Hauptquelle oder in genau eine zuständige Vertiefung.

## Lokal starten und bauen

Das Projekt hat keine Laufzeit- oder Paketabhängigkeiten. `npm start` stellt es lokal unter `http://127.0.0.1:4180` bereit. `npm run build` erzeugt aus denselben lokalen Dateien den statisch deploybaren Ordner `dist/`. Die Ruleset-Konfiguration beschreibt Adapter, installiert aber bewusst keine Prüfengine; das konsumierende Projekt protokolliert seine tatsächliche Engine-Version und die ausgeführten Regel-IDs.

Dieser Ordner ist die kanonische Quelle für die fachlichen Markdown-Dateien, Referenzen und Patterns. `npm run sync:portfolio` überträgt genau diese Inhalte und den daraus generierten Markdown-Bundle in die Portfolio-Integration. Liegt diese nicht direkt daneben, wird ihr `source`-Ordner über `A11Y_COPILOT_PORTFOLIO_SOURCE` angegeben. `npm run sync:app` übernimmt umgekehrt die dort zentral geprüfte UI-Integration einschließlich gemeinsamer Styles und lokaler Dokumentseiten. `npm run sync` führt beide Richtungen in definierter Reihenfolge aus. Die eigenständige Anwendung bleibt auch ohne diesen optionalen Entwicklungsabgleich vollständig lauffähig.

## Fachliche Grundlage

Der universelle Kern basiert auf [WCAG 2.2](https://www.w3.org/TR/WCAG22/), dem [HTML Standard](https://html.spec.whatwg.org/), [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/), [ARIA in HTML](https://www.w3.org/TR/html-aria/) und den Ressourcen des W3C/WAI. Der [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) dient als informative Patternreferenz. Der [BIK WCAG-Test](https://bitvtest.de/pruefverfahren/wcag-22-web) liefert eine nachvollziehbare Prüfmethode. Für automatisierte Regressionstests werden die offiziellen Dokumentationen von [Playwright](https://playwright.dev/docs/accessibility-testing) und [axe-core](https://github.com/dequelabs/axe-core) herangezogen.

Welche Aussage normativ ist, entscheidet die jeweilige Primärquelle, nicht dieses Repository und nicht die LLM. Rechtliche Anforderungen wie BITV, EN 301 549 oder BFSG werden getrennt eingeordnet. Das Toolkit leistet keine Rechtsberatung.

## Was das Ergebnis bedeutet

Der Copilot kann Ausschlussrisiken analysieren und daraus unter anderem Strategieentscheidungen, Beschaffungskriterien, Research-Fragen, Anforderungen, Gestaltungshinweise, Content-Regeln, Implementierungen, Testpläne, Befunde und betriebliche Maßnahmen ableiten. Er kann keine Konformität garantieren. Ein automatisierter Lauf deckt nur einen Teil möglicher Barrieren ab; eine einzelne Assistive-Technology-Kombination steht nicht für alle Plattformen; eine Stichprobe belegt keine ungeprüften Bereiche. Belastbare Aussagen brauchen einen definierten Scope, reproduzierbare Evidenz, manuelle Prüfung und je nach Risiko Tests mit Menschen.

Das Projekt wird von [Sebastian Jansen](https://sebastianjansen.com/) / `@deresjot` gepflegt. Der German-UPA-Vortrag [„Normale Nutzer gibt’s nicht! Ein Plädoyer für Barrierefreiheit“](https://germanupa.de/sites/default/files/2021-11/15-11-12vortragblinddatewudmucfinal_0.pdf) war ein inhaltlicher Impuls. Texte, Bilder und Folien daraus wurden nicht übernommen.

## Lizenz

Dieses Repository ist derzeit öffentlich, aber es ist noch keine Lizenz festgelegt. Ohne eine Lizenz gelten die gesetzlichen Standardrechte; die öffentliche Sichtbarkeit räumt keine freie Weiterverwendung ein. Eine passende Open-Source-/Open-Content-Lizenz muss bewusst gewählt und als `LICENSE` ergänzt werden.

Die Startseite verwendet lokale Dateien der Schriftfamilie Neue Machina aus sebastianjansen.com. Die Nutzungs- und Distributionsrechte für diese Fontdateien müssen ausdrücklich geprüft werden; eine spätere Projektlizenz schließt sie nicht automatisch ein. Bis zur Klärung sollte auch die öffentliche Repository-Sichtbarkeit bewusst bewertet werden.

Die Wortmarke verwendet lokal **Kiwi Soda** von jeti unter [CC BY 4.0](font/KiwiSoda-LICENSE.txt). Die erforderliche Namensnennung und die Herkunft der Fontdatei sind im Repository dokumentiert.
