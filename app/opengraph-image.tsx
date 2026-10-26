import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Myles Hobdy engineering portfolio: Curious about how it works. Driven to build it better.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const stars: Array<[number, number, number, number]> = [
  [54, 172, 1, 0.3], [171, 63, 1.2, 0.4], [328, 82, 0.8, 0.25],
  [405, 144, 1, 0.3], [579, 48, 1.1, 0.35], [684, 136, 1.1, 0.3],
  [743, 69, 1.5, 0.5], [849, 112, 1, 0.35], [1082, 64, 1.1, 0.45],
  [1157, 155, 1.2, 0.5], [725, 479, 1.2, 0.3], [1134, 508, 1.2, 0.25],
  [781, 546, 1, 0.3], [610, 511, 0.9, 0.2], [1161, 389, 1.3, 0.3],
];

// Coordinates follow a single tilted ellipse centered on the planetary sphere.
// Using the same ellipse for the foreground and background arcs keeps the geometry coherent.
function orbitPoint(degrees: number): [number, number] {
  const angle = degrees * Math.PI / 180;
  const tilt = -25 * Math.PI / 180;
  const x = 242 * Math.cos(angle);
  const y = 112 * Math.sin(angle);
  return [972 + x * Math.cos(tilt) - y * Math.sin(tilt), 308 + x * Math.sin(tilt) + y * Math.cos(tilt)];
}

function orbitArc(start: number, end: number): string {
  const points: string[] = [];
  for (let angle = start; angle <= end; angle += 3) {
    const [x, y] = orbitPoint(angle);
    points.push(`${points.length ? 'L' : 'M'}${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  const [x, y] = orbitPoint(end);
  points.push(`L${x.toFixed(2)} ${y.toFixed(2)}`);
  return points.join(' ');
}

const ochreNode = orbitPoint(329);
const coralNode = orbitPoint(142);

function PlanetArtwork() {
  return (
    <svg
      width="1200"
      height="630"
      viewBox="0 0 1200 630"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      <defs>
        <radialGradient id="space-glow" cx="80%" cy="48%" r="70%">
          <stop offset="0%" stopColor="#1B3041" />
          <stop offset="50%" stopColor="#0B131F" />
          <stop offset="100%" stopColor="#050506" />
        </radialGradient>
        <radialGradient id="planet" cx="27%" cy="21%" r="85%">
          <stop offset="0%" stopColor="#B2CEDF" />
          <stop offset="27%" stopColor="#668AA4" />
          <stop offset="60%" stopColor="#2B4157" />
          <stop offset="100%" stopColor="#090E19" />
        </radialGradient>
        <linearGradient id="orbit-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6795B2" stopOpacity="0.18" />
          <stop offset="48%" stopColor="#B6D6E8" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#D6A34F" stopOpacity="0.42" />
        </linearGradient>
        <clipPath id="sphere-clip">
          <circle cx="972" cy="308" r="166" />
        </clipPath>
      </defs>

      <rect width="1200" height="630" fill="url(#space-glow)" />
      {stars.map(([x, y, radius, opacity], index) => (
        <circle key={index} cx={x} cy={y} r={radius} fill="#B4D1E2" opacity={opacity} />
      ))}

      {/* Faint navigation rings establish depth without competing with the copy. */}
      <circle cx="972" cy="308" r="231" fill="none" stroke="#6288A2" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 8" />
      <circle cx="972" cy="308" r="191" fill="none" stroke="#9DB7CB" strokeWidth="1" strokeOpacity="0.12" />

      {/* The full orbital path sits behind the sphere. */}
      <ellipse
        cx="972" cy="308" rx="242" ry="112"
        transform="rotate(-25 972 308)"
        fill="none" stroke="url(#orbit-stroke)" strokeWidth="2.5" strokeOpacity="0.73"
      />

      {/* Sphere and atmospheric rim. */}
      <circle cx="972" cy="308" r="174" fill="#76A9C6" opacity="0.065" />
      <circle cx="972" cy="308" r="166" fill="url(#planet)" />
      <g clipPath="url(#sphere-clip)" stroke="#C8E2EE" fill="none">
        <ellipse cx="972" cy="308" rx="63" ry="166" strokeWidth="1.5" strokeOpacity="0.17" />
        <ellipse cx="972" cy="308" rx="128" ry="166" strokeWidth="1.2" strokeOpacity="0.10" />
        <path d="M806 308 H1138" strokeWidth="1.3" strokeOpacity="0.12" />
        <path d="M825 245 Q972 283 1119 245" strokeWidth="1.3" strokeOpacity="0.12" />
        <path d="M825 371 Q972 333 1119 371" strokeWidth="1.3" strokeOpacity="0.12" />
        <path d="M865 197 Q972 230 1079 197" strokeWidth="1" strokeOpacity="0.07" />
        <path d="M865 419 Q972 386 1079 419" strokeWidth="1" strokeOpacity="0.07" />
      </g>
      <circle cx="972" cy="308" r="166" fill="none" stroke="#A7C9DC" strokeWidth="2" strokeOpacity="0.37" />

      {/* A short near-side arc adds dimensionality without drawing over the planet. */}
      <path d={orbitArc(18, 76)} fill="none" stroke="#B6D6E8" strokeWidth="2.8" strokeOpacity="0.75" strokeLinecap="round" />
      <circle cx={ochreNode[0]} cy={ochreNode[1]} r="6" fill="#D6A34F" />
      <circle cx={coralNode[0]} cy={coralNode[1]} r="4.5" fill="#D56668" />
    </svg>
  );
}

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative', display: 'flex', flexDirection: 'column',
          width: '100%', height: '100%', overflow: 'hidden',
          backgroundColor: '#050506', color: '#EDF2F6', fontFamily: 'sans-serif',
        }}
      >
        <PlanetArtwork />
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '58px 70px 46px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 36, height: 36, border: '2px solid #76A9C6', borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', width: 9, height: 9, borderRadius: 50, backgroundColor: '#D6A34F' }} />
            </div>
            <span style={{ fontSize: 26, fontWeight: 600, letterSpacing: 3 }}>MYLES HOBDY</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginTop: 91, gap: 10 }}>
            <span style={{ color: '#D6A34F', fontSize: 21, letterSpacing: 3.5, fontWeight: 600 }}>
              ENGINEERING PORTFOLIO
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: 55, fontWeight: 700, letterSpacing: -1.1, lineHeight: 1.13 }}>
              <span>Curious about</span>
              <span>how it works.</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: 55, fontWeight: 700, letterSpacing: -1.1, lineHeight: 1.13, color: '#A9C8DC', marginTop: 7 }}>
              <span>Driven to build</span>
              <span>it better.</span>
            </div>
          </div>

          <div style={{ display: 'flex', marginTop: 'auto', paddingTop: 18, borderTop: '1px solid #435669', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 21, color: '#C4D0DA', letterSpacing: 0.8 }}>SYSTEMS  /  SOFTWARE  /  CLOUD</span>
            <span style={{ fontSize: 24, color: '#D6A34F', fontWeight: 600 }}>mylesh.dev</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
