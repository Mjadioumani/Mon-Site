"use client";

import { MapPin, CheckCircle2, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal } from '@/components/motion/Reveal';
import { Timeline } from '@/components/Timeline';
import { CertificationsGrid } from '@/components/CertificationsGrid';
import { VideoIntro } from '@/components/VideoIntro';
import { Footer } from '@/components/Footer';

export function About() {
  const { t } = useLanguage();

  const educationEntries = t.about.educationList.map((edu, idx) => ({
    icon: idx === 0 ? CheckCircle2 : GraduationCap,
    title: edu.degree,
    subtitle: `${edu.institution}, ${edu.year}`,
  }));

  const experienceEntries = t.about.experienceList.map((exp) => ({
    icon: Briefcase,
    title: exp.role,
    subtitle: `${exp.company}, ${exp.date}`,
  }));

  return (
    <section className="py-12 md:py-20 space-y-16">
      {/* Intro text */}
      <Reveal variant="up" className="max-w-2xl space-y-4">
        <p className="text-[15px] md:text-[16px] font-bold text-white leading-relaxed">
          {t.about.intro.tagline}
        </p>
        {t.about.intro.paragraphs.map((paragraph, idx) => (
          <p key={idx} className="text-[13px] md:text-[14px] text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </Reveal>

      {/* Get to Know Me */}
      <Reveal variant="up" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{t.about.title}</h2>
        <div className="flex items-center gap-2 text-primary font-medium text-xs">
          <MapPin className="w-4 h-4" />
          <span>{t.about.location}</span>
        </div>
      </Reveal>

      {/* Video Introduction — hidden until PRESENTATION_VIDEO_URL is set in lib/site.ts */}
      <VideoIntro />

      {/* Education */}
      <Reveal variant="up" className="space-y-10">
        <h3 className="text-xl font-bold text-white">{t.about.education}</h3>
        <Timeline entries={educationEntries} />
      </Reveal>

      {/* Certifications */}
      <Reveal variant="up" className="space-y-8">
        <h3 className="text-xl font-bold text-white">{t.about.certificationTitle}</h3>
        <CertificationsGrid />
      </Reveal>

      {/* Stack Section */}
      <Reveal variant="up" className="space-y-8">
        <h3 className="text-xl font-bold text-white">{t.about.stackTitle}</h3>
        <p className="text-[13px] text-muted-foreground leading-relaxed max-w-2xl">
          {t.about.stackDesc}
        </p>
        <div className="flex justify-end">
          <Link href="/stack">
            <Button variant="outline" data-cursor-hover className="border-border bg-card hover:bg-muted text-[10px] h-9 px-6 gap-2 rounded-md font-bold uppercase tracking-wider">
              {t.common.viewAllStack} <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Reveal>

      {/* Experience Section */}
      <Reveal variant="up" className="space-y-10">
        <h3 className="text-xl font-bold text-white">{t.about.experienceTitle}</h3>
        <Timeline entries={experienceEntries} />
      </Reveal>

      {/* Interests */}
      <Reveal variant="up" className="space-y-8">
        <h3 className="text-xl font-bold text-white">{t.about.interestsTitle}</h3>
        <ul className="list-disc pl-6 text-[13px] text-muted-foreground space-y-2">
          {t.about.interestsList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </Reveal>

      {/* Languages */}
      <Reveal variant="up" className="space-y-8">
        <h3 className="text-xl font-bold text-white">{t.about.languagesTitle}</h3>
        <ul className="list-disc pl-6 text-[13px] text-muted-foreground space-y-2">
          {t.about.languagesList.map((lang, idx) => (
            <li key={idx}>{lang.language} – {lang.level}</li>
          ))}
        </ul>
      </Reveal>

      <Footer />
    </section>
  );
}
