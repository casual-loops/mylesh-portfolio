import { Reveal } from '@/components/reveal';
import { roles } from './data';

export function ProfessionalHistory() {
  return (
      <section id="professional-history" className="experience-history" aria-labelledby="experience-history-heading">
        <div className="experience-history-heading">
          <h2 id="experience-history-heading"><span>01 <b>//</b></span> PROFESSIONAL HISTORY</h2>
          <span>SELECTED RESPONSIBILITIES & CONTRIBUTIONS</span>
        </div>
        {roles.map((role, index) => (
          <Reveal key={role.title} className="experience-role">
            <div className="experience-role-meta">
              <span className="experience-role-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="experience-role-period">{role.period}</span>
            </div>
            <div className="experience-role-main">
              <h3>{role.title}</h3>
              <p className="experience-role-org">{role.organization}</p>
              <p className="experience-role-summary">{role.summary}</p>
              <ul className="experience-role-highlights">
                {role.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="experience-role-themes" aria-label="Areas of work">
                {role.themes.map(theme => <span key={theme}>{theme}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </section>
  );
}
