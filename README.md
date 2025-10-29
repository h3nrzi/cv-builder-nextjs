# 🚀 CV Builder Next.js

<div align="center">

![CV Builder](https://img.shields.io/badge/CV%20Builder-Next.js-blue?style=for-the-badge&logo=next.js)
![Version](https://img.shields.io/badge/version-3.1.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Persian Support](https://img.shields.io/badge/Persian%2FFarsi-Supported-orange?style=for-the-badge)

**Professional CV/Resume Builder with Multiple Themes**

_Built with Next.js, React, TypeScript, and Tailwind CSS_

[🌟 Live Demo](#) • [📖 Documentation](#features) • [🎨 Themes](#themes) • [🤝 Contributing](#contributing)

</div>

---

## ✨ Features

### 🎨 **Multiple Professional Themes**

- **7 Beautiful Themes**: Modern, Minimal, Glassmorphism, Cyberpunk, Nordic, Ocean Breeze, Sunset Gradient
- **Multiple Layouts**: Standard multi-page layout and Minimal single-page layout
- **Real-time Preview**: See changes instantly as you edit
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Print Optimized**: Professional PDF output ready for printing

### 🌍 **Persian/Farsi Support**

- **RTL Layout**: Full right-to-left text support
- **Persian Fonts**: Beautiful SF Arabic font family included
- **Bilingual Interface**: Persian UI with English fallbacks
- **Cultural Adaptation**: CV formats optimized for Persian-speaking regions

### 🛠️ **Advanced Editor**

- **Drag & Drop**: Intuitive section reordering
- **Real-time Editing**: Live preview while typing
- **Auto-save**: Never lose your progress
- **Keyboard Shortcuts**: Power user features
- **Form Validation**: Ensure data integrity

### 📱 **Modern Tech Stack**

- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Radix UI**: Accessible component primitives
- **Lucide Icons**: Beautiful icon library

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/cv-builder-nextjs.git

# Navigate to project directory
cd cv-builder-nextjs

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

---

## 🎨 Themes

### Themes

| Theme                   | Description                                  | Best For                 |
| ----------------------- | -------------------------------------------- | ------------------------ |
| **Modern Professional** | Clean gradient design with subtle animations | General professional use |
| **Minimal**             | Ultra-clean, typography-focused layout       | Creative professionals   |
| **Glassmorphism**       | Modern glass-effect design                   | Tech industry            |
| **Cyberpunk**           | Futuristic neon-inspired theme               | Creative/Gaming industry |
| **Nordic Minimal**      | Scandinavian-inspired clean design           | Design professionals     |
| **Ocean Breeze**        | Calming blue gradient theme                  | Healthcare/Education     |
| **Sunset Gradient**     | Warm gradient with elegant typography        | Marketing/Sales          |

### Layouts

| Layout      | Description                    | Best For           |
| ----------- | ------------------------------ | ------------------ |
| **Standard** | Multi-page detailed layout     | Comprehensive CVs  |
| **Minimal**  | Single-page condensed layout   | Quick applications |

---

## 📋 CV Sections

### Personal Information

- Full name and professional title
- Contact details (phone, email, location)
- Social links (LinkedIn, GitHub, website)
- Professional profile photo

### Professional Summary

- Compelling personal statement
- Career highlights
- Key value propositions

### Work Experience

- Job titles and companies
- Employment dates and locations
- Detailed descriptions
- Key achievements
- Technologies used

### Skills

- Categorized skill groups
- Proficiency levels (1-5 scale)
- Visual progress bars
- Technical and soft skills

### Projects

- Project names and descriptions
- Technologies used
- Live demo and source code links
- Project highlights

### Education

- Degrees and institutions
- Graduation dates
- Locations
- Academic achievements

### Additional Sections

- Languages with proficiency levels
- Interests and hobbies
- Certifications
- Awards and recognition

---

## 🛠️ Development

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── editor/            # CV Editor pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── editors/          # Section editors
│   ├── ui/               # UI components
│   └── ThemedCV.tsx      # Main CV component
├── hooks/                # Custom React hooks
├── themes/               # Theme definitions
├── types/                # TypeScript types
└── styles/               # Global styles
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # TypeScript type checking
npm run format       # Format code with Prettier
npm run format:check # Check code formatting

# Utilities
npm run clean        # Clean build artifacts
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Optional: Error Tracking
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

---

## 🎯 Usage Guide

### 1. **Getting Started**

- Visit the homepage and click "شروع کنید" (Get Started)
- Choose from sample data or start fresh
- Select your preferred theme

### 2. **Editing Your CV**

- Fill in personal information
- Add work experience with detailed descriptions
- Organize skills by categories
- Include notable projects
- Add education background

### 3. **Customization**

- Switch between themes in real-time
- Adjust section order by dragging
- Use keyboard shortcuts for efficiency
- Preview changes instantly

### 4. **Export Options**

- **Print**: Use browser's print function (Ctrl/Cmd + P)
- **PDF**: Print to PDF for digital sharing
- **Share**: Copy URL to share online version

---

## 🔧 Customization

### Creating Custom Themes

1. Create a new theme file in `src/themes/`:

```typescript
// src/themes/my-theme/index.ts
import { Theme } from '../../types/theme';

export const myTheme: Theme = {
  config: {
    id: 'my-theme',
    name: 'My Custom Theme',
    description: 'A beautiful custom theme',
    author: 'Your Name',
    version: '1.0.0',
    tags: ['custom', 'unique'],
  },
  colors: {
    primary: '#your-color',
    // ... other colors
  },
  // ... other theme properties
};
```

2. Register the theme in your theme registry
3. Add custom CSS for unique styling

### Adding New Sections

1. Define the section type in `src/types/theme.ts`
2. Create an editor component in `src/components/editors/`
3. Add the section to the main CV component
4. Update the theme styles accordingly

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

- 🐛 **Bug Reports**: Found a bug? Open an issue
- 💡 **Feature Requests**: Have an idea? We'd love to hear it
- 🎨 **New Themes**: Create beautiful new CV themes
- 🌍 **Translations**: Help translate to more languages
- 📖 **Documentation**: Improve our docs
- 🧪 **Testing**: Help us test new features

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm run test`
5. Commit changes: `git commit -m 'Add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Radix UI** - For accessible component primitives
- **Lucide** - For beautiful icons
- **Vercel** - For hosting and deployment platform

---

## 📞 Support

- 📧 **Email**: rezaeig22@gmail.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/h3nrzi/cv-builder-nextjs/issues)
- 💬 **Discussions**: [GitHub Discussions](https://h3nrzi/your-username/cv-builder-nextjs/discussions)

---

## 🗺️ Roadmap

### Version 3.2.0 (Coming Soon)

- [ ] User authentication and cloud storage
- [ ] Collaborative editing
- [ ] Advanced PDF customization
- [ ] Mobile app (React Native)

### Version 3.3.0 (Future)

- [ ] AI-powered content suggestions
- [ ] Integration with job boards
- [ ] Advanced analytics
- [ ] Multi-language support expansion

---

<div align="center">

**Made with ❤️ by [Hossein Rezaei](https://github.com/h3nrzi)**

_If this project helped you, please consider giving it a ⭐_

</div>
