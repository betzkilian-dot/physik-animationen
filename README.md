# Physik-Animationen

Interaktive Physik-Animationen für den Unterricht, veröffentlicht über GitHub Pages:
**https://betzkilian-dot.github.io/physik-animationen/**

## Aufbau

```
index.html                     Startseite mit Kacheln, Suche und Filter
animationen.js                 Liste aller Animationen (daraus entstehen die Kacheln)
animationen/<id>/index.html    eine Animation (eigenständige HTML-Datei, ohne externe Abhängigkeiten)
animationen/<id>/vorschau.png  Vorschaubild für die Kachel (1280 × 720)
```

## Neue Animation hinzufügen

Am einfachsten: In Claude beschreiben, was die Animation zeigen soll. Claude legt den Ordner an,
trägt sie in `animationen.js` ein und speichert die Änderung im Repository. GitHub Pages
aktualisiert die Seite danach automatisch (dauert etwa eine Minute).

## Animationen

| Animation | Jgst. | Lernbereich |
|---|---|---|
| [Der Überholvorgang](animationen/ueberholvorgang/) | 10 | Ph10 LB 3: Bewegungen und ihre Modellierung |
