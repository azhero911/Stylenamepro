'use client';

import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { Copy, Check, Share2, Heart, Search, Zap, Flame, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { READY_ANIME_NAMES, ANIME_UNIVERSES, ReadyAnimeName } from '@/data/anime-names-data';
import { useClipboard } from '@/lib/hooks/useClipboard';
import { useFavorites } from '@/lib/hooks/useFavorites';

export function ReadyMadeAnimeGrid() {
  const [selectedUniverse, setSelectedUniverse] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [gameFilter, setGameFilter] = useState<'all' | 'ff' | 'pubg'>('all');
  const [visibleCount, setVisibleCount] = useState<number>(36);

  const { copyToClipboard, isCopied, getWhatsAppShareUrl } = useClipboard();
  const { isFavorite, toggleFavorite } = useFavorites();

  // Scrollable tabs state & handlers
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const dragDistanceRef = useRef(0);

  const checkScroll = useCallback(() => {
    const el = tabsContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 6);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 6);
  }, []);

  useEffect(() => {
    const el = tabsContainerRef.current;
    if (!el) return;

    checkScroll();

    // Wheel event for desktop mice (converts vertical wheel to horizontal scroll)
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

  const scrollTabs = (direction: 'left' | 'right') => {
    const el = tabsContainerRef.current;
    if (!el) return;
    const distance = Math.max(220, el.clientWidth * 0.6);
    el.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth',
    });
    setTimeout(checkScroll, 320);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = tabsContainerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
    dragDistanceRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const el = tabsContainerRef.current;
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

  // Filter names based on universe, search query, and game filter
  const filteredNames = useMemo(() => {
    let list = READY_ANIME_NAMES;

    if (selectedUniverse !== 'all') {
      list = list.filter((item) => item.universeId === selectedUniverse);
    }

    if (gameFilter === 'ff') {
      list = list.filter((item) => item.fitsFF);
    } else if (gameFilter === 'pubg') {
      list = list.filter((item) => item.fitsPubg);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (item) =>
          item.character.toLowerCase().includes(q) ||
          item.name.toLowerCase().includes(q) ||
          item.universeTitle.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedUniverse, gameFilter, searchQuery]);

  const visibleList = useMemo(() => {
    return filteredNames.slice(0, visibleCount);
  }, [filteredNames, visibleCount]);

  const remaining = filteredNames.length - visibleCount;

  return (
    <div className="space-y-6">
      {/* Search and Game Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(36);
            }}
            placeholder="Search anime character (e.g. Itachi, Gojo, Tanjiro, Zoro)..."
            className="w-full h-11 pl-10 pr-4 rounded-xl border-2 border-slate-200 bg-white text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Game limit filter buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-bold shrink-0 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => {
              setGameFilter('all');
              setVisibleCount(36);
            }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              gameFilter === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All ({filteredNames.length})
          </button>
          <button
            type="button"
            onClick={() => {
              setGameFilter('ff');
              setVisibleCount(36);
            }}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
              gameFilter === 'ff'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>FF (≤12)</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setGameFilter('pubg');
              setVisibleCount(36);
            }}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
              gameFilter === 'pubg'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>PUBG (≤16)</span>
          </button>
        </div>
      </div>

      {/* Universe Tabs with interactive scroll buttons and smooth wheel/drag scrolling */}
      <div className="relative group/tabs flex items-center">
        {/* Left Scroll Arrow Button */}
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center pr-2 bg-gradient-to-r from-slate-50 via-slate-50/95 to-transparent">
            <button
              type="button"
              onClick={() => scrollTabs('left')}
              className="p-2 rounded-full bg-white text-slate-800 shadow-md border border-slate-200 hover:bg-slate-50 hover:text-brand-600 transition-all active:scale-90 cursor-pointer"
              aria-label="Scroll universe tabs left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Scrollable Container */}
        <div
          ref={tabsContainerRef}
          onScroll={checkScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="w-full overflow-x-auto py-1 scroll-smooth cursor-grab active:cursor-grabbing select-none [-webkit-overflow-scrolling:touch]"
          style={{ scrollbarWidth: 'thin' }}
        >
          <div className="flex items-center gap-2 min-w-max px-1">
            {ANIME_UNIVERSES.map((uni) => {
              const isActive = selectedUniverse === uni.id;
              return (
                <button
                  key={uni.id}
                  type="button"
                  onClick={(e) => {
                    // Prevent accidental click if user was dragging
                    if (dragDistanceRef.current > 5) {
                      e.preventDefault();
                      return;
                    }
                    setSelectedUniverse(uni.id);
                    setVisibleCount(36);
                    // Smoothly center the clicked tab in view
                    e.currentTarget.scrollIntoView({
                      behavior: 'smooth',
                      inline: 'center',
                      block: 'nearest',
                    });
                  }}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all active:scale-95 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-sm ring-2 ring-brand-300'
                      : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80 shadow-2xs'
                  }`}
                >
                  <span>{uni.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Scroll Arrow Button */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 z-20 flex items-center pl-2 bg-gradient-to-l from-slate-50 via-slate-50/95 to-transparent">
            <button
              type="button"
              onClick={() => scrollTabs('right')}
              className="p-2 rounded-full bg-white text-slate-800 shadow-md border border-slate-200 hover:bg-slate-50 hover:text-brand-600 transition-all active:scale-90 cursor-pointer"
              aria-label="Scroll universe tabs right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-500 px-1">
        <div>
          Showing <span className="text-slate-900 font-bold">{visibleList.length}</span> of{' '}
          <span className="text-slate-900 font-bold">{filteredNames.length}</span> ready anime names
        </div>
        <div className="text-xs text-brand-600 font-bold">1-Tap Copy Active</div>
      </div>

      {/* Grid of Ready Anime Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {visibleList.map((item) => {
          const copied = isCopied(item.name);
          const favorite = isFavorite(item.name);

          return (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl border-2 border-slate-200 hover:border-brand-500 hover:shadow-soft transition-all duration-200 p-4 flex flex-col justify-between min-h-[130px]"
            >
              {/* Top metadata tags */}
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="font-bold text-slate-500 px-2 py-0.5 rounded-md bg-slate-100">
                  {item.character}
                </span>
                <div className="flex items-center gap-1">
                  {item.fitsFF && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      FF
                    </span>
                  )}
                  {item.fitsPubg && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                      PUBG
                    </span>
                  )}
                  <span className="text-[11px] text-slate-400">{item.charCount}c</span>
                </div>
              </div>

              {/* Styled Nickname Display */}
              <div
                onClick={() => copyToClipboard(item.name)}
                className="cursor-pointer py-3 select-all overflow-hidden"
                title="Click to copy"
              >
                <div className="font-bold text-slate-900 text-lg sm:text-xl tracking-wide break-words group-hover:text-brand-700 transition-colors">
                  {item.name}
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="flex items-center justify-between gap-1 pt-2 border-t border-slate-100">
                <span className="text-[11px] text-slate-400 truncate max-w-[120px]">
                  {item.universeTitle}
                </span>

                <div className="flex items-center gap-1">
                  {/* WhatsApp Share */}
                  <a
                    href={getWhatsAppShareUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                    title="Share on WhatsApp"
                    aria-label="Share on WhatsApp"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </a>

                  {/* Save to Favorites */}
                  <button
                    type="button"
                    onClick={() => toggleFavorite(item.name)}
                    className="p-2 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    title="Save to favorites"
                    aria-label="Save to favorites"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        favorite ? 'fill-rose-600 text-rose-600' : ''
                      }`}
                    />
                  </button>

                  {/* Copy button */}
                  <button
                    type="button"
                    onClick={() => copyToClipboard(item.name)}
                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                      copied
                        ? 'bg-emerald-600 text-white'
                        : 'bg-brand-50 text-brand-700 hover:bg-brand-600 hover:text-white border border-brand-200 hover:border-transparent'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {remaining > 0 && (
        <div className="pt-4 pb-2 flex flex-col items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 36)}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all active:scale-98"
          >
            <Zap className="w-4 h-4" />
            <span>Load More Anime Names (+{Math.min(36, remaining)})</span>
          </button>
          <span className="text-xs text-slate-500 font-medium">
            {remaining} more ready-made names available
          </span>
        </div>
      )}
    </div>
  );
}
