import { Theme } from '../../types/theme';

export const vibrantProTheme: Theme = {
  config: {
    id: 'sleek-elegance',
    name: 'Sleek Elegance',
    description: 'A clean and elegant theme with subtle contrast and premium feel.',
    author: 'Hossein',
    version: '1.1.0',
    tags: ['minimal', 'elegant', 'premium'],
  },
  colors: {
    primary: '#0d6efd', // Soft royal blue
    secondary: '#6f42c1', // Elegant purple
    accent: '#fd7e14', // Warm orange
    background: '#f8f9fa',
    foreground: '#212529',
    muted: '#e9ecef',
    mutedForeground: '#6c757d',
    border: '#dee2e6',
    card: '#ffffff',
    cardForeground: '#212529',
    destructive: '#dc3545',
    destructiveForeground: '#ffffff',
    ring: '#fd7e14',
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
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
    xs: '0.4rem',
    sm: '0.8rem',
    md: '1.2rem',
    lg: '1.6rem',
    xl: '2.4rem',
    '2xl': '3.2rem',
    '3xl': '4.8rem',
    '4xl': '6.4rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.08)',
    md: '0 3px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 6px 12px rgba(0, 0, 0, 0.12)',
    xl: '0 12px 24px rgba(0, 0, 0, 0.15)',
    '2xl': '0 20px 40px rgba(0, 0, 0, 0.2)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
  },
  layout: {
    maxWidth: '1140px',
    containerPadding: '1.5rem',
    sectionSpacing: '2.5rem',
    cardPadding: '1.2rem',
  },
  animations: {
    duration: {
      fast: '120ms',
      normal: '250ms',
      slow: '700ms',
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
      background: linear-gradient(135deg, #0d6efd, #6f42c1);
    }
    
    .cv-section-card {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(222, 226, 230, 0.5);
    }
    
    .cv-button-accent {
      background-color: #fd7e14;
      color: #ffffff;
      transition: background-color 0.25s ease-in-out;
    }
    
    .cv-button-accent:hover {
      background-color: #e66a0a;
    }
  `,
};
