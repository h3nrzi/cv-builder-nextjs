# CV Builder

A modern, extensible CV/Resume builder with multiple themes, built with React, TypeScript, and Tailwind CSS. Optimized for Persian/Farsi content with RTL support, and designed for community contributions.

## ✨ Features

### 🎨 Theme System

- **Multiple Themes**: Switch between different CV designs instantly
- **Theme Selector**: Easy-to-use theme switching interface
- **Community Themes**: Extensible system for community-contributed themes
- **Custom Themes**: Create and share your own theme designs
- **Export Themes**: Download and share theme files
- **Import Themes**: Load external theme files

### 💼 Professional Features

- **Modern Design**: Clean, professional layouts with customizable styling
- **RTL Support**: Fully optimized for Persian/Farsi content
- **Print-Ready**: Optimized PDF generation and printing
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Interactive Navigation**: Smooth scrolling with progress indicator
- **Professional Animations**: Subtle fade-in animations and loading states
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Installation

1. Clone the repository:

```bash
git clone https://github.com/username/professional-cv-app.git
cd professional-cv-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📦 Available Scripts

| Script               | Description                  |
| -------------------- | ---------------------------- |
| `npm run dev`        | Start development server     |
| `npm run build`      | Build for production         |
| `npm run preview`    | Preview production build     |
| `npm run lint`       | Run ESLint                   |
| `npm run lint:fix`   | Fix ESLint issues            |
| `npm run type-check` | Run TypeScript type checking |
| `npm run format`     | Format code with Prettier    |
| `npm run clean`      | Clean build artifacts        |

## 🛠️ Tech Stack

### Core

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling framework

### UI Components

- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Sonner** - Toast notifications
- **Class Variance Authority** - Component variants

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Lint-staged** - Pre-commit linting

## 📁 Project Structure

```
├── App.tsx                 # Main application component
├── components/             # React components
│   ├── ThemedCV.tsx       # Main themed CV component
│   ├── ThemeSelector.tsx  # Theme selection interface
│   ├── CVHeader.tsx       # CV header section
│   └── ...               # Other components
├── themes/                # Theme definitions
│   ├── default/          # Default Persian Modern theme
│   ├── minimal/          # Minimal Clean theme
│   └── ...              # Additional themes
├── types/
│   └── theme.ts          # TypeScript theme interfaces
├── hooks/
│   └── useTheme.tsx      # Theme management hooks
├── lib/
│   └── theme-registry.ts # Theme registry system
├── data/
│   └── sample-cv.ts      # Sample CV data
├── styles/
│   └── globals.css       # Global styles and Tailwind config
├── THEME_DEVELOPMENT.md   # Theme development guide
├── package.json          # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## 🎨 Customization

### Personal Information

Edit the following components to add your personal information:

- `components/CVHeader.tsx` - Personal details and contact info
- `components/SummarySection.tsx` - Professional summary
- `components/ExperienceSection.tsx` - Work experience
- `components/ProjectsSection.tsx` - Featured projects
- `components/EducationAndOther.tsx` - Education and certificates

### Styling

- Global styles: `styles/globals.css`
- Color scheme: Modify CSS variables in `globals.css`
- Component styles: Each component uses Tailwind classes

### Features

- Add new sections by creating components in `components/` directory
- Modify navigation in `components/TopNavigation.tsx`
- Customize floating actions in `components/FloatingActions.tsx`

## 🖨️ PDF Export & Printing

The application is optimized for PDF generation and printing:

1. **Browser Print**: Use Ctrl+P (Cmd+P on Mac) or the floating print button
2. **Print to PDF**: Select "Save as PDF" in the print dialog
3. **Optimized Layout**: Automatic page breaks and print-specific styling
4. **Professional Output**: Clean, printer-friendly design

## 📱 Responsive Design

The CV is fully responsive and works on:

- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (below 768px)

## 🎨 Theme Development

Want to create your own theme? We welcome contributions!

### Available Themes

- **Persian Modern** (default) - Modern gradient design optimized for Persian content
- **Minimal Clean** - Clean, typography-focused design with minimal styling

### Creating a New Theme

1. Read the [Theme Development Guide](./THEME_DEVELOPMENT.md)
2. Create your theme in the `themes/` directory
3. Follow the TypeScript interface requirements
4. Test your theme thoroughly
5. Submit a pull request

### Theme Features

- 🎨 **Complete styling control** - Colors, typography, spacing, and more
- 📱 **Responsive design** - Automatic mobile and tablet optimization
- 🖨️ **Print optimization** - Custom print styles for professional output
- ♿ **Accessibility** - Built-in accessibility features
- 🔄 **Live preview** - Instant theme switching
- 📦 **Export/Import** - Share themes as JSON files

### Contributing Themes

We encourage theme contributions! Popular themes will be featured and credited to their authors.

## 🌍 RTL Support

This application is built with RTL (Right-to-Left) support for Persian/Farsi:

- Proper text alignment
- RTL-aware component layouts
- Persian number formatting
- RTL-optimized animations

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The `dist/` folder will contain the optimized production build.

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help customizing your CV:

- Create an issue in the repository
- Email: ali@example.com
- Website: https://ali-ahmadi.dev

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Radix UI](https://www.radix-ui.com/) - For accessible components
- [Lucide](https://lucide.dev/) - For beautiful icons
- [shadcn/ui](https://ui.shadcn.com/) - For component inspiration

---

Built with ❤️ by Hossein Rezaei
