import { projects } from '@/content/site';
import { ProjectCard } from '@/components/project-card';
import { SectionTitle } from '@/components/site-shell';
import { Reveal } from '@/components/reveal';

export function SelectedWork() {
  return (
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
  );
}
