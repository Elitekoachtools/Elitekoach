import React from "react";

import Jordan from '../../assets/benefits/jordan.png'
import Benefit from '../../assets/benefits/benefit.png'
import Ballet from '../../assets/benefits/ballet.png'


import Mentor1 from '../../assets/benefits/mentor-1.png'
import Mentor2 from '../../assets/benefits/mentor-2.png'
import Mentor3 from '../../assets/benefits/mentor-3.png'
import Mentor4 from '../../assets/benefits/mentor-4.png'
import Mentor5 from '../../assets/benefits/mentor-5.png'
import Mentor6 from '../../assets/benefits/mentor-6.png'



export const BenefitsMasonry: React.FC = () => {

  const mentors = [Mentor1,Mentor2,Mentor3,Mentor4,Mentor5,Mentor6]


  return (
    <section id="benefits" className="bg-brand-accent py-24 pb-32 overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-bg/5 border border-brand-bg/10 text-[11px] font-bold uppercase tracking-widest text-brand-bg/60 mb-8">
            Benefits
          </span>
          <h2 className="section-title text-brand-bg text-center mb-6">
            Change Your Life With EliteKoach
          </h2>
          <p className="text-brand-bg/60 text-lg font-medium">
            Pursue any goal. Stay accountable. Get coached by the best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Radar Chart */}
          <div className="lg:col-span-5 bg-white rounded-[40px] p-10 flex flex-col items-center text-center shadow-lg">
            <div className="relative w-full aspect-square mb-10 flex items-center justify-center">
              <div className="relative w-full h-full border border-dashed border-slate-100 rounded-full flex items-center justify-center">
                <svg
                  width="45"
                  height="44"
                  viewBox="0 0 45 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="44.12" height="44" rx="22" fill="#15253B" />
                  <path
                    d="M30.8844 34H16.1937C12.882 34 10.0902 31.006 10.0035 27.2032C9.92651 23.2851 12.6798 20.0793 16.0781 20.0793H34.1191C34.1191 22.1203 32.675 23.7857 30.8844 23.7857H16.1552C14.5667 23.7857 13.2093 25.2779 13.2382 27.0975C13.2671 28.8687 14.5282 30.3032 16.0781 30.3032H34.1191C34.1191 32.3441 32.675 34 30.8844 34Z"
                    fill="#A0FC90"
                  />
                  <path
                    d="M12.3823 16.9603C10.3895 16.9603 9.27277 14.2936 10.5339 12.5415C11.6506 10.9916 13.3353 10 15.2222 10H30.038C31.8191 10 33.2727 11.6558 33.2727 13.7064H15.2319C13.6627 13.7064 12.3823 15.1697 12.3823 16.9603Z"
                    fill="#A0FC90"
                  />
                </svg>
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <div
                    key={i}
                    className="absolute w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden"
                    style={{
                      transform: `rotate(${angle}deg) translateY(-100px) rotate(-${angle}deg)`,
                    }}
                  >
                    <img
                      src={`${mentors[i]}`}
                      className="w-full h-full object-cover"
                      alt="Mentor"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-black uppercase tracking-tight text-brand-bg">
                World-Class Mentors at Your Fingertips
              </h4>
              <p className="text-sm text-brand-bg/50 leading-relaxed font-medium">
                Get direct access to industry-leading coaches, from business
                moguls to sports icons, who share proven strategies and insights
                tailored to your goals.
              </p>
            </div>
          </div>

          {/* Card 2: Results (Woman with headphones) */}
          <div className="lg:col-span-7 bg-white rounded-[40px] overflow-hidden shadow-lg flex flex-col">
            <div className="flex-1 min-h-75 relative">
              <img
                src={Benefit}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Results"
              />
            </div>
            <div className="p-10 text-center space-y-4">
              <h4 className="text-xl font-black uppercase tracking-tight text-brand-bg">
                Proven Results, Backed by Experts
              </h4>
              <p className="text-sm text-brand-bg/50 leading-relaxed font-medium">
                Join thousands who've transformed their lives with these elite
                coaches. Their methods are tried, tested, and trusted by the
                best in the world.
              </p>
            </div>
          </div>

          {/* Card 3: Lifestyle (Yoga) */}
          <div className="lg:col-span-3 bg-white rounded-[40px] overflow-hidden shadow-lg flex flex-col">
            <div className="flex-1 min-h-60 relative">
              <img
                src={Ballet}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Flexible Coaching"
              />
            </div>
            <div className="p-8 text-center space-y-3">
              <h4 className="text-lg font-black uppercase tracking-tight text-brand-bg">
                Convenient and Flexible Coaching
              </h4>
              <p className="text-xs text-brand-bg/50 leading-relaxed font-medium">
                Access live sessions, on-demand resources, and tailored tracks
                anytime, anywhere—perfect for your busy lifestyle.
              </p>
            </div>
          </div>

          {/* Card 4: MJ Quote */}
          <div className="lg:col-span-5 bg-white rounded-[40px] p-10 lg:p-14 flex flex-col justify-center shadow-lg relative overflow-hidden group">
            <div className="relative z-10 space-y-8">
              <p className="italic-serif text-2xl lg:text-3xl text-brand-bg leading-tight">
                "My coach was my mentor, and he pushed me to be better than I
                thought I could be. That's what great coaching does—it unlocks
                potential."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={Jordan}
                  className="w-10 h-10 rounded-full"
                  alt="Michael Jordan"
                />
                <span className="text-sm font-black uppercase tracking-widest text-brand-bg">
                  Michael Jordan
                </span>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-5 text-brand-bg transform translate-x-4 -translate-y-4">
              <svg
                width="120"
                height="100"
                viewBox="0 0 48 38"
                fill="currentColor"
              >
                <path d="M12.4 37.6C9.2 37.6 6.53333 36.4667 4.4 34.2C2.26667 31.9333 1.2 29.1333 1.2 25.8C1.2 21.6667 2.4 17.6667 4.8 13.8C7.2 9.8 10.4 6.33333 14.4 3.4L18.4 8.6C15.6 10.8667 13.4667 13.4 12 16.2C10.5333 19 9.8 21.6 9.8 24C10.8667 23.4667 12.0667 23.2 13.4 23.2C15.9333 23.2 18.0667 24.1333 19.8 26C21.5333 27.7333 22.4 29.9333 22.4 32.6C22.4 34.0667 22.0667 35.3333 21.4 36.4C20.7333 37.2 19.8 37.6 18.6 37.6H12.4Z" />
              </svg>
            </div>
          </div>

          {/* Card 5: Chat Mockup */}
          <div className="lg:col-span-4 bg-white rounded-[40px] p-8 flex flex-col shadow-lg">
            <div className="flex-1 bg-slate-50 rounded-3xl p-6 space-y-6 flex flex-col justify-end">
              <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm max-w-[85%] self-start border border-slate-100">
                <p className="text-xs font-medium text-slate-400 mb-1">
                  Coach Glen
                </p>
                <p className="text-[13px] text-brand-bg font-medium">
                  Hey Glen, I just watched your tape—great work! I've got a few
                  tips to help take your performance to the next level.
                </p>
              </div>
              <div className="bg-brand-accent p-4 rounded-2xl rounded-br-none shadow-sm max-w-[85%] self-end">
                <p className="text-[13px] text-brand-bg font-bold">
                  Wow, this is incredible. Thanks so much for the quick
                  feedback—this is going to help a ton! 🚀
                </p>
              </div>
            </div>
            <div className="mt-8 text-center space-y-2">
              <h4 className="text-lg font-black uppercase tracking-tight text-brand-bg">
                Personalised Guidance, Not Generic Advice
              </h4>
              <p className="text-xs text-brand-bg/50 leading-relaxed font-medium">
                Every session is crafted to address your unique challenges,
                helping you achieve breakthroughs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
