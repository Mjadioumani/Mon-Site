import { Figma, Globe, Box, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const STACK = [
  { name: 'Framer', desc: 'Web Design', icon: Globe },
  { name: 'Figma', desc: 'Interface Design', icon: Figma },
  { name: 'Notion', desc: 'Project Management', icon: Box },
];

export function TechStack() {
  return (
    <section id="stack" className="py-12 md:py-20 border-t border-border/10">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Stack</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {STACK.map((item, idx) => (
          <div key={idx} className="p-5 bg-card border border-border/10 rounded-xl flex items-center gap-4 hover:border-primary/30 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">{item.name}</h4>
              <p className="text-[9px] text-muted-foreground uppercase tracking-widest mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-10">
        <Button variant="outline" size="sm" className="rounded-full text-[9px] h-8 px-5 border-border bg-card font-bold uppercase tracking-widest hover:bg-muted">
          View all stack <ArrowUpRight className="ml-1 w-3 h-3" />
        </Button>
      </div>
    </section>
  );
}
