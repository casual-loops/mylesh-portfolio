import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, GitBranch, ShieldCheck, ServerCog, Layers, ExternalLink } from 'lucide-react';
import { Reveal } from '@/components/reveal';

const diagnostics = [
  { id: '01', name: 'DNS', detail: 'Look at the records and resolution details that tell clients where a domain points.', examples: 'Resolution · Records · Configuration' },
  { id: '02', name: 'TLS', detail: 'Inspect the certificate and transport security information behind a secure connection.', examples: 'Certificates · Validity · Encryption' },
  { id: '03', name: 'HTTP', detail: 'Follow how a server responds, including status codes and redirects.', examples: 'Responses · Redirects · Behavior' },
  { id: '04', name: 'Security headers', detail: 'Surface browser-facing controls and highlight areas that deserve a closer look.', examples: 'CSP · HSTS · Browser protections' },
];

const architecture = [
  { id: '01', title: 'Browser UI', meta: 'User-facing report', desc: 'A single interface organizes the checks and makes technical results easier to browse.' },
  { id: '02', title: 'FastAPI service', meta: 'Python backend', desc: 'The API performs the network-facing inspections and returns structured diagnostic results.' },
  { id: '03', title: 'External services', meta: 'DNS · TLS · HTTP', desc: 'Checks interact with the public systems that determine how a domain resolves and responds.' },
  { id: '04', title: 'Container deployment', meta: 'Docker · Caddy', desc: 'Containerized hosting, reverse proxying, and health checks support repeatable operation.' },
];

export default function DomainDoctorCaseStudy() {
  return (
    <article className="shell dd-case">
      <header className="dd-hero">
        <Link href="/work" className="dd-back"><ArrowLeft size={16} aria-hidden="true" /> All work</Link>
        <p className="eyebrow">02 <span className="eyebrow-divider">//</span> SELECTED WORK <span className="dd-hero-slash">//</span> CASE STUDY 01</p>
        <div className="dd-hero-grid">
          <div>
            <div className="dd-status"><span className="dd-status-dot" /> DEPLOYED PROJECT</div>
            <h1>Domain<br /><span>Doctor.</span></h1>
            <p className="dd-hero-subtitle">A clearer look at what happens when you visit a domain.</p>
            <p className="dd-hero-description">A web-based diagnostic tool that brings DNS, TLS, HTTP behavior, and security headers together in one report. Built to make the invisible layers of the web easier to examine and understand.</p>
            <div className="dd-hero-links">
              <a href="https://github.com/casual-loops" target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href="#dd-system">Explore the architecture <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="dd-instrument" aria-label="Conceptual visualization of the four diagnostic layers">
            <div className="dd-instrument-top"><span>DOMAIN / INSPECTION</span><span>4 LAYERS</span></div>
            <div className="dd-instrument-orbit" aria-hidden="true">
              <div className="dd-orbit-ring dd-orbit-outer" />
              <div className="dd-orbit-ring dd-orbit-inner" />
              <div className="dd-orbit-core">D<span>//</span>D</div>
              <span className="dd-orbit-node dd-node-1" />
              <span className="dd-orbit-node dd-node-2" />
              <span className="dd-orbit-node dd-node-3" />
            </div>
            <div className="dd-instrument-readout">{diagnostics.map(d => <div key={d.id}><span>{d.id}</span><span>{d.name}</span><span className="dd-readout-mark" /></div>)}</div>
            <p>CONCEPTUAL SYSTEM DIAGRAM <span>NOT LIVE TELEMETRY</span></p>
          </div>
        </div>
        <div className="dd-meta-strip">
          <div><span>ROLE</span><strong>Independent project · Design, development & operations</strong></div>
          <div><span>STACK</span><strong>Python · FastAPI · Docker · Caddy</strong></div>
          <div><span>FOCUS</span><strong>Web infrastructure · Diagnostics · Reliability</strong></div>
        </div>
      </header>

      <nav className="dd-section-nav" aria-label="Domain Doctor sections">
        <a href="#dd-problem"><span>01 //</span> The problem</a>
        <a href="#dd-capabilities"><span>02 //</span> What it examines</a>
        <a href="#dd-system"><span>03 //</span> How it works</a>
        <a href="#dd-engineering"><span>04 //</span> Engineering & lessons</a>
      </nav>

      <section id="dd-problem" className="dd-story-section">
        <div className="dd-section-heading"><span>01 <b>//</b></span> THE PROBLEM</div>
        <Reveal className="dd-story-split">
          <h2>A domain name is only <em>the beginning.</em></h2>
          <div className="dd-prose">
            <p>Typing a web address hides a remarkable amount of coordination. DNS needs to resolve, a secure connection needs to be established, the server needs to respond, and the browser needs to decide what it can trust.</p>
            <p>Each layer is usually inspected with a different tool. I wanted to bring those signals together so someone could investigate a domain without constantly switching context.</p>
            <p>Domain Doctor started as an exploration of those systems and became a practical exercise in building and operating a public-facing diagnostic application.</p>
          </div>
        </Reveal>
      </section>

      <section id="dd-capabilities" className="dd-story-section">
        <div className="dd-section-heading"><span>02 <b>//</b></span> WHAT IT EXAMINES</div>
        <Reveal className="dd-heading-row"><h2>Four layers. <em>One clearer picture.</em></h2><p>Each section focuses on a different part of a domain's behavior. Together they offer a more useful starting point for investigation than a single pass/fail score.</p></Reveal>
        <div className="dd-diagnostic-grid">
          {diagnostics.map(d => <Reveal key={d.id} className="dd-diagnostic-card">
            <span className="dd-card-index">{d.id} <b>//</b> DIAGNOSTIC</span>
            <h3>{d.name}</h3>
            <p>{d.detail}</p>
            <div className="dd-card-foot">{d.examples}</div>
          </Reveal>)}
        </div>
      </section>

      <section id="dd-system" className="dd-story-section">
        <div className="dd-section-heading"><span>03 <b>//</b></span> UNDER THE HOOD</div>
        <Reveal className="dd-heading-row"><h2>Built as a service, <em>not just a script.</em></h2><p>The project connects user-facing design with backend diagnostics and the infrastructure required to host an application reliably.</p></Reveal>
        <div className="dd-architecture">
          <div className="dd-architecture-label"><Layers size={18} aria-hidden="true" /> SYSTEM OVERVIEW <span>CONCEPTUAL · SIMPLIFIED</span></div>
          <div className="dd-architecture-track">
            {architecture.map((a,index)=><div className="dd-architecture-step" key={a.id}>
              <span>{a.id}</span><h3>{a.title}</h3><strong>{a.meta}</strong><p>{a.desc}</p>{index<architecture.length-1&&<div className="dd-architecture-arrow" aria-hidden="true">→</div>}
            </div>)}
          </div>
        </div>
        <div className="dd-engineering-notes">
          <div><ServerCog size={20} aria-hidden="true" /><h3>Deployment</h3><p>Docker Compose supports a repeatable deployment, with Caddy serving as the reverse proxy in production.</p></div>
          <div><GitBranch size={20} aria-hidden="true" /><h3>Release discipline</h3><p>Automated tests, versioned releases, and a protected main branch help keep changes controlled.</p></div>
          <div><ShieldCheck size={20} aria-hidden="true" /><h3>Operating in public</h3><p>Health checks, privacy information, and Umami analytics extend the work beyond feature development.</p></div>
        </div>
      </section>

      <section id="dd-engineering" className="dd-story-section dd-lessons">
        <div className="dd-section-heading"><span>04 <b>//</b></span> ENGINEERING & LESSONS</div>
        <Reveal className="dd-story-split">
          <h2>Making the results useful is part of <em>the engineering.</em></h2>
          <div className="dd-prose">
            <p><strong>Clarity over noise.</strong> Results need enough technical detail to be meaningful without overwhelming someone who is trying to understand what failed or what to investigate next.</p>
            <p><strong>Expect the unexpected.</strong> Redirects, inconsistent responses, and unusual domain configurations turn seemingly simple network checks into real application design problems.</p>
            <p><strong>Ship, observe, improve.</strong> Deploying a public tool means paying attention to tests, configuration, uptime, and how real visitors experience the application.</p>
          </div>
        </Reveal>
        <div className="dd-progress-row">
          <div><span>04</span><p>Diagnostic areas</p></div>
          <div><span>33</span><p>Automated tests passing at the initial validated release</p></div>
          <div><span>1.3.1</span><p>Documented release milestone</p></div>
        </div>
      </section>

      <div className="dd-case-end">
        <div><span>THE WORK CONTINUES //</span><h2>Still asking better questions.</h2><p>Future improvements focus on stronger diagnostic coverage, redirect handling, and clearer explanations of what each finding means.</p></div>
        <Link href="/work">Back to selected work <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
    </article>
  );
}
