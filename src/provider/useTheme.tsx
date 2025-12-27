'use client';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { themeRegistry } from '@/lib/theme-registry';
import { Theme } from '@/types/theme';

interface ThemeContextType {
  currentTheme: Theme;
  availableThemes: Theme[];
  setTheme: (themeId: string) => boolean;
  loadExternalTheme: (source: string | File) => Promise<boolean>;
  searchThemes: (query: string) => Theme[];
  isLoading: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultThemeId?: string;
}

export function ThemeProvider({ children, defaultThemeId }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themeRegistry.getActiveTheme());
  const [availableThemes, setAvailableThemes] = useState<Theme[]>(themeRegistry.getAllThemes());
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    // Apply theme on mount
    const storedThemeId = localStorage.getItem('cv-theme-id');
    const initialThemeId = defaultThemeId || storedThemeId || 'persian-modern';

    if (themeRegistry.setActiveTheme(initialThemeId)) {
      setCurrentTheme(themeRegistry.getActiveTheme());
    }
  }, [defaultThemeId]);

  const setTheme = (themeId: string): boolean => {
    setIsLoading(true);
    const success = themeRegistry.setActiveTheme(themeId);

    if (success) {
      setCurrentTheme(themeRegistry.getActiveTheme());
      localStorage.setItem('cv-theme-id', themeId);
    }

    setIsLoading(false);
    return success;
  };

  const loadExternalTheme = async (source: string | File): Promise<boolean> => {
    setIsLoading(true);
    const success = await themeRegistry.loadExternalTheme(source);

    if (success) {
      setAvailableThemes(themeRegistry.getAllThemes());
    }

    setIsLoading(false);
    return success;
  };

  const searchThemes = (query: string): Theme[] => {
    return themeRegistry.searchThemes(query);
  };

  const value: ThemeContextType = {
    currentTheme,
    availableThemes,
    setTheme,
    loadExternalTheme,
    searchThemes,
    isLoading,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Helper hook for getting theme-based styles
export function useThemeStyles() {
  const { currentTheme } = useTheme();

  const getThemeValue = (path: string) => {
    return `var(--theme-${path})`;
  };

  const generateThemeClasses = (classMap: Record<string, string>) => {
    return Object.entries(classMap).reduce(
      (acc, [key, value]) => {
        acc[key] = value.replace(/theme-/g, '');
        return acc;
      },
      {} as Record<string, string>
    );
  };

  return {
    theme: currentTheme,
    getThemeValue,
    generateThemeClasses,
    colors: currentTheme.colors,
    typography: currentTheme.typography,
    spacing: currentTheme.spacing,
    borderRadius: currentTheme.borderRadius,
    shadows: currentTheme.shadows,
    layout: currentTheme.layout,
    animations: currentTheme.animations,
  };
}
