import { User } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export function SummarySection() {
  return (
    <div className="mb-6 rounded-lg border bg-white p-6 shadow-sm">
      <SectionHeader
        title="خلاصه تخصصی"
        icon={<User className="h-5 w-5" />}
        subtitle="نمای کلی از تجربیات و مهارت‌های حرفه‌ای"
        variant="primary"
      />
      <p className="text-right text-sm leading-relaxed text-gray-700">
        برنامه‌نویس فول استک با بیش از 4 سال تجربه در توسعه اپلیکیشن‌های وب مدرن با JavaScript و
        TypeScript. تخصص در React، Node.js و معماری‌های مقیاس‌پذیر. تجربه رهبری تیم و مدیریت
        پروژه‌های پیچیده. علاقه‌مند به یادگیری تکنولوژی‌های جدید و حل مسائل چالش‌برانگیز. آماده
        همکاری در محیط‌های پویا و خلاق برای ایجاد راه‌حل‌های نوآورانه و بهبود تجربه کاربری.
      </p>

      <div className="mt-6">
        <h4 className="mb-3 text-right text-base text-gray-800">اهداف شغلی</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1 w-1 rounded-full bg-blue-500"></span>
            <span className="text-right">
              توسعه و رهبری پروژه‌های تکنولوژی پیشرفته در شرکت‌های نوآور
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1 w-1 rounded-full bg-blue-500"></span>
            <span className="text-right">
              مشارکت در ایجاد محصولات دیجیتال با تأثیر مثبت بر جامعه
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1 w-1 rounded-full bg-blue-500"></span>
            <span className="text-right">
              ارتقا مهارت‌ها در حوزه‌های جدید مانند AI و Cloud Computing
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
