import { Metadata } from 'next';
import About from '@/components/About';
import Authority from '@/components/Authority';

export const metadata: Metadata = {
  title: 'About Project Buddy - Enterprise AI Transformation Company',
  description: 'Learn about Project Buddy, a premier AI software modernization company specializing in operational intelligence, workflow automation, and enterprise AI transformation.',
  keywords: [
    'AI transformation company',
    'AI consulting',
    'software modernization company',
    'operational intelligence',
    'business automation company',
  ],
  openGraph: {
    title: 'About Project Buddy - Enterprise AI Transformation',
    description: 'Discover how Project Buddy helps enterprises modernize with AI, operational intelligence, and intelligent workflow automation.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/about',
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden" role="main">
      <About />
      <Authority />
    </main>
  );
}
