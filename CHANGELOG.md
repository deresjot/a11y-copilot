# Changelog

## 0.2.3 – 2026-08-30

- Gemeinsame mobile Header-/Navigationskomponente aus der Portfolio-Integration übernommen; die eigenständige App verwendet damit denselben Burger-, Fokus-, Safe-Area-, Viewport- und Escape-Mechanismus.
- Die eigene Abschnittsnavigation des a11y-copilot beibehalten und „Grenzen“ als verständlicheren „Einsatzrahmen“ neu benannt.
- Mobile Heroaktionen über die verfügbare Breite gestapelt und den globalen Footer mit der zentralen Website-Komponente synchronisiert.
- Aussagegrenzen in den fachlichen Narrativen präziser als Aussagekraft, Einschränkungen oder offene Prüfpunkte formuliert; technisch gemeinte visuelle Grenzen bleiben unverändert.

## 0.2.2 – 2026-08-29

- GitHub-Profillink als eigene, global einheitliche Footerzeile mit gestalterisch integriertem GitHub-Icon auf allen veröffentlichten Seitentypen ergänzt.
- Projektregeln für globale Header- und Footeränderungen in Portfolio und Standalone-Repository festgeschrieben; ein All-Routes-Test prüft künftig Struktur, Linkziel, zugänglichen Namen und Position des Profileinstiegs.
- Synchronisierte Standalone-Anwendung und gemeinsame Footer-Styles gegen den geprüften Portfolio-Stand aktualisiert.

## 0.2.1 – 2026-08-29

- Footer um einen sichtbaren Link zum GitHub-Profil von `@deresjot` und den projektspezifischen Einstieg „Quellcode auf GitHub“ ergänzt; beide Links bleiben bewusst außerhalb der Liste fachlicher Nachweise.
- Veralteten zweizeiligen Grid-Span des Inhaltskapitels entfernt, damit das aktuelle 12-Spalten-Raster unter den Bento-Karten keine leere Restzeile erzeugt.
- Pink für kleine Labels sowie Hover-Zustände auf den grauen A-/D-Karten gezielt auf `#ff4778` aufgehellt. Der Markenfarbton bleibt auf schwarzen und pinken Flächen unverändert; normaler Text erreicht auf `#242424` nun mindestens 4,5:1.
- Desktop-, Tablet- und Mobile-Layout sowie Linkplatzierung, Kontrast, Hover und sichtbaren Tastaturfokus mit gezielten Browserregressionen abgesichert.

## 0.2.0 – 2026-08-28

- Fachliche Standardprofile von Werkzeugadaptern getrennt und als skalierbares Ruleset-Modell unter `rulesets/` verankert; WCAG 2.2 A/AA, EN 301 549, ACT, Best Practices, experimentelle Regeln, Ergebnisgruppen und manuelle Prüflücken sind ausdrücklich eingeordnet.
- Migrationsprinzip für künftige normative Grundlagen wie WCAG 3 ergänzt: neue Profile werden parallel und mit eigener Bewertungslogik eingeführt, statt WCAG-2-Nachweise stillschweigend umzudeuten.
- Schnell veraltende redaktionelle Datumszeile aus der fachlichen Hauptquelle entfernt; echte Release-, Übergabe- und Prüfzeitpunkte bleiben als notwendige Evidenz erhalten.
- Eigenständige Anleitung als progressive siebenstufige Klickstrecke mit nativer Fortschrittsanzeige, Vor/Zurück-Steuerung, Fokusführung und vollständig lesbarem No-JavaScript-Fallback umgesetzt.
- Direkte Markdown-Aktion ehrlich als Rohdatei gekennzeichnet und in einen neuen Tab verlegt, damit die navigierbare Copilot-Seite erhalten bleibt.
- Startseitentexte menschenzentriert überarbeitet und den Nutzen robuster Semantik für assistive Technologien, Browser-Automation und agentische Systeme sachlich eingeordnet.
- Bento-Raster auf eine gemeinsame Konturquelle bereinigt, Überschriftenlaufweite entspannt und die mobile Navigation der Hauptseite sowie des Copiloten als daumennahes Bedienfeld mit großen Tap-Flächen vereinheitlicht.
- Bedienung in drei klar benannte Wege gegliedert: Startpaket für einen KI-Chat, Projektkontext für Agenten und direktes Nachschlagen in den Dokumenten.
- `PROMPT.md` als kanonische Startanweisung ergänzt; die Website erzeugt das kopierbare Startpaket jetzt aus `PROMPT.md` und `ACCESSIBILITY.md`, statt einen abweichenden Prompt im JavaScript zu pflegen.
- Lange Anleitung aus dem Inhaltsdialog gelöst; die eigenständige Tutorialseite führt nun schrittweise durch denselben kanonischen Inhalt aus `TUTORIAL.md`.
- Portfolio-Synchronisation über `A11Y_COPILOT_PORTFOLIO_SOURCE` für getrennte lokale Checkouts konfigurierbar gemacht und die zuvor fehlende `HANDOFF.md` in den Inhaltsabgleich aufgenommen.
- „Anleitung“ aus der normalen Section-Linkliste gelöst und als eigenständige sekundäre Headeraktion für Desktop und mobiles Menü umgesetzt.
- Die pinke 8-Bit-Landschaft bleibt bewusst Teil des Portfolio-Teasers und des Release-Bestands; ihre versehentliche Einstufung als entbehrliches Alt-Asset wurde rückgängig gemacht und durch einen Build-Regressionstest abgesichert.
- Desktopnavigation nach der manuellen Live-Prüfung auf ein explizites horizontales Flex-Layout zurückgesetzt; Standalone-Build und gezielter Desktop-/Mobile-Smoke-Test bestanden.
- Eigenständiges Repository unter `https://github.com/deresjot/a11y-copilot` veröffentlicht und den korrigierten Stand als Commit `70f7907` auf `main` synchronisiert.
- Dokumentation an die aktuelle öffentliche Repository-Sichtbarkeit, den realen Git-Status und die weiterhin offene Lizenz-/Fontrechte-Entscheidung angepasst.
- Eigenständigen dependency-freien `npm start`-/`npm run build`-Workflow sowie einen reproduzierbaren bidirektionalen Abgleich mit der Portfolio-Integration ergänzt; gemeinsame Styles, Scripts, Assets und Dokumentseiten werden für den Standalone-Build lokal vendort.
- Aktuelle zentrale Dialog-, Hero-, Navigation- und Reduced-Motion-Implementierung aus dem final geprüften Portfolio-Stand übernommen; die fachlichen Markdown-Dateien bleiben die kanonische Quelle dieses Projekts.
- Zentrale Kopierstrecke verkürzt: Der Dialog kopiert jetzt die fachliche Grundlage zusammen mit einer direkt verwendbaren Startanweisung und zeigt den nächsten Schritt unmittelbar an.
- Dialogtechnik robuster gemacht: explizite Fokusrückgabe zwischen Tutorial und Dokument, erreichbare Wiederholen- und Direkt-öffnen-Aktionen im Fehlerfall sowie eine konsistente Überschriftenhierarchie für gerendertes Markdown.
- Bewusste Ausnahme im Dialog-Pattern dokumentiert: lange, maschinenlesbare Dokumente dürfen für eine klar begrenzte Kopieraufgabe im Dialog erscheinen, wenn Direktlink, Kopieraktion, Rückmeldung, Scrollen und Fokusrückgabe funktionieren.
- Kleine Mikrointeraktionen für Hover, Aktivierung, Dialoge und Tutorialschritte ergänzt; bei `prefers-reduced-motion` werden Animationen, Transitionen und weiches Scrollen wirksam reduziert.
- Sprungziele gegen Überdeckung durch den fixierten Header abgesichert, kleine Navigations- und Hinweistexte angehoben und Hero-Text durch eine stärkere Bildabdunklung stabilisiert.
- Maskottchen zusätzlich als AVIF ausgeliefert (rund 90 KB statt 1,5 MB); PNG bleibt als kompatibler Fallback erhalten.
- Eigenständige Tutorial-Fallbackseite sprachlich vereinfacht und mit der siebenstufigen Dialoganleitung synchronisiert.
- Browsergestützte Regression mit Playwright und axe-core über Desktop-, Tablet- und Mobile-Viewports ergänzt; lange Kartentexte und Kapitelüberschriften gegen Zellüberlauf bei Textvergrößerung abgesichert und Opacity-Animationen entfernt, damit Textkontrast auch während Mikrointeraktionen stabil bleibt.
- Markdown-Dialoge für den direkten Aufruf über `file://` repariert: Ein lokaler, generierter Inhalts-Bundle ersetzt dort den vom Browser blockierten `fetch()`-Zugriff; auf HTTP(S) bleibt die jeweilige Markdown-Datei die bevorzugte Quelle.
- Inhaltlichen Scope von Webumsetzung auf den gesamten Lebenszyklus digitaler Barrierefreiheit erweitert: Strategie, Governance, Beschaffung, Research, Anforderungen, Gestaltung, Inhalte, Technik, Prüfung, Support, Betrieb und Weiterentwicklung; Skill-Verhalten und Aussagegrenzen entsprechend angepasst.
- Tutorial-Dialog für technisch unerfahrene Menschen neu formuliert und um eine native, visuell gestaltete Fortschrittsanzeige mit synchroner Schrittzahl ergänzt.
- Wortmarke auf die lokal eingebundene Schrift Kiwi Soda von jeti umgestellt; `a11y` und `COPILOT` werden über SVG-`textLength` exakt auf dieselbe Zeilenbreite gesetzt, die CC-BY-4.0-Namensnennung ist lokal dokumentiert.
- Hero-Wortmarke als zweistufige perspektivische Typokomposition aus kleinem `A11Y` und breitem `COPILOT` neu aufgebaut; Weiß und deresjot-Pink ersetzen die monochrome Referenzästhetik.
- Hero-Titel als zentrierten, leicht gedrehten pink-weißen Störer direkt an das Maskottchen gerückt; Footer-Struktur, Profilbadge, Typografie, Links, Abstände und Top-Link exakt an die aktuelle Hauptseiten-Implementierung angeglichen.
- Primäre User Journey als zwei In-Page-Dialoge umgesetzt: Markdown mit vollständiger Kopierfunktion sowie eine tastaturbedienbare siebenstufige Tutorial-Klickstrecke mit direktem Übergang zur Wissensbasis.
- Anleitung als eigenständige, direkt erreichbare `tutorial.html` ergänzt und den Ablauf ausdrücklich anbieter-, LLM- und werkzeugunabhängig formuliert.
- Header, Footer und Hero enger an sebastianjansen.com geführt: überlagerter Bildheader mit Scrollzustand, kompakte Hamburger-Navigation, vollständiger erster Viewport und Intro samt Download direkt in der Hero-Bühne.
- 3D-Maskottchen als eigenständigen Retro-Computer-Roboter in warmem Weiß, Grau, Schwarz und deresjot-Pink neu gestaltet.
- Maskottchen als freigestelltes 3D-Rendering umgesetzt; Header und Footer an sebastianjansen.com angeglichen und Markdown-Dokumente als progressiv verbesserte Dialogansicht integriert.
- Maskottchen als helle, zentrierte Kugelfigur mit schwebendem Kopf neu gezeichnet und eine ausführliche `TUTORIAL.md` mit Prompt-Beispielen ergänzt.
- Zusammenfassende `HANDOFF.md` mit Fachmodell, Quellenbasis, Prüfstrategie, Aussagegrenzen, Projektstand und offenen Veröffentlichungspunkten ergänzt.
- Startseite, README und Einstieg der Hauptquelle fachlicher und direkter neu formuliert; Nutzung durch Kopieren oder Anhängen von `ACCESSIBILITY.md` ausdrücklich erklärt und Rollenpakete verworfen.
- Projektname auf „a11y-copilot“ festgelegt; Hero-Bild von sebastianjansen.com lokal übernommen und ein kompaktes, einteiliges Roboter-Maskottchen ergänzt.
- Projekt als öffentliches „a11y-copilot by Sebastian Jansen / @deresjot“ neu ausgerichtet.
- `ACCESSIBILITY.md` als einzige fachliche Hauptquelle eingeführt.
- Rollenmodell und organisationsspezifische Prozesse entfernt.
- Agentennutzung auf eine kompakte `SKILL.md` reduziert.
- Referenzen nach fachlichen Themen statt Organisation oder Berufsrolle konsolidiert.
- APG-Kurzdateien in wenige eigenständige Komponenten-Patterns überführt.
- WCAG 2.2 zum allgemeinen Kern gemacht; normative Anforderungen, Umsetzungen, Best Practices, Patterns und Kontextentscheidungen sprachlich getrennt.
- Öffentliche statische Einstiegsseite zunächst ohne Framework, externe Fonts, Tracking oder JavaScript neu aufgebaut; später um minimales JavaScript für Navigation und Markdown-Dialoge ergänzt.
- Sprache und Dramaturgie stärker auf reale Nutzungssituationen, wechselnde Fähigkeiten und kleine konkrete Schritte ausgerichtet.
- Startseite gestalterisch näher an sebastianjansen.com geführt: redaktioneller Aufbau, Topografie-/Koordinatenmotiv, nummerierte Kapitel und weniger generisches Kartenlayout.
- Einstiegsseite mit einem strengeren, asymmetrischen Modulraster, durchgehenden Linien und versetzter Großtypografie weiterentwickelt.
- Zu enge Rasterflächen wieder reduziert und die Startseite näher an die ruhige, zentrierte Seitendramaturgie von sebastianjansen.com geführt.
- Bento-/Werkzeugkistenraster mit robusten Umbruchpunkten wieder eingeführt; lokale Neue-Machina-Webfonts und ein abgeleitetes Toolkit-Favicon ergänzt.
- Agenten-Skill um Scope, Stichprobe, Anwendbarkeit, Prüfablauf, Bewertung und Aussagegrenzen erweitert; alle 66 Prüfschritte des BIK WCAG-2.2-Webverfahrens in einer eigenständig formulierten WCAG-AA-Prüfmatrix berücksichtigt.
- Testreferenz um browserbasierte Playwright-/axe-core-Regressionsprüfungen, Zustands- und Scope-Strategien, `incomplete`-Befunde sowie dokumentierte Ausnahmen ergänzt.
- Projekttitel ruhig und ohne Badge direkt beim Maskottchen platziert; Grenzbereich auf ein lückenbasiertes Linienraster mit dünnerer mobiler Kontur umgestellt.
- Download als primären Produkt-CTA vergrößert und Farbzustände aller Hero-Buttons für Hover, Fokus und besuchte Links explizit abgesichert.

Frühere interne Versionsnotizen wurden aus dem öffentlichen Arbeitsstand entfernt, weil sie organisationsspezifische Historie und Branding dokumentierten. Die Git-Historie bleibt davon unberührt und muss vor Veröffentlichung separat geprüft werden.
