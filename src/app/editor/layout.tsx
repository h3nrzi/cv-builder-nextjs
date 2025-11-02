import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ProviderLayoutCv } from '@/provider/provider-layout-cv';
import { ThemeProvider } from '@/provider/useTheme';
import { PropsWithChildren } from 'react';

export default function EditorLayout({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ProviderLayoutCv>
          <div className="min-h-screen bg-gray-50">{children}</div>
        </ProviderLayoutCv>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
