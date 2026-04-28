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

export default function Home() {
  return (
    <main>
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