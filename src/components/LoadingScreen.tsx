"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

/** Brief first-load screen shown once per browser session, skipped entirely under prefers-reduced-motion. */
export function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (sessionStorage.getItem('loading-screen-shown')) return;

    sessionStorage.setItem('loading-screen-shown', '1');
    setVisible(true);

    const start = performance.now();
    const DURATION = 850;
    let rafId: number;

    const tick = (time: number) => {
      const pct = Math.min(100, Math.round(((time - start) / DURATION) * 100));
      setProgress(pct);
      if (pct < 100) {
        rafId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 200);
      }
    };
    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Adioumani Jean
          </span>
          <div className="w-40 h-[2px] bg-border/40 overflow-hidden rounded-full">
            <div className="h-full bg-primary transition-[width] duration-100 ease-linear" style={{ width: `${progress}%` }} />
          </div>
          <span className="mt-4 text-[10px] tabular-nums text-primary font-bold tracking-widest">{progress}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
