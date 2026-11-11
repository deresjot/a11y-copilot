# Von der Nutzungssituation zur umsetzbaren Aufgabe

Diese Arbeitshilfe verbindet Konzeption, Gestaltung, Entwicklung, Redaktion, Qualitätssicherung und Projektsteuerung. Sie beschreibt ein anpassbares Vorgehen, keine zusätzlichen normativen Anforderungen. Verwende nur die für den Auftrag relevanten Schritte; eine einzelne Codefrage braucht keinen vollständigen Projektplan.

## Erst das Problem, dann die Lösung

Ermittle aus vorhandenen Unterlagen, Tests und Rückmeldungen, welche Aufgabe Menschen erledigen wollen und wo sie scheitern. Unterscheide beschriebene Erfahrung, beobachtetes Verhalten, heuristische Einschätzung und normativ belegte Abweichung. Ein Lösungsvorschlag im Ticket ist noch kein geprüfter Lösungsweg.

Beziehe vorhandene Anforderungen, geprüfte Komponenten, bekannte Barrieren und frühere Entscheidungen ein. Frage nur nach entscheidenden fehlenden Angaben. Erfinde keine Nutzungsevidenz, Interviewergebnisse oder bereits getroffenen Entscheidungen.

## Einen vollständigen Ablauf beschreiben

Halte Einstieg, benötigte Berechtigung, zentrale Schritte, Rückmeldung, Fehler, Abbruch und Wiederaufnahme fest. Beschreibe das erwartete Ergebnis, bevor eine bestimmte Oberfläche oder Technologie festgelegt wird. Prüfe die Übergänge zwischen Werkzeugen und Zuständigkeiten: Ein zugänglicher Einzelschritt hilft nicht, wenn der nächste Schritt für dieselbe Person blockiert ist.

Bei Autorensystemen gehören die Bedienung des Werkzeugs und die Qualität des erzeugten Inhalts als getrennte Prüfgegenstände in den Auftrag; siehe [Autorensysteme](authoring-tools.md). Für andere Software müssen Plattform und passende Prüfmethoden bestimmt werden.

## Aus einer Anforderung eine bearbeitbare Aufgabe machen

Ein knappes Aufgabenformat kann so aussehen:

- **Aufgabe und Kontext:** Wer möchte welches Ergebnis erreichen? Welche Einschränkung wurde tatsächlich beobachtet?
- **Erwartetes Verhalten:** Was soll in den relevanten Zuständen und Eingabemethoden möglich sein?
- **Fachliche Grundlage:** Anwendbare Anforderung mit Quelle und Version oder ausdrücklich gekennzeichnete Kontextentscheidung.
- **Umsetzung und Abhängigkeiten:** Betroffene Komponenten, Inhalte oder Schnittstellen; begründeter Vorschlag und offene Alternativen.
- **Abnahme und Retest:** Reproduzierbarer Prüfweg, erwartetes Ergebnis und passende automatische, manuelle oder nutzerbezogene Prüfung.
- **Bearbeitung:** Entscheidung, Verantwortlichkeit, Status und offene Punkte, soweit für den Auftrag erforderlich.

Benenne das gewünschte Verhalten statt nur „barrierefrei machen“. Ticket- und Wissenssysteme dienen der Nachverfolgung; keine bestimmte Marke ist Voraussetzung. Ein Ticket wird nicht allein durch eine Codeänderung oder einen grünen Scan fachlich abgeschlossen.

## Aufwand und Priorität transparent entscheiden

Trenne die Auswirkung einer Barriere vom Aufwand ihrer Behebung. Eine schnell umsetzbare kosmetische Änderung wird nicht automatisch dringlicher als ein blockierter Kernprozess. Berücksichtige Reichweite, Häufigkeit, Abhängigkeiten und verfügbare Alternativen. Kennzeichne Aufwandsschätzungen mit Annahmen und Unsicherheit; erfinde keine Kosten, Einsparungen oder Kapazitäten.

Wenn Zeit oder Budget knapp sind, mache die Entscheidung sichtbar: etwa Umfang staffeln, eine Komponente austauschen, Kapazität ergänzen oder eine Veröffentlichung verschieben. Plane gegebenenfalls einen geprüften Zwischenweg mit Zuständigkeit und erneutem Prüftermin. Ein Workaround ist kein Beleg, dass die ursprüngliche Barriere behoben wurde. Budgetknappheit hebt anwendbare Anforderungen nicht auf; eine vertagte Maßnahme wird nicht als bestanden oder konform bewertet.

## Wissen im Team nutzbar halten

Halte die Begründung neben der Entscheidung fest. Verlinke Aufgaben, Nachweise und wiederverwendbare Lösungen, ohne vertrauliche Kundendaten in eine öffentliche Wissensbasis zu kopieren. Workshops und Fachabstimmungen können aus wiederkehrenden Befunden konkrete Lernaufgaben machen. Ein genannter Workshop ist kein Beleg für eine veränderte Produktqualität.

Prüfe nach Korrekturen den betroffenen Ablauf erneut und überführe geeignete Fälle in Regressionstests. Aktualisiere die fachliche Grundlage, wenn reproduzierte Rückmeldungen, neue Quellen oder veränderte Plattformen dies rechtfertigen. Mehr zur Pflege in [Strategie und Pflege](governance-and-maintenance.md), zur Ausführung im [KI-Prüflauf](ai-test-run.md).

## Methodischer Hintergrund

[W3C WAI: Planning and Managing Web Accessibility](https://www.w3.org/WAI/planning-and-managing/) behandelt die Einbindung von Zuständigkeiten, Ressourcen, Umsetzung und fortlaufender Pflege. Die obige Aufgabenstruktur ist eine praktische Synthese für Projektarbeit, kein vorgeschriebenes W3C-Ticketformat. [W3C WAI: Involving Users in Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/involving-users/) erläutert die Verbindung von Nutzerbeteiligung und standardbezogener Prüfung. Quellen geprüft am 11. November 2026.
