import React, { useState } from 'react';
import { Edit3, Eye, Save, Download, Upload, RefreshCw } from 'lucide-react';
import { CVData } from '../types/theme';
import { useCVData } from '../hooks/useCVData';
import { PersonalInfoEditor } from './editors/PersonalInfoEditor';
import { ThemedCV } from './ThemedCV';
import { Button } from './ui/button';
import { LoadingSpinner } from './LoadingSpinner';

interface CVEditorProps {
  className?: string;
}

type EditorMode = 'edit' | 'preview';
type EditorSection = 'personal' | 'skills' | 'experience' | 'education' | 'projects';

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
    exportData,
    importData,
    saveToLocalStorage
  } = useCVData();

  const [mode, setMode] = useState<EditorMode>('edit');
  const [activeSection, setActiveSection] = useState<EditorSection>('personal');
  const [isSaving, setIsSaving] = useState(false);

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
    // We'll add more sections later
    // { id: 'skills', label: 'مهارت‌ها', icon: Award },
    // { id: 'experience', label: 'تجربه کاری', icon: Briefcase },
    // { id: 'education', label: 'تحصیلات', icon: GraduationCap },
    // { id: 'projects', label: 'پروژه‌ها', icon: FolderOpen }
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
      <div className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          {/* Mode Toggle */}
          <div className="flex rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setMode('edit')}
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                mode === 'edit'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Edit3 className="h-4 w-4" />
              ویرایش
            </button>
            <button
              onClick={() => setMode('preview')}
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                mode === 'preview'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Eye className="h-4 w-4" />
              پیش‌نمایش
            </button>
          </div>

          {/* Save Status & Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Save Status */}
            <div className="hidden sm:flex items-center gap-2 text-sm">
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
            <div className="flex items-center gap-2">
              {hasUnsavedChanges && (
                <Button
                  onClick={handleSave}
                  disabled={isSaving}
                  size="sm"
                  className="hidden sm:flex"
                >
                  {isSaving ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      در حال ذخیره...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      ذخیره
                    </>
                  )}
                </Button>
              )}

              <Button onClick={exportData} variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">خروجی</span>
              </Button>

              <label className="cursor-pointer">
                <Button variant="outline" size="sm" asChild>
                  <div>
                    <Upload className="mr-2 h-4 w-4" />
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
          <div className="w-64 bg-white border-r border-gray-200 shadow-sm">
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">بخش‌های رزومه</h3>
              <nav className="space-y-1">
                {sectionTabs.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id as EditorSection)}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-right ${
                        activeSection === section.id
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
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
            <div className="max-w-4xl mx-auto p-4 sm:p-6">
              {activeSection === 'personal' && (
                <PersonalInfoEditor
                  personalInfo={cvData.personal}
                  summary={cvData.summary}
                  onUpdatePersonalInfo={updatePersonalInfo}
                  onUpdateSummary={updateSummary}
                />
              )}
              {/* We'll add other sections here later */}
            </div>
          ) : (
            <div className="p-4">
              <ThemedCV data={cvData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
