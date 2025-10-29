import { CVData } from '../types/theme';

export const sampleCVData: CVData = {
  personal: {
    name: 'جان اسمیت',
    title: 'توسعه‌دهنده ارشد فول استک',
    email: 'john.smith@email.com',
    phone: '+1 (555) 123-4567',
    location: 'سان فرانسیسکو، کالیفرنیا',
    website: 'johnsmith.dev',
    linkedin: 'linkedin.com/in/john-smith',
    github: 'github.com/johnsmith',
    profileImage: 'https://avatar.iran.liara.run/public/boy?username=johnsmith',
  },
  summary:
    'توسعه‌دهنده فول استک با بیش از ۶ سال تجربه در ساخت اپلیکیشن‌های وب مقیاس‌پذیر. متخصص در React، Node.js و TypeScript. علاقه‌مند به کد تمیز، روش‌های توسعه مدرن و ارائه تجربه کاربری استثنایی.',
  skills: [
    {
      category: 'فرانت‌اند',
      items: [
        { name: 'React & Next.js', level: 5 },
        { name: 'TypeScript', level: 5 },
        { name: 'Tailwind CSS', level: 4 },
        { name: 'Vue.js', level: 3 },
      ],
    },
    {
      category: 'بک‌اند',
      items: [
        { name: 'Node.js', level: 5 },
        { name: 'Express.js', level: 4 },
        { name: 'MongoDB', level: 4 },
        { name: 'PostgreSQL', level: 4 },
      ],
    },
    {
      category: 'ابزارها و DevOps',
      items: [
        { name: 'Git & GitHub', level: 5 },
        { name: 'Docker', level: 4 },
        { name: 'AWS', level: 3 },
        { name: 'CI/CD', level: 4 },
      ],
    },
  ],
  experience: [
    {
      title: 'توسعه‌دهنده ارشد فول استک',
      company: 'شرکت راه‌حل‌های تکنولوژی',
      location: 'سان فرانسیسکو، کالیفرنیا',
      startDate: '۲۰۲۲',
      description:
        'رهبری توسعه اپلیکیشن‌های وب مقیاس‌پذیر برای مشتریان سازمانی در بخش‌های فین‌تک و تجارت الکترونیک',
      achievements: [
        'بهبود ۴۵٪ عملکرد اپلیکیشن از طریق بهینه‌سازی کد و استراتژی‌های کش',
        'پیاده‌سازی سیستم احراز هویت امن با استفاده از JWT و OAuth 2.0',
        'ساخت داشبورد ادمین جامع با React و TypeScript',
        'رهبری تیم ۴ نفره توسعه‌دهندگان و راهنمایی توسعه‌دهندگان جونیور',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'AWS'],
    },
    {
      title: 'توسعه‌دهنده فول استک',
      company: 'شرکت نوآوری‌های دیجیتال',
      location: 'سان فرانسیسکو، کالیفرنیا',
      startDate: '۲۰۲۰',
      endDate: '۲۰۲۲',
      description: 'توسعه اپلیکیشن‌های وب واکنش‌گرا برای مشتریان مختلف در بخش‌های بهداشت و آموزش',
      achievements: [
        'تحویل موفقیت‌آمیز بیش از ۲۰ پروژه مشتری در زمان و بودجه تعیین شده',
        'پیاده‌سازی اصول طراحی واکنش‌گرا با رویکرد موبایل اول',
        'بهبود تجربه کاربری از طریق تست A/B و آنالیتیک',
        'کاهش ۶۰٪ گزارش‌های باگ از طریق تست جامع',
      ],
      technologies: ['React', 'Vue.js', 'Node.js', 'MongoDB', 'Bootstrap'],
    },
  ],
  projects: [
    {
      name: 'پلتفرم تجارت الکترونیک',
      description: 'بازار آنلاین کامل با پنل ادمین، پردازش پرداخت و مدیریت موجودی',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      url: 'https://demo-ecommerce.com',
      github: 'https://github.com/johnsmith/ecommerce-platform',
    },
    {
      name: 'اپلیکیشن مدیریت وظایف',
      description: 'ابزار مدیریت پروژه مشارکتی بلادرنگ با ویژگی‌های تیمی و اعلان‌ها',
      technologies: ['Next.js', 'Socket.io', 'PostgreSQL', 'TypeScript'],
      github: 'https://github.com/johnsmith/task-manager',
    },
    {
      name: 'داشبورد آنالیتیک',
      description: 'داشبورد هوش تجاری تعاملی با ویژگی‌های تجسم داده و گزارش‌گیری',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      url: 'https://analytics-dashboard-demo.com',
    },
  ],
  education: [
    {
      degree: 'کارشناسی علوم کامپیوتر',
      school: 'دانشگاه کالیفرنیا، برکلی',
      location: 'برکلی، کالیفرنیا',
      startDate: '۲۰۱۶',
      endDate: '۲۰۲۰',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Developer Associate',
      issuer: 'Amazon Web Services',
      date: '۲۰۲۳',
      url: 'https://aws.amazon.com/certification/',
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '۲۰۲۲',
    },
  ],
  languages: [
    { name: 'انگلیسی', level: 'زبان مادری' },
    { name: 'اسپانیایی', level: 'متوسط' },
  ],
  interests: ['توسعه متن‌باز', 'یادگیری ماشین', 'طراحی UI/UX', 'عکاسی', 'کوهنوردی'],
};
