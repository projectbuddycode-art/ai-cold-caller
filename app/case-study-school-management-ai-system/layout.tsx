import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study - School Management AI System | Project Buddy',
  description: 'How we modernized school operations with AI-powered management systems, workflow automation, and operational intelligence for educational institutions.',
  keywords: [
    'school management system',
    'education technology',
    'AI modernization case study',
    'educational automation',
    'operations management',
  ],
  openGraph: {
    title: 'Case Study - School Management AI System Modernization',
    description: 'Discover how AI-powered systems transformed school operations and educational management.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/case-study-school-management-ai-system',
  },
};

export default function SchoolManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
