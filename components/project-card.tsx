import Link from 'next/link';
import { ArrowUpRight, Box, Globe2, Server, Network } from 'lucide-react';
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
  const Icon = project.slug === 'domain-doctor' ? Globe2 : project.slug === 'tapestree' ? Box : Server;
  return (
    <Link className="project-card" href={`/work/${project.slug}`}>
      <div className={`project-art art-${project.slug}`}>
        <span className="project-number">0{index + 1}</span>
        <Icon size={62} strokeWidth={0.65} />
        <span className="project-status">{project.status}</span>
      </div>
      <div className="project-card-body">
        <div className="project-name-row"><h3>{project.name}</h3><ArrowUpRight size={18} /></div>
        <p>{project.summary}</p>
        <div className="tech-logos" aria-label="Technologies used">
          {project.technologies.map(name => <TechnologyLogo key={name} name={name} />)}
        </div>
      </div>
    </Link>
  );
}
