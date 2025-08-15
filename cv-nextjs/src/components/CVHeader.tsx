'use client';
import { ThemeSelector } from './ThemeSelector';

export function CVHeader() {
  return (
    <header className="border-b border-gray-200 bg-white p-4 print:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="text-xl font-semibold">CV Builder</h1>
        <div className="flex items-center gap-4">
          <ThemeSelector />
          <button className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Download PDF
          </button>
        </div>
      </div>
    </header>
  );
}
