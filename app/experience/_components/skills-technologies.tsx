import { Reveal } from '@/components/reveal';
import { skillGroups } from './data';

export function SkillsTechnologies() {
  return (
      <section id="skills-technologies" className="experience-skills" aria-labelledby="experience-skills-heading">
        <div className="experience-history-heading">
          <h2 id="experience-skills-heading"><span>03 <b>//</b></span> SKILLS & TECHNOLOGIES</h2>
          <span>TOOLS, PLATFORMS & PRACTICES</span>
        </div>
        <Reveal className="experience-skills-intro">
          <h3>A toolkit built across disciplines.</h3>
          <p>From the systems I operate to the software I build, these are technologies and practices I've worked with through professional responsibilities and independent projects. The list reflects exposure, not equal proficiency in every tool.</p>
        </Reveal>
        <div className="experience-skills-grid">
          {skillGroups.map(group => (
            <Reveal key={group.id} className={`experience-skill-group skill-accent-${group.accent}`}>
              <div className="experience-skill-heading">
                <span>{group.id} //</span>
                <h4>{group.name}</h4>
              </div>
              <div className="experience-skill-tools">
                {group.tools.map(tool => <span key={tool}>{tool}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
  );
}
