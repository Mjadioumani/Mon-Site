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
    default: 'Adioumani Jean | Network & DevSecOps Engineer — Backend, Data & Applied AI',
    template: '%s',
  },
  description: 'Portfolio of Adioumani Jean, a Network & DevSecOps Engineer at AROPARTNERS transitioning into Backend Development, Data Engineering and Applied AI. CAMES-accredited Bachelor\'s in Networks & Telecommunications, Highest Honors.',
  openGraph: {
    title: 'Adioumani Jean | Network & DevSecOps Engineer — Backend, Data & Applied AI',
    description: 'Portfolio of Adioumani Jean, a Network & DevSecOps Engineer at AROPARTNERS transitioning into Backend Development, Data Engineering and Applied AI. CAMES-accredited Bachelor\'s in Networks & Telecommunications, Highest Honors.',
    url: SITE_URL,
    siteName: 'Adioumani Jean',
    images: ['/image/profile.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Adioumani Jean | Network & DevSecOps Engineer — Backend, Data & Applied AI',
    description: 'Portfolio of Adioumani Jean, a Network & DevSecOps Engineer at AROPARTNERS transitioning into Backend Development, Data Engineering and Applied AI.',
    images: ['/image/profile.png'],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Adioumani Jean',
  jobTitle: ['Front-End Developer', 'Networks & DevSecOps Specialist', 'Backend Developer', 'Data Engineer'],
  worksFor: {
    '@type': 'Organization',
    name: 'AROPARTNERS',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Institut CERCO, Abidjan',
  },
  url: SITE_URL,
  image: `${SITE_URL}/image/profile.png`,
  sameAs: [
    'https://www.linkedin.com/in/adioumani-jean-martinien-fabrice',
    'https://github.com/Mjadioumani',
  ],
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
