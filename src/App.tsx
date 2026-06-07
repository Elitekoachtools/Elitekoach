import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { LogoCarousel } from './components/sections/LogoCarousel';
import { Purpose } from './components/sections/Purpose';
import { HowItWorks } from './components/sections/HowItWorks';
import { Testimonials } from './components/sections/Testimonials';
import { Categories } from './components/sections/Categories';
import { MockupGrid } from './components/sections/MockupGrid';
import { BenefitsMasonry } from './components/sections/BenefitsMasonry';
import { FAQSection } from './components/sections/FAQSection';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-accent selection:text-brand-bg">
      <Navbar />
      <main>
        <Hero />
        <LogoCarousel />
        <Purpose />
        <HowItWorks />
        <Testimonials />
        <Categories />
        <MockupGrid />
        <BenefitsMasonry />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
