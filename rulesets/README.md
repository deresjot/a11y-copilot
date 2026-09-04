# Ruleset-Profile

`catalog.json` beschreibt fachliche Profile und ihre Werkzeugadapter. Die Datei ist Konfiguration und Dokumentation, keine Prüfengine.

Ein konsumierendes Projekt wählt eine Profil-ID, löst den passenden Adapter mit seiner installierten Engine auf und speichert die tatsächliche Engine-Version sowie Regel-ID-Liste beim Ergebnis. Lokale Ergänzungen dürfen neue Profile oder Adapter hinzufügen, aber bestehende Profil-IDs nicht mit anderer Bedeutung überschreiben.

Neue Normfassungen werden parallel ergänzt. Historische Profile und Ergebnisse bleiben unverändert, damit frühere Aussagen reproduzierbar bleiben.

Mappings auf EN 301 549 benennen die beim Ergebnis verwendete Fassung und den Bewertungszeitpunkt. Ein Werkzeugtag oder die Veröffentlichung einer neuen Normfassung belegt weder deren Harmonisierung im EU-Amtsblatt noch ihre rechtliche oder vertragliche Verbindlichkeit im konkreten Scope. Für Non-Web-Dokumente und Software kann WCAG2ICT die Interpretation informativ unterstützen, ersetzt aber kein normatives Profil.
