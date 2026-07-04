"use client";

import { MapPin, CheckCircle2, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-20 space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Intro text */}
      <div className="max-w-2xl">
        <p className="text-[13px] md:text-[14px] text-muted-foreground leading-relaxed">
          {t.about.intro}
        </p>
      </div>

      {/* Get to Know Me */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{t.about.title}</h2>
        <div className="flex items-center gap-2 text-primary font-medium text-xs">
          <MapPin className="w-4 h-4" />
          <span>{t.about.location}</span>
        </div>
      </div>

      {/* Education */}
      <div className="space-y-10">
        <h3 className="text-xl font-bold text-white">{t.about.education}</h3>
        <div className="space-y-8">
          {t.about.educationList.map((edu, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="mt-1">
                {idx === 0 ? (
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                ) : (
                  <GraduationCap className="w-5 h-5 text-muted-foreground" />
                )}
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-white">{edu.degree}</h4>
                <p className="text-[12px] text-muted-foreground mt-1">{edu.institution}, {edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="space-y-8">
        <h3 className="text-xl font-bold text-white">{t.about.certificationTitle}</h3>
        <div className="space-y-6">
          {t.about.certificationList.map((cert, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="mt-1">
                <GraduationCap className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <h4 className="text-[13px] font-bold text-white hover:underline">{cert.name}</h4>
                  <p className="text-[12px] text-muted-foreground mt-1">{cert.institution}, {cert.year}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stack Section */}
      <div className="space-y-8">
        <h3 className="text-xl font-bold text-white">{t.about.stackTitle}</h3>
        <p className="text-[13px] text-muted-foreground leading-relaxed max-w-2xl">
          {t.about.stackDesc}
        </p>
        <div className="flex justify-end">
          <Button variant="outline" className="border-border bg-card hover:bg-muted text-[10px] h-9 px-6 gap-2 rounded-md font-bold uppercase tracking-wider">
            {t.common.viewAllStack} <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Experience Section */}
      <div className="space-y-10">
        <h3 className="text-xl font-bold text-white">{t.about.experienceTitle}</h3>
        <div className="space-y-10">
          {t.about.experienceList.map((exp, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="mt-1">
                <Briefcase className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-white">{exp.role}</h4>
                <p className="text-[12px] text-muted-foreground mt-1">{exp.company}, {exp.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="space-y-8">
        <h3 className="text-xl font-bold text-white">{t.about.interestsTitle}</h3>
        <ul className="list-disc pl-6 text-[13px] text-muted-foreground space-y-2">
          {t.about.interestsList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Languages */}
      <div className="space-y-8">
        <h3 className="text-xl font-bold text-white">{t.about.languagesTitle}</h3>
        <ul className="list-disc pl-6 text-[13px] text-muted-foreground space-y-2">
          {t.about.languagesList.map((lang, idx) => (
            <li key={idx}>{lang.language} – {lang.level}</li>
          ))}
        </ul>
      </div>

      {/* Large Signature Text */}
      <div className="pt-24 pb-12">
        <h2 className="text-7xl md:text-[120px] font-bold tracking-tighter leading-none text-white">
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