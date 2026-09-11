'use client';

import React from 'react';
import { CategoryTab, ToolCategory } from '@/types';

interface CategoryTabsProps {
  tabs: CategoryTab[];
  selectedCategory: ToolCategory;
  onSelectCategory: (category: ToolCategory) => void;
}

export function CategoryTabs({
  tabs,
  selectedCategory,
  onSelectCategory,
}: CategoryTabsProps) {
  return (
    <div className="w-full overflow-x-auto py-2 scrollbar-none">
      <div className="flex items-center gap-2 min-w-max px-1">
        {tabs.map((tab) => {
          const isSelected = selectedCategory === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectCategory(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all active:scale-95 ${
                isSelected
                  ? 'bg-brand-600 text-white shadow-sm ring-2 ring-brand-300'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200/60'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-1.5 py-0.5 rounded-md text-xs font-bold ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
