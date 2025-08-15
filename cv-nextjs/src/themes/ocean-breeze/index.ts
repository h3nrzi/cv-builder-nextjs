import { Theme } from '../../types/theme';

export const oceanBreezeTheme: Theme = {
  config: {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    description: 'A calming ocean-inspired theme with blue gradients and wave-like animations',
    author: 'CV Builder Pro',
    version: '1.0.0',
    tags: ['ocean', 'blue', 'calm', 'gradient', 'professional'],
  },
  colors: {
    primary: '#0ea5e9',
    secondary: '#06b6d4',
    accent: '#3b82f6',
    background: '#f0f9ff',
    foreground: '#0f172a',
    muted: '#e0f2fe',
    mutedForeground: '#475569',
    border: '#bae6fd',
    card: '#ffffff',
    cardForeground: '#0f172a',
    destructive: '#ef4444',
    destructiveForeground: '#ffffff',
    ring: '#0ea5e9',
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
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
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 3px rgba(14, 165, 233, 0.1)',
    md: '0 4px 6px rgba(14, 165, 233, 0.15)',
    lg: '0 10px 15px rgba(14, 165, 233, 0.2)',
    xl: '0 20px 25px rgba(14, 165, 233, 0.25)',
    '2xl': '0 25px 50px rgba(14, 165, 233, 0.3)',
    inner: 'inset 0 2px 4px rgba(14, 165, 233, 0.1)',
  },
  layout: {
    maxWidth: '1100px',
    containerPadding: '1.5rem',
    sectionSpacing: '2.5rem',
    cardPadding: '2rem',
  },
  animations: {
    duration: {
      fast: '200ms',
      normal: '400ms',
      slow: '1000ms',
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
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%);
    }
    
    .cv-section-card {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(14, 165, 233, 0.2);
      box-shadow: 0 8px 32px rgba(14, 165, 233, 0.1);
    }
    
    .cv-skill-progress {
      background: linear-gradient(90deg, #0ea5e9, #06b6d4);
    }
    
    @keyframes wave {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-5px); }
    }
    
    .cv-wave-animation {
      animation: wave 3s ease-in-out infinite;
    }
  `,
};
