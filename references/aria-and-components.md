# ARIA und Komponenten

## Entscheidungsweg

1. Gibt es ein passendes natives HTML-Element?
2. Kann die Interaktion vereinfacht oder in normale Dokumentnavigation überführt werden?
3. Wenn ein ARIA-Widget nötig ist: Welche Rolle, Zustände, Beziehungen und Tastaturregeln definiert die aktuelle Spezifikation beziehungsweise das passende APG-Pattern?
4. Welche Browser-/Assistive-Technologie-Kombinationen müssen unterstützt und getestet werden?

## Regeln

- Ändere native Semantik nicht ohne belastbaren Grund.
- Verwende Rollen und Attribute nur dort, wo sie für das Element erlaubt sind.
- Jede ARIA-Referenz-ID muss auf ein passendes, vorhandenes Element zeigen.
- Zustände müssen beim ersten Rendern korrekt sein und sich synchron ändern.
- `aria-hidden="true"` darf keinen fokussierbaren oder benötigten Inhalt unzugänglich machen.
- `role="presentation"`/`none` entfernt Semantik nicht in jeder Situation und kann erforderliche Kindrollen betreffen.
- `aria-disabled="true"` verhindert keine Aktivierung; Verhalten muss implementiert werden. Native `disabled`-Semantik unterscheidet sich.

## APG einordnen

APG dokumentiert erwartete Patternmodelle und Beispielcode. Wähle nicht einzelne Attribute isoliert aus einem Beispiel. Übernimm das vollständige Modell nur, wenn der Komponententyp wirklich passt. Prüfe bekannte Einschränkungen der Beispiele und die Zielumgebung.

Für häufige Komponenten siehe [Dialog](../patterns/dialog.md), [Combobox](../patterns/combobox.md), [Tabs](../patterns/tabs.md), [Navigation](../patterns/navigation.md) und [Disclosure](../patterns/disclosure.md).
