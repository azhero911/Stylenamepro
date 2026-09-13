'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Moon, Menu, X } from 'lucide-react';
import { useFavorites } from '@/lib/hooks/useFavorites';
import { FavoritesDrawer } from '../ui/FavoritesDrawer';

export function Header() {
  const { count } = useFavorites();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo with official brand artwork */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-xs border border-purple-100 group-hover:scale-105 transition-transform bg-white">
              <Image
                src="/logo.png"
                alt="NameStylePro Logo"
                fill
                sizes="40px"
                priority
                className="object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900">
              NameStyle<span className="text-brand-600">Pro</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-600">
            <Link
              href="/"
              className="hover:text-brand-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/free-fire-names"
              className="hover:text-brand-600 transition-colors"
            >
              Free Fire
            </Link>
            <Link
              href="/pubg-names"
              className="hover:text-brand-600 transition-colors"
            >
              Gaming
            </Link>
            <Link
              href="/instagram-names"
              className="hover:text-brand-600 transition-colors"
            >
              Social
            </Link>
            <Link
              href="/blog"
              className="hover:text-brand-600 transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Right Action Controls Matching Mockup */}
          <div className="flex items-center gap-2.5">
            {/* Saved Favorites Pill Button */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-bold bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200 transition-all active:scale-95"
              title="Open Saved Favorites"
            >
              <Heart className={`w-4 h-4 ${count > 0 ? 'fill-purple-600 text-purple-600' : 'text-purple-600'}`} />
              <span>Saved {count}</span>
            </button>

            {/* Theme Toggle (White Theme First, ready for toggle) */}
            <button
              type="button"
              onClick={() => {
                // Future toggle hook
                window.dispatchEvent(
                  new CustomEvent('namestylepro_toast', {
                    detail: { message: 'Crisp White Theme active! Dark theme option coming soon.' },
                  })
                );
              }}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80 transition-colors"
              title="Theme Toggle"
              aria-label="Toggle theme"
            >
              <Moon className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-bold text-slate-800 hover:bg-brand-50 hover:text-brand-600"
            >
              🏠 Home
            </Link>
            <Link
              href="/free-fire-names"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-bold text-slate-800 hover:bg-brand-50 hover:text-brand-600"
            >
              🎮 Free Fire Names
            </Link>
            <Link
              href="/pubg-names"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-bold text-slate-800 hover:bg-brand-50 hover:text-brand-600"
            >
              🎯 Gaming Names
            </Link>
            <Link
              href="/instagram-names"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-bold text-slate-800 hover:bg-brand-50 hover:text-brand-600"
            >
              📸 Social & Aesthetic
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-bold text-slate-800 hover:bg-brand-50 hover:text-brand-600"
            >
              📖 Blog & Guides
            </Link>
          </div>
        )}
      </header>

      {/* Slide-over Favorites Drawer */}
      <FavoritesDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
