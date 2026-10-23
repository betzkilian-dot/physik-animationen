/*
  Liste aller Animationen. Für eine neue Animation genügt ein weiterer Eintrag hier
  plus ein Ordner unter animationen/<id>/ mit index.html und vorschau.png.
  Neueste Einträge bitte oben einfügen.
*/
window.ANIMATIONEN = [
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
    hinzugefuegt: "2026-10-23"
  }
];
