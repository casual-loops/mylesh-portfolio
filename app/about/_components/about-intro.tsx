import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function AboutIntro() {
  return (
      <header className="about-v2-intro">
        <p className="eyebrow">03 <span className="eyebrow-divider">//</span> ABOUT</p>
        <div className="about-v2-intro-grid">
          <h1>Always curious. <span>Usually building.</span></h1>
          <div>
            <p>I'm Myles. I like getting beneath the surface of technology, asking why things work, and finding ways to make them work better.</p>
            <Link href="/work" className="about-inline-link">See what I'm building <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </header>
  );
}
