import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Workflow Automation Services | Project Buddy',
  description: 'Implement AI-powered workflow automation to eliminate manual work, improve consistency, and scale operations. Achieve 60-80% reduction in manual tasks.',
  keywords: 'AI workflow automation, workflow automation, intelligent automation, RPA, business automation, process automation',
  openGraph: {
    title: 'AI Workflow Automation Services',
    description: 'AI-powered workflow automation to eliminate repetitive tasks and improve operational efficiency.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/ai-workflow-automation',
  },
  robots: { index: true, follow: true },
};

export default function AIWorkflowAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
