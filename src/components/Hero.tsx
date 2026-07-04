"use client";

import { FileText, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="flex flex-col justify-center py-16 md:py-24">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tight leading-tight text-white max-w-2xl">
          {t.hero.greeting}
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mb-10 md:mb-12 leading-relaxed max-w-xl">
          {t.hero.description}
        </p>
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Circle className="w-1.5 h-1.5 fill-primary text-primary" />
            <span className="text-[11px] font-medium text-muted-foreground group-hover:text-white transition-colors uppercase tracking-widest">
              adioumani1972@gmail.com
            </span>
          </div>
          
          <Button asChild variant="outline" className="rounded-full border-border bg-card hover:bg-muted text-[9px] h-8 px-5 gap-2 font-bold uppercase tracking-widest cursor-pointer">
            <a href="/CV-Adioumani-Jean.pdf" target="_blank" rel="noopener noreferrer">
              {t.common.viewResume} <FileText className="w-3 h-3" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
