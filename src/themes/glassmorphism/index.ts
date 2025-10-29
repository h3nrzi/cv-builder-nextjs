import { Theme } from '../../types/theme';

export const glassmorphismTheme: Theme = {
  config: {
    id: 'glassmorphism',
    name: 'شیشه ای مات',
    description: 'قالب مدرن با افکت شیشه مات و پس‌زمینه های پررنگ',
    author: 'حسین رضایی',
    version: '1.1.0',
    tags: ['شیشه ای', 'مدرن', 'شیشه', 'محو', 'مد'],
  },
  colors: {
    primary: '#ffffff',
    secondary: '#764ba2',
    accent: '#f093fb',
    background: '#ffffff',
    foreground: '#1e293b',
    muted: 'rgba(255, 255, 255, 0.1)',
    mutedForeground: 'rgba(255, 255, 255, 0.7)',
    border: 'rgba(255, 255, 255, 0.2)',
    card: '#ffffff',
    cardForeground: '#1e293b',
    destructive: '#ff6b6b',
    destructiveForeground: '#ffffff',
    ring: '#f093fb',
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
    sm: '0 2px 8px rgba(0, 0, 0, 0.1)',
    md: '0 4px 16px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.2)',
    xl: '0 16px 64px rgba(0, 0, 0, 0.25)',
    '2xl': '0 32px 128px rgba(0, 0, 0, 0.3)',
    inner: 'inset 0 2px 4px rgba(255, 255, 255, 0.1)',
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
      background: #ffffff;
      position: relative;
      overflow: hidden;
    }
    
    .cv-gradient-bg::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 80%, rgba(240, 147, 251, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.3) 0%, transparent 50%);
      pointer-events: none;
    }
    
    .cv-section-card {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      color: #ffffff;
    }
    
    .cv-section-card:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
      box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
    }
    
    .cv-skill-progress {
      background: linear-gradient(90deg, #f093fb, #f5576c);
      box-shadow: 0 4px 16px rgba(240, 147, 251, 0.4);
    }
    
    .cv-glass-button {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: white;
      transition: all 0.3s ease;
    }
    
    .cv-glass-button:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-1px);
    }
    
    @keyframes float-glass {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33% { transform: translateY(-10px) rotate(1deg); }
      66% { transform: translateY(5px) rotate(-1deg); }
    }
    
    .cv-floating-glass {
      animation: float-glass 6s ease-in-out infinite;
    }
  `,
};
