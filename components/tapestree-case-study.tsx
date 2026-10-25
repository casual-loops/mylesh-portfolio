import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, GitBranch, ShieldCheck, Database, Cloud, FlaskConical } from 'lucide-react';
import { Reveal } from '@/components/reveal';

const lifecycle = [
  { step: '01', name: 'Plan', detail: 'Capture scope, affected systems, risk, and the intended outcome.' },
  { step: '02', name: 'Prepare', detail: 'Define prerequisites, coordination, and validation criteria.' },
  { step: '03', name: 'Execute', detail: 'Record the work and preserve a useful history of what happened.' },
  { step: '04', name: 'Validate', detail: 'Check the outcome against the criteria established beforehand.' },
  { step: '05', name: 'Complete', detail: 'Close the change with evidence, context, and lessons worth retaining.' },
];

const capabilities = [
  { id: '01', title: 'Change workspace', text: 'Create and manage changes through a structured lifecycle, with ownership, participants, dependencies, preparation, and validation.' },
  { id: '02', title: 'Systems & resources', text: 'Connect changes to the systems and resources they affect instead of treating each record as an isolated ticket.' },
  { id: '03', title: 'Evidence & history', text: 'Keep execution records, evidence, terminal outcomes, and lessons linked to the operational work.' },
  { id: '04', title: 'Organization controls', text: 'Apply organization-scoped permissions, member administration, audit history, and tenant-aware access boundaries.' },
];

const stack = [
  { label: 'APPLICATION', title: 'Next.js · React · TypeScript', detail: 'App Router, typed components, UI workflows, and server-driven discovery.' },
  { label: 'DATA & AUTH', title: 'Supabase · PostgreSQL', detail: 'Relational data, authentication, storage, authorization, and tenant isolation.' },
  { label: 'DEPLOYMENT', title: 'Azure · Docker · GitHub Actions', detail: 'Container Apps, Container Registry, Key Vault, managed identity, and OIDC-based delivery.' },
  { label: 'VALIDATION', title: 'Playwright · pgTAP', detail: 'Browser acceptance tests and database-level contracts for critical behavior.' },
];

export default function TapestreeCaseStudy() {
  return (
    <article className="shell tp-case">
      <header className="tp-hero">
        <Link href="/work" className="dd-back"><ArrowLeft size={16} aria-hidden="true" /> All work</Link>
        <p className="eyebrow">02 <span className="eyebrow-divider">//</span> SELECTED WORK <span className="dd-hero-slash">//</span> CASE STUDY 02</p>
        <div className="tp-hero-grid">
          <div>
            <span className="tp-status"><span /> IN DEVELOPMENT</span>
            <h1>Tape<span>stree.</span></h1>
            <p className="tp-hero-tagline">Change governance without the bureaucracy.</p>
            <p className="tp-hero-description">A multi-tenant operational change workspace for lean IT teams. Tapestree is my exploration of how good governance, usable workflows, and the right engineering controls can coexist without making everyday operations harder.</p>
            <div className="tp-hero-actions">
              <a href="#tp-workflow">Explore the lifecycle <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a href="#tp-architecture">Technical architecture <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
            <p className="tp-private-note">Independent product · Private source repository · Active development</p>
          </div>
          <div className="tp-lifecycle-visual" role="img" aria-label="Conceptual change lifecycle: plan, prepare, execute, validate, complete, and preserve evidence">
            <div className="tp-visual-top"><span>CHANGE / LIFECYCLE</span><span>WORKFLOW 01–05</span></div>
            <div className="tp-visual-flow">
              {lifecycle.map((step, index) => (
                <div className="tp-visual-stage" key={step.step}>
                  <span className="tp-visual-number">{step.step}</span>
                  <span className="tp-visual-name">{step.name}</span>
                  {index < lifecycle.length - 1 && <span className="tp-visual-connector" aria-hidden="true">↓</span>}
                </div>
              ))}
            </div>
            <div className="tp-visual-evidence"><span>↳</span> EVIDENCE + HISTORY + LESSONS</div>
            <p>CONCEPTUAL WORKFLOW <span>NOT AN APPLICATION SCREENSHOT</span></p>
          </div>
        </div>
        <div className="dd-meta-strip">
          <div><span>ROLE</span><strong>Product design · Full-stack engineering · Cloud deployment</strong></div>
          <div><span>STACK</span><strong>Next.js · TypeScript · PostgreSQL · Supabase · Azure</strong></div>
          <div><span>STATUS</span><strong>Active development · Change governance first</strong></div>
        </div>
      </header>

      <nav className="dd-section-nav tp-section-nav" aria-label="Tapestree case study sections">
        <a href="#tp-problem"><span>01 //</span> The problem</a>
        <a href="#tp-workflow"><span>02 //</span> Product & workflow</a>
        <a href="#tp-architecture"><span>03 //</span> Architecture</a>
        <a href="#tp-lessons"><span>04 //</span> Engineering lessons</a>
      </nav>

      <section id="tp-problem" className="dd-story-section">
        <div className="dd-section-heading"><span>01 <b>//</b></span> THE PROBLEM</div>
        <Reveal className="dd-story-split">
          <h2>Important changes shouldn't depend on <em>someone's memory.</em></h2>
          <div className="dd-prose">
            <p>Small IT teams routinely make changes that carry real operational risk. The work might be technically straightforward, but the surrounding questions still matter: who owns it, what depends on it, how will success be checked, and where will the evidence live?</p>
            <p>Heavyweight change-management systems can become a process of their own. I wanted to explore a more practical approach: enough structure to preserve accountability and institutional knowledge, without adding unnecessary friction.</p>
            <p>Tapestree began with change governance as the first product focus. Its broader direction is operational intelligence for lean IT teams, but those future capabilities aren't presented here as shipped features.</p>
          </div>
        </Reveal>
      </section>

      <section id="tp-workflow" className="dd-story-section">
        <div className="dd-section-heading"><span>02 <b>//</b></span> PRODUCT & WORKFLOW</div>
        <Reveal className="dd-heading-row"><h2>A change is more than <em>an approval.</em></h2><p>From preparation through validation, the lifecycle needs to preserve useful context for the people doing the work and the people who inherit it later.</p></Reveal>
        <div className="tp-lifecycle-grid">
          {lifecycle.map(step => <Reveal key={step.step} className="tp-lifecycle-card">
            <span>{step.step} //</span><h3>{step.name}</h3><p>{step.detail}</p>
          </Reveal>)}
        </div>
        <Reveal className="tp-feature-intro"><h3>The surrounding workspace matters, too.</h3><p>The current implementation includes more than the change record itself. Organization-scoped discovery, operational context, evidence, and administration provide the structure around the lifecycle.</p></Reveal>
        <div className="tp-capability-grid">
          {capabilities.map(c => <Reveal key={c.id} className="tp-capability">
            <span>{c.id} // CAPABILITY</span><h3>{c.title}</h3><p>{c.text}</p>
          </Reveal>)}
        </div>
      </section>

      <section id="tp-architecture" className="dd-story-section">
        <div className="dd-section-heading"><span>03 <b>//</b></span> ENGINEERING THE PLATFORM</div>
        <Reveal className="dd-heading-row"><h2>Multi-tenancy changes <em>the design decisions.</em></h2><p>Building a product for multiple organizations makes authorization, data isolation, reproducibility, and deployment boundaries first-class engineering concerns.</p></Reveal>
        <div className="tp-stack-grid">
          {stack.map(s => <Reveal key={s.label} className="tp-stack-item">
            <span>{s.label}</span><h3>{s.title}</h3><p>{s.detail}</p>
          </Reveal>)}
        </div>
        <div className="tp-engineering-focus">
          <Reveal><ShieldCheck size={22} aria-hidden="true"/><h3>Authorization by design</h3><p>Organization-scoped data access and configurable roles are part of the system model, not just navigation or interface rules.</p></Reveal>
          <Reveal><Database size={22} aria-hidden="true"/><h3>Database contracts</h3><p>PostgreSQL migrations and pgTAP tests support predictable schema evolution and protect access boundaries.</p></Reveal>
          <Reveal><Cloud size={22} aria-hidden="true"/><h3>Cloud delivery</h3><p>Azure Container Apps and registry, infrastructure definitions, and OIDC-based GitHub Actions deployment make environments reproducible.</p></Reveal>
          <Reveal><FlaskConical size={22} aria-hidden="true"/><h3>Behavioral verification</h3><p>Playwright end-to-end tests exercise real workflows while representative local seed data makes complex states reproducible.</p></Reveal>
        </div>
      </section>

      <section id="tp-lessons" className="dd-story-section">
        <div className="dd-section-heading"><span>04 <b>//</b></span> ENGINEERING & LESSONS</div>
        <Reveal className="dd-story-split">
          <h2>Good governance should make work <em>easier to do well.</em></h2>
          <div className="dd-prose">
            <p><strong>Keep the workflow grounded in real operations.</strong> Planning, preparation, execution, validation, and lessons are more useful than treating an approval as the whole change process.</p>
            <p><strong>Permission models shape the product.</strong> Multi-tenant software requires consistent access boundaries across the database, server behavior, and user experience.</p>
            <p><strong>Reproducible systems support iteration.</strong> Database tests, browser tests, seeded environments, and infrastructure automation let the product evolve with greater confidence.</p>
          </div>
        </Reveal>
      </section>

      <div className="tp-next">
        <div><span>IN PROGRESS //</span><h2>Built to keep evolving.</h2><p>Change governance remains Tapestree's first native product pillar. The longer-term operational intelligence vision is a direction for the platform, not a claim about functionality available today.</p></div>
        <Link href="/work">More selected work <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
    </article>
  );
}
