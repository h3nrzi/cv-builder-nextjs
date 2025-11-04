import BlackBasicGrid from '@/components/layout/partial-grid';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#150d28] p-4">
      <BlackBasicGrid />
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-8xl font-bold text-white md:text-9xl">404</h1>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">صفحه یافت نشد</h2>
        <p className="max-w-md text-lg text-gray-300" dir="rtl">
          متأسفانه صفحه‌ای که دنبال آن هستید پیدا نشد. ممکن است آدرس اشتباه باشد یا صفحه حذف شده باشد.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/">
            <Button size="lg">
              <Home className="h-5 w-5" />
              بازگشت به صفحه اصلی
            </Button>
          </Link>
          <Link href="/editor">
            <Button className='text-white hover:text-green-400' size="lg" variant="outline">
              <ArrowLeft className="h-5 w-5" />
              رفتن به ویرایشگر
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

