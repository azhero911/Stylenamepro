import React from 'react';
import Link from 'next/link';
import { Zap, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface GeneratorCtaCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  accentText?: string;
}

export function GeneratorCtaCard({
  title = 'Create Your Own Custom Stylish Name',
  description = 'Want custom fonts, wings, or brackets with your own nickname? Use the free NameStylePro generator to transform any word into 1,000+ instant styles with real-time character counters.',
  buttonText = 'Try NameStylePro Generator',
  accentText = 'Free • No App or Download Required • 1-Tap Copy',
}: GeneratorCtaCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-brand-900 to-slate-900 text-white p-6 sm:p-8 md:p-10 shadow-lg border border-purple-800/40">
      {/* Subtle background glow circles */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-purple-200 border border-white/15 backdrop-blur-xs">
          <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
          <span>Live Unicode Generator</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed">
          {description}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
          <Link
            href="/#generator"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-brand-900 font-extrabold text-sm sm:text-base hover:bg-purple-50 shadow-md hover:shadow-xl transition-all active:scale-95 group"
          >
            <Sparkles className="w-4 h-4 text-brand-600 group-hover:rotate-12 transition-transform" />
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-2 text-xs text-purple-200 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{accentText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
