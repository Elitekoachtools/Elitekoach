import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiStripe, SiZapier, SiAsana, SiNotion, SiSlack, SiOpenai } from 'react-icons/si';
import { FaApplePay } from 'react-icons/fa6';

export const LogoCarousel: React.FC = () => {
  const logos = [
    { icon: <FcGoogle size={32} />, name: 'Google' },
    { icon: <SiStripe size={48} className="text-[#635BFF]" />, name: 'Stripe' },
    { icon: <SiZapier size={32} className="text-[#FF4F00]" />, name: 'Zapier' },
    { icon: <SiAsana size={32} className="text-[#F95738]" />, name: 'Asana' },
    { icon: <FaApplePay size={48} className="text-white" />, name: 'Apple Pay' },
    { icon: <SiNotion size={32} className="text-white" />, name: 'Notion' },
    { icon: <SiSlack size={32} className="text-[#4A154B]" />, name: 'Slack' },
    { icon: <SiOpenai size={32} className="text-white" />, name: 'OpenAI' },
  ];

  const scrollingLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 bg-brand-bg/50 border-y border-white/5 overflow-hidden">
      <div className="section-container flex items-center gap-10">
        <p className="flex-shrink-0 text-[11px] font-black uppercase tracking-[0.2em] text-brand-accent whitespace-nowrap">Powered by:</p>
        
        <div className="flex overflow-hidden">
            <div className="flex animate-marquee gap-24 items-center">
            {scrollingLogos.map((logo, index) => (
                <div
                key={index}
                className="flex-shrink-0 flex items-center gap-3 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer"
                >
                {logo.icon}
                <span className="text-sm font-bold tracking-tight text-white/60">{logo.name}</span>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};
