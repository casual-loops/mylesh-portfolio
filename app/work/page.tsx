import {Reveal} from '@/components/reveal';
import {PageHeader,SectionTitle} from '@/components/site-shell';
import {ProjectCard} from '@/components/project-card';
import {projects} from '@/content/site';
export const metadata={title:'Work'};
export default function Work(){return <><PageHeader index="02" kicker="THE WORK" title="Things I've built. Problems I've explored."><p>Some projects start with a problem. Others start with a question I can't leave alone. Here's a little of both.</p></PageHeader><div className="shell interior-content"><Reveal className="archive-reveal"><SectionTitle index="01" name="PROJECT ARCHIVE"/></Reveal><div className="project-grid">{projects.map((p,i)=><Reveal key={p.slug} delay={i * 0.09}><ProjectCard project={p} index={i}/></Reveal>)}</div></div></>}
