import React, { useState } from 'react';
import { Plus, Trash2, Languages, Globe } from 'lucide-react';
import { CVData } from '../../types/theme';
import { FormField, FormCard, Input, Select } from '../ui/form-components';
import { Button } from '../ui/button';

interface LanguagesEditorProps {
  languages: CVData['languages'];
  onUpdateLanguages: (languages: CVData['languages']) => void;
}

export function LanguagesEditor({ languages = [], onUpdateLanguages }: LanguagesEditorProps) {
  const addLanguage = () => {
    const newLanguage = {
      name: '',
      level: 'متوسط'
    };
    onUpdateLanguages([...languages, newLanguage]);
  };

  const updateLanguage = (index: number, field: 'name' | 'level', value: string) => {
    const updatedLanguages = languages.map((lang, i) =>
      i === index ? { ...lang, [field]: value } : lang
    );
    onUpdateLanguages(updatedLanguages);
  };

  const deleteLanguage = (index: number) => {
    const updatedLanguages = languages.filter((_, i) => i !== index);
    onUpdateLanguages(updatedLanguages);
  };

  const proficiencyLevels = [
    { value: 'زبان مادری', label: 'زبان مادری' },
    { value: 'پیشرفته', label: 'پیشرفته' },
    { value: 'متوسط به بالا', label: 'متوسط به بالا' },
    { value: 'متوسط', label: 'متوسط' },
    { value: 'مقدماتی', label: 'مقدماتی' }
  ];

  const getLanguageIcon = (languageName: string) => {
    const name = languageName.toLowerCase();
    if (name.includes('فارسی') || name.includes('persian')) return '🇮🇷';
    if (name.includes('انگلیسی') || name.includes('english')) return '🇺🇸';
    if (name.includes('عربی') || name.includes('arabic')) return '🇸🇦';
    if (name.includes('فرانسوی') || name.includes('french')) return '🇫🇷';
    if (name.includes('آلمانی') || name.includes('german')) return '🇩🇪';
    if (name.includes('اسپانیایی') || name.includes('spanish')) return '🇪🇸';
    if (name.includes('چینی') || name.includes('chinese')) return '🇨🇳';
    if (name.includes('ژاپنی') || name.includes('japanese')) return '🇯🇵';
    if (name.includes('روسی') || name.includes('russian')) return '🇷🇺';
    return '🌍';
  };

  const getProficiencyColor = (level: string) => {
    switch (level) {
      case 'زبان مادری': return 'bg-green-100 text-green-800 border-green-200';
      case 'پیشرفته': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'متوسط به بالا': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'متوسط': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'مقدماتی': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <FormCard 
        title="زبان‌ها" 
        description="زبان‌هایی که می‌دانید و سطح مهارت خود در آن‌ها را مشخص کنید"
      >
        <div className="space-y-4">
          {languages.map((language, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="md:col-span-2">
                  <FormField label="نام زبان" required>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">
                        {getLanguageIcon(language.name)}
                      </div>
                      <Input
                        value={language.name}
                        onChange={(e) => updateLanguage(index, 'name', e.target.value)}
                        placeholder="مثل: انگلیسی، فرانسوی، آلمانی"
                        className="pl-12"
                        dir="rtl"
                      />
                    </div>
                  </FormField>
                </div>

                <div className="flex gap-2">
                  <div className="flex-1">
                    <FormField label="سطح مهارت" required>
                      <Select
                        value={language.level}
                        onChange={(e) => updateLanguage(index, 'level', e.target.value)}
                        dir="rtl"
                      >
                        {proficiencyLevels.map((level) => (
                          <option key={level.value} value={level.value}>
                            {level.label}
                          </option>
                        ))}
                      </Select>
                    </FormField>
                  </div>
                  
                  <div className="flex items-end">
                    <Button
                      onClick={() => deleteLanguage(index)}
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Proficiency Badge */}
              <div className="mt-3 flex justify-between items-center">
                <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-medium ${getProficiencyColor(language.level)}`}>
                  <Globe className="h-3 w-3" />
                  {language.level}
                </span>
                <span className="text-sm text-gray-500">
                  {getLanguageIcon(language.name)} {language.name}
                </span>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {languages.length === 0 && (
            <div className="py-12 text-center text-gray-500">
              <Languages className="mx-auto mb-4 h-12 w-12 text-gray-300" />
              <h3 className="mb-2 text-sm font-medium text-gray-900">هنوز زبانی اضافه نشده است</h3>
              <p className="text-sm text-gray-500">
                زبان‌هایی که بلد هستید را اضافه کنید
              </p>
            </div>
          )}

          {/* Add Language Button */}
          <div className="flex justify-center">
            <Button
              onClick={addLanguage}
              variant="outline"
              className="border-dashed border-2 border-blue-300 text-blue-600 hover:bg-blue-50"
            >
              <Plus className="mr-2 h-4 w-4" />
              زبان جدید اضافه کنید
            </Button>
          </div>

          {/* Tips */}
          <div className="rounded-lg bg-indigo-50 p-4" dir="rtl">
            <h4 className="mb-2 font-medium text-indigo-900">💡 نکات مفید:</h4>
            <ul className="space-y-1 text-sm text-indigo-700">
              <li>• فقط زبان‌هایی را ذکر کنید که واقعاً در آن‌ها مهارت دارید</li>
              <li>• سطح مهارت خود را با صداقت تعیین کنید</li>
              <li>• زبان‌هایی که مرتبط با شغل مدنظرتان است را اولویت دهید</li>
              <li>• حداکثر 5-6 زبان کلیدی را ذکر کنید</li>
            </ul>
          </div>
        </div>
      </FormCard>
    </div>
  );
}
