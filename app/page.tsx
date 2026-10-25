import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HeroScene } from '@/components/hero-scene';
import { projects } from '@/content/site';
import { ProjectCard } from '@/components/project-card';
import { SectionTitle } from '@/components/site-shell';
import { Reveal } from '@/components/reveal';

export default function Home() {
  return (
    <>
    <section className="hero shell">
      <HeroScene />
      <div className="hero-copy">
        <p className="eyebrow hero-disciplines"><span>Systems &amp; Infrastructure</span><span>Software Engineering</span><span>Cloud &amp; Platform Engineering</span></p>
        <span className="tiny-line" />
        <h1>Curious about <span className="hero-accent-red">how it works.</span><br /><span className="hero-accent-blue">Driven to build it better.</span></h1>
        <p className="hero-lead">I work across systems, infrastructure, and software, and I enjoy getting beneath the surface of technology. Whether I'm building an application or untangling a complex system, I want to understand how the pieces fit together and how to make them work better.</p>
        <div className="hero-actions">
          <Link className="button button-light" href="/work">Explore my work <ArrowRight size={20} /></Link>
          <Link className="button button-outline" href="/about">About me</Link>
        </div>
      </div>
    </section>
    <div className="shell content-flow">
      <section>
        <Reveal>
        <SectionTitle index="02" name="SELECTED WORK" href="/work" label="View all work" />
        </Reveal>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.09}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
