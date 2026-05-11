import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workflow Modernization Services | Project Buddy',
  description: 'Modernize and optimize your business workflows with AI automation. Reduce process cycle times by 40-60% and improve operational efficiency dramatically.',
  keywords: 'workflow modernization, workflow optimization, process modernization, business process improvement, workflow automation',
  openGraph: {
    title: 'Workflow Modernization Services',
    description: 'Modernize workflows with AI-driven process optimization and intelligent automation.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/workflow-modernization',
  },
  robots: { index: true, follow: true },
};

export default function WorkflowModernizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
