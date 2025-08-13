import { Check, Download, Loader2, Palette, Search, Tag, Upload, User, X } from 'lucide-react';
import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Theme } from '../types/theme';

interface ThemeSelectorProps {
  className?: string;
}

export function ThemeSelector({ className = '' }: ThemeSelectorProps) {
  const { currentTheme, availableThemes, setTheme, loadExternalTheme, searchThemes, isLoading } =
    useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredThemes, setFilteredThemes] = useState<Theme[]>(availableThemes);
  const [previewTheme, setPreviewTheme] = useState<Theme | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setFilteredThemes(searchThemes(query));
    } else {
      setFilteredThemes(availableThemes);
    }
  };

  const handleThemeSelect = (themeId: string) => {
    setTheme(themeId);
    setIsOpen(false);
    setPreviewTheme(null);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const success = await loadExternalTheme(file);
      if (success) {
        setFilteredThemes(availableThemes);
      } else {
        alert('Failed to load theme file. Please check the format.');
      }
    }
  };

  const exportTheme = (theme: Theme) => {
    const dataStr = JSON.stringify(theme, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = `${theme.config.id}-theme.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className={`relative ${className}`}>
      {/* Theme Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-sm transition-shadow duration-200 hover:shadow-md"
        disabled={isLoading}
      >
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Palette className="h-4 w-4" />}
        <span className="text-sm font-medium">{currentTheme.config.name}</span>
      </button>

      {/* Theme Selector Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="flex max-h-[90vh] w-full max-w-4xl flex-col rounded-xl bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 p-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">انتخاب قالب</h2>
                <p className="mt-1 text-sm text-gray-600">قالب مورد نظر خود را انتخاب کنید</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 transition-colors hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search and Actions */}
            <div className="space-y-4 border-b border-gray-200 p-6">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                  <input
                    type="text"
                    placeholder="جستجوی قالب..."
                    value={searchQuery}
                    onChange={e => handleSearch(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    dir="rtl"
                  />
                </div>

                {/* Upload Theme */}
                <label className="flex cursor-pointer items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
                  <Upload className="h-4 w-4" />
                  <span className="text-sm">آپلود قالب</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Themes Grid */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredThemes.map(theme => (
                  <div
                    key={theme.config.id}
                    className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all duration-200 ${
                      currentTheme.config.id === theme.config.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                    onClick={() => handleThemeSelect(theme.config.id)}
                  >
                    {/* Theme Preview */}
                    <div
                      className="relative mb-4 h-32 overflow-hidden rounded-lg"
                      style={{
                        background: `linear-gradient(135deg, ${theme.colors.primary}20, ${theme.colors.accent}20)`,
                      }}
                    >
                      <div className="absolute inset-4 rounded bg-white shadow-sm">
                        <div
                          className="h-2 rounded-t"
                          style={{ backgroundColor: theme.colors.primary }}
                        />
                        <div className="space-y-1 p-2">
                          <div
                            className="h-1 rounded"
                            style={{
                              backgroundColor: theme.colors.foreground,
                              opacity: 0.8,
                              width: '70%',
                            }}
                          />
                          <div
                            className="h-1 rounded"
                            style={{
                              backgroundColor: theme.colors.foreground,
                              opacity: 0.6,
                              width: '50%',
                            }}
                          />
                          <div
                            className="h-1 rounded"
                            style={{ backgroundColor: theme.colors.accent, width: '80%' }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Theme Info */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900">{theme.config.name}</h3>
                        {currentTheme.config.id === theme.config.id && (
                          <Check className="h-4 w-4 text-blue-500" />
                        )}
                      </div>

                      <p className="line-clamp-2 text-xs text-gray-600">
                        {theme.config.description}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <User className="h-3 w-3" />
                        <span>{theme.config.author}</span>
                        <span>•</span>
                        <span>v{theme.config.version}</span>
                      </div>

                      {theme.config.tags && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {theme.config.tags.slice(0, 3).map(tag => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs text-gray-600"
                            >
                              <Tag className="h-2 w-2" />
                              {tag}
                            </span>
                          ))}
                          {theme.config.tags.length > 3 && (
                            <span className="text-xs text-gray-400">
                              +{theme.config.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="absolute right-2 top-2 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          exportTheme(theme);
                        }}
                        className="rounded bg-white p-1 shadow-sm transition-colors hover:bg-gray-50"
                        title="دانلود قالب"
                      >
                        <Download className="h-3 w-3 text-gray-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredThemes.length === 0 && (
                <div className="py-12 text-center">
                  <Palette className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                  <h3 className="mb-2 text-lg font-medium text-gray-900">قالبی یافت نشد</h3>
                  <p className="text-gray-600">لطفاً کلمات کلیدی دیگری امتحان کنید</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="rounded-b-xl border-t border-gray-200 bg-gray-50 p-6">
              <p className="text-center text-sm text-gray-600">
                برای ساخت قالب جدید،
                <a
                  href="https://github.com/your-repo/cv-builder/blob/main/THEME_DEVELOPMENT.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 text-blue-600 hover:text-blue-800"
                >
                  راهنمای توسعه قالب
                </a>
                را مطالعه کنید.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
