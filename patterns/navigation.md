# Navigation

## Pattern

- Strukturiere Website-Navigation als benannte `nav`-Region mit einer Liste normaler Links.
- Nutze Buttons für das Ein-/Ausblenden responsiver Bereiche und halte `aria-expanded` synchron. Der Buttonname soll den Zweck verständlich machen.
- Kennzeichne die aktuelle Seite, wenn hilfreich, etwa mit `aria-current="page"` plus sichtbarem Zustand.
- Biete mehrstufige Navigation nur bei realem Bedarf. Ein Disclosure-Modell ist für Websites häufig robuster als `role="menu"`.
- Definiere Öffnen, Schließen, Fokus, Rückkehr und Verhalten außerhalb des Menüs. Hover darf nicht der einzige Zugang sein.
- Erhalte Linkreihenfolge und Inhalt über Viewports. Prüfe bei Zoom, Touch, Tastatur und Screenreader.
- Biete nur wenige Skiplinks zu wirklich nützlichen Zielen an. Kurze Namen wie „Zum Inhalt“ reichen; das Sprungziel muss nach der Aktivierung sichtbar und sinnvoll erreichbar sein.
- Führe Breadcrumbs als eine knapp benannte Navigation, zum Beispiel „Seitenpfad“. Die aktuelle Seite ist kein Link und erhält `aria-current="page"`; rein visuelle Trenner sind für assistive Technologien verborgen.
- Höre den Pfad mit einem Screenreader ab. Wiederhole weder die Rolle „Navigation“ im Namen noch den ganzen Pfad in jedem Linknamen.

## Abgrenzung

ARIA-Menüs bilden Anwendungsmenüs mit spezieller Pfeiltastennavigation ab. Globale Website-Navigation wird dadurch nicht automatisch zugänglicher.

Quellen: [APG Disclosure Navigation Menu](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) und [APG Menu/Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/).
