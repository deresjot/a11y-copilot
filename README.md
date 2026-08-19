# a11y-copilot

`a11y-copilot` gibt Menschen und Sprachmodellen einen belastbaren Ausgangspunkt für digitale Barrierefreiheit. Es verbindet die Entscheidungen, die von Strategie, Beschaffung und Anforderungen über Research, Gestaltung, Inhalte und Technik bis zu Prüfung, Support, Betrieb und Weiterentwicklung zusammengehören. Der fachliche Schwerpunkt bleibt auf digitalen Angeboten; für konkrete Plattformen und Artefakte muss jeweils die passende Norm- und Prüfgrundlage bestimmt werden.

Ich pflege das Toolkit, weil eine überzeugend klingende Antwort noch lange keine fachlich richtige Antwort ist. Gerade bei Accessibility werden Best Practices regelmäßig zu angeblichen WCAG-Pflichten erklärt, Toolergebnisse mit Audits verwechselt und ARIA-Reparaturen vorgeschlagen, obwohl das zugrunde liegende HTML falsch ist. Der Copilot soll solche Abkürzungen schwieriger machen.

— Sebastian Jansen / [@deresjot](https://sebastianjansen.com/)

## So benutzt du a11y-copilot

Lade [ACCESSIBILITY.md](ACCESSIBILITY.md) herunter und kopiere den Inhalt in ChatGPT, Claude oder die LLM deiner Wahl. Du kannst die Datei auch als Kontext anhängen. Stelle erst danach deine konkrete Frage und gib den betroffenen Code, den Nutzungspfad und bekannte Rahmenbedingungen mit. Bitte bei normativen Aussagen um die genaue Quelle und teste die vorgeschlagene Lösung anschließend im echten Produkt.

Eine vollständige Anleitung mit kopierbaren Prompt-Beispielen steht in [TUTORIAL.md](TUTORIAL.md).

In Codex, Claude Code oder vergleichbaren agentenfähigen Werkzeugen kann [SKILL.md](SKILL.md) als Einstieg verwendet werden. Der Skill lädt die fachliche Hauptquelle und zieht abhängig von der Aufgabe die passende Vertiefung hinzu. Eine Rollenwahl gibt es absichtlich nicht. Ein Formularproblem kann gleichzeitig Semantik, Content, Fokus, visuelle Gestaltung und Fehlermanagement betreffen.

## Was im Repository liegt

[ACCESSIBILITY.md](ACCESSIBILITY.md) ist die fachliche Hauptquelle. [references/](references/) enthält Vertiefungen und führt zu WCAG, BIK, HTML, WAI-ARIA, APG und weiteren Primär- beziehungsweise Methodenquellen. [patterns/](patterns/) behandelt konkrete Komponenten, wenn eine allgemeine Regel nicht ausreicht. Die öffentliche Einstiegsseite liegt in [index.html](index.html). Eine technische und redaktionelle Zusammenfassung für die Weitergabe an andere Systeme steht in [HANDOFF.md](HANDOFF.md).

Diese Aufteilung ist bewusst klein. Das Fachwissen soll nicht noch einmal im Skill, im README oder in Rollenpaketen gepflegt werden. Wenn eine Aussage geändert wird, gehört die Änderung in die Hauptquelle oder in genau eine zuständige Vertiefung.

## Lokal starten und bauen

Das Projekt hat keine Laufzeit- oder Paketabhängigkeiten. `npm start` stellt es lokal unter `http://127.0.0.1:4180` bereit. `npm run build` erzeugt aus denselben lokalen Dateien den statisch deploybaren Ordner `dist/`.

Dieser Ordner ist die kanonische Quelle für die fachlichen Markdown-Dateien, Referenzen und Patterns. `npm run sync:portfolio` überträgt genau diese Inhalte und den daraus generierten Markdown-Bundle in die benachbarte Portfolio-Integration. `npm run sync:app` übernimmt umgekehrt die dort zentral geprüfte UI-Integration einschließlich gemeinsamer Styles und lokaler Dokumentseiten. `npm run sync` führt beide Richtungen in definierter Reihenfolge aus. Die eigenständige Anwendung bleibt auch ohne diesen optionalen Entwicklungsabgleich vollständig lauffähig.

## Fachliche Grundlage

Der universelle Kern basiert auf [WCAG 2.2](https://www.w3.org/TR/WCAG22/), dem [HTML Standard](https://html.spec.whatwg.org/), [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/), [ARIA in HTML](https://www.w3.org/TR/html-aria/) und den Ressourcen des W3C/WAI. Der [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) dient als informative Patternreferenz. Der [BIK WCAG-Test](https://bitvtest.de/pruefverfahren/wcag-22-web) liefert eine nachvollziehbare Prüfmethode. Für automatisierte Regressionstests werden die offiziellen Dokumentationen von [Playwright](https://playwright.dev/docs/accessibility-testing) und [axe-core](https://github.com/dequelabs/axe-core) herangezogen.

Welche Aussage normativ ist, entscheidet die jeweilige Primärquelle, nicht dieses Repository und nicht die LLM. Rechtliche Anforderungen wie BITV, EN 301 549 oder BFSG werden getrennt eingeordnet. Das Toolkit leistet keine Rechtsberatung.

## Was das Ergebnis bedeutet

Der Copilot kann Ausschlussrisiken analysieren und daraus unter anderem Strategieentscheidungen, Beschaffungskriterien, Research-Fragen, Anforderungen, Gestaltungshinweise, Content-Regeln, Implementierungen, Testpläne, Befunde und betriebliche Maßnahmen ableiten. Er kann keine Konformität garantieren. Ein automatisierter Lauf deckt nur einen Teil möglicher Barrieren ab; eine einzelne Assistive-Technology-Kombination steht nicht für alle Plattformen; eine Stichprobe belegt keine ungeprüften Bereiche. Belastbare Aussagen brauchen einen definierten Scope, reproduzierbare Evidenz, manuelle Prüfung und je nach Risiko Tests mit Menschen.

Das Projekt wird von [Sebastian Jansen](https://sebastianjansen.com/) / `@deresjot` gepflegt. Der German-UPA-Vortrag [„Normale Nutzer gibt’s nicht! Ein Plädoyer für Barrierefreiheit“](https://germanupa.de/sites/default/files/2021-11/15-11-12vortragblinddatewudmucfinal_0.pdf) war ein inhaltlicher Impuls. Texte, Bilder und Folien daraus wurden nicht übernommen.

## Lizenz

Für dieses Repository ist noch keine Lizenz festgelegt. Ohne eine Lizenz gelten die gesetzlichen Standardrechte; eine freie Weiterverwendung ist dadurch noch nicht rechtssicher eingeräumt. Vor Veröffentlichung sollte eine passende Open-Source-/Open-Content-Lizenz bewusst gewählt und als `LICENSE` ergänzt werden.

Die Startseite verwendet lokale Dateien der Schriftfamilie Neue Machina aus sebastianjansen.com. Vor einer öffentlichen Weitergabe des vollständigen Repositorys müssen die vorhandenen Nutzungs- und Distributionsrechte für diese Fontdateien ausdrücklich geprüft werden; eine spätere Projektlizenz schließt sie nicht automatisch ein.

Die Wortmarke verwendet lokal **Kiwi Soda** von jeti unter [CC BY 4.0](font/KiwiSoda-LICENSE.txt). Die erforderliche Namensnennung und die Herkunft der Fontdatei sind im Repository dokumentiert.
