import Services from '@/components/Services';
import ServiceCards from '@/components/ServiceCards';
import PremiumCTA from '@/components/PremiumCTA';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <Services />
      <ServiceCards />
      <PremiumCTA />
      <Footer />
    </main>
  );
}
