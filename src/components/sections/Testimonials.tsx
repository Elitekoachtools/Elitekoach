import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Jose from "../../assets/testimonials/jose.png";
import Steph from "../../assets/testimonials/Steph-curry.png";
import Serena from "../../assets/testimonials/serena.png";
import Steve from "../../assets/testimonials/steveJobs.png";
import Tony from "../../assets/testimonials/tony.png";

interface CoachQuote {
  id: number;
  quote: string;
  name: string;
  image: string;
}

const coaches: CoachQuote[] = [
  {
    id: 1,
    quote:
      "A great coach can bring out the best in you, someone who challenges you to be better and holds you accountable.",
    name: "Serena Williams",
    image: Serena,
  },
  {
    id: 2,
    quote:
      "Coaching is taking a player where they can't take themself. It's about vision and discipline.",
    name: "José Mourinho",
    image: Jose,
  },
  {
    id: 3,
    quote:
      "People who succeed at the highest level are the ones who continuously invest in themselves.",
    name: "Tony Robbins",
    image:Tony,
   },
  {
    id: 4,
    quote:
      "Great things in business are never done by one person. They're done by a team of people.",
    name: "Steve Jobs",
    image: Steve,
   },
  {
    id: 5,
    quote:
      "To excel at the highest level or any level, you really need to believe in yourself, and hands down, one of the biggest contributors to my self-confidence has been private coaching.",
    name: "Steph Curry",
    image: Steph,
  
  },
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % coaches.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const coach = coaches[current];

  return (
    <section className="py-24 bg-brand-accent">
      <div className="section-container">
        <div className="max-w-6xl mx-auto relative group">
          <div className="bg-white rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] flex flex-col md:flex-row min-h-[500px]">
            <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center transition-all duration-500 animate-in fade-in slide-in-from-left-4">
              <svg
                width="48"
                height="38"
                viewBox="0 0 48 38"
                fill="none"
                className="mb-10 text-brand-bg/20"
              >
                <path
                  d="M12.4 37.6C9.2 37.6 6.53333 36.4667 4.4 34.2C2.26667 31.9333 1.2 29.1333 1.2 25.8C1.2 21.6667 2.4 17.6667 4.8 13.8C7.2 9.8 10.4 6.33333 14.4 3.4L18.4 8.6C15.6 10.8667 13.4667 13.4 12 16.2C10.5333 19 9.8 21.6 9.8 24C10.8667 23.4667 12.0667 23.2 13.4 23.2C15.9333 23.2 18.0667 24.1333 19.8 26C21.5333 27.7333 22.4 29.9333 22.4 32.6C22.4 34.0667 22.0667 35.3333 21.4 36.4C20.7333 37.2 19.8 37.6 18.6 37.6H12.4ZM37.2 37.6C34 37.6 31.3333 36.4667 29.2 34.2C27.0667 31.9333 26 29.1333 26 25.8C26 21.6667 27.2 17.6667 29.6 13.8C32 9.8 35.2 6.33333 39.2 3.4L43.2 8.6C40.4 10.8667 38.2667 13.4 36.8 16.2C35.3333 19 34.6 21.6 34.6 24C35.6667 23.4667 36.8667 23.2 38.2 23.2C40.7333 23.2 42.8667 24.1333 44.6 26C46.3333 27.7333 47.2 29.9333 47.2 32.6C47.2 34.0667 46.8667 35.3333 46.2 36.4C45.5333 37.2 44.6 37.6 43.4 37.6H37.2Z"
                  fill="currentColor"
                />
              </svg>

              <div className="space-y-10">
                <p className="text-2xl lg:text-3xl font-extrabold text-brand-bg leading-tight tracking-tight">
                  "{coach.quote}"
                </p>
                <div className="space-y-1">
                  <p className="text-sm font-black uppercase tracking-widest text-brand-bg">
                    {coach.name}
                  </p>
                  
                </div>
              </div>
            </div>

            <div className="relative w-full md:w-1/2 lg:w-[45%] h-100 md:h-auto overflow-hidden">
              <img
                key={coach.id}
                src={coach.image}
                alt={coach.name}
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-90 transition-all duration-700 animate-in fade-in zoom-in-105"
              />
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -left-6 lg:-left-12 -translate-y-1/2 hidden sm:block">
            <button
              onClick={() =>
                setCurrent(
                  (prev) => (prev - 1 + coaches.length) % coaches.length,
                )
              }
              className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-brand-bg hover:bg-brand-bg hover:text-white transition-all transform hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-6 lg:-right-12 -translate-y-1/2 hidden sm:block">
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % coaches.length)}
              className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-brand-bg hover:bg-brand-bg hover:text-white transition-all transform hover:scale-110 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {coaches.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-10 bg-brand-bg" : "w-4 bg-brand-bg/20 hover:bg-brand-bg/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
