import { pageMetadata } from '@/lib/seo';
import { AboutIntro } from './_components/about-intro';
import { EngineeringMindset } from './_components/engineering-mindset';
import { OffTheClock } from './_components/off-the-clock';

export const metadata = pageMetadata({
  title: 'About',
  description: 'Meet Myles Hobdy: a curious systems administrator and multidisciplinary engineer exploring software, infrastructure, cloud platforms, and the science behind them.',
  path: '/about',
});

export default function About() {
  return (
    <div className="shell about-page about-page-v2">
      <AboutIntro />
      <EngineeringMindset />
      <OffTheClock />
    </div>
  );
}
