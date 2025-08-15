import { Theme } from '../../types/theme';

export const cyberpunkTheme: Theme = {
  config: {
    id: 'cyberpunk-neon',
    name: 'سایبرپانک نئون',
    description: 'قالب سایبرپانک با استایل نئون و زیبایی تاریک',
    author: 'حسین رضایی',
    version: '1.0.0',
    tags: ['سایبرپانک', 'نئون', 'تاریک', 'مدرن'],
  },
  colors: {
    primary: '#00ff88',
    secondary: '#ff0080',
    accent: '#00d4ff',
    background: '#0a0a0f',
    foreground: '#e0e0e0',
    muted: '#1a1a2e',
    mutedForeground: '#888888',
    border: '#333366',
    card: '#16213e',
    cardForeground: '#e0e0e0',
    destructive: '#ff0040',
    destructiveForeground: '#ffffff',
    ring: '#00ff88',
  },
  typography: {
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
    '4xl': '8rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.375rem',
    xl: '0.5rem',
    '2xl': '0.75rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 0 5px rgba(0, 255, 136, 0.3)',
    md: '0 0 10px rgba(0, 255, 136, 0.4)',
    lg: '0 0 20px rgba(0, 255, 136, 0.5)',
    xl: '0 0 30px rgba(0, 255, 136, 0.6)',
    '2xl': '0 0 40px rgba(0, 255, 136, 0.7)',
    inner: 'inset 0 0 10px rgba(0, 255, 136, 0.2)',
  },
  layout: {
    maxWidth: '1200px',
    containerPadding: '1rem',
    sectionSpacing: '2rem',
    cardPadding: '1.5rem',
  },
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '800ms',
    },
    easing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  customCSS: `
    .cv-gradient-bg {
      background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
    }
    
    .cv-section-card {
      background: rgba(22, 33, 62, 0.8);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(0, 255, 136, 0.3);
      box-shadow: 0 0 20px rgba(0, 255, 136, 0.2);
    }
    
    .cv-skill-progress {
      background: linear-gradient(90deg, #00ff88, #00d4ff);
      box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
    }
  `,
};
