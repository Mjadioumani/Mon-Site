"use client";

import { useEffect, useRef, useState } from 'react';
import { FileText, Circle } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageContext';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { Reveal } from '@/components/motion/Reveal';

function RoleCycler({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || roles.length < 2) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, [roles.length, shouldReduceMotion]);

  return (
    <span className="relative inline-flex h-[1.15em] overflow-hidden align-bottom min-w-[9ch]">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={shouldReduceMotion ? undefined : { y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-primary whitespace-nowrap"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !headingRef.current) return;
    const words = headingRef.current.querySelectorAll('[data-word]');
    gsap.fromTo(
      words,
      { yPercent: 100, opacity: 0, filter: 'blur(6px)' },
      { yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9, stagger: 0.05, ease: 'power3.out' }
    );
  }, [shouldReduceMotion]);

  const words = t.hero.greeting.split(' ');

  const certificationCount = t.about.certificationGroups.reduce((total, group) => total + group.credentials.length, 0);

  const stats = [
    { value: certificationCount, label: t.about.certificationTitle },
    { value: t.about.languagesList.length, label: t.about.languagesTitle },
    { value: t.about.interestsList.length, label: t.about.interestsTitle },
  ];

  return (
    <section id="home" className="flex flex-col justify-center py-16 md:py-24">
      <div>
        <div className="mb-4 text-xl md:text-2xl font-bold text-muted-foreground">
          <RoleCycler roles={t.hero.roles} />
        </div>

        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tight leading-tight text-white max-w-2xl overflow-hidden"
        >
          {words.map((word, idx) => (
            <span key={idx} className="inline-block overflow-hidden mr-[0.3em] last:mr-0">
              <span data-word className="inline-block">
                {word}
              </span>
            </span>
          ))}
        </h1>

        <Reveal variant="up" delay={0.3}>
          <p className="text-sm md:text-base text-muted-foreground mb-10 md:mb-12 leading-relaxed max-w-xl">
            {t.hero.description}
          </p>
        </Reveal>

        <Reveal variant="up" delay={0.4}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 md:mb-14">
            <a
              href="mailto:adioumani1972@gmail.com"
              data-cursor-hover
              className="flex items-center gap-2 group cursor-pointer"
            >
              <Circle className="w-1.5 h-1.5 fill-primary text-primary" />
              <span className="text-[11px] font-medium text-muted-foreground group-hover:text-white transition-colors uppercase tracking-widest">
                adioumani1972@gmail.com
              </span>
            </a>

            <MagneticButton>
              <Button asChild variant="outline" data-cursor-hover className="rounded-full border-border bg-card hover:bg-muted text-[9px] h-8 px-5 gap-2 font-bold uppercase tracking-widest cursor-pointer">
                <a href="/CV-Adioumani-Jean.pdf" target="_blank" rel="noopener noreferrer">
                  {t.common.viewResume} <FileText className="w-3 h-3" />
                </a>
              </Button>
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal variant="up" delay={0.5}>
          <div className="flex flex-wrap gap-8 md:gap-12 border-t border-border/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-white tabular-nums">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
