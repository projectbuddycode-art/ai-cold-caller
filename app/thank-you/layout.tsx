import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | Project Buddy',
  description: 'Thank you for your interest. We will get back to you soon.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
