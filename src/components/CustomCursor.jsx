import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const isCoarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    if (isCoarse) setEnabled(false);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 12}px, ${ringY - 12}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onHover = (e) => {
      const isInteractive = e.target.closest('a, button, [role="button"], .cursor-hover');
      if (isInteractive) {
        ringRef.current && ringRef.current.classList.add('scale-125');
      } else {
        ringRef.current && ringRef.current.classList.remove('scale-125');
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onHover);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onHover);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 mix-blend-difference">
      <div
        ref={ringRef}
        className="w-6 h-6 rounded-full border border-white/80 transition-transform duration-150 will-change-transform"
      />
      <div ref={dotRef} className="w-2 h-2 rounded-full bg-white/90 absolute left-0 top-0" />
    </div>
  );
}
