import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'CV Builder - Professional Resume Creator',
  description:
    'Extensible CV/Resume builder with multiple themes, built with Next.js, React, TypeScript, and Tailwind CSS - Community-driven and optimized for Persian/Farsi content',
  keywords: [
    'cv',
    'resume',
    'builder',
    'themes',
    'nextjs',
    'react',
    'typescript',
    'tailwindcss',
    'persian',
    'farsi',
    'rtl',
    'pdf',
    'print',
  ],
  authors: [{ name: 'Hossein' }],
  creator: 'Hossein',
  publisher: 'CV Builder',
  openGraph: {
    title: 'CV Builder - Professional Resume Creator',
    description: 'Create professional CVs with beautiful themes and export to PDF',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CV Builder - Professional Resume Creator',
    description: 'Create professional CVs with beautiful themes and export to PDF',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
