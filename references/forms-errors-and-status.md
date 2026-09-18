# Formulare, Fehler und Status

## Beschriftung und Hilfe

Verknüpfe sichtbare Labels über `for`/`id` oder native Verschachtelung. `aria-labelledby` kann komplexe Benennungen ergänzen. `aria-describedby` verbindet zusätzliche Hinweise, ist aber kein Ersatz für die Beschriftung. Prüfe Reihenfolge und Länge der berechneten Beschreibung.

Frage nur Angaben ab, die für den konkreten Zweck wirklich gebraucht werden. Kennzeichne erforderliche Felder im sichtbaren Text, formuliere kurze Hinweise direkt am Feld und vermeide Zeitlimits, sofern sie nicht zwingend notwendig sind.

Gruppiere zusammengehörige Optionen bevorzugt mit `fieldset` und `legend`. Wenn das im konkreten UI technisch problematisch ist, muss eine alternative, getestete Beziehung dieselbe Orientierung liefern.

## Validierung

Validiere zum erwartbaren Zeitpunkt. Zu frühe Fehlermeldungen können beim Tippen stören. Nach dem Absenden:

- Fehler textlich und feldbezogen darstellen;
- Problem und, wenn bekannt, Korrektur nennen;
- gültige Werte erhalten;
- Fehlermeldung dauerhaft in der Nähe des Felds anzeigen und programmatisch über `aria-describedby` oder `aria-errormessage` zuordnen;
- `aria-invalid` nur für den aktuellen Fehlerzustand setzen;
- bei einem kurzen Formular den Fokus nach dem Absenden auf das erste fehlerhafte Feld setzen;
- Fehlerübersicht bei langen oder komplexen Formularen erwägen;
- Fokusstrategie auf Länge und Ablauf abstimmen.

Native Browservalidierung ist nützlich, aber Darstellung, Sprache, Fokus und Konsistenz variieren. Eigene Validierung muss deren Semantik und Verhalten nicht blind nachbauen, sondern im Zielkontext robust getestet werden.

Clientseitige Prüfung verbessert die Rückmeldung, ersetzt aber nie dieselben Prüfungen auf dem Server. Nach einer Korrektur sollen eingegebene Werte erhalten bleiben. Eine erfolgreiche Übermittlung braucht eine verständliche Bestätigung.

In mehrstufigen Prozessen sollen bereits bereitgestellte Informationen nicht ohne Grund erneut eingegeben werden müssen. Automatisches Einsetzen oder eine Auswahl vorhandener Werte kann passen. Prüfe außerdem bei rechtlichen, finanziellen und datenverändernden Vorgängen, ob Eingaben umkehrbar, vor dem Abschluss prüfbar oder ausdrücklich bestätigbar sind.

## Statusmeldungen und Live-Regionen

Nutze `role="status"`/polite für nicht dringliche Ergebnisse und `role="alert"`/assertive nur für zeitkritische Meldungen. Bereits beim Laden vorhandener statischer Inhalt wird durch eine Live-Rolle nicht in jeder Kombination automatisch angekündigt. Live-Container früh anlegen und Text aktualisieren ist oft robuster.

Keine Live-Region für jede Tastenbewegung ergänzen. Viele Widgets vermitteln aktive Option und Zustand bereits über Fokus/ARIA. Vermeide gleichzeitigen Fokuswechsel und doppelte Live-Ansage.

## Authentifizierung und sensible Vorgänge

Erlaube Einfügen, Passwortmanager und verfügbare Plattform-Autovervollständigung. Plane Timeouts, Wiederanmeldung, Wiederherstellung und Mehrfaktorabläufe zugänglich. Bei rechtlichen oder finanziellen Bestätigungen sind Fehlervermeidung und Rücknahme besonders relevant; prüfe den exakten normativen Scope.
