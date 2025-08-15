'use client';
import React, { useState } from 'react';
import {
  Plus,
  Trash2,
  GraduationCap,
  Calendar,
  MapPin,
  Building,
  Award,
  BookOpen,
  Star,
} from 'lucide-react';
import { CVData } from '@/types/theme';
import { FormField, FormCard, Input, Textarea } from '@/components/ui/form-components';
import { Button } from '@/components/ui/button';

interface EducationEditorProps {
  education: CVData['education'];
  onUpdateEducation: (education: CVData['education']) => void;
}

export function EducationEditor({ education, onUpdateEducation }: EducationEditorProps) {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0]));

  const addEducation = () => {
    const newEducation = {
      degree: '',
      school: '',
      location: '',
      startDate: '',
      endDate: '',
      gpa: '',
      achievements: [''],
    };
    onUpdateEducation([...education, newEducation]);
    // Auto-expand the new item
    setExpandedItems(new Set([...Array.from(expandedItems), education.length]));
  };

  const updateEducation = (index: number, field: keyof CVData['education'][0], value: any) => {
    const updatedEducation = education.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu
    );
    onUpdateEducation(updatedEducation);
  };

  const deleteEducation = (index: number) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    onUpdateEducation(updatedEducation);
    // Update expanded items
    const newExpanded = new Set(
      Array.from(expandedItems)
        .filter(i => i !== index)
        .map(i => (i > index ? i - 1 : i))
    );
    setExpandedItems(newExpanded);
  };

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const addAchievement = (educationIndex: number) => {
    const edu = education[educationIndex];
    const achievements = edu.achievements || [];
    updateEducation(educationIndex, 'achievements', [...achievements, '']);
  };

  const updateAchievement = (educationIndex: number, achievementIndex: number, value: string) => {
    const edu = education[educationIndex];
    const achievements = [...(edu.achievements || [])];
    achievements[achievementIndex] = value;
    updateEducation(educationIndex, 'achievements', achievements);
  };

  const deleteAchievement = (educationIndex: number, achievementIndex: number) => {
    const edu = education[educationIndex];
    const achievements = (edu.achievements || []).filter((_, i) => i !== achievementIndex);
    updateEducation(educationIndex, 'achievements', achievements);
  };

  const getCurrentDate = () => {
    const now = new Date();
    return `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}`;
  };

  const getEducationLevel = (degree: string) => {
    const degreeText = degree.toLowerCase();
    if (degreeText.includes('دکتر') || degreeText.includes('phd'))
      return { icon: GraduationCap, color: 'text-purple-600' };
    if (degreeText.includes('ارشد') || degreeText.includes('master'))
      return { icon: BookOpen, color: 'text-blue-600' };
    if (degreeText.includes('کارشناسی') || degreeText.includes('bachelor'))
      return { icon: Award, color: 'text-green-600' };
    return { icon: GraduationCap, color: 'text-gray-600' };
  };

  return (
    <div className="space-y-6">
      <FormCard
        title="تحصیلات"
        description="سوابق تحصیلی خود را به ترتیب زمانی (جدیدترین ابتدا) وارد کنید"
      >
        <div className="space-y-6">
          {education.map((edu, index) => {
            const isExpanded = expandedItems.has(index);
            const { icon: DegreeIcon, color: degreeColor } = getEducationLevel(edu.degree);
            const isCurrentlyStudying = !edu.endDate;

            return (
              <div key={index} className="rounded-lg border border-gray-200 bg-white shadow-sm">
                {/* Header */}
                <div
                  className="flex cursor-pointer items-center justify-between p-4 hover:bg-gray-50"
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="flex items-center gap-3">
                    <DegreeIcon className={`h-5 w-5 ${degreeColor}`} />
                    <div>
                      <h3 className="font-medium text-gray-900" dir="rtl">
                        {edu.degree || 'مدرک تحصیلی'} {edu.school && `در ${edu.school}`}
                      </h3>
                      <p className="text-sm text-gray-500" dir="rtl">
                        {edu.startDate} {edu.endDate ? `- ${edu.endDate}` : '- اکنون'}
                        {edu.location && ` • ${edu.location}`}
                        {edu.gpa && ` • معدل: ${edu.gpa}`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isCurrentlyStudying && (
                      <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                        در حال تحصیل
                      </span>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:bg-red-50"
                      onClick={e => {
                        e.stopPropagation();
                        deleteEducation(index);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t border-gray-200 p-4">
                    <div className="space-y-4">
                      {/* Basic Information */}
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <FormField label="مدرک/رشته تحصیلی" required>
                          <div className="relative">
                            <GraduationCap className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                              value={edu.degree}
                              onChange={e => updateEducation(index, 'degree', e.target.value)}
                              placeholder="مثل: کارشناسی مهندسی کامپیوتر"
                              className="pr-10"
                              dir="rtl"
                            />
                          </div>
                        </FormField>

                        <FormField label="نام دانشگاه/موسسه" required>
                          <div className="relative">
                            <Building className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                              value={edu.school}
                              onChange={e => updateEducation(index, 'school', e.target.value)}
                              placeholder="دانشگاه تهران"
                              className="pr-10"
                              dir="rtl"
                            />
                          </div>
                        </FormField>

                        <FormField label="موقعیت مکانی">
                          <div className="relative">
                            <MapPin className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                              value={edu.location}
                              onChange={e => updateEducation(index, 'location', e.target.value)}
                              placeholder="تهران، ایران"
                              className="pr-10"
                              dir="rtl"
                            />
                          </div>
                        </FormField>

                        {/* <FormField label="معدل (اختیاری)">
                          <div className="relative">
                            <Star className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                              value={edu.gpa || ''}
                              onChange={e => updateEducation(index, 'gpa', e.target.value)}
                              placeholder="18.5/20 یا 3.8/4"
                              className="pr-10"
                            />
                          </div>
                        </FormField> */}

                        <div className="grid grid-cols-2 gap-2">
                          <FormField label="تاریخ شروع" required>
                            <div className="relative">
                              <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                              <Input
                                type="month"
                                value={edu.startDate}
                                onChange={e => updateEducation(index, 'startDate', e.target.value)}
                                className="pr-10"
                              />
                            </div>
                          </FormField>

                          <FormField label="تاریخ فارغ‌التحصیلی">
                            <div className="relative">
                              <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                              <Input
                                type="month"
                                value={edu.endDate || ''}
                                onChange={e => updateEducation(index, 'endDate', e.target.value)}
                                placeholder="اکنون"
                                className="pr-10"
                              />
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                              <input
                                type="checkbox"
                                id={`current-study-${index}`}
                                checked={!edu.endDate}
                                onChange={e =>
                                  updateEducation(
                                    index,
                                    'endDate',
                                    e.target.checked ? '' : getCurrentDate()
                                  )
                                }
                                className="h-3 w-3 text-blue-600"
                              />
                              <label
                                htmlFor={`current-study-${index}`}
                                className="text-xs text-gray-600"
                              >
                                هم‌اکنون در حال تحصیل هستم
                              </label>
                            </div>
                          </FormField>
                        </div>
                      </div>

                      {/* Achievements */}
                      {/* <div>
                        <div className="mb-3 flex items-center justify-between">
                          <label className="text-sm font-medium">دستاوردها و افتخارات</label>
                          <Button
                            onClick={() => addAchievement(index)}
                            variant="outline"
                            size="sm"
                            className="text-green-600 hover:bg-green-50"
                          >
                            <Plus className="mr-1 h-3 w-3" />
                            دستاورد
                          </Button>
                        </div>
                        <div className="space-y-2">
                          {(edu.achievements || []).map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-center gap-2">
                              <Award className="h-4 w-4 text-yellow-500" />
                              <Input
                                value={achievement}
                                onChange={e => updateAchievement(index, achIndex, e.target.value)}
                                placeholder="مثل: رتبه برتر کلاس، عضویت در انجمن علمی"
                                className="flex-1"
                                dir="rtl"
                              />
                              <Button
                                onClick={() => deleteAchievement(index, achIndex)}
                                variant="ghost"
                                size="sm"
                                className="text-red-600 hover:bg-red-50"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          ))}
                          {(!edu.achievements || edu.achievements.length === 0) && (
                            <div className="py-4 text-center text-gray-500">
                              <Award className="mx-auto mb-2 h-6 w-6" />
                              <p className="text-sm">هنوز دستاوردی اضافه نشده است</p>
                            </div>
                          )}
                        </div>
                      </div> */}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Add Education Button */}
          <div className="flex justify-center">
            <Button
              onClick={addEducation}
              variant="outline"
              className="border-2 border-dashed border-blue-300 text-blue-600 hover:bg-blue-50"
            >
              <Plus className="mr-2 h-4 w-4" />
              تحصیلات جدید اضافه کنید
            </Button>
          </div>

          {/* Tips */}
          <div className="rounded-lg bg-green-50 p-4" dir="rtl">
            <h4 className="mb-2 font-medium text-green-900">💡 نکات مفید:</h4>
            <ul className="space-y-1 text-sm text-green-700">
              <li>• تحصیلات را به ترتیب زمانی (جدیدترین ابتدا) مرتب کنید</li>
              {/* <li>• معدل را فقط در صورت بالا بودن (بالای 16 از 20 یا 3.5 از 4) ذکر کنید</li> */}
              {/* <li>• دستاوردهای مهم مثل رتبه‌های برتر و جوایز را بیان کنید</li> */}
              <li>• برای تحصیلات فعلی، گزینه &quot;در حال تحصیل&quot; را انتخاب کنید</li>
            </ul>
          </div>
        </div>
      </FormCard>
    </div>
  );
}
