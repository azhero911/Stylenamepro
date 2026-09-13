"use client";

import React from "react";
import { Copy, Check, Share2 } from "lucide-react";
import { useClipboard } from "@/lib/hooks/useClipboard";

interface BlogNameGridProps {
  names: string[];
  category?: string;
}

export function BlogNameGrid({ names, category }: BlogNameGridProps) {
  const { copyToClipboard, isCopied, getWhatsAppShareUrl } = useClipboard();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 my-4">
      {names.map((name, idx) => {
        const copied = isCopied(name);
        const charLen = Array.from(name).length;
        const fitsFF = charLen <= 12;

        return (
          <div
            key={idx}
            className={`group relative flex items-center justify-between p-3 rounded-2xl border transition-all duration-200 ${
              copied
                ? "bg-emerald-50/90 border-emerald-300 ring-2 ring-emerald-200"
                : "bg-white hover:bg-purple-50/40 border-slate-200 hover:border-brand-400 hover:shadow-xs"
            }`}
          >
            <div className="flex-1 min-w-0 pr-2">
              <div className="font-bold text-slate-900 text-base md:text-lg truncate tracking-wide select-all">
                {name}
              </div>
              <div className="flex items-center gap-2 mt-0.5 text-[11px] font-semibold text-slate-500">
                <span
                  className={`px-1.5 py-0.2 rounded-md ${
                    fitsFF
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {charLen} chars {fitsFF ? "✓ FF" : "PUBG"}
                </span>
                {category && <span className="truncate">{category}</span>}
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <a
                href={getWhatsAppShareUrl(name)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                title="Share on WhatsApp"
                aria-label="Share on WhatsApp"
              >
                <Share2 className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    name,
                    `Copied "${name}" to clipboard! Ready to paste in Free Fire.`
                  )
                }
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer ${
                  copied
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-brand-50 text-brand-700 hover:bg-brand-600 hover:text-white border border-brand-200"
                }`}
                title="Copy to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
