'use client';

import { Button } from '../../components/ui/button';
import {
  Edit3,
  Eye,
  RefreshCw,
  Save,
  Printer,
  Download,
  Upload,
  FileText,
  Minimize2,
  House,
} from 'lucide-react';
import { ThemeSelector } from '../../components/ThemeSelector';
import { CVLayout } from '../../types/theme';
import DialogTemplate from '@/components/template/dialog-template';
import Link from 'next/link';

type EditorMode = 'edit' | 'preview';

interface HeaderProps {
  mode: EditorMode;
  setMode: (mode: EditorMode) => void;
  hasUnsavedChanges: boolean;
  isSaving: boolean;
  handleSave: () => void;
  exportData: () => void;
  handleFileImport: (event: React.ChangeEvent<HTMLInputElement>) => void;
  layout: CVLayout;
  onLayoutChange: (layout: CVLayout) => void;
}

export function Header({
  mode,
  setMode,
  hasUnsavedChanges,
  isSaving,
  handleSave,
  exportData,
  handleFileImport,
  layout,
  onLayoutChange,
}: HeaderProps) {
  return (
    <div className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm print:hidden">
      <div className="md-px-12 flex flex-row items-center justify-between gap-3 px-2 py-3">
        {/* Right Column: Mode Toggle and Save Status */}
        <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-6">
          {/* Mode Toggle */}
          <Link href="/">
            <House strokeWidth={0.75} className="" />
          </Link>
          <div className="flex rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setMode('edit')}
              className={`flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors sm:px-3 sm:py-2 sm:text-sm ${
                mode === 'edit'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Edit3 className="h-5 w-5" />
              <span className="hidden sm:block">ویرایش</span>
            </button>
            <button
              onClick={() => setMode('preview')}
              className={`flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors sm:px-3 sm:py-2 sm:text-sm ${
                mode === 'preview'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Eye className="h-5 w-5" />
              <span className="hidden sm:block">پیش نمایش</span>
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
          {/* Layout Selector */}
          <div className="flex flex-row items-center gap-2">
            {layout === 'standard' && <ThemeSelector />}
            <DialogTemplate />
          </div>
          <div className="flex gap-3 rounded-lg bg-gray-100 p-1">
            {/* // !new-features */}

            <button
              onClick={() => onLayoutChange('standard')}
              className={`flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors sm:px-3 sm:py-2 sm:text-sm ${
                layout === 'standard'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span className="hidden sm:block">استاندارد</span>
            </button>
            <button
              onClick={() => onLayoutChange('minimal')}
              className={`flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors sm:px-3 sm:py-2 sm:text-sm ${
                layout === 'minimal'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Minimize2 className="h-4 w-4" />
              <span className="hidden sm:block">پیش فرض</span>
            </button>
          </div>

          {/* Theme Selector */}

          {/* Action Buttons */}
          <div className="sm flex items-center gap-1 sm:gap-2">
            <Button
              onClick={() => window.print()}
              variant="outline"
              size="sm"
              className="hidden px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm md:flex"
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
