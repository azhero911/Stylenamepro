'use client';

import React from 'react';
import { X, Copy, Trash2, Heart, ExternalLink } from 'lucide-react';
import { useFavorites } from '@/lib/hooks/useFavorites';
import { useClipboard } from '@/lib/hooks/useClipboard';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FavoritesDrawer({ isOpen, onClose }: FavoritesDrawerProps) {
  const { favorites, removeFavorite, clearAllFavorites, count } = useFavorites();
  const { copyToClipboard, isCopied } = useClipboard();

  if (!isOpen) return null;

  const handleCopyAll = () => {
    if (favorites.length === 0) return;
    const allText = favorites.map((f) => f.text).join('\n');
    copyToClipboard(allText, 'Copied all saved styles to clipboard!');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h2 className="text-lg font-bold text-slate-900">
              Saved Favorites ({count})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close favorites drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {favorites.length === 0 ? (
            <div className="py-20 text-center text-slate-400 space-y-3">
              <Heart className="w-12 h-12 mx-auto text-slate-200" />
              <p className="text-base font-semibold text-slate-600">No saved names yet</p>
              <p className="text-xs max-w-xs mx-auto text-slate-400">
                Click the heart icon on any generated style to save it here for quick access later.
              </p>
            </div>
          ) : (
            favorites.map((fav) => (
              <div
                key={fav.id}
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white hover:border-brand-300 shadow-xs transition-all"
              >
                <div
                  onClick={() => copyToClipboard(fav.text)}
                  className="cursor-pointer flex-1 font-semibold text-slate-900 text-base truncate pr-2 select-all"
                  title="Click to copy"
                >
                  {fav.text}
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(fav.text)}
                    className="p-2 rounded-lg text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                    title="Copy"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeFavorite(fav.id)}
                    className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer Actions */}
        {favorites.length > 0 && (
          <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyAll}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-sm transition-all active:scale-98"
            >
              <Copy className="w-4 h-4" />
              <span>Copy All ({count})</span>
            </button>
            <button
              type="button"
              onClick={clearAllFavorites}
              className="p-3 rounded-xl border border-slate-200 text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              title="Clear all favorites"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
