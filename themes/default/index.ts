import { Theme } from '../../types/theme';

export const defaultTheme: Theme = {
  config: {
    id: 'persian-modern',
    name: 'Persian Modern',
    description:
      'A modern, professional theme optimized for Persian/Farsi content with RTL support and clean gradients',
    author: 'Hossein',
    version: '1.0.0',
    tags: ['modern', 'persian', 'rtl', 'professional', 'gradient'],
  },
  colors: {
    primary: '#030213',
    secondary: '#f8f9ff',
    accent: '#3b82f6',
    background: '#ffffff',
    foreground: '#1e293b',
    muted: '#f1f5f9',
    mutedForeground: '#64748b',
    border: 'rgba(0, 0, 0, 0.1)',
    card: '#ffffff',
    cardForeground: '#1e293b',
    destructive: '#ef4444',
    destructiveForeground: '#ffffff',
    ring: '#3b82f6',
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
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
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  layout: {
    maxWidth: '1024px',
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
      background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #faf5ff 100%);
    }
    
    .cv-section-card {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .cv-skill-progress {
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    }
    
    .cv-floating-decoration {
      position: absolute;
      border-radius: 50%;
      background: rgba(59, 130, 246, 0.1);
      animation: float 6s ease-in-out infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
    }
  `,
};
