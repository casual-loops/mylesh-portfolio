import { CertificationCarousel } from './certification-carousel';

export function Certifications() {
  return (
      <section id="certifications" className="experience-certifications" aria-labelledby="experience-certifications-heading">
        <div className="experience-history-heading">
          <h2 id="experience-certifications-heading"><span>04 <b>//</b></span> CERTIFICATIONS</h2>
          <span>PROFESSIONAL CREDENTIALS</span>
        </div>
        <CertificationCarousel />
      </section>
  );
}
