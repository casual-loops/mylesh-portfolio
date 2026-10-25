import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';

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

export default function Experience() {
  return (
    <div className="shell experience-page">
      <header className="experience-overview">
        <p className="eyebrow">04 <span className="eyebrow-divider">//</span> EXPERIENCE</p>
        <h1>Different roles.<br /><span>One connected perspective.</span></h1>
        <p>My path through operations, service delivery, reporting, and systems administration has taught me to look beyond individual problems and understand the technology, people, and processes surrounding them.</p>
      </header>

      <section className="experience-history" aria-labelledby="experience-history-heading">
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
      <div className="experience-next">
        <p>Want the technical overview?</p>
        <Link href="/cv">Explore my CV <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
    </div>
  );
}
