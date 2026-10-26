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

const SCROLL_SPEED = 44; // pixels per second; continuous rather than timed card jumps

export function CertificationCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const initializedRef = useRef(false);
  const interactionUntilRef = useRef(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

    function cycleWidth(): number {
      const first = track!.children[0] as HTMLElement | undefined;
      const secondSet = track!.children[credentials.length] as HTMLElement | undefined;
      return first && secondSet ? secondSet.offsetLeft - first.offsetLeft : 0;
    }

    function updateProgress(width: number) {
      if (!progressRef.current || width <= 0) return;
      const fraction = (((track!.scrollLeft % width) + width) % width) / width;
      progressRef.current.style.transform = `translateX(${fraction * 100}%)`;
    }

    // Three identical runs allow travel in either direction. We keep the
    // viewport on the middle copy and wrap by exactly one sequence width.
    function normalize(width: number) {
      if (width <= 0) return;
      if (track!.scrollLeft >= width * 2) track!.scrollLeft -= width;
      if (track!.scrollLeft < width) track!.scrollLeft += width;
    }

    const initialWidth = cycleWidth();
    if (!initializedRef.current && initialWidth > 0) {
      track.scrollLeft = initialWidth;
      initializedRef.current = true;
    }

    let frame = 0;
    let previousTime = 0;
    function animate(timestamp: number) {
      const elapsed = previousTime ? Math.min(timestamp - previousTime, 64) : 0;
      previousTime = timestamp;
      const width = cycleWidth();
      if (width > 0) {
        normalize(width);
        if (!paused && !motionPreference.matches && !document.hidden && timestamp >= interactionUntilRef.current) {
          track!.scrollLeft += (elapsed / 1000) * SCROLL_SPEED;
          normalize(width);
        }
        updateProgress(width);
      }
      frame = window.requestAnimationFrame(animate);
    }
    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [paused]);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.credential-card');
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    interactionUntilRef.current = performance.now() + 1400;
    track.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: 'smooth' });
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
        className="credential-track credential-track-flow"
        ref={trackRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => { interactionUntilRef.current = performance.now() + 1800; setPaused(false); }}
        tabIndex={0}
        role="region"
        aria-label="Certifications, continuously scrolling. Pause by hovering or focusing; use the arrow buttons to browse."
      >
        {[0, 1, 2].flatMap(copy => credentials.map((credential, index) => (
          <article
            key={`${copy}-${credential.short}`}
            className={`credential-card credential-${credential.color}`}
            aria-hidden={copy !== 1}
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
      <div className="credential-progress" aria-hidden="true"><span ref={progressRef} /></div>
    </div>
  );
}
