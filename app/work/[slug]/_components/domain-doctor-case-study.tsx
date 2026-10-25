import { CaseStudyBackLink, CaseStudyNavigation, CaseStudySectionLabel } from '@/components/case-study-layout';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, GitBranch, ShieldCheck, ServerCog, Layers } from 'lucide-react';
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
        <CaseStudyBackLink />
        <p className="eyebrow">02 <span className="eyebrow-divider">//</span> SELECTED WORK <span className="dd-hero-slash">//</span> CASE STUDY 01</p>
        <div className="dd-hero-grid">
          <div>
            <div className="dd-status"><span className="dd-status-dot" /> DEPLOYED PROJECT</div>
            <h1>Domain<br /><span>Doctor.</span></h1>
            <p className="dd-hero-subtitle">A clearer look at what happens when you visit a domain.</p>
            <p className="dd-hero-description">A web-based diagnostic tool that brings DNS, TLS, HTTP behavior, and security headers together in one report. Built to make the invisible layers of the web easier to examine and understand.</p>
            <div className="dd-hero-links">
              <a href="https://domaindoctor.fyi/" target="_blank" rel="noopener noreferrer">Live application <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href="https://github.com/casual-loops/domain-doctor" target="_blank" rel="noopener noreferrer">Source on GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href="#dd-system">Explore the architecture <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
          <figure className="dd-product-shot dd-product-shot-hero">
            <div className="dd-shot-top"><span>APPLICATION / HOME</span><span>01 // 02</span></div>
            <a href="https://domaindoctor.fyi/" target="_blank" rel="noopener noreferrer" aria-label="Open the live Domain Doctor application">
              <Image src="/images/domain-doctor-homepage.png" alt="Domain Doctor application homepage" width={1440} height={900} sizes="(max-width: 1000px) 100vw, 48vw" priority />
            </a>
            <figcaption>THE ACTUAL APPLICATION <span>DOMAINDOCTOR.FYI</span></figcaption>
          </figure>
        </div>
        <div className="dd-meta-strip">
          <div><span>ROLE</span><strong>Independent project · Design, development & operations</strong></div>
          <div><span>STACK</span><strong>Python · FastAPI · Docker · Caddy</strong></div>
          <div><span>FOCUS</span><strong>Web infrastructure · Diagnostics · Reliability</strong></div>
        </div>
      </header>

      <CaseStudyNavigation sections={[{"id":"dd-problem","label":"The problem"},{"id":"dd-capabilities","label":"What it examines"},{"id":"dd-system","label":"How it works"},{"id":"dd-engineering","label":"Engineering & lessons"}]} />

      <section id="dd-problem" className="dd-story-section">
        <CaseStudySectionLabel index="01" title="THE PROBLEM" />
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
        <CaseStudySectionLabel index="02" title="WHAT IT EXAMINES" />
        <Reveal className="dd-heading-row"><h2>Four layers. <em>One clearer picture.</em></h2><p>Each section focuses on a different part of a domain's behavior. Together they offer a more useful starting point for investigation than a single pass/fail score.</p></Reveal>
        <div className="dd-diagnostic-grid">
          {diagnostics.map(d => <Reveal key={d.id} className="dd-diagnostic-card">
            <span className="dd-card-index">{d.id} <b>//</b> DIAGNOSTIC</span>
            <h3>{d.name}</h3>
            <p>{d.detail}</p>
            <div className="dd-card-foot">{d.examples}</div>
          </Reveal>)}
        </div>
        <Reveal className="dd-result-showcase">
          <div className="dd-result-copy"><span>REAL APPLICATION // REPORT VIEW</span><h3>From a domain to a readable report.</h3><p>A completed diagnostic brings the separate checks into a single interface, making it easier to move between the layers and investigate the details.</p></div>
          <figure className="dd-product-shot dd-product-shot-result">
            <div className="dd-shot-top"><span>APPLICATION / DIAGNOSTIC REPORT</span><span>02 // 02</span></div>
            <Image src="/images/domain-doctor-result.png" alt="Domain Doctor diagnostic results interface" width={1440} height={900} sizes="(max-width: 700px) 100vw, 90vw" />
            <figcaption>ACTUAL DIAGNOSTIC RESULTS <span>DOMAIN DOCTOR</span></figcaption>
          </figure>
        </Reveal>
      </section>

      <section id="dd-system" className="dd-story-section">
        <CaseStudySectionLabel index="03" title="UNDER THE HOOD" />
        <Reveal className="dd-heading-row"><h2>Built as a service, <em>not just a script.</em></h2><p>The project connects user-facing design with backend diagnostics and the infrastructure required to host an application reliably.</p></Reveal>
        <div className="dd-architecture">
          <div className="dd-architecture-label"><Layers size={18} aria-hidden="true" /> SYSTEM COMPONENTS <span>CONCEPTUAL · NOT A REQUEST FLOW</span></div>
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
        <CaseStudySectionLabel index="04" title="ENGINEERING & LESSONS" />
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
