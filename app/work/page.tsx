import { Metadata } from 'next';
import TransformationCaseStudies from '@/components/TransformationCaseStudies';
import PremiumCTA from '@/components/PremiumCTA';

export const metadata: Metadata = {
  title: 'Enterprise Transformation Case Studies | Project Buddy',
  description: 'Explore how we transformed operations across industries with AI modernization, operational intelligence, and workflow automation.',
  keywords: [
    'case studies',
    'enterprise transformation',
    'AI implementation',
    'operational intelligence',
    'workflow automation',
    'business process optimization',
    'digital transformation',
    'operational efficiency',
    'industry solutions',
    'transformation results',
  ],
  openGraph: {
    title: 'Our Enterprise Transformation Case Studies',
    description: 'Discover how we transformed operations and delivered measurable business impact across industries.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/work',
  },
};

export default function WorkPage() {
  return (
    <main className="overflow-hidden" role="main">
      <TransformationCaseStudies />
      <PremiumCTA />
    </main>
  );
}
