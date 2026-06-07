import React, { useState } from 'react';
import { Button } from '../common/Button';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-brand-bg/80 border-b border-white/5">
      <div className="section-container flex items-center justify-between h-20">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 bg-brand-accent rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-brand-bg rounded-[1px]" />
            </div>
            <span className="text-xl font-black tracking-tight text-white">EliteKoach</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[13px] font-medium text-white/60">
          {['Home', 'About', 'Benefits', 'FAQ'].map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="primary" className="hidden sm:inline-flex !bg-white !text-brand-bg hover:!bg-brand-accent !rounded-lg !py-2 !px-5 !text-[13px] !font-bold">
            Join the Community <ArrowUpRight size={16} />
          </Button>
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-brand-bg/95 backdrop-blur-xl border-b border-white/5 py-8">
          <div className="section-container flex flex-col gap-6">
            {['Home', 'About', 'Benefits', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-medium text-white/70 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button variant="primary" className="!bg-white !text-brand-bg !w-full justify-center">
              Join the Community <ArrowUpRight size={18} />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
