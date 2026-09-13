import React from 'react';
import { HelpCircle } from 'lucide-react';
import { FaqJsonLd } from './JsonLd';

export interface FaqItem {
  question: string;
  answer: string;
  answerNode?: React.ReactNode;
}

interface FaqAccordionProps {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
}

export function FaqAccordion({
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about stylish nicknames, character limits, and game compatibility.',
  faqs,
}: FaqAccordionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="space-y-4 pt-8 border-t border-slate-200">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-brand-600 shrink-0" />
          <h2 className="text-2xl font-black text-slate-900">{title}</h2>
        </div>
        <p className="text-sm text-slate-600">{subtitle}</p>
      </div>

      <div className="space-y-3 pt-2">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group bg-white rounded-2xl border border-slate-200 p-5 cursor-pointer open:border-brand-200 transition-colors"
          >
            <summary className="font-bold text-slate-900 text-base md:text-lg list-none flex justify-between items-center gap-4">
              <span>{faq.question}</span>
              <span className="text-brand-600 text-xl font-mono group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <div className="mt-3 text-slate-600 text-sm md:text-base border-t border-slate-100 pt-3 leading-relaxed">
              {faq.answerNode || faq.answer}
            </div>
          </details>
        ))}
      </div>

      <FaqJsonLd faqs={faqs} />
    </section>
  );
}
