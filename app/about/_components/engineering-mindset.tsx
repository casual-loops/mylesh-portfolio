import { Reveal } from '@/components/reveal';

const disciplines = [
  { number: '01', title: 'Systems & infrastructure', detail: 'Understanding the foundations and the connections that keep technology working.' },
  { number: '02', title: 'Software engineering', detail: 'Building useful tools that make complicated things easier for people.' },
  { number: '03', title: 'Cloud & platforms', detail: 'Exploring how applications are deployed, operated, and improved.' },
];

export function EngineeringMindset() {
  return (
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
  );
}
