'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const dragDistanceRef = useRef(0);

  const checkScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 6);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 6);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    checkScroll();

    // Wheel event for desktop mouse horizontal scrolling
    const onWheel = (e: WheelEvent) => {
      if (el.scrollWidth > el.clientWidth && e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
        checkScroll();
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    const el = containerRef.current;
    if (!el) return;
    const distance = Math.max(220, el.clientWidth * 0.6);
    el.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth',
    });
    setTimeout(checkScroll, 320);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
    dragDistanceRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const el = containerRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    dragDistanceRef.current = Math.abs(walk);
    el.scrollLeft = scrollLeftRef.current - walk;
    checkScroll();
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="relative group/tabs flex items-center py-2">
      {/* Left Scroll Arrow Button */}
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center pr-2 bg-gradient-to-r from-white via-white/95 to-transparent">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-white text-slate-800 shadow-md border border-slate-200 hover:bg-slate-50 hover:text-brand-600 transition-all active:scale-90 cursor-pointer"
            aria-label="Scroll categories left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Scrollable Container */}
      <div
        ref={containerRef}
        onScroll={checkScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="w-full overflow-x-auto py-1 scroll-smooth cursor-grab active:cursor-grabbing select-none [-webkit-overflow-scrolling:touch]"
        style={{ scrollbarWidth: 'thin' }}
      >
        <div className="flex items-center gap-2 min-w-max px-1">
          {tabs.map((tab) => {
            const isSelected = selectedCategory === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={(e) => {
                  if (dragDistanceRef.current > 5) {
                    e.preventDefault();
                    return;
                  }
                  onSelectCategory(tab.id);
                  e.currentTarget.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest',
                  });
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all active:scale-95 shrink-0 cursor-pointer ${
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

      {/* Right Scroll Arrow Button */}
      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-0 z-20 flex items-center pl-2 bg-gradient-to-l from-white via-white/95 to-transparent">
          <button
            type="button"
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-white text-slate-800 shadow-md border border-slate-200 hover:bg-slate-50 hover:text-brand-600 transition-all active:scale-90 cursor-pointer"
            aria-label="Scroll categories right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
