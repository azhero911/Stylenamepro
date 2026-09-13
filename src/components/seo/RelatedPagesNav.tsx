import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';
import { getRelatedPages, SeoPageRecord } from '@/data/seo-registry';

interface RelatedPagesNavProps {
  currentPageId: string;
  title?: string;
  subtitle?: string;
}

export function RelatedPagesNav({
  currentPageId,
  title = 'Explore Related Nickname Styles & Guides',
  subtitle = 'Discover more specialized fonts, symbols, and gaming tags across NameStylePro.',
}: RelatedPagesNavProps) {
  const relatedPages: SeoPageRecord[] = getRelatedPages(currentPageId);

  if (relatedPages.length === 0) return null;

  return (
    <div className="space-y-4 pt-4">
      <div className="flex items-center gap-2">
        <Compass className="w-5 h-5 text-brand-600 shrink-0" />
        <h3 className="text-xl font-black text-slate-900">{title}</h3>
      </div>
      <p className="text-sm text-slate-600">{subtitle}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
        {relatedPages.map((page) => (
          <Link
            key={page.id}
            href={page.url}
            className="group flex flex-col justify-between p-4 bg-white rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all"
          >
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-brand-600 uppercase tracking-wider">
                {page.parentCategory.replace('-', ' ')}
              </span>
              <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors line-clamp-1">
                {page.primaryKeyword.charAt(0).toUpperCase() + page.primaryKeyword.slice(1)}
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {page.description}
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
              <span>View collection</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
