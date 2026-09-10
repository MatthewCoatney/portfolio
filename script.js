const projects = [
  {
    id: 'ebay-lister',
    number: '01',
    eyebrow: 'AI · Commerce · Automation',
    badge: 'Flagship project',
    title: 'AI-assisted eBay Lister',
    thesis: 'Turn a photograph into a confident listing — without turning the seller into a data-entry clerk.',
    description: 'A product-first listing workflow built around the real bottleneck in resale: the cognitive cost of identifying an item, researching it, estimating market value, and translating that knowledge into structured marketplace data. The system uses AI to collapse those steps into a fast, guided workflow so the seller can spend more time sourcing, evaluating, and shipping inventory — the work that actually creates value.',
    tech: ['Python', 'FastAPI', 'AWS', 'AI identification', 'Market pricing', 'eBay API', 'Async workflows'],
    link: 'https://youtu.be/s7hCm8nxoRs',
    linkLabel: 'Watch project demo',
    gradient: 'radial-gradient(circle at 24% 22%, rgba(101,216,255,.33), transparent 34%), radial-gradient(circle at 78% 36%, rgba(159,146,255,.28), transparent 38%), linear-gradient(145deg, #102139, #11152a 58%, #08101c)'
  },
  {
    id: 'project-two',
    number: '02',
    eyebrow: 'Project · Coming next',
    badge: 'In development',
    title: 'Project Two',
    thesis: 'A second case study designed to show not only what was built, but the judgment behind it.',
    description: 'This space is intentionally ready for the next project. The case-study format is designed to communicate the problem, the architectural decision-making, the user experience, and the measurable result — so a hiring manager or client can understand engineering depth without having to decode a wall of implementation detail.',
    tech: ['Problem framing', 'System design', 'UX decisions', 'Architecture', 'Implementation', 'Outcome'],
    link: '#contact',
    linkLabel: 'Project details coming soon',
    gradient: 'radial-gradient(circle at 70% 18%, rgba(121,242,208,.28), transparent 32%), radial-gradient(circle at 24% 70%, rgba(244,200,138,.16), transparent 38%), linear-gradient(145deg, #14252a, #151c2e 62%, #0a1019)'
  }
];

const scroller = document.getElementById('projectScroller');

function cardTemplate(project, cloneIndex) {
  const tech = project.tech.map(item => `<span>${item}</span>`).join('');
  const external = project.link.startsWith('http');
  return `
    <article class="project-card" data-project="${project.id}" data-copy="${cloneIndex}">
      <div class="project-visual" style="--project-gradient:${project.gradient}">
        <div class="visual-top">
          <span class="project-index">PROJECT ${project.number}</span>
          <span class="project-badge">${project.badge}</span>
        </div>

        <div class="interface-mock" aria-hidden="true">
          <div class="mockbar"><i></i><i></i><i></i></div>
          <div class="mockbody">
            <div class="mocknav"><b></b><b></b><b></b><b></b></div>
            <div class="mockmain">
              <div class="mock-title"></div>
              <div class="mock-sub"></div>
              <div class="mock-photo"><span></span></div>
              <div class="mock-stats"><div></div><div></div><div></div></div>
            </div>
          </div>
        </div>

        <div class="visual-caption">
          <strong>${project.id === 'ebay-lister' ? 'From image → market-ready data' : 'Case study framework'}</strong>
          <span>${project.id === 'ebay-lister' ? 'Reduce repetitive research. Preserve human judgment.' : 'Problem → decisions → system → outcome.'}</span>
        </div>
      </div>

      <div class="project-content">
        <div class="project-meta"><span>${project.eyebrow}</span><i></i><span>${project.number} / ${String(projects.length).padStart(2,'0')}</span></div>
        <h3>${project.title}</h3>
        <p class="thesis">${project.thesis}</p>
        <p class="description">${project.description}</p>
        <div class="tech-list">${tech}</div>
        <a class="project-link" href="${project.link}" ${external ? 'target="_blank" rel="noreferrer"' : ''}>${project.linkLabel}<span>↗</span></a>
      </div>
    </article>`;
}

// Three identical sets allow us to reset into the middle set invisibly.
scroller.innerHTML = [0, 1, 2]
  .flatMap(copy => projects.map(project => cardTemplate(project, copy)))
  .join('');

const cards = [...scroller.querySelectorAll('.project-card')];
let resetting = false;

function setInitialPosition() {
  const middleStart = cards[projects.length];
  scroller.scrollTop = middleStart.offsetTop;
}

function keepLooping() {
  if (resetting) return;
  const setHeight = cards[projects.length * 2].offsetTop - cards[projects.length].offsetTop;
  const middleStart = cards[projects.length].offsetTop;
  const middleEnd = middleStart + setHeight;

  if (scroller.scrollTop < middleStart - setHeight * 0.35) {
    resetting = true;
    scroller.scrollTop += setHeight;
    requestAnimationFrame(() => resetting = false);
  } else if (scroller.scrollTop > middleEnd + setHeight * 0.35) {
    resetting = true;
    scroller.scrollTop -= setHeight;
    requestAnimationFrame(() => resetting = false);
  }
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('is-active', entry.isIntersecting && entry.intersectionRatio > 0.55);
  });
}, { root: scroller, threshold: [0.3, 0.55, 0.8] });

cards.forEach(card => observer.observe(card));
scroller.addEventListener('scroll', keepLooping, { passive: true });
window.addEventListener('load', setInitialPosition);
window.addEventListener('resize', setInitialPosition);

document.getElementById('year').textContent = new Date().getFullYear();
