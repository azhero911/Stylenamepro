import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Top Branding & Silo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
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
              The premier free stylish name generator and Unicode font decorator. Transform ordinary
              nicknames into thousands of aesthetic, esports, and symbol designs with instant 1-tap copy.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <Sparkles className="w-4 h-4 text-brand-400 shrink-0" />
              <span>Free Online Gaming Nickname & Font Tool</span>
            </div>
          </div>

          {/* Column 2: Free Fire Silo */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Free Fire Silo</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/free-fire-names" className="hover:text-brand-400 transition-colors">
                  Free Fire Names (FF Hub)
                </Link>
              </li>
              <li>
                <Link href="/free-fire-names-for-boys" className="hover:text-brand-400 transition-colors">
                  Names for Boys
                </Link>
              </li>
              <li>
                <Link href="/free-fire-names-for-girls" className="hover:text-brand-400 transition-colors">
                  Names for Girls
                </Link>
              </li>
              <li>
                <Link href="/free-fire-symbols" className="hover:text-brand-400 transition-colors">
                  Free Fire Symbols
                </Link>
              </li>
              <li>
                <Link href="/free-fire-invisible-name" className="hover:text-brand-400 transition-colors">
                  Invisible Blank Name
                </Link>
              </li>
              <li>
                <Link href="/free-fire-clan-names" className="hover:text-brand-400 transition-colors">
                  Clan & Squad Tags
                </Link>
              </li>
              <li>
                <Link href="/free-fire-attitude-names" className="hover:text-brand-400 transition-colors">
                  Attitude & Savage Names
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Gaming Silo */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Gaming Silo</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/gaming-name-generator" className="hover:text-brand-400 transition-colors">
                  Gaming Name Generator
                </Link>
              </li>
              <li>
                <Link href="/cool-gaming-names" className="hover:text-brand-400 transition-colors">
                  Cool Gaming Names
                </Link>
              </li>
              <li>
                <Link href="/unique-gaming-names" className="hover:text-brand-400 transition-colors">
                  Unique Gamertags
                </Link>
              </li>
              <li>
                <Link href="/short-gaming-names" className="hover:text-brand-400 transition-colors">
                  Short Gaming Names
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
              <li>
                <Link href="/aesthetic-gaming-names" className="hover:text-brand-400 transition-colors">
                  Aesthetic Gaming Names
                </Link>
              </li>
              <li>
                <Link href="/pubg-names" className="hover:text-brand-400 transition-colors">
                  PUBG & BGMI Nicknames
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Aesthetic Silo */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Social & Fonts</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/instagram-names" className="hover:text-brand-400 transition-colors">
                  Instagram Names (Hub)
                </Link>
              </li>
              <li>
                <Link href="/instagram-name-generator" className="hover:text-brand-400 transition-colors">
                  Instagram Name Generator
                </Link>
              </li>
              <li>
                <Link href="/aesthetic-username-generator" className="hover:text-brand-400 transition-colors">
                  Aesthetic Generator
                </Link>
              </li>
              <li>
                <Link href="/aesthetic-usernames" className="hover:text-brand-400 transition-colors">
                  Aesthetic Usernames
                </Link>
              </li>
              <li>
                <Link href="/#generator" className="hover:text-brand-400 transition-colors">
                  Live Unicode Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal & Trust */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Legal & Trust</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-brand-400 transition-colors">
                  Privacy Policy (GDPR)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/dmca" className="hover:text-brand-400 transition-colors">
                  DMCA Copyright Policy
                </Link>
              </li>
              <li className="pt-2 text-xs text-slate-500 leading-relaxed flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SSL Encrypted & Safe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 space-y-3">
          <p>
            <strong>Disclaimer:</strong> Free Fire is a registered trademark of Garena International. PUBG and BGMI
            are registered trademarks of KRAFTON, Inc. NameStylePro is an independent Unicode font decorator and
            nickname utility. We are not affiliated with, endorsed by, or partnered with Garena, KRAFTON, or any game developer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 pt-2">
            <div>
              &copy; {new Date().getFullYear()} NameStylePro.online — All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span>Fast • Free • No Ads Blocker Required</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
