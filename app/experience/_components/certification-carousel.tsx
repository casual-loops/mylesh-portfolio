'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const credentials = [
  { title: 'Microsoft Certified: Azure Fundamentals', short: 'AZ-900', issuer: 'Microsoft', color: 'blue', badge: '/images/azure-fundamentals.png' },
  { title: 'Google Workspace Administrator Associate', short: 'Workspace', issuer: 'Google', color: 'red', badge: '/images/google-workspace.png' },
  { title: 'ITIL 4 Foundation', short: 'ITIL 4', issuer: 'PeopleCert', color: 'ochre', badge: '/images/itil.png' },
  { title: 'Certified Knowledge Manager', short: 'CKM', issuer: 'KM Institute', color: 'blue', badge: '/images/ckm.png' },
  { title: 'Certified Scrum Master', short: 'CSM', issuer: 'Scrum Alliance', color: 'red', badge: '/images/sa-csm-600.png' },
  { title: 'Six Sigma Green Belt', short: 'SSGB', issuer: 'GLSS', color: 'ochre', badge: '/images/LSSGB-Badge-00-GB-Certification-v2.webp' },
];

const SPEED = 85; // pixels per second, continuously

export function CertificationCarousel() {
  const stripRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const offsetRef = useRef(0);
  const [focused, setFocused] = useState(false);
  const [touching, setTouching] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Honor OS motion preference, including changes while the page is open.
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    let frame = 0;
    let last = 0;

    function draw() {
      if (!strip) return;
      const first = strip.children[0] as HTMLElement | undefined;
      const duplicate = strip.children[credentials.length] as HTMLElement | undefined;
      if (!first || !duplicate) return;

      const cycle = duplicate.offsetLeft - first.offsetLeft;
      if (cycle <= 0) return;

      // Normalize only the hidden, identical copy of the cards.
      offsetRef.current = ((offsetRef.current % cycle) + cycle) % cycle;
      strip.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      if (progressRef.current) {
        progressRef.current.style.transform = `translateX(${(offsetRef.current / cycle) * 100}%)`;
      }
    }

    function tick(now: number) {
      const dt = last ? Math.min((now - last) / 1000, 0.06) : 0;
      last = now;
      if (!focused && !touching && !reducedMotion && !document.hidden) {
        offsetRef.current += dt * SPEED;
      }
      draw();
      frame = window.requestAnimationFrame(tick);
    }

    draw();
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [focused, touching, reducedMotion]);

  function move(direction: -1 | 1) {
    const strip = stripRef.current;
    if (!strip) return;
    const first = strip.children[0] as HTMLElement | undefined;
    const second = strip.children[1] as HTMLElement | undefined;
    if (!first || !second) return;
    const step = second.offsetLeft - first.offsetLeft;
    offsetRef.current += direction * step;
    const duplicate = strip.children[credentials.length] as HTMLElement | undefined;
    const cycle = duplicate ? duplicate.offsetLeft - first.offsetLeft : 0;
    if (cycle > 0) offsetRef.current = ((offsetRef.current % cycle) + cycle) % cycle;
    strip.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
  }

  return (
    <div className="credential-carousel">
      <div className="credential-carousel-controls">
        <p>Professional credentials <span>//</span> {String(credentials.length).padStart(2, '0')}</p>
        <div className="credential-arrows">
          <button type="button" onClick={() => move(-1)} aria-label="Scroll certifications left"><ArrowLeft size={19} /></button>
          <button type="button" onClick={() => move(1)} aria-label="Scroll certifications right"><ArrowRight size={19} /></button>
        </div>
      </div>
      <div
        className="credential-track credential-track-marquee"
        onFocus={() => setFocused(true)}
        onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
        onTouchStart={() => setTouching(true)}
        onTouchEnd={() => setTouching(false)}
        onTouchCancel={() => setTouching(false)}
        role="region"
        aria-label="Certifications, automatically moving horizontally. Use the arrow buttons to navigate."
      >
        <div className="credential-marquee-strip" ref={stripRef}>
          {[0, 1].flatMap(copy => credentials.map((credential, index) => (
            <article
              key={`${copy}-${credential.short}`}
              className={`credential-card credential-${credential.color}`}
              aria-hidden={copy === 1}
            >
              <div className="credential-card-top"><span>{String(index + 1).padStart(2, '0')} //</span><span className="credential-code">{credential.short}</span></div>
              <div className="credential-card-body">
                <div className="credential-badge-wrap"><Image src={credential.badge} alt={`${credential.title} certification badge`} width={128} height={128} className="credential-badge" /></div>
                <h3>{credential.title}</h3>
              </div>
              <div className="credential-issuer">{credential.issuer}</div>
            </article>
          )))}
        </div>
      </div>
      <div className="credential-progress" aria-hidden="true"><span ref={progressRef} /></div>
    </div>
  );
}
