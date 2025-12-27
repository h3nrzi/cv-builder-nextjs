'use client';
import { Building, Calendar, Briefcase } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: 'Senior Full Stack Developer',
      company: 'شرکت فناوری نوآوران',
      duration: '1402 - اکنون',
      location: 'تهران',
      description: [
        'توسعه و نگهداری سیستم‌های وب بزرگ با بیش از 10,000 کاربر فعال',
        'پیاده‌سازی معماری میکروسرویس با Node.js و Docker',
        'رهبری تیم 5 نفره توسعه‌دهندگان',
        'بهبود کارایی سیستم تا 40% از طریق بهینه‌سازی کدها',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    },
    {
      title: 'Full Stack JavaScript Developer',
      company: 'استارتاپ دیجی‌تک',
      duration: '1400 - 1402',
      location: 'تهران',
      description: [
        'توسعه اپلیکیشن‌های وب SPA با React و Next.js',
        'ایجاد API های RESTful با Express.js',
        'همکاری نزدیک با تیم طراحی UX/UI',
        'پیاده‌سازی سیستم احراز هویت و مجوزدهی',
      ],
      technologies: ['React', 'Next.js', 'MongoDB', 'Express.js', 'TypeScript'],
    },
    {
      title: 'توسعه‌دهنده فریلنس Full Stack',
      company: 'فریلنسر مستقل',
      duration: '1399 - 1401',
      location: 'دورکاری',
      description: [
        'توسعه پروژه‌های وب برای کلینت‌های متنوع از استارتاپ تا شرکت‌های بزرگ',
        'مشاوره فنی و معماری سیستم‌های وب',
        'ایجاد سیستم‌های CMS سفارشی',
        'مدیریت پروژه‌ها از ابتدا تا انتهای تحویل',
      ],
      technologies: ['React', 'Vue.js', 'Laravel', 'WordPress', 'MySQL', 'Git'],
    },
    {
      title: 'Frontend Developer',
      company: 'آژانس دیجیتال مهرگان',
      duration: '1399 - 1400',
      location: 'تهران',
      description: [
        'توسعه وب‌سایت‌های ریسپانسیو برای کلینت‌های مختلف',
        'تبدیل طرح‌های Figma به کد',
        'بهینه‌سازی سایت‌ها برای SEO',
        'همکاری با تیم بک‌اند برای یکپارچه‌سازی API ها',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Bootstrap'],
    },
    {
      title: 'کارآموز توسعه وب',
      company: 'شرکت راه‌حل‌های نرم‌افزاری پارس',
      duration: '1398 - 1399',
      location: 'تهران',
      description: [
        'آشنایی با اصول توسعه وب و فرآیند کار تیمی',
        'یادگیری Framework های مدرن جاوا اسکریپت',
        'مشارکت در پروژه‌های آموزشی تحت نظارت منتور',
        'کسب تجربه در debugging و تست کردن کد',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP'],
    },
  ];

  return (
    <div className="mb-6 rounded-lg border bg-white p-6 shadow-sm">
      <SectionHeader
        title="تجربه کاری"
        icon={<Briefcase className="h-5 w-5" />}
        subtitle="سابقه شغلی و دستاوردهای حرفه‌ای"
        variant="accent"
      />
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative border-r-2 border-blue-200 pr-4">
            <div className="absolute -right-2 top-0 h-3 w-3 rounded-full bg-blue-500"></div>
            <div className="mb-2">
              <h4 className="text-right text-base text-gray-800">{exp.title}</h4>
              <div className="mt-1 flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Building className="h-4 w-4" />
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.duration}</span>
                </div>
                <span>{exp.location}</span>
              </div>
            </div>
            <ul className="mb-3 list-inside list-disc space-y-1 text-right text-sm text-gray-700">
              {exp.description.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
