import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-4">
      <div className="w-16 h-16 rounded-2xl bg-purple-50 text-brand-600 flex items-center justify-center mx-auto mb-2">
        <Sparkles className="w-8 h-8" />
      </div>

      <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
        404 Error • Page Not Found
      </span>

      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
        Lost in the Battle Royale?
      </h1>

      <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
        The nickname generator page or style category you are searching for does not exist or has moved.
      </p>

      <div className="pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all active:scale-98"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Stylish Name Generator</span>
        </Link>
      </div>
    </div>
  );
}
