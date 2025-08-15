'use client';
import { User, Code2, Briefcase, FolderOpen, GraduationCap, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export function TopNavigation() {
  const [activeSection, setActiveSection] = useState('header');

  const sections = [
    { id: 'header', label: 'اطلاعات شخصی', icon: <User className="h-4 w-4" /> },
    { id: 'summary', label: 'خلاصه', icon: <User className="h-4 w-4" /> },
    { id: 'skills', label: 'مهارت‌ها', icon: <Code2 className="h-4 w-4" /> },
    { id: 'experience', label: 'تجربه', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'projects', label: 'پروژه‌ها', icon: <FolderOpen className="h-4 w-4" /> },
    { id: 'education', label: 'تحصیلات', icon: <GraduationCap className="h-4 w-4" /> },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-md print:hidden">
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex items-center justify-between py-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
              <span className="text-sm font-bold text-white">ع</span>
            </div>
            <div className="text-right">
              <h1 className="text-base font-semibold text-gray-800">علی احمدی</h1>
              <p className="text-xs text-gray-600">Full Stack Developer</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {sections.map(section => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => scrollToSection(section.id)}
                className="h-8 gap-1 px-3 text-xs"
              >
                {section.icon}
                {section.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 md:hidden">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
