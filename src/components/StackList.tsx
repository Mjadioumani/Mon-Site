"use client";

import { useLanguage } from '@/components/LanguageContext';
import { STACK_ITEMS, LEVEL_WIDTH } from '@/lib/stack';
import { RevealGroup, RevealItem, Reveal } from '@/components/motion/Reveal';
import { Footer } from '@/components/Footer';

export function StackList() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-20 space-y-12">
      <Reveal variant="up">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12">{t.stack.title}</h1>
      </Reveal>

      <RevealGroup className="space-y-4 max-w-3xl" stagger={0.06}>
        {STACK_ITEMS.map((item) => (
          <RevealItem
            key={item.name}
            className="group p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl transition-all duration-300 hover:border-primary/20"
          >
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-muted/30 flex items-center justify-center border border-white/5 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-[14px] font-bold text-white tracking-wide">{item.name}</h3>
                  <p className="text-[12px] text-muted-foreground font-medium">{t.stack[item.descKey]}</p>
                </div>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-primary">
                {t.stack.levels[item.level]}
              </span>
            </div>

            <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full origin-left transition-transform duration-700 ease-out"
                style={{ width: `${LEVEL_WIDTH[item.level]}%` }}
              />
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Footer />
    </section>
  );
}
