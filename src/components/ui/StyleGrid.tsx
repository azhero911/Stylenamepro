'use client';

import React, { useState, useEffect } from 'react';
import { LayoutGrid, List, ArrowUp, Zap } from 'lucide-react';
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

const INITIAL_BATCH = 24;
const CHUNK_SIZE = 24;

export function StyleGrid({ styles }: StyleGridProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);
  const [isListView, setIsListView] = useState(false);
  const [fontScaleIndex, setFontScaleIndex] = useState(0); // 0 = normal, 1 = large, 2 = extra
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Reset pagination to 24 when category or input changes
  useEffect(() => {
    setVisibleCount(INITIAL_BATCH);
  }, [styles]);

  // Monitor scroll depth for floating "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleZoomIn = () => {
    setFontScaleIndex((prev) => Math.min(prev + 1, FONT_SIZES.length - 1));
  };

  const handleZoomOut = () => {
    setFontScaleIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const visibleStyles = styles.slice(0, visibleCount);
  const currentFontSize = FONT_SIZES[fontScaleIndex].class;
  const remainingCount = styles.length - visibleCount;

  return (
    <div className="w-full space-y-4">
      {/* Controls Bar */}
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

      {/* Controlled "Load More" Action Button (Eliminates Infinite Scroll Fatigue) */}
      {visibleCount < styles.length && (
        <div className="pt-6 pb-2 flex flex-col items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => Math.min(prev + CHUNK_SIZE, styles.length))}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all active:scale-98"
          >
            <Zap className="w-4 h-4" />
            <span>Load More Styles (+{Math.min(CHUNK_SIZE, remainingCount)})</span>
          </button>
          <span className="text-xs text-slate-500 font-medium">
            {remainingCount} more styles available
          </span>
        </div>
      )}

      {/* Floating "Back to Top" Button for Mobile Users */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 z-30 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-bold shadow-xl border border-slate-700/80 backdrop-blur-sm transition-all animate-in fade-in active:scale-95"
          title="Scroll back to search input"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Top</span>
        </button>
      )}
    </div>
  );
}
