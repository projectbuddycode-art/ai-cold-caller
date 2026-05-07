import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WhatsApp Automation for Business - Intelligent Communication | Project Buddy',
  description: 'Automate WhatsApp communication, lead follow-ups, and customer engagement. Business process automation for scalable customer interactions and workflow modernization.',
  keywords: [
    'WhatsApp automation',
    'WhatsApp business automation',
    'WhatsApp lead generation',
    'communication automation',
    'customer engagement automation',
    'business messaging',
  ],
  openGraph: {
    title: 'WhatsApp Automation for Business',
    description: 'Intelligent WhatsApp automation for customer engagement, lead follow-ups, and business communication at scale.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/whatsapp-automation-for-business',
  },
};

export default function WhatsAppAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
