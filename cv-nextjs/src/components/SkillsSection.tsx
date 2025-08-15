'use client';
import { Badge } from '@/components/ui/badge';
import { Code2 } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

interface SkillCategory {
  title: string;
  skills: string[];
}

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Bootstrap',
        'Vue.js',
      ],
    },
    {
      title: 'Backend',
      skills: [
        'Node.js',
        'Express.js',
        'NestJS',
        'MongoDB',
        'PostgreSQL',
        'MySQL',
        'Redis',
        'GraphQL',
        'REST APIs',
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        'Docker',
        'Kubernetes',
        'AWS',
        'Git',
        'GitHub Actions',
        'Jest',
        'Cypress',
        'Webpack',
        'Vite',
      ],
    },
    {
      title: 'Mobile & Desktop',
      skills: ['React Native', 'Expo', 'Electron', 'PWA'],
    },
  ];

  return (
    <div className="mb-6 rounded-lg border bg-white p-6 shadow-sm">
      <SectionHeader
        title="مهارت‌های فنی"
        icon={<Code2 className="h-5 w-5" />}
        subtitle="تکنولوژی‌ها و ابزارهای مورد تسلط"
        variant="secondary"
      />
      <div className="space-y-4">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h4 className="mb-2 text-right text-sm text-gray-600">{category.title}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
