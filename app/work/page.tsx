import { WorkGallery } from '@/components/work-gallery';
import { projects } from '@/content/site';

export const metadata = { title: 'Work' };

export default function Work() {
  return (
    <div className="shell work-page">
      <header className="work-intro avatar-header work-avatar-header">
        <p className="eyebrow work-kicker">02 <span className="eyebrow-divider">//</span> THE WORK</p>
        <h1>Things I've built.<br /><span>Problems I've explored.</span></h1>
        <p>Some projects start with a problem to solve. Others start with a question I can't leave alone. Here's a little of both.</p>
        <img className="page-avatar page-avatar-work" src="/images/avatars/work-pointing.webp" alt="Cartoon illustration of Myles pointing toward the project gallery" width={335} height={552} />
      </header>
      <WorkGallery projects={projects} />
    </div>
  );
}
