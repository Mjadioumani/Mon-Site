import type { LucideIcon } from 'lucide-react';
import {
  Figma,
  Globe,
  Box,
  Cpu,
  FileCode,
  Palette,
  ImageIcon,
  PenTool,
  Layers,
  Terminal,
  Network,
  Database,
  ShieldCheck,
  GitBranch,
} from 'lucide-react';
import type { translations } from '@/lib/translations';

export type SkillLevel = 'advanced' | 'comfortable' | 'learning';

/** Visual proxy for the animated bar width — qualitative tiers, not a fabricated precise score. */
export const LEVEL_WIDTH: Record<SkillLevel, number> = {
  advanced: 90,
  comfortable: 65,
  learning: 35,
};

type StackDescKey = keyof typeof translations['en']['stack'];

export interface StackItem {
  name: string;
  icon: LucideIcon;
  iconColor: string;
  level: SkillLevel;
  descKey: Exclude<StackDescKey, 'title' | 'levels'>;
}

/**
 * Single source of truth for the tech stack, consumed by the home teaser
 * (TechStack.tsx) and the full page (StackList.tsx).
 */
export const STACK_ITEMS: StackItem[] = [
  { name: 'Networking', icon: Network, iconColor: 'text-primary', level: 'advanced', descKey: 'networking' },
  { name: 'HTML5', icon: FileCode, iconColor: 'text-[#E34F26]', level: 'advanced', descKey: 'html' },
  { name: 'CSS3', icon: Palette, iconColor: 'text-[#1572B6]', level: 'advanced', descKey: 'css' },
  { name: 'React', icon: Layers, iconColor: 'text-[#61DAFB]', level: 'comfortable', descKey: 'react' },
  { name: 'Linux', icon: Terminal, iconColor: 'text-white', level: 'comfortable', descKey: 'linux' },
  { name: 'Git', icon: GitBranch, iconColor: 'text-[#F05032]', level: 'comfortable', descKey: 'git' },
  { name: 'Figma', icon: Figma, iconColor: 'text-[#F24E1E]', level: 'comfortable', descKey: 'figma' },
  { name: 'MongoDB', icon: Database, iconColor: 'text-[#47A248]', level: 'learning', descKey: 'mongodb' },
  { name: 'Cybersecurity', icon: ShieldCheck, iconColor: 'text-primary', level: 'learning', descKey: 'cybersecurity' },
  { name: 'Framer', icon: Globe, iconColor: 'text-white', level: 'comfortable', descKey: 'framer' },
  { name: 'Notion', icon: Box, iconColor: 'text-white', level: 'advanced', descKey: 'notion' },
  { name: 'ChatGPT / AI Tools', icon: Cpu, iconColor: 'text-[#10A37F]', level: 'advanced', descKey: 'chatgpt' },
  { name: 'Photoshop', icon: ImageIcon, iconColor: 'text-[#31A8FF]', level: 'comfortable', descKey: 'photoshop' },
  { name: 'Illustrator', icon: PenTool, iconColor: 'text-[#FF9A00]', level: 'comfortable', descKey: 'illustrator' },
];
