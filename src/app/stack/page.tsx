import type { Metadata } from 'next';
import { Sidebar } from '@/components/Sidebar';
import { StackList } from '@/components/StackList';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Tech Stack | Adioumani Jean',
  description: 'The tools and technologies Adioumani Jean uses across web development, networking and design.',
};

export default function StackPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Sidebar />
      
      <main className="flex-1 pt-16 md:pt-0 md:ml-[280px]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <StackList />
        </div>
      </main>
      
      <Toaster />
    </div>
  );
}
