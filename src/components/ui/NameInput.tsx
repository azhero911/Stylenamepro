'use client';

import React from 'react';
import { Dices, X } from 'lucide-react';
import { getRandomSampleName } from '@/lib/unicode/generator';
import { CharacterCounter } from './CharacterCounter';

interface NameInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function NameInput({ value, onChange, placeholder = 'Enter your name...' }: NameInputProps) {
  const handleRandom = () => {
    const randomName = getRandomSampleName();
    onChange(randomName);
  };

  const handleClear = () => {
    onChange('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative flex items-center shadow-sm rounded-2xl border-2 border-slate-200 bg-white hover:border-brand-400 focus-within:border-brand-600 focus-within:ring-4 focus-within:ring-brand-100 transition-all">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          maxLength={40}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          className="w-full h-14 md:h-16 pl-5 pr-32 bg-transparent text-slate-900 placeholder:text-slate-400 text-base md:text-lg font-medium outline-none rounded-2xl"
          aria-label="Enter name to generate stylish text"
        />

        <div className="absolute right-2.5 flex items-center gap-1.5">
          {/* Random Button */}
          <button
            type="button"
            onClick={handleRandom}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs md:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-brand-50 hover:text-brand-700 border border-slate-200 transition-all active:scale-95"
            title="Generate random gamer name"
          >
            <Dices className="w-4 h-4 text-brand-600 shrink-0" />
            <span className="hidden sm:inline">Random</span>
          </button>

          {/* Clear Button */}
          {value && (
            <button
              type="button"
              onClick={handleClear}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all active:scale-95"
              title="Clear input"
              aria-label="Clear input text"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Game Length Counter */}
      <CharacterCounter text={value} />
    </div>
  );
}
