import { defaultTheme } from '../themes/default';
import { minimalTheme } from '../themes/minimal';
import { cyberpunkTheme } from '../themes/cyberpunk';
import { oceanBreezeTheme } from '../themes/ocean-breeze';
import { nordicMinimalTheme } from '../themes/nordic-minimal';
import { glassmorphismTheme } from '../themes/glassmorphism';
import { Theme } from '../types/theme';

class ThemeRegistry {
  private themes: Map<string, Theme> = new Map();
  private activeTheme: Theme;

  constructor() {
    // Register default themes
    this.registerTheme(defaultTheme);
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

    // Apply color variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key}`, value);
    });

    // Apply typography variables
    root.style.setProperty('--theme-font-family', theme.typography.fontFamily);
    Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
      root.style.setProperty(`--theme-font-size-${key}`, value);
    });
    Object.entries(theme.typography.fontWeight).forEach(([key, value]) => {
      root.style.setProperty(`--theme-font-weight-${key}`, value);
    });
    Object.entries(theme.typography.lineHeight).forEach(([key, value]) => {
      root.style.setProperty(`--theme-line-height-${key}`, value);
    });

    // Apply spacing variables
    Object.entries(theme.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--theme-spacing-${key}`, value);
    });

    // Apply border radius variables
    Object.entries(theme.borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--theme-radius-${key}`, value);
    });

    // Apply shadow variables
    Object.entries(theme.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--theme-shadow-${key}`, value);
    });

    // Apply layout variables
    Object.entries(theme.layout).forEach(([key, value]) => {
      root.style.setProperty(`--theme-layout-${key}`, value);
    });

    // Apply animation variables
    Object.entries(theme.animations.duration).forEach(([key, value]) => {
      root.style.setProperty(`--theme-duration-${key}`, value);
    });
    Object.entries(theme.animations.easing).forEach(([key, value]) => {
      root.style.setProperty(`--theme-easing-${key}`, value);
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
