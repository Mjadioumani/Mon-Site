"use client";

import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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

export function ContactPageContent() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-24 space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-1000 min-h-screen flex flex-col">
      {/* Page Title */}
      <div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">{t.contact.title}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 flex-grow">
        {/* Left Column: Form */}
        <div className="space-y-8">
          <h3 className="text-lg font-bold text-white tracking-wide">{t.contact.messageMe}</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input 
                placeholder={t.contact.name} 
                className="bg-[#141414] border-none h-14 px-5 text-[13px] focus-visible:ring-1 focus-visible:ring-primary/50"
              />
              <Input 
                placeholder={t.contact.email} 
                type="email"
                className="bg-[#141414] border-none h-14 px-5 text-[13px] focus-visible:ring-1 focus-visible:ring-primary/50"
              />
            </div>
            <Textarea 
              placeholder={t.contact.message} 
              className="bg-[#141414] border-none min-h-[220px] p-5 text-[13px] focus-visible:ring-1 focus-visible:ring-primary/50 resize-none"
            />
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 font-bold text-[13px] uppercase tracking-widest rounded-xl transition-all">
              {t.contact.send}
            </Button>
          </form>
        </div>

        {/* Right Column: Info */}
        <div className="space-y-16">
          {/* Contact Details */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold text-white tracking-wide">{t.contact.contactTitle}</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors cursor-pointer group">
                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-[13px] font-medium tracking-wide">adioumani1972@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors cursor-pointer group">
                <Phone className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-[13px] font-medium tracking-wide">+225 01 70 50 59 03</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold text-white tracking-wide">{t.contact.socialTitle}</h3>
            <div className="space-y-6">
              <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-[13px] font-medium tracking-wide">LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-[13px] font-medium tracking-wide">GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-[13px] font-medium tracking-wide">Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                <TikTokIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-[13px] font-medium tracking-wide">TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-auto pt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-muted-foreground font-medium uppercase tracking-widest border-t border-white/5 pt-10">
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-center text-center md:text-left">
            <span>{t.common.copyright}</span>
            <span>{t.common.madeBy}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
