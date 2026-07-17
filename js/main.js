// Die Termine kommen aus der Datei termine.js (wird vor diesem Skript geladen).

const MONTHS = ['JAN','FEB','MÄR','APR','MAI','JUN','JUL','AUG','SEP','OKT','NOV','DEZ'];
const WD = ['So','Mo','Di','Mi','Do','Fr','Sa'];
const today = new Date(); today.setHours(0,0,0,0);

function renderGigs() {
  const list = document.getElementById('gigList');
  list.innerHTML = '';
  gigs
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date))
    .forEach(g => {
      const d = new Date(g.date + 'T00:00:00');
      const past = d < today;
      const el = document.createElement('article');
      el.className = 'gig' + (past ? ' past' : '');
      el.innerHTML =
        '<div class="gig-date"><span class="day">' + String(d.getDate()).padStart(2, '0') + '</span>' +
        '<span class="mon">' + MONTHS[d.getMonth()] + '</span></div>' +
        '<div class="gig-info"><h3></h3><p></p></div>' +
        '<div class="gig-meta"><span class="chip' + (past ? ' muted' : '') + '">' + (past ? 'Gespielt ✓' : 'Open Air') + '</span>' +
        '<span class="gig-time">' + WD[d.getDay()] + ' · ' + g.time + ' Uhr</span></div>';
      el.querySelector('h3').textContent = g.title;
      el.querySelector('.gig-info p').textContent = g.venue;
      list.appendChild(el);
    });
}
renderGigs();

// --- "Nächster Gig"-Hinweis im Hero automatisch aus termine.js ---
(function () {
  const chip = document.getElementById('nextGig');
  if (!chip) return;
  const next = gigs
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date))
    .find(g => new Date(g.date + 'T00:00:00') >= today);
  if (!next) return; // kein kommender Termin -> Chip bleibt ausgeblendet
  const d = new Date(next.date + 'T00:00:00');
  const MONTHS_LONG = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  document.getElementById('nextGigText').textContent =
    'Nächster Gig: ' + WD[d.getDay()] + ', ' + d.getDate() + '. ' + MONTHS_LONG[d.getMonth()] + ' — ' + next.title;
  chip.hidden = false;
})();

// --- Galerie-Lightbox ---
const lightbox = document.getElementById('lightbox');
const lbImg = lightbox.querySelector('img');
document.querySelectorAll('.gallery button').forEach(btn => {
  btn.addEventListener('click', () => {
    lbImg.src = btn.querySelector('img').src;
    lightbox.showModal();
  });
});
lightbox.addEventListener('click', () => lightbox.close());

// --- Ticker: Inhalt für Endlos-Schleife verdoppeln ---
const track = document.getElementById('tickerTrack');
track.innerHTML += track.innerHTML;

// --- Mobiles Menü ---
const burger = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}));

// --- Impressum / Datenschutz ein- und ausblenden ---
document.querySelectorAll('[data-legal]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.getElementById(link.dataset.legal);
    document.querySelectorAll('.legal').forEach(s => { if (s !== target) s.hidden = true; });
    target.hidden = false;
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
document.querySelectorAll('[data-close-legal]').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.legal').hidden = true;
    document.querySelector('footer').scrollIntoView();
  });
});

// --- Scrollspy ---
const navLinks = document.querySelectorAll('.nav-links a');
const sections = ['termine', 'band', 'galerie', 'presse', 'kontakt'].map(id => document.getElementById(id));
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => spy.observe(s));
