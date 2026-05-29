const STANDARDS = {
  'Data': [
    { id: 'l4-data-analyst',    label: 'Level 4 Data Analyst' },
    { id: 'l3-data-technician', label: 'Level 3 Data Technician' },
  ],
  'AI & Automation': [
    { id: 'l4-applied-ai', label: 'Level 4 Applied AI & Automation' },
  ],
  'Digital Marketing': [
    { id: 'l3-digital-marketer', label: 'Level 3 Digital Marketer' },
  ],
  'Cyber Security': [
    { id: 'l3-cyber-security', label: 'Level 3 Cyber Security Technician' },
  ],
  'Accountancy': [
    { id: 'l3-asst-accountant', label: 'Level 3 Assistant Accountant' },
    { id: 'l4-prof-accounting', label: 'Level 4 Professional Accounting Professional' },
  ],
};

const DA_SKILL_GROUPS = [
  {
    id: 'security-compliance',
    title: 'Data Security & Compliance',
    skills: ['S1', 'S3'],
    description: 'The apprentice will need to handle data securely and responsibly, following your organisation\'s policies and legal requirements such as GDPR. This includes using data systems with appropriate access controls, understanding which data can and cannot be shared, and correctly classifying different types of data.',
    example: 'e.g. logging into a database or CRM with role-based access, handling customer records in line with your data protection policy, labelling files as confidential or restricted.',
  },
  {
    id: 'data-collection',
    title: 'Data Collection & Sourcing',
    skills: ['S2', 'S8'],
    description: 'The apprentice will need to gather data from multiple sources — such as internal databases, spreadsheets, or external platforms — and understand how to combine these datasets safely. This covers the full journey from identifying where data lives to preparing it for analysis.',
    example: 'e.g. pulling monthly sales data from a database, combining CRM exports with finance reports, downloading datasets from a third-party portal.',
  },
  {
    id: 'data-quality',
    title: 'Data Cleaning & Quality',
    skills: ['S4', 'S6'],
    description: 'The apprentice will need to work with real-world data that may contain errors, gaps, or inconsistencies — and know how to identify, fix, or escalate these issues. They\'ll also work across different data formats such as structured tables, spreadsheets, and unstructured text.',
    example: 'e.g. removing duplicate customer records, identifying a report with missing values and flagging it to a manager, working with both a database and a CSV export.',
  },
  {
    id: 'analysis-statistics',
    title: 'Analysis & Statistical Methods',
    skills: ['S10', 'S13'],
    description: 'The apprentice will need to apply analytical techniques to real data — from calculating trends and averages through to more advanced methods such as forecasting, pattern recognition, or time series analysis. Complexity can grow as the apprenticeship progresses.',
    example: 'e.g. producing a monthly performance trend report, identifying a seasonal pattern in sales data, running a basic regression, forecasting next quarter\'s demand.',
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive & Forward-Looking Analysis',
    skills: ['S11'],
    description: 'The apprentice will need some exposure to using data to make predictions or support future planning. This doesn\'t require complex machine learning — it could be forecasting models in Excel, trend lines in a BI tool, or scenario planning with data.',
    example: 'e.g. building a revenue forecast, modelling the impact of a pricing change, predicting stock levels based on historical demand.',
  },
  {
    id: 'data-governance',
    title: 'Data Architecture & Governance',
    skills: ['S9'],
    description: 'The apprentice will need to understand how your organisation structures and governs its data — including where data is stored, who is responsible for it, and how it moves across systems. They don\'t need to design the architecture, but should work within it day-to-day.',
    example: 'e.g. knowing which system is the source of truth for customer data, understanding the difference between a data warehouse and operational databases, following a data governance or retention policy.',
  },
  {
    id: 'reporting-visualisation',
    title: 'Reporting & Data Visualisation',
    skills: ['S14'],
    description: 'The apprentice will need to regularly turn data into visual outputs that communicate findings clearly to others — such as dashboards, charts, graphs, or written reports. This is a core part of the role and a significant element of the End Point Assessment.',
    example: 'e.g. building and maintaining a Power BI or Tableau dashboard, producing a weekly performance report in Excel, creating charts for a management presentation.',
  },
  {
    id: 'stakeholder-comms',
    title: 'Stakeholder Engagement & Communication',
    skills: ['S5', 'S7', 'S12'],
    description: 'The apprentice will need to work with colleagues or clients to understand what they need from data, and present findings back in a clear and appropriate way — adapting their communication style for both technical and non-technical audiences.',
    example: 'e.g. meeting with a department head to agree what metrics to track, presenting a data summary to a senior leadership team, writing a plain-English summary of analysis findings.',
  },
];

const DA_TOOLS = [
  { id: 'excel',       label: 'Microsoft Excel' },
  { id: 'gsheets',    label: 'Google Sheets' },
  { id: 'powerbi',    label: 'Power BI' },
  { id: 'tableau',    label: 'Tableau' },
  { id: 'looker',     label: 'Looker / Looker Studio' },
  { id: 'sql',        label: 'SQL' },
  { id: 'python',     label: 'Python' },
  { id: 'r-lang',     label: 'R' },
  { id: 'azure',      label: 'Microsoft Azure' },
  { id: 'aws',        label: 'AWS' },
  { id: 'gcp',        label: 'Google Cloud (GCP)' },
  { id: 'databricks', label: 'Databricks' },
  { id: 'snowflake',  label: 'Snowflake' },
  { id: 'salesforce', label: 'Salesforce / CRM' },
  { id: 'sap',        label: 'SAP' },
];

const EXPOSURE_OPTIONS = [
  { value: 'limited',     label: 'Limited',     color: 'red'   },
  { value: 'moderate',    label: 'Moderate',    color: 'amber' },
  { value: 'significant', label: 'Significant', color: 'green' },
];

const FREQUENCY_OPTIONS = [
  { value: 'rarely',    label: 'Rarely',    color: 'red'   },
  { value: 'sometimes', label: 'Sometimes', color: 'amber' },
  { value: 'often',     label: 'Often',     color: 'green' },
  { value: 'daily',     label: 'Daily',     color: 'green' },
];

// ── State ─────────────────────────────────────────────────

const STATE_KEY = 'jrsc_l4-data-analyst';

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STATE_KEY)) || { sections: {}, tools: [], tools_other: '' };
  } catch {
    return { sections: {}, tools: [], tools_other: '' };
  }
}

function saveState(state) {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

// ── Suitability logic ─────────────────────────────────────

function getSectionStatus(sec) {
  if (!sec || !sec.exposure || !sec.frequency) return 'incomplete';
  if (sec.exposure === 'limited' && sec.frequency === 'rarely') return 'concern';
  if (sec.exposure === 'limited' || sec.frequency === 'rarely') return 'review';
  return 'suitable';
}

function needsComment(sec) {
  if (!sec) return false;
  return sec.exposure === 'limited' || sec.frequency === 'rarely';
}

function getOverallVerdict(state) {
  const statuses = DA_SKILL_GROUPS.map(g => getSectionStatus(state.sections[g.id]));
  if (statuses.includes('incomplete')) return 'incomplete';
  if (statuses.includes('concern')) return 'not-recommended';
  if (statuses.includes('review')) return 'review-required';
  return 'suitable';
}

function completedCount(state) {
  return DA_SKILL_GROUPS.filter(g => {
    const s = state.sections[g.id];
    return s && s.exposure && s.frequency;
  }).length;
}

// ── Nav ───────────────────────────────────────────────────

let activeCategory = Object.keys(STANDARDS)[0];
let activeId = STANDARDS[activeCategory][0].id;

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

// ── Content router ────────────────────────────────────────

function findStandard(id) {
  for (const standards of Object.values(STANDARDS)) {
    const found = standards.find(s => s.id === id);
    if (found) return found;
  }
  return null;
}

function renderContent() {
  const app = document.getElementById('app');
  const standard = findStandard(activeId);
  if (!standard) return;

  if (activeId === 'l4-data-analyst') {
    renderDataAnalyst(app, standard.label);
  } else {
    app.innerHTML = `
      <div class="welcome">
        <h2>${standard.label}</h2>
        <p>The checklist for this standard is being developed. Please check back soon.</p>
      </div>`;
  }
}

// ── Data Analyst form ─────────────────────────────────────

function renderDataAnalyst(app, title) {
  const state = loadState();
  const done = completedCount(state);
  const total = DA_SKILL_GROUPS.length;

  app.innerHTML = `
    <div class="checklist-header">
      <span class="level-badge">Level 4</span>
      <h2>${title}</h2>
      <p>Work through each section below to assess whether the apprentice's role provides sufficient exposure across the required skill areas. Your responses will determine whether the apprenticeship is recommended to proceed.</p>
    </div>

    <div class="form-progress">
      <div class="progress-text"><span id="progress-done">${done}</span> of ${total} sections completed</div>
      <div class="progress-bar-track"><div class="progress-bar-fill" id="progress-bar" style="width:${(done/total)*100}%"></div></div>
    </div>

    <div id="skill-sections"></div>

    <div class="section-card" id="tools-card">
      <div class="section-card-header" id="tools-header">
        <div class="section-header-left">
          <span class="section-num">${total + 1}</span>
          <h3>Tools, Systems &amp; Technologies</h3>
        </div>
        <span class="section-toggle" id="tools-toggle">+</span>
      </div>
      <div class="section-card-body collapsed" id="tools-body">
        <p class="tools-intro">Select all the tools and platforms the apprentice will have access to in their role. This helps us tailor programme delivery to the technologies they use day-to-day.</p>
        <div class="tools-grid" id="tools-grid"></div>
        <div class="tools-other-wrap">
          <label class="field-label" for="tools-other">Any other tools or systems not listed above:</label>
          <input type="text" id="tools-other" class="text-input" placeholder="e.g. Qlik Sense, dbt, Alteryx, Knime..." value="${state.tools_other || ''}" />
        </div>
      </div>
    </div>

    <div class="form-actions">
      <button class="btn-reset" id="btn-reset">Clear &amp; Start Again</button>
      <button class="btn-summary" id="btn-summary">View Suitability Summary</button>
    </div>

    <div id="results-panel"></div>
  `;

  renderSkillSections(state);
  renderToolsGrid(state);

  document.getElementById('tools-header').addEventListener('click', () => {
    const body = document.getElementById('tools-body');
    const toggle = document.getElementById('tools-toggle');
    const collapsed = body.classList.toggle('collapsed');
    toggle.textContent = collapsed ? '+' : '−';
  });

  document.getElementById('btn-summary').addEventListener('click', () => {
    renderResults(state);
    setTimeout(() => document.getElementById('results-panel').scrollIntoView({ behavior: 'smooth' }), 50);
  });

  document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm('This will clear all your answers and cannot be undone. Are you sure?')) {
      localStorage.removeItem(STATE_KEY);
      renderContent();
    }
  });
}

function renderSkillSections(state) {
  const container = document.getElementById('skill-sections');
  DA_SKILL_GROUPS.forEach((group, idx) => {
    container.appendChild(buildSectionCard(group, state, idx + 1));
  });
}

function buildSectionCard(group, state, num) {
  const sec = state.sections[group.id] || {};
  const status = getSectionStatus(sec);
  const isOpen = !!(sec.exposure && sec.frequency);

  const card = document.createElement('div');
  card.className = 'section-card' + (status !== 'incomplete' ? ' status-' + status : '');
  card.id = 'card-' + group.id;

  const badges = group.skills.map(s => `<span class="skill-badge">${s}</span>`).join('');

  card.innerHTML = `
    <div class="section-card-header">
      <div class="section-header-left">
        <span class="section-num">${num}</span>
        <div>
          <h3>${group.title}</h3>
          <div class="skill-badges">${badges}</div>
        </div>
      </div>
      <div class="section-header-right">
        <span class="section-status-dot status-dot-${status}"></span>
        <span class="section-toggle">${isOpen ? '−' : '+'}</span>
      </div>
    </div>
    <div class="section-card-body ${isOpen ? '' : 'collapsed'}">
      <div class="section-description">
        <p>${group.description}</p>
        <p class="section-example">${group.example}</p>
      </div>
      <div class="rating-area">
        <div class="rating-group">
          <span class="rating-label">Level of exposure in this role</span>
          <div class="rating-options" id="exposure-${group.id}">
            ${EXPOSURE_OPTIONS.map(o => `<button class="rating-btn color-${o.color}${sec.exposure === o.value ? ' selected' : ''}" data-group="${group.id}" data-type="exposure" data-value="${o.value}">${o.label}</button>`).join('')}
          </div>
        </div>
        <div class="rating-group">
          <span class="rating-label">How often will the apprentice encounter this?</span>
          <div class="rating-options" id="frequency-${group.id}">
            ${FREQUENCY_OPTIONS.map(o => `<button class="rating-btn color-${o.color}${sec.frequency === o.value ? ' selected' : ''}" data-group="${group.id}" data-type="frequency" data-value="${o.value}">${o.label}</button>`).join('')}
          </div>
        </div>
      </div>
      <div class="comment-area${needsComment(sec) ? '' : ' hidden'}" id="comment-area-${group.id}">
        <label class="field-label" for="comment-${group.id}">Please explain how exposure in this area will be achieved or supported:</label>
        <textarea id="comment-${group.id}" class="comment-textarea" rows="3" placeholder="Describe how the apprentice will develop in this area, or any plans to increase their exposure during the programme..." data-group="${group.id}">${sec.comment || ''}</textarea>
      </div>
    </div>
  `;

  // Toggle collapse
  card.querySelector('.section-card-header').addEventListener('click', () => {
    const body = card.querySelector('.section-card-body');
    const toggle = card.querySelector('.section-toggle');
    const collapsed = body.classList.toggle('collapsed');
    toggle.textContent = collapsed ? '+' : '−';
  });

  // Rating buttons
  card.querySelectorAll('.rating-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const { group: gid, type, value } = btn.dataset;
      card.querySelectorAll(`#${type}-${gid} .rating-btn`).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      if (!state.sections[gid]) state.sections[gid] = {};
      state.sections[gid][type] = value;
      saveState(state);
      document.getElementById('comment-area-' + gid).classList.toggle('hidden', !needsComment(state.sections[gid]));
      const status = getSectionStatus(state.sections[gid]);
      card.className = 'section-card' + (status !== 'incomplete' ? ' status-' + status : '');
      card.querySelector('.section-status-dot').className = 'section-status-dot status-dot-' + status;
      updateProgress(state);
    });
  });

  // Comment textarea
  const ta = card.querySelector('.comment-textarea');
  if (ta) {
    ta.addEventListener('input', () => {
      if (!state.sections[group.id]) state.sections[group.id] = {};
      state.sections[group.id].comment = ta.value;
      saveState(state);
    });
  }

  return card;
}

function updateProgress(state) {
  const done = completedCount(state);
  const total = DA_SKILL_GROUPS.length;
  const el = document.getElementById('progress-done');
  const bar = document.getElementById('progress-bar');
  if (el) el.textContent = done;
  if (bar) bar.style.width = `${(done / total) * 100}%`;
}

function renderToolsGrid(state) {
  const grid = document.getElementById('tools-grid');
  DA_TOOLS.forEach(tool => {
    const checked = (state.tools || []).includes(tool.id);
    const lbl = document.createElement('label');
    lbl.className = 'tool-chip' + (checked ? ' checked' : '');
    lbl.innerHTML = `<input type="checkbox" value="${tool.id}"${checked ? ' checked' : ''}><span>${tool.label}</span>`;
    lbl.querySelector('input').addEventListener('change', e => {
      state.tools = e.target.checked
        ? [...(state.tools || []), tool.id]
        : state.tools.filter(t => t !== tool.id);
      lbl.classList.toggle('checked', e.target.checked);
      saveState(state);
    });
    grid.appendChild(lbl);
  });
  document.getElementById('tools-other').addEventListener('input', e => {
    state.tools_other = e.target.value;
    saveState(state);
  });
}

// ── Results ───────────────────────────────────────────────

function renderResults(state) {
  const panel = document.getElementById('results-panel');
  const verdict = getOverallVerdict(state);

  const cfg = {
    suitable:         { label: 'Suitable',          cls: 'verdict-suitable',          msg: 'Based on the information provided, this role appears to provide sufficient exposure across all required skill areas. The apprenticeship is recommended to proceed.' },
    'review-required':{ label: 'Review Required',   cls: 'verdict-review',            msg: 'One or more skill areas show limited or infrequent exposure. Please review the highlighted sections below. A conversation with your Boom Training advisor is recommended before confirming enrolment.' },
    'not-recommended':{ label: 'Not Recommended',   cls: 'verdict-not-recommended',   msg: 'One or more skill areas show very limited and infrequent exposure. In its current form, this role may not provide the breadth of experience required by this standard. Please speak with your Boom Training advisor to explore options.' },
    incomplete:       { label: 'Incomplete',         cls: 'verdict-incomplete',         msg: 'Not all sections have been completed. Please complete every section to receive a full suitability assessment.' },
  }[verdict];

  const icon = { suitable: '✓', review: '!', concern: '✕', incomplete: '—' };
  const rows = DA_SKILL_GROUPS.map(g => {
    const sec = state.sections[g.id] || {};
    const st = getSectionStatus(sec);
    const exp  = sec.exposure  ? sec.exposure.charAt(0).toUpperCase()  + sec.exposure.slice(1)  : '—';
    const freq = sec.frequency ? sec.frequency.charAt(0).toUpperCase() + sec.frequency.slice(1) : '—';
    return `<tr class="result-row result-row-${st}">
      <td class="result-icon result-icon-${st}">${icon[st]}</td>
      <td class="result-section">${g.title}</td>
      <td class="result-value">${exp}</td>
      <td class="result-value">${freq}</td>
      <td class="result-comment">${sec.comment ? `<em>${sec.comment}</em>` : ''}</td>
    </tr>`;
  }).join('');

  const toolLabels = (state.tools || []).map(id => DA_TOOLS.find(t => t.id === id)?.label).filter(Boolean);
  const toolsStr = [...toolLabels, ...(state.tools_other ? [state.tools_other] : [])].join(', ') || 'None recorded';

  panel.innerHTML = `
    <div class="results-panel-inner">
      <h2 class="results-title">Suitability Summary</h2>
      <div class="verdict-banner ${cfg.cls}">
        <span class="verdict-label">${cfg.label}</span>
        <p class="verdict-msg">${cfg.msg}</p>
      </div>
      <div class="results-table-wrap">
        <table class="results-table">
          <thead><tr><th></th><th>Skill Area</th><th>Exposure</th><th>Frequency</th><th>Notes</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="results-tools"><strong>Tools &amp; Technologies declared:</strong> ${toolsStr}</div>
      <p class="results-footer">This checklist is for guidance and internal assessment only. Final enrolment decisions rest with Boom Training in consultation with the employer and apprentice.</p>
    </div>
  `;
}

// ── Boot ──────────────────────────────────────────────────

buildNav();
renderContent();
