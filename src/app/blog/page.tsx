import React from 'react';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blog-posts';
import { BlogIndexClient } from '@/components/blog/BlogIndexClient';

export const metadata: Metadata = {
  title: 'Gaming Nickname Guides ↳ ©⓪ⓟⓨ & ⓟⓐⓢⓣⓔ 🔥 2026',
  description:
    'Read expert guides on Free Fire stylish names, PUBG tags, invisible nickname tricks & bio font strategies 🔥 1-tap ©⓪ⓟⓨ & ⓟⓐⓢⓣⓔ 2026!',
  alternates: {
    canonical: 'https://namestylepro.online/blog',
  },
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <BlogIndexClient posts={BLOG_POSTS} />
    </div>
  );
}
