# Hinweise für Claude: Physik-Animationen

Sammlung interaktiver Physik-Animationen für Schülerinnen und Schüler (Gymnasium, LehrplanPLUS Bayern).
Die Seite läuft über GitHub Pages aus dem Branch `main` (Wurzelverzeichnis). Jeder Push auf `main` veröffentlicht.

## Eine neue Animation hinzufügen
1. Ordner `animationen/<id>/` anlegen (`id` klein, ohne Umlaute, Bindestriche statt Leerzeichen).
2. `animationen/<id>/index.html`: eine eigenständige Datei mit Inline-CSS und -JS, keine CDNs, keine Webfonts
   (Schulnetze blockieren oft externe Quellen). Oben ein Link `← Alle Animationen` auf `../../index.html`.
3. Gleiche Gestaltung wie `animationen/ueberholvorgang/index.html` übernehmen: CSS-Variablen in `:root`,
   Dunkelmodus per `prefers-color-scheme`, Einstellungen links / Ansicht rechts, unter 900 px einspaltig.
   **Die meisten Schüler nutzen iPads, überwiegend im Querformat.** Pflicht: Regler mit −/+-Tasten (≥ 44 px),
   Eingabefelder `type="text" inputmode="decimal"` mit 16 px Schrift, Diagramme mit `touch-action: pan-y`
   (Antippen/waagrecht wischen = Zeit wählen), Animation bleibt beim Scrollen sichtbar (sticky),
   Kopf mit „Link teilen“ (Zustand im `#`-Anker) und „Vollbild“, Vorhersage-Modus wo Ergebnisse berechnet werden,
   Meta-Tags/Manifest/Icons wie in der Überhol-Animation.
   Varianten einer Animation (z. B. einfachere Version) als Parameter `?modus=…` in derselben Datei statt als Kopie.
4. `animationen/<id>/vorschau.png` (1280 × 720) per Playwright-Screenshot erzeugen.
   Zusätzlich `animationen/<id>/schaubild.svg` (viewBox 640 × 360) zeichnen: kleines Schaubild mit Szene + Mini-Diagramm,
   flach in den Farben der Animation, Farben als CSS-Variablen mit Dunkelmodus (`prefers-color-scheme`) im SVG.
   Es ersetzt den Screenshot auf der Übersichtsseite (Feld `schaubild` in `animationen.js`); Vorlagen: vorhandene schaubild*.svg.
5. Eintrag **oben** in `animationen.js` ergänzen (Felder wie beim vorhandenen Eintrag) und Tabelle in `README.md` ergänzen.
6. Vor dem Push mit Playwright testen: keine Konsolenfehler, iPad quer (1180 × 740, hasTouch) und hochkant (820 × 1180),
   Desktop (1400 px) und Handy (390 px) ohne horizontales Scrollen, Touch-Bedienung (tap) prüfen,
   physikalische Werte stichprobenartig von Hand nachrechnen.
7. Commit auf `main` und pushen. Eine Kopie der geänderten Dateien zusätzlich in den Ordner
   „Physik-Animationen“ auf dem Rechner der Lehrkraft legen, wenn der Rechner verbunden ist.

## Werkzeuge
Allgemeine Werkzeuge (z. B. `animationen/stroboskop/`, Videoanalyse) bekommen in `animationen.js` das Feld `art: "werkzeug"`
und erscheinen auf der Übersichtsseite in einem eigenen Bereich über den Animationen (nicht nach Jahrgangsstufe gefiltert).
Testvideo für die Stroboskop-Analyse: per Python/OpenCV einen Wurf mit bekannten Werten erzeugen und als VP9-WebM kodieren
(Playwright-Chromium spielt kein H.264), dann g ≈ 9,81 m/s² und v_x prüfen.

## Fachliche Konventionen
- Deutsche Fachbegriffe des LehrplanPLUS: „Zeit-Ort-Diagramm“, „Zeit-Geschwindigkeit-Diagramm“, „Bewegungsfunktion“.
- Ort mit `x`, Achsenbeschriftung „t in s“, „x in m“; Dezimalkomma.
- Die Lehrkraft unterrichtet die Jahrgangsstufen 8–13; die Lehrpläne liegen im Ordner „Physik-Lehrplan“.
