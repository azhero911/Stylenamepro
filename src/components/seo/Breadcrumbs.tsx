import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbJsonLd } from './JsonLd';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = 'https://namestylepro.online';

  const schemaItems = [
    { name: 'Home', item: baseUrl },
    ...items.map((it) => ({
      name: it.label,
      item: it.href ? (it.href.startsWith('http') ? it.href : `${baseUrl}${it.href}`) : baseUrl,
    })),
  ];

  return (
    <>
      <BreadcrumbJsonLd items={schemaItems} />
      <nav aria-label="Breadcrumb" className="w-full py-2">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-500 font-medium">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-brand-600 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>

          {items.map((crumb, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} className="inline-flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                {isLast || !crumb.href ? (
                  <span className="text-slate-800 font-semibold truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:text-brand-600 transition-colors truncate max-w-[180px] sm:max-w-none"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
