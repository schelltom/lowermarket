# Lower Market — Website-Anleitung

## Was ist das hier?

Die komplette neue Bandseite als statische Dateien — kein WordPress, keine Datenbank,
nichts, was gehackt werden oder kaputt-updaten kann.

```
website/
├── index.html        ← die ganze Seite (eine Datei)
├── termine.js        ← EURE TERMINE — die einzige Datei, die ihr anfasst!
├── css/style.css     ← Design
├── js/main.js        ← Technik (Termine sortieren, Galerie, Menü)
├── fonts/            ← Schrift (liegt lokal → DSGVO-freundlich, kein Google)
├── img/              ← alle Fotos
└── favicon.svg       ← Browser-Tab-Icon
```

## Hochladen (einmalig)

Mit FileZilla (o. ä.) auf den IONOS-Webspace verbinden und **den Inhalt** dieses
Ordners in das Web-Verzeichnis der Domain lower-market.de hochladen
(dorthin, wo jetzt die alte Seite liegt — vorher Backup der alten Seite ziehen!).

## Neuen Termin eintragen (das macht ihr regelmäßig)

1. `termine.js` per FTP öffnen (oder lokal ändern und hochladen)
2. Einen Block dazuschreiben — Muster steht als Kommentar in der Datei:
   ```js
   { date: '2026-09-12', time: '20:00', title: 'Stadtfest Erbendorf',
     venue: 'Marktplatz, 92681 Erbendorf' },
   ```
3. Speichern / hochladen. Fertig.

Die Seite sortiert automatisch nach Datum, markiert vergangene Gigs als
„Gespielt ✓" und aktualisiert den „Nächster Gig“-Hinweis ganz oben von selbst.
**Alte Termine müsst ihr nicht löschen.**

Typische Stolperfalle: das Komma am Ende jedes Blocks nicht vergessen und
Anführungszeichen `'...'` geschlossen lassen. Wenn die Termine-Liste nach einer
Änderung leer bleibt → meist ein Tippfehler in der zuletzt geänderten Zeile.

## Vorschau ohne Hochladen

Doppelklick auf `index.html` — die Seite läuft komplett lokal im Browser.

## Bilder tauschen

Neues Foto als JPG (max. ~1200 px breit) in `img/` legen und in `index.html`
den Dateinamen an der passenden Stelle ändern (suchen nach `img/g1.jpg` usw.).

## Vor dem Livegang noch offen

- [ ] **Instagram**: Sobald der Account existiert, in `index.html` alle
      `https://www.instagram.com/`-Links durch die echte Profil-URL ersetzen
      (3 Stellen: Navigation, mobiles Menü, Kontakt).
- [x] **Datenschutzerklärung**: Bereits entschlackt — die Abschnitte zu Google
      Web Fonts, Font Awesome, Wordfence und Cookies wurden entfernt (die neue
      Seite nutzt nichts davon; die Schrift liegt lokal). IONOS-Hosting,
      Server-Logs, E-Mail-Kontakt und Facebook sind geblieben. Bei Gelegenheit
      trotzdem einmal von einem Profi bzw. Generator (e-recht24.de) gegenprüfen lassen.
- [ ] **Facebook-Foto**: Optional ein Lieblingsbild von der Facebook-Seite
      zusätzlich in die Galerie.

## Kontakt zum Ersteller

Website erstellt durch Thomas Schell (tom@lower-market.de) — steht so auch im Impressum.
