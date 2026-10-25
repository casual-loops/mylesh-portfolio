import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function CaseStudyBackLink() {
  return <Link href="/work" className="dd-back"><ArrowLeft size={16} aria-hidden="true" /> All work</Link>;
}

export function CaseStudySectionLabel({ index, title }: { index: string; title: string }) {
  return <div className="dd-section-heading"><span>{index} <b>//</b></span> {title}</div>;
}

export function CaseStudyNavigation({ sections, className = '' }: {
  sections: readonly { id: string; label: string }[];
  className?: string;
}) {
  return (
    <nav className={`dd-section-nav${className ? ` ${className}` : ''}`} aria-label="Case study sections">
      {sections.map((section, index) => (
        <a href={`#${section.id}`} key={section.id}>
          <span>{String(index + 1).padStart(2, '0')} //</span> {section.label}
        </a>
      ))}
    </nav>
  );
}
