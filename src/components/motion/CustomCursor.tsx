"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/** Desktop-only custom cursor with a magnetic hover state. Inert on touch devices and under prefers-reduced-motion. */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 28, stiffness: 320, mass: 0.5 });
  const springY = useSpring(cursorY, { damping: 28, stiffness: 320, mass: 0.5 });

  useEffect(() => {
    const canHover = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const shouldEnable = canHover && !reducedMotion;
    setEnabled(shouldEnable);

    if (shouldEnable) {
      document.documentElement.classList.add('custom-cursor-active');
    }
    return () => document.documentElement.classList.remove('custom-cursor-active');
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, [data-cursor-hover]'));
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [enabled, cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-[200] mix-blend-difference"
      style={{ x: springX, y: springY }}
      animate={{ scale: isHovering ? 2.4 : 1 }}
      transition={{ scale: { duration: 0.2, ease: 'easeOut' } }}
    />
  );
}
