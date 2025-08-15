import { Theme } from '../../types/theme';

export const minimalTheme: Theme = {
  config: {
    id: 'minimal-clean',
    name: 'مینیمال تمیز',
    description: 'قالب تمیز و مینیمال با تمرکز بر تایپوگرافی و فضای سفید',
    author: 'CV Builder Community',
    version: '1.0.0',
    tags: ['مینیمال', 'تمیز', 'تایپوگرافی', 'حرفهای', 'ساده'],
  },
  colors: {
    primary: '#1a1a1a',
    secondary: '#f8f9fa',
    accent: '#007bff',
    background: '#ffffff',
    foreground: '#333333',
    muted: '#f5f5f5',
    mutedForeground: '#666666',
    border: '#e0e0e0',
    card: '#ffffff',
    cardForeground: '#333333',
    destructive: '#dc3545',
    destructiveForeground: '#ffffff',
    ring: '#007bff',
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
    sm: '2px',
    md: '4px',
    lg: '6px',
    xl: '8px',
    '2xl': '12px',
    full: '50%',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    lg: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    xl: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    '2xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  layout: {
    maxWidth: '800px',
    containerPadding: '2rem',
    sectionSpacing: '3rem',
    cardPadding: '1.5rem',
  },
  animations: {
    duration: {
      fast: '100ms',
      normal: '200ms',
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
      background: #ffffff;
    }
    
    .cv-section-card {
      background: #ffffff;
      border: 1px solid #e0e0e0;
      transition: border-color 0.2s ease;
    }
    
    .cv-section-card:hover {
      border-color: #007bff;
    }
    
    .cv-skill-progress {
      background: #1a1a1a;
    }
    
    .cv-header-minimal {
      border-bottom: 2px solid #1a1a1a;
      padding-bottom: 2rem;
      margin-bottom: 3rem;
    }
    
    .cv-section-title {
      position: relative;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 1.5rem;
    }
    
    .cv-section-title::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 40px;
      height: 2px;
      background: #007bff;
    }
    
    .cv-text-emphasis {
      color: #1a1a1a;
      font-weight: 600;
    }
    
    .cv-link {
      color: #007bff;
      text-decoration: none;
      transition: color 0.2s ease;
    }
    
    .cv-link:hover {
      color: #0056b3;
      text-decoration: underline;
    }
    
    .cv-list-item {
      position: relative;
      padding-left: 1rem;
    }
    
    .cv-list-item::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #007bff;
      font-weight: bold;
    }
    
    @media print {
      .cv-section-card {
        border: none;
        box-shadow: none;
      }
      
      .cv-section-title::after {
        background: #000;
      }
    }
  `,
};
