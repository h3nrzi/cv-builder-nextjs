import { Theme } from '../../types/theme';

export const glassmorphismTheme: Theme = {
  config: {
    id: 'glassmorphism',
    name: 'شیشه‌ای مات',
    description: 'قالب مدرن با افکت شیشه مات و پس‌زمینه‌های پرنور و شفاف',
    author: 'حسین رضایی',
    version: '1.1.1',
    tags: ['شیشه‌ای', 'مدرن', 'شفاف', 'مات', 'لوکس'],
  },
  colors: {
    primary: '#ffffff',
    secondary: '#6a11cb',
    accent: '#2575fc',
    background: 'rgba(255, 255, 255, 0.75)',
    foreground: '#0f172a',
    muted: 'rgba(255, 255, 255, 0.15)',
    mutedForeground: 'rgba(255, 255, 255, 0.8)',
    border: 'rgba(255, 255, 255, 0.25)',
    card: 'rgba(255, 255, 255, 0.2)',
    cardForeground: '#1e293b',
    destructive: '#ef4444',
    destructiveForeground: '#ffffff',
    ring: '#6a11cb',
  },
  typography: {
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
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
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 2px 6px rgba(0, 0, 0, 0.08)',
    md: '0 4px 12px rgba(0, 0, 0, 0.12)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.16)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.2)',
    '2xl': '0 32px 96px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px rgba(255, 255, 255, 0.15)',
  },
  layout: {
    maxWidth: '1200px',
    containerPadding: '1.5rem',
    sectionSpacing: '2.5rem',
    cardPadding: '2rem',
  },
  animations: {
    duration: {
      fast: '200ms',
      normal: '400ms',
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
      background: "#fff";
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      overflow: hidden;
      min-height: 100vh;
    .cv-gradient-bg::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background:
        radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.25) 0%, transparent 60%),
        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 60%);,
        radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.2) 0%, transparent 50%);
      z-index: 1;
    .cv-section-card {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(18px);
      border: 1px solid rgba(255, 255, 255, 0.25);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      transition: all 0.3s ease;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 16px;
    .cv-section-card:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-3px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);.15);
      border-color: rgba(255, 255, 255, 0.4);
    .cv-skill-progress {
       background: #667eea;
    }
    .cv-glass-button {
      background: rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: white;
      transition: all 0.3s ease;
    }
    .cv-glass-button:hover {
      background: rgba(255, 255, 255, 0.35);
      transform: translateY(-1px);
    }    @keyframes float-glass {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33% { transform: translateY(-8px) rotate(1deg); }
      66% { transform: translateY(5px) rotate(-1deg); }
    }    .cv-floating-glass {
      animation: float-glass 6s ease-in-out infinite;
    }  `,
};
