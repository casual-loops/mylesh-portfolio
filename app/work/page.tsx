import {Reveal} from '@/components/reveal';
import {PageHeader,SectionTitle} from '@/components/site-shell';
import {ProjectCard} from '@/components/project-card';
import {projects} from '@/content/site';
export const metadata={title:'Work'};
export default function Work(){return <><PageHeader index="02" kicker="THE WORK" title="Things I've built. Problems I've explored."><p>Some projects start with a problem. Others start with a question I can't leave alone. Here's a little of both.</p></PageHeader><div className="shell interior-content"><Reveal className="archive-reveal"><SectionTitle index="01" name="PROJECT ARCHIVE"/><div className="project-grid">{projects.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div></Reveal></div></>}
