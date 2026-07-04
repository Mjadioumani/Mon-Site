import type {Metadata} from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageContext';

export const metadata: Metadata = {
  title: "Adioumani Jean | Network Engineering & Web Development",
  description: 'A modern portfolio showcasing digital excellence and creative design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/30 selection:text-primary">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
