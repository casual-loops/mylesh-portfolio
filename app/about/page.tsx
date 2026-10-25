import { AboutIntro } from './_components/about-intro';
import { EngineeringMindset } from './_components/engineering-mindset';
import { OffTheClock } from './_components/off-the-clock';

export const metadata = { title: 'About' };

export default function About() {
  return (
    <div className="shell about-page about-page-v2">
      <AboutIntro />
      <EngineeringMindset />
      <OffTheClock />
    </div>
  );
}
