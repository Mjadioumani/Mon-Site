import type { LucideIcon } from 'lucide-react';
import {
  Figma,
  Box,
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
  Braces,
  Server,
  Activity,
  Workflow,
  Sparkles,
  HardDrive,
  FolderTree,
  Router,
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
 * (TechStack.tsx) and the full page (StackList.tsx). Ordered with the
 * backend / data / network core first — that's the featured slice shown
 * on the home page (STACK_ITEMS.slice(0, 6)).
 */
export const STACK_ITEMS: StackItem[] = [
  { name: 'React', icon: Layers, iconColor: 'text-[#61DAFB]', level: 'advanced', descKey: 'react' },
  { name: 'HTML5', icon: FileCode, iconColor: 'text-[#E34F26]', level: 'advanced', descKey: 'html' },
  { name: 'CSS3', icon: Palette, iconColor: 'text-[#1572B6]', level: 'advanced', descKey: 'css' },
  { name: 'Networking', icon: Network, iconColor: 'text-primary', level: 'advanced', descKey: 'networking' },
  { name: 'Python', icon: Braces, iconColor: 'text-[#3776AB]', level: 'advanced', descKey: 'python' },
  { name: 'Zabbix', icon: Activity, iconColor: 'text-[#D40000]', level: 'comfortable', descKey: 'zabbix' },
  { name: 'Django', icon: Server, iconColor: 'text-[#0C4B33]', level: 'advanced', descKey: 'django' },
  { name: 'PostgreSQL', icon: Database, iconColor: 'text-[#4169E1]', level: 'advanced', descKey: 'postgresql' },
  { name: 'Linux', icon: Terminal, iconColor: 'text-white', level: 'advanced', descKey: 'linux' },
  { name: 'Windows Server', icon: HardDrive, iconColor: 'text-[#0078D4]', level: 'comfortable', descKey: 'windowsServer' },
  { name: 'Active Directory', icon: FolderTree, iconColor: 'text-[#00A4EF]', level: 'comfortable', descKey: 'activeDirectory' },
  { name: 'Cisco Packet Tracer', icon: Router, iconColor: 'text-[#049FD9]', level: 'comfortable', descKey: 'ciscoPacketTracer' },
  { name: 'LLM & AI APIs', icon: Sparkles, iconColor: 'text-[#D97757]', level: 'comfortable', descKey: 'llm' },
  { name: 'DevSecOps & Automation', icon: Workflow, iconColor: 'text-primary', level: 'comfortable', descKey: 'automation' },
  { name: 'Git', icon: GitBranch, iconColor: 'text-[#F05032]', level: 'comfortable', descKey: 'git' },
  { name: 'Cybersecurity', icon: ShieldCheck, iconColor: 'text-primary', level: 'comfortable', descKey: 'cybersecurity' },
  { name: 'MongoDB', icon: Database, iconColor: 'text-[#47A248]', level: 'comfortable', descKey: 'mongodb' },
  { name: 'Figma', icon: Figma, iconColor: 'text-[#F24E1E]', level: 'comfortable', descKey: 'figma' },
  { name: 'Notion', icon: Box, iconColor: 'text-white', level: 'advanced', descKey: 'notion' },
  { name: 'Photoshop', icon: ImageIcon, iconColor: 'text-[#31A8FF]', level: 'comfortable', descKey: 'photoshop' },
  { name: 'Illustrator', icon: PenTool, iconColor: 'text-[#FF9A00]', level: 'comfortable', descKey: 'illustrator' },
];
