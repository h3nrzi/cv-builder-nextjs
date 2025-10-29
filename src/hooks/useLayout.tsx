'use client';

import { CVLayout } from '@/types/theme';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export function useLayout() {
  const searchParams = useSearchParams();
  const [layout, setLayout] = useState<CVLayout>('standard');

  useEffect(() => {
    const layoutParam = searchParams.get('layout') as CVLayout;
    if (layoutParam && (layoutParam === 'standard' || layoutParam === 'minimal')) {
      setLayout(layoutParam);
    }
  }, [searchParams]);

  const changeLayout = (newLayout: CVLayout) => {
    const url = new URL(window.location.href);
    url.searchParams.set('layout', newLayout);
    window.history.pushState({}, '', url.toString());
    setLayout(newLayout);
  };

  return {
    layout,
    changeLayout,
  };
}