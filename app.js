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

let activeId = null;

// ── Nav ──────────────────────────────────────────────────

function buildNav() {
  const nav = document.getElementById('main-nav');

  Object.entries(STANDARDS).forEach(([group, standards]) => {
    const groupEl = document.createElement('div');
    groupEl.className = 'nav-group';

    const btn = document.createElement('button');
    btn.className = 'nav-group-btn';
    btn.innerHTML = `${group} <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 1l4 4 4-4"/></svg>`;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = groupEl.classList.contains('open');
      closeAllDropdowns();
      if (!isOpen) groupEl.classList.add('open');
    });

    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';

    standards.forEach(({ id, label }) => {
      const item = document.createElement('button');
      item.className = 'dropdown-item';
      item.textContent = label;
      item.dataset.id = id;
      item.addEventListener('click', () => {
        closeAllDropdowns();
        setActive(id);
      });
      dropdown.appendChild(item);
    });

    groupEl.appendChild(btn);
    groupEl.appendChild(dropdown);
    nav.appendChild(groupEl);
  });

  document.addEventListener('click', closeAllDropdowns);
}

function closeAllDropdowns() {
  document.querySelectorAll('.nav-group.open').forEach(g => g.classList.remove('open'));
}

function setActive(id) {
  activeId = id;
  document.querySelectorAll('.dropdown-item').forEach(el => {
    el.classList.toggle('active', el.dataset.id === id);
  });
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
