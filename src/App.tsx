import { useState, useEffect } from 'react';
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
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import RefundPolicy from './pages/RefundPolicy';

type Page = 'landing' | 'privacy' | 'terms' | 'cookies' | 'refund';

function App() {
  const [page, setPage] = useState<Page>('landing');

  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<Page>;
      setPage(custom.detail);
    };
    window.addEventListener('navigate', handler);
    return () => window.removeEventListener('navigate', handler);
  }, []);

  if (page === 'privacy') return <PrivacyPolicy />;
  if (page === 'terms') return <TermsOfService />;
  if (page === 'cookies') return <CookiePolicy />;
  if (page === 'refund') return <RefundPolicy />;

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
