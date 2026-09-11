'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Shield, Flame, Award, Share2 } from 'lucide-react';
import { useClipboard } from '@/lib/hooks/useClipboard';

interface ProfilePreviewModalProps {
  styledName: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ProfilePreviewModal({ styledName, isOpen, onClose }: ProfilePreviewModalProps) {
  const [activeTab, setActiveTab] = useState<'esports' | 'instagram'>('esports');
  const { copyToClipboard, isCopied } = useClipboard();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div>
            <h3 className="text-lg font-bold text-slate-900">In-Game Profile Simulator</h3>
            <p className="text-xs text-slate-500">Preview your styled name in battle hud & socials</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Simulator Tabs */}
        <div className="flex border-b border-slate-100 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('esports')}
            className={`pb-2.5 px-3 text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'esports'
                ? 'border-brand-600 text-brand-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            🎮 Battle Royale HUD
          </button>
          <button
            onClick={() => setActiveTab('instagram')}
            className={`pb-2.5 px-3 text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'instagram'
                ? 'border-brand-600 text-brand-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            📸 Instagram Bio Card
          </button>
        </div>

        {/* Content Preview */}
        <div className="p-6">
          {activeTab === 'esports' ? (
            /* Tactical Esports Card Mockup (100% Original SVG/CSS) */
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900 p-6 text-white shadow-xl border-2 border-purple-500/30 overflow-hidden">
              {/* Subtle cyber background grid */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 flex flex-col gap-4">
                {/* Top status bar */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 font-mono text-purple-400 font-bold">
                    <Shield className="w-4 h-4" />
                    <span>GRANDMASTER RANK</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 font-bold">
                    <Award className="w-4 h-4" />
                    <span>LVL 78</span>
                  </div>
                </div>

                {/* Avatar & Player Name */}
                <div className="flex items-center gap-4 py-2">
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-amber-500 p-0.5 shadow-lg shadow-purple-900/50">
                    <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center font-black text-xl text-purple-400">
                      ⚡
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xl md:text-2xl font-bold text-white tracking-wide truncate">
                      {styledName}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        [PRO] CLAN
                      </span>
                      <span className="text-xs text-emerald-400 font-medium">● Online</span>
                    </div>
                  </div>
                </div>

                {/* Stat Badges */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-center">
                  <div className="bg-slate-800/60 rounded-xl p-2 border border-slate-700/50">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">K/D Ratio</div>
                    <div className="text-sm font-black text-purple-400">4.82</div>
                  </div>
                  <div className="bg-slate-800/60 rounded-xl p-2 border border-slate-700/50">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Win Rate</div>
                    <div className="text-sm font-black text-amber-400">64.5%</div>
                  </div>
                  <div className="bg-slate-800/60 rounded-xl p-2 border border-slate-700/50">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Matches</div>
                    <div className="text-sm font-black text-emerald-400">1,240</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Instagram Bio Mockup */
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-md text-slate-900">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-0.5">
                  <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center font-bold text-lg text-slate-700">
                    📸
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-lg font-bold text-slate-900 truncate">
                    {styledName}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                    <span><strong>128</strong> posts</span>
                    <span><strong>14.2K</strong> followers</span>
                    <span><strong>320</strong> following</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-sm text-slate-600 space-y-1">
                <p className="font-semibold text-slate-900">{styledName}</p>
                <p>🎮 Esports Athlete & Content Creator</p>
                <p>⚡ Free Fire • PUBG Mobile</p>
                <p className="text-brand-600 font-medium">linktr.ee/profile</p>
              </div>
            </div>
          )}

          {/* Action buttons inside modal */}
          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={() => copyToClipboard(styledName)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-base font-bold text-white bg-brand-600 hover:bg-brand-700 active:scale-98 transition-all shadow-md"
            >
              {isCopied(styledName) ? (
                <>
                  <Check className="w-5 h-5 text-emerald-300" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>Copy Styled Name</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
