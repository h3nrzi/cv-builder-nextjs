'use client';
import { useThemeStyles } from '@/hooks/useTheme';

export function FooterBranding() {
  const { colors } = useThemeStyles();

  return (
    <footer
      className="mt-8 border-t pt-4 text-center text-sm"
      style={{ borderColor: colors.border, color: colors.mutedForeground }}
    >
      <p>
        با ❤️ ساخته شده توسط
        <a
          href="https://github.com/h3nrzi"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-link"
          style={{ color: colors.accent, marginRight: 5 }}
        >
          h3nrzi@
        </a>
      </p>
    </footer>
  );
}
