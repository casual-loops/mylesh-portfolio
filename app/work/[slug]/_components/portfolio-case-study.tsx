import Link from 'next/link';
import { ArrowUpRight, Code2, Layers3, Smartphone, SearchCheck } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { CaseStudyBackLink, CaseStudyNavigation, CaseStudySectionLabel } from './case-study-layout';

const decisions = [
  { icon: Layers3, title: 'Content as structured data', detail: 'A shared project registry powers the work gallery, homepage cards, static project routes, metadata, and sitemap. Adding a project should not require manually updating every destination.' },
  { icon: Code2, title: 'Reusable case-study patterns', detail: 'Individual stories retain their own content while sharing navigation, section labels, reveal behavior, and visual language.' },
  { icon: Smartphone, title: 'Responsive by design', detail: 'The layouts adapt from large editorial compositions to smaller screens, with reduced-motion preferences supported in interactive elements.' },
  { icon: SearchCheck, title: 'Discoverability and clarity', detail: 'Route metadata, a generated sitemap, robots configuration, accessible navigation, and social preview assets make the work easier to discover and navigate.' },
];

const layers = [
  { number:'01', title:'Content registry', detail:'Project metadata, summaries, technologies, and internal slugs', terms:'content/site.ts' },
  { number:'02', title:'Next.js App Router', detail:'Route-based pages, dynamically generated project paths, and SEO metadata', terms:'app/ · lib/seo.ts' },
  { number:'03', title:'Presentation system', detail:'Reusable cards, editorial case studies, typography, interactive galleries, and diagrams', terms:'components/ · app/globals.css' },
  { number:'04', title:'Public experience', detail:'A responsive portfolio with featured work, experience, project details, and a résumé', terms:'mylesh.dev' },
];

export default function PortfolioCaseStudy() {
  return (
    <article className="shell lab-case">
      <header className="lab-hero">
        <CaseStudyBackLink />
        <p className="eyebrow">02 <span className="eyebrow-divider">//</span> SELECTED WORK <span className="dd-hero-slash">//</span> THIS WEBSITE</p>
        <div className="lab-hero-grid">
          <div>
            <span className="lab-status"><span /> LIVE · CONTINUALLY EVOLVING</span>
            <h1>The<br/><span>Observatory.</span></h1>
            <p className="lab-hero-tagline">A portfolio designed to show the work and the thinking behind it.</p>
            <p className="lab-hero-description">This website is both a home for my engineering work and a software project of its own. I built a responsive, content-driven Next.js experience that connects systems administration, software engineering, infrastructure, and the questions that motivate the work.</p>
            <div className="lab-hero-links">
              <a href="https://github.com/casual-loops/mylesh-portfolio" target="_blank" rel="noopener noreferrer">Explore the source <ArrowUpRight size={16} aria-hidden="true"/></a>
              <Link href="/work">Browse the projects <ArrowUpRight size={16} aria-hidden="true"/></Link>
            </div>
          </div>
          <div className="lab-system-panel" aria-label="Conceptual map of the portfolio architecture">
            <div className="lab-panel-heading"><span>THE OBSERVATORY / CONTENT FLOW</span><span>LIVE SITE</span></div>
            <div className="lab-core"><Layers3 size={22} aria-hidden="true"/><strong>PROJECT REGISTRY</strong><small>SHARED CONTENT MODEL</small></div>
            <div className="lab-panel-branches" aria-hidden="true"><i/><i/><i/><i/></div>
            <div className="lab-panel-grid">
              <div><span>01 //</span><strong>HOME</strong><small>SELECTED WORK</small></div>
              <div><span>02 //</span><strong>WORK</strong><small>PROJECT ARCHIVE</small></div>
              <div><span>03 //</span><strong>STORIES</strong><small>CASE STUDIES</small></div>
              <div><span>04 //</span><strong>SEO</strong><small>METADATA · SITEMAP</small></div>
            </div>
            <div className="lab-panel-foot">CONCEPTUAL CONTENT MODEL <span>NOT A NETWORK TOPOLOGY</span></div>
          </div>
        </div>
        <div className="dd-meta-strip">
          <div><span>ROLE</span><strong>Independent design · Development · Content architecture</strong></div>
          <div><span>STACK</span><strong>Next.js · React · TypeScript · CSS</strong></div>
          <div><span>STATUS</span><strong>Live website · Iterative improvements</strong></div>
        </div>
      </header>

      <CaseStudyNavigation sections={[{id:'portfolio-purpose',label:'The purpose'},{id:'portfolio-experience',label:'Experience design'},{id:'portfolio-architecture',label:'Architecture'},{id:'portfolio-lessons',label:'Engineering decisions'}]}/>

      <section id="portfolio-purpose" className="dd-story-section">
        <CaseStudySectionLabel index="01" title="WHY BUILD IT" />
        <Reveal className="dd-story-split">
          <h2>A portfolio should explain <em>more than the outcome.</em></h2>
          <div className="dd-prose">
            <p>A list of technologies or screenshots does not explain why a system was built, which constraints shaped it, or how an implementation changed over time. I wanted a place where those decisions could be part of the story.</p>
            <p>The portfolio connects projects across different engineering domains without treating them as unrelated interests. Each case study centers the problem, the approach, and the evidence available so far.</p>
          </div>
        </Reveal>
      </section>

      <section id="portfolio-experience" className="dd-story-section">
        <CaseStudySectionLabel index="02" title="THE EXPERIENCE" />
        <Reveal className="dd-heading-row"><h2>Editorial storytelling. <em>Engineering structure.</em></h2><p>The visual direction uses a dark observatory-inspired canvas, restrained orbital graphics, technical diagrams, and readable project narratives rather than a generic project grid.</p></Reveal>
        <div className="lab-operations-grid">
          {decisions.map(({icon:Icon,title,detail})=><Reveal key={title}><Icon size={22} aria-hidden="true"/><h3>{title}</h3><p>{detail}</p></Reveal>)}
        </div>
      </section>

      <section id="portfolio-architecture" className="dd-story-section">
        <CaseStudySectionLabel index="03" title="HOW IT IS BUILT"/>
        <Reveal className="dd-heading-row"><h2>One source of truth. <em>Many views.</em></h2><p>The portfolio uses a small content model to connect pages and keep project discovery consistent as the work grows.</p></Reveal>
        <div className="lab-domain-grid">
          {layers.map(item=><Reveal key={item.number} className="lab-domain-card"><span>{item.number} // SYSTEM LAYER</span><h3>{item.title}</h3><p>{item.detail}</p><small>{item.terms}</small></Reveal>)}
        </div>
      </section>

      <section id="portfolio-lessons" className="dd-story-section">
        <CaseStudySectionLabel index="04" title="DESIGN & ENGINEERING DECISIONS"/>
        <Reveal className="dd-story-split">
          <h2>The website is part of <em>the engineering practice.</em></h2>
          <div className="dd-prose">
            <p><strong>Make growth inexpensive.</strong> A centralized project registry keeps the selected work, archive, route generation, and sitemap in sync as new work is added.</p>
            <p><strong>Respect different readers.</strong> The same page should provide a useful overview to a recruiter and enough implementation detail for a technically curious visitor.</p>
            <p><strong>Design for change.</strong> Reusable page patterns and a dedicated case-study route make it possible to refine the visual language while keeping the existing stories intact.</p>
            <p><strong>Keep claims grounded.</strong> Projects in active development are described as such; design intentions are distinct from operational results.</p>
          </div>
        </Reveal>
      </section>

      <div className="lab-next">
        <div><span>THE PROJECT BEHIND THIS SITE //</span><h2>A living record of engineering work.</h2><p>The portfolio continues to evolve as projects mature, case studies gain stronger evidence, and I learn better ways to communicate technical work.</p></div>
        <a href="https://github.com/casual-loops/mylesh-portfolio" target="_blank" rel="noopener noreferrer">View source repository <ArrowUpRight size={18} aria-hidden="true"/></a>
      </div>
    </article>
  );
}
