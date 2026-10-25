import { WorkGallery } from '@/components/work-gallery';
import { projects } from '@/content/site';
import { WorkIntro } from './_components/work-intro';

export const metadata = { title: 'Work' };

export default function Work() {
  return (
    <div className="shell work-page">
      <WorkIntro />
      <WorkGallery projects={projects} />
    </div>
  );
}
