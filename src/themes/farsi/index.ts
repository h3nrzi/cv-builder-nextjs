import { Theme } from '../../types/theme';

export const farsiTheme: Theme = {
  config: {
    id: 'farsi-persian',
    name: 'فارسی',
    description: 'قالب فارسی با پشتیبانی از راست به چپ و رنگ‌های ایرانی',
    author: 'CV Builder Pro',
    version: '1.0.0',
    tags: ['farsi', 'persian', 'rtl', 'traditional'],
  },
  colors: {
    primary: '#d4af37',
    secondary: '#8b4513',
    accent: '#dc143c',
    background: '#faf9f6',
    foreground: '#2c3e50',
    muted: '#f5f5dc',
    mutedForeground: '#6c757d',
    border: '#d4af37',
    card: '#ffffff',
    cardForeground: '#2c3e50',
    destructive: '#dc3545',
    destructiveForeground: '#ffffff',
    ring: '#d4af37',
  },
  typography: {
    fontFamily: '"Vazir", "Tahoma", "Arial", sans-serif',
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
      tight: '1.4',
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
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.375rem',
    xl: '0.5rem',
    '2xl': '0.75rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 2px 4px rgba(212, 175, 55, 0.1)',
    md: '0 4px 8px rgba(212, 175, 55, 0.15)',
    lg: '0 8px 16px rgba(212, 175, 55, 0.2)',
    xl: '0 12px 24px rgba(212, 175, 55, 0.25)',
    '2xl': '0 16px 32px rgba(212, 175, 55, 0.3)',
    inner: 'inset 0 2px 4px rgba(212, 175, 55, 0.1)',
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
    .cv-farsi {
      direction: rtl;
      text-align: right;
    }
    
    .cv-gradient-bg {
      background: linear-gradient(135deg, #faf9f6 0%, #f5f5dc 50%, #ffffff 100%);
    }
    
    .cv-section-card {
      background: #ffffff;
      border: 2px solid #d4af37;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(212, 175, 55, 0.15);
    }
    
    .cv-skill-progress {
      background: linear-gradient(90deg, #d4af37, #dc143c);
      border-radius: 4px;
    }
    
    .cv-persian-pattern {
      background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E");
    }
  `,
};