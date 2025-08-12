import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  icon?: ReactNode;
  subtitle?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export function SectionHeader({ title, icon, subtitle, variant = 'primary' }: SectionHeaderProps) {
  const variantStyles = {
    primary: 'from-blue-50 via-white to-blue-50 border-blue-200',
    secondary: 'from-emerald-50 via-white to-emerald-50 border-emerald-200',
    accent: 'from-purple-50 via-white to-purple-50 border-purple-200',
  };

  const iconColors = {
    primary: 'text-blue-600',
    secondary: 'text-emerald-600',
    accent: 'text-purple-600',
  };

  return (
    <div
      className={`
      relative mb-4 overflow-hidden rounded-lg 
      bg-gradient-to-r ${variantStyles[variant]}
      border shadow-sm
      backdrop-blur-sm
    `}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative px-6 py-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div
              className={`
              flex h-10 w-10 flex-shrink-0 
              items-center justify-center rounded-full
              border bg-white shadow-sm
              ${iconColors[variant]}
            `}
            >
              {icon}
            </div>
          )}

          <div className="flex-1">
            <h2 className="mb-0 text-lg font-semibold text-gray-800">{title}</h2>
            {subtitle && <p className="mb-0 mt-1 text-sm text-gray-600">{subtitle}</p>}
          </div>

          {/* Decorative Element */}
          <div className="hidden flex-shrink-0 sm:block">
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50" />
          </div>
        </div>
      </div>

      {/* Bottom Border Accent */}
      <div
        className={`
        h-0.5 w-full 
        bg-gradient-to-r from-transparent via-current to-transparent
        ${iconColors[variant]} opacity-30
      `}
      />
    </div>
  );
}
