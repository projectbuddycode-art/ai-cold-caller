import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Intelligent Reporting Systems | Project Buddy',
  description: 'Deploy AI-powered reporting systems for real-time operational insights. Automate report generation, improve data accuracy, and enable proactive decision-making.',
  keywords: 'intelligent reporting, reporting automation, business intelligence reporting, automated reporting systems, operational dashboards',
  openGraph: {
    title: 'Intelligent Reporting Systems',
    description: 'AI-powered reporting systems for automated insights and real-time operational visibility.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/intelligent-reporting-systems',
  },
  robots: { index: true, follow: true },
};

export default function IntelligentReportingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
