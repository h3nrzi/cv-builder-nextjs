import { Theme } from '../../types/theme';

export const minimalTheme: Theme = {
  config: {
    id: 'minimal-clean',
    name: 'مینیمال',
    description: 'قالب مینیمال با تمرکز بر تایپوگرافی و فضای سفید',
    author: 'حسین رضایی',
    version: '1.1.0',
    tags: ['مینیمال', 'تایپوگرافی', 'حرفه ای', 'ساده'],
  },
  colors: {
    primary: '#1a1a1a',
    secondary: '#f8f9fa',
    accent: '#2563eb',
    background: '#ffffff',
    foreground: '#1e293b',
    muted: '#f8fafc',
    mutedForeground: '#64748b',
    border: '#e2e8f0',
    card: '#ffffff',
    cardForeground: '#1e293b',
    destructive: '#ef4444',
    destructiveForeground: '#ffffff',
    ring: '#2563eb',
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
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    full: '24px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.04)',
    md: '0 2px 8px rgba(0, 0, 0, 0.06)',
    lg: '0 4px 16px rgba(0, 0, 0, 0.08)',
    xl: '0 8px 24px rgba(0, 0, 0, 0.1)',
    '2xl': '0 16px 40px rgba(0, 0, 0, 0.12)',
    inner: 'inset 0 1px 2px rgba(0, 0, 0, 0.04)',
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
      border: 1px solid #e2e8f0;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
    }
    
    .cv-section-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: #2563eb;
      transition: width 0.3s ease;
      z-index: 0;
      opacity: 0.02;
    }
    
    .cv-section-card:hover {
      border-color: #2563eb;
      box-shadow: 0 4px 16px rgba(37, 99, 235, 0.08);
      transform: translateY(-1px);
    }
    
    .cv-section-card:hover::before {
      width: 4px;
    }
    
    .cv-skill-progress {
      background: #1e293b;
      position: relative;
      overflow: hidden;
    }
    
    .cv-skill-progress::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 2px;
      background: rgba(255, 255, 255, 0.3);
    }
    
    .cv-header-minimal {
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 2rem;
      margin-bottom: 3rem;
      position: relative;
    }
    

    
    .cv-section-title {
      position: relative;
      font-weight: 600;
      letter-spacing: -0.025em;
      margin-bottom: 1.5rem;
      color: #1e293b;
    }
    

    
    .cv-text-emphasis {
      color: #1e293b;
      font-weight: 500;
    }
    
    .cv-link {
      color: #2563eb;
      text-decoration: none;
      position: relative;
      transition: color 0.2s ease;
    }
    
    .cv-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: #2563eb;
      transition: width 0.3s ease;
    }
    
    .cv-link:hover {
      color: #1d4ed8;
    }
    
    .cv-link:hover::after {
      width: 100%;
    }
    
    .cv-list-item,
    .cv-experience-item,
    .cv-work-item,
    .cv-job-item {
      position: relative;
      padding-left: 1.25rem;
      margin-bottom: 0.5rem;
      transition: transform 0.2s ease;
    }
    
    .cv-list-item::before,
    .cv-experience-item::before,
    .cv-work-item::before,
    .cv-job-item::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.6em;
      width: 4px;
      height: 4px;
      background: #2563eb;
      border-radius: 50%;
      transition: transform 0.2s ease;
    }
    
    .cv-list-item:hover,
    .cv-experience-item:hover,
    .cv-work-item:hover,
    .cv-job-item:hover {
      transform: translateX(2px);
    }
    
    .cv-list-item:hover::before,
    .cv-experience-item:hover::before,
    .cv-work-item:hover::before,
    .cv-job-item:hover::before {
      transform: scale(1.2);
    }
    
    ul li {
      position: relative;
      padding-right: 1.25rem;
      margin-bottom: 0.5rem;
      list-style: none;
    }
    
    ul li::before {
      content: '';
      position: absolute;
      right: 0;
      top: 0.6em;
      width: 4px;
      height: 4px;
      background: #2563eb;
      border-radius: 50%;
    }
    
    .cv-minimal-button {
      background: transparent;
      border: 1px solid #2563eb;
      color: #2563eb;
      padding: 0.5rem 1.5rem;
      font-weight: 500;
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;
    }
    
    .cv-minimal-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: #2563eb;
      transition: left 0.3s ease;
      z-index: -1;
    }
    
    .cv-minimal-button:hover {
      color: white;
    }
    
    .cv-minimal-button:hover::before {
      left: 0;
    }
    
    .cv-divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
      margin: 2rem 0;
    }
    
    @media print {
      .cv-section-card {
        border: 1px solid #e2e8f0;
        box-shadow: none;
        transform: none;
      }
      
      .cv-section-title::after {
        background: #000;
      }
      

      
      ul li::before {
        background: #000;
      }
    }
  `,
};
