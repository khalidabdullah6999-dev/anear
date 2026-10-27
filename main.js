// English translations. Indonesian text lives in index.html and is restored from there.
const EN = {
  'nav.about': 'About Us',
  'nav.services': 'Services',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'hero.eyebrow': 'Building and Civil Contractor · Kendari, Southeast Sulawesi',
  'hero.title': 'Building with Quality, On Time, and On Budget.',
  'hero.lead': 'PT. Segi Tiga Tambora is a construction company delivering buildings and civil infrastructure for government, state-owned, and private clients across Indonesia, and is expanding internationally.',
  'hero.cta': 'Discuss Your Project',
  'hero.cta2': 'Our Services',
  's1.t': 'Quality', 's1.d': 'Work that meets specifications and applicable standards.',
  's2.t': 'Time', 's2.d': 'Projects handed over on schedule.',
  's3.t': 'Cost', 's3.d': 'Competitive pricing with tight cost control.',
  'about.eyebrow': 'About Us',
  'about.title': 'Three sides we safeguard on every project',
  'about.p1': 'PT. Segi Tiga Tambora is a licensed construction company (BUJK) based in Kendari, Southeast Sulawesi, and a member of GAPEKSINDO. The name "Segi Tiga" (triangle) reflects the three things we always safeguard: quality, time, and cost.',
  'about.p2': 'We build buildings and civil infrastructure, from roads and bridges to waterways and drinking water networks.',
  'about.vision': 'Vision',
  'about.vision.d': 'To become a leading construction company, successful in Indonesia and abroad.',
  'about.mission': 'Mission',
  'about.m1': 'Deliver quality, safe, and timely buildings and infrastructure.',
  'about.m2': 'Put occupational health and safety first.',
  'about.m3': 'Uphold clean and transparent governance.',
  'about.values': 'Core Values',
  'v1': 'Integrity', 'v2': 'Safety', 'v3': 'Quality', 'v4': 'Timeliness',
  'svc.eyebrow': 'Services',
  'svc.title': 'What we build',
  'svc1.t': 'Building Construction', 'svc1.d': 'Housing, lodging, sports and leisure facilities, offices, and public buildings.',
  'svc2.t': 'Roads and Bridges', 'svc2.d': 'Construction and upgrading of roads, local streets, and bridges.',
  'svc3.t': 'Water Infrastructure', 'svc3.d': 'Channels, drainage, irrigation, and other water structures.',
  'svc4.t': 'Drinking Water Networks', 'svc4.d': 'Drinking water pipeline construction for communities.',
  'svc5.t': 'Design and Build', 'svc5.d': 'One contract from design to handover.',
  'svc6.t': 'Renovation and Maintenance', 'svc6.d': 'Repairs, extensions, and building upkeep.',
  'prj.eyebrow': 'Projects',
  'prj.title': 'Our experience',
  'prj.sample': 'Sample',
  'prj1.t': 'Building Construction', 'prj2.t': 'Road Improvement', 'prj3.t': 'Channels and Drainage',
  'ct.eyebrow': 'Contact',
  'ct.title': 'Planning a project?',
  'ct.lead': 'Contact us for a consultation and quotation.',
  'ct.addr': 'Address',
  'ct.phone': 'Phone / WhatsApp',
  'ct.hours': 'Office hours',
  'ct.hours.d': 'Monday to Friday, 08:00 to 17:00 (WITA)',
  'f.name': 'Name', 'f.company': 'Company / Agency', 'f.contact': 'Email or phone',
  'f.type': 'Project type', 'f.msg': 'Message', 'f.send': 'Send Message',
  'ft.member': 'GAPEKSINDO member · Kendari, Southeast Sulawesi',
};

const nodes = document.querySelectorAll('[data-i18n]');
const ID = new Map([...nodes].map(n => [n, n.textContent]));
const langBtn = document.getElementById('lang');

function setLang(lang) {
  nodes.forEach(n => {
    n.textContent = lang === 'en' ? (EN[n.dataset.i18n] ?? ID.get(n)) : ID.get(n);
  });
  document.documentElement.lang = lang;
  langBtn.textContent = lang === 'en' ? 'ID' : 'EN';
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

langBtn.addEventListener('click', () => setLang(document.documentElement.lang === 'en' ? 'id' : 'en'));
try { if (localStorage.getItem('lang') === 'en') setLang('en'); } catch (e) {}

// Mobile menu
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') { nav.classList.remove('open'); menu.setAttribute('aria-expanded', false); }
});

// Contact form: opens the visitor's email app with the message filled in (no server needed).
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = `Permintaan proyek: ${f.get('jenis')} (${f.get('nama')})`;
  const body = [
    `Nama: ${f.get('nama')}`,
    `Perusahaan: ${f.get('perusahaan') || '-'}`,
    `Kontak: ${f.get('kontak')}`,
    `Jenis proyek: ${f.get('jenis')}`,
    '',
    f.get('pesan'),
  ].join('\n');
  location.href = `mailto:segitigatamborapt@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById('year').textContent = new Date().getFullYear();
