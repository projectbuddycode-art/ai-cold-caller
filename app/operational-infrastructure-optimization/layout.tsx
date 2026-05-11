import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Operational Infrastructure Optimization | Project Buddy',
  description: 'Optimize your operational infrastructure for scalability, performance, and intelligence. Build AI-ready platforms that scale with your business.',
  keywords: 'infrastructure optimization, operational infrastructure, system architecture, infrastructure modernization, cloud infrastructure',
  openGraph: {
    title: 'Operational Infrastructure Optimization',
    description: 'Enterprise infrastructure optimization for AI-readiness and operational scalability.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/operational-infrastructure-optimization',
  },
  robots: { index: true, follow: true },
};

export default function OperationalInfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
