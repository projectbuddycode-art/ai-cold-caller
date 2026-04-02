import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import BusinessImpact from '@/components/BusinessImpact';
import WhyProjectBuddy from '@/components/WhyProjectBuddy';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Authority from '@/components/Authority';
import Testimonials from '@/components/Testimonials';
import LeadershipTeam from '@/components/LeadershipTeam';
import FAQ from '@/components/FAQ';
import PremiumCTA from '@/components/PremiumCTA';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <HowItWorks />
      <BusinessImpact />
      <WhyProjectBuddy />
      <Services />
      <CaseStudies />
      <Authority />
      <Testimonials />
      <LeadershipTeam />
      <FAQ />
      <PremiumCTA />
    </main>
  );
}
