import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — NameStylePro',
  description: 'Privacy Policy for NameStylePro. Details how we safeguard user data, advertising compliance, and cookie disclosures.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16 space-y-8 text-slate-700 leading-relaxed">
      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
        Privacy Policy
      </h1>
      <p className="text-sm text-slate-500">Last updated: March 2026</p>

      <div className="space-y-6 text-base md:text-lg">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Overview</h2>
          <p>
            At <strong>NameStylePro</strong> (accessible via namestylepro.com), accessible to visitors globally, the privacy of our visitors is of utmost importance. This Privacy Policy document outlines the types of information collected and how it is used.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Client-Side Data Processing</h2>
          <p>
            NameStylePro operates 100% on the client side. Any names, text, or characters you type into the input field are processed in your device&apos;s memory via JavaScript and are never transmitted to or stored on our servers.
          </p>
          <p>
            Saved nicknames (favorites) are stored locally on your device via browser <code>localStorage</code>. You can delete these at any time by clearing your favorites or browser cache.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Google AdSense & Third-Party Cookies</h2>
          <p>
            Google is a third-party vendor on our site. Google uses cookies, known as DART cookies, to serve ads to our site visitors based on their visit to namestylepro.com and other sites on the internet.
          </p>
          <p>
            Visitors may choose to decline the use of DART cookies by visiting the Google Ad and Content Network Privacy Policy at:
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 underline ml-1"
            >
              https://policies.google.com/technologies/ads
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. GDPR & CCPA Rights</h2>
          <p>
            Under the GDPR (General Data Protection Regulation) and CCPA (California Consumer Privacy Act), users are entitled to rights including access, rectification, erasure, and objection to data collection. Because we do not collect personal identifiers or create user accounts, no identifiable personal records are maintained on our servers.
          </p>
        </section>
      </div>
    </div>
  );
}
