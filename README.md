# Physik-Animationen

Interaktive Physik-Animationen für den Unterricht, veröffentlicht über GitHub Pages:
**https://betzkilian-dot.github.io/physik-animationen/**

## Aufbau

```
index.html                     Startseite mit Kacheln, Suche und Filter
animationen.js                 Liste aller Animationen (daraus entstehen die Kacheln)
animationen/<id>/index.html    eine Animation (eigenständige HTML-Datei, ohne externe Abhängigkeiten)
animationen/<id>/schaubild.svg gezeichnetes Schaubild für die Kachel (16:9, mit Dunkelmodus)
animationen/<id>/vorschau.png  Screenshot (1280 × 720), Ersatz falls kein Schaubild da ist
```

## Neue Animation hinzufügen

Am einfachsten: In Claude beschreiben, was die Animation zeigen soll. Claude legt den Ordner an,
trägt sie in `animationen.js` ein und speichert die Änderung im Repository. GitHub Pages
aktualisiert die Seite danach automatisch (dauert etwa eine Minute).

## Animationen

| Animation | Jgst. | Lernbereich |
|---|---|---|
| [Die Zentripetalkraft](animationen/zentripetalkraft/) (Herleitung, Experiment, Übungen) | 11 | Ph11 LB 1: Kreisbewegung |
| [Überholen bei konstanter Geschwindigkeit](animationen/ueberholvorgang/?modus=einfach) (Einstieg) | 10 | Ph10 LB 3: Bewegungen und ihre Modellierung |
| [Der Überholvorgang](animationen/ueberholvorgang/) (Vertiefung) | 10 | Ph10 LB 3: Bewegungen und ihre Modellierung |

## Funktionen für den Unterricht

- **Link teilen:** öffnet die Animation mit genau den eingestellten Werten (die Werte stehen hinter dem `#` in der Adresse) – z. B. für Aufgaben in Moodle oder Teams.
- **Vorhersage-Modus:** Ergebnisse sind verdeckt, bis die Schüler auf „Aufdecken“ tippen.
- **iPad:** große Regler mit −/+-Tasten; über Teilen → „Zum Home-Bildschirm“ starten die Animationen wie eine App im Vollbild.

### Zusätze für „Die Zentripetalkraft“

- `alles=1` – alle Herleitungsschritte sofort freigeschaltet (z. B. zum Vorführen).
- `loesungen=0` – Tipps und Lösungswege der Rechenaufgaben erst nach dem ersten Prüfen (für Hausaufgaben).
- Beispiel: `animationen/zentripetalkraft/#tab=aufgaben&teil=calc&loesungen=0`
- Eigene Messungen: phyphox-Export (CSV oder ZIP) im Reiter „Experiment“ laden oder Werte von Hand eintragen.
