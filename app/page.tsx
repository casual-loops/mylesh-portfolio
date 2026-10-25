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
        <h1>I’m Myles Hobdy.<br />I manage <span className="hero-accent-red">systems</span><br />and build <span className="hero-accent-blue">software.</span></h1>
        <p className="hero-lead">I’m a systems administrator working with identity, enterprise applications, and IT operations. Outside of that work, I build web apps and explore cloud infrastructure.</p>
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
