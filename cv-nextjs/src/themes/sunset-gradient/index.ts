import { Theme } from '../../types/theme';

export const sunsetGradientTheme: Theme = {
  config: {
    id: 'sunset-gradient',
    name: 'Sunset Gradient',
    description: 'A warm and vibrant theme inspired by beautiful sunset colors',
    author: 'CV Builder Pro',
    version: '1.0.0',
    tags: ['sunset', 'warm', 'gradient', 'vibrant', 'creative'],
  },
  colors: {
    primary: '#f97316',
    secondary: '#ec4899',
    accent: '#8b5cf6',
    background: '#fef7ed',
    foreground: '#1c1917',
    muted: '#fed7aa',
    mutedForeground: '#78716c',
    border: '#fdba74',
    card: '#ffffff',
    cardForeground: '#1c1917',
    destructive: '#dc2626',
    destructiveForeground: '#ffffff',
    ring: '#f97316',
  },
  typography: {
    fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, sans-serif',
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
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.25rem',
    '2xl': '2rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 2px 4px rgba(249, 115, 22, 0.1)',
    md: '0 4px 8px rgba(249, 115, 22, 0.15)',
    lg: '0 8px 16px rgba(249, 115, 22, 0.2)',
    xl: '0 16px 32px rgba(249, 115, 22, 0.25)',
    '2xl': '0 24px 48px rgba(249, 115, 22, 0.3)',
    inner: 'inset 0 2px 4px rgba(249, 115, 22, 0.1)',
  },
  layout: {
    maxWidth: '1200px',
    containerPadding: '1.5rem',
    sectionSpacing: '3rem',
    cardPadding: '2rem',
  },
  animations: {
    duration: {
      fast: '200ms',
      normal: '350ms',
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
      background: linear-gradient(135deg, #fef7ed 0%, #fed7aa 30%, #fb923c 70%, #ea580c 100%);
    }
    
    .cv-section-card {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(249, 115, 22, 0.2);
      box-shadow: 0 8px 32px rgba(249, 115, 22, 0.15);
    }
    
    .cv-skill-progress {
      background: linear-gradient(90deg, #f97316, #ec4899, #8b5cf6);
    }
    
    @keyframes sunset-glow {
      0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
      50% { box-shadow: 0 0 40px rgba(236, 72, 153, 0.4); }
    }
    
    .cv-sunset-glow {
      animation: sunset-glow 4s ease-in-out infinite;
    }
  `,
};
