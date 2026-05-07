import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Policies | Project Buddy',
  description: 'Privacy policy, terms of service, and other important policies for Project Buddy services.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
