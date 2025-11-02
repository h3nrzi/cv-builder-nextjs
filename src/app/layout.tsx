import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'رزومه چی (ساخت رزومه آنلاین رایگان)',
  description: 'ساخت رزومه آنلاین رایگان با قالب‌های زیبا و مدرن',
  icons: '/favicon.ico',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
