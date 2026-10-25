import Link from 'next/link';
import { ArrowUpRight, Network } from 'lucide-react';
import { ProjectVisual } from '@/components/project-visual';
import type { Project } from '@/content/site';

const logos: Record<string, string> = {
  Python: 'python/python-original.svg',
  FastAPI: 'fastapi/fastapi-original.svg',
  Docker: 'docker/docker-original.svg',
  'Next.js': 'nextjs/nextjs-original.svg',
  TypeScript: 'typescript/typescript-original.svg',
  PostgreSQL: 'postgresql/postgresql-original.svg',
  Supabase: 'supabase/supabase-original.svg',
  Azure: 'azure/azure-original.svg',
  Proxmox: 'proxmox/proxmox-original.svg',
  Linux: 'linux/linux-original.svg',
};

function TechnologyLogo({ name }: { name: string }) {
  const asset = logos[name];
  const source = name === 'Caddy'
    ? 'https://cdn.jsdelivr.net/npm/simple-icons@15/icons/caddy.svg'
    : asset
      ? `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/${asset}`
      : null;

  return (
    <span className="tech-logo" role="img" aria-label={name} title={name}>
      {source ? (
        <img className="tech-logo-image" src={source} alt="" width={25} height={25} loading="lazy" />
      ) : (
        <Network size={25} strokeWidth={1.5} aria-hidden="true" />
      )}
    </span>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link className={`project-card project-card-${project.slug}`} href={`/work/${project.slug}`}>
      <div className={`project-art art-${project.slug}`} data-visual="technical-diagram">
        <span className="project-number">0{index + 1}</span>
        <ProjectVisual slug={project.slug} />
        <span className="project-status" data-status={project.slug}>{project.status}</span>
      </div>
      <div className="project-card-body">
        <div className="project-name-row"><h3>{project.name}</h3><span className="project-open" aria-hidden="true"><ArrowUpRight size={19} /></span></div>
        <p className="project-summary">{project.summary}</p>
        <div className="project-card-meta"><span className="project-areas">{project.areas.join(" // ")}</span><div className="tech-logos" aria-label="Technology logos">
          {project.technologies.map(name => <TechnologyLogo key={name} name={name} />)}
        </div></div>
      </div>
    </Link>
  );
}
