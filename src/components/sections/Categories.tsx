import React from "react";
import { Button } from "../common/Button";
import {
  ArrowUpRight,
  Theater,
  Palette,
  Film,
  Activity,
  Heart,
  Gamepad2,
} from "lucide-react";
import Passion from "../../assets/passion.png";

const KIT_FORM_ID = "3fc17e1b18";

export const Categories: React.FC = () => {
  const categories = [
    {
      icon: <Theater size={24} />,
      title: "Actors",
      desc: "Sharpen your performance skills and land your next big role",
    },
    {
      icon: <Palette size={24} />,
      title: "Artists",
      desc: "Perfect your technique and unleash your creativity",
    },
    {
      icon: <Film size={24} />,
      title: "Content Creators",
      desc: "Grow your brand, create engaging content, and stand out online",
    },
    {
      icon: <Activity size={24} />,
      title: "Footballers",
      desc: "Elevate your performance with insider strategies.",
    },
    {
      icon: <Heart size={24} />,
      title: "Daters",
      desc: "Build confidence and connect meaningfully with expert advice",
    },
    {
      icon: <Gamepad2 size={24} />,
      title: "Gamers",
      desc: "Master gaming strategies and dominate your favorite titles",
    },
  ];

  return (
    <section className="py-24 bg-brand-bg">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="space-y-10">
            <h2 className="section-title">
              Coaching for Every <br />
              Passion
            </h2>
            <p className="text-lg text-white/50 max-w-lg leading-relaxed font-medium">
              Whether you're chasing your dreams, mastering a craft, or growing
              your career, EliteKoach offers coaching across a wide range of
              categories. Find the guidance you need from top professionals,
              stars, and experts who are passionate about helping you succeed.
            </p>
            <Button
              data-formkit-toggle={KIT_FORM_ID}
              variant="primary"
              className="!bg-brand-accent !text-brand-bg !rounded-lg !py-3 !px-8 !font-black group"
            >
              Join the Community{" "}
              <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-[40px] border border-white/5 shadow-2xl">
            <img
              src={Passion}
              alt="Artist in studio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card p-10 hover:bg-brand-accent transition-all duration-500 cursor-pointer group"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-brand-accent group-hover:bg-brand-bg transition-colors">
                {cat.icon}
              </div>
              <h4 className="text-xl font-bold uppercase tracking-tight mb-4 text-white group-hover:text-brand-bg transition-colors">
                {cat.title}
              </h4>
              <p className="text-sm text-white/40 leading-relaxed font-medium group-hover:text-brand-bg/60 transition-colors">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
