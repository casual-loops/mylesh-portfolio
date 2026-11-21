"use client";

import { useEffect, useRef, useState } from "react";
import type { MaintenanceEvent } from "@/content/operations/schema";

/**
 * The geometry is a categorical illustration only.
 * It intentionally encodes no host IDs, routes, addresses or real dependencies.
 */
export default function InfrastructureScene({ event }: { event: MaintenanceEvent }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<"loading" | "3d" | "fallback">("loading");
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !canvas.getContext("webgl2") && !canvas.getContext("webgl")) {
      setMode("fallback");
      return;
    }

    let active = true;
    let frame = 0;
    let cleanup: (() => void) | undefined;

    async function initialize() {
      try {
        const THREE = await import("three");
        if (!active || !canvas) return;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
        camera.position.set(0, 3.5, 10);
        camera.lookAt(0, 0, 0);
        const root = new THREE.Group();
        scene.add(root);

        const materials = [
          new THREE.MeshBasicMaterial({ color: 0x89c7e8 }),
          new THREE.MeshBasicMaterial({ color: 0xd3ad75 }),
          new THREE.MeshBasicMaterial({ color: 0xaeb5e5 }),
        ];
        const counts = [event.systems.hypervisors, event.systems.virtual_machines, event.systems.containers];
        const radii = [1.4, 2.4, 3.45];
        const nodeGeometry = new THREE.SphereGeometry(0.11, 12, 10);
        const ringGeometry: THREE.BufferGeometry[] = [];

        counts.forEach((count, group) => {
          const radius = radii[group];
          const points: THREE.Vector3[] = [];
          for (let i = 0; i <= 120; i++) {
            const angle = i / 120 * Math.PI * 2;
            points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
          }
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          ringGeometry.push(geometry);
          const ring = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: materials[group].color, transparent: true, opacity: .3 }));
          root.add(ring);
          for (let i = 0; i < Math.min(count, 48); i++) {
            const angle = (i / Math.max(1, count)) * Math.PI * 2 + group * 0.35;
            const node = new THREE.Mesh(nodeGeometry, materials[group]);
            node.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
            root.add(node);
          }
        });

        const resize = () => {
          if (!canvas) return;
          const bounds = canvas.getBoundingClientRect();
          const width = Math.max(1, Math.floor(bounds.width));
          const height = Math.max(1, Math.floor(bounds.height));
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.render(scene, camera);
        };
        const observer = new ResizeObserver(resize);
        observer.observe(canvas);
        let dragging = false;
        let previousX = 0;
        const down = (ev: PointerEvent) => { dragging = true; previousX = ev.clientX; canvas.setPointerCapture(ev.pointerId); };
        const move = (ev: PointerEvent) => {
          if (!dragging) return;
          root.rotation.y += (ev.clientX - previousX) * 0.008;
          previousX = ev.clientX;
          renderer.render(scene, camera);
        };
        const up = () => { dragging = false; };
        canvas.addEventListener("pointerdown", down);
        canvas.addEventListener("pointermove", move);
        canvas.addEventListener("pointerup", up);
        canvas.addEventListener("pointercancel", up);
        const render = () => {
          if (!active) return;
          if (motion && !dragging) root.rotation.y += 0.0017;
          renderer.render(scene, camera);
          if (motion) frame = window.requestAnimationFrame(render);
        };
        resize();
        render();
        setMode("3d");
        cleanup = () => {
          window.cancelAnimationFrame(frame);
          observer.disconnect();
          canvas.removeEventListener("pointerdown", down);
          canvas.removeEventListener("pointermove", move);
          canvas.removeEventListener("pointerup", up);
          canvas.removeEventListener("pointercancel", up);
          root.traverse((object) => {
            if (object instanceof THREE.Line) (object.material as THREE.Material).dispose();
          });
          ringGeometry.forEach((g) => g.dispose());
          nodeGeometry.dispose();
          materials.forEach((m) => m.dispose());
          renderer.dispose();
        };
      } catch {
        if (active) setMode("fallback");
      }
    }
    void initialize();
    return () => { active = false; cleanup?.(); window.cancelAnimationFrame(frame); };
  }, [event, motion]);

  return (
    <section className="lab-orbit-section" aria-label="Abstract categories of infrastructure maintained">
      <div className="lab-orbit-head">
        <div><span>ABSTRACT CATEGORY VIEW</span><h4>Maintenance footprint</h4></div>
        {mode === "3d" && (
          <button className="lab-motion-toggle" type="button" aria-pressed={motion} onClick={() => setMotion((value) => !value)}>
            {motion ? "Pause rotation" : "Rotate scene"}
          </button>
        )}
      </div>
      <p className="lab-orbit-note">Illustrative orbital grouping, not actual topology or host relationships. Drag the scene to rotate.</p>
      <div className="lab-orbit-frame">
        <canvas ref={canvasRef} className="lab-orbit-canvas" aria-hidden="true" style={{ display: mode === "fallback" ? "none" : "block" }} />
        {mode !== "3d" && (
          <div className="lab-orbit-fallback" role="img" aria-label={`Abstract infrastructure categories: ${event.systems.hypervisors} hypervisors, ${event.systems.virtual_machines} virtual machines and ${event.systems.containers} containers`}>
            <div className="lab-orbit-fallback-rings" aria-hidden="true"><i /><i /><i /><b /></div>
            <span>{mode === "loading" ? "Preparing visualization" : "Static category visualization"}</span>
          </div>
        )}
      </div>
      <ul className="lab-orbit-legend">
        <li><i className="lab-orbit-dot lab-orbit-hv" />{event.systems.hypervisors} hypervisors</li>
        <li><i className="lab-orbit-dot lab-orbit-vm" />{event.systems.virtual_machines} virtual machines</li>
        <li><i className="lab-orbit-dot lab-orbit-ct" />{event.systems.containers} containers</li>
      </ul>
    </section>
  );
}
