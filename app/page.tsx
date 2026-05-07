import { Metadata } from 'next';
import Hero from '@/components/Hero'
import AIAutomationServices from '@/components/AIAutomationServices'
import SaasMVPDevelopment from '@/components/SaasMVPDevelopment'
import AIAgentsForBusiness from '@/components/AIAgentsForBusiness'
import GlobalClients from '@/components/GlobalClients'
import WhyChooseUs from '@/components/WhyChooseUs'
import CaseResults from '@/components/CaseResults'
import GlobalCTA from '@/components/GlobalCTA'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'AI Software Modernization & Operational Intelligence | Project Buddy',
  description: 'Transform business operations with AI software modernization, operational intelligence, workflow automation, and intelligent business systems. Enterprise-grade AI transformation.',
  openGraph: {
    title: 'Enterprise AI Software Modernization & Operational Intelligence',
    description: 'AI-powered operational intelligence, workflow automation, and business systems modernization for enterprises.',
    type: 'website',
    url: 'https://www.projectbuddy.co.in',
  },
  twitter: {
    title: 'AI Software Modernization | Project Buddy',
    description: 'Enterprise AI transformation and operational intelligence solutions.',
  },
};

export default function Home() {
  return (
    <main role="main">
      <Hero />
      <AIAutomationServices />
      <SaasMVPDevelopment />
      <AIAgentsForBusiness />
      <GlobalClients />
      <WhyChooseUs />
      <CaseResults />
      <GlobalCTA />
      <Testimonials />
      <FAQ />
    </main>
  )
}