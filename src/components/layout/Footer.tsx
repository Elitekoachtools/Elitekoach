import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-brand-bg border-t border-white/5">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 opacity-60">
                <div className="w-5 h-5 bg-brand-accent rounded-sm flex items-center justify-center">
                    <div className="w-2.5 h-2.5 border border-brand-bg rounded-[1px]" />
                </div>
                <span className="text-sm font-bold tracking-tight text-white">EliteKoach</span>
            </div>

            <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.2em]">
                EliteKoach © 2026 - All rights reserved
            </p>

            <div className="flex items-center gap-8 text-[11px] font-bold text-white/40 uppercase tracking-widest">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};
