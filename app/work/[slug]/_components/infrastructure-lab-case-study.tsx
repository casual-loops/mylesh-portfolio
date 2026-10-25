import { CaseStudyBackLink, CaseStudyNavigation, CaseStudySectionLabel } from './case-study-layout';
import Link from 'next/link';
import { ArrowUpRight, Server, Network, Activity, Database, ShieldCheck, GitBranch } from 'lucide-react';
import { Reveal } from '@/components/reveal';

const domains = [
  { number: '01', title: 'Virtualization & compute', detail: 'Proxmox VE hosts Linux containers and virtual machines for infrastructure, home automation, private applications, and development.', terms: 'Proxmox VE · Linux · Docker Compose' },
  { number: '02', title: 'Networking & access', detail: 'Pi-hole and split DNS support internal service names; Nginx centralizes HTTPS; Tailscale provides private remote access.', terms: 'Pi-hole · Nginx · TLS · Tailscale' },
  { number: '03', title: 'Observability', detail: 'Checkmk tracks service state and operational alerts, while Prometheus and Grafana handle metrics and visualization.', terms: 'Checkmk · Prometheus · Grafana' },
  { number: '04', title: 'Recovery & operations', detail: 'Guest backups, temporary snapshots, database exports, restore validation, and repeatable maintenance procedures protect state.', terms: 'Backups · PostgreSQL · Change controls' },
];

const lessons = [
  { icon: Network, title: 'Dependencies are the architecture', text: 'A service may be healthy while the DNS, proxy, authentication, or remote-access path required to reach it is broken. Troubleshooting has to follow the whole route.' },
  { icon: Activity, title: 'Measure different kinds of health', text: 'Checkmk is responsible for infrastructure and service-state monitoring. Prometheus and Grafana provide historical metrics rather than duplicating the same alerts.' },
  { icon: ShieldCheck, title: 'Privacy is a design constraint', text: 'Private applications, management interfaces, and backend metrics stay off the public internet. Remote administration and application ingress use separate paths.' },
  { icon: Database, title: 'A backup is not a restore', text: 'Snapshots, guest backups, database exports, and application backups solve different problems. Controlled restore testing verifies the recovery path.' },
];

export default function InfrastructureLabCaseStudy() {
  return (
    <article className="shell lab-case">
      <header className="lab-hero">
        <CaseStudyBackLink />
        <p className="eyebrow">02 <span className="eyebrow-divider">//</span> SELECTED WORK <span className="dd-hero-slash">//</span> CASE STUDY 03</p>
        <div className="lab-hero-grid">
          <div>
            <span className="lab-status"><span /> ONGOING · PRIVATE INFRASTRUCTURE</span>
            <h1>Infrastructure<br /><span>Lab.</span></h1>
            <p className="lab-hero-tagline">The best way to understand a system is to operate one.</p>
            <p className="lab-hero-description">My homelab is a working environment for building, connecting, monitoring, maintaining, and recovering real services. It gives me a place to explore infrastructure decisions from the hypervisor to the application, including what happens when something goes wrong.</p>
            <div className="lab-hero-links">
              <a href="https://github.com/casual-loops/homelab-infrastructure" target="_blank" rel="noopener noreferrer">Explore documentation on GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href="#lab-architecture">See the architecture <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <p className="lab-safety">Public documentation is deliberately sanitized. The lab itself is not a public demonstration environment.</p>
          </div>
          <div className="lab-system-panel" aria-label="Conceptual map of the homelab's major service domains">
            <div className="lab-panel-heading"><span>INFRASTRUCTURE / LOGICAL VIEW</span><span>CONCEPTUAL</span></div>
            <div className="lab-core"><Server size={22} aria-hidden="true"/><strong>PROXMOX VE</strong><small>VIRTUALIZATION PLATFORM</small></div>
            <div className="lab-panel-branches" aria-hidden="true"><i/><i/><i/><i/></div>
            <div className="lab-panel-grid">
              <div><span>01 //</span><strong>NETWORK</strong><small>DNS · INGRESS · VPN</small></div>
              <div><span>02 //</span><strong>MONITOR</strong><small>STATE · METRICS</small></div>
              <div><span>03 //</span><strong>STORAGE</strong><small>FILES · RECOVERY</small></div>
              <div><span>04 //</span><strong>WORKLOADS</strong><small>APPS · AUTOMATION</small></div>
            </div>
            <div className="lab-panel-foot">SANITIZED SYSTEM DIAGRAM <span>NO LIVE NETWORK DETAILS</span></div>
          </div>
        </div>
        <div className="dd-meta-strip">
          <div><span>ROLE</span><strong>Infrastructure design · Administration · Monitoring · Operations</strong></div>
          <div><span>PLATFORM</span><strong>Proxmox VE · Linux · Containers · Networking</strong></div>
          <div><span>STATUS</span><strong>Operational environment · Iterative improvements</strong></div>
        </div>
      </header>

      <CaseStudyNavigation sections={[{"id":"lab-why","label":"Why I built it"},{"id":"lab-architecture","label":"Architecture"},{"id":"lab-operations","label":"Operations"},{"id":"lab-learning","label":"What it teaches me"}]} />

      <section id="lab-why" className="dd-story-section">
        <CaseStudySectionLabel index="01" title="WHY I BUILT IT" />
        <Reveal className="dd-story-split">
          <h2>From knowing the concepts to <em>owning the consequences.</em></h2>
          <div className="dd-prose">
            <p>Reading about virtualization, networking, and system administration helps. Maintaining services that I actually depend on adds another dimension: changes need a plan, outages need investigation, and state needs a way back.</p>
            <p>What started as a place to experiment has grown into a collection of infrastructure services with distinct responsibilities, dependencies, access boundaries, monitoring, and recovery requirements.</p>
            <p>The objective isn't to assemble the biggest rack or run every possible service. It's to understand how the parts interact and practice making better engineering decisions over time.</p>
          </div>
        </Reveal>
      </section>

      <section id="lab-architecture" className="dd-story-section">
        <CaseStudySectionLabel index="02" title="HOW THE LAB IS ORGANIZED" />
        <Reveal className="dd-heading-row"><h2>Not just machines. <em>Connected services.</em></h2><p>The environment is organized around infrastructure functions, from core virtualization to private application delivery and operational resilience.</p></Reveal>
        <div className="lab-domain-grid">
          {domains.map(domain=><Reveal key={domain.number} className="lab-domain-card">
            <span>{domain.number} // SERVICE DOMAIN</span>
            <h3>{domain.title}</h3>
            <p>{domain.detail}</p>
            <small>{domain.terms}</small>
          </Reveal>)}
        </div>
        <Reveal className="lab-network-flow">
          <div className="lab-flow-head"><Network size={18} aria-hidden="true"/><span>PRIVATE SERVICE ACCESS / SIMPLIFIED</span><span>FUNCTIONAL VIEW ONLY</span></div>
          <div className="lab-flow-stages">
            <div><small>CLIENT</small><strong>Local device</strong></div>
            <span aria-hidden="true">→</span>
            <div><small>RESOLUTION</small><strong>Pi-hole / split DNS</strong></div>
            <span aria-hidden="true">→</span>
            <div><small>HTTPS INGRESS</small><strong>Nginx reverse proxy</strong></div>
            <span aria-hidden="true">→</span>
            <div><small>APPLICATION</small><strong>Private service</strong></div>
          </div>
          <p>Remote administrative access takes a separate authenticated path through Tailscale. Not every workload is exposed through the reverse proxy.</p>
        </Reveal>
      </section>

      <section id="lab-operations" className="dd-story-section">
        <CaseStudySectionLabel index="03" title="OPERATING THE ENVIRONMENT" />
        <Reveal className="dd-heading-row"><h2>Building it is fun. <em>Keeping it healthy is the work.</em></h2><p>I treat the lab as infrastructure with maintenance, monitoring, change records, and recovery obligations, not as a collection of machines that simply need to stay powered on.</p></Reveal>
        <div className="lab-operations-grid">
          <Reveal><Activity size={22} aria-hidden="true"/><h3>Observability</h3><p>Checkmk monitors hosts, services, network reachability, and alert delivery. Prometheus collects time-series metrics from exporters, and Grafana turns them into a visual view of the environment.</p></Reveal>
          <Reveal><ShieldCheck size={22} aria-hidden="true"/><h3>Access boundaries</h3><p>DNS, reverse proxying, and encrypted remote access serve separate purposes. Backend-only and LAN-only services remain private, with deny-by-default remote access.</p></Reveal>
          <Reveal><Database size={22} aria-hidden="true"/><h3>Backup & recovery</h3><p>Scheduled guest backups, temporary rollback snapshots, logical database exports, and independent recovery copies address different failures. Restore tests are a separate validation step.</p></Reveal>
          <Reveal><GitBranch size={22} aria-hidden="true"/><h3>Repeatable changes</h3><p>Maintenance procedures and change records cover prerequisites, execution, validation, rollback, and lessons. The aim is to make operational work safer and easier to repeat.</p></Reveal>
        </div>
      </section>

      <section id="lab-learning" className="dd-story-section">
        <CaseStudySectionLabel index="04" title="WHAT IT TEACHES ME" />
        <Reveal className="dd-story-split">
          <h2>One change can touch <em>every layer.</em></h2>
          <div className="dd-prose">
            <p>A working system doesn't guarantee a working service. Name resolution, TLS, routes, permissions, process health, and application state can fail independently.</p>
            <p>The most valuable part of the lab is being able to trace those failures myself, test hypotheses, improve the design, and document why something changed.</p>
          </div>
        </Reveal>
        <div className="lab-lessons-grid">
          {lessons.map(({icon:Icon,title,text})=><Reveal key={title} className="lab-lesson"><Icon size={21} aria-hidden="true"/><h3>{title}</h3><p>{text}</p></Reveal>)}
        </div>
      </section>

      <div className="lab-next">
        <div><span>DOCUMENTED & EVOLVING //</span><h2>Built to be understood, not just operated.</h2><p>The public repository contains sanitized architecture, monitoring, networking, backup, automation, and maintenance documentation. Future improvements are treated as a roadmap, not completed installations.</p></div>
        <a href="https://github.com/casual-loops/homelab-infrastructure" target="_blank" rel="noopener noreferrer">View the repository <ArrowUpRight size={18} aria-hidden="true"/></a>
      </div>
    </article>
  );
}
