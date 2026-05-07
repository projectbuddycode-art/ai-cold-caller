import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import ParticleBackground from '@/components/ParticleBackground';
import Footer from '@/components/Footer';
import { ContactFormProvider } from '@/contexts/ContactFormContext';
import SchemaMarkup from '@/components/SchemaMarkup';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'dark light',
};

export const metadata: Metadata = {
  title: 'AI Software Modernization & Operational Intelligence | Project Buddy',
  description: 'Enterprise AI software modernization, workflow automation, and operational intelligence solutions. Transform business operations with AI-powered systems, CRM modernization, and intelligent process automation.',
  keywords: [
    'AI software modernization',
    'operational intelligence',
    'workflow automation',
    'business process automation',
    'AI transformation company',
    'CRM modernization',
    'operational efficiency systems',
    'AI consulting company',
    'intelligent business systems',
    'enterprise AI automation',
    'workflow modernization',
    'AI operational systems',
    'business automation company',
    'AI workflow optimization',
    'SaaS MVP development',
    'AI agents for business',
    'AI lead generation system',
  ],

  authors: [{ name: 'Project Buddy', url: 'https://www.projectbuddy.co.in' }],

  creator: 'Project Buddy',
  publisher: 'Project Buddy',
  
  openGraph: {
    title: 'Enterprise AI Software Modernization & Operational Intelligence',
    description: 'Transform your business with AI-powered operational intelligence, workflow automation, and intelligent systems modernization.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in',
    siteName: 'Project Buddy',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.projectbuddy.co.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Software Modernization & Operational Intelligence - Project Buddy',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise AI Software Modernization | Project Buddy',
    description: 'AI-powered operational intelligence and workflow automation for enterprise transformation.',
    creator: '@projectbuddy',
  },

  verification: {
    google: 'your-google-verification-code',
  },

  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://www.projectbuddy.co.in',
  },

  other: {
    'facebook-domain-verification': '43vlc6bght55fqy30t4w1xrmfb2deh',
    'og:type': 'business.business',
    'twitter:site': '@projectbuddy',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://www.projectbuddy.co.in" />
        <meta name="application-name" content="Project Buddy" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no" />
        <SchemaMarkup />
      </head>
      <body className={`${inter.className} bg-brand-light text-brand-text`}>
        <ContactFormProvider>
          <ParticleBackground />
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
        </ContactFormProvider>
      </body>
    </html>
  );
}