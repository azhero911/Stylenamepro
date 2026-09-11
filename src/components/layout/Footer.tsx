import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Top Branding & Silo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-white/10 p-0.5 border border-purple-400/30">
                <Image
                  src="/logo.png"
                  alt="NameStylePro Logo"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                NameStyle<span className="text-brand-400">Pro</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              The premier free stylish name generator and Unicode font decorator. Transform ordinary
              nicknames into thousands of aesthetic, esports, and symbol designs with instant 1-tap copy.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
              <span>Developed in Faisalabad, Punjab, Pakistan</span>
            </div>
          </div>

          {/* Column 2: Gaming Tools Silo */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Gaming Tools</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/free-fire-names" className="hover:text-brand-400 transition-colors">
                  Free Fire Stylish Names (FF)
                </Link>
              </li>
              <li>
                <Link href="/pubg-names" className="hover:text-brand-400 transition-colors">
                  PUBG & BGMI Nickname Generator
                </Link>
              </li>
              <li>
                <Link href="/invisible-name" className="hover:text-brand-400 transition-colors">
                  Invisible Blank Name Generator
                </Link>
              </li>
              <li>
                <Link href="/clan-names" className="hover:text-brand-400 transition-colors">
                  Clan & Guild Name Maker
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Guides */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Social & Guides</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/instagram-names" className="hover:text-brand-400 transition-colors">
                  Instagram & TikTok Bio Fonts
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-400 transition-colors">
                  Nickname Strategy Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-400 transition-colors">
                  About NameStylePro
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-400 transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Trust */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Legal & Trust</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-brand-400 transition-colors">
                  Privacy Policy (GDPR / CCPA)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/dmca" className="hover:text-brand-400 transition-colors">
                  DMCA & Trademark Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trademark Disclaimer & Fair Use */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 text-xs text-slate-500 leading-relaxed space-y-2">
          <p>
            <strong>Disclaimer:</strong> Garena Free Fire, Free Fire MAX, PUBG Mobile, BGMI, and Mobile Legends are registered trademarks of their respective copyright and trademark owners (Garena International, Krafton Inc., Moonton). NameStylePro is an independent, 100% free web utility designed to provide Unicode character formatting and does not sell, endorse, or distribute game software or modifications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-slate-400 text-sm">
            <p>© {new Date().getFullYear()} NameStylePro. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> for gamers and creators worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
