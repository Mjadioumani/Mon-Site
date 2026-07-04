"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ChevronDown, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/components/LanguageContext';

const PROJECTS_DATA = [
  { 
    id: 'project-1', 
    title: 'Network Infrastructure & Security Setup', 
    category: 'NETWORK ENGINEERING',
    year: '2024',
    approach: "In this project, I followed a structured approach to design and implement a reliable local network infrastructure. My focus was on building a stable, secure, and efficient system that reflects real-world networking environments.",
    vision: "My goal was to develop a practical understanding of how modern networks operate, including communication between devices, network organization, and basic security practices. I aimed to simulate a real enterprise network environment.",
    challenges: "One of the main challenges was managing IP addressing and ensuring proper communication between multiple devices without conflicts. Additionally, implementing basic network security and maintaining a clear network structure required careful planning.",
    problems: "This project was not only about connecting devices, but also about solving communication and configuration issues. I had to troubleshoot network errors, ensure connectivity, and optimize the overall network performance.",
    userCentric: "I focused on creating a network that ensures reliable and efficient communication between users and devices. The goal was to guarantee stability, accessibility, and secure data flow across the network.",
    userNeeds: "The network was designed to meet essential user needs such as stable connectivity, efficient data exchange, and basic security. This ensures a smooth and functional experience in a simulated real-world environment.",
  },
  { 
    id: 'project-2', 
    title: 'HealWell Website Framer', 
    category: 'APP DESIGN',
    year: '2023',
    approach: "For HealWell, the focus was on creating a calming yet efficient medical management interface. The systematic approach involved deep empathy mapping for both patients and doctors to streamline the consultation booking process.",
    vision: "Transforming digital healthcare experiences into something that feels human and accessible. The vision was to minimize cognitive load during stressful medical situations through clean UI and intuitive flow.",
    challenges: "Handling sensitive medical data visualization while maintaining a clean aesthetic. The challenge was to present complex health stats in a way that is easily digestible for the average user.",
    problems: "Optimizing the appointment scheduling algorithm's frontend interface to reduce no-shows. We implemented smart reminders and clear status indicators to solve user forgetfulness.",
    userCentric: "Accessibility was the priority. High contrast, large touch targets, and voice-assisted navigation options were integrated to serve a wide demographic of users.",
    userNeeds: "Providing quick access to emergency services and recent lab results. The design ensures these critical features are always one tap away from the dashboard.",
  }
];

export function ProjectDetail({ id }: { id: string }) {
  const { t } = useLanguage();
  const project = PROJECTS_DATA.find(p => p.id === id) || PROJECTS_DATA[0];
  const imgData = PlaceHolderImages.find(img => img.id === id);

  const otherProjects = PROJECTS_DATA.filter(p => p.id !== id).slice(0, 2);

  return (
    <section className="py-12 md:py-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between mb-12">
        <Link href="/projects" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">
          <ArrowLeft className="w-3 h-3" />
          {t.common.backProjects}
        </Link>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="border-border bg-card text-[10px] h-8 px-4 gap-2 font-bold uppercase tracking-widest rounded-md">
            {t.common.share} <ChevronDown className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Title and Metadata */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">{project.title}</h1>
        <div className="flex flex-wrap items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {project.category}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-border" />
            {project.year}
          </div>
          <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-border" />
            {t.common.visitWebsite}
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-20 bg-muted border border-border/10">
        <Image
          src={imgData?.imageUrl || `https://picsum.photos/seed/${id}/1200/800`}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Sections */}
      <div className="space-y-16 max-w-3xl">
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white">{t.projectDetail.approach}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.approach}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white">{t.projectDetail.vision}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.vision}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white">{t.projectDetail.challenges}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.challenges}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white">{t.projectDetail.problems}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.problems}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white">{t.projectDetail.userCentric}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.userCentric}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white">{t.projectDetail.userNeeds}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.userNeeds}</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between py-20 border-b border-border/10 mb-20">
        <Link href="/projects" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">
          <ArrowLeft className="w-3 h-3" />
          {t.common.backProjects}
        </Link>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="border-border bg-card text-[10px] h-8 px-4 gap-2 font-bold uppercase tracking-widest rounded-md">
            {t.common.share} <ChevronDown className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Other Projects Section */}
      <div className="space-y-12">
        <h2 className="text-lg font-bold text-white">{t.projectDetail.otherProjects}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((p) => {
            const pImg = PlaceHolderImages.find(img => img.id === p.id);
            return (
              <Link href={`/projects/${p.id}`} key={p.id} className="group">
                <div className="relative aspect-[16/12] rounded-xl overflow-hidden mb-5 bg-muted border border-border/10">
                  <Image
                    src={pImg?.imageUrl || `https://picsum.photos/seed/${p.id}/800/600`}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-2 bg-primary text-primary-foreground rounded-full shadow-lg">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-primary text-[9px] font-bold tracking-widest uppercase">{p.category}</span>
                  <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">{p.title}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer Section Section */}
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
