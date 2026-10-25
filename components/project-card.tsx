import Link from 'next/link';
import {ArrowUpRight, Box, Globe2, Server} from 'lucide-react';
import type {Project} from '@/content/site';
export function ProjectCard({project,index}:{project:Project;index:number}){
 const Icon = project.slug==='domain-doctor'?Globe2:project.slug==='tapestree'?Box:Server;
 return <Link className="project-card" href={`/work/${project.slug}`}><div className={`project-art art-${project.slug}`}><span className="project-number">0{index+1}</span><Icon size={62} strokeWidth={.65}/><span className="project-status">{project.status}</span></div><div className="project-card-body"><div className="project-name-row"><h3>{project.name}</h3><ArrowUpRight size={18}/></div><p>{project.summary}</p><div className="tags">{project.technologies.slice(0,4).map(t=><span key={t}>{t}</span>)}</div></div></Link>
}
