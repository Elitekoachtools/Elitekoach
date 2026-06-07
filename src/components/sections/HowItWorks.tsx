import React from 'react';
import { Button } from '../common/Button';
import { ArrowUpRight, Video, UserCheck, Activity } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Video size={32} />,
      title: "Upload Your Video",
      desc: "Capture a short video showcasing your skills, whether it's singing, pitching, gaming, football or any activity you want to master."
    },
    {
      icon: <UserCheck size={32} />,
      title: "Send It to Your Coach",
      desc: "Pick your coach from our experts, submit your request, and receive personalised, actionable advice tailored to your goals."
    },
    {
      icon: <Activity size={32} />,
      title: "Get Expert Insights & Improve",
      desc: "Receive a video response packed with tips and strategies from your coach, helping you refine your skills and grow faster."
    }
  ];

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-widest text-white/60 mb-8">
            How it works
          </span>
          <h2 className="section-title text-center max-w-3xl mx-auto">
            Your Journey to <br />
            Mastery in 3 Steps
          </h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-16">
          {/* Flow Lines */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px border-t border-dashed border-white/10" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center space-y-6 group">
              <div className="w-16 h-16 bg-brand-secondary border border-white/10 rounded-full flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-500 z-10">
                {step.icon}
              </div>
              
              {idx < steps.length - 1 && (
                 <ArrowUpRight className="hidden md:block absolute top-6 -right-10 text-white/10 rotate-45" size={20} />
              )}

              <div className="space-y-3">
                <h4 className="text-lg font-bold uppercase tracking-tight">{step.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed max-w-[240px] mx-auto">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Button variant="primary" className="!bg-brand-accent !text-brand-bg !rounded-lg !py-3 !px-8 !font-black group">
            Join the Community <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
