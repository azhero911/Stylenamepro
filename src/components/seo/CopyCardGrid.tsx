'use client';

import React, { useState, useMemo } from 'react';
import { Copy, Check, Search, Sparkles } from 'lucide-react';
import { useClipboard } from '@/lib/hooks/useClipboard';

export interface CopyItem {
  name: string;
  category?: string;
  tag?: string;
}

interface CopyCardGridProps {
  items: CopyItem[];
  categories?: { key: string; label: string }[];
  showCharCount?: boolean;
  charLimitWarning?: number; // e.g. 12 for Free Fire
  placeholder?: string;
  columns?: 2 | 3 | 4;
}

export function CopyCardGrid({
  items,
  categories,
  showCharCount = true,
  charLimitWarning,
  placeholder = 'Search styles...',
  columns = 3,
}: CopyCardGridProps) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { copyToClipboard, isCopied } = useClipboard();

  const filteredItems = useMemo(() => {
    let result = items;
    if (activeCategory !== 'all') {
      result = result.filter((it) => it.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (it) =>
          it.name.toLowerCase().includes(q) ||
          (it.tag && it.tag.toLowerCase().includes(q)) ||
          (it.category && it.category.toLowerCase().includes(q))
      );
    }
    return result;
  }, [items, activeCategory, search]);

  const gridColsClass =
    columns === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : columns === 4
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className="space-y-6">
      {/* Category Pills & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === 'all'
                  ? 'bg-brand-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All ({items.length})
            </button>
            {categories.map((cat) => {
              const count = items.filter((it) => it.category === cat.key).length;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeCategory === cat.key
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        )}

        {/* Instant Search Bar */}
        <div className="relative w-full sm:w-64 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Grid of Copyable Cards */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200/80">
          <p className="text-slate-500 text-sm">No styles match &ldquo;{search}&rdquo;</p>
        </div>
      ) : (
        <div className={`grid ${gridColsClass} gap-3 sm:gap-4`}>
          {filteredItems.map((item, idx) => {
            const charCount = Array.from(item.name).length;
            const copied = isCopied(item.name);
            const isOverLimit = charLimitWarning ? charCount > charLimitWarning : false;

            return (
              <div
                key={`${item.name}-${idx}`}
                className="group relative flex flex-col justify-between p-4 bg-white rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  {item.tag ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-purple-50 text-brand-700 border border-purple-100">
                      <Sparkles className="w-2.5 h-2.5" />
                      {item.tag}
                    </span>
                  ) : (
                    <span />
                  )}

                  {showCharCount && (
                    <span
                      className={`text-[11px] font-mono font-medium px-1.5 py-0.5 rounded ${
                        isOverLimit
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'text-slate-400 bg-slate-50'
                      }`}
                      title={
                        charLimitWarning
                          ? `Character count: ${charCount} (Customary limit: ${charLimitWarning})`
                          : `Character count: ${charCount}`
                      }
                    >
                      {charCount} chars
                    </span>
                  )}
                </div>

                <div className="py-2 text-center overflow-x-auto select-all">
                  <span className="font-bold text-slate-900 text-base sm:text-lg tracking-wide whitespace-nowrap">
                    {item.name}
                  </span>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(item.name, `Copied "${item.name}" to clipboard!`)}
                    className={`w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                      copied
                        ? 'bg-emerald-600 text-white'
                        : 'bg-brand-50 text-brand-700 hover:bg-brand-600 hover:text-white'
                    }`}
                    aria-label={`Copy ${item.name}`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
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
      )}
    </div>
  );
}
