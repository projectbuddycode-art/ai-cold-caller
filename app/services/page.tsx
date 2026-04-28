import Services from '@/components/Services';
import ServiceCards from '@/components/ServiceCards';
import PremiumCTA from '@/components/PremiumCTA';

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <Services />
      <ServiceCards />
      <PremiumCTA />
    </main>
  );
}
