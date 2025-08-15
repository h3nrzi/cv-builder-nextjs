'use client';
import React, { useState } from 'react';
import { Plus, Trash2, Heart, X, Sparkles } from 'lucide-react';
import { CVData } from '@/types/theme';
import { FormField, FormCard, Input } from '@/components/ui/form-components';
import { Button } from '@/components/ui/button';

interface InterestsEditorProps {
  interests: CVData['interests'];
  onUpdateInterests: (interests: CVData['interests']) => void;
}

export function InterestsEditor({ interests = [], onUpdateInterests }: InterestsEditorProps) {
  const [newInterest, setNewInterest] = useState('');

  const addInterest = (interestText?: string) => {
    const interest = interestText || newInterest.trim();
    if (interest && !interests.includes(interest)) {
      onUpdateInterests([...interests, interest]);
      setNewInterest('');
    }
  };

  const removeInterest = (index: number) => {
    const updatedInterests = interests.filter((_, i) => i !== index);
    onUpdateInterests(updatedInterests);
  };

  const updateInterest = (index: number, value: string) => {
    const updatedInterests = interests.map((interest, i) => (i === index ? value : interest));
    onUpdateInterests(updatedInterests);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addInterest();
    }
  };

  // Suggested interests in Persian
  const suggestedInterests = [
    'برنامه‌نویسی',
    'یادگیری ماشین',
    'هوش مصنوعی',
    'طراحی UI/UX',
    'عکاسی',
    'مطالعه',
    'ورزش',
    'سفر',
    'موسیقی',
    'نقاشی',
    'آشپزی',
    'باغبانی',
    'شنا',
    'دوچرخه‌سواری',
    'کوهنوردی',
    'بازی‌های ویدیویی',
    'فیلم',
    'نوشتن',
    'وبلاگ‌نویسی',
    'خوانندگی',
    'رقص',
    'یوگا',
    'مدیتیشن',
  ];

  const getRandomSuggestions = () => {
    return suggestedInterests
      .filter(suggestion => !interests.includes(suggestion))
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
  };

  const getInterestEmoji = (interest: string) => {
    const interestLower = interest.toLowerCase();
    if (interestLower.includes('برنامه') || interestLower.includes('کد')) return '💻';
    if (interestLower.includes('عکاسی')) return '📸';
    if (interestLower.includes('مطالعه') || interestLower.includes('کتاب')) return '📚';
    if (interestLower.includes('موسیقی')) return '🎵';
    if (interestLower.includes('ورزش')) return '⚽';
    if (interestLower.includes('سفر')) return '✈️';
    if (interestLower.includes('آشپزی')) return '🍳';
    if (interestLower.includes('نقاشی') || interestLower.includes('هنر')) return '🎨';
    if (interestLower.includes('فیلم')) return '🎬';
    if (interestLower.includes('باغبانی')) return '🌱';
    if (interestLower.includes('شنا')) return '🏊';
    if (interestLower.includes('دوچرخه')) return '🚴';
    if (interestLower.includes('کوهنوردی')) return '🏔️';
    if (interestLower.includes('بازی')) return '🎮';
    if (interestLower.includes('نوشتن')) return '✍️';
    if (interestLower.includes('یوگا')) return '🧘';
    if (interestLower.includes('رقص')) return '💃';
    return '✨';
  };

  return (
    <div className="space-y-6">
      <FormCard
        title="علایق و سرگرمی‌ها"
        description="علایق شخصی و حرفه‌ای خود را که نشان‌دهنده شخصیت شما است، اضافه کنید"
      >
        <div className="space-y-6">
          {/* Current Interests */}
          {interests.length > 0 && (
            <div>
              <h4 className="mb-3 text-sm font-medium text-gray-700">علایق فعلی شما:</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="group inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100"
                  >
                    <span className="text-base">{getInterestEmoji(interest)}</span>
                    <span className="flex-1" dir="rtl">
                      {interest}
                    </span>
                    <button
                      onClick={() => removeInterest(index)}
                      className="ml-1 rounded-full p-0.5 text-blue-500 hover:bg-blue-200 hover:text-blue-700"
                      title="حذف"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add New Interest */}
          <div>
            <FormField label="اضافه کردن علاقه جدید">
              <div className="flex gap-2">
                <Input
                  value={newInterest}
                  onChange={e => setNewInterest(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="مثل: عکاسی، مطالعه، برنامه‌نویسی..."
                  className="flex-1"
                  dir="rtl"
                />
                <Button
                  onClick={() => addInterest()}
                  disabled={!newInterest.trim()}
                  size="sm"
                  className="px-4"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </FormField>
          </div>

          {/* Suggested Interests */}
          <div>
            <h4 className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-700">
              <Sparkles className="h-4 w-4 text-yellow-500" />
              پیشنهادهای محبوب:
            </h4>
            <div className="flex flex-wrap gap-2">
              {getRandomSuggestions().map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => addInterest(suggestion)}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-800"
                  dir="rtl"
                >
                  <span className="text-base">{getInterestEmoji(suggestion)}</span>
                  {suggestion}
                  <Plus className="ml-1 h-3 w-3" />
                </button>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {interests.length === 0 && (
            <div className="py-12 text-center text-gray-500">
              <Heart className="mx-auto mb-4 h-12 w-12 text-gray-300" />
              <h3 className="mb-2 text-sm font-medium text-gray-900">
                هنوز علاقه‌ای اضافه نشده است
              </h3>
              <p className="text-sm text-gray-500">
                علایق خود را اضافه کنید تا شخصیت‌تان بهتر نمایش داده شود
              </p>
            </div>
          )}

          {/* Tips */}
          <div className="rounded-lg bg-rose-50 p-4" dir="rtl">
            <h4 className="mb-2 font-medium text-rose-900">💡 نکات مفید:</h4>
            <ul className="space-y-1 text-sm text-rose-700">
              <li>• علایقی را انتخاب کنید که واقعاً به آن‌ها علاقه‌مند هستید</li>
              <li>• علایق مرتبط با حوزه شغلی‌تان را ترجیح دهید</li>
              <li>• تعادل بین علایق حرفه‌ای و شخصی رعایت کنید</li>
              <li>• حداکثر 8-10 علاقه کلیدی را ذکر کنید</li>
              <li>• از علایق کلیشه‌ای مثل "موسیقی گوش دادن" اجتناب کنید</li>
            </ul>
          </div>

          {/* Quick Stats */}
          {interests.length > 0 && (
            <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2" dir="rtl">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span className="font-medium text-gray-700">
                    {interests.length} علاقه ثبت شده
                  </span>
                </div>
                <div className="text-gray-500">
                  {interests.length < 5
                    ? 'می‌توانید بیشتر اضافه کنید'
                    : interests.length > 10
                      ? 'تعداد خوبی دارید'
                      : 'تعداد مناسبی است'}
                </div>
              </div>
            </div>
          )}
        </div>
      </FormCard>
    </div>
  );
}
