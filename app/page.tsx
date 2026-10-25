import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HeroOrbit } from '@/components/hero-orbit';
import { projects } from '@/content/site';
import { ProjectCard } from '@/components/project-card';
import { SectionTitle } from '@/components/site-shell';
import { Reveal } from '@/components/reveal';

export default function Home() {
  return (
    <>
    <section className="hero shell">
      <div className="hero-art"><HeroOrbit /></div>
      <div className="hero-copy">
        <p className="eyebrow">MYLES <span className="eyebrow-divider">/</span> MULTIDISCIPLINARY ENGINEER</p>
        <span className="tiny-line" />
        <h1>Somewhere<br />between <span>the wire</span><br />and <span>the software.</span></h1>
        <p className="hero-lead">I like finding out how things work, what connects them, and what I can build along the way.</p>
        <div className="hero-actions">
          <Link className="button button-light" href="/work">Explore my work <ArrowRight size={20} /></Link>
          <Link className="button button-outline" href="/about">About me</Link>
        </div>
      </div>
      <div className="hero-figure">⊕ <span>FIG. 01 / THE OBSERVATORY</span></div>
    </section>
    <div className="shell content-flow">
      <section>
        <Reveal>
        <SectionTitle index="02" name="SELECTED WORK" href="/work" label="View all work" />
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        </Reveal>
      </section>
    </div>
    </>
  );
}
