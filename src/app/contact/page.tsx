'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Spam honeypot trap
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Check honeypot: If a bot filled this invisible field, silently reject
    if (honeypot.trim() !== '') {
      console.warn('Bot detected by honeypot.');
      setSubmitted(true);
      return;
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill out all required fields.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-16 space-y-10">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-50 text-brand-700 border border-purple-200">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Support & Inquiries</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          Have a suggestion for a new symbol, font style, or need assistance? Reach out to us.
        </p>
      </div>

      <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 md:p-10 shadow-sm">
        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
            <h3 className="text-2xl font-black text-slate-900">Thank You!</h3>
            <p className="text-base text-slate-600 max-w-md mx-auto">
              Your message has been received. Our team will review your feedback and get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-rose-50 text-rose-700 text-sm border border-rose-200">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Invisible Honeypot field (hidden from human visitors) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website_url_hp">Leave this empty</label>
              <input
                type="text"
                id="website_url_hp"
                name="website_url_hp"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-bold text-slate-900">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Arham"
                className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-4 focus:ring-brand-100 outline-none text-base"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-bold text-slate-900">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-4 focus:ring-brand-100 outline-none text-base"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-bold text-slate-900">
                Message / Feedback
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Suggest a new game font or report an issue..."
                className="w-full p-4 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-4 focus:ring-brand-100 outline-none text-base resize-y"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-md transition-all active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
