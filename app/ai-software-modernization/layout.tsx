import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Software Modernization Services | Project Buddy',
  description: 'Transform legacy systems with AI-driven software modernization. Improve operational efficiency by 3x, reduce costs by 30-50%, and build scalable, intelligent systems.',
  keywords: 'AI software modernization, legacy system modernization, software transformation, operational modernization, enterprise modernization, system upgrade',
  openGraph: {
    title: 'AI Software Modernization Services',
    description: 'Enterprise AI software modernization to transform legacy systems into intelligent, scalable platforms.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/ai-software-modernization',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIModernizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
