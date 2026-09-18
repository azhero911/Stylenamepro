import React from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface WebAppSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function WebAppJsonLd({ name, description, url }: WebAppSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      name: 'AZDeveloper',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationJsonLd({
  name = 'NameStylePro',
  url = 'https://namestylepro.online',
  logo = 'https://namestylepro.online/logo.png',
}: {
  name?: string;
  url?: string;
  logo?: string;
}) {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name,
      url,
      logo: {
        '@type': 'ImageObject',
        url: logo,
        width: 1024,
        height: 1024,
      },
      sameAs: ['https://namestylepro.online'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name,
      url,
      publisher: {
        '@type': 'Organization',
        name,
        logo: {
          '@type': 'ImageObject',
          url: logo,
        },
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: FaqItem[] }) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  publishedAt,
  authorName = 'AZDeveloper',
}: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  authorName?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'NameStylePro',
      url: 'https://namestylepro.online',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; item: string }[];
}) {
  if (!items || items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
