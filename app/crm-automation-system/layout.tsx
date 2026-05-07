import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CRM Automation System - Intelligent Customer Management | Project Buddy',
  description: 'Transform customer relationships with AI-powered CRM automation, workflow modernization, and intelligent customer data management systems.',
  keywords: [
    'CRM automation',
    'CRM modernization',
    'customer relationship management',
    'CRM system',
    'workflow automation',
    'customer data management',
  ],
  openGraph: {
    title: 'CRM Automation & Modernization',
    description: 'Intelligent CRM automation and workflow modernization for enterprise customer management.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/crm-automation-system',
  },
};

export default function CrmAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
