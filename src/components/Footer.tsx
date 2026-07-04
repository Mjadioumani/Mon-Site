"use client";

import { Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal } from '@/components/motion/Reveal';
import { MagneticButton } from '@/components/motion/MagneticButton';

/** Shared footer used across every route: "Let's Connect" CTA, back-to-top and copyright. */
export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-24 md:pt-32 pb-12">
      <Reveal variant="up">
        <a href="mailto:adioumani1972@gmail.com" className="group block" data-cursor-hover>
          <h2 className="text-6xl sm:text-7xl md:text-[120px] font-bold tracking-tighter leading-none text-white opacity-90 group-hover:opacity-100 group-hover:text-primary transition-all duration-500">
            {t.common.connect}
          </h2>
        </a>
      </Reveal>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-10">
        <MagneticButton>
          <a
            href="mailto:adioumani1972@gmail.com"
            data-cursor-hover
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-primary border border-primary/30 rounded-full px-5 py-2.5 hover:bg-primary/10 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" /> adioumani1972@gmail.com
          </a>
        </MagneticButton>

        <button
          onClick={scrollToTop}
          data-cursor-hover
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors group"
        >
          {t.common.backToTop}
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-[10px] gap-4 border-t border-border/10 pt-8 opacity-40">
        <p>{t.common.copyright}</p>
        <p>{t.common.madeBy}</p>
      </div>
    </footer>
  );
}
