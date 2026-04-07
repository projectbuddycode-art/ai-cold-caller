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
  title: 'Project Buddy | AI & SaaS Engineering Studio',
  description:
    'Enterprise-grade AI automation systems and scalable SaaS platforms. Built by engineers from JP Morgan Chase, Cisco. Fast execution, no agency bloat.',

  keywords: [
    'AI Engineering',
    'SaaS Development',
    'MVP Engineering',
    'AI Automation',
    'Startup CTO',
    'Enterprise Software',
    'AI Integration',
    'Workflow Automation',
    'AI-Powered Solutions',
  ],

  authors: [{ name: 'Project Buddy', url: 'https://www.projectbuddy.co.in' }],

  creator: 'Project Buddy',
  publisher: 'Project Buddy',

  openGraph: {
    title: 'Project Buddy | AI & SaaS Engineering Studio',
    description:
      'Enterprise-grade AI automation systems and scalable SaaS platforms.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in', // ✅ FIXED (www consistency)
    siteName: 'Project Buddy',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.projectbuddy.co.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Project Buddy - AI & SaaS Engineering',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Project Buddy | AI & SaaS Engineering Studio',
    description:
      'Enterprise-grade AI automation systems and scalable SaaS platforms.',
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
    canonical: 'https://www.projectbuddy.co.in', // ✅ FIXED
  },

  // 🔥 FACEBOOK DOMAIN VERIFICATION (CRITICAL)
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