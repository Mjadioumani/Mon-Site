"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

const PROJECTS = [
  { id: 'project-1', title: 'DesignCube Framer Website', category: 'WEB DESIGN', desc: 'A minimal workspace for creative teams.' },
  { id: 'project-2', title: 'HealWell Website Framer', category: 'APP DESIGN', desc: 'Modern health management platform.' },
];

export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20 border-t border-border/10 mt-12">
      <div className="flex justify-between items-end mb-10 md:mb-12">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Recent Projects</h2>
        </div>
        <Link href="/projects">
          <Button variant="outline" size="sm" className="rounded-full text-[9px] h-7 px-4 border-border bg-card font-bold uppercase tracking-widest hover:bg-muted">
            View all projects <ArrowUpRight className="ml-1 w-3 h-3" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {PROJECTS.map((project, idx) => {
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
      
      <div className="flex justify-end mt-12">
        <Link href="/projects">
          <Button variant="outline" size="sm" className="rounded-full text-[9px] h-8 px-5 border-border bg-card font-bold uppercase tracking-widest hover:bg-muted">
            View all projects <ArrowUpRight className="ml-1 w-3 h-3" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
