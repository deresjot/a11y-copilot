# Formulare, Fehler und Status

## Beschriftung und Hilfe

Verknüpfe sichtbare Labels über `for`/`id` oder native Verschachtelung. `aria-labelledby` kann komplexe Benennungen ergänzen. `aria-describedby` verbindet zusätzliche Hinweise, ist aber kein Ersatz für die Beschriftung. Prüfe Reihenfolge und Länge der berechneten Beschreibung.

Gruppiere zusammengehörige Optionen bevorzugt mit `fieldset` und `legend`. Wenn das im konkreten UI technisch problematisch ist, muss eine alternative, getestete Beziehung dieselbe Orientierung liefern.

## Validierung

Validiere zum erwartbaren Zeitpunkt. Zu frühe Fehlermeldungen können beim Tippen stören. Nach dem Absenden:

- Fehler textlich und feldbezogen darstellen;
- Problem und, wenn bekannt, Korrektur nennen;
- gültige Werte erhalten;
- Fehlerübersicht bei langen Formularen erwägen;
- `aria-invalid` und Beschreibung aktualisieren;
- Fokusstrategie auf Länge und Ablauf abstimmen.

Native Browservalidierung ist nützlich, aber Darstellung, Sprache, Fokus und Konsistenz variieren. Eigene Validierung muss deren Semantik und Verhalten nicht blind nachbauen, sondern im Zielkontext robust getestet werden.

In mehrstufigen Prozessen sollen bereits bereitgestellte Informationen nicht ohne Grund erneut eingegeben werden müssen. Automatisches Einsetzen oder eine Auswahl vorhandener Werte kann passen. Prüfe außerdem bei rechtlichen, finanziellen und datenverändernden Vorgängen, ob Eingaben umkehrbar, vor dem Abschluss prüfbar oder ausdrücklich bestätigbar sind.

## Statusmeldungen und Live-Regionen

Nutze `role="status"`/polite für nicht dringliche Ergebnisse und `role="alert"`/assertive nur für zeitkritische Meldungen. Bereits beim Laden vorhandener statischer Inhalt wird durch eine Live-Rolle nicht in jeder Kombination automatisch angekündigt. Live-Container früh anlegen und Text aktualisieren ist oft robuster.

Keine Live-Region für jede Tastenbewegung ergänzen. Viele Widgets vermitteln aktive Option und Zustand bereits über Fokus/ARIA. Vermeide gleichzeitigen Fokuswechsel und doppelte Live-Ansage.

## Authentifizierung und sensible Vorgänge

Erlaube Einfügen, Passwortmanager und verfügbare Plattform-Autovervollständigung. Plane Timeouts, Wiederanmeldung, Wiederherstellung und Mehrfaktorabläufe zugänglich. Bei rechtlichen oder finanziellen Bestätigungen sind Fehlervermeidung und Rücknahme besonders relevant; prüfe den exakten normativen Scope.
