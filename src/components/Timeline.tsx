"use client";

import { motion, useReducedMotion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

export interface TimelineEntry {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  href?: string;
}

/** Animated vertical timeline used for education, certifications and experience in About. */
export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative pl-1">
      <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border/40 to-transparent" aria-hidden />
      <ul className="space-y-8">
        {entries.map((entry, idx) => {
          const body = (
            <div className="flex gap-4 items-start relative">
              <span className="mt-0.5 z-10 flex items-center justify-center w-6 h-6 rounded-full bg-background border border-primary/40 text-primary shrink-0">
                <entry.icon className="w-3.5 h-3.5" />
              </span>
              <div>
                <h4 className="text-[13px] font-bold text-white">{entry.title}</h4>
                <p className="text-[12px] text-muted-foreground mt-1">{entry.subtitle}</p>
              </div>
            </div>
          );

          return (
            <motion.li
              key={idx}
              initial={shouldReduceMotion ? undefined : { opacity: 0, x: -16 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {entry.href ? (
                <a href={entry.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  {body}
                </a>
              ) : (
                body
              )}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
