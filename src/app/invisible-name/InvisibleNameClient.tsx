'use client';

import React, { useState } from 'react';
import { Copy, Check, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { useClipboard } from '@/lib/hooks/useClipboard';

export function InvisibleNameClient() {
  const { copyToClipboard, isCopied } = useClipboard();
  const [variantSeed, setVariantSeed] = useState(1);

  // Hangul Filler (U+3164)
  const hangulFiller = '\u3164';
  // Zero Width Non-Joiner (U+200C) and Joiner (U+200D)
  const zwnj = '\u200C';
  const zwj = '\u200D';

  // Dynamic unique variant generator
  const currentVariant = `${hangulFiller}${zwnj.repeat(variantSeed % 4)}${zwj.repeat((variantSeed + 1) % 3)}${hangulFiller}`;

  const methods = [
    {
      id: 'method-1',
      title: 'Method 1: Standard Hangul Filler (Single Blank)',
      text: hangulFiller,
      tag: 'Classic',
      desc: 'The original single blank character (Unicode U+3164). Best for new servers or accounts.',
    },
    {
      id: 'method-2',
      title: 'Method 2: Double Blank Sequence',
      text: `${hangulFiller}${hangulFiller}`,
      tag: 'Recommended',
      desc: 'Two consecutive Hangul Fillers. Used when single character is already registered.',
    },
    {
      id: 'method-3',
      title: 'Method 3: Unique Zero-Width Variant (Fixes "Name Already Exists")',
      text: currentVariant,
      tag: 'Unique Variant',
      desc: 'Combines invisible Hangul Fillers with zero-width invisible joiners. Generates a fresh string.',
      isDynamic: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {methods.map((method) => {
          const copied = isCopied(method.text);

          return (
            <div
              key={method.id}
              className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                    <Sparkles className="w-3 h-3" />
                    {method.tag}
                  </span>
                  {method.isDynamic && (
                    <button
                      type="button"
                      onClick={() => setVariantSeed((prev) => prev + 1)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-600 hover:text-brand-700 transition-colors"
                      title="Generate new unique blank combination"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>New Variant</span>
                    </button>
                  )}
                </div>

                <h3 className="font-bold text-slate-900 text-sm">{method.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{method.desc}</p>
              </div>

              {/* Blank Preview Box */}
              <div className="p-3 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-center select-all">
                <span className="font-mono text-xs text-slate-400">
                  [ Invisible Space: {method.text ? '●' : ''} ]
                </span>
              </div>

              <button
                type="button"
                onClick={() =>
                  copyToClipboard(method.text, 'Invisible blank character copied! Paste into Free Fire.')
                }
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-brand-600 text-white hover:bg-brand-700 shadow-xs'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied Blank Space!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Invisible Character</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong className="font-bold">Pro Tip for "Name Already Exists":</strong> Because millions of players
          use Free Fire, a plain single blank character is frequently already claimed on active regional servers.
          Use <strong>Method 3</strong> and tap &ldquo;New Variant&rdquo; to copy a blank character with invisible
          separators that make your nickname unique.
        </div>
      </div>
    </div>
  );
}
