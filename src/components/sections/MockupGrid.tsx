import React from "react";
import Mob1 from '../../assets/sneakpeak/mob-1.png'
import Mob2 from '../../assets/sneakpeak/mob-2.png'
import Mob3 from '../../assets/sneakpeak/mob-3.png'
import Mob4 from '../../assets/sneakpeak/mob-4.png'


export const MockupGrid: React.FC = () => {
  const items = [
    {
      title: "Join the Growth Community",
      desc: "It all begins with a simple step – creating your account. Join a community of learners, seekers, and achievers, ready to level up together.",
      img: Mob1,
    },
    {
      title: "Your goals, your way.",
      desc: "Choose from a variety of categories that matter to you – whether it's career growth, personal wellness, or creative skills. Build a personalized experience aligned with your passions and priorities.",
      img: Mob2,
    },
    {
      title: "Find Your Perfect Coach",
      desc: "Explore a diverse range of professional coaches with expertise tailored to your goals. Select the right coach who aligns with your unique aspirations.",
      img: Mob3,
    },
    {
      title: "Learn and grow with elite talent",
      desc: "Book a session with your chosen coach to receive tailored feedback, expert insights, and actionable plans to improve. With their support, you'll tackle challenges, refine your skills, and grow beyond expectations.",
      img: Mob4,
    },
  ];

  return (
    <section className="bg-brand-accent py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-bg/5 border border-brand-bg/10 text-[11px] font-bold uppercase tracking-widest text-brand-bg/60 mb-8">
            Sneak Peak
          </span>
          <h2 className="section-title text-brand-bg text-center mb-8">
            Take a look at what we're building
          </h2>
          <p className="text-brand-bg/60 text-lg font-medium max-w-2xl mx-auto">
            A global app platform that runs on web and mobile to make coaching
            easy, accessible and effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[48px] p-12 flex flex-col items-center text-center shadow-2xl"
            >
              <div className="relative w-full aspect-5/5 mb-12 bg-slate-50 rounded-[40px] overflow-hidden flex items-center justify-center p-8">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain drop-shadow-2xl scale-110"
                />
              </div>
              <div className="flex items-center gap-3 mb-6">
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
                </svg>{" "}
                <h4 className="text-xl font-black uppercase tracking-tight text-brand-bg">
                  {item.title}
                </h4>
              </div>
              <p className="text-brand-bg/50 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
