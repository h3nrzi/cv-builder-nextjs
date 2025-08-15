import { CVHeader } from './CVHeader';

interface CVLayoutProps {
  children: React.ReactNode;
}

export function CVLayout({ children }: CVLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <CVHeader />
      <main className="cv-content">{children}</main>
    </div>
  );
}
