import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CRM & ERP Modernization Services | Project Buddy',
  description: 'Modernize your CRM and ERP systems with intelligent platforms. Integrate legacy systems, improve visibility, and enable AI-driven decision making.',
  keywords: 'CRM modernization, ERP modernization, Salesforce, SAP modernization, system integration, CRM implementation',
  openGraph: {
    title: 'CRM & ERP Modernization Services',
    description: 'Enterprise CRM and ERP modernization with AI integration and workflow optimization.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/crm-erp-modernization',
  },
  robots: { index: true, follow: true },
};

export default function CRMERPModernizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
