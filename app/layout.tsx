import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import ParticleBackground from '@/components/ParticleBackground';
import Footer from '@/components/Footer';
import { ContactFormProvider } from '@/contexts/ContactFormContext';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'AI Automation & SaaS MVP Development for Startups',
  description: 'Build AI-powered SaaS MVPs in 6-8 weeks. AI automation, CRM systems, lead generation agents. Serving startups globally. Free consultation.',
  keywords: [
    'AI automation for startups',
    'SaaS MVP development',
    'AI agents for business',
    'startup product development',
    'AI lead generation system',
    'CRM automation software',
    'AI chatbot development',
    'workflow automation platform',
    'AI calling agents',
    'business automation software',
  ],

  authors: [{ name: 'Project Buddy', url: 'https://www.projectbuddy.co.in' }],

  creator: 'Project Buddy - AI & SaaS Development',
  publisher: 'Project Buddy - AI & SaaS Development',
  openGraph: {
    title: 'AI Automation & SaaS MVP Development for Startups',
    description: 'Build AI-powered SaaS MVPs in 6-8 weeks. Serving startups globally. AI automation, CRM systems, lead generation agents.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in',
    siteName: 'Project Buddy',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.projectbuddy.co.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Automation & SaaS MVP Development for Startups - Project Buddy',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation & SaaS MVP Development for Startups',
    description: 'Build AI-powered SaaS MVPs in 6-8 weeks. Serving startups globally.',
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
    googleBot: 'index, follow',
  },

  alternates: {
    canonical: 'https://www.projectbuddy.co.in',
  },

  other: {
    'facebook-domain-verification': '43vlc6bght55fqy30t4w1xrmfb2deh',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
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