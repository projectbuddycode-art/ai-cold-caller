import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Process Automation Consulting | Project Buddy',
  description: 'Enterprise business process automation consulting. Streamline operations, reduce costs, and improve efficiency with intelligent automation strategies.',
  keywords: 'business process automation, BPA, process automation, workflow automation, operational efficiency, process optimization',
  openGraph: {
    title: 'Business Process Automation Consulting',
    description: 'Strategic business process automation consulting for enterprise operations transformation.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/business-process-automation',
  },
  robots: { index: true, follow: true },
};

export default function BusinessProcessAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
