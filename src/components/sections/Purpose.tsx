import React from 'react';

export const Purpose: React.FC = () => {
  return (
    <section id='about' className="py-24 bg-brand-bg">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <span className="inline-block ring-brand-accent px-4 py-1 rounded-full bg-white/5 border border-brand-accent text-[11px] font-bold uppercase tracking-widest text-white/60">
                Our purpose
            </span>
            
            <div className="relative">
                <h2 className="section-title">
                Change your <br />
                <span className="italic-serif text-[clamp(2.5rem,7vw,4.5rem)]">life</span> and <br />
                pursue any <br />
                goal you <br />
                put your mind to
                </h2>

                <div className="flex -space-x-4 pt-10">
                {[1, 2, 3, 4, 5].map((i) => (
                    <img
                    key={i}
                    src={`https://i.pravatar.cc/100?u=coach${i}`}
                    className="w-14 h-14 rounded-full border-4 border-brand-bg object-cover shadow-2xl"
                    alt="Coach"
                    />
                ))}
                </div>
            </div>
          </div>

          <div className="space-y-10 pt-20">
            <p className="text-xl text-white/70 leading-relaxed font-medium text-balance">
              At EliteKoach, we believe anyone can change their life and pursue any goal they put their mind to. Our AI coach matching tool, Eli, connects you with the perfect coach and acts as your accountability partner—keeping you mentally aligned with daily check-ins to ensure you stay on track.
            </p>

            <p className="text-base text-white/40 leading-relaxed">
              Whether you want to book a live 1:1 session or send a video for personalised feedback, Eli makes the experience seamless and keeps you focused on your goals.
            </p>

            <p className="text-base text-white/40 leading-relaxed">
              Your mind sets the limit. With the right coach and daily accountability, you can achieve anything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
