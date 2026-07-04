"use client";

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { PROJECTS } from '@/lib/projects';
import { RevealGroup, RevealItem, Reveal } from '@/components/motion/Reveal';
import { Footer } from '@/components/Footer';

export function ProjectsGrid() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const items = useMemo(
    () => PROJECTS.map((project) => ({ project, content: project.content[language] })),
    [language]
  );

  const categories = useMemo(() => Array.from(new Set(items.map((i) => i.content.category))), [items]);

  const filtered = activeCategory === 'all' ? items : items.filter((i) => i.content.category === activeCategory);

  return (
    <section className="py-12 md:py-20 space-y-12">
      <Reveal variant="up">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8">{t.projectsGrid.title}</h1>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            data-cursor-hover
            className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${
              activeCategory === 'all'
                ? 'bg-primary text-primary-foreground border-primary'
                : 'border-border text-muted-foreground hover:text-white'
            }`}
          >
            {language === 'en' ? 'All' : 'Tous'}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              data-cursor-hover
              className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border text-muted-foreground hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Reveal>

      <RevealGroup key={activeCategory} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
        {filtered.map(({ project, content }) => (
          <RevealItem key={project.id}>
            <Link href={`/projects/${project.id}`} className="group cursor-pointer block" data-cursor-hover>
              <div className="relative aspect-[16/12] rounded-xl overflow-hidden mb-5 bg-muted border border-border/10">
                <Image
                  src={project.image}
                  alt={content.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 bg-primary text-primary-foreground rounded-full shadow-lg">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="space-y-1.5">
                <span className="text-primary text-[9px] font-bold tracking-widest uppercase">{content.category}</span>
                <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">{content.title}</h4>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>

      <Footer />
    </section>
  );
}
