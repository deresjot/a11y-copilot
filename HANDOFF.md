# Übergabe: a11y-copilot

Stand: 4. September 2026

## Auftrag und Leitgedanke

Der fachliche Scope umfasst digitale Barrierefreiheit über den gesamten Lebenszyklus: Strategie und Governance, Beschaffung, Research und Konzeption, Anforderungen, Gestaltung, Inhalte, technische Umsetzung, Dokumentation, Qualitätssicherung, Veröffentlichung, Support, Betrieb und Weiterentwicklung. Der Copilot leitet aus einer konkreten Frage die relevanten Zusammenhänge ab, ohne Rollenpakete zu verlangen oder jede Antwort unnötig auf alle Phasen auszuweiten.

`a11y-copilot` ist eine öffentlich einsehbare Wissens- und Arbeitsgrundlage für digitale Barrierefreiheit von Sebastian Jansen / [@deresjot](https://github.com/deresjot). Das Repository soll Menschen, Coding-Agents und LLMs bei Anforderungen, Gestaltung, Content, Frontend-Umsetzung und Testing unterstützen. Da noch keine Lizenz festgelegt ist, bedeutet die öffentliche Sichtbarkeit derzeit keine eingeräumte freie Nachnutzung.

Das Projekt ist kein rollenbasierter Prozessbaukasten. Accessibility-Fragen werden als zusammenhängende Produktfragen behandelt: Semantik, visuelle Gestaltung, Sprache, Interaktion, Tastatur, Fokus, assistive Technologien, Anforderungen und Tests gehören gemeinsam betrachtet.

Die zentrale fachliche Quelle ist [ACCESSIBILITY.md](ACCESSIBILITY.md). Andere Dateien dürfen sie konkretisieren oder ihre Anwendung erklären, aber keine konkurrierende Wissensbasis aufbauen.

Die Startseite trennt drei Nutzungswege: ein direkt kopierbares Startpaket für einen KI-Chat, die dauerhafte Verwendung im Repository mit der Agent-Anweisung und das eigene Nachschlagen in der Wissensbasis. Das Startpaket wird aus [PROMPT.md](PROMPT.md) und [ACCESSIBILITY.md](ACCESSIBILITY.md) zusammengesetzt. Die maschinenlesbaren Dokumente bleiben zusätzlich in einem scrollbaren Dialog und über einen direkten Dateilink erreichbar. Diese begrenzte Transferaufgabe und ihre begründete Dialog-Ausnahme sind in [patterns/dialog.md](patterns/dialog.md) festgehalten.

Die empfohlene Einbindung in die persönliche Website ist in der [Integrationsstrategie des Standalone-Repositories](https://github.com/deresjot/a11y-copilot/blob/main/INTEGRATION-STRATEGY.md) beschrieben. Das Toolkit bleibt technisch als Unterseite wartbar, ist produktseitig aber ein fester Bestandteil des gemeinsamen Webauftritts auf `sebastianjansen.com` und `deresjot.de`. Die Hauptseite und ihr a11y-copilot-Teaser sind die verbindliche Referenz für Absender, Sprache, visuelle Grundelemente, Navigation, Footer, responsive Verhalten und Release-Kommunikation. Teaser, Unterseite und Markdown-Kern müssen denselben Zweck, dieselben Einstiege und denselben fachlichen Stand vermitteln. Jede relevante Änderung ist deshalb im Zusammenhang aller drei Ebenen und auf beiden Domains zu prüfen.

Der veröffentlichte UI-Stand `0.2.3` ist in Website-Release `1.0.12` integriert. Der globale Footer enthält auf allen sieben öffentlichen Seitentypen eine eigene GitHub-Profilzeile mit Icon; ein All-Routes-Test verhindert künftig einseitige Header-/Footer-Änderungen. Die fachlichen Änderungen vom 4. September 2026 sind noch nicht veröffentlicht und verändern den UI-Vertrag nicht.

## Anspruch und Aussagekraft

Das Ziel ist eine möglichst umfassende, belastbare und nachvollziehbar geprüfte Barrierefreiheit. Die Formulierung „100 % barrierefrei“ darf trotzdem nicht als pauschales Versprechen verwendet werden:

- WCAG-Konformität bezieht sich auf einen festgelegten Standard, ein Level, vollständige Webseiten und vollständige Prozesse in einem definierten Produktstand und Scope.
- Ein bestandener BIK-Test, ein Audit oder ein automatisierter Scan deckt nicht automatisch alle Bedürfnisse aller Menschen und Nutzungssituationen ab.
- Automatisierte Werkzeuge erkennen nur einen Teil möglicher Barrieren.
- Eine einzelne Browser-/Screenreader-Kombination repräsentiert nicht alle Plattformen und assistiven Technologien.
- KI-Ausgaben können Fehler enthalten und sind kein Konformitätsnachweis.
- Rechtliche Pflichten hängen von Produkt, Markt, Träger, Zeitpunkt und Jurisdiktion ab.

Für eine belastbare Aussage muss deshalb formuliert werden, **was** gegen **welche Fassung und welches Level**, in **welchem Scope**, mit **welchen Methoden und Umgebungen** und zu **welchem Zeitpunkt** geprüft wurde. Nicht geprüfte Bereiche und offene Punkte gehören zur Aussage.

## Fachliches Modell

Das Toolkit unterscheidet konsequent fünf Arten von Aussagen:

1. **Normative Anforderung:** überprüfbare Vorgabe aus einem benannten Standard einschließlich Version, Level, Definitionen und Ausnahmen.
2. **Belastbare Umsetzung:** technisch etablierter Lösungsweg, der im konkreten Zielsystem validiert werden muss.
3. **Best Practice:** sinnvolle Verbesserung, die nicht als normative Pflicht ausgegeben werden darf.
4. **Pattern:** empfohlenes Interaktionsmodell für einen bestimmten Komponententyp.
5. **Kontextentscheidung:** mehrere vertretbare Lösungen, deren Eignung von Produkt und Nutzung abhängt.

Absolute Regeln wie „immer“, „niemals“, „ARIA ist verboten“ oder „Escape muss alles schließen“ sind nur zulässig, wenn die konkrete Primärquelle und der Anwendungsbereich diese Aussage tatsächlich tragen.

## Normative und informative Grundlagen

### Universeller Kern

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/): normative W3C Recommendation; primäre Grundlage für Erfolgskriterien und Konformität.
- [HTML Standard](https://html.spec.whatwg.org/): Elemente, Attribute und natives Browserverhalten.
- [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/): Rollen, Zustände und Eigenschaften für Accessibility APIs.
- [ARIA in HTML](https://www.w3.org/TR/html-aria/): zulässige ARIA-Verwendung in HTML.
- [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/) und [WCAG Techniques](https://www.w3.org/WAI/WCAG22/Techniques/): informative Interpretations- und Umsetzungsunterstützung.
- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/): informative Pattern- und Implementierungsreferenz, keine zusätzliche WCAG-Anforderung und keine Garantie für produktionsfertigen Code.
- [W3C ACT Rules](https://www.w3.org/WAI/standards-guidelines/act/rules/): Grundlage für vergleichbarere automatisierte und halbautomatisierte Prüfregeln.

Native HTML-Lösungen werden bevorzugt. ARIA ergänzt fehlende Semantik; es erzeugt weder Verhalten noch Tastaturbedienung oder Fokusmanagement. Custom Widgets benötigen das vollständige Interaktionsmodell und Prüfungen im realen Zielsystem.

### Prüfmethoden und Werkzeuge

- [BIK WCAG-Test (Web)](https://bitvtest.de/pruefverfahren/wcag-22-web): öffentlich dokumentiertes Prüfverfahren mit praxisnahen Prüfschritten. Es ist eine wertvolle Methoden- und Sekundärquelle; maßgeblich für WCAG-Konformität bleibt der normative W3C-Text.
- [Playwright Accessibility Testing](https://playwright.dev/docs/accessibility-testing): browserbasierte Regressionstests, insbesondere mit `@axe-core/playwright`.
- [axe-core](https://github.com/dequelabs/axe-core): automatisierte WCAG-bezogene und Best-Practice-Regeln. `violations`, `incomplete` und `passes` müssen differenziert ausgewertet werden.

Ein Ergebnis ohne automatisiert festgestellte Verstöße bedeutet nur, dass die ausgeführten Regeln im geprüften DOM-Zustand keinen Befund geliefert haben. Es bedeutet weder „barrierefrei“ noch „WCAG-konform“.

### Jurisdiktionsabhängige Grundlagen

- [EN 301 549 V4.1.1 (2026-09)](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/04.01.01_60/en_301549v040101p.pdf) ist als europäischer Standard veröffentlicht, integriert WCAG 2.2 und trennt Web, Non-Web-Dokumente, Non-Web-Software und weitere ICT.
- [WCAG2ICT](https://www.w3.org/TR/wcag2ict-22/) unterstützt die Übertragung von WCAG 2.0, 2.1 und 2.2 auf Non-Web-Dokumente und Software informativ; die Group Note setzt selbst keine Anforderungen.
- European Accessibility Act
- Barrierefreiheitsstärkungsgesetz (BFSG)
- BITV 2.0

Diese Quellen sind je nach Angebot relevant, dominieren aber nicht den universellen Kern. Veröffentlichung einer EN-Fassung, ihre Referenz als harmonisierter Standard im Amtsblatt sowie ihre konkrete rechtliche oder vertragliche Verbindlichkeit sind getrennt zu dokumentieren. Für die Web Accessibility Directive führt die Europäische Kommission derzeit EN 301 549 V3.2.1 als harmonisierte Fassung; V4.1.1 darf nicht allein wegen ihrer Veröffentlichung als bereits für jeden EU-Rechtsakt harmonisiert bezeichnet werden. Das Toolkit bietet keine Rechtsberatung. Aktuelle Fassungen, Geltungsbereich, Übergangsregeln und Ausnahmen müssen für den Einzelfall anhand amtlicher Quellen oder qualifizierter Beratung geprüft werden.

## Fachlicher Abdeckungsanspruch

Die zentrale Wissensbasis muss mindestens folgende Themen zusammenhängend behandeln:

- Accessibility-first und unterschiedliche Menschen, Fähigkeiten, Geräte und Situationen;
- semantisches HTML, Landmarken, Überschriften, Listen, Tabellen und Beziehungen;
- zugängliche Namen, Rollen, Werte, Zustände und Beschreibungen;
- Links, Buttons und konsistente Navigation;
- Tastaturbedienung, Fokusdarstellung, Fokusreihenfolge und Fokusmanagement;
- Formulare, Labels, Hinweise, Eingabezwecke, Validierung, Fehler und Statusmeldungen;
- dynamische Inhalte, Ladezustände, Timeouts und vollständige Prozesse;
- Bilder, Alternativtexte, Audio, Video, Untertitel und Transkripte;
- Text- und Nicht-Text-Kontrast, Farbe, Forced Colors und High Contrast;
- Zoom, Textvergrößerung, Textabstände, Reflow, kleine Viewports und Ausrichtung;
- Bewegung, Animation und `prefers-reduced-motion`;
- Touch, Pointer, Zielgrößen, komplexe Gesten und Dragging-Alternativen;
- Authentifizierung und Vermeidung unnötiger kognitiver Tests;
- komplexe Widgets, ARIA und komponentenspezifische Patterns;
- automatisierte, manuelle und screenreader-orientierte Tests;
- Anforderungen, Akzeptanzkriterien, Befunde, Retests und Aussagekraft;
- typische Antipatterns und die Aussagekraft von Tools, Automatisierung und KI.

WCAG ist dabei die prüfbare Mindestgrundlage, nicht die Obergrenze guter Produktarbeit. Forschung und Tests mit Menschen ergänzen normorientierte Prüfungen, ersetzen sie aber nicht; umgekehrt ersetzt ein Audit keine Forschung mit Menschen.

## Repository-Struktur

```text
/
├── README.md                  Öffentlicher Einstieg für GitHub
├── ACCESSIBILITY.md           Fachliche Source of Truth
├── PROMPT.md                  Startanweisung und Schema für die konkrete Aufgabe
├── SKILL.md                   Arbeitsanweisung für Agents und LLMs
├── TUTORIAL.md                Schrittweise Nutzung mit Prompt-Beispielen
├── HANDOFF.md                 Diese Übergabe
├── CHANGELOG.md               Änderungen des öffentlichen Arbeitsstands
├── index.html                 Statische öffentliche Einstiegsseite
├── assets/                    Lokales Hero-Bild und Maskottchen
├── font/                      Lokal eingebundene Webfonts
├── references/                Vertiefende Fachreferenzen
└── patterns/                  Komponentenbezogene Patterns
```

### Referenzen

- `references/standards.md`
- `references/semantics-and-structure.md`
- `references/keyboard-and-focus.md`
- `references/forms-errors-and-status.md`
- `references/aria-and-components.md`
- `references/visual-accessibility.md`
- `references/content-and-media.md`
- `references/testing.md`

`references/testing.md` enthält eine eigenständig formulierte WCAG-2.2-AA-Prüfmatrix auf Grundlage des BIK-Verfahrens sowie Hinweise zu Scope, Stichprobe, manueller Prüfung, Screenreadern, Playwright und axe-core.

### Patterns

Die Dateien unter `patterns/` konkretisieren wiederkehrende Komponenten. Sie sind keine zusätzlichen normativen Anforderungen. Bei jeder Anwendung sind Produktkontext, Browser-/AT-Unterstützung und die aktuelle APG- beziehungsweise HTML-/ARIA-Grundlage zu prüfen.

## Nutzung durch eine andere LLM oder einen Coding-Agent

1. `ACCESSIBILITY.md` vollständig lesen.
2. Auftrag als Umsetzung, fokussierten Review, explorative Prüfung oder konformitätsorientierte Prüfung einordnen.
3. Ziel, Scope, vollständige Prozesse, Zustände, Viewports, Eingabemethoden, Browser und assistive Technologien erfassen.
4. Nur relevante Dateien aus `references/` und `patterns/` hinzuladen.
5. Aufgabe aus Sicht realer Nutzungspfade bearbeiten, nicht getrennt nach Berufsrollen.
6. Normative Anforderungen, technische Umsetzung, Best Practice, Pattern und Kontextentscheidung sprachlich markieren.
7. Automatisierte Befunde manuell einordnen und `incomplete`-Ergebnisse untersuchen.
8. Änderung im echten Browser sowie mit Tastatur, Zoom/Reflow, Forced Colors und – soweit relevant – Screenreader prüfen.
9. Geprüften und nicht geprüften Umfang, Umgebung, Evidenz und verbleibende Risiken dokumentieren.
10. Keine Konformität oder vollständige Barrierefreiheit aus Teilprüfung, Stichprobe, Toollauf oder KI-Ausgabe ableiten.

## Mindestprüfstrategie für das Produkt

### Struktur und Bedienung

- Dokumenttitel, Sprache, Landmarken und Überschriftenhierarchie prüfen.
- Semantische Elemente und berechnete zugängliche Namen inspizieren.
- Alle Funktionen vorwärts und rückwärts ausschließlich per Tastatur bedienen.
- Fokusindikator, Fokusreihenfolge, Fokusverlust und Fokusmanagement prüfen.
- Links, Buttons, Formulare und Widgets auf Name, Rolle, Wert und Zustand prüfen.

### Darstellung und Eingabe

- 200 % Textvergrößerung prüfen.
- 400 % Zoom beziehungsweise 320 CSS-Pixel Breite auf Reflow prüfen.
- Textabstände verändern und Inhaltsverlust ausschließen.
- Text- und Nicht-Text-Kontrast sowie Farbe als Informationsträger prüfen.
- Forced Colors und reduzierte Bewegung prüfen.
- Touch-Zielgrößen, alternative Pointer-Eingaben, Gesten und Dragging prüfen.

### Inhalte und Prozesse

- Alternativtexte im Kontext beurteilen.
- Untertitel, Audiodeskription und Medienalternativen nach Anwendbarkeit prüfen.
- Formulare mit Hinweisen, Validierung, Fehlermeldungen und Wiederaufnahme testen.
- Lade-, Leer-, Fehler-, Erfolgs-, Timeout- und Authentifizierungszustände prüfen.
- Kritische Aufgaben als vollständige Prozesse über alle Seiten und Zustände testen.

### Automatisierung

- Relevante Zustände vor jedem axe-Scan tatsächlich herstellen.
- Ganze Seiten und gezielt einzelne Komponenten prüfen; den Scope benennen.
- Browser und Viewports variieren.
- `violations` manuell einordnen und `incomplete` manuell untersuchen.
- Ausgeschlossene Bereiche oder deaktivierte Regeln mit Grund, Verantwortung, Ablaufdatum und Retest dokumentieren.
- Vollständige Resultate als Artefakte sichern.
- Automatisierung stets durch manuelle Prüfung ergänzen.

### Tests mit assistiven Technologien und Menschen

- Mindestens dokumentierte Browser-/Screenreader-Kombinationen passend zu Zielplattformen einsetzen.
- Überschriften-, Landmarken-, Link-, Formular-, Tabellen- und Widgetnavigation prüfen.
- Alternative Eingabeformen abhängig von Produkt und Risiko berücksichtigen.
- Menschen mit unterschiedlichen Behinderungen und Nutzungserfahrungen in Forschung und Usability-Tests einbeziehen, wenn der Produktanspruch belastbare Nutzungsaussagen verlangt.

## Stand der öffentlichen Einstiegsseite

`index.html` ist eine statische Seite ohne Framework oder Tracking. Sie verwendet lokale Schriften und lokale Assets. Minimales JavaScript steuert die mobile Navigation, setzt das Startpaket aus den beiden kanonischen Markdown-Dateien zusammen und zeigt lokale Dokumente in nativen Dialogen. Die Anleitung wird vollständig aus `TUTORIAL.md` dargestellt, damit Website und Markdown-Set denselben Inhalt verwenden. Ohne JavaScript bleiben die Markdown-Dateien und `tutorial.html` normal erreichbar. Die Gestaltung orientiert sich an der reduzierten visuellen Sprache von sebastianjansen.com:

Damit die Markdown-Dialoge auch beim direkten Öffnen von `index.html` über `file://` funktionieren, enthält `assets/markdown-content.js` eine generierte lokale Kopie der Markdown-Dateien. Nach fachlichen Änderungen wird sie mit `node scripts/build-markdown-bundle.mjs` aktualisiert. Über HTTP(S) lädt die Seite weiterhin zuerst die jeweilige Markdown-Datei und verwendet den Bundle nur als Fallback.

- Schwarz, Weiß, Graustufen und Pink als Akzent;
- lokale Neue-Machina-Schriften;
- Kiwi Soda von jeti ausschließlich für die Wortmarke, lokal eingebunden und mit CC-BY-4.0-Namensnennung unter `font/KiwiSoda-LICENSE.txt` dokumentiert;
- großzügiger Weißraum und klare typografische Hierarchie;
- Bento-/Werkzeugkistenraster;
- lokales Hero-Hintergrundbild;
- freigestelltes helles 3D-Maskottchen als Retro-Computer-Roboter mit CRT-Gesicht, kurzen Gelenkarmen und deresjot-pinken Signalen;
- Projekttitel als pink-weißer, leicht gedrehter Störer unmittelbar am zentrierten Maskottchen in einem vollständigen ersten Viewport; Kurzbeschreibung und Download bleiben Teil dieser Bühne;
- überlagerter Header mit Sebastians Bildlogo, kompakter mobiler Navigation und pinkem Scrollzustand nach dem Vorbild der Hauptseite;
- schwarzer Footer strukturell nach der Hauptseite: identische Badge-Größen, zentrierte schmale Inhaltsspalte, Textgröße und Zeilenhöhe, Impressum-/Bildnutzungslinks sowie runder Zurück-nach-oben-Link;
- lokale Markdown-Dokumente in einem fokussierten, scrollbar begrenzten Dialog;
- eine deutlich priorisierte Kopieraktion und getrennte sekundäre Aktionen zum Ansehen und Verstehen.

Der Bereich „Kein falsches Versprechen“ nutzt eine gemeinsame dunkle Trägerfläche mit gleichmäßigen Trennlinien statt überlappender Borders. Die Linienstärke wird auf kleinen Viewports reduziert. Buttonfarben sind für normale, besuchte, Hover-, Fokus- und Forced-Colors-Zustände explizit definiert.

## Bereits durchgeführte technische Prüfungen

- vollständige Portfolio-Regression mit 99 Playwright-Fällen und 32 WCAG-EM-orientierten axe-Zustands-/Viewportfällen ohne bestätigte automatische Regel- oder Reflow-Befunde abgeschlossen;
- nach dem Live-Deployment 16 gezielte Browser-Smoke-Tests für Navigation, mobile Sections, Copilot-Hero, gemeinsame Dialoge und lokale Ressourcen bestanden;
- eigenständigen Build erzeugt und Desktopnavigation, mobilen View sowie Ressourcen lokal gezielt geprüft;
- HTML mit `html-validate` geprüft;
- Transparenz, Abmessungen und Darstellung des PNG-Maskottchens auf dunklem Hintergrund geprüft;
- Hero und responsive Darstellung in Desktop- und Mobilansichten visuell geprüft;
- lokale Erreichbarkeit von HTML und Assets geprüft;
- Playwright- und axe-core-Quellen auf Erreichbarkeit geprüft;
- frühere automatische axe-Prüfung der statischen Seite ohne gemeldete Violations durchgeführt;
- repo-weite Suche nach früheren organisationsspezifischen Begriffen im aktuellen Arbeitsstand durchgeführt.

Diese Prüfungen sind keine Konformitätsgarantie. NVDA/Firefox, VoiceOver/Safari und aufgabenbasierte Tests mit Menschen bleiben als reale manuelle Prüfungen offen und müssen für weitergehende Nutzungsaussagen ergänzt werden.

## Veröffentlichungsstand

- Repository: `https://github.com/deresjot/a11y-copilot`
- Standardbranch: `main`
- Aktueller veröffentlichter funktionaler Stand: Version `0.2.3` auf `main`; der jeweilige Git-Commit ist die verbindliche Revisionskennung.
- Sichtbarkeit: öffentlich
- Lokaler Standalone-Build: `npm run build`; Ausgabe unter `dist/`
- Portfolio-Integration: veröffentlichter Auslieferungsstand `1.0.12` vom 30. August 2026. Die Revisionskennung und die datierten Prüf- beziehungsweise Deployment-Artefakte des Website-Repositories sind für diesen Stand maßgeblich. Die fachlichen Änderungen vom 4. September 2026 wurden nicht veröffentlicht oder deployt.

## Offene Veröffentlichungspunkte

- Es ist derzeit keine abschließend gewählte Lizenz dokumentiert. Diese Entscheidung darf nicht von einer LLM getroffen werden. Für Code und Inhalte kann eine Kombination oder eine einheitliche permissive Lizenz erwogen werden; Urheber- und Haftungsfragen sind vor Veröffentlichung zu klären.
- Fremde Texte dürfen nicht ungeprüft übernommen werden. Inhalte externer Guides wurden nur als Impulse behandelt und eigenständig formuliert.
- Herkunft und Nutzungsrecht aller lokalen Fonts, Bilder, Favicons und sonstigen Assets müssen vor Veröffentlichung dokumentiert werden.
- Relative Links und externe Links im finalen Veröffentlichungsstand erneut prüfen.
- Solange Lizenz und Fontrechte nicht geklärt sind, bewusst entscheiden, ob das Repository öffentlich bleiben soll.
- Sensible Informationen, interne Domains, Metadaten, Binärdateien und generierte Artefakte bei künftigen Releases weiterhin repo-weit scannen.
- Die bereits veröffentlichte Git-Historie wurde nicht umgeschrieben. Falls eine nachträgliche Historienbereinigung erforderlich wird, muss sie separat geplant, gesichert und kontrolliert durchgeführt werden.

## Pflegeprinzipien

- Fachwissen möglichst einmal pflegen und von anderen Dateien darauf verweisen.
- Normativ relevante Aussagen gegen aktuelle Primärquellen prüfen.
- Versions- und Datumsbezug dokumentieren.
- Keine Success Criteria erfinden oder aus Best Practices ableiten.
- APG-Beispiele nicht als WCAG-Pflicht oder ungeprüft als Produktionscode behandeln.
- Neue Patterns nur ergänzen, wenn sie wiederkehrenden praktischen Wert haben.
- Weniger Struktur und Prozess bevorzugen, solange fachliche Belastbarkeit erhalten bleibt.
- Änderungen an Standards, Testmethoden und Toolregeln regelmäßig nachvollziehen.

## Gewünschtes Ergebnis

Das Repository soll sich wie eine kompakte, belastbare und erweiterbare Accessibility-Wissensbasis anfühlen: direkt lesbar für Menschen, eindeutig steuerbar für Agents, portabel zwischen Werkzeugen und frei von organisationsspezifischem Prozessballast.

Der Qualitätsanspruch lautet nicht „ein Tool behauptet 100 %“, sondern: **Barrieren so früh und umfassend wie möglich vermeiden, den vereinbarten Scope nachvollziehbar prüfen, Menschen einbeziehen und offene Punkte transparent benennen.**
