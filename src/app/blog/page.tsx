import React from 'react';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blog-posts';
import { BlogIndexClient } from '@/components/blog/BlogIndexClient';

export const metadata: Metadata = {
  title: 'Gaming Nickname Guides & Name Style Tips — NameStylePro',
  description:
    'Expert guides on Free Fire stylish names, Roblox display ideas, PUBG Mobile tags, and bio fonts. Verified nickname rules and copy-ready presets.',
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
