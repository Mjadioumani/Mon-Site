"use client";

import { Palette, Code2, Layers, Network, ShieldCheck, Workflow, Cloud, Database, type LucideIcon } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { RevealGroup, RevealItem, Reveal } from '@/components/motion/Reveal';

const ICONS: LucideIcon[] = [Palette, Code2, Layers, Network, ShieldCheck, Workflow, Cloud, Database];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-12 md:py-20 border-t border-border/10">
      <Reveal variant="up">
        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">{t.services.title}</h2>
        </div>
        <p className="text-[13px] text-muted-foreground leading-relaxed max-w-xl mb-10 md:mb-12">
          {t.services.subtitle}
        </p>
      </Reveal>

      <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        {t.services.items.map((service, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          return (
            <RevealItem
              key={service.title}
              className="group p-6 bg-card border border-border/10 rounded-2xl transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_-16px_hsl(var(--primary)/0.6)]"
            >
              <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center mb-5 transition-transform duration-300 group-hover:-translate-y-1">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-[13px] font-bold text-white mb-2">{service.title}</h4>
              <p className="text-[12px] text-muted-foreground leading-relaxed">{service.description}</p>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
