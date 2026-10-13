const copyButton = document.querySelector('#copy-email');
copyButton?.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('vemulathusharreddy@gmail.com');
    status.textContent = 'Email copied.';
  } catch {
    status.textContent = 'vemulathusharreddy@gmail.com';
  }
});

const contactDialog = document.querySelector('#contact-dialog');
document.querySelectorAll('[data-contact-open]').forEach(link => {
  link.addEventListener('click', event => {
    if (!contactDialog?.showModal) return;
    event.preventDefault();
    contactDialog.showModal();
  });
});
contactDialog?.querySelector('.dialog-close')?.addEventListener('click', () => contactDialog.close());
contactDialog?.addEventListener('click', event => {
  const rect = contactDialog.getBoundingClientRect();
  if (event.target === contactDialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) contactDialog.close();
});

// Select a chapter, drive to its milestone, then reveal its summary.
const chapters = [
 ['CURRENT CHAPTER · ARIZONA STATE UNIVERSITY','Making everyday workflows more dependable.','Automating bug intake and handoffs with Python, Airtable, and Jira, and building Playwright checks for website quality, accessibility, and responsive layouts.'],
 ['SIMCOACH · FOUNDING PROJECT','Turning interview practice into a live experience.','Built job-application workflows and a live AI mock-interview engine, including real-time audio/video, model routing, and shared application workspaces.'],
 ['MYWANDERLUST.IN · FULL STACK DEVELOPMENT','Connecting bookings, operations, and conversations.','Developed a Django and MySQL property-management platform, with asynchronous WhatsApp notifications using Celery and RabbitMQ and reliability improvements through logging and retries.'],
 ['INVISIBLE AI · FREELANCE','Helping conversational AI understand context.','Trained and evaluated models on Telugu conversational data, reviewing linguistic accuracy, cultural relevance, and safety with fellow reviewers.'],
 ['MIDAS LAB · IIIT DELHI','Building better foundations for language research.','Worked on Tamil datasets, annotation guidelines, BLEU and agreement evaluation, and Python pipelines for scraping, CoNLL-U conversion, and Indic-text validation.']
];
const stage = document.querySelector('.map-stage');
const road = document.querySelector('.map-road path');
const car = document.querySelector('.journey-car');
const chapterPanel = document.querySelector('.chapter-detail');
const chapterButtons = [...document.querySelectorAll('[data-chapter]')];
let driveFrame, position = 0;
function placeCar(progress) {
 if (!road || !car || !stage) return;
 const point = road.getPointAtLength(road.getTotalLength() * progress);
 car.style.left = `${point.x / 1000 * stage.clientWidth}px`;
 car.style.top = `${point.y}px`;
}
chapterButtons.forEach(button => button.addEventListener('click', () => {
 const index = Number(button.dataset.chapter), target = index / 4, start = position;
 cancelAnimationFrame(driveFrame);
 chapterButtons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
 const show = () => {
  chapterPanel.querySelector('.eyebrow').textContent = chapters[index][0];
  chapterPanel.querySelector('h3').textContent = chapters[index][1];
  chapterPanel.querySelector('p').textContent = chapters[index][2];
  chapterPanel.removeAttribute('aria-busy');
 };
 if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  position = target; placeCar(position); show(); return;
 }
 chapterPanel.setAttribute('aria-busy','true');
 const begun = performance.now(), duration = 650 + Math.abs(target-start)*600;
 const move = now => {
  const t = Math.min((now-begun)/duration,1), ease = t*t*(3-2*t);
  position = start + (target-start)*ease; placeCar(position);
  if (t < 1) driveFrame = requestAnimationFrame(move); else show();
 };
 driveFrame = requestAnimationFrame(move);
}));
if (stage) { placeCar(0); new ResizeObserver(() => placeCar(position)).observe(stage); }
