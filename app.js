const STANDARDS = {
  'Data': [
    { id: 'l4-data-analyst',     label: 'Level 4 Data Analyst' },
    { id: 'l3-data-technician',  label: 'Level 3 Data Technician' },
  ],
  'AI & Automation': [
    { id: 'l4-applied-ai',       label: 'Level 4 Applied AI & Automation' },
  ],
  'Digital Marketing': [
    { id: 'l3-digital-marketer', label: 'Level 3 Digital Marketer' },
  ],
  'Cyber Security': [
    { id: 'l3-cyber-security',   label: 'Level 3 Cyber Security Technician' },
  ],
  'Accountancy': [
    { id: 'l3-asst-accountant',  label: 'Level 3 Assistant Accountant' },
    { id: 'l4-prof-accounting',  label: 'Level 4 Professional Accounting Professional' },
  ],
};

let activeCategory = Object.keys(STANDARDS)[0];
let activeId = STANDARDS[activeCategory][0].id;

// ── Nav ──────────────────────────────────────────────────

function buildNav() {
  renderCategoryRow();
  renderStandardRow();
}

function renderCategoryRow() {
  const row = document.getElementById('nav-categories');
  row.innerHTML = '';
  Object.keys(STANDARDS).forEach(group => {
    const btn = document.createElement('button');
    btn.className = 'nav-tab' + (group === activeCategory ? ' active' : '');
    btn.textContent = group;
    btn.addEventListener('click', () => {
      activeCategory = group;
      activeId = STANDARDS[group][0].id;
      renderCategoryRow();
      renderStandardRow();
      renderContent();
    });
    row.appendChild(btn);
  });
}

function renderStandardRow() {
  const row = document.getElementById('nav-standards');
  row.innerHTML = '';
  STANDARDS[activeCategory].forEach(({ id, label }) => {
    const btn = document.createElement('button');
    btn.className = 'nav-tab' + (id === activeId ? ' active' : '');
    btn.textContent = label;
    btn.addEventListener('click', () => {
      activeId = id;
      renderStandardRow();
      renderContent();
    });
    row.appendChild(btn);
  });
}

function setActive(id) {
  activeId = id;
  renderStandardRow();
  renderContent();
}

// ── Content ──────────────────────────────────────────────

function findStandard(id) {
  for (const standards of Object.values(STANDARDS)) {
    const found = standards.find(s => s.id === id);
    if (found) return found;
  }
  return null;
}

function renderContent() {
  const app = document.getElementById('app');

  if (!activeId) {
    app.innerHTML = `
      <div class="welcome">
        <h2>Select an Apprenticeship Standard</h2>
        <p>Choose a standard from the navigation above to begin the Job Role Suitability Checklist for your apprentice.</p>
      </div>`;
    return;
  }

  const standard = findStandard(activeId);
  if (!standard) return;

  const [level, ...nameParts] = standard.label.split(' ');
  const levelLabel = `${level} ${nameParts[0]}`;
  const titleRest = nameParts.slice(1).join(' ');

  if (activeId === 'l4-data-analyst') {
    renderDataAnalyst(app, standard.label);
  } else {
    app.innerHTML = `
      <div class="checklist-header">
        <span class="level-badge">${levelLabel}</span>
        <h2>${standard.label}</h2>
        <p>Checklist for this standard is coming soon.</p>
      </div>`;
  }
}

function renderDataAnalyst(app, title) {
  app.innerHTML = `
    <div class="checklist-header">
      <span class="level-badge">Level 4</span>
      <h2>${title}</h2>
      <p>Employer declaration — confirm the apprentice's role provides sufficient exposure to each area below.</p>
    </div>
    <div id="sections"></div>`;

  const sections = [
    { title: 'Data — coming soon' },
  ];

  const container = document.getElementById('sections');
  sections.forEach(({ title }) => {
    const card = document.createElement('div');
    card.className = 'section-card';
    card.innerHTML = `
      <div class="section-card-header">
        <h3>${title}</h3>
        <span class="section-toggle">+</span>
      </div>
      <div class="section-card-body collapsed">
        <p class="section-placeholder">Criteria for this section will appear here.</p>
      </div>`;

    card.querySelector('.section-card-header').addEventListener('click', () => {
      const body = card.querySelector('.section-card-body');
      const toggle = card.querySelector('.section-toggle');
      const isCollapsed = body.classList.toggle('collapsed');
      toggle.textContent = isCollapsed ? '+' : '−';
    });

    container.appendChild(card);
  });
}

// ── Boot ─────────────────────────────────────────────────

buildNav();
renderContent();
