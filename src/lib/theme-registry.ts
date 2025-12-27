import { newTheme } from '@/themes/new';
import { cyberpunkTheme } from '../themes/cyberpunk';
import { defaultTheme } from '../themes/default';
import { glassmorphismTheme } from '../themes/glassmorphism';
import { minimalTheme } from '../themes/minimal';
import { nordicMinimalTheme } from '../themes/nordic-minimal';
import { oceanBreezeTheme } from '../themes/ocean-breeze';
import { Theme } from '../types/theme';

class ThemeRegistry {
  private themes: Map<string, Theme> = new Map();
  private activeTheme: Theme;

  constructor() {
    // Register default themes
    this.registerTheme(defaultTheme);
    this.registerTheme(newTheme);
    this.registerTheme(minimalTheme);
    this.registerTheme(cyberpunkTheme);
    this.registerTheme(oceanBreezeTheme);
    this.registerTheme(nordicMinimalTheme);
    this.registerTheme(glassmorphismTheme);
    this.activeTheme = defaultTheme;
  }

  /**
   * Register a new theme in the registry
   */
  registerTheme(theme: Theme): void {
    this.themes.set(theme.config.id, theme);
  }

  /**
   * Get all registered themes
   */
  getAllThemes(): Theme[] {
    return Array.from(this.themes.values());
  }

  /**
   * Get a theme by its ID
   */
  getTheme(id: string): Theme | undefined {
    return this.themes.get(id);
  }

  /**
   * Set the active theme
   */
  setActiveTheme(id: string): boolean {
    const theme = this.themes.get(id);
    if (theme) {
      this.activeTheme = theme;
      this.applyTheme(theme);
      return true;
    }
    return false;
  }

  /**
   * Get the currently active theme
   */
  getActiveTheme(): Theme {
    return this.activeTheme;
  }

  /**
   * Apply theme styles to the document
   */
  private applyTheme(theme: Theme): void {
    const root = document.documentElement;

    const setTheme: Array<keyof Omit<Theme, 'config' | 'customCSS'>> = [
      'colors',
      'typography',
      'spacing',
      'borderRadius',
      'shadows',
      'layout',
      'animations',
    ];

    setTheme.forEach(themeKey => {
      const themeSection = theme[themeKey] as unknown as Record<string, unknown>;
      Object.entries(themeSection).forEach(([propKey, value]) => {
        if (typeof value === 'string') {
          root.style.setProperty(`--theme-${propKey}`, value);
        } else if (typeof value === 'object' && value !== null) {
          Object.entries(value as Record<string, unknown>).forEach(([nestedKey, nestedValue]) => {
            if (typeof nestedValue === 'string') {
              root.style.setProperty(`--theme-${propKey}-${nestedKey}`, nestedValue);
            }
          });
        }
      });
    });

    // Apply custom CSS
    this.applyCustomCSS(theme);
  }

  /**
   * Apply custom CSS for the theme
   */
  private applyCustomCSS(theme: Theme): void {
    // Remove existing theme styles
    const existingStyle = document.getElementById('theme-custom-styles');
    if (existingStyle) {
      existingStyle.remove();
    }

    // Add new theme styles
    if (theme.customCSS) {
      const style = document.createElement('style');
      style.id = 'theme-custom-styles';
      style.textContent = theme.customCSS;
      document.head.appendChild(style);
    }
  }

  /**
   * Search themes by tags or name
   */
  searchThemes(query: string): Theme[] {
    const lowerQuery = query.toLowerCase();
    return this.getAllThemes().filter(
      theme =>
        theme.config.name.toLowerCase().includes(lowerQuery) ||
        theme.config.description.toLowerCase().includes(lowerQuery) ||
        theme.config.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  }

  /**
   * Get themes by author
   */
  getThemesByAuthor(author: string): Theme[] {
    return this.getAllThemes().filter(
      theme => theme.config.author.toLowerCase() === author.toLowerCase()
    );
  }

  /**
   * Get themes by tag
   */
  getThemesByTag(tag: string): Theme[] {
    return this.getAllThemes().filter(theme => theme.config.tags?.includes(tag.toLowerCase()));
  }

  /**
   * Load external theme from URL or file
   */
  async loadExternalTheme(source: string | File): Promise<boolean> {
    try {
      let themeData: Theme;

      if (typeof source === 'string') {
        // Load from URL
        const response = await fetch(source);
        themeData = await response.json();
      } else {
        // Load from file
        const text = await source.text();
        themeData = JSON.parse(text);
      }

      // Validate theme structure
      if (this.validateTheme(themeData)) {
        this.registerTheme(themeData);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Failed to load external theme:', error);
      return false;
    }
  }

  /**
   * Validate theme structure
   */
  private validateTheme(theme: any): theme is Theme {
    return (
      theme &&
      theme.config &&
      typeof theme.config.id === 'string' &&
      typeof theme.config.name === 'string' &&
      theme.colors &&
      theme.typography &&
      theme.spacing &&
      theme.borderRadius &&
      theme.shadows &&
      theme.layout &&
      theme.animations
    );
  }
}

// Create singleton instance
export const themeRegistry = new ThemeRegistry();
export default themeRegistry;
