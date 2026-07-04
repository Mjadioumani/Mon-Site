"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageContext';
import { PROJECTS } from '@/lib/projects';
import { RevealGroup, RevealItem, Reveal } from '@/components/motion/Reveal';

export function Projects() {
  const { t, language } = useLanguage();
  const featured = PROJECTS.slice(0, 2);

  return (
    <section id="projects" className="py-12 md:py-20 border-t border-border/10 mt-12">
      <Reveal variant="up">
        <div className="flex justify-between items-end mb-10 md:mb-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">{t.homeProjects.recent}</h2>
          <Link href="/projects">
            <Button variant="outline" size="sm" data-cursor-hover className="rounded-full text-[9px] h-7 px-4 border-border bg-card font-bold uppercase tracking-widest hover:bg-muted">
              {t.common.viewAllProjects} <ArrowUpRight className="ml-1 w-3 h-3" />
            </Button>
          </Link>
        </div>
      </Reveal>

      <RevealGroup className={`grid grid-cols-1 ${featured.length > 1 ? 'md:grid-cols-2' : 'md:max-w-xl'} gap-8 md:gap-10`}>
        {featured.map((project) => {
          const content = project.content[language];
          return (
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
          );
        })}
      </RevealGroup>

      <div className="flex justify-end mt-12">
        <Link href="/projects">
          <Button variant="outline" size="sm" data-cursor-hover className="rounded-full text-[9px] h-8 px-5 border-border bg-card font-bold uppercase tracking-widest hover:bg-muted">
            {t.common.viewAllProjects} <ArrowUpRight className="ml-1 w-3 h-3" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
