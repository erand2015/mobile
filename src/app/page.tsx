import { LenisWrapper } from '@/components/LenisWrapper';
import Navbar from '@/components/Navbar';
import HeroPremium from '@/components/sections/HeroPremium';
import Phones3DShowcase from '@/components/sections/Phones3DShowcase';
import FeaturedGrid from '@/components/sections/FeaturedGrid';
import LuxuryDeals from '@/components/sections/LuxuryDeals';
import TopAccessories from '@/components/sections/TopAccessories';
import BrandsCarousel from '@/components/sections/BrandsCarousel';
import Footer from '@/components/Footer';

// Krijo një komponent të vogël inline ose veçmas
function TrustSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl mb-3">🚚</div>
          <h4 className="font-bold text-lg">Dorëzim 24-48h</h4>
          <p className="text-gray-400 text-sm">Në gjithë Shqipërinë</p>
        </div>
        <div>
          <div className="text-4xl mb-3">🛡️</div>
          <h4 className="font-bold text-lg">Garanci 2 Vjeçare</h4>
          <p className="text-gray-400 text-sm">Për të gjitha produktet</p>
        </div>
        <div>
          <div className="text-4xl mb-3">💳</div>
          <h4 className="font-bold text-lg">Pagesa të sigurta</h4>
          <p className="text-gray-400 text-sm">Kartë / Cash / Instalime</p>
        </div>
        <div>
          <div className="text-4xl mb-3">🔄</div>
          <h4 className="font-bold text-lg">Kthim 14 ditë</h4>
          <p className="text-gray-400 text-sm">Pa pyetje</p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <LenisWrapper>
      <Navbar />
      <main className="min-h-screen bg-black text-white overflow-hidden pt-20">
        <HeroPremium />
        <Phones3DShowcase />
        <FeaturedGrid />
        <LuxuryDeals />
        <TopAccessories />
        <TrustSection />
        <BrandsCarousel />
      </main>
      <Footer />
    </LenisWrapper>
  );
}