import { Theme } from '../../types/theme';

export const newTheme: Theme = {
  config: {
    id: 'new-theme',
    name: 'جدید',
    description: 'قالب مدرن و شیک با گرادیان‌های ظریف',
    author: 'حسین رضایی',
    version: '1.1.0',
    tags: ['مدرن', 'حرفه‌ای', 'گرادیان', 'تمیز', 'همه‌کاره'],
  },
  colors: {
    primary: '#0f172a',
    secondary: '#1e293b',
    accent: '#06b6d4',
    background: '#f8fafc',
    foreground: '#0f172a',
    muted: '#f1f5f9',
    mutedForeground: '#475569',
    border: 'rgba(15, 23, 42, 0.15)',
    card: '#ffffff',
    cardForeground: '#0f172a',
    destructive: '#ef4444',
    destructiveForeground: '#ffffff',
    ring: '#0f172a',
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
    sm: '0 2px 4px rgba(15, 23, 42, 0.06)',
    md: '0 4px 12px rgba(15, 23, 42, 0.08)',
    lg: '0 8px 24px rgba(15, 23, 42, 0.1)',
    xl: '0 16px 32px rgba(15, 23, 42, 0.12)',
    '2xl': '0 24px 48px rgba(15, 23, 42, 0.15)',
    inner: 'inset 0 2px 4px rgba(15, 23, 42, 0.04)',
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
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 30%, #e2e8f0 100%);
      position: relative;
    }
    
    .cv-gradient-bg::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 30% 20%, rgba(15, 23, 42, 0.03) 0%, transparent 50%);
      pointer-events: none;
    }
    
    .cv-section-card {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(15, 23, 42, 0.08);
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
      transition: all 0.3s ease;
    }
    
    .cv-section-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.1);
      border-color: rgba(6, 182, 212, 0.2);
    }
    
    .cv-skill-progress {
      background: #06b6d4;
    }
    
    .cv-header-accent {
      background: linear-gradient(90deg, #0f172a, #06b6d4);
      height: 4px;
      border-radius: 2px;
    }
    
    .cv-section-title {
      position: relative;
      color: #1e293b;
      font-weight: 600;
    }
    
    .cv-section-title::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 3px;
      background: linear-gradient(90deg, #0f172a, #06b6d4);
      border-radius: 2px;
    }
    
    .cv-floating-decoration {
      position: absolute;
      border-radius: 50%;
      background: rgba(15, 23, 42, 0.05);
      animation: float 8s ease-in-out infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(180deg); }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fade-in-up {
      animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    
    .cv-button-primary {
      background: linear-gradient(135deg, #0f172a, #06b6d4);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: 500;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);
    }
    
    .cv-button-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(15, 23, 42, 0.3);
    }
  `,
};
