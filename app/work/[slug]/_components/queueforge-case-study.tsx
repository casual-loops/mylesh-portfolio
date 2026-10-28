import { ArrowUpRight, GitBranch, Database, Layers, Activity } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { CaseStudyBackLink, CaseStudyNavigation, CaseStudySectionLabel } from './case-study-layout';

const modules = [
  { title: 'Concurrency & correctness', detail: 'Race conditions, transactions, isolation, locking, and deadlock recovery.' },
  { title: 'Data engineering', detail: 'PostgreSQL query plans, indexes, constraints, migrations, replication, and partitioning.' },
  { title: 'Caching & reliability', detail: 'Redis caching, invalidation, safe retries, idempotency, rate limiting, and circuit breakers.' },
  { title: 'Distributed workflows', detail: 'RabbitMQ workers, durable messaging, transactional outbox, and eventual consistency.' },
  { title: 'Production operations', detail: 'Health checks, graceful shutdown, tracing, metrics, load testing, and fault injection.' },
];

const milestones = [
  { number: '01', title: 'Reproduce concurrency failures', detail: 'Build a small PostgreSQL-backed job model and demonstrate how overlapping claims can cause incorrect state transitions.' },
  { number: '02', title: 'Establish safe job claims', detail: 'Compare transactional locking and optimistic concurrency, then verify behavior with concurrent tests.' },
  { number: '03', title: 'Measure before optimizing', detail: 'Profile database queries, capture execution plans, and compare repeatable performance baselines.' },
  { number: '04', title: 'Build resilient processing', detail: 'Introduce caching, retries, queues, and workers, with evidence collected from controlled failures.' },
  { number: '05', title: 'Assess operational readiness', detail: 'Document architecture, test failure recovery, instrument service boundaries, and evaluate capacity.' },
];

export default function QueueForgeCaseStudy() {
  return (
    <article className="shell lab-case">
      <header className="lab-hero">
        <CaseStudyBackLink />
        <p className="eyebrow">02 <span className="eyebrow-divider">//</span> SELECTED WORK <span className="dd-hero-slash">//</span> ENGINEERING LAB</p>
        <div className="lab-hero-grid">
          <div>
            <span className="lab-status"><span /> IN PROGRESS · BACKEND ENGINEERING</span>
            <h1>Queue<span>Forge.</span></h1>
            <p className="lab-hero-tagline">What happens when a backend service faces concurrency, failure, and scale?</p>
            <p className="lab-hero-description">QueueForge is a progressively developed job-processing platform at the center of my Backend & Distributed Systems Engineering course. Each lab explores an engineering failure mode, implements a possible solution, and tests the assumptions behind it.</p>
            <div className="lab-hero-links">
              <a href="https://github.com/casual-loops/bdse-course" target="_blank" rel="noopener noreferrer">View course repository <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href="#queueforge-roadmap">Explore the roadmap <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <p className="lab-safety">This is an active learning and engineering project. Described later-stage capabilities are planned, not claims of completed implementation.</p>
          </div>
          <div className="lab-system-panel" aria-label="Conceptual target architecture for QueueForge">
            <div className="lab-panel-heading"><span>QUEUEFORGE / TARGET ARCHITECTURE</span><span>PLANNED</span></div>
            <div className="lab-core"><Layers size={22} aria-hidden="true"/><strong>FASTAPI SERVICE</strong><small>JOB SUBMISSION · STATE TRANSITIONS</small></div>
            <div className="lab-panel-branches" aria-hidden="true"><i/><i/><i/><i/></div>
            <div className="lab-panel-grid">
              <div><span>01 //</span><strong>POSTGRESQL</strong><small>TRANSACTIONS</small></div>
              <div><span>02 //</span><strong>REDIS</strong><small>SHARED CACHE</small></div>
              <div><span>03 //</span><strong>RABBITMQ</strong><small>MESSAGING</small></div>
              <div><span>04 //</span><strong>WORKERS</strong><small>EXECUTION</small></div>
            </div>
            <div className="lab-panel-foot">PROGRESSIVE LAB ARCHITECTURE <span>NOT A DEPLOYMENT DIAGRAM</span></div>
          </div>
        </div>
        <div className="dd-meta-strip">
          <div><span>FOCUS</span><strong>Backend systems · Reliability · Distributed workflows</strong></div>
          <div><span>STACK</span><strong>Python · PostgreSQL · FastAPI · Docker</strong></div>
          <div><span>STATUS</span><strong>Early labs · Architecture evolving over 16 weeks</strong></div>
        </div>
      </header>

      <CaseStudyNavigation sections={[{id:'queueforge-why',label:'The engineering question'},{id:'queueforge-approach',label:'Method'},{id:'queueforge-roadmap',label:'Roadmap'},{id:'queueforge-evidence',label:'Evidence'}]} />

      <section id="queueforge-why" className="dd-story-section">
        <CaseStudySectionLabel index="01" title="THE ENGINEERING QUESTION" />
        <Reveal className="dd-story-split">
          <h2>Working code is not the same as <em>correct behavior.</em></h2>
          <div className="dd-prose">
            <p>A simple job API can appear reliable until two workers claim the same task, a dependency slows down, or a retry causes an unintended second operation. QueueForge provides a controlled environment for investigating those failures rather than treating distributed system patterns as a checklist.</p>
            <p>The objective is to understand when each design is useful, what it costs, how it can fail, and which tests would demonstrate that it works.</p>
          </div>
        </Reveal>
      </section>

      <section id="queueforge-approach" className="dd-story-section">
        <CaseStudySectionLabel index="02" title="ENGINEERING METHOD" />
        <Reveal className="dd-heading-row"><h2>Reproduce. <em>Explain. Verify.</em></h2><p>Each laboratory starts with an observable problem and finishes with a measured result and documented limitations.</p></Reveal>
        <div className="lab-operations-grid">
          <Reveal><GitBranch size={22} aria-hidden="true"/><h3>Introduce the failure</h3><p>Build a small example that reproduces a specific concurrency, performance, or reliability defect.</p></Reveal>
          <Reveal><Database size={22} aria-hidden="true"/><h3>Evaluate the mechanism</h3><p>Compare implementation choices, including database constraints, transactions, coordination, and operational tradeoffs.</p></Reveal>
          <Reveal><Activity size={22} aria-hidden="true"/><h3>Gather evidence</h3><p>Use tests, logs, SQL plans, traces, and repeatable load experiments to evaluate the result.</p></Reveal>
          <Reveal><Layers size={22} aria-hidden="true"/><h3>Document the limits</h3><p>Record the design rationale, failure assumptions, remaining weaknesses, and recovery behavior.</p></Reveal>
        </div>
      </section>

      <section id="queueforge-roadmap" className="dd-story-section">
        <CaseStudySectionLabel index="03" title="PROJECT ROADMAP" />
        <Reveal className="dd-heading-row"><h2>One platform. <em>Increasing complexity.</em></h2><p>The 16-week course introduces components progressively, starting with Python and PostgreSQL before adding caching, messaging, scaling, and observability.</p></Reveal>
        <Reveal className="queueforge-roadmap-subheading">
          <h3>Implementation milestones</h3>
          <p>Five progressive checkpoints from reproducing concurrency defects to assessing operational readiness.</p>
        </Reveal>
        <div className="lab-domain-grid">
          {milestones.map(item => <Reveal key={item.number} className="lab-domain-card"><span>{item.number} // PLANNED MILESTONE</span><h3>{item.title}</h3><p>{item.detail}</p></Reveal>)}
        </div>
        <Reveal className="queueforge-roadmap-subheading">
          <h3>Engineering domains</h3>
          <p>The technical disciplines developed throughout the course, from transactional correctness to observability and production operations.</p>
        </Reveal>
        <div className="lab-domain-grid">
          {modules.map((item, index) => <Reveal key={item.title} className="lab-domain-card"><span>DOMAIN {String(index + 1).padStart(2, '0')} //</span><h3>{item.title}</h3><p>{item.detail}</p></Reveal>)}
        </div>
      </section>

      <section id="queueforge-evidence" className="dd-story-section">
        <CaseStudySectionLabel index="04" title="EVIDENCE & NEXT STEPS" />
        <Reveal className="dd-story-split">
          <h2>Show what the system <em>actually does.</em></h2>
          <div className="dd-prose">
            <p>The initial repository contains early Python concurrency experiments, a database schema, dependencies, and a Docker Compose configuration. These are the foundations for the broader capstone, not a finished distributed platform.</p>
            <p>As labs are completed, I intend to publish the reproduction steps, automated tests, benchmark results, engineering notes, and architecture decisions alongside the implementation.</p>
          </div>
        </Reveal>
      </section>

      <div className="lab-next">
        <div><span>ACTIVE ENGINEERING STUDY //</span><h2>From isolated experiments to a defensible system.</h2><p>Follow the source repository for implementation history, test evidence, and changes to the architecture as each module progresses.</p></div>
        <a href="https://github.com/casual-loops/bdse-course" target="_blank" rel="noopener noreferrer">Browse source code <ArrowUpRight size={18} aria-hidden="true"/></a>
      </div>
    </article>
  );
}
