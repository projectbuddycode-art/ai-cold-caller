import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom SaaS Development India - Enterprise AI Solutions | Project Buddy',
  description: 'Build custom SaaS applications with AI integration. Enterprise-grade software modernization and operational intelligence for Indian businesses and startups.',
  keywords: [
    'SaaS development',
    'custom SaaS',
    'SaaS development India',
    'custom software development',
    'AI SaaS',
    'SaaS MVP development',
  ],
  openGraph: {
    title: 'Custom SaaS Development | AI-Powered Solutions',
    description: 'Enterprise custom SaaS development with AI integration and operational intelligence for business transformation.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/custom-saas-development-india',
  },
};

export default function SaasDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
