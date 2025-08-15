'use client';
import { useState, useEffect } from 'react';
import { X, Printer, Info } from 'lucide-react';

export function PrintGuideNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has seen this notification before
    const hasSeenNotification = localStorage.getItem('printGuideNotificationSeen');
    if (!hasSeenNotification) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('printGuideNotificationSeen', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm rounded-lg border border-blue-200 bg-blue-50 p-4 shadow-lg">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <Info className="h-5 w-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-medium text-blue-900">راهنمای پرینت</h4>
          <p className="mt-1 text-sm text-blue-800" dir="rtl">
            برای پرینت کردن رزومه، ابتدا به حالت <strong>پیش‌نمایش</strong> بروید و سپس از منوی مرورگر گزینه پرینت را انتخاب کنید.
          </p>
          <div className="mt-2 flex items-center gap-2 text-xs text-blue-700">
            <Printer className="h-3 w-3" />
            <span>Ctrl+P برای پرینت سریع</span>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 text-blue-400 hover:text-blue-600"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-3">
        <button
          onClick={handleDismiss}
          className="text-xs text-blue-600 hover:text-blue-800 underline"
        >
          متوجه شدم
        </button>
      </div>
    </div>
  );
}