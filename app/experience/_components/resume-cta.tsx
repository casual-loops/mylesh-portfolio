import { ArrowUpRight, Download } from 'lucide-react';

export function ResumeCTA() {
  return (
      <div id="resume" className="experience-next">
        <p>Prefer the concise version? Get my two-page résumé.</p>
        <a href="/Myles-Hobdy-Resume.pdf" download="Myles-Hobdy-Resume.pdf"><Download size={17} aria-hidden="true" /> Download résumé <ArrowUpRight size={18} aria-hidden="true" /></a>
      </div>
  );
}
