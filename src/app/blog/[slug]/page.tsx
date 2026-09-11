import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { BLOG_POSTS, getBlogPostBySlug, getAllBlogSlugs } from '@/data/blog-posts';
import { ArticleJsonLd } from '@/components/seo/JsonLd';
import { AdSlot } from '@/components/ui/AdSlot';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Article Not Found' };

  return {
    title: `${post.title} | NameStylePro`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 md:py-12 space-y-8">
      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Guides</span>
      </Link>

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
          <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-brand-700">
            {post.category}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.publishedAt}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed font-medium">
          {post.description}
        </p>

        {/* Author Byline */}
        <div className="flex items-center gap-3 pt-2">
          <div className="w-11 h-11 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-base">
            AZ
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm">{post.author.name}</div>
            <div className="text-xs text-slate-500 flex items-center gap-1">
              <span>{post.author.role}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Top Ad Slot */}
      <AdSlot slotType="banner" />

      {/* Article Markdown/HTML Content */}
      <div className="prose prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-brand-600 prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-2xl prose-pre:p-4 text-base md:text-lg leading-relaxed text-slate-700 space-y-4">
        {post.content.split('\n\n').map((block, idx) => {
          if (block.startsWith('# ')) {
            return (
              <h2 key={idx} className="text-2xl md:text-3xl font-black text-slate-900 pt-4">
                {block.replace('# ', '')}
              </h2>
            );
          }
          if (block.startsWith('## ')) {
            return (
              <h3 key={idx} className="text-xl md:text-2xl font-bold text-slate-900 pt-3">
                {block.replace('## ', '')}
              </h3>
            );
          }
          if (block.startsWith('- ')) {
            return (
              <ul key={idx} className="list-disc pl-5 space-y-1">
                {block.split('\n').map((item, i) => (
                  <li key={i}>{item.replace('- ', '')}</li>
                ))}
              </ul>
            );
          }
          return <p key={idx}>{block}</p>;
        })}
      </div>

      {/* Call to action card */}
      <div className="p-6 md:p-8 rounded-3xl bg-brand-50 border border-brand-200 text-center space-y-3 mt-8">
        <h3 className="text-xl font-black text-brand-900">Try Out These Styles Right Now!</h3>
        <p className="text-sm text-brand-800 max-w-md mx-auto">
          Generate custom font variations of your own nickname using our free instant tool.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all active:scale-98"
        >
          Open Stylish Name Generator
        </Link>
      </div>

      {/* Bottom Ad Slot */}
      <AdSlot slotType="rectangle" />

      {/* Structured Data */}
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        url={`https://www.namestylepro.online/blog/${post.slug}`}
        publishedAt={post.publishedAt}
        authorName={post.author.name}
      />
    </article>
  );
}
