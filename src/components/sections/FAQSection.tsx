import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-base font-black uppercase tracking-tight text-brand-bg group-hover:text-brand-accent transition-colors">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="text-brand-bg/40" size={20} />
        ) : (
          <ChevronDown className="text-brand-bg/40" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-sm text-brand-bg/60 leading-relaxed font-medium max-w-2xl">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What is EliteKoach?",
      answer: "EliteKoach is a platform that helps you change your life and pursue any goal you put your mind to. Our AI coach matching tool, Eli, connects you with the perfect coach and acts as your accountability partner, keeping you mentally aligned with daily check-ins."
    },
    {
      question: "How does it work?",
      answer: "Start by speaking to Eli, your AI coach matching tool. Eli will help you find your ideal coach based on your goals. From there, you can either book a live 1:1 coaching session or send a video for personalised feedback. Eli also provides daily check-ins to keep you accountable and on track."
    },
    {
      question: "Do I need coaching experience?",
      answer: "Not at all. EliteKoach is for anyone looking to change their life, from beginners to advanced performers. Eli adapts to your level and helps you build the right habits to achieve your goals."
    },
    {
      question: "What if I'm too busy for regular sessions?",
      answer: "EliteKoach is built for busy lifestyles. You can book sessions or send videos on your own schedule, and Eli's daily check-ins are designed to take just a few minutes to keep you aligned and motivated."
    },
    {
      question: "How does Eli keep me accountable?",
      answer: "Eli acts as your personal accountability partner. Through daily check-ins, Eli helps you stay focused on your goals, track your progress, and maintain the mental discipline needed to achieve lasting change."
    }
  ];

  return (
    <section className="py-24 bg-brand-bg" id="faq">
      <div className="section-container">
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-8 md:p-16 shadow-2xl">
          <div className="mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tight text-brand-bg mb-2">Got Questions?</h2>
            <h2 className="text-4xl font-black uppercase tracking-tight text-brand-bg">We've Got Answers.</h2>
          </div>

          <div className="flex flex-col">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
