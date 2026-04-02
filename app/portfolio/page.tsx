import Testimonials from '@/components/Testimonials';
import BusinessImpact from '@/components/BusinessImpact';
import PremiumCTA from '@/components/PremiumCTA';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
  return (
    <main className="overflow-hidden">
      <BusinessImpact />
      <Testimonials />
      <PremiumCTA />
      <Footer />
    </main>
  );
}
