'use client';
import React, { useState } from 'react';
import { Plus, Trash2, Briefcase, Calendar, MapPin, Building, Award, Hash } from 'lucide-react';
import { CVData } from '@/types/theme';
import { FormField, FormCard, Input, Textarea, Select } from '@/components/ui/form-components';
import { Button } from '@/components/ui/button';

interface ExperienceEditorProps {
  experience: CVData['experience'];
  onUpdateExperience: (experience: CVData['experience']) => void;
}

export function ExperienceEditor({ experience, onUpdateExperience }: ExperienceEditorProps) {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0]));

  const addExperience = () => {
    const newExperience = {
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
      achievements: [''],
      technologies: ['']
    };
    onUpdateExperience([...experience, newExperience]);
    // Auto-expand the new item
    setExpandedItems(new Set([...Array.from(expandedItems), experience.length]));
  };

  const updateExperience = (index: number, field: keyof CVData['experience'][0], value: any) => {
    const updatedExperience = experience.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    onUpdateExperience(updatedExperience);
  };

  const deleteExperience = (index: number) => {
    const updatedExperience = experience.filter((_, i) => i !== index);
    onUpdateExperience(updatedExperience);
    // Update expanded items
    const newExpanded = new Set(
      Array.from(expandedItems)
        .filter(i => i !== index)
        .map(i => i > index ? i - 1 : i)
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

  const addAchievement = (experienceIndex: number) => {
    const exp = experience[experienceIndex];
    const achievements = exp.achievements || [];
    updateExperience(experienceIndex, 'achievements', [...achievements, '']);
  };

  const updateAchievement = (experienceIndex: number, achievementIndex: number, value: string) => {
    const exp = experience[experienceIndex];
    const achievements = [...(exp.achievements || [])];
    achievements[achievementIndex] = value;
    updateExperience(experienceIndex, 'achievements', achievements);
  };

  const deleteAchievement = (experienceIndex: number, achievementIndex: number) => {
    const exp = experience[experienceIndex];
    const achievements = (exp.achievements || []).filter((_, i) => i !== achievementIndex);
    updateExperience(experienceIndex, 'achievements', achievements);
  };

  const addTechnology = (experienceIndex: number) => {
    const exp = experience[experienceIndex];
    const technologies = exp.technologies || [];
    updateExperience(experienceIndex, 'technologies', [...technologies, '']);
  };

  const updateTechnology = (experienceIndex: number, techIndex: number, value: string) => {
    const exp = experience[experienceIndex];
    const technologies = [...(exp.technologies || [])];
    technologies[techIndex] = value;
    updateExperience(experienceIndex, 'technologies', technologies);
  };

  const deleteTechnology = (experienceIndex: number, techIndex: number) => {
    const exp = experience[experienceIndex];
    const technologies = (exp.technologies || []).filter((_, i) => i !== techIndex);
    updateExperience(experienceIndex, 'technologies', technologies);
  };

  const getCurrentDate = () => {
    const now = new Date();
    return `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      <FormCard 
        title="تجربه کاری" 
        description="سابقه کاری خود را به ترتیب زمانی (جدیدترین ابتدا) وارد کنید"
      >
        <div className="space-y-6">
          {experience.map((exp, index) => {
            const isExpanded = expandedItems.has(index);
            const isCurrentJob = !exp.endDate;
            
            return (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                {/* Header */}
                <div
                  className="flex cursor-pointer items-center justify-between p-4 hover:bg-gray-50"
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                    <div>
                      <h3 className="font-medium text-gray-900" dir="rtl">
                        {exp.title || 'عنوان شغل'} {exp.company && `در ${exp.company}`}
                      </h3>
                      <p className="text-sm text-gray-500" dir="rtl">
                        {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : '- اکنون'}
                        {exp.location && ` • ${exp.location}`}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {isCurrentJob && (
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                        شغل فعلی
                      </span>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:bg-red-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteExperience(index);
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
                        <FormField label="عنوان شغل" required>
                          <div className="relative">
                            <Briefcase className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                              value={exp.title}
                              onChange={(e) => updateExperience(index, 'title', e.target.value)}
                              placeholder="مثل: توسعه‌دهنده فرانت‌اند"
                              className="pr-10"
                              dir="rtl"
                            />
                          </div>
                        </FormField>

                        <FormField label="نام شرکت" required>
                          <div className="relative">
                            <Building className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                              value={exp.company}
                              onChange={(e) => updateExperience(index, 'company', e.target.value)}
                              placeholder="نام شرکت یا سازمان"
                              className="pr-10"
                              dir="rtl"
                            />
                          </div>
                        </FormField>

                        <FormField label="موقعیت مکانی">
                          <div className="relative">
                            <MapPin className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                              value={exp.location}
                              onChange={(e) => updateExperience(index, 'location', e.target.value)}
                              placeholder="تهران، ایران"
                              className="pr-10"
                              dir="rtl"
                            />
                          </div>
                        </FormField>

                        <div className="grid grid-cols-2 gap-2">
                          <FormField label="تاریخ شروع" required>
                            <div className="relative">
                              <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                              <Input
                                type="month"
                                value={exp.startDate}
                                onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                                className="pr-10"
                              />
                            </div>
                          </FormField>

                          <FormField label="تاریخ پایان">
                            <div className="relative">
                              <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                              <Input
                                type="month"
                                value={exp.endDate || ''}
                                onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                                placeholder="اکنون"
                                className="pr-10"
                              />
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                              <input
                                type="checkbox"
                                id={`current-job-${index}`}
                                checked={!exp.endDate}
                                onChange={(e) => updateExperience(index, 'endDate', e.target.checked ? '' : getCurrentDate())}
                                className="h-3 w-3 text-blue-600"
                              />
                              <label htmlFor={`current-job-${index}`} className="text-xs text-gray-600">
                                هم‌اکنون در این شغل مشغولم
                              </label>
                            </div>
                          </FormField>
                        </div>
                      </div>

                      {/* Job Description */}
                      <FormField label="شرح وظایف" required>
                        <Textarea
                          value={exp.description}
                          onChange={(e) => updateExperience(index, 'description', e.target.value)}
                          placeholder="شرح مختصری از وظایف و مسئولیت‌های خود در این شغل..."
                          className="min-h-20"
                          dir="rtl"
                        />
                      </FormField>

                      {/* Achievements */}
                      <div>
                        <div className="mb-3 flex items-center justify-between">
                          <label className="text-sm font-medium">دستاوردها و نتایج</label>
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
                          {(exp.achievements || []).map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-center gap-2">
                              <Award className="h-4 w-4 text-orange-500" />
                              <Input
                                value={achievement}
                                onChange={(e) => updateAchievement(index, achIndex, e.target.value)}
                                placeholder="مثل: افزایش ۳۰٪ کارایی سیستم"
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
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <div className="mb-3 flex items-center justify-between">
                          <label className="text-sm font-medium">تکنولوژی‌ها و ابزارها</label>
                          <Button
                            onClick={() => addTechnology(index)}
                            variant="outline"
                            size="sm"
                            className="text-blue-600 hover:bg-blue-50"
                          >
                            <Plus className="mr-1 h-3 w-3" />
                            تکنولوژی
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                          {(exp.technologies || []).map((tech, techIndex) => (
                            <div key={techIndex} className="flex items-center gap-2">
                              <Hash className="h-4 w-4 text-blue-500" />
                              <Input
                                value={tech}
                                onChange={(e) => updateTechnology(index, techIndex, e.target.value)}
                                placeholder="React"
                                className="flex-1"
                              />
                              <Button
                                onClick={() => deleteTechnology(index, techIndex)}
                                variant="ghost"
                                size="sm"
                                className="text-red-600 hover:bg-red-50"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Add Experience Button */}
          <div className="flex justify-center">
            <Button
              onClick={addExperience}
              variant="outline"
              className="border-dashed border-2 border-blue-300 text-blue-600 hover:bg-blue-50"
            >
              <Plus className="mr-2 h-4 w-4" />
              تجربه کاری جدید اضافه کنید
            </Button>
          </div>

          {/* Tips */}
          <div className="rounded-lg bg-amber-50 p-4" dir="rtl">
            <h4 className="mb-2 font-medium text-amber-900">💡 نکات مفید:</h4>
            <ul className="space-y-1 text-sm text-amber-700">
              <li>• تجربیات را به ترتیب زمانی (جدیدترین ابتدا) مرتب کنید</li>
              <li>• از عبارات فعال و نتیجه‌محور استفاده کنید</li>
              <li>• دستاوردها را با عدد و درصد بیان کنید</li>
              <li>• تکنولوژی‌های مرتبط با موقعیت شغلی مدنظر را ذکر کنید</li>
            </ul>
          </div>
        </div>
      </FormCard>
    </div>
  );
}
