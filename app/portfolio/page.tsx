import Testimonials from '@/components/Testimonials';
import BusinessImpact from '@/components/BusinessImpact';
import PremiumCTA from '@/components/PremiumCTA';

export default function PortfolioPage() {
  return (
    <main className="overflow-hidden">
      <BusinessImpact />
      <Testimonials />
      <PremiumCTA />
    </main>
  );
}
