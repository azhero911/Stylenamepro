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
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Faisalabad',
        addressRegion: 'Punjab',
        addressCountry: 'PK',
      },
    },
  };

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
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Faisalabad',
        addressRegion: 'Punjab',
        addressCountry: 'PK',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'NameStylePro',
      url: 'https://stylenamepro.vercel.app',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
