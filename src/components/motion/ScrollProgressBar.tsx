"use client";

import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin progress bar pinned to the top of the viewport, tracking scroll depth. */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[100] pointer-events-none"
      aria-hidden
    />
  );
}
