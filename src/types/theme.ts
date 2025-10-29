export interface ThemeConfig {
  id: string;
  name: string;
  description: string;
  author: string;
  version: string;
  preview?: string; // URL to preview image
  tags?: string[];
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  card: string;
  cardForeground: string;
  destructive: string;
  destructiveForeground: string;
  ring: string;
}

export interface ThemeTypography {
  fontFamily: string;
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  fontWeight: {
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
  };
  lineHeight: {
    tight: string;
    normal: string;
    relaxed: string;
  };
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
}

export interface ThemeBorderRadius {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
}

export interface ThemeShadows {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  inner: string;
}

export interface ThemeLayout {
  maxWidth: string;
  containerPadding: string;
  sectionSpacing: string;
  cardPadding: string;
}

export interface ThemeAnimations {
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
  easing: {
    linear: string;
    in: string;
    out: string;
    inOut: string;
  };
}

export interface Theme {
  config: ThemeConfig;
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  borderRadius: ThemeBorderRadius;
  shadows: ThemeShadows;
  layout: ThemeLayout;
  animations: ThemeAnimations;
  customCSS?: string; // Additional CSS for complex customizations
}

export type CVLayout = 'standard' | 'minimal';

export interface CVData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    linkedin?: string;
    github?: string;
    profileImage?: string;
  };
  summary: string;
  skills: {
    category: string;
    items: Array<{
      name: string;
      level: number; // 1-5 scale
    }>;
  }[];
  experience: Array<{
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string; // undefined if current
    description: string;
    achievements?: string[];
    technologies?: string[];
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    url?: string;
    github?: string;
    startDate?: string;
    endDate?: string;
  }>;
  education: Array<{
    degree: string;
    school: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    achievements?: string[];
  }>;
  certifications?: Array<{
    name: string;
    issuer: string;
    date: string;
    url?: string;
    expiryDate?: string;
  }>;
  languages?: Array<{
    name: string;
    level: string; // e.g., "Native", "Fluent", "Intermediate"
  }>;
  interests?: string[];
}

export interface ThemeComponentProps {
  theme: Theme;
  data: CVData;
  className?: string;
}
