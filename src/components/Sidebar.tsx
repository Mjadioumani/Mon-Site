"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, Star, Mail, Linkedin, Github, Circle, Menu, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';

const SOCIAL_LINKS = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/adioumani-jean-martinien-fabrice', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Mjadioumani', label: 'GitHub' },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NAV_ITEMS = [
    { label: t.nav.home, icon: Home, href: '/' },
    { label: t.nav.about, icon: User, href: '/about' },
    { label: t.nav.projects, icon: Briefcase, href: '/projects' },
    { label: t.nav.stack, icon: Star, href: '/stack' },
    { label: t.nav.contact, icon: Mail, href: '/contact' },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-sidebar">
      <div className="p-8 flex flex-col items-start">
        {/* Profile and Language Toggle Header */}
        <div className="w-full flex justify-between items-start mb-8">
          <div className="relative w-36 h-36 rounded-2xl overflow-hidden bg-muted border border-white/10 shadow-2xl ring-1 ring-white/5 pointer-events-none">
            <Image
              src="/image/profile.png"
              alt="Portrait of Adioumani Jean, Network & DevSecOps Engineer"
              fill
              priority
              sizes="144px"
              className="object-cover grayscale contrast-[1.1]"
              data-ai-hint="professional portrait of Adioumani Jean, Network & DevSecOps Engineer transitioning into backend and data engineering, in a modern and minimalist style, with a focus on clarity and professionalism"
            />
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="text-[10px] font-bold tracking-widest text-muted-foreground hover:text-white h-8 border border-white/5 rounded-full px-3 gap-2"
          >
            <Globe className="w-3 h-3 text-primary" />
            {language === 'en' ? 'FRA' : 'ENG'}
          </Button>
        </div>

        <Badge variant="default" className="bg-[#0f2d1f] text-primary border-none flex items-center gap-1.5 py-1 px-3 rounded-full text-[9px] font-bold uppercase tracking-wider mb-10">
          <Circle className="w-1.5 h-1.5 fill-current" />
          {t.common.available}
        </Badge>

        <nav className="w-full">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label} className="relative">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    data-cursor-hover
                    className={`relative flex items-center gap-3 px-4 py-2.5 transition-colors rounded-lg group ${
                      isActive
                      ? 'text-white'
                      : 'text-muted-foreground hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="sidebar-active-pill"
                        className="absolute inset-0 bg-[#1a1a1a] rounded-lg"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <item.icon className={`relative w-4 h-4 ${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`} />
                    <span className="relative text-[13px] font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-auto p-8">
        <div className="flex gap-5">
          {SOCIAL_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              data-cursor-hover
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className={`md:hidden fixed top-0 left-0 right-0 h-16 border-b border-sidebar-border z-40 px-6 flex items-center justify-between transition-colors duration-300 ${
        scrolled ? 'bg-sidebar/95 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-sidebar/70 backdrop-blur-md'
      }`}>
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted border border-primary/40 pointer-events-none shrink-0">
            <Image
              src="/image/profile.png"
              alt="Profile"
              fill
              priority
              sizes="48px"
              className="object-cover"
            />
          </div>
          <Badge variant="default" className="bg-[#0f2d1f] text-primary border-none py-0.5 px-2 rounded-full text-[8px] font-bold uppercase">
            {language === 'en' ? 'Available' : 'Disponible'}
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="text-[9px] font-bold tracking-widest text-muted-foreground hover:text-white h-7 border border-white/5 rounded-full px-2 gap-1"
          >
            {language === 'en' ? 'FRA' : 'ENG'}
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-sidebar-foreground">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 border-r border-sidebar-border w-[280px]">
              <SidebarContent />
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <aside className="fixed top-0 left-0 h-screen w-[280px] bg-sidebar border-r border-sidebar-border hidden md:flex flex-col z-50">
        <SidebarContent />
      </aside>
    </>
  );
}
