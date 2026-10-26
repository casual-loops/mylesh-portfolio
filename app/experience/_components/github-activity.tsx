import { ArrowUpRight, Github } from 'lucide-react';
import { getGitHubActivity } from '@/lib/github-activity';

const profileUrl = 'https://github.com/casual-loops';

function contributionLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

function readableDay(date: string, count: number): string {
  const label = new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
  return `${count} ${count === 1 ? 'contribution' : 'contributions'} on ${label}`;
}

export async function GitHubActivity() {
  const activity = await getGitHubActivity();

  return (
    <section id="github-activity" className="github-activity" aria-labelledby="github-activity-heading">
      <div className="experience-history-heading">
        <h2 id="github-activity-heading"><span>FIELD NOTES <b>//</b></span> BUILDING IN PUBLIC</h2>
        <span>GITHUB ACTIVITY</span>
      </div>

      <div className="github-activity-intro">
        <div>
          <span className="github-activity-kicker"><Github size={18} aria-hidden="true" /> CASUAL-LOOPS / ACTIVITY</span>
          <h3>Learning in the open.</h3>
        </div>
        <p>Experiments, iterations, and code from the projects I build outside of work. A contribution calendar is one small window into that process, not a measure of engineering impact.</p>
      </div>

      <div className="github-activity-panel">
        {activity ? (
          <>
            <div className="github-activity-summary">
              <div>
                <strong>{activity.totalContributions.toLocaleString('en-US')}</strong>
                <span>contributions over the past year</span>
              </div>
              <span className="github-activity-label">PUBLIC GITHUB PROFILE</span>
            </div>
            <div className="github-activity-scroll" role="region" aria-label="GitHub contribution calendar, scroll horizontally to see all weeks" tabIndex={0}>
              <div className="github-activity-calendar" role="group" aria-label="GitHub contribution calendar for the past year">
                {activity.weeks.map((week, weekIndex) => (
                  <div className="github-activity-week" key={week.contributionDays[0]?.date ?? weekIndex}>
                    {week.contributionDays.map(day => (
                      <span
                        key={day.date}
                        className={`github-activity-day github-activity-level-${contributionLevel(day.contributionCount)}`}
                        title={readableDay(day.date, day.contributionCount)}
                        aria-label={readableDay(day.date, day.contributionCount)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="github-activity-legend" aria-hidden="true">
              <span>LESS</span>
              {[0, 1, 2, 3, 4].map(level => <i key={level} className={`github-activity-day github-activity-level-${level}`} />)}
              <span>MORE</span>
            </div>
          </>
        ) : (
          <div className="github-activity-unavailable">
            <Github size={25} aria-hidden="true" />
            <div>
              <strong>Follow the work on GitHub.</strong>
              <p>The live contribution calendar is currently unavailable. Repositories and ongoing activity are still accessible on my public profile.</p>
            </div>
          </div>
        )}

        <a className="github-activity-link" href={profileUrl} target="_blank" rel="noopener noreferrer">
          Explore my GitHub <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
