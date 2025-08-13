import { useState, useEffect } from 'react';
import { ThemeProvider } from './hooks/useTheme';
import { ThemedCV } from './components/ThemedCV';
import { ThemeSelector } from './components/ThemeSelector';
import { sampleCVData } from './data/sample-cv';
import { Loader2, Settings } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showThemeSelector, setShowThemeSelector] = useState(false);

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
    <ThemeProvider>
      <div className="relative">
        {/* Theme Selector Button */}
        <div className="fixed left-4 top-4 z-50 print:hidden">
          <ThemeSelector />
        </div>

        {/* Settings Button */}
        <div className="fixed right-4 top-4 z-50 print:hidden">
          <button
            onClick={() => setShowThemeSelector(!showThemeSelector)}
            className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-sm transition-shadow duration-200 hover:shadow-md"
          >
            <Settings className="h-4 w-4" />
            <span className="text-sm font-medium">تنظیمات</span>
          </button>
        </div>

        {/* Main CV Content */}
        <ThemedCV data={sampleCVData} />

        {/* Welcome Banner */}
        <div
          className="fixed bottom-4 left-4 right-4 mx-auto max-w-md rounded-lg border border-blue-200 bg-blue-50 p-4 print:hidden"
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
      </div>
    </ThemeProvider>
  );
}
