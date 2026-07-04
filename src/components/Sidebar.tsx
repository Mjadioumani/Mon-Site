"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, Star, Mail, FileText, Linkedin, Github, Instagram, Circle, Menu, Globe } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const SOCIAL_LINKS = [
  { icon: Linkedin, href: '#' },
  { icon: Github, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: TikTokIcon, href: '#' },
];

export function Sidebar() {
  const pathname = usePathname();
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-patricia');
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const NAV_ITEMS = [
    { label: t.nav.home, icon: Home, href: '/' },
    { label: t.nav.about, icon: User, href: '/about' },
    { label: t.nav.projects, icon: Briefcase, href: '/projects' },
    { label: t.nav.stack, icon: Star, href: '/stack' },
    { label: t.nav.contact, icon: Mail, href: '/contact' },
    { label: t.nav.licensing, icon: FileText, href: '/licensing' },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-sidebar">
      <div className="p-8 flex flex-col items-start">
        {/* Profile and Language Toggle Header */}
        <div className="w-full flex justify-between items-start mb-8">
          <div className="relative w-36 h-36 rounded-2xl overflow-hidden bg-muted border border-white/10 shadow-2xl ring-1 ring-white/5 pointer-events-none">
            <Image
              src="/image/profile.png"
              alt="Portrait of Adioumani Jean, Network & Web Developer"
              fill
              priority
              className="object-cover grayscale contrast-[1.1]"
              data-ai-hint="professional portrait of Adioumani Jean, Network & Web Developer, in a modern and minimalist style, with a focus on clarity and professionalism"
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
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 transition-all rounded-lg group ${
                      isActive 
                      ? 'bg-[#1a1a1a] text-white' 
                      : 'text-muted-foreground hover:text-white hover:bg-sidebar-accent'
                    }`}
                  >
                    <item.icon className={`w-4 h-4 ${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`} />
                    <span className="text-[13px] font-medium">{item.label}</span>
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
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-sidebar/80 backdrop-blur-md border-b border-sidebar-border z-40 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-muted border border-border/50 pointer-events-none">
            <Image
              src="/image/profile.png"
              alt="Profile"
              fill
              className="object-cover grayscale"
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
