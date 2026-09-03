import type { Metadata } from 'next';
import { Sidebar } from '@/components/Sidebar';
import { About } from '@/components/About';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'About | Adioumani Jean',
  description: "Education, certifications and experience of Adioumani Jean, a Network & DevSecOps Engineer transitioning into Backend, Data Engineering and Applied AI, based in Abidjan, Côte d'Ivoire.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Sidebar />
      
      <main className="flex-1 pt-16 md:pt-0 md:ml-[280px]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <About />
        </div>
      </main>
      
      <Toaster />
    </div>
  );
}
