import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ThemeProvider } from '@/hooks/useTheme';
import { PropsWithChildren } from 'react';

export default function EditorLayout({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50">{children}</div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
