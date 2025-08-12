# Professional CV Application

A modern, responsive CV/Resume application built with React, TypeScript, and Tailwind CSS, optimized for Persian/Farsi content with RTL support.

## ✨ Features

- **Modern Design**: Clean, professional layout with gradient backgrounds
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
│   ├── ui/                # Reusable UI components (shadcn/ui)
│   ├── CVHeader.tsx       # CV header section
│   ├── SummarySection.tsx # Professional summary
│   ├── SkillsSection.tsx  # Technical skills
│   ├── ExperienceSection.tsx # Work experience
│   ├── ProjectsSection.tsx # Featured projects
│   ├── EducationAndOther.tsx # Education & certificates
│   ├── TopNavigation.tsx  # Navigation bar
│   ├── FloatingActions.tsx # Floating action buttons
│   └── ...               # Other components
├── styles/
│   └── globals.css       # Global styles and Tailwind config
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

Built with ❤️ by Ali Ahmadi
