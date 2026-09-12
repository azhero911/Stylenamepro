'use client';

import React, { useState, useMemo } from 'react';
import { ToolCategory } from '@/types';
import { generateAllStyles, computeCategoryTabs } from '@/lib/unicode/generator';
import { NameInput } from '@/components/ui/NameInput';
import { CategoryTabs } from '@/components/ui/CategoryTabs';
import { StyleGrid } from '@/components/ui/StyleGrid';

export function AnimeToolClient() {
  const [name, setName] = useState('Itachi');
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory>('anime');

  // Compute all styles instantaneously
  const allStyles = useMemo(() => {
    return generateAllStyles(name);
  }, [name]);

  // Compute category counts for tab badges
  const categoryTabs = useMemo(() => {
    return computeCategoryTabs(allStyles);
  }, [allStyles]);

  // Filter styles by selected category
  const filteredStyles = useMemo(() => {
    if (selectedCategory === 'all') return allStyles;
    return allStyles.filter((item) => item.category === selectedCategory);
  }, [allStyles, selectedCategory]);

  return (
    <div className="space-y-6">
      <div className="pt-2">
        <NameInput
          value={name}
          onChange={setName}
          placeholder="Enter your name or anime character (e.g. Itachi, Tanjiro)..."
        />
      </div>

      <section className="space-y-4">
        <CategoryTabs
          tabs={categoryTabs}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <StyleGrid styles={filteredStyles} />
      </section>
    </div>
  );
}
