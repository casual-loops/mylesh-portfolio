import { pageMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects } from '@/content/site';
import DomainDoctorCaseStudy from './_components/domain-doctor-case-study';
import TapestreeCaseStudy from './_components/tapestree-case-study';
import InfrastructureLabCaseStudy from './_components/infrastructure-lab-case-study';

type ProjectParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectParams): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) return { title: 'Project not found' };
  return pageMetadata({ title: project.name, description: project.summary, path: `/work/${project.slug}` });
}

export default async function ProjectDetail({ params }: ProjectParams) {
  const { slug } = await params;
  if (!projects.some(project => project.slug === slug)) notFound();

  switch (slug) {
    case 'domain-doctor':
      return <DomainDoctorCaseStudy />;
    case 'tapestree':
      return <TapestreeCaseStudy />;
    case 'infrastructure-lab':
      return <InfrastructureLabCaseStudy />;
    default:
      notFound();
  }
}
