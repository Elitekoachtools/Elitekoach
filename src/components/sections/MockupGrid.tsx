import React from 'react';

export const MockupGrid: React.FC = () => {
  const items = [
    {
      title: "Join the Growth Community",
      desc: "It all begins with a simple step – creating your account. Join a community of learners, seekers, and achievers, ready to level up together.",
      img: "https://framerusercontent.com/images/FadBUb9XFrNoAaTgKN6fVhYxenc.png",
    },
    {
      title: "Your goals, your way.",
      desc: "Choose from a variety of categories that matter to you – whether it's career growth, personal wellness, or creative skills. Build a personalized experience aligned with your passions and priorities.",
      img: "https://framerusercontent.com/images/wZSpYNgw7SFsHjccGgtjAbAlZQ.png",
    },
    {
      title: "Find Your Perfect Coach",
      desc: "Explore a diverse range of professional coaches with expertise tailored to your goals. Select the right coach who aligns with your unique aspirations.",
      img: "https://framerusercontent.com/images/wTSdrgCPZ6Hh7Faerw2M5igc8c.png",
    },
    {
      title: "Learn and grow with elite talent",
      desc: "Book a session with your chosen coach to receive tailored feedback, expert insights, and actionable plans to improve. With their support, you'll tackle challenges, refine your skills, and grow beyond expectations.",
      img: "https://framerusercontent.com/images/zolkvCWrqxeFPkdfFS07TtXCJAI.png",
    }
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
            A global app platform that runs on web and mobile to make coaching easy, accessible and effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[48px] p-12 flex flex-col items-center text-center shadow-2xl">
              <div className="relative w-full aspect-[4/5] mb-12 bg-slate-50 rounded-[40px] overflow-hidden flex items-center justify-center p-8">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain drop-shadow-2xl scale-110"
                  />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-bg rounded-full flex items-center justify-center text-brand-accent font-black text-xl italic">E</div>
                <h4 className="text-2xl font-black uppercase tracking-tight text-brand-bg">
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
