import { useState, useEffect } from 'react';
import { CVHeader } from './components/CVHeader';
import { SummarySection } from './components/SummarySection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationAndOther } from './components/EducationAndOther';
import { TopNavigation } from './components/TopNavigation';
import { FloatingActions } from './components/FloatingActions';
import { ProgressIndicator } from './components/ProgressIndicator';
import { FooterBranding } from './components/FooterBranding';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Simulate loading time for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsVisible(true), 100);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          </div>
          <h2 className="mb-2 text-lg font-medium text-gray-800">در حال بارگذاری رزومه</h2>
          <p className="text-sm text-gray-600">لطفاً صبر کنید...</p>

          {/* Loading Progress Bar */}
          <div className="mx-auto mt-4 h-1 w-64 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full animate-pulse rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
              style={{ width: '75%' }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"
      dir="rtl"
    >
      {/* Progress Indicator */}
      <ProgressIndicator />

      {/* Top Navigation */}
      <TopNavigation />

      {/* Main Content */}
      <main
        className={`
        transition-all duration-1000 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
      `}
      >
        <div className="mx-auto max-w-4xl px-4 py-8">
          {/* Hero Section with Enhanced Spacing */}
          <div className="relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute right-10 top-20 h-32 w-32 animate-pulse rounded-full bg-blue-100 opacity-20" />
              <div className="absolute left-20 top-40 h-24 w-24 animate-pulse rounded-full bg-purple-100 opacity-20 delay-1000" />
              <div className="delay-2000 absolute bottom-20 right-32 h-16 w-16 animate-pulse rounded-full bg-emerald-100 opacity-20" />
            </div>

            {/* CV Content with Enhanced Layout */}
            <div id="cv-content" className="cv-content space-y-8">
              {/* Header with personal information */}
              <div id="header" className="scroll-mt-20">
                <CVHeader />
              </div>

              {/* Professional Summary */}
              <div
                id="summary"
                className="animate-fade-in-up scroll-mt-20"
                style={{ animationDelay: '0.1s' }}
              >
                <SummarySection />
              </div>

              {/* Technical Skills */}
              <div
                id="skills"
                className="animate-fade-in-up scroll-mt-20"
                style={{ animationDelay: '0.2s' }}
              >
                <SkillsSection />
              </div>

              {/* Work Experience */}
              <div
                id="experience"
                className="animate-fade-in-up scroll-mt-20"
                style={{ animationDelay: '0.3s' }}
              >
                <ExperienceSection />
              </div>

              {/* Featured Projects */}
              <div
                id="projects"
                className="animate-fade-in-up scroll-mt-20"
                style={{ animationDelay: '0.4s' }}
              >
                <ProjectsSection />
              </div>

              {/* Education, Certificates, Languages, and Interests */}
              <div
                id="education"
                className="animate-fade-in-up scroll-mt-20"
                style={{ animationDelay: '0.5s' }}
              >
                <EducationAndOther />
              </div>

              {/* Enhanced Footer */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <FooterBranding />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Actions */}
      <FloatingActions />

      {/* Print Optimization Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }

          @media print {
            .scroll-mt-20 {
              scroll-margin-top: 0 !important;
            }
            
            .animate-fade-in-up {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
            
            .bg-gradient-to-br {
              background: white !important;
            }
          }
        `,
        }}
      />
    </div>
  );
}
