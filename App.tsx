import { useState, useEffect } from 'react';
import { ThemeProvider } from './hooks/useTheme';
import { ThemedCV } from './components/ThemedCV';
import { ThemeSelector } from './components/ThemeSelector';
import { CVEditor } from './components/CVEditor';
import { ErrorBoundary } from './components/ErrorBoundary';
import { sampleCVData } from './data/sample-cv';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { Loader2, Settings, Keyboard, Edit } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const [showShortcutsHelp, setShowShortcutsHelp] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  // Keyboard shortcuts
  const { getShortcutDisplay } = useKeyboardShortcuts({
    shortcuts: [
      {
        key: 'p',
        ctrlKey: true,
        callback: () => {
          window.print();
        },
        description: 'پرینت رزومه'
      },
      {
        key: 'Escape',
        callback: () => {
          setShowThemeSelector(false);
          setShowShortcutsHelp(false);
        },
        description: 'بستن پنجره‌ها'
      },
      {
        key: 't',
        ctrlKey: true,
        callback: () => {
          setShowThemeSelector(!showThemeSelector);
        },
        description: 'نمایش انتخابگر قالب'
      },
      {
        key: '?',
        shiftKey: true,
        callback: () => {
          setShowShortcutsHelp(!showShortcutsHelp);
        },
        description: 'نمایش کلیدهای میانبر'
      },
      {
        key: 'e',
        ctrlKey: true,
        callback: () => {
          setIsEditMode(!isEditMode);
        },
        description: 'تغییر به حالت ویرایش'
      }
    ],
    enabled: !isLoading
  });

  // Simulate loading time for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
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
          <h2 className="mb-2 text-lg font-medium text-gray-800">در حال بارگذاری ساز رزومه</h2>
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
    <ErrorBoundary>
      <ThemeProvider>
        <div className="relative">
        {/* Home Page UI - Only show when not in edit mode */}
        {!isEditMode && (
          <>
            {/* Theme Selector Button */}
            <div className="fixed left-2 top-2 z-50 print:hidden sm:left-4 sm:top-4">
              <ThemeSelector />
            </div>

            {/* Action Buttons */}
            <div className="fixed right-2 top-2 z-50 flex gap-1 print:hidden sm:right-4 sm:top-4 sm:gap-2">
              <button
                onClick={() => setIsEditMode(!isEditMode)}
                className={`flex items-center gap-2 rounded-lg border px-2 py-2 shadow-sm transition-all duration-200 hover:shadow-md sm:px-3 ${
                  isEditMode 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-gray-200 bg-white text-gray-700'
                }`}
                title="حالت ویرایش (Ctrl+E)"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button
                onClick={() => setShowShortcutsHelp(!showShortcutsHelp)}
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2 py-2 shadow-sm transition-shadow duration-200 hover:shadow-md sm:px-3"
                title="کلیدهای میانبر (Shift+?)"
              >
                <Keyboard className="h-4 w-4" />
              </button>
              <button
                onClick={() => setShowThemeSelector(!showThemeSelector)}
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm transition-shadow duration-200 hover:shadow-md sm:px-4"
                title="تنظیمات قالب (Ctrl+T)"
              >
                <Settings className="h-4 w-4" />
                <span className="hidden text-sm font-medium sm:inline">تنظیمات</span>
              </button>
            </div>
          </>
        )}

        {/* Main CV Content */}
        {isEditMode ? (
          <CVEditor />
        ) : (
          <>
            <ThemedCV data={sampleCVData} />
            
            {/* Keyboard Shortcuts Help - Only for Home */}
            {showShortcutsHelp && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-4">
                <div className="w-full max-w-md rounded-xl bg-white shadow-2xl">
                  <div className="flex items-center justify-between border-b border-gray-200 p-4 sm:p-6">
                    <h2 className="text-base font-semibold text-gray-900 sm:text-lg">کلیدهای میانبر</h2>
                    <button
                      onClick={() => setShowShortcutsHelp(false)}
                      className="p-1 text-gray-400 transition-colors hover:text-gray-600"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">پرینت رزومه</span>
                        <kbd className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                          {getShortcutDisplay({ key: 'p', ctrlKey: true, callback: () => {}, description: '' })}
                        </kbd>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">انتخاب قالب</span>
                        <kbd className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                          {getShortcutDisplay({ key: 't', ctrlKey: true, callback: () => {}, description: '' })}
                        </kbd>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">کلیدهای میانبر</span>
                        <kbd className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                          {getShortcutDisplay({ key: '?', shiftKey: true, callback: () => {}, description: '' })}
                        </kbd>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">بستن پنجره‌ها</span>
                        <kbd className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                          ESC
                        </kbd>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-blue-50 p-3">
                      <p className="text-xs text-blue-700" dir="rtl">
                        💡 نکته: برای پرینت سریع از Ctrl+P استفاده کنید
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Welcome Banner - Only for Home */}
            <div
              className="fixed bottom-2 left-2 right-2 mx-auto max-w-md rounded-lg border border-blue-200 bg-blue-50 p-3 print:hidden sm:bottom-4 sm:left-4 sm:right-4 sm:p-4"
              dir="rtl"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
                  <Settings className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-sm font-medium text-blue-900">به ساز رزومه خوش آمدید!</h3>
                  <p className="text-xs text-blue-700">
                    از دکمه انتخاب قالب در بالا برای تغییر ظاهر رزومه استفاده کنید. این پروژه متن‌باز
                    است و می‌توانید قالب‌های جدید اضافه کنید.
                  </p>
                  <button
                    onClick={e => {
                      e.currentTarget.parentElement?.parentElement?.parentElement?.remove();
                    }}
                    className="mt-2 text-xs text-blue-600 hover:text-blue-800"
                  >
                    متوجه شدم
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
