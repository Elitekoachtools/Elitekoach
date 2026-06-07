import React from 'react';

export const Purpose: React.FC = () => {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-widest text-white/60">
                Our purpose
            </span>
            
            <div className="relative">
                <h2 className="section-title">
                Transforming <br />
                <span className="italic-serif text-[clamp(2.5rem,7vw,4.5rem)]">aspirations</span> into <br />
                achievements with <br />
                expert online <br />
                coaching
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
              At EliteKoach, we connect fans and learners with world-class celebrities, stars and professionals for personalised coaching. Users upload videos showcasing their skills or challenges, and in return, receive expert feedback, actionable tips, and advice from icons who've mastered their craft.
            </p>

            <p className="text-base text-white/40 leading-relaxed">
              Our advanced AI makes the experience seamless—helping users find the perfect coach for your goals and enabling coaches to create tailored content for their audience.
            </p>

            <p className="text-base text-white/40 leading-relaxed">
              For users, it's a chance to learn from the best. For coaches, it's an opportunity to inspire and grow their influence. At EliteKoach, we're turning ambition into achievement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
