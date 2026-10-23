# Hinweise für Claude: Physik-Animationen

Sammlung interaktiver Physik-Animationen für Schülerinnen und Schüler (Gymnasium, LehrplanPLUS Bayern).
Die Seite läuft über GitHub Pages aus dem Branch `main` (Wurzelverzeichnis). Jeder Push auf `main` veröffentlicht.

## Eine neue Animation hinzufügen
1. Ordner `animationen/<id>/` anlegen (`id` klein, ohne Umlaute, Bindestriche statt Leerzeichen).
2. `animationen/<id>/index.html`: eine eigenständige Datei mit Inline-CSS und -JS, keine CDNs, keine Webfonts
   (Schulnetze blockieren oft externe Quellen). Oben ein Link `← Alle Animationen` auf `../../index.html`.
3. Gleiche Gestaltung wie `animationen/ueberholvorgang/index.html` übernehmen: CSS-Variablen in `:root`,
   Dunkelmodus per `prefers-color-scheme`, Einstellungen links / Ansicht rechts, unter 900 px einspaltig.
4. `animationen/<id>/vorschau.png` (1280 × 720) per Playwright-Screenshot erzeugen.
5. Eintrag **oben** in `animationen.js` ergänzen (Felder wie beim vorhandenen Eintrag) und Tabelle in `README.md` ergänzen.
6. Vor dem Push mit Playwright testen: keine Konsolenfehler, Desktop (1400 px) und Handy (390 px) ohne horizontales Scrollen,
   physikalische Werte stichprobenartig von Hand nachrechnen.
7. Commit auf `main` und pushen. Eine Kopie der geänderten Dateien zusätzlich in den Ordner
   „Physik-Animationen“ auf dem Rechner der Lehrkraft legen, wenn der Rechner verbunden ist.

## Fachliche Konventionen
- Deutsche Fachbegriffe des LehrplanPLUS: „Zeit-Ort-Diagramm“, „Zeit-Geschwindigkeit-Diagramm“, „Bewegungsfunktion“.
- Ort mit `x`, Achsenbeschriftung „t in s“, „x in m“; Dezimalkomma.
- Die Lehrkraft unterrichtet die Jahrgangsstufen 8–13; die Lehrpläne liegen im Ordner „Physik-Lehrplan“.
