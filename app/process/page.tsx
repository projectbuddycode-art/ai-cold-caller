import { Metadata } from 'next';
import HowItWorks from '@/components/HowItWorks';
import Process from '@/components/Process';
import PremiumCTA from '@/components/PremiumCTA';

export const metadata: Metadata = {
  title: 'Our Process - AI Modernization Methodology | Project Buddy',
  description: 'Understand our proven AI software modernization process, from discovery through implementation of operational intelligence and workflow automation.',
  keywords: [
    'AI implementation process',
    'software modernization process',
    'AI methodology',
    'transformation process',
    'workflow optimization process',
  ],
  openGraph: {
    title: 'AI Modernization Process & Methodology',
    description: 'Learn our proven process for enterprise AI transformation and operational intelligence implementation.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/process',
  },
};

export default function ProcessPage() {
  return (
    <main className="overflow-hidden" role="main">
      <HowItWorks />
      <Process />
      <PremiumCTA />
    </main>
  );
}
