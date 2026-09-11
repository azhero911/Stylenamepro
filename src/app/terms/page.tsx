import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — NameStylePro',
  description: 'Terms of Service and conditions of use for NameStylePro free stylish name generator.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16 space-y-8 text-slate-700 leading-relaxed">
      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
        Terms of Service
      </h1>
      <p className="text-sm text-slate-500">Last updated: March 2026</p>

      <div className="space-y-6 text-base md:text-lg">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Agreement to Terms</h2>
          <p>
            By accessing or using NameStylePro (namestylepro.online), you agree to be bound by these Terms of Service. If you do not agree to all terms and conditions, you may not use our service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Free Educational & Formatting Utility</h2>
          <p>
            NameStylePro is provided as a free, 100% web-based Unicode text formatting utility. All generated symbols, font transforms, and combinations are derived from publicly standard Unicode character blocks.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. In-Game Rules & Disclaimers</h2>
          <p>
            Users are solely responsible for ensuring their nicknames comply with the community guidelines and terms of service of third-party platforms (e.g., Garena Free Fire, Krafton PUBG, Instagram, TikTok). NameStylePro does not guarantee that every character combination will be accepted by game servers or moderation filters.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Limitation of Liability</h2>
          <p>
            NameStylePro is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind. Under no circumstances shall the site owners be liable for any direct, indirect, incidental, or consequential damages resulting from the use of this tool.
          </p>
        </section>
      </div>
    </div>
  );
}
