import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageContext';
import { SmoothScrollProvider } from '@/components/motion/SmoothScrollProvider';
import { CustomCursor } from '@/components/motion/CustomCursor';
import { ScrollProgressBar } from '@/components/motion/ScrollProgressBar';
import { LoadingScreen } from '@/components/LoadingScreen';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Adioumani Jean | Network Engineering & Web Development',
    template: '%s',
  },
  description: 'A modern portfolio showcasing digital excellence and creative design across web development, network engineering and UI/UX design.',
  openGraph: {
    title: 'Adioumani Jean | Network Engineering & Web Development',
    description: 'A modern portfolio showcasing digital excellence and creative design across web development, network engineering and UI/UX design.',
    url: SITE_URL,
    siteName: 'Adioumani Jean',
    images: ['/image/profile.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Adioumani Jean | Network Engineering & Web Development',
    description: 'A modern portfolio showcasing digital excellence and creative design across web development, network engineering and UI/UX design.',
    images: ['/image/profile.png'],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Adioumani Jean',
  jobTitle: ['Web Designer', 'Full Stack Developer', 'Network Engineer', 'UI/UX Designer'],
  url: SITE_URL,
  image: `${SITE_URL}/image/profile.png`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Abidjan',
    addressCountry: "Côte d'Ivoire",
  },
  email: 'mailto:adioumani1972@gmail.com',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-body antialiased selection:bg-primary/30 selection:text-primary">
        <LanguageProvider>
          <SmoothScrollProvider>
            <LoadingScreen />
            <ScrollProgressBar />
            <CustomCursor />
            {children}
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
