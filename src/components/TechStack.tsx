"use client";

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageContext';
import { STACK_ITEMS } from '@/lib/stack';
import { RevealGroup, RevealItem, Reveal } from '@/components/motion/Reveal';

const FEATURED = STACK_ITEMS.slice(0, 6);

export function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="py-12 md:py-20 border-t border-border/10">
      <Reveal variant="up">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">{t.stack.title}</h2>
        </div>
      </Reveal>

      <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {FEATURED.map((item) => (
          <RevealItem
            key={item.name}
            className="group p-5 bg-card border border-border/10 rounded-xl flex items-center gap-4 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-14px_hsl(var(--primary)/0.6)]"
          >
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
              <item.icon className={`w-5 h-5 ${item.iconColor}`} />
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">{item.name}</h4>
              <p className="text-[9px] text-muted-foreground uppercase tracking-widest mt-0.5">{t.stack[item.descKey]}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <div className="flex justify-end mt-10">
        <Link href="/stack">
          <Button variant="outline" size="sm" data-cursor-hover className="rounded-full text-[9px] h-8 px-5 border-border bg-card font-bold uppercase tracking-widest hover:bg-muted">
            {t.common.viewAllStack} <ArrowUpRight className="ml-1 w-3 h-3" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
