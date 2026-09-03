"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Wrench } from 'lucide-react';
import { getProject, getOtherProjects } from '@/lib/projects';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { Footer } from '@/components/Footer';

export function ProjectDetail({ id }: { id: string }) {
  const { t, language } = useLanguage();
  const project = getProject(id);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) return null;

  const content = project.content[language];
  const otherProjects = getOtherProjects(id, 2);
  const gallery = project.images;

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

      {/* Title */}
      <Reveal variant="up">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">{content.title}</h1>
        </div>
      </Reveal>

      {/* Meta info panel */}
      <Reveal variant="up">
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12 pb-10 border-b border-border/10">
          <div>
            <dt className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">{t.projectDetail.category}</dt>
            <dd className="text-[13px] font-bold text-white">{content.category}</dd>
          </div>
          <div>
            <dt className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">{t.projectDetail.year}</dt>
            <dd className="text-[13px] font-bold text-white">{project.year}</dd>
          </div>
          <div>
            <dt className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">{t.projectDetail.role}</dt>
            <dd className="text-[13px] font-bold text-white">{content.role}</dd>
          </div>
          <div>
            <dt className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">{t.projectDetail.client}</dt>
            <dd className="text-[13px] font-bold text-white">{content.client || '—'}</dd>
          </div>
        </dl>
      </Reveal>

      {/* Gallery */}
      <Reveal variant="zoom">
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-muted border border-border/10">
          <Image src={gallery[activeImage]} alt={content.title} fill sizes="100vw" className="object-cover" priority />
        </div>
      </Reveal>
      {gallery.length > 1 && (
        <div className="flex gap-3 mb-20 overflow-x-auto pb-2">
          {gallery.map((src, idx) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveImage(idx)}
              data-cursor-hover
              aria-label={`${t.projectDetail.gallery} ${idx + 1}`}
              className={`relative w-24 h-16 shrink-0 rounded-lg overflow-hidden border transition-colors ${
                activeImage === idx ? 'border-primary' : 'border-border/20 opacity-60 hover:opacity-100'
              }`}
            >
              <Image src={src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
      {gallery.length <= 1 && <div className="mb-16" />}

      {/* Tools & Technologies */}
      {project.tools.length > 0 && (
        <Reveal variant="up" className="mb-16">
          <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
            <Wrench className="w-4 h-4 text-primary" />
            {t.projectDetail.tools}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-[11px] font-medium text-muted-foreground border border-border/20 bg-card rounded-full px-4 py-2"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      )}

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

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between py-20 border-b border-border/10 mb-20 mt-16">
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
                        src={p.images[0]}
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
