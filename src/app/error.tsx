'use client';

import { AlertTriangle, RefreshCw } from 'lucide-react';
import { useEffect } from 'react';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">خطایی رخ داده است</h2>
          <p className="mb-4 text-sm text-gray-600" dir="rtl">
            متأسفانه مشکلی در نمایش صفحه پیش آمده است. لطفاً صفحه را تازه‌سازی کنید.
          </p>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            <RefreshCw className="h-4 w-4" />
            تازه‌سازی صفحه
          </button>
        </div>
      </div>
    </div>
  );
}
