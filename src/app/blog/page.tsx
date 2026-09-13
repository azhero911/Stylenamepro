import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, User } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Gaming Nickname Guides ↳ ©⓪ⓟⓨ & ⓟⓐⓢⓣⓔ 🔥 2026',
  description:
    'Read expert guides on Free Fire stylish names, PUBG tags, invisible nickname tricks & bio font strategies 🔥 1-tap ©⓪ⓟⓨ & ⓟⓐⓢⓣⓔ 2026!',
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-10">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-50 text-brand-700 border border-purple-200">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Esports Nickname Strategy & Guides</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Gaming Nicknames & Font Guides
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          Master in-game character limits, secret Unicode symbols, and competitive esports branding.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Link
          href="/blog"
          className="px-4 py-2 rounded-xl text-xs md:text-sm font-bold bg-brand-600 text-white shadow-xs"
        >
          All Guides
        </Link>
        <Link
          href="/anime-names"
          className="px-4 py-2 rounded-xl text-xs md:text-sm font-bold bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors border border-purple-200 flex items-center gap-1"
        >
          <span>⚡</span>
          <span>Anime Names</span>
        </Link>
        <Link
          href="/free-fire-names"
          className="px-4 py-2 rounded-xl text-xs md:text-sm font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
        >
          Free Fire
        </Link>
        <Link
          href="/pubg-names"
          className="px-4 py-2 rounded-xl text-xs md:text-sm font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
        >
          PUBG / BGMI
        </Link>
        <Link
          href="/instagram-names"
          className="px-4 py-2 rounded-xl text-xs md:text-sm font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
        >
          Social Media
        </Link>
        <Link
          href="/invisible-name"
          className="px-4 py-2 rounded-xl text-xs md:text-sm font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
        >
          Invisible Name
        </Link>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col justify-between bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs hover:border-brand-500 hover:shadow-soft transition-all duration-200"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-brand-600 transition-colors">
                <Link href={`/blog/${post.slug}`} className="hover:text-brand-600">
                  {post.title}
                </Link>
              </h2>

              <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                {post.description}
              </p>
            </div>

            <div className="pt-5 border-t border-slate-100 mt-5 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                By {post.author.name}
              </span>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:text-brand-700"
              >
                <span>Read</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
