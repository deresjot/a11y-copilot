# a11y-copilot in sebastianjansen.com integrieren

Stand: 15. August 2026

## Empfehlung

`a11y-copilot` sollte als eigenständiges Angebot unter `https://sebastianjansen.com/a11y-copilot/` veröffentlicht werden. Die Hauptseite erhält einen sichtbaren Einstieg, übernimmt aber weder die vollständige Toolkit-Oberfläche noch deren CSS oder Dialoglogik.

Diese Trennung ist technisch wichtig: Die Hauptseite ist eine statische, historisch gewachsene Seite mit Bootstrap, jQuery und mehreren globalen Stylesheets. Das Toolkit ist eine eigenständige statische Seite mit bewusst kleiner, lokaler Laufzeit. Eine gemeinsame CSS-Kaskade würde neue Regressionen begünstigen – gerade bei Raster, Typografie, Dialogen, Vergrößerung und mobiler Navigation.

Für Menschen soll sich das trotzdem wie ein zusammenhängendes Angebot anfühlen:

1. Sebastian Jansen stellt auf der Hauptseite das Werkzeug und seinen Zweck vor.
2. Ein eindeutiger Link führt zur eigenen Toolkit-Seite auf derselben Domain.
3. Dort kann die Hilfsdatei direkt kopiert, die Anleitung geöffnet oder das Repository besucht werden.
4. Logo, Header und Footer führen nachvollziehbar zur Hauptseite zurück.

Ein `iframe`, ein großer Dialog auf der Hauptseite oder das dynamische Nachladen der Toolkit-Seite sind dafür unnötig und würden Navigation, Fokus, URLs, Teilen und Wartung verschlechtern.

## Platz auf der Hauptseite

Die Homepage besitzt derzeit die Hauptbereiche `hero`, `about`, `vernetzen` und `contact`. Das Toolkit sollte einen eigenen Bereich zwischen persönlichem Profil und Vernetzung beziehungsweise Kontakt erhalten. So erscheint es als konkretes öffentliches Arbeitsbeispiel und nicht erst als Fußnote im Kontakttext.

Empfohlene Informationsfolge:

- kleine Kennzeichnung: „Freies Werkzeug für digitale Barrierefreiheit“;
- Überschrift: „a11y-copilot“;
- zwei kurze Absätze: Problem, Funktionsweise und Aussagegrenze;
- primäre Aktion: „a11y-copilot öffnen“;
- sekundärer Textlink: „Quellcode auf GitHub“;
- ein Bild des Maskottchens oder eine ruhige Detailansicht als visuelles Erkennungsmerkmal.

Die Hauptnavigation kann dafür einen Punkt „a11y-copilot“ erhalten. Dieser Link sollte direkt auf `/a11y-copilot/` führen, nicht auf einen Anker, wenn das Angebot bereits veröffentlicht ist. In den Skiplinks der Homepage ist kein zusätzlicher Sprunglink nötig, sofern der Bereich nur ein kompakter Teaser bleibt.

### Möglicher Teasertext

> Digitale Barrierefreiheit steckt nicht in einem einzelnen Test. Sie entsteht aus Entscheidungen über Anforderungen, Gestaltung, Inhalte, Technik, Prüfung und Betrieb.
>
> a11y-copilot ist meine frei zugängliche Wissensgrundlage für Fragen zur digitalen Barrierefreiheit. Du kopierst die Hilfsdatei in den KI-Assistenten deiner Wahl und stellst danach deine konkrete Frage. Das Werkzeug hilft beim Einordnen, Begründen und Prüfen – es ersetzt keinen Audit und keine Tests mit Menschen.

Primäre Beschriftung: **a11y-copilot öffnen**

## URL- und Dateistruktur

Empfohlene Veröffentlichung:

```text
sebastianjansen.com/
├── index.html
├── …
└── a11y-copilot/
    ├── index.html
    ├── tutorial.html
    ├── ACCESSIBILITY.md
    ├── SKILL.md
    ├── TUTORIAL.md
    ├── references/
    ├── patterns/
    ├── assets/
    └── font/
```

Das Toolkit verwendet innerhalb seines Verzeichnisses relative Pfade und kann deshalb als zusammenhängender Ordner veröffentlicht werden. Links zur Hauptseite, zum Impressum und zur Bildnutzung sollten für die Domainfassung einheitlich auf `/`, `/impressum.html` und `/bildnutzung.html` zeigen. Für eine portable GitHub-Ausgabe dürfen diese Links weiterhin absolute URLs zu `sebastianjansen.com` verwenden.

Ein zusätzliches ZIP kann unter `/downloads/a11y-copilot.zip` angeboten werden. Das ZIP sollte aus einem reproduzierbaren Release entstehen und nicht manuell neben dem Repository weitergepflegt werden.

## Repository und Veröffentlichung nicht vermischen

Das Toolkit sollte sein eigenes öffentliches GitHub-Repository erhalten. Die Website ist die nutzerorientierte Ausgabe; GitHub ist Quelle, Versionshistorie und Downloadort für Menschen, die das Toolkit weiterverwenden oder beitragen möchten.

Empfohlener Ablauf:

1. Lizenz und Rechte an Fonts, Bildern und übrigen Assets klären.
2. Git-Historie auf frühere organisationsspezifische Inhalte prüfen und gegebenenfalls kontrolliert bereinigen.
3. Eigenes Repository und endgültige GitHub-URL festlegen.
4. Eine veröffentlichbare Version markieren.
5. Genau diese Version nach `/a11y-copilot/` auf der Hauptdomain kopieren.
6. ZIP und Downloadlink aus demselben Stand erzeugen.

Langfristig sollte ein kleines Deployment-Skript oder eine GitHub Action den veröffentlichten Ordner aus einem markierten Toolkit-Release erzeugen. Es sollte keine zweite handgepflegte Kopie der Markdown-Dateien in `deresjot-online` geben.

## Technische Ergänzungen auf sebastianjansen.com

Für den ersten Release sind folgende Änderungen sinnvoll:

- Navigation und Homepage-Teaser ergänzen.
- `/a11y-copilot/` in `sitemap.xml` aufnehmen.
- `llms.txt` um Toolkit, Hauptquelle, Skill und Repository ergänzen.
- kanonische URL, Description und Social-Metadaten auf der Toolkit-Seite ergänzen.
- für strukturierte Daten eher `CreativeWork` oder `SoftwareSourceCode` mit Autor, Lizenz, Repository und kostenfreier Verfügbarkeit verwenden; keine unbelegten Bewertungen oder Konformitätsaussagen auszeichnen.
- einen echten GitHub-Link und – nach Lizenzentscheidung – einen Lizenzlink ergänzen.
- den Download als versioniertes Artefakt mit verständlichem Dateinamen anbieten.
- Fehlerseite und Hauptnavigation so ergänzen, dass `/a11y-copilot/` auffindbar bleibt.

Die vorhandene Hauptseite nennt im Lebenslauf noch einen konkreten Arbeitgeber. Das ist vom Toolkit getrennt, sollte vor der öffentlichen Positionierung als unabhängiges persönliches Angebot aber redaktionell bewusst geprüft werden. Eine automatische Entfernung wäre nicht angemessen.

## Gestaltung

Das Toolkit darf innerhalb der persönlichen Marke eigenständig wirken. Wiederkehren sollten:

- lokale Neue-Machina-Typografie und robuste Systemschrift-Fallbacks;
- Schwarz, Weiß, Graustufen und `#ff004f`;
- Logo, reduzierter Header, Footerbadge und Linkdarstellung;
- große Bildbühne, großzügiger Abstand und klare Linien;
- das Maskottchen als eigenes Erkennungszeichen des Werkzeugs.

Nicht übernommen werden sollten die ältere Bootstrap-Rasterlogik, jQuery-Abhängigkeiten oder globale Hauptseitenklassen. Gemeinsamkeit entsteht über Gestaltung und Sprache, nicht über eine gemeinsame CSS-Datei.

## Barrierefreie User Journey

Der kürzeste Hauptpfad lautet:

```text
Homepage → a11y-copilot öffnen → Für KI kopieren → KI-Chat öffnen → Frage stellen
```

Daneben bleiben drei selbständige Wege erhalten:

- Anleitung für technisch unerfahrene Menschen;
- direkter Zugriff auf `ACCESSIBILITY.md` ohne JavaScript;
- GitHub beziehungsweise Download für dauerhafte oder agentenbasierte Nutzung.

Der Homepage-Teaser sollte nicht schon alle Optionen zeigen. Dort braucht es eine dominante Aktion. Die Toolkit-Seite erklärt anschließend die Wahlmöglichkeiten und Grenzen.

## Navigationsmodell

Hauptseite und Toolkit bilden ein gemeinsames Webangebot, aber zwei unterschiedliche Informationsebenen. Deshalb werden globale Orientierung und lokale Navigation nicht in eine einzige wechselnde Linkliste vermischt:

- Die Navigation der Hauptseite folgt ihrer tatsächlichen Inhaltsreihenfolge: Home, Wer bin ich, Vernetzen, Kontakt, a11y-copilot.
- Auf der Toolkit-Seite zeigt eine sichtbare Pfadnavigation die Hierarchie „Sebastian Jansen / a11y-copilot“ und bietet den Rückweg zur Hauptseite.
- Eine separat benannte Bereichsnavigation erschließt Überblick, Warum, Inhalt, Benutzung und Anleitung.
- Der aktuelle Abschnitt wird programmatisch mit `aria-current="location"` und zusätzlich visuell durch Form und Schriftgewicht markiert.
- Eine progressive Same-Origin-View-Transition verbindet Hauptseite und Toolkit in unterstützenden Browsern. Ohne Unterstützung bleibt die normale Navigation vollständig funktionsfähig; bei reduzierter Bewegung wird die Animation praktisch deaktiviert.

Dieses Modell folgt [WCAG 2.2, Erfolgskriterium 3.2.3](https://www.w3.org/TR/WCAG22/#consistent-navigation): Wiederkehrende Navigationsmechanismen behalten ihre relative Reihenfolge. Eine zusätzliche Bereichsnavigation bleibt möglich. Die [WAI-Hinweise zur Menüdarstellung](https://www.w3.org/WAI/tutorials/menus/styling/) empfehlen konsistente Position, Gestaltung und erkennbare aktuelle Zustände. Das [APG-Breadcrumb-Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/) beschreibt die Pfadnavigation als benanntes Navigationslandmark zur Orientierung innerhalb einer Hierarchie. Auf UX-Ebene stützt das die Nielsen-Heuristiken [Sichtbarkeit des Systemstatus, Konsistenz und Standards sowie Wiedererkennen statt Erinnern](https://www.nngroup.com/articles/ten-usability-heuristics/).

Die Seitenübergangsanimation ist eine progressive Mikrointeraktion, keine Voraussetzung zum Verständnis der Hierarchie. Orientierung muss bereits durch URL, Titel, sichtbaren Pfad, Überschrift und Navigation funktionieren.

## Test- und Freigabestrategie

Vor jeder Veröffentlichung sollten Hauptseite und Toolkit gemeinsam getestet werden:

1. relative und kanonische URLs einschließlich Direktaufruf von Unterseiten;
2. Navigation mit Maus, Touch und Tastatur;
3. Fokus beim Öffnen und Schließen beider Dialoge;
4. 320-CSS-Pixel-Reflow sowie 200 % Textvergrößerung;
5. Kontrast, Forced Colors und reduzierte Bewegung;
6. Markdown-Kopieren mit und ohne moderne Clipboard-API;
7. axe-core auf Startseite, Tutorial, geöffnetem Markdown-Dialog und Fehlersituation;
8. manuelle Prüfung der vollständigen Hauptreise;
9. Download, ZIP-Inhalt, GitHub-Links und Versionsgleichheit;
10. Prüfung mit mindestens einer dokumentierten Browser-/Screenreader-Kombination.

Automatisierte Tests sollten zusätzlich einen Overflow-Check enthalten. Dabei werden nicht nur `scrollWidth` und Viewportbreite verglichen, sondern auch die Rechtecke von Textknoten beziehungsweise Textelementen mit ihren Rasterzellen. So werden Fehler erkannt, die axe-core nicht abdeckt.

## Stufenweiser Rollout

### Stufe 1 – stabile öffentliche Unterseite

Toolkit lizenzieren, Repository veröffentlichen, unter `/a11y-copilot/` bereitstellen und alle direkten Pfade testen. Die Homepage verlinkt zunächst nur aus dem Kontakt- oder Projektbereich.

### Stufe 2 – sichtbares persönliches Angebot

Eigenen Homepage-Teaser und Navigationspunkt ergänzen. Sitemap, `llms.txt`, Metadaten und Social Preview aktualisieren. Nutzung beobachten, ohne Tracking vorauszusetzen; qualitative Rückmeldungen und GitHub-Issues reichen für den Anfang.

### Stufe 3 – belastbarer Releaseprozess

Versioniertes ZIP, Release Notes und automatisierten Deployment-Abgleich ergänzen. Fachliche Änderungen an Standards und Testmethoden erhalten einen nachvollziehbaren Veröffentlichungsrhythmus.

## Entscheidung vor der Umsetzung

Vor dem Einbau müssen nur wenige Punkte bewusst festgelegt werden:

- endgültige GitHub-URL und Repository-Name;
- Lizenz für Code und Inhalte sowie Rechte an allen lokalen Assets;
- ob das ZIP primär von GitHub Releases oder von der eigenen Domain geladen wird;
- Hosting- beziehungsweise Deploymentweg der Hauptseite;
- redaktioneller Umfang des Homepage-Teasers.

Die empfohlene Standardentscheidung lautet: eigenständiges Repository, Unterseite auf derselben Domain, ein kompakter Homepage-Teaser, GitHub Releases als versionierte Quelle und ein automatischer oder reproduzierbarer Abgleich zur Website.
