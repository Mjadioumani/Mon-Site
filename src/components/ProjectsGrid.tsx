"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/components/LanguageContext';

const ALL_PROJECTS = [
  { id: 'project-1', title: 'Network Infrastructure & Security Setup', category: 'NETWORK ENGINEERING' },
  { id: 'project-2', title: 'HealWell Website Framer', category: 'APP DESIGN' },
  { id: 'project-3', title: 'Zenith Framer Website', category: 'WEB DESIGN' },
  { id: 'project-4', title: 'Creative Framer Website', category: 'APP DESIGN' },
];

export function ProjectsGrid() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{t.projectsGrid.title}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
        {ALL_PROJECTS.map((project, idx) => {
          const imgData = PlaceHolderImages.find(img => img.id === project.id);
          return (
            <Link href={`/projects/${project.id}`} key={idx} className="group cursor-pointer">
              <div className="relative aspect-[16/12] rounded-xl overflow-hidden mb-5 bg-muted border border-border/10">
                <Image
                  src={imgData?.imageUrl || `https://picsum.photos/seed/${project.id}/800/600`}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint={imgData?.imageHint || "website design"}
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 bg-primary text-primary-foreground rounded-full shadow-lg">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="space-y-1.5">
                <span className="text-primary text-[9px] font-bold tracking-widest uppercase">{project.category}</span>
                <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">{project.title}</h4>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Footer Section in Project page */}
      <div className="pt-32 pb-12">
        <h2 className="text-7xl md:text-[120px] font-bold tracking-tighter leading-none text-white opacity-90">
          {t.common.connect}
        </h2>
        <footer className="mt-20 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-[10px] gap-4 border-t border-border/10 pt-8 opacity-40">
          <p>{t.common.copyright}</p>
          <p>{t.common.madeBy}</p>
        </footer>
      </div>
    </section>
  );
}
