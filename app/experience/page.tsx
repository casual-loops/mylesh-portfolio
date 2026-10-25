import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { CertificationCarousel } from '@/components/certification-carousel';

export const metadata = { title: 'Experience' };

const roles = [
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

const skillGroups = [
  { id: '01', name: 'Systems & infrastructure', accent: 'blue', tools: ['Linux', 'Windows', 'macOS', 'Proxmox VE', 'Docker', 'Docker Compose', 'Caddy', 'Postfix', 'Home Assistant', 'FileWave', 'Checkmk'] },
  { id: '02', name: 'Identity & enterprise platforms', accent: 'ochre', tools: ['RapidIdentity', 'Google Workspace', 'Google Cloud', 'Skyward', 'Frontline', 'Clever', 'Incident IQ', 'ServiceNow', 'Atlassian', 'Salesforce', 'SharePoint', 'Notion', 'Supabase'] },
  { id: '03', name: 'Software & development', accent: 'red', tools: ['Python', 'TypeScript', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'REST APIs', 'Git', 'GitHub', 'GitHub Actions', 'Playwright', 'Perforce', 'Unreal Engine'] },
  { id: '04', name: 'Data & observability', accent: 'blue', tools: ['PostgreSQL', 'SQL', 'Tableau', 'Checkmk', 'Umami', 'Log Analytics', 'Azure Monitor', 'Grafana', 'Prometheus'] },
  { id: '05', name: 'Cloud & deployment', accent: 'ochre', tools: ['Microsoft Azure', 'Azure Container Apps', 'Azure Container Registry', 'Azure Key Vault', 'Supabase', 'Docker', 'GitHub Actions'] },
  { id: '06', name: 'Operations & automation', accent: 'red', tools: ['PowerShell', 'ITIL', 'Change management', 'Incident & problem management', 'Knowledge management', 'API integrations', 'Technical documentation', 'Microsoft Visio', 'draw.io', 'Mermaid'] },
];

export default function Experience() {
  return (
    <div className="shell experience-page">
      <header className="experience-overview">
        <p className="eyebrow">04 <span className="eyebrow-divider">//</span> EXPERIENCE</p>
        <h1>Different roles.<br /><span>One connected perspective.</span></h1>
        <p>My path through operations, service delivery, reporting, and systems administration has taught me to look beyond individual problems and understand the technology, people, and processes surrounding them.</p>
      </header>

      <nav className="experience-section-nav" aria-label="Experience page sections">
        <a href="#professional-history"><span>01 //</span> Professional history</a>
        <a href="#self-directed"><span>02 //</span> Self-directed engineering</a>
        <a href="#skills-technologies"><span>03 //</span> Skills & technologies</a>
        <a href="#certifications"><span>04 //</span> Certifications</a>
      </nav>

      <section id="professional-history" className="experience-history" aria-labelledby="experience-history-heading">
        <div className="experience-history-heading">
          <h2 id="experience-history-heading"><span>01 <b>//</b></span> PROFESSIONAL HISTORY</h2>
          <span>SELECTED RESPONSIBILITIES & CONTRIBUTIONS</span>
        </div>
        {roles.map((role, index) => (
          <Reveal key={role.title} className="experience-role">
            <div className="experience-role-meta">
              <span className="experience-role-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="experience-role-period">{role.period}</span>
            </div>
            <div className="experience-role-main">
              <h3>{role.title}</h3>
              <p className="experience-role-org">{role.organization}</p>
              <p className="experience-role-summary">{role.summary}</p>
              <ul className="experience-role-highlights">
                {role.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="experience-role-themes" aria-label="Areas of work">
                {role.themes.map(theme => <span key={theme}>{theme}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </section>
      <section id="self-directed" className="experience-independent" aria-labelledby="experience-independent-heading">
        <div className="experience-history-heading">
          <h2 id="experience-independent-heading"><span>02 <b>//</b></span> SELF-DIRECTED ENGINEERING</h2>
          <span>LEARNING BY BUILDING</span>
        </div>
        <Reveal className="experience-independent-intro">
          <h3>Some of my most useful lessons happen outside the job description.</h3>
          <p>I build things to understand how they work, then keep learning as they break, grow, and change. Independent projects give me room to explore software, infrastructure, networking, and cloud platforms together.</p>
        </Reveal>
        <div className="experience-independent-grid">
          <Reveal className="experience-independent-item">
            <span className="experience-independent-index">01 // SOFTWARE</span>
            <h3>Building applications</h3>
            <p>Domain Doctor gives me a practical way to work through web diagnostics, HTTP behavior, DNS, TLS, testing, containers, and deployment. Tapestree extends that experience into application architecture, relational data, authentication, and change-governance workflows.</p>
            <Link href="/work">Explore projects <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </Reveal>
          <Reveal className="experience-independent-item">
            <span className="experience-independent-index">02 // INFRASTRUCTURE</span>
            <h3>Operating my own lab</h3>
            <p>My home infrastructure is a working environment for Linux, Proxmox virtualization, containers, private networking, monitoring, databases, and self-hosted applications. I use it to investigate how services fit together and what it takes to keep them healthy.</p>
            <Link href="/work">See the infrastructure work <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </Reveal>
          <Reveal className="experience-independent-item">
            <span className="experience-independent-index">03 // CONTINUOUS LEARNING</span>
            <h3>Following the questions</h3>
            <p>I study networking, cloud technologies, programming, and the fundamentals behind them. Whenever possible, I turn what I'm learning into experiments, working systems, and small projects rather than stopping at theory.</p>
          </Reveal>
        </div>
      </section>
      <section id="skills-technologies" className="experience-skills" aria-labelledby="experience-skills-heading">
        <div className="experience-history-heading">
          <h2 id="experience-skills-heading"><span>03 <b>//</b></span> SKILLS & TECHNOLOGIES</h2>
          <span>TOOLS, PLATFORMS & PRACTICES</span>
        </div>
        <Reveal className="experience-skills-intro">
          <h3>A toolkit built across disciplines.</h3>
          <p>From the systems I operate to the software I build, these are technologies and practices I've worked with through professional responsibilities and independent projects. The list reflects exposure, not equal proficiency in every tool.</p>
        </Reveal>
        <div className="experience-skills-grid">
          {skillGroups.map(group => (
            <Reveal key={group.id} className={`experience-skill-group skill-accent-${group.accent}`}>
              <div className="experience-skill-heading">
                <span>{group.id} //</span>
                <h4>{group.name}</h4>
              </div>
              <div className="experience-skill-tools">
                {group.tools.map(tool => <span key={tool}>{tool}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section id="certifications" className="experience-certifications" aria-labelledby="experience-certifications-heading">
        <div className="experience-history-heading">
          <h2 id="experience-certifications-heading"><span>04 <b>//</b></span> CERTIFICATIONS</h2>
          <span>PROFESSIONAL CREDENTIALS</span>
        </div>
        <CertificationCarousel />
      </section>
      <div className="experience-next">
        <p>Want the technical overview?</p>
        <Link href="/cv">Explore my CV <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
    </div>
  );
}
