'use client';
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Globe, Github, Linkedin, Camera, Upload } from 'lucide-react';
import { CVData } from '@/types/theme';
import { FormField, FormCard, Input, Textarea } from '@/components/ui/form-components';
import { Button } from '@/components/ui/button';

interface PersonalInfoEditorProps {
  personalInfo: CVData['personal'];
  summary: string;
  onUpdatePersonalInfo: (info: Partial<CVData['personal']>) => void;
  onUpdateSummary: (summary: string) => void;
}

export function PersonalInfoEditor({ 
  personalInfo, 
  summary, 
  onUpdatePersonalInfo, 
  onUpdateSummary 
}: PersonalInfoEditorProps) {
  const [imageUrl, setImageUrl] = useState(personalInfo.profileImage || '');
  const [imageError, setImageError] = useState(false);

  const handleImageChange = (url: string) => {
    setImageUrl(url);
    setImageError(false);
    onUpdatePersonalInfo({ profileImage: url });
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // For demo purposes, we'll convert to base64
      // In a real app, you'd upload to a cloud service
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        handleImageChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <FormCard 
        title="اطلاعات شخصی" 
        description="اطلاعات پایه و تماس خود را وارد کنید"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField label="نام و نام خانوادگی" required>
            <div className="relative">
              <User className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                value={personalInfo.name}
                onChange={(e) => onUpdatePersonalInfo({ name: e.target.value })}
                placeholder="نام کامل خود را وارد کنید"
                className="pr-10"
                dir="rtl"
              />
            </div>
          </FormField>

          <FormField label="عنوان شغلی" required>
            <Input
              value={personalInfo.title}
              onChange={(e) => onUpdatePersonalInfo({ title: e.target.value })}
              placeholder="مثل: توسعه‌دهنده فرانت‌اند"
              dir="rtl"
            />
          </FormField>

          <FormField label="ایمیل" required>
            <div className="relative">
              <Mail className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="email"
                value={personalInfo.email}
                onChange={(e) => onUpdatePersonalInfo({ email: e.target.value })}
                placeholder="your.email@example.com"
                className="pr-10"
              />
            </div>
          </FormField>

          <FormField label="شماره تماس" required>
            <div className="relative">
              <Phone className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="tel"
                value={personalInfo.phone}
                onChange={(e) => onUpdatePersonalInfo({ phone: e.target.value })}
                placeholder="+98 912 345 6789"
                className="pr-10"
              />
            </div>
          </FormField>

          <FormField label="موقعیت مکانی" required>
            <div className="relative">
              <MapPin className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                value={personalInfo.location}
                onChange={(e) => onUpdatePersonalInfo({ location: e.target.value })}
                placeholder="تهران، ایران"
                className="pr-10"
                dir="rtl"
              />
            </div>
          </FormField>

          <FormField label="وب‌سایت">
            <div className="relative">
              <Globe className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                value={personalInfo.website || ''}
                onChange={(e) => onUpdatePersonalInfo({ website: e.target.value })}
                placeholder="yoursite.com"
                className="pr-10"
              />
            </div>
          </FormField>

          <FormField label="GitHub">
            <div className="relative">
              <Github className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                value={personalInfo.github || ''}
                onChange={(e) => onUpdatePersonalInfo({ github: e.target.value })}
                placeholder="github.com/username"
                className="pr-10"
              />
            </div>
          </FormField>

          <FormField label="LinkedIn">
            <div className="relative">
              <Linkedin className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                value={personalInfo.linkedin || ''}
                onChange={(e) => onUpdatePersonalInfo({ linkedin: e.target.value })}
                placeholder="linkedin.com/in/username"
                className="pr-10"
              />
            </div>
          </FormField>
        </div>
      </FormCard>

      {/* Profile Image */}
      <FormCard 
        title="تصویر پروفایل" 
        description="تصویر پروفایل خود را آپلود کنید یا لینک آن را وارد کنید"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <FormField label="لینک تصویر">
              <div className="relative">
                <Camera className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  value={imageUrl}
                  onChange={(e) => handleImageChange(e.target.value)}
                  placeholder="https://example.com/your-photo.jpg"
                  className="pr-10"
                />
              </div>
            </FormField>

            <div className="mt-4">
              <label className="block">
                <Button variant="outline" className="w-full" asChild>
                  <div className="cursor-pointer">
                    <Upload className="mr-2 h-4 w-4" />
                    آپلود تصویر
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                </Button>
              </label>
              <p className="mt-2 text-xs text-gray-500">
                فرمت‌های JPG، PNG، GIF تا حجم 5 مگابایت
              </p>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium">پیش‌نمایش:</p>
            <div className="flex justify-center">
              {imageUrl && !imageError ? (
                <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-gray-200">
                  <img
                    src={imageUrl}
                    alt="پیش‌نمایش پروفایل"
                    className="h-full w-full object-cover"
                    onError={handleImageError}
                  />
                </div>
              ) : (
                <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-dashed border-gray-300 bg-gray-50">
                  <Camera className="h-8 w-8 text-gray-400" />
                </div>
              )}
            </div>
          </div>
        </div>
      </FormCard>

      {/* Summary */}
      <FormCard 
        title="خلاصه‌ای از خود" 
        description="توضیح مختصری از تجربیات و مهارت‌های خود بنویسید"
      >
        <FormField label="خلاصه" required>
          <Textarea
            value={summary}
            onChange={(e) => onUpdateSummary(e.target.value)}
            placeholder="من یک توسعه‌دهنده با ۵ سال تجربه در زمینه..."
            className="min-h-32"
            dir="rtl"
          />
        </FormField>
        <p className="mt-2 text-sm text-gray-500">
          {summary.length}/500 کاراکتر • توصیه می‌شود بین 100-300 کلمه باشد
        </p>
      </FormCard>
    </div>
  );
}
