'use client';

import { Button } from './ui/button';
import { Edit3, Eye, RefreshCw, Save, Printer, Download, Upload } from 'lucide-react';
import { ThemeSelector } from './ThemeSelector';

type EditorMode = 'edit' | 'preview';

interface CVHeaderProps {
  mode: EditorMode;
  setMode: (mode: EditorMode) => void;
  hasUnsavedChanges: boolean;
  isSaving: boolean;
  handleSave: () => void;
  exportData: () => void;
  handleFileImport: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CVHeader({
  mode,
  setMode,
  hasUnsavedChanges,
  isSaving,
  handleSave,
  exportData,
  handleFileImport,
}: CVHeaderProps) {
  return (
    <div className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm print:hidden">
      <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        {/* Right Column: Mode Toggle and Save Status */}
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
              <span className="min-[400px]:inline hidden">پیشنمایش</span>
            </button>
          </div>

          {/* Save Status */}
          <div className="flex items-center text-xs">
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
          </div>
        </div>

        {/* Left Column: Actions and Save Status */}
        <div className="flex items-center justify-between sm:justify-end sm:gap-4">
          {/* Theme Selector */}
          <ThemeSelector className="hidden sm:block" />

          {/* Action Buttons */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              onClick={() => window.print()}
              variant="outline"
              size="sm"
              className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm"
            >
              <Printer className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">PDF</span>
            </Button>

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
  );
}
