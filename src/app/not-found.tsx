"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#050505] text-white px-6 text-center animate-in fade-in duration-700">
      <h1 className="text-[120px] md:text-[180px] font-bold tracking-tighter leading-none mb-2">404</h1>
      
      <div className="space-y-1 mb-10 opacity-60">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em]">{t.notFound.oops}</h2>
        <p className="text-[11px] font-medium tracking-wide">{t.notFound.text}</p>
      </div>

      <Link href="/">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-xl font-bold text-[11px] uppercase tracking-[0.2em] gap-2 transition-all hover:scale-105 active:scale-95">
          <ArrowLeft className="w-3.5 h-3.5" />
          {t.common.backHome}
        </Button>
      </Link>
    </div>
  );
}
