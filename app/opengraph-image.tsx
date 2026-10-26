import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Myles Hobdy. Curious about how it works. Driven to build it better. Systems, software, and cloud engineering.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          padding: '64px 72px 56px',
          overflow: 'hidden',
          backgroundColor: '#050506',
          color: '#F2F3F4',
          fontFamily: 'sans-serif',
        }}
      >
        {/* A compact identity at the top, sized to remain legible in link cards. */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              width: 40,
              height: 40,
              border: '3px solid #76A9C6',
              borderRadius: 999,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', width: 10, height: 10, borderRadius: 999, backgroundColor: '#D6A34F' }} />
          </div>
          <span style={{ fontSize: 29, fontWeight: 700, letterSpacing: 2.5 }}>MYLES HOBDY</span>
        </div>

        {/* Primary copy deliberately occupies a clear area away from the orbit. */}
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 85, gap: 12, zIndex: 1 }}>
          <span style={{ fontSize: 25, fontWeight: 600, letterSpacing: 3, color: '#D6A34F' }}>
            ENGINEERING PORTFOLIO
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, fontSize: 66, fontWeight: 700, letterSpacing: -2 }}>
            <span>Curious how</span>
            <span>things work.</span>
            <span style={{ color: '#9FC3DB' }}>Driven to build.</span>
          </div>
        </div>

        {/* Strong and simple brand motif, not a low-contrast decorative outline. */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            right: 64,
            top: 164,
            width: 362,
            height: 362,
            border: '4px solid #557E9B',
            borderRadius: 999,
            transform: 'rotate(-25deg) scaleX(0.77)',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: 'flex', width: 112, height: 112, borderRadius: 999, backgroundColor: '#D6A34F' }} />
          <div style={{ display: 'flex', position: 'absolute', top: 23, right: 46, width: 25, height: 25, borderRadius: 999, backgroundColor: '#D56668' }} />
          <div style={{ display: 'flex', position: 'absolute', bottom: 22, left: 40, width: 18, height: 18, borderRadius: 999, backgroundColor: '#9FC3DB' }} />
        </div>

        <div style={{ display: 'flex', marginTop: 'auto', paddingTop: 22, borderTop: '2px solid #384450', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
          <span style={{ fontSize: 25, color: '#C1CDD7' }}>Systems  /  Software  /  Cloud</span>
          <span style={{ fontSize: 27, color: '#D6A34F', fontWeight: 700 }}>mylesh.dev</span>
        </div>
      </div>
    ),
    size,
  );
}
