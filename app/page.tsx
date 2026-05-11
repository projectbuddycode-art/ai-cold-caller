import { Metadata } from 'next';
import Hero from '@/components/Hero'
import OperationalPainPoints from '@/components/OperationalPainPoints'
import BeforeAfterModernization from '@/components/BeforeAfterModernization'
import AIOperationalFramework from '@/components/AIOperationalFramework'
import AITransformationMetrics from '@/components/AITransformationMetrics'
import AIAutomationServices from '@/components/AIAutomationServices'
import IndustrySolutions from '@/components/IndustrySolutions'
import AIOperationsAudit from '@/components/AIOperationsAudit'
import GlobalClients from '@/components/GlobalClients'
import WhyChooseUs from '@/components/WhyChooseUs'
import CaseResults from '@/components/CaseResults'
import GlobalCTA from '@/components/GlobalCTA'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'AI Software Modernization & Operational Intelligence | Project Buddy',
  description: 'Transform business operations with AI software modernization, operational intelligence, workflow automation, and intelligent business systems. Enterprise-grade AI transformation for 50+ global enterprises.',
  keywords: 'AI software modernization, operational intelligence, workflow modernization, AI workflow automation, business process automation, operational efficiency consulting, intelligent operational systems, AI operations consulting, CRM modernization, operational intelligence company',
  openGraph: {
    title: 'Enterprise AI Software Modernization & Operational Intelligence',
    description: 'AI-powered operational intelligence, workflow automation, and business systems modernization for enterprises. Reduce operational costs by 30-50% with intelligent automation.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in',
    images: [
      {
        url: 'https://www.projectbuddy.co.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Project Buddy - AI Software Modernization',
      },
    ],
  },
  twitter: {
    title: 'AI Software Modernization | Project Buddy',
    description: 'Enterprise AI transformation and operational intelligence solutions. Modernize workflows, automate operations, improve efficiency.',
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.projectbuddy.co.in',
  },
};

export default function Home() {
  return (
    <main role="main">
      <Hero />
      <OperationalPainPoints />
      <BeforeAfterModernization />
      <AIOperationalFramework />
      <AITransformationMetrics />
      <AIAutomationServices />
      <IndustrySolutions />
      <AIOperationsAudit />
      <GlobalClients />
      <WhyChooseUs />
      <CaseResults />
      <GlobalCTA />
      <Testimonials />
      <FAQ />
    </main>
  )
}