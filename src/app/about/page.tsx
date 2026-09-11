import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, MapPin, Sparkles, Cpu, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — NameStylePro Creator & Mission',
  description:
    'Learn about NameStylePro, an open web utility engineered by AZDeveloper in Faisalabad, Pakistan, to provide free instant Unicode styling for global gamers.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16 space-y-12">
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-50 text-brand-700 border border-purple-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Story & Technology</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          About NameStylePro
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          The free, private, high-performance stylish text generator built for competitive gamers and social creators.
        </p>
      </div>

      <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 md:p-10 shadow-sm space-y-6 text-slate-700 leading-relaxed text-base md:text-lg">
        <h2 className="text-2xl font-black text-slate-900">Our Mission</h2>
        <p>
          In competitive mobile titles like Garena Free Fire, PUBG Mobile, and BGMI, your in-game nickname is your digital identity.
          However, most legacy stylish name websites are bloated with intrusive ads, broken WordPress plugins, or push suspicious APK downloads.
        </p>
        <p>
          <strong>NameStylePro</strong> was created to solve this: a modern, lightweight web application built on Next.js that runs 100% in your browser.
          Zero downloads, zero servers recording your input, zero tracking cookies, and instant 1-tap copy.
        </p>

        <h2 className="text-2xl font-black text-slate-900 pt-4">Technical Architecture</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Cpu className="w-5 h-5 text-brand-600" />
              <span>Pure Client-Side Math</span>
            </div>
            <p className="text-sm text-slate-600">
              Every font transformation is performed in your browser using pure JavaScript Unicode block mapping. Zero server lag.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>100% Privacy Focused</span>
            </div>
            <p className="text-sm text-slate-600">
              Your names and favorites never leave your device. Saved favorites are stored locally in your browser’s localStorage.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-black text-slate-900 pt-4">About the Creator</h2>
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-purple-50/50 border border-purple-100">
          <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center font-black text-xl shrink-0">
            AZ
          </div>
          <div className="space-y-1 text-sm md:text-base">
            <h3 className="font-bold text-slate-900 text-lg">AZDeveloper</h3>
            <p className="text-slate-600">Lead Developer & Esports Tools Architect</p>
            <p className="text-xs text-slate-500 flex items-center gap-1 pt-1">
              <MapPin className="w-3.5 h-3.5 text-brand-600" />
              <span>Faisalabad, Punjab, Pakistan</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
