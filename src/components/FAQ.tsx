import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

export function FAQ() {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: "What services do I specialize in?",
      answer: "I specialize in UX/UI design, Web development, and brand strategy. My focus is on creating impactful digital experiences that combine aesthetic excellence with functional design systems.",
      isOpen: true
    },
    {
      question: "Who are my typical clients?",
      answer: "I work with forward-thinking brands, startups, and established companies looking to elevate their digital presence. My clients range from tech companies to creative agencies seeking innovative digital solutions.",
      isOpen: false
    },
    {
      question: "How do I start a project?",
      answer: "The process begins with a detailed consultation where we discuss your vision, goals, and requirements. From there, we develop a tailored strategy and timeline for your project.",
      isOpen: false
    },
    {
      question: "What's my process for developing a project?",
      answer: "My approach combines strategic thinking with iterative design. We start with research and conceptualization, move through design and development, and finish with testing and refinement.",
      isOpen: false
    },
    {
      question: "Do I offer custom packages?",
      answer: "Yes, I create customized solutions tailored to your specific needs and goals. Each package is designed to deliver maximum value while meeting your unique requirements.",
      isOpen: false
    }
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(faqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : false
    })));
  };

  return (
    <section id="faq" className="mt-48">
      <div className="border-t border-black pt-8">
        <span className="text-sm text-zinc-600 uppercase">FAQs</span>
        
        <div className="flex flex-col gap-12">
          <div className="flex items-baseline gap-12">
            <h2 className="text-[5rem] font-medium leading-none mt-12">Have Questions?</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border-b border-black last:border-b-0"
              >
                <button
                  className="w-full py-6 flex items-center justify-between text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-xl font-medium">{faq.question}</span>
                  {faq.isOpen ? (
                    <Minus className="w-6 h-6 flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    faq.isOpen ? 'max-h-48 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-zinc-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}