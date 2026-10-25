import Link from 'next/link';
import { ArrowUpRight, Compass, Orbit, Wrench } from 'lucide-react';
import { Reveal } from '@/components/reveal';

export const metadata = { title: 'About' };

const interests = [
  { number: '01', title: 'Systems & infrastructure', detail: 'The foundations, dependencies, and decisions that keep everything connected.' },
  { number: '02', title: 'Software engineering', detail: 'Turning an idea into something people can actually use.' },
  { number: '03', title: 'Cloud & platforms', detail: 'Understanding how applications are deployed, operated, and improved.' },
];

export default function About() {
  return (
    <div className="shell about-page">
      <header className="about-intro avatar-header about-avatar-header">
        <p className="eyebrow about-kicker">03 <span className="eyebrow-divider">//</span> ABOUT</p>
        <div className="about-intro-grid">
          <h1>Always curious.<br /><span>Usually building.</span></h1>
          <div className="about-intro-aside">
            <span className="about-aside-rule" aria-hidden="true" />
            <p>I'm Myles. I spend a lot of time wondering what's happening beneath the surface, whether that's inside an application, across a network, or somewhere much farther out.</p>
            <Link href="/work" className="about-inline-link">See what I'm building <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
        <img className="page-avatar page-avatar-about" src="/images/avatars/about-standing.webp" alt="Cartoon illustration of Myles standing casually" width={331} height={993} />
      </header>

      <Reveal className="about-story">
        <div className="about-section-label"><span>01 <b>//</b></span> THE WAY I THINK</div>
        <div className="about-story-grid">
          <div className="about-story-heading">
            <h2>I want to understand the whole thing.</h2>
            <div className="about-spark" aria-hidden="true"><span /><span /><span /></div>
          </div>
          <div className="about-story-copy">
            <p>I've never been especially interested in stopping at “it works.” I want to know <em>why</em> it works, what happens when it doesn't, and what it depends on.</p>
            <p>That instinct has taken me from troubleshooting technology to administering systems, building web applications, and experimenting with the infrastructure behind them. Each discipline gives me another way to understand the same bigger picture.</p>
            <p>What keeps me going is the possibility of making something complicated feel simpler for the person who uses it.</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="about-intersection">
        <div className="about-section-label"><span>02 <b>//</b></span> CONNECTING THE DOTS</div>
        <div className="about-intersection-grid">
          <div className="about-intersection-copy">
            <p className="about-small-label">NOT ONE DISCIPLINE. A CONNECTED SYSTEM.</p>
            <h2>The interesting work happens <span>between the layers.</span></h2>
            <p>I enjoy moving between the infrastructure that supports a product, the software that makes it useful, and the experience of the person on the other end.</p>
          </div>
          <div className="about-disciplines">
            {interests.map(item => (
              <div className="about-discipline" key={item.number}>
                <span className="about-discipline-index">{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.detail}</p></div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="about-beyond">
        <div className="about-section-label"><span>03 <b>//</b></span> OFF THE CLOCK</div>
        <div className="about-beyond-grid">
          <div className="about-beyond-title">
            <span className="about-beyond-stars" aria-hidden="true">✦ <span>·</span> ✧</span>
            <h2>There's a universe beyond the screen.</h2>
          </div>
          <div className="about-beyond-content">
            <p>Space and science fiction have a particular hold on my imagination. I like the questions they raise about what we understand, what we haven't discovered, and what might be possible next.</p>
            <p>Closer to home, I like learning by building. My home lab gives me a place to experiment with virtualization, networking, and self-hosted services, then follow whatever question comes next.</p>
            <div className="about-interest-row" aria-label="Personal interests">
              <span><Orbit size={17} aria-hidden="true" /> Space & sci-fi</span>
              <span><Wrench size={17} aria-hidden="true" /> Hands-on projects</span>
              <span><Compass size={17} aria-hidden="true" /> Exploring what's next</span>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="about-final">
        <span className="about-final-index">04 <b>//</b> STILL FIGURING THINGS OUT</span>
        <p>There's always something else <span>worth understanding.</span></p>
        <div className="about-final-links">
          <Link href="/work">Explore my work <ArrowUpRight size={18} aria-hidden="true" /></Link>
          <Link href="/experience">My experience <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </Reveal>
    </div>
  );
}
