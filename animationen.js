/*
  Liste aller Animationen. Für eine neue Animation genügt ein weiterer Eintrag hier
  plus ein Ordner unter animationen/<id>/ mit index.html, vorschau.png und schaubild.svg
  (schaubild = gezeichnetes Bild für die Karte auf der Übersichtsseite; fehlt es, wird vorschau.png gezeigt).
  Neueste Einträge bitte oben einfügen. Werkzeuge (art: "werkzeug") erscheinen in einem eigenen Bereich über den Animationen.
*/
window.ANIMATIONEN = [
  {
    id: "stroboskop",
    art: "werkzeug",
    titel: "Stroboskop-Analyse",
    beschreibung: "Bewegung mit dem iPad filmen oder ein Video öffnen, als Stroboskopbild darstellen, Maßstab und Koordinatensystem festlegen, den Körper Bild für Bild markieren und im Zeit-Ort- und Zeit-Geschwindigkeit-Diagramm oder als Bahnkurve auswerten – mit selbst angelegter Gerade oder Parabel.",
    jahrgangsstufe: "7–13",
    themenbereich: "Mechanik",
    niveau: "Werkzeug",
    lernbereich: "Für alle Bewegungen: geradlinig, Fall, Wurf, Kreis",
    stichworte: ["Stroboskop", "Video", "Videoanalyse", "Bewegung", "Zeit-Ort-Diagramm", "Zeit-Geschwindigkeit-Diagramm", "Bahnkurve", "Wurf", "freier Fall", "Messwerte", "CSV"],
    pfad: "animationen/stroboskop/",
    vorschau: "animationen/stroboskop/vorschau.png",
    schaubild: "animationen/stroboskop/schaubild.svg",
    hinzugefuegt: "2026-10-23"
  },
  {
    id: "zentripetalkraft",
    titel: "Die Zentripetalkraft",
    beschreibung: "Geometrische Herleitung von F = m·v²/r = m·ω²·r Schritt für Schritt, Experiment mit Drehteller und Smartphone-Sensor, Messunsicherheit (Mittelwert und Median), Auswertung im ω²- bzw. v²-Diagramm und Übungen mit Multiple Choice, Puzzles und Rechenaufgaben.",
    jahrgangsstufe: "11",
    themenbereich: "Mechanik",
    niveau: "Erarbeitung",
    lernbereich: "Ph11 LB 1: Kreisbewegung",
    stichworte: ["Zentripetalkraft", "Zentripetalbeschleunigung", "Kreisbewegung", "Winkelgeschwindigkeit", "Messunsicherheit", "Median", "Linearisierung", "Quiz"],
    pfad: "animationen/zentripetalkraft/",
    vorschau: "animationen/zentripetalkraft/vorschau.png",
    schaubild: "animationen/zentripetalkraft/schaubild.svg",
    hinzugefuegt: "2026-10-23"
  },
  {
    id: "ueberholvorgang-einfach",
    titel: "Überholen bei konstanter Geschwindigkeit",
    beschreibung: "Einstieg: Zwei Fahrzeuge fahren mit konstanter Geschwindigkeit. Nur Startort und Geschwindigkeit werden eingestellt – wie verändern sich Überholdauer, Überholweg und das Zeit-Ort-Diagramm?",
    jahrgangsstufe: "10",
    themenbereich: "Mechanik",
    niveau: "Einstieg",
    lernbereich: "Ph10 LB 3: Bewegungen und ihre Modellierung",
    stichworte: ["Zeit-Ort-Diagramm", "konstante Geschwindigkeit", "gleichförmige Bewegung", "Überholen", "Sicherheitsabstand"],
    pfad: "animationen/ueberholvorgang/?modus=einfach",
    vorschau: "animationen/ueberholvorgang/vorschau-einfach.png",
    schaubild: "animationen/ueberholvorgang/schaubild-einfach.svg",
    hinzugefuegt: "2026-10-23"
  },
  {
    id: "ueberholvorgang",
    titel: "Der Überholvorgang",
    beschreibung: "Ein Pkw überholt ein langsameres Fahrzeug – mit Draufsicht, gemeinsamem Zeit-Ort- und Zeit-Geschwindigkeit-Diagramm, einstellbarem Sicherheitsabstand und optionalem Gegenverkehr.",
    jahrgangsstufe: "10",
    themenbereich: "Mechanik",
    niveau: "Vertiefung",
    lernbereich: "Ph10 LB 3: Bewegungen und ihre Modellierung",
    stichworte: ["Zeit-Ort-Diagramm", "Zeit-Geschwindigkeit-Diagramm", "Beschleunigung", "Straßenverkehr", "Sicherheitsabstand"],
    pfad: "animationen/ueberholvorgang/",
    vorschau: "animationen/ueberholvorgang/vorschau.png",
    schaubild: "animationen/ueberholvorgang/schaubild.svg",
    hinzugefuegt: "2026-10-23"
  }
];
