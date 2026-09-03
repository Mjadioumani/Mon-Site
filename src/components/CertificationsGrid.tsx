"use client";

import { Award, BadgeCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { RevealGroup, RevealItem, Reveal } from '@/components/motion/Reveal';

/** Coursera's three credential shapes: a Professional Certificate or a Specialization both bundle several courses behind one credential/link; a Course is a single standalone certificate. */
const CREDENTIAL_LABEL: Record<string, { en: string; fr: string }> = {
  professional: { en: 'Professional Certificate', fr: 'Certificat Professionnel' },
  specialization: { en: 'Specialization', fr: 'Spécialisation' },
  course: { en: 'Course', fr: 'Cours' },
};

/**
 * Certifications section: a flat, on-brand (primary green / dark) design rather than
 * per-issuer brand colors. Bundled credentials (Professional Certificates & Specializations)
 * are spotlighted as featured cards with their course checklist; single standalone courses
 * are grouped by issuer into a compact, scannable ledger below.
 * Consumes about.certificationGroups from translations.ts.
 */
export function CertificationsGrid() {
  const { t, language } = useLanguage();
  const groups = t.about.certificationGroups;

  const totalCredentials = groups.reduce((sum, g) => sum + g.credentials.length, 0);
  const featured = groups.flatMap((g) => g.credentials.filter((c) => c.type !== 'course').map((c) => ({ ...c, issuer: g.issuer })));
  const courseworkGroups = groups
    .map((g) => ({ issuer: g.issuer, credentials: g.credentials.filter((c) => c.type === 'course') }))
    .filter((g) => g.credentials.length > 0);

  return (
    <div className="space-y-10">
      {/* Stats strip */}
      <Reveal variant="up" className="flex flex-wrap items-center gap-x-8 gap-y-3">
        <div>
          <span className="text-2xl font-bold text-white tabular-nums">{groups.length}</span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground ml-2">{t.about.certificationInstitutions}</span>
        </div>
        <div className="w-px h-6 bg-border/20" aria-hidden />
        <div>
          <span className="text-2xl font-bold text-white tabular-nums">{totalCredentials}</span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground ml-2">{t.about.certificationCredentials}</span>
        </div>
      </Reveal>

      {/* Featured: multi-course bundles */}
      {featured.length > 0 && (
        <div className="space-y-5">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{t.about.certificationFeatured}</h4>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-4" stagger={0.08}>
            {featured.map((credential) => {
              const label = CREDENTIAL_LABEL[credential.type]?.[language] ?? credential.type;
              return (
                <RevealItem
                  key={credential.name}
                  className="group relative p-6 bg-card border border-border/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_-16px_hsl(var(--primary)/0.6)]"
                >
                  <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/10 rounded-full blur-3xl transition-colors duration-300 group-hover:bg-primary/20" aria-hidden />

                  <div className="relative flex items-start justify-between gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:-translate-y-1">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-1.5 whitespace-nowrap">
                      {label}
                    </span>
                  </div>

                  <div className="relative">
                    <h5 className="text-[15px] font-bold text-white leading-snug mb-1">{credential.name}</h5>
                    <p className="text-[11px] text-muted-foreground mb-4">
                      {credential.issuer}
                      {credential.date ? ` · ${credential.date}` : ''}
                    </p>

                    {credential.courses.length > 0 && (
                      <ul className="space-y-1.5 mb-5">
                        {credential.courses.map((course) => (
                          <li key={course} className="flex items-start gap-2 text-[11.5px] text-muted-foreground leading-relaxed">
                            <CheckCircle2 className="w-3 h-3 shrink-0 mt-0.5 text-primary/60" />
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {credential.link && (
                      <a
                        href={credential.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-white transition-colors"
                      >
                        {language === 'en' ? 'Verify credential' : 'Vérifier le certificat'}
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      )}

      {/* Additional coursework: single standalone certificates, grouped by issuer */}
      {courseworkGroups.length > 0 && (
        <div className="space-y-5">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{t.about.certificationCoursework}</h4>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-4" stagger={0.05}>
            {courseworkGroups.map((group) => (
              <RevealItem
                key={group.issuer}
                className="p-5 bg-card/60 border border-border/10 rounded-xl transition-colors duration-300 hover:border-primary/20"
              >
                <h5 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                  <span className="w-1 h-1 rounded-full bg-primary shrink-0" aria-hidden />
                  {group.issuer}
                </h5>
                <ul className="divide-y divide-border/10">
                  {group.credentials.map((credential) => (
                    <li key={credential.name}>
                      {credential.link ? (
                        <a
                          href={credential.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor-hover
                          className="group/row flex items-center justify-between gap-3 py-2.5 text-muted-foreground hover:text-white transition-colors"
                        >
                          <span className="flex items-start gap-2 text-[12px] leading-snug">
                            <BadgeCheck className="w-3.5 h-3.5 shrink-0 mt-0.5 text-primary/70" />
                            {credential.name}
                          </span>
                          <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground/60 shrink-0">
                            {credential.date}
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/row:opacity-70 transition-opacity" />
                          </span>
                        </a>
                      ) : (
                        <div className="flex items-center justify-between gap-3 py-2.5 text-muted-foreground">
                          <span className="flex items-start gap-2 text-[12px] leading-snug">
                            <BadgeCheck className="w-3.5 h-3.5 shrink-0 mt-0.5 text-primary/70" />
                            {credential.name}
                          </span>
                          <span className="text-[10px] text-muted-foreground/60 shrink-0">{credential.date}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      )}
    </div>
  );
}
