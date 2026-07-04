import { Sidebar } from '@/components/Sidebar';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { TechStack } from '@/components/TechStack';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Sidebar />
      
      <main className="flex-1 pt-16 md:pt-0 md:ml-[280px]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <Hero />
          <Projects />
          <Testimonials />
          <TechStack />
          <Contact />
          
          <footer className="py-12 md:py-16 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-[10px] md:text-[11px] gap-4 border-t border-border/10 opacity-40">
            <p>© 2026 ADIOUMANI JEAN. ALL RIGHTS RESERVED.</p>
            <p>DESIGNED AND DEVELOPED BY ADIOUMANI JEAN</p>
          </footer>
        </div>
      </main>
      
      <Toaster />
    </div>
  );
}
