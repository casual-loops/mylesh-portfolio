import { ArrowUpRight, Download } from 'lucide-react';

export function ExperienceIntro() {
  return (
      <header className="experience-overview">
        <p className="eyebrow">04 <span className="eyebrow-divider">//</span> EXPERIENCE</p>
        <h1>Different roles.<br /><span>One connected perspective.</span></h1>
        <p>My path through operations, service delivery, reporting, and systems administration has taught me to look beyond individual problems and understand the technology, people, and processes surrounding them.</p>
        <a className="experience-resume-link" href="/Myles-Hobdy-Resume.pdf" download="Myles-Hobdy-Resume.pdf"><Download size={18} aria-hidden="true" /> Download résumé <ArrowUpRight size={16} aria-hidden="true" /></a>
      </header>
  );
}
