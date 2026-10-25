import { Reveal } from '@/components/reveal';

export function CurrentFocus() {
  return (
      <section id="current-focus" className="experience-learning" aria-labelledby="experience-learning-heading">
        <div className="experience-history-heading">
          <h2 id="experience-learning-heading"><span>05 <b>//</b></span> WHAT I'M LEARNING</h2>
          <span>CURRENT FOCUS · ALWAYS EVOLVING</span>
        </div>
        <Reveal className="experience-learning-intro">
          <div>
            <span className="experience-learning-overline">THE NEXT SET OF QUESTIONS</span>
            <h3>Still learning. <em>Still building.</em></h3>
          </div>
          <p>I'm working toward deeper engineering skills across the full stack, from the network carrying the packets to the cloud services and software running on top of it. Here's where I'm putting my study and lab time right now.</p>
        </Reveal>
        <div className="experience-learning-list">
          <Reveal className="experience-learning-row">
            <div className="experience-learning-meta"><span>01 //</span><strong>NETWORKING</strong></div>
            <div className="experience-learning-detail">
              <h4>Understanding how the network really works.</h4>
              <p>Working through routing, switching, addressing, and troubleshooting, with CCNA preparation and practical experiments on my home network.</p>
              <div className="experience-learning-topics"><span>CCNA</span><span>Routing & switching</span><span>Network labs</span></div>
            </div>
          </Reveal>
          <Reveal className="experience-learning-row">
            <div className="experience-learning-meta"><span>02 //</span><strong>CLOUD & PLATFORMS</strong></div>
            <div className="experience-learning-detail">
              <h4>Going deeper into Azure infrastructure.</h4>
              <p>Building on Azure fundamentals with hands-on work around compute, networking, identity, access controls, and deploying applications as managed cloud services.</p>
              <div className="experience-learning-topics"><span>Azure administration</span><span>Identity & access</span><span>Cloud deployment</span></div>
            </div>
          </Reveal>
          <Reveal className="experience-learning-row">
            <div className="experience-learning-meta"><span>03 //</span><strong>AI & SOFTWARE</strong></div>
            <div className="experience-learning-detail">
              <h4>Learning to engineer AI-backed applications.</h4>
              <p>Strengthening Python, API design, packaging, and container workflows while exploring how AI services fit into reliable, maintainable application platforms.</p>
              <div className="experience-learning-topics"><span>Python</span><span>AI platform engineering</span><span>APIs & containers</span></div>
            </div>
          </Reveal>
          <Reveal className="experience-learning-row">
            <div className="experience-learning-meta"><span>04 //</span><strong>AUTOMATION</strong></div>
            <div className="experience-learning-detail">
              <h4>Making routine operations more repeatable.</h4>
              <p>Improving my PowerShell and scripting skills through the systems tasks I encounter, with an emphasis on useful automation, safer changes, and observable results.</p>
              <div className="experience-learning-topics"><span>PowerShell</span><span>Scripting</span><span>Operational tooling</span></div>
            </div>
          </Reveal>
        </div>
      </section>
  );
}
