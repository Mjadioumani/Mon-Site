"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getProject, getOtherProjects } from '@/lib/projects';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { Footer } from '@/components/Footer';

export function ProjectDetail({ id }: { id: string }) {
  const { t, language } = useLanguage();
  const project = getProject(id);
  if (!project) return null;

  const content = project.content[language];
  const otherProjects = getOtherProjects(id, 2);

  return (
    <section className="py-12 md:py-16">
      {/* Top Navigation Bar */}
      <Reveal variant="fade">
        <div className="flex items-center justify-between mb-12">
          <Link href="/projects" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors" data-cursor-hover>
            <ArrowLeft className="w-3 h-3" />
            {t.common.backProjects}
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {t.common.visitWebsite} <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </Reveal>

      {/* Title and Metadata */}
      <Reveal variant="up">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">{content.title}</h1>
          <div className="flex flex-wrap items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {content.category}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-border" />
              {project.year}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Hero Image */}
      <Reveal variant="zoom">
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-20 bg-muted border border-border/10">
          <Image src={project.image} alt={content.title} fill sizes="100vw" className="object-cover" priority />
        </div>
      </Reveal>

      {/* Content Sections */}
      <RevealGroup className="space-y-16 max-w-3xl" stagger={0.08}>
        {[
          { title: t.projectDetail.approach, text: content.approach },
          { title: t.projectDetail.vision, text: content.vision },
          { title: t.projectDetail.challenges, text: content.challenges },
          { title: t.projectDetail.problems, text: content.problems },
          { title: t.projectDetail.userCentric, text: content.userCentric },
          { title: t.projectDetail.userNeeds, text: content.userNeeds },
        ].map((block) => (
          <RevealItem key={block.title} className="space-y-4">
            <h2 className="text-lg font-bold text-white">{block.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{block.text}</p>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* Tags */}
      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-16">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground border border-border/20 rounded-full px-3 py-1.5">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between py-20 border-b border-border/10 mb-20 mt-4">
        <Link href="/projects" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors" data-cursor-hover>
          <ArrowLeft className="w-3 h-3" />
          {t.common.backProjects}
        </Link>
      </div>

      {/* Other Projects Section */}
      {otherProjects.length > 0 && (
        <div className="space-y-12">
          <h2 className="text-lg font-bold text-white">{t.projectDetail.otherProjects}</h2>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((p) => {
              const pContent = p.content[language];
              return (
                <RevealItem key={p.id}>
                  <Link href={`/projects/${p.id}`} className="group block" data-cursor-hover>
                    <div className="relative aspect-[16/12] rounded-xl overflow-hidden mb-5 bg-muted border border-border/10">
                      <Image
                        src={p.image}
                        alt={pContent.title}
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
                      <span className="text-primary text-[9px] font-bold tracking-widest uppercase">{pContent.category}</span>
                      <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">{pContent.title}</h4>
                    </div>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      )}

      <Footer />
    </section>
  );
}
