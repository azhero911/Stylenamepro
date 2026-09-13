"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Copy, Check, EyeOff, Sparkles, ExternalLink } from "lucide-react";
import { useClipboard } from "@/lib/hooks/useClipboard";

export function InvisibleNameBox() {
  const invisibleChar = "\u3164"; // Unicode Hangul Filler
  const { copyToClipboard, isCopied } = useClipboard();
  const copied = isCopied(invisibleChar);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white rounded-3xl p-6 md:p-8 border-2 border-purple-500/30 shadow-xl space-y-6 my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-800/40 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <EyeOff className="w-3.5 h-3.5" />
            <span>Exclusive Blank Nickname Trick</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-white">
            Copy the Invisible Free Fire Character (U+3164)
          </h3>
          <p className="text-xs md:text-sm text-purple-200/80">
            Copy everything inside the box below to make your name completely blank on the kill feed and lobby.
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            copyToClipboard(
              invisibleChar,
              "Invisible blank character copied! Paste it in your Free Fire profile."
            )
          }
          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-black text-sm transition-all duration-200 active:scale-95 cursor-pointer shrink-0 shadow-lg ${
            copied
              ? "bg-emerald-500 text-white shadow-emerald-500/30 ring-4 ring-emerald-400/30"
              : "bg-brand-500 hover:bg-brand-400 text-white shadow-brand-500/30 hover:scale-105"
          }`}
        >
          {copied ? (
            <>
              <Check className="w-5 h-5" />
              <span>Copied Blank Char!</span>
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              <span>Copy Invisible Char</span>
            </>
          )}
        </button>
      </div>

      {/* Visual representation */}
      <div className="bg-slate-950/80 rounded-2xl p-4 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="font-mono text-base md:text-lg text-purple-300 bg-purple-900/30 px-4 py-2 rounded-xl border border-purple-500/20 select-all">
          [ <span className="bg-purple-500/30 px-2 py-0.5 rounded text-white font-bold">ㅤ</span> ]
        </div>
        <div className="text-xs text-purple-300/80 font-medium">
          Hangul Filler Unicode Point: <code className="text-amber-300 font-bold">U+3164</code> (1 invisible character)
        </div>
      </div>

      {/* Step by step bullet instructions */}
      <div className="space-y-3 pt-2">
        <h4 className="font-bold text-sm text-purple-200 uppercase tracking-wider">
          How to Apply in 60 Seconds:
        </h4>
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-purple-100/90">
          <li className="flex items-start gap-2 bg-purple-900/20 p-3 rounded-xl border border-purple-800/30">
            <span className="w-5 h-5 rounded-full bg-purple-500/30 text-purple-200 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              1
            </span>
            <span>Tap the button above to copy the invisible character.</span>
          </li>
          <li className="flex items-start gap-2 bg-purple-900/20 p-3 rounded-xl border border-purple-800/30">
            <span className="w-5 h-5 rounded-full bg-purple-500/30 text-purple-200 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              2
            </span>
            <span>Open Free Fire and tap your profile avatar in the lobby.</span>
          </li>
          <li className="flex items-start gap-2 bg-purple-900/20 p-3 rounded-xl border border-purple-800/30">
            <span className="w-5 h-5 rounded-full bg-purple-500/30 text-purple-200 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              3
            </span>
            <span>Tap the edit pencil icon next to your nickname and delete all text.</span>
          </li>
          <li className="flex items-start gap-2 bg-purple-900/20 p-3 rounded-xl border border-purple-800/30">
            <span className="w-5 h-5 rounded-full bg-purple-500/30 text-purple-200 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              4
            </span>
            <span>Paste the invisible character and confirm with 390 diamonds or a Name Card.</span>
          </li>
        </ol>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-purple-300/80 border-t border-purple-800/30">
        <p>
          <span className="font-bold text-amber-300">Note:</span> Garena occasionally patches individual characters in game updates. If this is already taken in your server:
        </p>
        <Link
          href="/invisible-name"
          className="inline-flex items-center gap-1 font-bold text-white bg-purple-800/60 hover:bg-purple-700 px-3 py-1.5 rounded-xl border border-purple-500/40 transition-colors shrink-0"
        >
          <span>Use Dedicated Invisible Name Generator</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
