import WhatWeDo from '@/components/WhatWeDo';
import OurProducts from '@/components/OurProducts';
import EngineeringDemos from '@/components/EngineeringDemos';
import PremiumCTA from '@/components/PremiumCTA';
import Footer from '@/components/Footer';

export default function WorkPage() {
  return (
    <main className="overflow-hidden">
      <WhatWeDo />
      <OurProducts />
      <EngineeringDemos />
      <PremiumCTA />
      <Footer />
    </main>
  );
}
