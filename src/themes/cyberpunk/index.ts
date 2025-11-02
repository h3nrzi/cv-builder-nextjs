import { Theme } from '../../types/theme';

export const cyberpunkTheme: Theme = {
  config: {
    id: 'cyberpunk-professional',
    name: 'آبی فوتوریستیک',
    description: 'قالب مدرن با الهام از تکنولوژی و رنگهای آبی-بنفش',
    author: 'حسین رضایی',
    version: '2.0.0',
    tags: ['تکنولوژی', 'مدرن', 'حرفهای', 'آبی'],
  },
  colors: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
    background: '#ffffff',
    foreground: '#1e293b',
    muted: '#f8fafc',
    mutedForeground: '#64748b',
    border: 'rgba(59, 130, 246, 0.2)',
    card: '#ffffff',
    cardForeground: '#1e293b',
    destructive: '#ef4444',
    destructiveForeground: '#ffffff',
    ring: '#3b82f6',
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
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.375rem',
    xl: '0.5rem',
    '2xl': '0.75rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 2px 4px rgba(59, 130, 246, 0.1)',
    md: '0 4px 8px rgba(59, 130, 246, 0.15)',
    lg: '0 8px 16px rgba(59, 130, 246, 0.2)',
    xl: '0 16px 32px rgba(59, 130, 246, 0.25)',
    '2xl': '0 24px 48px rgba(59, 130, 246, 0.3)',
    inner: 'inset 0 2px 4px rgba(59, 130, 246, 0.1)',
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
      background: #ffffff;
      position: relative;
    }
    
    .cv-gradient-bg::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }
    
    .cv-section-card {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(59, 130, 246, 0.2);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    
    .cv-section-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: linear-gradient(180deg, #3b82f6, #8b5cf6);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .cv-section-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
      border-color: rgba(59, 130, 246, 0.3);
    }
    
    .cv-section-card:hover::before {
      opacity: 1;
    }
    
    .cv-skill-progress {
      background: #3b82f6;
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
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      border-radius: 2px;
    }
    
    .cv-tech-button {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      font-weight: 500;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
    }
    
    .cv-tech-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 16px rgba(59, 130, 246, 0.4);
    }
    
    @keyframes tech-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    
    .cv-tech-accent {
      animation: tech-pulse 2s ease-in-out infinite;
    }
  `,
};
