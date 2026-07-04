"use client";

import Link from 'next/link';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/Reveal';
import { MagneticButton } from '@/components/motion/MagneticButton';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-border/10">
      <Reveal variant="up">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-6">{t.contact.contactTitle}</h2>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:adioumani1972@gmail.com"
                data-cursor-hover
                className="flex items-center gap-3 text-[13px] font-medium text-muted-foreground hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" /> adioumani1972@gmail.com
              </a>
              <a
                href="tel:+2250170505903"
                data-cursor-hover
                className="flex items-center gap-3 text-[13px] font-medium text-muted-foreground hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" /> +225 01 70 50 59 03
              </a>
            </div>
          </div>

          <MagneticButton>
            <Link href="/contact" data-cursor-hover>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-[10px] h-11 px-7 font-bold uppercase tracking-widest gap-2">
                {t.contact.messageMe} <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}
