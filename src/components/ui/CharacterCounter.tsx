'use client';

import React from 'react';
import { Gamepad2 } from 'lucide-react';
import { getUnicodeLength } from '@/lib/unicode/generator';

interface CharacterCounterProps {
  text: string;
}

export function CharacterCounter({ text }: CharacterCounterProps) {
  const len = getUnicodeLength(text);

  const ffLimit = 12;
  const pubgLimit = 16;

  const isFfOver = len > ffLimit;
  const isPubgOver = len > pubgLimit;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
      {/* Free Fire Limit Badge */}
      <div
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs md:text-sm font-semibold border transition-colors ${
          isFfOver
            ? 'bg-rose-50 text-rose-700 border-rose-200 shadow-sm'
            : 'bg-emerald-50 text-emerald-700 border-emerald-200'
        }`}
        title={`Free Fire nickname limit is 12 characters. Current: ${len}/12`}
      >
        <Gamepad2 className="w-3.5 h-3.5 shrink-0" />
        <span>FF: {len}/{ffLimit}</span>
        {isFfOver && <span className="text-[10px] font-bold text-rose-600">(Too Long)</span>}
      </div>

      {/* PUBG / BGMI Limit Badge */}
      <div
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs md:text-sm font-semibold border transition-colors ${
          isPubgOver
            ? 'bg-rose-50 text-rose-700 border-rose-200 shadow-sm'
            : 'bg-emerald-50 text-emerald-700 border-emerald-200'
        }`}
        title={`PUBG / BGMI nickname limit is 16 characters. Current: ${len}/16`}
      >
        <Gamepad2 className="w-3.5 h-3.5 shrink-0" />
        <span>PUBG: {len}/{pubgLimit}</span>
        {isPubgOver && <span className="text-[10px] font-bold text-rose-600">(Too Long)</span>}
      </div>
    </div>
  );
}
