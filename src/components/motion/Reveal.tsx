"use client";

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealVariant = 'fade' | 'up' | 'down' | 'left' | 'right' | 'blur' | 'zoom';

const EASE = [0.16, 1, 0.3, 1] as const;

const VARIANTS: Record<RevealVariant, Variants> = {
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  up: { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -32 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  blur: { hidden: { opacity: 0, filter: 'blur(12px)' }, visible: { opacity: 1, filter: 'blur(0px)' } },
  zoom: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
};

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

/** Scroll-triggered reveal for a single element. No-ops under prefers-reduced-motion. */
export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.3,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={VARIANTS[variant]}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
  amount?: number;
}

/** Wrap RevealItem children to stagger their entrance as a group scrolls into view. */
export function RevealGroup({ children, className, stagger = 0.1, once = true, amount = 0.2 }: RevealGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  variant?: RevealVariant;
  className?: string;
  duration?: number;
}

export function RevealItem({ children, variant = 'up', className, duration = 0.6 }: RevealItemProps) {
  return (
    <motion.div className={className} variants={VARIANTS[variant]} transition={{ duration, ease: EASE }}>
      {children}
    </motion.div>
  );
}
