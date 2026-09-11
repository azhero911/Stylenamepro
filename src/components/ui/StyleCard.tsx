'use client';

import React, { useState } from 'react';
import { Copy, Check, Heart, Share2, Eye } from 'lucide-react';
import { StyleResult } from '@/types';
import { useClipboard } from '@/lib/hooks/useClipboard';
import { useFavorites } from '@/lib/hooks/useFavorites';
import { ProfilePreviewModal } from './ProfilePreviewModal';

interface StyleCardProps {
  styleItem: StyleResult;
  fontSizeClass: string;
  isListView?: boolean;
}

export function StyleCard({ styleItem, fontSizeClass, isListView = false }: StyleCardProps) {
  const { copyToClipboard, isCopied, getWhatsAppShareUrl } = useClipboard();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const isFav = isFavorite(styleItem.text);
  const copied = isCopied(styleItem.text);

  return (
    <>
      <div
        className={`group relative flex bg-white rounded-2xl border-2 border-slate-200 hover:border-brand-500 hover:shadow-soft transition-all duration-200 ${
          isListView
            ? 'flex-col sm:flex-row items-stretch sm:items-center justify-between p-4 gap-4'
            : 'flex-col justify-between p-5 min-h-[140px]'
        }`}
      >
        {/* Style Text Display Area (Minimum 18px / 20px) */}
        <div
          onClick={() => copyToClipboard(styleItem.text)}
          className="cursor-pointer flex-1 flex flex-col justify-center select-all overflow-hidden py-1"
          title="Click to copy"
        >
          <div
            className={`font-semibold text-slate-900 tracking-wide break-words transition-all ${fontSizeClass}`}
          >
            {styleItem.text}
          </div>
          <div className="text-xs text-slate-600 mt-1.5 flex items-center gap-2">
            <span>{styleItem.styleName}</span>
            <span>•</span>
            <span>{styleItem.charCount} chars</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 shrink-0 self-end sm:self-center">
          {/* In-Game Preview Modal Button */}
          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="p-2.5 rounded-xl text-slate-700 hover:text-brand-600 hover:bg-brand-50 transition-colors"
            title="Preview in Battle Royale & Instagram"
            aria-label="Preview in game profile"
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* WhatsApp Direct Share Button */}
          <a
            href={getWhatsAppShareUrl(styleItem.text)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
            title="Share on WhatsApp"
            aria-label="Share styled name on WhatsApp"
          >
            <Share2 className="w-4 h-4" />
          </a>

          {/* Favorite Toggle Button */}
          <button
            type="button"
            onClick={() => toggleFavorite(styleItem.text)}
            className={`p-2.5 rounded-xl transition-colors ${
              isFav
                ? 'text-rose-600 bg-rose-50 hover:bg-rose-100'
                : 'text-slate-700 hover:text-rose-600 hover:bg-rose-50'
            }`}
            title={isFav ? 'Remove from saved' : 'Save to favorites'}
            aria-label={isFav ? 'Saved' : 'Save'}
          >
            <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500' : ''}`} />
          </button>

          {/* Primary 1-Tap Copy Button */}
          <button
            type="button"
            onClick={() => copyToClipboard(styleItem.text)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-bold transition-all active:scale-95 ${
              copied
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-brand-50 text-brand-700 hover:bg-brand-600 hover:text-white border border-brand-200 hover:border-transparent'
            }`}
            title="Copy to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-white shrink-0" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 shrink-0" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Simulator Modal */}
      <ProfilePreviewModal
        styledName={styleItem.text}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
}
