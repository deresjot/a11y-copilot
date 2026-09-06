# a11y-copilot benutzen

Der a11y-copilot hilft dir bei Fragen zur digitalen Barrierefreiheit. Er gibt deiner KI verlässlichen Hintergrund. Einen echten Test im Produkt ersetzt er nicht – den machst du am Ende selbst.

## Schritt 1 von 7: Was willst du machen?

- **Du hast eine konkrete Frage:** Nimm das Startpaket für deinen KI-Chat.
- **Du arbeitest direkt im Code:** Gib deinem Coding-Agent zusätzlich die Projektdateien.
- **Du willst selbst nachlesen:** Öffne die Arbeitsgrundlage und danach nur die Themen, die du gerade brauchst.

Du musst nicht jedes Mal das ganze Repository laden.

## Schritt 2 von 7: Startpaket kopieren

Klicke auf der Website auf **„Startpaket kopieren“**. Damit kopierst du die kurze Startanweisung und die fachliche Arbeitsgrundlage zusammen. Du musst nichts einzeln zusammensuchen.

## Schritt 3 von 7: In einen neuen Chat einfügen

Füge das Startpaket als erste Nachricht in deinen KI-Chat ein. Welche KI du nutzt, ist dabei egal. Wenn du später einen neuen Chat anfängst, kopierst du das Paket einfach noch einmal hinein.

## Schritt 4 von 7: Sag klar, worum es geht

Schreib nicht nur: „Ist das barrierefrei?“ Hilfreicher ist:

- Was möchtest du oder eine andere Person erreichen?
- Welche Seite, Funktion oder welcher Ablauf ist gemeint?
- Gibt es Code, Text, einen Entwurf, Screenshot oder Link?
- Soll die KI etwas prüfen, verbessern, umsetzen oder einen Testplan schreiben?

Je konkreter deine Frage ist, desto brauchbarer wird die Antwort.

## Schritt 5 von 7: Frag nach Quellen und Grenzen

Bitte bei wichtigen Regeln um eine direkte Quelle. Die KI soll außerdem klar sagen, was eine feste Anforderung ist, was nur eine Empfehlung ist und was sie nicht praktisch testen konnte.

## Schritt 6 von 7: Arbeitest du direkt im Code?

Dann soll dein Coding-Agent zuerst [SKILL.md](SKILL.md) und [ACCESSIBILITY.md](ACCESSIBILITY.md) lesen. Weitere Dateien lädt er nur, wenn sie für deine Aufgabe wirklich nötig sind. Automatische Testergebnisse mit dem Status `incomplete` sind keine Entwarnung: Diese Punkte müssen noch von einem Menschen geprüft werden.

Ein einfacher Beispielauftrag:

```text
Lies SKILL.md und ACCESSIBILITY.md. Prüfe danach meinen Checkout auf
Barrieren. Erkläre kurz, wen ein Problem trifft und warum. Behebe die Ursache,
teste den vollständigen Ablauf und sage offen, was du nicht prüfen konntest.
```

## Schritt 7 von 7: Im echten Produkt testen

Klingt die Antwort gut? Prima – aber bitte nicht blind übernehmen. Teste die Änderung im echten Ablauf: zum Beispiel mit Tastatur, Vergrößerung und einem kleinen Bildschirm. Je nach Risiko gehören auch Screenreader-Tests und Tests mit Menschen dazu.

Kurz gesagt: KI und automatische Tests helfen dir. Sie können aber nicht allein beweisen, dass wirklich alles barrierefrei oder rechtlich konform ist.
