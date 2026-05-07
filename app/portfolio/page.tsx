import { Metadata } from 'next';
import Testimonials from '@/components/Testimonials';
import BusinessImpact from '@/components/BusinessImpact';
import PremiumCTA from '@/components/PremiumCTA';

export const metadata: Metadata = {
  title: 'Portfolio - AI Modernization Case Studies | Project Buddy',
  description: 'Explore our case studies and success stories of enterprise AI software modernization, operational intelligence, and workflow automation implementations.',
  keywords: [
    'AI case studies',
    'operational intelligence case studies',
    'workflow automation success stories',
    'business transformation case studies',
    'AI implementation examples',
  ],
  openGraph: {
    title: 'Portfolio - Enterprise AI Transformation Case Studies',
    description: 'See how enterprises achieved operational excellence through AI modernization and intelligent workflow automation.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <main className="overflow-hidden" role="main">
      <BusinessImpact />
      <Testimonials />
      <PremiumCTA />
    </main>
  );
}
