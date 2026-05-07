import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot for Business - Conversational AI Solutions | Project Buddy',
  description: 'Deploy intelligent AI chatbots for customer support, lead qualification, and 24/7 customer engagement. Workflow automation for business communication.',
  keywords: [
    'AI chatbot',
    'business chatbot',
    'customer support chatbot',
    'conversational AI',
    'chatbot automation',
    'customer engagement',
  ],
  openGraph: {
    title: 'AI Chatbot Solutions for Business',
    description: 'Intelligent conversational AI chatbots for enhanced customer engagement and operational efficiency.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in/ai-chatbot-for-business',
  },
};

export default function ChatbotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
