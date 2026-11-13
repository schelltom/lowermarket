// ============================================================
//  LOWER MARKET — TERMINE
//  Neuen Gig eintragen: einfach einen Block dazuschreiben und
//  die Datei per FTP wieder hochladen. Fertig!
//  - date:  Datum im Format JJJJ-MM-TT
//  - time:  Uhrzeit, z. B. '19:00'
//  - title: Name der Veranstaltung
//  - venue: Ort / Adresse
//  - time, tag, ticketUrl: optional (Uhrzeit, Label statt "Open Air", Vorverkaufs-Link)
//  Die Seite sortiert automatisch nach Datum und markiert
//  vergangene Termine als "Gespielt".
// ============================================================
const gigs = [
  { date: '2026-07-15', time: '19:00', title: 'Sommerserenade Weiden',
    venue: 'Max-Reger-Park, 92637 Weiden i.d.OPf.' },

  { date: '2026-07-25', time: '19:00', title: 'Flugplatzfest — 75 Jahre Segelflug-Club Stiftland e. V.',
    venue: 'Flugplatz, 95633 Tirschenreuth' },

  { date: '2026-07-26', time: '18:00', title: 'Sommerserenade Vohenstrauß',
    venue: 'Stadtpark, 92648 Vohenstrauß' },

  { date: '2026-11-14', time: '20:00', title: '60s Beatnight (Einlass 19:00 Uhr)', tag: 'Konzert',
    venue: 'Max-Reger-Halle, Weiden i.d.OPf.',
    ticketUrl: 'https://okticket.de/index.php?event_id=59978&startReset=ON' },

  { date: '2027-06-22', time: '19:00', title: 'Sommerserenade Moosbach',
    venue: 'Generationenpark Gruberbach Moosbach' },

  // 👇 Neuen Termin hier dazuschreiben (Komma nicht vergessen):
  // { date: '2026-09-12', time: '20:00', title: 'Stadtfest Erbendorf',
  //   venue: 'Marktplatz, 92681 Erbendorf' },
];
