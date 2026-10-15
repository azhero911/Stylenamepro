import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Top Branding & Link Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
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
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Free stylish name generator using Unicode fonts. Works for Free Fire, PUBG, Roblox and Instagram. No login needed.
            </p>
          </div>

          {/* Column 2: Free Fire & Gaming */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Gaming</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/free-fire-names" className="hover:text-brand-400 transition-colors">
                  Free Fire Names
                </Link>
              </li>
              <li>
                <Link href="/free-fire-invisible-name" className="hover:text-brand-400 transition-colors">
                  Invisible Name
                </Link>
              </li>
              <li>
                <Link href="/free-fire-clan-names" className="hover:text-brand-400 transition-colors">
                  Clan & Squad Tags
                </Link>
              </li>
              <li>
                <Link href="/pubg-names" className="hover:text-brand-400 transition-colors">
                  PUBG & BGMI Names
                </Link>
              </li>
              <li>
                <Link href="/anime-names" className="hover:text-brand-400 transition-colors">
                  Anime Stylish Names
                </Link>
              </li>
              <li>
                <Link href="/roblox-name-generator" className="hover:text-brand-400 transition-colors">
                  Roblox Names
                </Link>
              </li>
              <li>
                <Link href="/3-letter-gaming-names" className="hover:text-brand-400 transition-colors">
                  3 Letter Gaming Names
                </Link>
              </li>
              <li>
                <Link href="/pro-gaming-names" className="hover:text-brand-400 transition-colors">
                  Pro Gaming Names
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Aesthetic */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Social & Aesthetic</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/instagram-names" className="hover:text-brand-400 transition-colors">
                  Instagram Names
                </Link>
              </li>
              <li>
                <Link href="/aesthetic-usernames" className="hover:text-brand-400 transition-colors">
                  Aesthetic Usernames
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-400 transition-colors">
                  Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/blog/roblox-display-names-ideas" className="hover:text-brand-400 transition-colors">
                  Roblox Display Names
                </Link>
              </li>
              <li>
                <Link href="/blog/mobile-legends-name-style-mlbb" className="hover:text-brand-400 transition-colors">
                  MLBB Name Styles
                </Link>
              </li>
              <li>
                <Link href="/blog/free-fire-anime-name-style" className="hover:text-brand-400 transition-colors">
                  Anime FF Name Style
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-brand-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-brand-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/dmca" className="hover:text-brand-400 transition-colors">
                  DMCA Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 space-y-3">
          <p>
            <strong>Disclaimer:</strong> Free Fire is a registered trademark of Garena International. PUBG and BGMI
            are registered trademarks of KRAFTON, Inc. Roblox is a registered trademark of Roblox Corporation. NameStylePro is an independent Unicode font decorator and
            nickname utility. We are not affiliated with, endorsed by, or partnered with Garena, KRAFTON, Roblox Corporation, or any game developer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 pt-2">
            <div>
              &copy; {new Date().getFullYear()} NameStylePro.online — All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
              <span>No data leaves your browser</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
