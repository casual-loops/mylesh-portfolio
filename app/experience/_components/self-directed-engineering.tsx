import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';

export function SelfDirectedEngineering() {
  return (
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
  );
}
