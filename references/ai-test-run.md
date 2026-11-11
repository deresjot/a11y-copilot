# KI-Prüflauf Barrierefreiheit

Der a11y-copilot verbindet seine Wissensbasis mit den Testwerkzeugen des jeweiligen Projekts. Ein KI-Assistent kann damit einen Prüfauftrag planen, vorhandene Tests ausführen, Befunde untersuchen und Änderungen nachtesten. Voraussetzung für die Ausführung sind ein geeigneter Projekt- und Browserzugriff sowie installierte Testwerkzeuge. Ein Chat ohne diesen Zugriff kann Material analysieren und einen Prüfplan liefern, aber keinen Browserlauf belegen.

## Direkt verwendbarer Prüfauftrag

Verwende diesen Auftrag nach dem [Startpaket](../PROMPT.md) zusammen mit der [Arbeitsgrundlage](../ACCESSIBILITY.md). Ergänze den Prüfgegenstand und den betroffenen Nutzungspfad.

> Führe einen KI-Prüflauf Barrierefreiheit für den genannten Prüfgegenstand durch. Ermittle aus dem Projekt die vorhandenen Testbefehle und wähle die zum Auftrag passenden Prüfungen. Nutze die Wissensbasis, references/testing.md und das vereinbarte Standardprofil. Prüfe relevante Seiten, Zustände und vollständige Nutzungspfade. Führe verfügbare automatisierte Tests mit dem nötigen Zugriff aus; behaupte keine Ausführung ohne Ergebnis. Dokumentiere Umgebung, Umfang, Befunde, Nutzerwirkung und offene manuelle Prüfungen. Unterscheide bereits bestehende Fehler von Regressionen. Korrigiere bestätigte Fehler nur im beauftragten Umfang und teste betroffene Abläufe erneut. Trenne echte Browserbeobachtungen, simulierte Antworten, gemockte Zwischenablage und nicht geprüfte assistive Technologien. Gib keine Konformitätszusage aus bestandenen Tests ab.

## Testübersicht dieser Website

Die folgenden Ebenen sind im Portfolio-Projekt vorhanden. Sie sind ein Beispiel für die Verbindung von Wissensbasis und Qualitätssicherung; der eigenständige Copilot installiert diese Tests nicht automatisch. Maßgeblich für konkrete Befehle und Umfang bleibt das jeweilige Projekt.

| Ebene | Prüfgegenstand | Aussagegrenze |
| --- | --- | --- |
| Automatisierte Accessibility-Scans | axe-core, konfigurierte Seitenzustände und Bildschirmgrößen, Reflow-Befunde | Nur ausgeführte Regeln und erreichte Zustände; offene Bewertungen bleiben offen. |
| Navigation und globales Seitengerüst | Header, Footer, Links, zugängliche Namen und Reihenfolge | Technische Verträge ersetzen keine Prüfung der tatsächlichen Verständlichkeit. |
| Kritische Workflows | Kontaktformular, Copilot-Dokumentdialoge und Kopieren des Startpakets | Simulierte Antworten und Clipboard-Mocks belegen keine echte Zustellung oder systemweite Zwischenablage. |
| Responsive WebKit-Prüfungen | Mobile Navigation, Zwischenbreiten, Dialoge, Inhaltsbegrenzung und Sprungziele | Browserautomatisierung ersetzt keine Tests auf realen Geräten oder mit assistiven Technologien. |
| Copilot-Wissensbasis und Bedienung | Regelprofile, Quellenanbindung, Anleitung und Dokumentzugriff | Strukturprüfungen bestätigen nicht jede fachliche Aussage oder KI-Antwort. |
| Auffindbarkeit | Metadaten und maschinenlesbare Einstiege | Auffindbarkeit belegt keine Barrierefreiheit. |
| Performance und Auslieferung | Ladeverhalten sowie ergänzende Server- und Release-Prüfungen | Technische Qualitätssicherung; kein eigener Accessibility- oder Konformitätsnachweis. |

Die [Gegenproben für KI-Aussagen](../evals/README.md) ergänzen diese Ebenen: Sie helfen, unzulässige Schlussfolgerungen und fehlende Evidenz zu erkennen. Sie sind von tatsächlich ausgeführten Browser- und Produkttests zu unterscheiden.

## Ergebnis eines Prüflaufs

Halte Datum, geprüften Stand, Seiten, Zustände, Browser, Viewports, Werkzeugversionen und tatsächliche Testausführung fest. Beschreibe je Befund erwartetes und beobachtetes Verhalten, Nutzerwirkung, Evidenz, belastbaren Normbezug, Korrektur und Retest. Kennzeichne nicht ausgeführte Prüfungen und Zugriffsgrenzen ausdrücklich. Vollständige Ergebnisse einschließlich offener Werkzeugbewertungen gehören zum Prüfprotokoll; eine kurze Zusammenfassung darf sie nicht als bestanden darstellen.

Die [Prüfmethoden](testing.md) und [automatisierten Regelprofile](automated-rulesets.md) vertiefen das Vorgehen. Tastaturbedienung, Screenreader-Ausgabe, Inhaltsqualität und Tests mit Menschen bleiben eigenständige Prüfschritte. Ein automatisierter Prüflauf allein ist kein vollständiger Audit.

## Vom Befund zur Korrektur und zurück zum Test

1. Reproduziere den Befund im angegebenen Ablauf und ordne Nutzerwirkung, Evidenz und fachliche Grundlage ein. Ein unbestätigter Toolhinweis bleibt ein Prüfauftrag.
2. Beschreibe erwartetes Verhalten und Abnahme nach dem [Aufgabenformat](project-work.md). Halte Aufwandsschätzungen und Abhängigkeiten getrennt von der Schwere der Barriere fest.
3. Prüfe den konkreten Korrekturstand im betroffenen Ablauf sowie angrenzende Zustände. Untersuche zusätzlich neu entstandene Bedienung; der behobene Ausgangsbefund sagt darüber nichts aus.
4. Ergänze bei wiederholbarem Risiko einen passenden Regressionstest. Ein Scan allein belegt weder den vollständigen Ablauf noch die Qualität erzeugter Inhalte eines Autorensystems.
5. Halte Ergebnis und offene manuelle Prüfungen fest. Teile dürfen als korrigiert gelten, während die Gesamtaussage offen bleibt. Dokumentiere einen fehlgeschlagenen ersten Lauf und den tatsächlichen Nachtest, statt nur den letzten grünen Status zu nennen.

Die Schleife wird bei neuen Änderungen oder offenen Befunden erneut angewendet. Sie ist keine Aufforderung zu unbegrenzten Testwiederholungen ohne neue Fragestellung. Grundlage für die Grenzen automatisierter Browserprüfungen: [Playwright: Accessibility testing](https://playwright.dev/docs/accessibility-testing).
