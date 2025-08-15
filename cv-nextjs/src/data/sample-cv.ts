import { CVData } from '../types/theme';

export const sampleCVData: CVData = {
  personal: {
    name: 'علی احمدی',
    title: 'برنامه‌نویس فول استک جاوا اسکریپت',
    email: 'ali.ahmadi@email.com',
    phone: '+98 912 345 6789',
    location: 'تهران، ایران',
    website: 'aliahmadidev.com',
    linkedin: 'linkedin.com/in/ali-ahmadi',
    github: 'github.com/ali-ahmadi',
    profileImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  },
  summary:
    'توسعه‌دهنده فول استک با بیش از ۵ سال تجربه در طراحی و توسعه اپلیکیشن‌های وب مدرن. تخصص در React، Node.js و TypeScript. علاقه‌مند به یادگیری تکنولوژی‌های جدید و بهبود مداوم کیفیت کد.',
  skills: [
    {
      category: 'فرانت‌اند',
      items: [
        { name: 'React & Next.js', level: 5 },
        { name: 'TypeScript', level: 4 },
        { name: 'Tailwind CSS', level: 5 },
        { name: 'Vue.js', level: 3 },
      ],
    },
    {
      category: 'بک‌اند',
      items: [
        { name: 'Node.js', level: 4 },
        { name: 'Express.js', level: 4 },
        { name: 'MongoDB', level: 3 },
        { name: 'PostgreSQL', level: 3 },
      ],
    },
    {
      category: 'ابزارها و DevOps',
      items: [
        { name: 'Git & GitHub', level: 5 },
        { name: 'Docker', level: 3 },
        { name: 'AWS', level: 2 },
        { name: 'CI/CD', level: 3 },
      ],
    },
  ],
  experience: [
    {
      title: 'توسعه‌دهنده فول استک ارشد',
      company: 'شرکت فناوری پرشین',
      location: 'تهران، ایران',
      startDate: '۱۴۰۱',
      description: 'طراحی و توسعه سیستم‌های وب مقیاس‌پذیر برای صنعت تجارت الکترونیک',
      achievements: [
        'بهبود ۴۰٪ سرعت لودینگ صفحات با بهینه‌سازی کد فرانت‌اند',
        'پیاده‌سازی سیستم احراز هویت امن با JWT',
        'توسعه پنل ادمین جامع با React و TypeScript',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'توسعه‌دهنده فرانت‌اند',
      company: 'استودیو دیجیتال آریا',
      location: 'تهران، ایران',
      startDate: '۱۳۹۹',
      endDate: '۱۴۰۱',
      description: 'توسعه رابط کاربری واکنش‌گرا برای وب‌سایت‌های تجاری و فروشگاهی',
      achievements: [
        'توسعه ۱۵+ پروژه موفق وب‌سایت تجاری',
        'پیاده‌سازی طراحی واکنش‌گرا با Mobile-First',
        'بهبود UX/UI با تست A/B',
      ],
      technologies: ['React', 'Vue.js', 'CSS', 'JavaScript', 'Bootstrap'],
    },
  ],
  projects: [
    {
      name: 'پلتفرم تجارت الکترونیک',
      description: 'سیستم جامع فروشگاه آنلاین با پنل ادمین و درگاه پرداخت',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      url: 'https://demo-ecommerce.com',
      github: 'https://github.com/ali-ahmadi/ecommerce-platform',
    },
    {
      name: 'اپلیکیشن مدیریت وظایف',
      description: 'اپلیکیشن Real-time برای مدیریت پروژه‌ها و وظایف تیمی',
      technologies: ['Next.js', 'Socket.io', 'PostgreSQL', 'TypeScript'],
      github: 'https://github.com/ali-ahmadi/task-manager',
    },
    {
      name: 'داشبورد آنالیتیک',
      description: 'داشبورد تعاملی برای نمایش آمار و گزارش‌های تجاری',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      url: 'https://analytics-dashboard-demo.com',
    },
  ],
  education: [
    {
      degree: 'کارشناسی مهندسی کامپیوتر',
      school: 'دانشگاه تهران',
      location: 'تهران، ایران',
      startDate: '۱۳۹۵',
      endDate: '۱۳۹۹',
      gpa: '۱۷.۵/۲۰',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Developer Associate',
      issuer: 'Amazon Web Services',
      date: '۱۴۰۲',
      url: 'https://aws.amazon.com/certification/',
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '۱۴۰۱',
    },
  ],
  languages: [
    { name: 'فارسی', level: 'زبان مادری' },
    { name: 'انگلیسی', level: 'پیشرفته' },
  ],
  interests: ['توسعه نرم‌افزار متن باز', 'یادگیری ماشین', 'طراحی UI/UX', 'عکاسی', 'مطالعه'],
};
