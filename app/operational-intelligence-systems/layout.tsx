import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Operational Intelligence Systems | Project Buddy',
  description: 'Deploy real-time operational intelligence systems for enterprise visibility. Monitor, analyze, and optimize business operations with AI-powered dashboards and predictive insights.',
  keywords: 'operational intelligence, operational intelligence systems, business intelligence, real-time dashboards, operational visibility, predictive analytics',
  openGraph: {
    title: 'Operational Intelligence Systems',
    description: 'Enterprise operational intelligence platforms with real-time visibility and AI-driven insights.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/operational-intelligence-systems',
  },
  robots: { index: true, follow: true },
};

export default function OperationalIntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
