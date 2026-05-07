import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - AI Modernization & Workflow Automation Insights | Project Buddy',
  description: 'Expert insights on AI software modernization, operational intelligence, workflow automation, and business transformation. Industry trends and best practices.',
  keywords: [
    'AI blog',
    'workflow automation blog',
    'operational intelligence blog',
    'AI insights',
    'business automation insights',
    'AI modernization guide',
  ],
  openGraph: {
    title: 'Blog - AI Insights & Modernization Strategies',
    description: 'Read expert insights on AI software modernization, operational intelligence, and workflow automation.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
