import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — NameStylePro Support & Inquiries',
  description:
    'Contact the NameStylePro engineering and editorial team for font requests, bug reports, and partnership inquiries.',
  alternates: {
    canonical: 'https://namestylepro.online/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
