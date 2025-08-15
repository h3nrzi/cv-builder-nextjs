import { useState, useEffect } from 'react';
import { ThemeProvider } from './hooks/useTheme';
import { CVEditor } from './components/CVEditor';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

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
          <p className="text-sm text-gray-600">ویرایشگر حرفه‌ای رزومه با قابلیت تغییر قالب</p>

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
        <CVEditor />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
