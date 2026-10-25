'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const credentials = [
  { title: 'Microsoft Certified: Azure Fundamentals', short: 'AZ-900', issuer: 'Microsoft', color: 'blue', badge: '/images/azure-fundamentals.png' },
  { title: 'Google Workspace Administrator Associate', short: 'Workspace', issuer: 'Google', color: 'red', badge: '/images/google-workspace.png' },
  { title: 'ITIL 4 Foundation', short: 'ITIL 4', issuer: 'PeopleCert', color: 'ochre', badge: '/images/itil.png' },
  { title: 'Certified Knowledge Manager', short: 'CKM', issuer: 'KM Institute', color: 'blue', badge: '/images/ckm.png' },
  { title: 'Certified Scrum Master', short: 'CSM', issuer: 'Scrum Alliance', color: 'red', badge: '/images/sa-csm-600.png' },
  { title: 'Six Sigma Green Belt', short: 'SSGB', issuer: 'Process improvement', color: 'ochre', badge: '/images/SSO-Green-Belt-Badge.webp' },
];

export function CertificationCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.credential-card');
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: 'smooth' });
  }

  function updatePosition() {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setPosition(max <= 1 ? 0 : Math.min(1, Math.max(0, track.scrollLeft / max)));
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
      <div className="credential-track" ref={trackRef} onScroll={updatePosition} tabIndex={0} role="region" aria-label="Certifications, scroll horizontally to browse">
        {credentials.map((credential, index) => (
          <article key={credential.short} className={`credential-card credential-${credential.color}`}>
            <div className="credential-card-top"><span>{String(index + 1).padStart(2, '0')} //</span><span className="credential-code">{credential.short}</span></div>
            <div className="credential-card-body">
              <div className="credential-badge-wrap"><Image src={credential.badge} alt={`${credential.title} certification badge`} width={128} height={128} className="credential-badge" /></div>
              <h3>{credential.title}</h3>
            </div>
            <div className="credential-issuer">{credential.issuer}</div>
          </article>
        ))}
      </div>
      <div className="credential-progress" aria-hidden="true"><span style={{ transform: `translateX(${position * 100}%)` }} /></div>
    </div>
  );
}
