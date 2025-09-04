'use client';
import { CVHeader } from '@/app/editor/cv-header';
import { EducationEditor } from '@/components/editors/EducationEditor';
import { ExperienceEditor } from '@/components/editors/ExperienceEditor';
import { InterestsEditor } from '@/components/editors/InterestsEditor';
import { LanguagesEditor } from '@/components/editors/LanguagesEditor';
import { PersonalInfoEditor } from '@/components/editors/PersonalInfoEditor';
import { ProjectsEditor } from '@/components/editors/ProjectsEditor';
import { SkillsEditor } from '@/components/editors/SkillsEditor';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ThemedCV } from '@/components/ThemedCV';
import { PrintGuideNotification } from '@/components/PrintGuideNotification';
import { useCVData } from '@/hooks/useCVData';
import { Award, Briefcase, Edit3, FolderOpen, GraduationCap, Heart, Languages } from 'lucide-react';
import React, { useEffect, useState } from 'react';

type EditorMode = 'edit' | 'preview';
type EditorSection =
  | 'personal'
  | 'skills'
  | 'experience'
  | 'education'
  | 'projects'
  | 'languages'
  | 'interests';

export default function EditorPage() {
  const {
    cvData,
    isLoading,
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
    { id: 'education', label: 'تحصیلات', icon: GraduationCap },
    { id: 'languages', label: 'زبان‌ها', icon: Languages },
    { id: 'interests', label: 'علایق', icon: Heart },
    { id: 'skills', label: 'مهارت‌ها', icon: Award },
    { id: 'experience', label: 'تجربه کاری', icon: Briefcase },
    { id: 'projects', label: 'پروژه‌ها', icon: FolderOpen },
  ];

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner size="lg" text="در حال بارگذاری داده‌های رزومه..." />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50`}>
      <PrintGuideNotification />
      {/* Header */}
      <CVHeader
        mode={mode}
        setMode={setMode}
        hasUnsavedChanges={hasUnsavedChanges}
        isSaving={isSaving}
        handleSave={handleSave}
        exportData={exportData}
        handleFileImport={handleFileImport}
      />

      <div className="flex flex-1">
        {/* Desktop Sidebar - Only in edit mode */}
        {mode === 'edit' && (
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
        )}

        {/* Main Content */}
        <div className="flex-1">
          {mode === 'edit' ? (
            <div className="mx-auto max-w-4xl p-4 sm:p-6">
              {/* Mobile Navigation */}
              <div className="mb-5 rounded-lg border border-gray-200 bg-white p-1 shadow-sm sm:hidden">
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
