export const roles = [
  {
    period: 'JUL 2025 // PRESENT',
    title: 'Systems Administrator',
    organization: 'Forney Independent School District',
    summary: 'Making enterprise platforms more reliable, observable, supportable, and governable.',
    highlights: [
      'Investigate integration and inventory synchronization issues across endpoint-management and IT service platforms, collaborating with vendor engineers on resolution.',
      'Review identity groups and downstream application dependencies to support controlled access cleanup.',
      'Designed an ITIL-aligned change-management framework with risk classifications, approval expectations, documentation, and operational controls.',
      'Troubleshoot large-scale Windows update failures across device, network, and CDN dependencies.',
    ],
    themes: ['Identity & access', 'Systems integration', 'Change governance', 'Troubleshooting'],
  },
  {
    period: 'JUL 2024 // JUN 2025',
    title: 'Information Technology Support Coordinator',
    organization: 'Forney Independent School District',
    summary: 'Improved the consistency of district-wide IT support and the coordination of escalated work.',
    highlights: [
      'Helped coordinate service delivery across a support organization of approximately 25 to 30 technicians.',
      'Improved help desk workflows, escalation ownership, and service-management processes.',
    ],
    themes: ['Service operations', 'Workflow improvement', 'Escalation management'],
  },
  {
    period: 'SEP 2022 // SEP 2024',
    title: 'IT Consultant (Self-employed)',
    organization: 'Fox Fern Solutions',
    summary: 'Connected enterprise knowledge governance with practical reporting and operational visibility.',
    highlights: [
      'Developed ServiceNow dashboards for an enterprise client following an acquisition.',
      'Defined measures for knowledge quality, ownership, utilization, duplication, and remediation priorities.',
      'Helped establish documentation standards and governance controls.',
    ],
    themes: ['ServiceNow', 'Reporting', 'Knowledge governance'],
  },
  {
    period: 'JUL 2021 // DEC 2022',
    title: 'Channel Partner Specialist',
    organization: 'Atlassian',
    summary: 'Supported enterprise SaaS partner operations and cross-team service coordination.',
    highlights: [
      'Supported partner onboarding, enablement, and issue resolution across internal teams and external partners.',
      'Used operational reports and service data to identify trends and clarify requirements.',
    ],
    themes: ['Enterprise SaaS', 'Partner operations', 'Operational reporting'],
  },
  {
    period: 'APR 2016 // APR 2019',
    title: 'Process Analyst',
    organization: 'Electronic Arts',
    summary: 'Translated service and customer experience patterns into process improvements and reporting requirements.',
    highlights: [
      'Analyzed escalations, workflows, and operational performance to identify opportunities for improvement.',
      'Defined reporting requirements for Tableau dashboards and communicated findings to stakeholders and leadership.',
    ],
    themes: ['Process analysis', 'Tableau', 'Technical requirements'],
  },
];

export const skillGroups = [
  { id: '01', name: 'Systems & infrastructure', accent: 'blue', tools: ['Linux', 'Windows', 'macOS', 'Proxmox VE', 'Docker', 'Docker Compose', 'Caddy', 'Postfix', 'Home Assistant', 'FileWave', 'Checkmk'] },
  { id: '02', name: 'Identity & enterprise platforms', accent: 'ochre', tools: ['RapidIdentity', 'Google Workspace', 'Google Cloud', 'Skyward', 'Frontline', 'Clever', 'Incident IQ', 'ServiceNow', 'Atlassian', 'Salesforce', 'SharePoint', 'Notion', 'Supabase'] },
  { id: '03', name: 'Software & development', accent: 'red', tools: ['Python', 'TypeScript', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'REST APIs', 'Git', 'GitHub', 'GitHub Actions', 'Playwright', 'Perforce', 'Unreal Engine'] },
  { id: '04', name: 'Data & observability', accent: 'blue', tools: ['PostgreSQL', 'SQL', 'Tableau', 'Checkmk', 'Umami', 'Log Analytics', 'Azure Monitor', 'Grafana', 'Prometheus'] },
  { id: '05', name: 'Cloud & deployment', accent: 'ochre', tools: ['Microsoft Azure', 'Azure Container Apps', 'Azure Container Registry', 'Azure Key Vault', 'Supabase', 'Docker', 'GitHub Actions'] },
  { id: '06', name: 'Operations & automation', accent: 'red', tools: ['PowerShell', 'ITIL', 'Change management', 'Incident & problem management', 'Knowledge management', 'API integrations', 'Technical documentation', 'Microsoft Visio', 'draw.io', 'Mermaid'] },
];
