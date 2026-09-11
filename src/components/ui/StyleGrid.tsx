'use client';

import React, { useState, useEffect, useRef } from 'react';
import { LayoutGrid, List, ZoomIn, ZoomOut } from 'lucide-react';
import { StyleResult } from '@/types';
import { StyleCard } from './StyleCard';

interface StyleGridProps {
  styles: StyleResult[];
}

const FONT_SIZES = [
  { label: 'Normal', class: 'text-lg md:text-xl' },
  { label: 'Large', class: 'text-xl md:text-2xl' },
  { label: 'Extra', class: 'text-2xl md:text-3xl' },
];

export function StyleGrid({ styles }: StyleGridProps) {
  const [visibleCount, setVisibleCount] = useState(60);
  const [isListView, setIsListView] = useState(false);
  const [fontScaleIndex, setFontScaleIndex] = useState(0); // 0 = normal (18-20px), 1 = large (20-24px), 2 = extra (24-28px)
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Reset pagination when filter/category changes
  useEffect(() => {
    setVisibleCount(60);
  }, [styles]);

  // Progressive Chunk Loading with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 40, styles.length));
        }
      },
      { rootMargin: '300px' }
    );

    const currentSentinel = sentinelRef.current;
    if (currentSentinel) {
      observer.observe(currentSentinel);
    }

    return () => {
      if (currentSentinel) {
        observer.unobserve(currentSentinel);
      }
    };
  }, [styles.length]);

  const handleZoomIn = () => {
    setFontScaleIndex((prev) => Math.min(prev + 1, FONT_SIZES.length - 1));
  };

  const handleZoomOut = () => {
    setFontScaleIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleStyles = styles.slice(0, visibleCount);
  const currentFontSize = FONT_SIZES[fontScaleIndex].class;

  return (
    <div className="w-full space-y-4">
      {/* Controls Bar (Matching Mockup) */}
      <div className="flex flex-wrap items-center justify-between gap-3 py-2 px-1 text-sm font-semibold text-slate-600 border-b border-slate-100">
        <div>
          Showing <span className="text-slate-900 font-bold">{visibleStyles.length}</span> of{' '}
          <span className="text-slate-900 font-bold">{styles.length}</span> styles
        </div>

        <div className="flex items-center gap-2">
          {/* Font Size A- / A+ Controls */}
          <div className="flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={fontScaleIndex === 0}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-700 hover:bg-white disabled:opacity-40 transition-colors"
              title="Decrease Font Size (A-)"
              aria-label="Decrease Font Size"
            >
              A-
            </button>
            <button
              type="button"
              onClick={handleZoomIn}
              disabled={fontScaleIndex === FONT_SIZES.length - 1}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-700 hover:bg-white disabled:opacity-40 transition-colors"
              title="Increase Font Size (A+)"
              aria-label="Increase Font Size"
            >
              A+
            </button>
          </div>

          {/* Grid / List View Toggle */}
          <div className="flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
            <button
              type="button"
              onClick={() => setIsListView(false)}
              className={`p-1.5 rounded-lg transition-colors ${
                !isListView
                  ? 'bg-white text-brand-600 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Grid View"
              aria-label="Grid view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setIsListView(true)}
              className={`p-1.5 rounded-lg transition-colors ${
                isListView
                  ? 'bg-white text-brand-600 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
              title="List View"
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Styles Grid / List Display */}
      {visibleStyles.length > 0 ? (
        <div
          className={
            isListView
              ? 'flex flex-col gap-3'
              : 'grid grid-cols-1 sm:grid-cols-2 gap-3.5'
          }
        >
          {visibleStyles.map((item) => (
            <StyleCard
              key={item.id}
              styleItem={item}
              fontSizeClass={currentFontSize}
              isListView={isListView}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-slate-500">
          <p className="text-base font-semibold">No styles found in this category.</p>
        </div>
      )}

      {/* Infinite Scroll Sentinel */}
      {visibleCount < styles.length && (
        <div ref={sentinelRef} className="py-6 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => Math.min(prev + 40, styles.length))}
            className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 transition-all"
          >
            Load More Styles (+40)
          </button>
        </div>
      )}
    </div>
  );
}
