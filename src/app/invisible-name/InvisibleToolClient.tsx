'use client';

import React, { useState } from 'react';
import { Copy, Check, Sparkles, RefreshCw, Info } from 'lucide-react';
import { INVISIBLE_METHODS, generateInvisibleVariant } from '@/lib/unicode/invisible';
import { useClipboard } from '@/lib/hooks/useClipboard';

export function InvisibleToolClient() {
  const { copyToClipboard, isCopied } = useClipboard();
  const [variant, setVariant] = useState(generateInvisibleVariant(3));

  const handleGenerateVariant = () => {
    setVariant(generateInvisibleVariant(Math.floor(Math.random() * 3) + 2));
  };

  return (
    <div className="space-y-8">
      {/* 3 Core Methods Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {INVISIBLE_METHODS.map((method) => {
          const copied = isCopied(method.characterString);

          return (
            <div
              key={method.id}
              className="flex flex-col justify-between bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-sm hover:border-brand-500 hover:shadow-soft transition-all space-y-4"
            >
              <div className="space-y-2">
                <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-700">
                  {method.recommendedFor}
                </span>
                <h3 className="font-bold text-slate-900 text-lg">{method.name}</h3>
                <p className="text-xs text-slate-500">{method.description}</p>
              </div>

              {/* Blank Display Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center font-mono text-xs text-slate-400">
                <span>[ Invisible Content: {method.displayCode} ]</span>
              </div>

              {/* Copy Button */}
              <button
                type="button"
                onClick={() => copyToClipboard(method.characterString, `Copied ${method.name}!`)}
                className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all active:scale-98 ${
                  copied
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-brand-600 hover:bg-brand-700 text-white shadow-sm'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Blank Name</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Unique Blank Variant Generator (Bypasses "Name Already Taken") */}
      <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 rounded-3xl p-6 md:p-8 border border-indigo-100 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Unique Identifier Generator
            </span>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
              Getting &quot;Name Already Exists&quot; Error?
            </h3>
            <p className="text-sm text-slate-600 max-w-xl">
              Garena requires each nickname to be unique on your game server. Generate a custom
              invisible string combination that has not been claimed yet!
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleGenerateVariant}
              className="p-3 rounded-2xl bg-white text-slate-700 hover:text-brand-600 border border-slate-200 shadow-xs transition-all active:scale-95"
              title="Generate new random combination"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => copyToClipboard(variant, 'Copied unique blank variant!')}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all active:scale-98"
            >
              <Copy className="w-4 h-4" />
              <span>Copy Unique Variant</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
