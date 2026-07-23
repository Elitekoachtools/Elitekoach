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
      answer: "EliteKoach connects you with world-class coaches, celebrity experts, top performers, and industry leaders who provide personalized advice and actionable feedback tailored to your goals. It's coaching redefined, designed to unlock your potential."
    },
    {
      question: "How does it work?",
      answer: "Simply upload a video of your performance or challenge, select your preferred coach, and receive a detailed video response with expert insights and actionable steps to improve."
    },
    {
      question: "Why should I use EliteKoach instead of other platforms?",
      answer: "EliteKoach offers direct access to true 'stars' and elite professionals who typically aren't available for private coaching anywhere else, combined with an AI-enhanced experience for seamless matching."
    },
    {
      question: "Is EliteKoach only for professionals?",
      answer: "Not at all. EliteKoach is for anyone looking to level up their skills, from beginners to advanced performers across various categories."
    },
    {
      question: "What if I'm too busy for regular sessions?",
      answer: "EliteKoach is built for busy lifestyles. You can upload videos and receive feedback on your own schedule, with no need for live, synchronized sessions unless you choose to book one."
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
