import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA & Trademark Disclaimer — NameStylePro',
  description: 'DMCA policy, trademark notices, and fair-use disclaimers for NameStylePro.',
};

export default function DmcaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16 space-y-8 text-slate-700 leading-relaxed">
      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
        DMCA & Trademark Disclaimer
      </h1>
      <p className="text-sm text-slate-500">Last updated: March 2026</p>

      <div className="space-y-6 text-base md:text-lg">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Trademark Notices</h2>
          <p>
            &quot;Free Fire&quot; and &quot;Free Fire MAX&quot; are registered trademarks of Garena International. &quot;PUBG&quot;, &quot;PUBG Mobile&quot;, and &quot;BGMI&quot; are registered trademarks of Krafton, Inc. &quot;Instagram&quot; and &quot;WhatsApp&quot; are registered trademarks of Meta Platforms, Inc. &quot;TikTok&quot; is a registered trademark of ByteDance Ltd.
          </p>
          <p>
            NameStylePro is an independent, free text utility tool and is <strong>NOT affiliated with, sponsored by, endorsed by, or in any way associated with</strong> any of the aforementioned companies or their subsidiaries.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Fair Use Statement</h2>
          <p>
            Any references to third-party game names, platforms, or esports titles are made solely for nominative fair-use purposes to describe the compatibility and utility of our Unicode character styles for gamers seeking profile formatting.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. DMCA Notice & Takedown Policy</h2>
          <p>
            NameStylePro respects the intellectual property rights of others. If you believe that any material on this website infringes upon any copyright you own or control, you may contact our designated agent with your formal notice through our <a href="/contact" className="text-brand-600 underline">Contact Page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
