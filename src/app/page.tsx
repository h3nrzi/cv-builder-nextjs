import { PicuterCover } from '@/components/motion/picuter-motion';
import BlackBasicGrid, { DarkNoisedColor } from '@/components/partial-ui/partial-grid';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Palette, Zap } from 'lucide-react';
import Link from 'next/link';
export default function HomePage() {
  return (
    <div className="flex flex-col gap-3 bg-[#150d28]">
      <BlackBasicGrid />
      <footer className="relative z-20 flex justify-center bg-[#150d282c] py-5  ">
        <p className="text-gray-400">
          با ❤️ ساخته شده توسط حسین رضایی -
          <a
            href="https://github.com/h3nrzi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300"
          >
            @h3nrzi
          </a>
        </p>
      </footer>
      <div className="group relative  h-[calc(100svh-77px)] overflow-hidden">
        <section className="relative z-10  flex h-full flex-col items-center justify-center gap-5 md:pb-48">
          <h1 className="z-10 text-5xl font-bold text-white md:text-7xl">
            رزومه ساز
            <span className="z-10 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              {' '}
              حرفه‌ای
            </span>
          </h1>
          <p className="z-10 mx-auto mb-8 max-w-2xl text-xl text-blue-400" dir="rtl">
            رزومه خود را با قالب‌های زیبا و مدرن بسازید. سریع، آسان و کاملاً رایگان
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/editor">
              <Button size={'xl'}>
                شروع کنید
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </section>
        <PicuterCover />
      </div>

      <section className="relative flex flex-col">
        <DarkNoisedColor />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">چرا ما را انتخاب کنید؟</h2>
            <p className="text-xl text-gray-300" dir="rtl">
              ابزارهای قدرتمند برای ساخت بهترین رزومه
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all hover:bg-white/20">
              <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-3">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">قالب‌های متنوع</h3>
              <p className="text-gray-300" dir="rtl">
                از میان قالب‌های زیبا و مدرن انتخاب کنید. از مینیمال تا پیشرفته
              </p>
            </div>

            <div className="group rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all hover:bg-white/20">
              <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-purple-500 to-pink-600 p-3">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">سریع و آسان</h3>
              <p className="text-gray-300" dir="rtl">
                در کمتر از ۵ دقیقه رزومه حرفه‌ای خود را بسازید
              </p>
            </div>

            <div className="group rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all hover:bg-white/20">
              <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-green-500 to-teal-600 p-3">
                <Download className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">خروجی PDF</h3>
              <p className="text-gray-300" dir="rtl">
                رزومه خود را به صورت PDF با کیفیت بالا دانلود کنید
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-white">8+</div>
              <div className="text-gray-300">قالب زیبا</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-white">100%</div>
              <div className="text-gray-300">رایگان</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-white">∞</div>
              <div className="text-gray-300">امکانات</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
