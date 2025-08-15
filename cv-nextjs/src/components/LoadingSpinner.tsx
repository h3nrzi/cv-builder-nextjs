'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export function LoadingSpinner({
  size = 'md',
  text = 'در حال بارگذاری...',
  className = '',
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <Loader2 className={`animate-spin text-blue-600 ${sizeClasses[size]}`} />
      {text && <span className="animate-pulse text-sm text-gray-600">{text}</span>}
    </div>
  );
}

interface LoadingOverlayProps {
  isVisible: boolean;
  text?: string;
  className?: string;
}

export function LoadingOverlay({
  isVisible,
  text = 'در حال پردازش...',
  className = '',
}: LoadingOverlayProps) {
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm transition-all duration-300 ${className}`}
    >
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-2xl">
        <LoadingSpinner size="lg" text={text} />
      </div>
    </div>
  );
}

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-lg bg-gray-200 p-6 ${className}`}>
      <div className="mb-4 h-4 w-1/3 rounded bg-gray-300"></div>
      <div className="space-y-2">
        <div className="h-3 w-full rounded bg-gray-300"></div>
        <div className="h-3 w-5/6 rounded bg-gray-300"></div>
        <div className="h-3 w-4/6 rounded bg-gray-300"></div>
      </div>
    </div>
  );
}
