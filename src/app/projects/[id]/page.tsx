import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Sidebar } from '@/components/Sidebar';
import { ProjectDetail } from '@/components/ProjectDetail';
import { Toaster } from '@/components/ui/toaster';
import { getProject, PROJECTS } from '@/lib/projects';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return {};

  const content = project.content.en;
  return {
    title: `${content.title} | Adioumani Jean`,
    description: content.shortDesc,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!getProject(id)) {
    notFound();
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Sidebar />

      <main className="flex-1 pt-16 md:pt-0 md:ml-[280px]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <ProjectDetail id={id} />
        </div>
      </main>

      <Toaster />
    </div>
  );
}
