import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Operations Consulting Services | Project Buddy',
  description: 'Strategic AI operations consulting for enterprises. Develop operational intelligence strategies, implement AI systems, and transform business operations.',
  keywords: 'AI operations consulting, operations consulting, AI strategy, operational excellence, AI transformation consulting',
  openGraph: {
    title: 'AI Operations Consulting Services',
    description: 'Expert AI operations consulting to transform enterprise operations with intelligence and automation.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/ai-operations-consulting',
  },
  robots: { index: true, follow: true },
};

export default function AIOperationsConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
