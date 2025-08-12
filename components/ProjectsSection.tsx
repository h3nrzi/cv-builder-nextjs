import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import { Button } from './ui/button';
import { SectionHeader } from './SectionHeader';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: 'سیستم مدیریت فروشگاه آنلاین',
      description: 'پلتفرم کامل فروشگاه آنلاین با پنل ادمین، سیستم پرداخت و مدیریت موجودی',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      liveUrl: 'https://shop-demo.com',
      githubUrl: 'https://github.com/ali-ahmadi/online-shop',
      features: [
        'احراز هویت کاربران با JWT',
        'سیستم پرداخت آنلاین',
        'پنل مدیریت کامل',
        'اپلیکیشن موبایل PWA',
      ],
    },
    {
      title: 'داشبورد تحلیل داده',
      description: 'داشبورد تعاملی برای نمایش و تحلیل داده‌های فروش در زمان واقعی',
      technologies: ['React', 'Chart.js', 'Socket.io', 'Express.js', 'MongoDB'],
      githubUrl: 'https://github.com/ali-ahmadi/analytics-dashboard',
      features: [
        'نمایش داده در زمان واقعی',
        'چارت‌های تعاملی',
        'فیلترهای پیشرفته',
        'صادرات گزارش PDF',
      ],
    },
    {
      title: 'اپلیکیشن مدیریت وظایف',
      description: 'اپلیکیشن کامل مدیریت پروژه و وظایف برای تیم‌های کاری',
      technologies: ['Vue.js', 'Nuxt.js', 'Laravel', 'MySQL', 'WebSocket'],
      liveUrl: 'https://task-manager-demo.com',
      features: [
        'مدیریت پروژه‌ها و وظایف',
        'سیستم نوتیفیکیشن آنی',
        'تایم ترکینگ',
        'گزارش‌گیری پیشرفته',
      ],
    },
  ];

  return (
    <div className="mb-6 rounded-lg border bg-white p-6 shadow-sm">
      <SectionHeader
        title="پروژه‌های برجسته"
        icon={<FolderOpen className="h-5 w-5" />}
        subtitle="نمونه‌کارها و پروژه‌های قابل توجه"
        variant="primary"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg border bg-gray-50 p-4">
            <div className="mb-3 flex items-start justify-between">
              <h4 className="text-right text-base text-gray-800">{project.title}</h4>
              <div className="flex gap-2">
                {project.githubUrl && (
                  <Button size="sm" variant="outline" className="h-8 w-8 p-2">
                    <Github className="h-3 w-3" />
                  </Button>
                )}
                {project.liveUrl && (
                  <Button size="sm" variant="outline" className="h-8 w-8 p-2">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                )}
              </div>
            </div>
            <p className="mb-3 text-right text-sm text-gray-600">{project.description}</p>
            <ul className="mb-3 space-y-1 text-right text-xs text-gray-700">
              {project.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-blue-500"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-700"
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
