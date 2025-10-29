import { CVData } from '../types/theme';

export const sampleCVData: CVData = {
  personal: {
    name: 'علی محمدی',
    title: 'توسعه دهنده فول استک ارشد',
    email: 'ali.mohammadi@gmail.com',
    phone: '09123330000',
    location: 'تهران، ایران',
    website: 'alimohammadi.dev',
    linkedin: 'linkedin.com/in/ali-mohammadi',
    github: 'github.com/alimohammadi',
    profileImage: '/boy.png',
  },
  summary:
    'توسعه دهنده فول استک با بیش از ۶ سال تجربه در ساخت اپلیکیشن های وب مقیاس پذیر. متخصص در React، Node.js، TypeScript و معماری میکروسرویس. علاقه مند به کد تمیز، DevOps و ایجاد راه حلهای نوآورانه.',
  skills: [
    {
      category: 'Frontend',
      items: [
        { name: 'React & Next.js', level: 5 },
        { name: 'TypeScript', level: 5 },
        { name: 'Tailwind CSS', level: 5 },
        { name: 'Vue.js', level: 4 },
        { name: 'Angular', level: 3 },
        { name: 'SCSS/Sass', level: 4 },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 5 },
        { name: 'Express.js', level: 5 },
        { name: 'NestJS', level: 4 },
        { name: 'Python/Django', level: 4 },
        { name: 'GraphQL', level: 4 },
        { name: 'REST APIs', level: 5 },
      ],
    },
    {
      category: 'Database',
      items: [
        { name: 'MongoDB', level: 5 },
        { name: 'PostgreSQL', level: 4 },
        { name: 'Redis', level: 4 },
        { name: 'MySQL', level: 4 },
        { name: 'Elasticsearch', level: 3 },
      ],
    },
    {
      category: 'DevOps & Tools',
      items: [
        { name: 'Docker', level: 4 },
        { name: 'AWS/Azure', level: 4 },
        { name: 'Git & GitHub', level: 5 },
        { name: 'CI/CD', level: 4 },
        { name: 'Kubernetes', level: 3 },
        { name: 'Nginx', level: 4 },
      ],
    },
    {
      category: 'Testing',
      items: [
        { name: 'Jest', level: 4 },
        { name: 'Cypress', level: 4 },
        { name: 'Playwright', level: 3 },
        { name: 'Unit Testing', level: 5 },
      ],
    },
  ],
  experience: [
    {
      title: 'توسعه دهنده فول استک ارشد',
      company: 'شرکت فناوری پارستک',
      location: 'تهران، ایران',
      startDate: '۱۴۰۲',
      description:
        'رهبری توسعه اپلیکیشن های وب مقیاس پذیر برای مشتریان سازمانی در بخشهای فینتک و تجارت الکترونیک',
      achievements: [
        'طراحی و پیاده سازی معماری میکروسرویس برای سیستم پرداخت آنلاین',
        'بهبود ۵۰٪ عملکرد اپلیکیشن از طریق بهینه سازی کد و کش استراتژی',
        'پیاده سازی سیستم احراز هویت امن با JWT و OAuth 2.0',
        'رهبری تیم ۵ نفره توسعه دهندگان و راهنمایی جونیورها',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'AWS', 'Docker'],
    },
    {
      title: 'توسعه دهنده فول استک',
      company: 'استودیو نرم افزار آریا',
      location: 'تهران، ایران',
      startDate: '۱۴۰۰',
      endDate: '۱۴۰۲',
      description: 'توسعه اپلیکیشن های وب واکنشگرا برای مشتریان مختلف در بخشهای بهداشت و آموزش',
      achievements: [
        'تحویل موفقیت آمیز بیش از ۲۵ پروژه در زمان و بودجه تعیین شده',
        'پیاده سازی APIهای RESTful و GraphQL برای اپلیکیشن های موبایل',
        'کاهش ۶۰٪ گزارشهای باگ از طریق تست جامع و کد ریویو',
        'بهبود تجربه کاربری از طریق تحلیل داده و A/B تست',
      ],
      technologies: ['React', 'Vue.js', 'Node.js', 'MongoDB', 'Express', 'Bootstrap'],
    },
  ],
  projects: [
    {
      name: 'پلتفرم تجارت الکترونیک',
      description: 'بازار آنلاین کامل با پنل ادمین، پردازش پرداخت، مدیریت موجودی و سیستم ارسال',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API', 'Redis'],
      url: 'https://demo-ecommerce.com',
      github: 'https://github.com/alimohammadi/ecommerce-platform',
    },
    {
      name: 'سیستم مدیریت محتوا',
      description: 'CMS پیشرفته با ویرایشگر WYSIWYG، مدیریت کاربران و سیستم نظرات',
      technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript', 'TinyMCE'],
      github: 'https://github.com/alimohammadi/cms-platform',
    },
    {
      name: 'اپلیکیشن مدیریت وظایف',
      description: 'ابزار مدیریت پروژه مشارکتی بلادرنگ با ویژگیهای تیمی، چت و اعلانها',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'TypeScript'],
      url: 'https://task-manager-demo.com',
      github: 'https://github.com/alimohammadi/task-manager',
    },
    {
      name: 'داشبورد آنالیتیک',
      description: 'داشبورد هوش تجاری تعاملی با نمودارهای پیشرفته و گزارش گیری خودکار',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Chart.js'],
      url: 'https://analytics-dashboard-demo.com',
    },
    {
      name: 'API Gateway میکروسرویس',
      description: 'سیستم مدیریت API با rate limiting، authentication و load balancing',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'Nginx'],
      github: 'https://github.com/alimohammadi/api-gateway',
    },
  ],
  education: [
    {
      degree: 'کارشناسی ارشد مهندسی کامپیوتر',
      school: 'دانشگاه صنعتی شریف',
      location: 'تهران، ایران',
      startDate: '۱۴۰۰',
      endDate: '۱۴۰۲',
    },
    {
      degree: 'کارشناسی مهندسی نرم افزار',
      school: 'دانشگاه تهران',
      location: 'تهران، ایران',
      startDate: '۱۳۹۶',
      endDate: '۱۴۰۰',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '۱۴۰۲',
      url: 'https://aws.amazon.com/certification/',
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '۱۴۰۱',
    },
  ],
  languages: [
    { name: 'فارسی', level: 'زبان مادری' },
    { name: 'انگلیسی', level: 'پیشرفته' },
    { name: 'ترکی', level: 'متوسط' },
  ],
  interests: ['توسعه متن باز', 'یادگیری ماشین', 'معماری نرم افزار', 'عکاسی', 'کوهنوردی', 'شطرنج'],
};
