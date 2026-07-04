"use client";

import { useParams, notFound } from 'next/navigation';
import { Sidebar } from '@/components/Sidebar';
import { ProjectDetail } from '@/components/ProjectDetail';
import { Toaster } from '@/components/ui/toaster';

const PROJECT_IDS = [
  'project-1', 'project-2', 'project-3', 'project-4'
];

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params.id as string;

  // If the project ID is not in our defined list, trigger the 404 page
  if (!PROJECT_IDS.includes(id)) {
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
