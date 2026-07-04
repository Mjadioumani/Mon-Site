
import { Sidebar } from '@/components/Sidebar';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { Toaster } from '@/components/ui/toaster';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Sidebar />
      
      <main className="flex-1 pt-16 md:pt-0 md:ml-[280px]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <ProjectsGrid />
        </div>
      </main>
      
      <Toaster />
    </div>
  );
}
