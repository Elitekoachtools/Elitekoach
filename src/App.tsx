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
import About from './pages/About';

type Page = 'landing' | 'privacy' | 'terms' | 'cookies' | 'refund' | 'about';

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

  if (page === 'privacy') return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-accent selection:text-brand-bg">
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
  if (page === 'terms') return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-accent selection:text-brand-bg">
      <Navbar />
      <TermsOfService />
      <Footer />
    </div>
  );
  if (page === 'cookies') return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-accent selection:text-brand-bg">
      <Navbar />
      <CookiePolicy />
      <Footer />
    </div>
  );
  if (page === 'refund') return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-accent selection:text-brand-bg">
      <Navbar />
      <RefundPolicy />
      <Footer />
    </div>
  );
  if (page === 'about') return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-accent selection:text-brand-bg">
      <Navbar />
      <About />
      <Footer />
    </div>
  );

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
