import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study - Diamond Photography Software | Project Buddy',
  description: 'How we modernized photography business operations with AI workflow automation, CRM modernization, and operational intelligence systems.',
  keywords: [
    'photography software',
    'business case study',
    'AI modernization case study',
    'workflow automation success',
    'operational efficiency',
  ],
  openGraph: {
    title: 'Case Study - Diamond Photography Software AI Modernization',
    description: 'See how we transformed photography business operations with intelligent automation and modernization.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/case-study-diamond-photography-software',
  },
};

export default function DiamondPhotographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
