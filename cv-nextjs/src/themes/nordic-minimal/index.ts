import { Theme } from '../../types/theme';

export const nordicMinimalTheme: Theme = {
  config: {
    id: 'nordic-minimal',
    name: 'Nordic Minimal',
    description: 'A clean Scandinavian-inspired theme with muted colors and excellent typography',
    author: 'CV Builder Pro',
    version: '1.0.0',
    tags: ['nordic', 'minimal', 'clean', 'scandinavian', 'typography'],
  },
  colors: {
    primary: '#2e3440',
    secondary: '#5e81ac',
    accent: '#88c0d0',
    background: '#eceff4',
    foreground: '#2e3440',
    muted: '#e5e9f0',
    mutedForeground: '#4c566a',
    border: '#d8dee9',
    card: '#ffffff',
    cardForeground: '#2e3440',
    destructive: '#bf616a',
    destructiveForeground: '#ffffff',
    ring: '#5e81ac',
  },
  typography: {
    fontFamily: '"Source Sans Pro", -apple-system, BlinkMacSystemFont, sans-serif',
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
      normal: '1.6',
      relaxed: '1.8',
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
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px rgba(46, 52, 64, 0.05)',
    md: '0 2px 4px rgba(46, 52, 64, 0.08)',
    lg: '0 4px 8px rgba(46, 52, 64, 0.12)',
    xl: '0 8px 16px rgba(46, 52, 64, 0.15)',
    '2xl': '0 16px 32px rgba(46, 52, 64, 0.2)',
    inner: 'inset 0 1px 2px rgba(46, 52, 64, 0.05)',
  },
  layout: {
    maxWidth: '900px',
    containerPadding: '2rem',
    sectionSpacing: '3rem',
    cardPadding: '2rem',
  },
  animations: {
    duration: {
      fast: '150ms',
      normal: '250ms',
      slow: '500ms',
    },
    easing: {
      linear: 'linear',
      in: 'ease-in',
      out: 'ease-out',
      inOut: 'ease-in-out',
    },
  },
  customCSS: `
    .cv-gradient-bg {
      background: linear-gradient(180deg, #eceff4 0%, #e5e9f0 100%);
    }
    
    .cv-section-card {
      background: #ffffff;
      border: 1px solid #d8dee9;
      box-shadow: 0 2px 4px rgba(46, 52, 64, 0.06);
    }
    
    .cv-skill-progress {
      background: linear-gradient(90deg, #5e81ac, #88c0d0);
    }
    
    .cv-nordic-accent {
      border-left: 4px solid #5e81ac;
      padding-left: 1rem;
    }
    
    .cv-section-title {
      color: #2e3440;
      font-weight: 600;
      letter-spacing: -0.025em;
    }
  `,
};
