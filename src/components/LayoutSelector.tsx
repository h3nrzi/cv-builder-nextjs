'use client';

import { CVLayout } from '@/types/theme';
import { FileText, Minimize2 } from 'lucide-react';

interface LayoutSelectorProps {
  selectedLayout: CVLayout;
  onLayoutChange: (layout: CVLayout) => void;
}

export function LayoutSelector({ selectedLayout, onLayoutChange }: LayoutSelectorProps) {
  const layouts = [
    {
      id: 'standard' as CVLayout,
      name: 'ساختار استاندارد',
      description: 'ساختار کامل با جزئیات بیشتر',
      icon: FileText,
      features: ['چندین صفحه', 'جزئیات کامل', 'بخشهای متنوع']
    },
    {
      id: 'minimal' as CVLayout,
      name: 'ساختار مینیمال',
      description: 'همه چیز در یک صفحه',
      icon: Minimize2,
      features: ['یک صفحه', 'فشرده', 'مناسب پرینت']
    }
  ];

  return (
    <div className="mb-8 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
      <h2 className="mb-4 text-xl font-semibold text-white">انتخاب ساختار رزومه</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {layouts.map((layout) => {
          const Icon = layout.icon;
          return (
            <button
              key={layout.id}
              onClick={() => onLayoutChange(layout.id)}
              className={`rounded-lg border-2 p-6 text-right transition-all ${
                selectedLayout === layout.id
                  ? 'border-cyan-400 bg-white/20 shadow-md backdrop-blur-sm'
                  : 'border-white/30 bg-white/10 backdrop-blur-sm hover:border-white/50 hover:bg-white/20'
              }`}
              dir="rtl"
            >
              <div className="flex items-start gap-4">
                <div className={`rounded-lg p-3 ${
                  selectedLayout === layout.id ? 'bg-cyan-500 text-white' : 'bg-white/20 text-white'
                }`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold ${
                    selectedLayout === layout.id ? 'text-white' : 'text-white'
                  }`}>
                    {layout.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-200">{layout.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {layout.features.map((feature, index) => (
                      <span
                        key={index}
                        className={`rounded-full px-3 py-1 text-xs ${
                          selectedLayout === layout.id
                            ? 'bg-cyan-100 text-cyan-700'
                            : 'bg-white/20 text-gray-200'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}