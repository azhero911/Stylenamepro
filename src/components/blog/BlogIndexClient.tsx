'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  Clock,
  ArrowRight,
  User,
  Search,
  Sparkles,
  Flame,
  Shield,
  Zap,
  CheckCircle2,
  Trophy,
  Calendar,
} from 'lucide-react';
import { BlogPost } from '@/types';

interface BlogIndexClientProps {
  posts: BlogPost[];
}

export function BlogIndexClient({ posts }: BlogIndexClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => set.add(p.category));
    return ['All', ...Array.from(set)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let list = posts;

    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.keywords?.some((k) => k.toLowerCase().includes(q))
      );
    }

    return list;
  }, [posts, selectedCategory, searchQuery]);

  // Featured flagship posts
  const featuredPosts = [
    {
      slug: 'free-fire-guild-names',
      title: 'Free Fire Guild Names with Cool Symbols — 300+ Best Ideas 2026',
      badge: 'NEW RELEASE • 300+ SYMBOLS',
      badgeColor: 'bg-amber-500 text-slate-950',
      description:
        'The ultimate collection of 300+ stylish Free Fire guild names with high-level badges, crown frames, and clan symbols for 2026.',
      image: '/images/blog/ff-guild-names-header-2026.jpg',
      readTime: '8 min read',
      author: 'Arham Zahid',
      date: 'September 2026',
    },
    {
      slug: 'stylish-names-for-free-fire',
      title: '1000+ Best Stylish Names for Free Fire (2026) — Copy & Paste',
      badge: 'FLAGSHIP GUIDE • 1000+ NAMES',
      badgeColor: 'bg-brand-600 text-white',
      description:
        'Curated list of 1000+ stylish Free Fire names for boys and girls with crowns, wings, attitude symbols, and invisible name trick.',
      image: '/images/blog/ff-stylish-names-header-2026.jpg',
      readTime: '9 min read',
      author: 'Arham Zahid',
      date: 'September 2026',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black bg-gradient-to-r from-purple-100 via-brand-50 to-amber-100 text-brand-800 border border-purple-200 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Esports Nickname Strategy, Unicode Guides & Tips</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Gaming Nicknames & Font Guides
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Master in-game character limits, secret Unicode blank glitches, and competitive esports squad branding for Free Fire, PUBG, and social profiles.
        </p>

        {/* Quick Stats Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-slate-100 text-slate-700">
            <BookOpen className="w-3.5 h-3.5 text-brand-600" />
            12+ In-Depth Guides
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-slate-100 text-slate-700">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            10,000+ Copyable Styles
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-slate-100 text-slate-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            100% Free & No Login
          </span>
        </div>
      </div>

      {/* Featured Spotlight Grid (Top 2 Guides) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span>Featured Guides</span>
          </h2>
          <span className="text-xs font-bold text-slate-400">Must Read</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredPosts.map((feat) => (
            <Link
              key={feat.slug}
              href={`/blog/${feat.slug}`}
              className="group relative flex flex-col bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-sm hover:border-brand-500 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <Image
                  src={feat.image}
                  alt={feat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase shadow-md ${feat.badgeColor}`}
                  >
                    {feat.badge}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-1 text-slate-600">
                      <User className="w-3.5 h-3.5 text-brand-600" />
                      {feat.author}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {feat.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {feat.date}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-brand-600 font-bold text-sm">
                  <span>Read Complete Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Interactive Filter & Search Bar */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-black tracking-tight flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              <span>Browse All Articles & Guides</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Filter by game or search for specific naming strategies
            </p>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, games, topics..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-800/90 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const count =
              cat === 'All'
                ? posts.length
                : posts.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span>{cat}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-black/20">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-2">
          <span>
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          </span>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-brand-600 hover:underline"
            >
              Reset to All
            </button>
          )}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 space-y-3">
            <p className="text-slate-500 font-medium">
              No articles found matching &quot;{searchQuery}&quot; in {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs hover:bg-brand-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => {
              const href = `/blog/${post.slug}`;
              const isFF = post.category.toLowerCase().includes('free fire');
              const isPUBG = post.category.toLowerCase().includes('pubg');
              const isClan = post.category.toLowerCase().includes('clan');
              const isSocial = post.category.toLowerCase().includes('social');

              return (
                <article
                  key={post.slug}
                  className="group flex flex-col justify-between bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs hover:border-brand-500 hover:shadow-lg transition-all duration-200"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                      <span
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                          isFF
                            ? 'bg-amber-50 text-amber-800'
                            : isPUBG
                            ? 'bg-cyan-50 text-cyan-800'
                            : isClan
                            ? 'bg-purple-50 text-purple-800'
                            : isSocial
                            ? 'bg-rose-50 text-rose-800'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-brand-600 transition-colors">
                      <Link href={href} className="hover:text-brand-600">
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-slate-100 mt-5 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      By {post.author.name}
                    </span>
                    <Link
                      href={href}
                      className="inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:text-brand-700"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Tool Quick Navigation Strip */}
      <div className="bg-gradient-to-r from-purple-50 via-slate-50 to-indigo-50 border-2 border-purple-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="text-xs font-black uppercase tracking-wider text-brand-700">
            Interactive Tools
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Need an instant stylish nickname?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl">
            Type your name into our instant generators to produce hundreds of fancy styles with Unicode symbols in one tap.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
          <Link
            href="/free-fire-names"
            className="px-4 py-2.5 rounded-xl text-xs font-bold bg-brand-600 text-white hover:bg-brand-700 transition-colors shadow-xs"
          >
            Free Fire Tool
          </Link>
          <Link
            href="/pubg-names"
            className="px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-slate-800 border border-slate-200 hover:bg-slate-100 transition-colors"
          >
            PUBG Tool
          </Link>
          <Link
            href="/anime-names"
            className="px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-slate-800 border border-slate-200 hover:bg-slate-100 transition-colors"
          >
            Anime Tool
          </Link>
          <Link
            href="/clan-names"
            className="px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-slate-800 border border-slate-200 hover:bg-slate-100 transition-colors"
          >
            Clan Maker
          </Link>
        </div>
      </div>
    </div>
  );
}
