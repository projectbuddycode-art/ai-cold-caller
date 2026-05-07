import { Metadata } from 'next';
import WhatWeDo from '@/components/WhatWeDo';
import OurProducts from '@/components/OurProducts';
import EngineeringDemos from '@/components/EngineeringDemos';
import PremiumCTA from '@/components/PremiumCTA';

export const metadata: Metadata = {
  title: 'Our Work - AI Solutions & Products | Project Buddy',
  description: 'Explore our AI-powered products, solutions, and engineering demos. Operational intelligence, workflow automation, and intelligent business systems.',
  keywords: [
    'AI products',
    'AI solutions',
    'operational intelligence products',
    'workflow automation tools',
    'business automation software',
  ],
  openGraph: {
    title: 'Our AI Solutions & Engineering Work',
    description: 'Discover our innovative AI-powered products and solutions for enterprise transformation.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/work',
  },
};

export default function WorkPage() {
  return (
    <main className="overflow-hidden" role="main">
      <WhatWeDo />
      <OurProducts />
      <EngineeringDemos />
      <PremiumCTA />
    </main>
  );
}
