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

const SKILL_SHORT = {
  S1:  'Secure data use & GDPR',
  S2:  'Data analysis lifecycle',
  S3:  'Data classification',
  S4:  'Dataset analysis',
  S5:  'UX & domain context',
  S6:  'Quality risk management',
  S7:  'Customer requirements analysis',
  S8:  'Data sourcing & combination',
  S9:  'Organisational data architecture',
  S10: 'Statistical methods',
  S11: 'Predictive analytics',
  S12: 'Stakeholder communication',
  S13: 'Analytical techniques (mining, forecasting)',
  S14: 'Data visualisation & reporting',
  S15: 'Tool selection & application',
};

const SKILL_FULL = {
  S1:  'Use data systems securely to meet requirements and in line with organisational procedures and legislation including principles of Privacy by Design',
  S2:  'Implement the stages of the data analysis lifecycle',
  S3:  'Apply principles of data classification within data analysis activity',
  S4:  'Analyse data sets taking account of different data structures and database designs',
  S5:  'Assess the impact on user experience and domain context on data analysis activity',
  S6:  'Identify and escalate quality risks in data analysis with suggested mitigation or resolutions as appropriate',
  S7:  'Undertake customer requirements analysis and implement findings in data analytics planning and outputs',
  S8:  'Identify data sources and the risks and challenges to combination within data analysis activity',
  S9:  'Apply organisational architecture requirements to data analysis activities',
  S10: 'Apply statistical methodologies to data analysis tasks',
  S11: 'Apply predictive analytics in the collation and use of data',
  S12: 'Collaborate and communicate with a range of internal and external stakeholders using appropriate styles and behaviours to suit the audience',
  S13: 'Use a range of analytical techniques such as data mining, time series forecasting and modelling techniques to identify and predict trends and patterns in data',
  S14: 'Collate and interpret qualitative and quantitative data and convert into infographics, reports, tables, dashboards and graphs',
  S15: 'Select and apply the most appropriate data tools to achieve the optimum outcome',
};

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

function todayISO() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STATE_KEY));
    if (saved) return saved;
  } catch {}
  return {
    meta: { apprentice: '', completer: '', job_title: '', date: todayISO() },
    sections: {},
    tools: [],
    tools_other: '',
    tools_access: '',
    additional_info: '',
  };
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

function renderDataAnalyst(app, title, overrideState = null, isDemo = false) {
  const state = overrideState || loadState();
  const done = completedCount(state);
  const total = DA_SKILL_GROUPS.length;

  const meta = state.meta || {};

  app.innerHTML = `
    <div class="checklist-header">
      <span class="level-badge">Level 4</span>
      <h2>${title}</h2>
      <p>Work through each section below to assess whether the apprentice's role provides sufficient exposure across the required skill areas. Your responses will determine whether the apprenticeship is recommended to proceed.</p>
    </div>

    ${isDemo ? `<div class="demo-bar demo-bar-active"><span class="demo-active-label">Demo mode — this is an example completed form</span><button class="btn-demo-exit" id="btn-demo">Exit Demo</button></div>` : `<div class="demo-bar"><button class="btn-demo" id="btn-demo">View Example Completed Form</button><span class="demo-hint">See how a completed checklist looks before you begin</span></div>`}

    <div class="meta-card">
      <div class="meta-card-header">Checklist Details</div>
      <div class="meta-grid">
        <div class="meta-field">
          <label class="meta-label" for="meta-apprentice">Apprentice Name <span class="optional">(optional — leave blank if not yet known)</span></label>
          <input type="text" id="meta-apprentice" class="text-input" placeholder="e.g. Jane Smith" value="${meta.apprentice || ''}" />
        </div>
        <div class="meta-field">
          <label class="meta-label" for="meta-date">Date of Completion</label>
          <input type="date" id="meta-date" class="text-input" value="${meta.date || todayISO()}" />
        </div>
        <div class="meta-field">
          <label class="meta-label" for="meta-completer">Completed by</label>
          <input type="text" id="meta-completer" class="text-input" placeholder="Full name" value="${meta.completer || ''}" />
        </div>
        <div class="meta-field">
          <label class="meta-label" for="meta-title">Job Title</label>
          <input type="text" id="meta-title" class="text-input" placeholder="e.g. Data Manager, Head of Analytics, Insight Lead" value="${meta.job_title || ''}" />
        </div>
      </div>
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
        <div class="tools-other-wrap">
          <label class="field-label" for="tools-access">System access &amp; permissions</label>
          <p class="field-hint">Does the apprentice need to make a formal request to gain access to any of these systems? If so, please describe the process or any restrictions that may apply.</p>
          <textarea id="tools-access" class="comment-textarea" rows="3" placeholder="e.g. Database access requires IT team approval and a data handling agreement to be signed. CRM access is granted on day one via line manager request...">${state.tools_access || ''}</textarea>
        </div>
      </div>
    </div>

    <div class="section-card additional-card">
      <div class="section-card-header">
        <div class="section-header-left">
          <span class="section-num">${total + 2}</span>
          <h3>Additional Information</h3>
        </div>
      </div>
      <div class="section-card-body">
        <div class="section-description">
          <p>Is there anything else you'd like to share that may be relevant to this assessment? This could include information about team routines, the apprentice's existing knowledge, working patterns, planned projects, or anything else that gives us a fuller picture of the role.</p>
        </div>
        <div class="rating-area">
          <textarea id="additional-info" class="comment-textarea" rows="5" placeholder="e.g. The apprentice will join the team's weekly data review every Monday. They will initially shadow a senior analyst before taking on their own projects in month 3. The business is planning a BI migration in Q3 which will provide significant hands-on exposure...">${state.additional_info || ''}</textarea>
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

  // Meta fields
  const metaFields = { 'meta-apprentice': 'apprentice', 'meta-date': 'date', 'meta-completer': 'completer', 'meta-title': 'job_title' };
  Object.entries(metaFields).forEach(([elId, key]) => {
    document.getElementById(elId).addEventListener('input', e => {
      if (!state.meta) state.meta = {};
      state.meta[key] = e.target.value;
      saveState(state);
    });
  });

  // Access & additional info fields
  document.getElementById('tools-access').addEventListener('input', e => { state.tools_access = e.target.value; saveState(state); });
  document.getElementById('additional-info').addEventListener('input', e => { state.additional_info = e.target.value; saveState(state); });

  // Demo button
  document.getElementById('btn-demo').addEventListener('click', () => {
    if (!isDemo) {
      renderDataAnalyst(document.getElementById('app'), title, DEMO_STATE, true);
    } else {
      renderContent();
    }
  });

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
  // Open by default; collapse automatically once both ratings are set
  const isOpen = !(sec.exposure && sec.frequency);

  const card = document.createElement('div');
  card.className = 'section-card' + (status !== 'incomplete' ? ' status-' + status : '');
  card.id = 'card-' + group.id;

  const skillsLine = group.skills.map(s =>
    `<span class="skill-item" title="${SKILL_FULL[s]}">${s}: ${SKILL_SHORT[s]}</span>`
  ).join('');

  card.innerHTML = `
    <div class="section-card-header">
      <div class="section-header-left">
        <span class="section-num">${num}</span>
        <div>
          <h3>${group.title}</h3>
          <div class="skills-line">${skillsLine}</div>
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
      // Auto-collapse once both ratings are complete
      const s = state.sections[gid];
      if (s.exposure && s.frequency) {
        card.querySelector('.section-card-body').classList.add('collapsed');
        card.querySelector('.section-toggle').textContent = '+';
      }
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
  const m = state.meta || {};

  panel.innerHTML = `
    <div class="results-panel-inner">
      <h2 class="results-title">Suitability Summary</h2>

      <div class="results-meta">
        <div class="results-meta-row">
          <span class="results-meta-label">Apprentice</span>
          <span>${m.apprentice || 'Not specified'}</span>
        </div>
        <div class="results-meta-row">
          <span class="results-meta-label">Completed by</span>
          <span>${m.completer || '—'}${m.job_title ? `, ${m.job_title}` : ''}</span>
        </div>
        <div class="results-meta-row">
          <span class="results-meta-label">Date</span>
          <span>${m.date || '—'}</span>
        </div>
        <div class="results-meta-row">
          <span class="results-meta-label">Standard</span>
          <span>Level 4 Data Analyst (ST0118 v1.1)</span>
        </div>
      </div>

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
      <div class="results-tools"><strong>Tools &amp; Technologies:</strong> ${toolsStr}</div>
      ${state.tools_access ? `<div class="results-tools"><strong>System access notes:</strong> ${state.tools_access}</div>` : ''}
      ${state.additional_info ? `<div class="results-tools"><strong>Additional information:</strong> ${state.additional_info}</div>` : ''}
      <p class="results-footer">This checklist is for guidance and internal assessment only. Final enrolment decisions rest with Boom Training in consultation with the employer and apprentice.</p>
    </div>
  `;
}

// ── Demo state ────────────────────────────────────────────

const DEMO_STATE = {
  meta: { apprentice: 'Jamie Williams', completer: 'Sarah Ahmed', job_title: 'Head of Analytics', date: '2026-05-29' },
  sections: {
    'security-compliance':    { exposure: 'significant', frequency: 'daily',     comment: '' },
    'data-collection':        { exposure: 'significant', frequency: 'often',     comment: '' },
    'data-quality':           { exposure: 'moderate',    frequency: 'often',     comment: '' },
    'analysis-statistics':    { exposure: 'moderate',    frequency: 'sometimes', comment: '' },
    'predictive-analytics':   { exposure: 'limited',     frequency: 'rarely',    comment: 'The team does not currently use predictive modelling as standard practice. However, Jamie will work with our external data science partners on a demand forecasting project planned for Q4, which will provide structured exposure to this area.' },
    'data-governance':        { exposure: 'moderate',    frequency: 'sometimes', comment: '' },
    'reporting-visualisation':{ exposure: 'significant', frequency: 'daily',     comment: '' },
    'stakeholder-comms':      { exposure: 'significant', frequency: 'often',     comment: '' },
  },
  tools: ['excel', 'powerbi', 'sql', 'python', 'azure'],
  tools_other: 'SharePoint',
  tools_access: 'Database and data warehouse access requires a formal IT request, signed off by the line manager. This typically takes 3–5 business days. Power BI and Excel access are granted on day one as part of standard onboarding.',
  additional_info: 'Jamie will join the weekly analytics stand-up every Monday and present findings to the commercial team on a monthly basis. The business is planning a data warehouse migration in Q3, which will provide significant additional exposure to data architecture and tooling. The apprentice will initially shadow a senior analyst before taking on independent projects from month three.',
};

// ── Boot ──────────────────────────────────────────────────

buildNav();
renderContent();
