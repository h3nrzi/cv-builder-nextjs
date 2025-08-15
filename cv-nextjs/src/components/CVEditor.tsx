'use client';
import {
  Award,
  Briefcase,
  Download,
  Edit3,
  Eye,
  RefreshCw,
  Save,
  Upload,
  GraduationCap,
  FolderOpen,
  Languages,
  Heart,
  Palette,
  Printer,
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useCVData } from '@/hooks/useCVData';
import { PersonalInfoEditor } from '@/components/editors/PersonalInfoEditor';
import { SkillsEditor } from '@/components/editors/SkillsEditor';
import { ExperienceEditor } from '@/components/editors/ExperienceEditor';
import { EducationEditor } from '@/components/editors/EducationEditor';
import { ProjectsEditor } from '@/components/editors/ProjectsEditor';
import { LanguagesEditor } from '@/components/editors/LanguagesEditor';
import { InterestsEditor } from '@/components/editors/InterestsEditor';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ThemedCV } from '@/components/ThemedCV';
import { ThemeSelector } from '@/components/ThemeSelector';
import { Button } from '@/components/ui/button';

interface CVEditorProps {
  className?: string;
}

type EditorMode = 'edit' | 'preview';
type EditorSection =
  | 'personal'
  | 'skills'
  | 'experience'
  | 'education'
  | 'projects'
  | 'languages'
  | 'interests';

export function CVEditor({ className = '' }: CVEditorProps) {
  const {
    cvData,
    isLoading,
    lastSaved,
    hasUnsavedChanges,
    updatePersonalInfo,
    updateSummary,
    updateSkills,
    updateExperience,
    updateEducation,
    updateProjects,
    updateLanguages,
    updateInterests,
    exportData,
    importData,
    saveToLocalStorage,
  } = useCVData();

  const [mode, setMode] = useState<EditorMode>('edit');
  const [activeSection, setActiveSection] = useState<EditorSection>('personal');
  const [isSaving, setIsSaving] = useState(false);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        window.print();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate save delay
    saveToLocalStorage();
    setIsSaving(false);
  };

  const handleFileImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const success = await importData(file);
      if (success) {
        // Show success message or toast
        console.log('Data imported successfully');
      } else {
        // Show error message
        console.error('Failed to import data');
      }
    }
  };

  const sectionTabs = [
    { id: 'personal', label: 'اطلاعات شخصی', icon: Edit3 },
    { id: 'skills', label: 'مهارت‌ها', icon: Award },
    { id: 'experience', label: 'تجربه کاری', icon: Briefcase },
    { id: 'education', label: 'تحصیلات', icon: GraduationCap },
    { id: 'projects', label: 'پروژه‌ها', icon: FolderOpen },
    { id: 'languages', label: 'زبان‌ها', icon: Languages },
    { id: 'interests', label: 'علایق', icon: Heart },
  ];

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner size="lg" text="در حال بارگذاری داده‌های رزومه..." />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          {/* Top Row: Mode Toggle and Save Status */}
          <div className="flex items-center justify-between sm:justify-start sm:gap-6">
            {/* Mode Toggle */}
            <div className="flex rounded-lg bg-gray-100 p-1">
              <button
                onClick={() => setMode('edit')}
                className={`flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors sm:px-3 sm:py-2 sm:text-sm ${
                  mode === 'edit'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Edit3 className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="min-[400px]:inline hidden">ویرایش</span>
              </button>
              <button
                onClick={() => setMode('preview')}
                className={`flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors sm:px-3 sm:py-2 sm:text-sm ${
                  mode === 'preview'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="min-[400px]:inline hidden">پیش‌نمایش</span>
              </button>
            </div>

            {/* Save Status - Mobile */}
            <div className="flex items-center text-xs sm:hidden">
              {hasUnsavedChanges ? (
                <span className="text-amber-600">تغییرات ذخیره نشده</span>
              ) : lastSaved ? (
                <span className="text-green-600">ذخیره شده</span>
              ) : (
                <span className="text-gray-500">آماده</span>
              )}
            </div>
          </div>

          {/* Bottom Row: Actions and Save Status */}
          <div className="flex items-center justify-between sm:justify-end sm:gap-4">
            {/* Save Status - Desktop */}
            <div className="hidden items-center gap-2 text-sm sm:flex">
              {hasUnsavedChanges ? (
                <span className="text-amber-600">تغییرات ذخیره نشده</span>
              ) : lastSaved ? (
                <span className="text-green-600">
                  ذخیره شده {new Date(lastSaved).toLocaleTimeString('fa-IR')}
                </span>
              ) : (
                <span className="text-gray-500">آماده</span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1 sm:gap-2">
              {hasUnsavedChanges && (
                <Button
                  onClick={handleSave}
                  disabled={isSaving}
                  size="sm"
                  className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm"
                >
                  {isSaving ? (
                    <>
                      <RefreshCw className="mr-1 h-3 w-3 animate-spin sm:mr-2 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline">در حال ذخیره...</span>
                    </>
                  ) : (
                    <>
                      <Save className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline">ذخیره</span>
                    </>
                  )}
                </Button>
              )}

              <Button
                onClick={exportData}
                variant="outline"
                size="sm"
                className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm"
              >
                <Download className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">خروجی</span>
              </Button>

              <label className="cursor-pointer">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm"
                >
                  <div>
                    <Upload className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">ورود</span>
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleFileImport}
                      className="hidden"
                    />
                  </div>
                </Button>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar - Only in edit mode */}
        {mode === 'edit' && (
          <>
            {/* Mobile Navigation */}
            <div className="border-b border-gray-200 bg-white sm:hidden">
              <div className="px-4 py-2">
                <select
                  value={activeSection}
                  onChange={e => setActiveSection(e.target.value as EditorSection)}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  dir="rtl"
                >
                  {sectionTabs.map(section => (
                    <option key={section.id} value={section.id}>
                      {section.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden w-64 border-r border-gray-200 bg-white shadow-sm sm:block">
              <div className="p-4">
                <h3 className="mb-3 text-sm font-semibold text-gray-900">بخش‌های رزومه</h3>
                <nav className="space-y-1">
                  {sectionTabs.map(section => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id as EditorSection)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-right text-sm transition-colors ${
                          activeSection === section.id
                            ? 'border border-blue-200 bg-blue-50 text-blue-700'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                        dir="rtl"
                      >
                        <Icon className="h-4 w-4" />
                        {section.label}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </>
        )}

        {/* Main Content */}
        <div className="flex-1">
          {mode === 'edit' ? (
            <div className="mx-auto max-w-4xl p-4 sm:p-6">
              {activeSection === 'personal' && (
                <PersonalInfoEditor
                  personalInfo={cvData.personal}
                  summary={cvData.summary}
                  onUpdatePersonalInfo={updatePersonalInfo}
                  onUpdateSummary={updateSummary}
                />
              )}
              {activeSection === 'skills' && (
                <SkillsEditor skills={cvData.skills} onUpdateSkills={updateSkills} />
              )}
              {activeSection === 'experience' && (
                <ExperienceEditor
                  experience={cvData.experience}
                  onUpdateExperience={updateExperience}
                />
              )}
              {activeSection === 'education' && (
                <EducationEditor education={cvData.education} onUpdateEducation={updateEducation} />
              )}
              {activeSection === 'projects' && (
                <ProjectsEditor projects={cvData.projects} onUpdateProjects={updateProjects} />
              )}
              {activeSection === 'languages' && (
                <LanguagesEditor languages={cvData.languages} onUpdateLanguages={updateLanguages} />
              )}
              {activeSection === 'interests' && (
                <InterestsEditor interests={cvData.interests} onUpdateInterests={updateInterests} />
              )}
            </div>
          ) : (
            <>
              {/* Preview Mode Floating Actions */}
              <div className="fixed left-4 top-20 z-30 print:hidden">
                <div className="flex flex-col gap-2">
                  <ThemeSelector />
                  <Button
                    onClick={() => window.print()}
                    size="sm"
                    className="flex items-center gap-2 shadow-lg"
                    title="پرینت رزومه (Ctrl+P)"
                  >
                    <Printer className="h-4 w-4" />
                    <span className="hidden sm:inline">پرینت</span>
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <ThemedCV data={cvData} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
