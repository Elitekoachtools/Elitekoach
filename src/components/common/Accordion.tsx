import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="border-b border-white/10 overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full py-6 flex items-center justify-between text-left hover:text-brand-accent transition-colors group"
          >
            <span className="text-xl font-display font-bold uppercase tracking-tight text-brand-bg group-hover:text-brand-accent">
              {item.question}
            </span>
            <ChevronDown 
              className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-accent' : 'text-brand-bg/30'}`} 
              size={24} 
            />
          </button>
          
          <div 
            className={`transition-all duration-500 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-brand-bg/60 leading-relaxed font-medium">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
