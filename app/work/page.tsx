import { pageMetadata } from '@/lib/seo';
import { WorkGallery } from '@/components/work-gallery';
import { projects } from '@/content/site';
import { WorkIntro } from './_components/work-intro';

export const metadata = pageMetadata({
  title: 'Work',
  description: 'Explore engineering projects by Myles Hobdy, including Domain Doctor, Tapestree, and an infrastructure lab spanning software, systems, and cloud.',
  path: '/work',
});

export default function Work() {
  return (
    <div className="shell work-page">
      <WorkIntro />
      <WorkGallery projects={projects} />
    </div>
  );
}
