'use client';

import { useRef } from 'react';
import type { PointerEvent } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { HeroOrbit } from '@/components/hero-orbit';

/**
 * Keep the planet still. Only instrumentation and light respond gently to pointer input.
 * The SVG's own orbital animation remains CSS-driven.
 */
export function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const x = useSpring(px, { stiffness: 38, damping: 25, mass: 0.9 });
  const y = useSpring(py, { stiffness: 38, damping: 25, mass: 0.9 });

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduced || event.pointerType === 'touch' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set(((event.clientX - rect.left) / rect.width - 0.5) * 12);
    py.set(((event.clientY - rect.top) / rect.height - 0.5) * 12);
  }
  function reset() { px.set(0); py.set(0); }

  return (
    <div ref={ref} className="hero-art hero-scene" onPointerMove={onPointerMove} onPointerLeave={reset}>
      <div aria-hidden="true" className="hero-ambient-glow" />
      <motion.div className="hero-instrument" style={reduced ? undefined : { x, y }}>
        <HeroOrbit />
      </motion.div>
    </div>
  );
}
