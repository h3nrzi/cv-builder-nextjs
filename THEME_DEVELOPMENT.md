# Theme Development Guide

Welcome to the CV Builder theme development guide! This document will help you create and contribute new themes to the project.

## Theme Structure

Each theme is a TypeScript object that implements the `Theme` interface. A theme consists of:

- **Configuration**: Basic information about the theme
- **Colors**: Color palette used throughout the CV
- **Typography**: Font settings and text styling
- **Spacing**: Layout spacing and padding values
- **Border Radius**: Rounded corner settings
- **Shadows**: Box shadow definitions
- **Layout**: Container and section layout settings
- **Animations**: Animation timing and easing functions
- **Custom CSS**: Additional styling for complex customizations

## Creating a New Theme

### 1. Create Theme Directory

Create a new directory under `themes/` with your theme name:

```
themes/
├── default/
├── minimal/
└── your-theme-name/
    └── index.ts
```

### 2. Theme Implementation

Here's a template for creating a new theme:

```typescript
import { Theme } from '../../types/theme';

export const yourThemeName: Theme = {
  config: {
    id: 'your-theme-id',
    name: 'Your Theme Name',
    description: 'A brief description of your theme',
    author: 'Your Name',
    version: '1.0.0',
    tags: ['modern', 'professional', 'colorful'], // Add relevant tags
  },
  colors: {
    primary: '#your-primary-color',
    secondary: '#your-secondary-color',
    accent: '#your-accent-color',
    background: '#ffffff',
    foreground: '#333333',
    muted: '#f5f5f5',
    mutedForeground: '#666666',
    border: '#e0e0e0',
    card: '#ffffff',
    cardForeground: '#333333',
    destructive: '#dc3545',
    destructiveForeground: '#ffffff',
    ring: '#your-accent-color',
  },
  typography: {
    fontFamily: '"Your Font", sans-serif',
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
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  layout: {
    maxWidth: '1024px',
    containerPadding: '2rem',
    sectionSpacing: '3rem',
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
    /* Your custom CSS here */
    .cv-gradient-bg {
      background: linear-gradient(135deg, #yourcolor1, #yourcolor2);
    }
    
    .cv-section-card {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
    }
    
    /* Add more custom styles as needed */
  `,
};
```

### 3. Register Your Theme

Add your theme to the theme registry in `lib/theme-registry.ts`:

```typescript
import { yourThemeName } from '../themes/your-theme-name';

constructor() {
  // Register default themes
  this.registerTheme(defaultTheme);
  this.registerTheme(minimalTheme);
  this.registerTheme(yourThemeName); // Add this line
  this.activeTheme = defaultTheme;
}
```

## Theme Guidelines

### Colors

- **Primary**: Main brand color, used for headings and important elements
- **Secondary**: Supporting color for backgrounds and subtle elements
- **Accent**: Highlight color for links, buttons, and call-to-action elements
- **Background**: Main page background color
- **Foreground**: Main text color
- **Muted**: Subtle background color for cards and sections
- **MutedForeground**: Secondary text color
- **Border**: Color for borders and dividers
- **Card**: Background color for card components
- **CardForeground**: Text color within cards

### Typography

- Choose web-safe fonts or include font imports
- Ensure good readability across all font sizes
- Consider RTL (Right-to-Left) support for Persian content
- Test font weights to ensure they're available

### Accessibility

- Ensure sufficient color contrast (minimum 4.5:1 for normal text)
- Test with screen readers
- Provide focus indicators
- Support keyboard navigation

### Print Compatibility

- Test how your theme looks when printed
- Ensure readability in black and white
- Consider page breaks and margins
- Use print-specific CSS when necessary

## Custom CSS Classes

Your theme can use these predefined CSS classes:

- `.cv-gradient-bg` - Main background gradient
- `.cv-section-card` - Section card styling
- `.cv-skill-progress` - Skill progress bar
- `.cv-header-minimal` - Header section (minimal themes)
- `.cv-section-title` - Section headings
- `.cv-text-emphasis` - Emphasized text
- `.cv-link` - Link styling
- `.cv-list-item` - List item styling

## Testing Your Theme

1. **Visual Testing**: Switch to your theme and check all sections
2. **Responsive Testing**: Test on mobile, tablet, and desktop
3. **Print Testing**: Use browser print preview
4. **Accessibility Testing**: Use screen reader tools
5. **Performance Testing**: Ensure no performance impact

## Theme Examples

### Minimalist Theme

- Clean typography
- Subtle colors
- Plenty of whitespace
- Simple animations

### Creative Theme

- Bold colors
- Unique layouts
- Creative elements
- Eye-catching design

### Professional Theme

- Conservative colors
- Traditional layout
- Clear hierarchy
- Business-appropriate

## Contribution Process

1. **Fork the repository**
2. **Create your theme** following this guide
3. **Test thoroughly** across different scenarios
4. **Create a pull request** with:
   - Theme files
   - Preview screenshots
   - Description of design choices
   - Any special requirements

## Best Practices

- **Keep it simple**: Don't overcomplicate the design
- **Stay consistent**: Use consistent spacing and colors
- **Consider the audience**: Think about who will use this CV
- **Test extensively**: Ensure it works in all scenarios
- **Document well**: Explain any special features or requirements

## Advanced Features

### Dynamic Colors

You can create themes that adapt based on user preferences:

```typescript
customCSS: `
  @media (prefers-color-scheme: dark) {
    .cv-gradient-bg {
      background: #your-dark-background;
    }
  }
`;
```

### Animation Variants

Create different animation styles for your theme:

```typescript
customCSS: `
  .cv-animate-slide-in {
    animation: slideIn 0.5s ease-out;
  }
  
  @keyframes slideIn {
    from { transform: translateX(-20px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`;
```

### Custom Components

For complex themes, you might need custom components. Consider creating:

- Custom header layouts
- Unique skill visualizations
- Special section designs
- Interactive elements

## Support

If you need help creating a theme:

1. Check existing themes for examples
2. Open an issue on GitHub
3. Join our community discussions
4. Read the TypeScript types for full API reference

## License

All contributed themes should be compatible with the project's MIT license. By contributing, you agree to license your theme under the same terms.

---

Happy theming! We can't wait to see what creative designs you come up with. 🎨
