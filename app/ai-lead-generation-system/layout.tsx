import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Lead Generation System - Intelligent Sales Pipeline | Project Buddy',
  description: 'Automate lead generation and qualification with AI-powered systems. Increase conversion rates with intelligent workflow automation and operational intelligence.',
  keywords: [
    'AI lead generation',
    'lead generation system',
    'AI sales automation',
    'lead qualification',
    'sales automation',
    'lead management',
  ],
  openGraph: {
    title: 'AI Lead Generation System',
    description: 'Intelligent AI-powered lead generation and qualification automation for sales teams.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/ai-lead-generation-system',
  },
};

export default function LeadGenerationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
