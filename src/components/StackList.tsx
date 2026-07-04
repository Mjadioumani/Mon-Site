"use client";

import { Figma, Globe, Box, Cpu, FileCode, Palette, ImageIcon, PenTool, Layers } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export function StackList() {
  const { t } = useLanguage();

  const TECH_ITEMS = [
    { name: 'Framer', description: t.stack.framer, icon: Globe, iconColor: 'text-white' },
    { name: 'Figma', description: t.stack.figma, icon: Figma, iconColor: 'text-[#F24E1E]' },
    { name: 'Notion', description: t.stack.notion, icon: Box, iconColor: 'text-white' },
    { name: 'Chat GPT', description: t.stack.chatgpt, icon: Cpu, iconColor: 'text-[#10A37F]' },
    { name: 'HTML 5', description: t.stack.html, icon: FileCode, iconColor: 'text-[#E34F26]' },
    { name: 'CSS 3', description: t.stack.css, icon: Palette, iconColor: 'text-[#1572B6]' },
    { name: 'Photoshop', description: t.stack.photoshop, icon: ImageIcon, iconColor: 'text-[#31A8FF]' },
    { name: 'Illustrator', description: t.stack.illustrator, icon: PenTool, iconColor: 'text-[#FF9A00]' },
    { name: 'React', description: t.stack.react, icon: Layers, iconColor: 'text-[#61DAFB]' }
  ];

  return (
    <section className="py-12 md:py-20 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12">{t.stack.title}</h1>
      </div>

      <div className="space-y-4 max-w-3xl">
        {TECH_ITEMS.map((item, idx) => (
          <div 
            key={idx} 
            className="group flex items-center justify-between p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-muted/30 flex items-center justify-center border border-white/5">
                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-[14px] font-bold text-white tracking-wide">{item.name}</h3>
                <p className="text-[12px] text-muted-foreground font-medium">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Signature Section */}
      <div className="pt-24 pb-12">
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
