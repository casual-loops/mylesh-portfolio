import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Myles Hobdy | Systems, Software & Cloud Engineering';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '68px 78px',
          background: '#050506',
          color: '#E7E9EE',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ display: 'flex', width: 42, height: 42, borderRadius: 42, border: '2px solid #76A9C6', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ display: 'flex', width: 8, height: 8, borderRadius: 8, background: '#D6A34F' }} />
          </div>
          <span style={{ fontSize: 22, letterSpacing: 7, fontWeight: 600 }}>MYLES HOBDY</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 900 }}>
          <span style={{ fontSize: 17, color: '#D6A34F', letterSpacing: 5 }}>ENGINEERING PORTFOLIO // 2026</span>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 72, lineHeight: 1.11, fontWeight: 400, letterSpacing: -3 }}>
            <span>Curious about how it works.</span>
            <span style={{ color: '#9FB8CB' }}>Driven to build it better.</span>
          </div>
          <span style={{ marginTop: 10, fontSize: 23, color: '#B4C0CC' }}>Systems & Infrastructure / Software / Cloud & Platforms</span>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', borderTop: '1px solid #303941', paddingTop: 22 }}>
          <span style={{ fontSize: 18, color: '#A0B7C7' }}>SELECTED WORK · EXPERIENCE · ABOUT</span>
          <span style={{ fontSize: 19, color: '#D6A34F' }}>mylesh.dev</span>
        </div>

        <div style={{ display: 'flex', position: 'absolute', width: 310, height: 310, top: 95, right: 76, borderRadius: 310, border: '2px solid #76A9C6', opacity: 0.1 }} />
      </div>
    ),
    size,
  );
}
