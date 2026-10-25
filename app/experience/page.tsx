import { ExperienceIntro } from './_components/experience-intro';
import { ExperienceSectionNav } from './_components/section-nav';
import { ProfessionalHistory } from './_components/professional-history';
import { SelfDirectedEngineering } from './_components/self-directed-engineering';
import { SkillsTechnologies } from './_components/skills-technologies';
import { Certifications } from './_components/certifications';
import { CurrentFocus } from './_components/current-focus';
import { ResumeCTA } from './_components/resume-cta';

export const metadata = { title: 'Experience' };

export default function Experience() {
  return (
    <div className="shell experience-page">
      <ExperienceIntro />
      <ExperienceSectionNav />
      <ProfessionalHistory />
      <SelfDirectedEngineering />
      <SkillsTechnologies />
      <Certifications />
      <CurrentFocus />
      <ResumeCTA />
    </div>
  );
}
