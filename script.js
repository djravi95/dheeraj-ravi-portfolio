// ===== Resume data =====
const skills = [
  {
    icon: '🤖',
    cat: 'AI & Automation',
    tags: ['LLM Prompt Engineering', 'AI Agent Workflows', 'LangChain', 'Gemini API', 'Vertex AI', 'n8n', 'Power Automate', 'Workflow Automation'],
  },
  {
    icon: '📊',
    cat: 'Data & Analytics',
    tags: ['SQL', 'Python', 'BigQuery', 'MSSQL', 'Power BI', 'Alteryx', 'Excel', 'Dashboards & Reporting', 'Data Validation', 'Data Reconciliation'],
  },
  {
    icon: '☁️',
    cat: 'Cloud & Data Engineering',
    tags: ['Google Cloud Platform', 'Cloud Functions', 'Terraform', 'IAM', 'ETL / Data Pipelines', 'Data Migration', 'Disaster Recovery'],
  },
  {
    icon: '🗺️',
    cat: 'Geospatial',
    tags: ['PostGIS', 'Spatial SQL', 'Spatial Joins', 'Geocoding', 'Address Matching', 'Coordinate Transformations'],
  },
  {
    icon: '🌐',
    cat: 'Languages',
    tags: ['English', 'Hindi', 'Malayalam (professional)', 'French (elementary)'],
  },
];

const experience = [
  {
    role: 'Senior Analyst — Location Intelligence',
    company: 'Dun & Bradstreet',
    date: 'May 2024 – Oct 2026',
    location: 'Hyderabad, India',
    bullets: [
      'Engineered national-scale spatial data pipelines in PostGIS and Python across millions of US building records for the Enhanced Building Footprint (EBF) product — data standardization, coordinate transformations, spatial joins, address matching, geocoding validation, and attribute enrichment.',
      'Architected an AI-agent workflow using Python and LLM prompt engineering to scrape municipal zoning data and auto-generate location intelligence outputs, reducing manual research effort by ~60% with ~70% evaluation accuracy.',
      'Built and delivered EBF Pulse, a self-initiated AI quality-monitoring system combining an HTML dashboard, n8n automation, Gemini API summarization, and automated email digests — adopted by the team as a live data-quality reporting tool.',
      'Designed the AWS-to-GCP migration blueprint for a 6-month transition (storage architecture, access patterns, IAM, disaster recovery with Terraform), estimating 40% reduction in cloud management overhead.',
      'Built cross-cloud ingestion and transformation pipelines using BigQuery, Cloud Functions, and Python to replace legacy MSSQL workflows — reporting turnaround from hours to minutes with 99%+ pipeline reliability.',
    ],
  },
  {
    role: 'Risk Analytics Consultant',
    company: 'Wells Fargo',
    date: 'Sep 2022 – May 2024',
    location: 'Hyderabad, India',
    bullets: [
      'Designed and automated risk-tracking workflows and end-to-end U.S. banking reporting in Python (data extraction, Excel report generation, daily stakeholder distribution), feeding Power BI dashboards.',
      'Analyzed complex datasets with SQL to support risk reporting, data reconciliation, and business intelligence requirements.',
      'Reviewed data aggregation and programming models to ensure accuracy, consistency, and alignment with risk-reporting requirements.',
      'Partnered with risk managers, stakeholders, and offshore teams to monitor production processes and improve reporting workflows in an Agile environment.',
    ],
  },
  {
    role: 'Senior Data Analyst',
    company: 'WPP',
    date: 'Dec 2020 – Sep 2022',
    location: 'India',
    bullets: [
      'Analyzed SAS transaction data to build a business intelligence model supporting real-time reporting needs.',
      'Automated recurring reporting workflows using SQL and Excel, reducing manual effort and improving reporting consistency.',
      'Investigated and resolved data-flow integrity issues and ran reconciliations to keep reported outputs accurate.',
      'Delivered metrics reports and stakeholder presentations that informed campaign and resource-allocation decisions.',
    ],
  },
  {
    role: 'Assistant Manager — Reporting and Analytics',
    company: 'Home Credit India',
    date: 'Jan 2020 – Dec 2020',
    location: 'Gurugram, India',
    bullets: [
      'Managed reporting and analytics activities, aligning deliverables with business requirements and operational priorities.',
      'Established internal controls, workflows, and policies for tracking, reconciling, and reporting; supported data validation to improve report reliability.',
      'Analyzed reports to identify early-warning signals (unusual trends, patterns, process gaps) and recommended corrective actions.',
      'Coordinated with business stakeholders to clarify requirements, resolve data discrepancies, and streamline recurring reports.',
    ],
  },
  {
    role: 'Associate Consultant',
    company: 'Capgemini Invent',
    date: 'Dec 2018 – Jan 2020',
    location: 'New Delhi, India',
    bullets: [
      'Worked with business partners to understand objectives and deliver reporting, ad-hoc data extracts, and analysis.',
      'Analyzed large datasets and built visualizations and dashboards using Excel and SQL.',
      'Presented findings and recommended optimizations to clients, ran weekly workflow calls, and managed team status reporting.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'Strategic Learning Solutions Pvt Ltd',
    date: 'Nov 2017 – Nov 2018',
    location: 'Gurugram, India',
    bullets: [
      'Investigated and resolved data-flow integrity issues across databases and updated systems to streamline data collection.',
      'Documented business rules and use cases from requirements analysis.',
      'Built Excel reports delivering metrics to stakeholders to guide resource-allocation decisions.',
    ],
  },
];

const projects = [
  {
    tag: 'GEOSPATIAL · AI',
    title: 'Project Aegis — Flood Risk Intelligence',
    desc: 'Developing a district-level flood-risk assessment initiative combining environmental evidence, geospatial intelligence, and AI to help NGOs and emergency-response teams assess flood threats.',
  },
  {
    tag: 'AI · AUTOMATION',
    title: 'AI Agents Workflow Automation',
    desc: 'Designed AI-enabled workflows for municipal zoning research and location intelligence, automating information collection and structured output generation.',
  },
];

const certifications = [
  'Google Project Management Professional Certificate',
  'Prompt Engineering for ChatGPT — Vanderbilt University',
  'IT Automation with Python — Coursera',
  'Python for Data Science — IBM',
  'GIS for Climate Action',
  'Product Management Fundamentals',
];

// ===== Render =====
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = skills.map((s, i) => `
    <div class="card skill-card reveal">
      <div class="skill-header">
        <span class="skill-icon">${s.icon}</span>
        <span class="skill-cat">${s.cat}</span>
      </div>
      <div class="skill-tags">
        ${s.tags.map((t) => `<span class="skill-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderTimeline() {
  const tl = document.getElementById('timeline');
  tl.innerHTML = experience.map((e) => `
    <div class="tl-item reveal">
      <span class="tl-dot"></span>
      <div class="card tl-card">
        <div class="tl-head">
          <span class="tl-role">${e.role}</span>
          <span class="tl-company">${e.company}</span>
          <span class="tl-date">${e.date}</span>
        </div>
        <div class="tl-location">${e.location}</div>
        <ul class="tl-bullets">
          ${e.bullets.map((b) => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = projects.map((p) => `
    <div class="card project-card reveal">
      <span class="proj-tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    </div>
  `).join('');
}

function renderCerts() {
  const grid = document.getElementById('certsGrid');
  grid.innerHTML = certifications.map((c) => `<div class="cert reveal">${c}</div>`).join('');
}

// ===== Theme toggle =====
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(next);
});

// ===== Mobile menu =====
const mobileBtn = document.getElementById('mobileMenuBtn');
const sidebar = document.querySelector('.sidebar');
mobileBtn.addEventListener('click', () => sidebar.classList.toggle('open'));

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => sidebar.classList.remove('open'));
});

// ===== Active nav on scroll =====
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove('active'));
        const id = entry.target.id;
        const active = document.querySelector(`.nav-link[data-section="${id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);
sections.forEach((s) => observer.observe(s));

// ===== Reveal on scroll =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

// ===== Animated counters =====
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1200;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);

  document.getElementById('year').textContent = new Date().getFullYear();

  renderSkills();
  renderTimeline();
  renderProjects();
  renderCerts();

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
  document.querySelectorAll('.stat-value').forEach((el) => statObserver.observe(el));

  // Reveal hero immediately
  document.querySelectorAll('.hero, .summary').forEach((el) => {
    el.classList.add('visible');
  });
});
