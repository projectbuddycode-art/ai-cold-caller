import { Metadata } from 'next';
import Services from '@/components/Services';
import PremiumServiceCards from '@/components/PremiumServiceCards';
import PremiumCTA from '@/components/PremiumCTA';

export const metadata: Metadata = {
  title: 'AI Modernization & Workflow Automation Services | Project Buddy',
  description: 'Enterprise AI software modernization, operational intelligence, workflow automation, CRM modernization, ERP optimization, and AI consulting services.',
  keywords: [
    'AI workflow automation',
    'business process automation',
    'CRM modernization',
    'ERP optimization',
    'operational intelligence',
    'AI consulting',
    'workflow modernization',
    'business automation services',
    'AI software modernization',
    'intelligent systems',
  ],
  openGraph: {
    title: 'AI Modernization & Workflow Automation Services',
    description: 'Transform business operations with our AI modernization, operational intelligence, and workflow automation services.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/services',
  },
};

export default function ServicesPage() {
  return (
    <main className="overflow-hidden" role="main">
      <Services />
      <PremiumServiceCards />
      <PremiumCTA />
    </main>
  );
}
