# Navigation

## Pattern

- Strukturiere Website-Navigation als benannte `nav`-Region mit einer Liste normaler Links.
- Nutze Buttons für das Ein-/Ausblenden responsiver Bereiche und halte `aria-expanded` synchron. Der Buttonname soll den Zweck verständlich machen.
- Kennzeichne die aktuelle Seite, wenn hilfreich, etwa mit `aria-current="page"` plus sichtbarem Zustand.
- Biete mehrstufige Navigation nur bei realem Bedarf. Ein Disclosure-Modell ist für Websites häufig robuster als `role="menu"`.
- Definiere Öffnen, Schließen, Fokus, Rückkehr und Verhalten außerhalb des Menüs. Hover darf nicht der einzige Zugang sein.
- Erhalte Linkreihenfolge und Inhalt über Viewports. Prüfe bei Zoom, Touch, Tastatur und Screenreader.

## Abgrenzung

ARIA-Menüs bilden Anwendungsmenüs mit spezieller Pfeiltastennavigation ab. Globale Website-Navigation wird dadurch nicht automatisch zugänglicher. Breadcrumbs sind eine eigene benannte Navigation aus Links; dekorative Trenner gehören nicht in zugängliche Namen.

Quellen: [APG Disclosure Navigation Menu](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) und [APG Menu/Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/).
