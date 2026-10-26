import { pageMetadata } from '@/lib/seo';
import { ExperienceIntro } from './_components/experience-intro';
import { ExperienceSectionNav } from './_components/section-nav';
import { ProfessionalHistory } from './_components/professional-history';
import { SelfDirectedEngineering } from './_components/self-directed-engineering';
import { GitHubActivity } from './_components/github-activity';
import './_components/github-activity.css';
import { SkillsTechnologies } from './_components/skills-technologies';
import { Certifications } from './_components/certifications';
import { CurrentFocus } from './_components/current-focus';
import { ResumeCTA } from './_components/resume-cta';

// Fetch contribution data at request time; GitHub responses are cached for six hours.
export const dynamic = 'force-dynamic';

export const metadata = pageMetadata({
  title: 'Experience',
  description: 'Explore Myles Hobdy\'s professional experience, systems administration background, technical skills, certifications, and current engineering focus.',
  path: '/experience',
});

export default function Experience() {
  return (
    <div className="shell experience-page">
      <ExperienceIntro />
      <ExperienceSectionNav />
      <ProfessionalHistory />
      <SelfDirectedEngineering />
      <GitHubActivity />
      <SkillsTechnologies />
      <Certifications />
      <CurrentFocus />
      <ResumeCTA />
    </div>
  );
}
