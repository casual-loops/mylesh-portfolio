'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ProjectCard } from '@/components/project-card';
import type { Project } from '@/content/site';

const filters = [
  { label: 'All work', value: 'all' },
  { label: 'Software', value: 'software' },
  { label: 'Infrastructure', value: 'infrastructure' },
  { label: 'Cloud', value: 'cloud' },
] as const;

type Filter = (typeof filters)[number]['value'];

function matches(project: Project, filter: Filter) {
  if (filter === 'all') return true;
  if (filter === 'infrastructure') return project.areas.some(area => ['Infrastructure', 'Systems', 'Networking'].includes(area));
  return project.areas.some(area => area.toLowerCase() === filter);
}

export function WorkGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>('all');
  const reduceMotion = useReducedMotion();
  const visible = projects.map((project, index) => ({ project, index }))
    .filter(({ project }) => matches(project, filter));

  return (
    <section className="work-gallery" aria-label="Engineering project archive">
      <div className="work-gallery-toolbar">
        <div className="work-gallery-heading"><span className="work-index">01 <span>//</span></span><h2>Project archive</h2><span className="work-count">{String(visible.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span></div>
        <div className="work-filters" role="group" aria-label="Filter projects by discipline">
          {filters.map(option => (
            <button key={option.value} type="button"
              aria-pressed={filter === option.value}
              className={`work-filter${filter === option.value ? ' is-active' : ''}`}
              onClick={() => setFilter(option.value)}>
              {option.label}
              {filter === option.value && <motion.span layoutId="work-filter-accent" className="work-filter-accent" transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 34 }} />}
            </button>
          ))}
        </div>
      </div>
      <motion.div layout={!reduceMotion} className="work-gallery-grid">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map(({ project, index }, position) => (
            <motion.div
              layout={!reduceMotion}
              key={project.slug}
              className={`work-gallery-item${filter === 'all' && position === 0 ? ' work-featured' : ''}`}
              initial={reduceMotion ? false : { opacity: 0, y: 16, scale: .985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: .985 }}
              transition={{ duration: reduceMotion ? 0 : .32, ease: 'easeOut' }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <p className="work-archive-note"><span aria-hidden="true">✳</span> A mix of shipped tools, work in progress, and the infrastructure I experiment with.</p>
    </section>
  );
}
