import Link from 'next/link';
import { ArrowUpRight, Compass, Orbit, Wrench, Gamepad2, BookOpen, Trees } from 'lucide-react';
import { Reveal } from '@/components/reveal';

export const metadata = { title: 'About' };

const disciplines = [
  { number: '01', title: 'Systems & infrastructure', detail: 'Understanding the foundations and the connections that keep technology working.' },
  { number: '02', title: 'Software engineering', detail: 'Building useful tools that make complicated things easier for people.' },
  { number: '03', title: 'Cloud & platforms', detail: 'Exploring how applications are deployed, operated, and improved.' },
];

export default function About() {
  return (
    <div className="shell about-page about-page-v2">
      <header className="about-v2-intro">
        <p className="eyebrow">03 <span className="eyebrow-divider">//</span> ABOUT</p>
        <div className="about-v2-intro-grid">
          <h1>Always curious.<br /><span>Usually building.</span></h1>
          <div>
            <p>I'm Myles. I like getting beneath the surface of technology, asking why things work, and finding ways to make them work better.</p>
            <Link href="/work" className="about-inline-link">See what I'm building <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </header>

      <Reveal className="about-v2-engineering">
        <div className="about-section-label"><span>01 <b>//</b></span> HOW I THINK & WORK</div>
        <div className="about-v2-engineering-grid">
          <div className="about-v2-mindset">
            <p className="about-small-label">THE MINDSET</p>
            <h2>I want to understand <em>the whole thing.</em></h2>
            <p>I've never been especially interested in stopping at “it works.” I want to know why, what it depends on, and what happens when it doesn't.</p>
            <p>That curiosity takes me across systems, software, and infrastructure. What matters most is turning what I learn into technology that's easier for people to use.</p>
          </div>
          <div className="about-v2-disciplines">
            <p className="about-small-label">CONNECTED DISCIPLINES</p>
            {disciplines.map(item => (
              <div className="about-v2-discipline" key={item.number}>
                <span>{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.detail}</p></div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="about-v2-personal">
        <div className="about-section-label"><span>02 <b>//</b></span> OFF THE CLOCK</div>
        <div className="about-v2-personal-layout">
          <div className="about-v2-personal-sidebar">
            <span className="about-v2-stars" aria-hidden="true">✦ · ✧</span>
            <h2>There's a universe <span>beyond the screen.</span></h2>
            <div className="about-v2-interests" aria-label="Things I enjoy">
              <span><Orbit size={16} aria-hidden="true" /> Space & sci-fi</span>
              <span><Wrench size={16} aria-hidden="true" /> Home lab</span>
              <span><BookOpen size={16} aria-hidden="true" /> Mathematics & physics</span>
              <span><Gamepad2 size={16} aria-hidden="true" /> Video games</span>
              <span><Trees size={16} aria-hidden="true" /> Lakes & trails</span>
              <span><Compass size={16} aria-hidden="true" /> Travel & cultures</span>
            </div>
          </div>
          <div className="about-v2-personal-copy">
            <p>Space and science fiction have a particular hold on my imagination. I love the questions they raise about what we understand, what we haven't discovered, and what might be possible next.</p>
            <p>Closer to home, I learn by building. My home lab is where I experiment with virtualization, networking, and self-hosted services, usually following one interesting question straight into another.</p>
            <p>When I'm not nerding out over technology, I'm probably studying mathematics or physics, playing a video game, or, when the Texas weather cooperates, exploring one of the many lakes and trails around the state.</p>
            <p>I'm a traveler at heart. I hope to see much more of the world someday, meet people whose lives look different from mine, and discover the experiences that connect us despite those differences.</p>
          </div>
        </div>
        <blockquote className="about-v2-reflection">
          <span className="about-v2-quote-mark" aria-hidden="true">“</span>
          I believe curiosity is one of our best responses to the negativity in the world. There's so much to learn, so much to appreciate, and something <em>extraordinary about the fact that we're here at all.</em>
        </blockquote>
      </Reveal>
    </div>
  );
}
