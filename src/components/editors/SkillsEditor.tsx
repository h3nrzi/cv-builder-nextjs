'use client';
import React, { useState } from 'react';
import { Plus, Trash2, GripVertical, Award, Code, Zap } from 'lucide-react';
import { CVData } from '@/types/theme';
import { FormField, FormCard, Input, Range } from '@/components/ui/form-components';
import { Button } from '@/components/ui/button';

interface SkillsEditorProps {
  skills: CVData['skills'];
  onUpdateSkills: (skills: CVData['skills']) => void;
}

export function SkillsEditor({ skills, onUpdateSkills }: SkillsEditorProps) {
  const [draggedCategory, setDraggedCategory] = useState<number | null>(null);

  const addSkillCategory = () => {
    const newCategory = {
      category: 'دسته‌بندی جدید',
      items: [],
    };
    onUpdateSkills([...skills, newCategory]);
  };

  const updateCategoryName = (categoryIndex: number, newName: string) => {
    const updatedSkills = skills.map((category, index) =>
      index === categoryIndex ? { ...category, category: newName } : category
    );
    onUpdateSkills(updatedSkills);
  };

  const deleteCategory = (categoryIndex: number) => {
    const updatedSkills = skills.filter((_, index) => index !== categoryIndex);
    onUpdateSkills(updatedSkills);
  };

  const addSkillToCategory = (categoryIndex: number) => {
    const updatedSkills = skills.map((category, index) =>
      index === categoryIndex
        ? {
            ...category,
            items: [...category.items, { name: 'مهارت جدید', level: 3 }],
          }
        : category
    );
    onUpdateSkills(updatedSkills);
  };

  const updateSkill = (
    categoryIndex: number,
    skillIndex: number,
    field: 'name' | 'level',
    value: string | number
  ) => {
    const updatedSkills = skills.map((category, catIndex) =>
      catIndex === categoryIndex
        ? {
            ...category,
            items: category.items.map((skill, skillIdx) =>
              skillIdx === skillIndex ? { ...skill, [field]: value } : skill
            ),
          }
        : category
    );
    onUpdateSkills(updatedSkills);
  };

  const deleteSkill = (categoryIndex: number, skillIndex: number) => {
    const updatedSkills = skills.map((category, catIndex) =>
      catIndex === categoryIndex
        ? {
            ...category,
            items: category.items.filter((_, skillIdx) => skillIdx !== skillIndex),
          }
        : category
    );
    onUpdateSkills(updatedSkills);
  };

  const moveCategory = (fromIndex: number, toIndex: number) => {
    const updatedSkills = [...skills];
    const [movedCategory] = updatedSkills.splice(fromIndex, 1);
    updatedSkills.splice(toIndex, 0, movedCategory);
    onUpdateSkills(updatedSkills);
  };

  const handleDragStart = (e: React.DragEvent, categoryIndex: number) => {
    setDraggedCategory(categoryIndex);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (draggedCategory !== null && draggedCategory !== targetIndex) {
      moveCategory(draggedCategory, targetIndex);
    }
    setDraggedCategory(null);
  };

  const getLevelLabel = (level: number) => {
    const labels = {
      1: 'مبتدی',
      2: 'متوسط',
      3: 'خوب',
      4: 'عالی',
      5: 'حرفه‌ای',
    };
    return labels[level as keyof typeof labels];
  };

  const getCategoryIcon = (categoryName: string) => {
    const name = categoryName.toLowerCase();
    if (name.includes('فرانت') || name.includes('front')) return Code;
    if (name.includes('بک') || name.includes('back')) return Zap;
    return Award;
  };

  return (
    <div className="space-y-6">
      <FormCard
        title="مهارت‌های فنی"
        description="مهارت‌های خود را در دسته‌بندی‌های مختلف سازماندهی کنید"
      >
        <div className="space-y-6">
          {skills.map((category, categoryIndex) => {
            const CategoryIcon = getCategoryIcon(category.category);

            return (
              <div
                key={categoryIndex}
                className={`rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 p-4 transition-all ${
                  draggedCategory === categoryIndex ? 'opacity-50' : ''
                }`}
                draggable
                onDragStart={e => handleDragStart(e, categoryIndex)}
                onDragOver={handleDragOver}
                onDrop={e => handleDrop(e, categoryIndex)}
              >
                {/* Category Header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="cursor-move text-gray-400">
                    <GripVertical className="h-5 w-5" />
                  </div>

                  <CategoryIcon className="h-5 w-5 text-blue-600" />

                  <div className="flex-1">
                    <Input
                      value={category.category}
                      onChange={e => updateCategoryName(categoryIndex, e.target.value)}
                      className="font-medium"
                      placeholder="نام دسته‌بندی"
                      dir="rtl"
                    />
                  </div>

                  <Button
                    onClick={() => addSkillToCategory(categoryIndex)}
                    variant="outline"
                    size="sm"
                    className="text-green-600 hover:bg-green-50"
                  >
                    <Plus className="mr-1 h-4 w-4" />
                    مهارت
                  </Button>

                  <Button
                    onClick={() => deleteCategory(categoryIndex)}
                    variant="outline"
                    size="sm"
                    className="text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                {/* Skills in Category */}
                {category.items.length === 0 ? (
                  <div className="py-8 text-center text-gray-500">
                    <Award className="mx-auto mb-2 h-8 w-8" />
                    <p>هنوز مهارتی اضافه نشده است</p>
                    <Button
                      onClick={() => addSkillToCategory(categoryIndex)}
                      variant="ghost"
                      size="sm"
                      className="mt-2"
                    >
                      اولین مهارت را اضافه کنید
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {category.items.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="rounded-lg border border-gray-200 bg-white p-4"
                      >
                        <div className="mb-3 flex items-center gap-2">
                          <Input
                            value={skill.name}
                            onChange={e =>
                              updateSkill(categoryIndex, skillIndex, 'name', e.target.value)
                            }
                            className="flex-1 text-sm font-medium"
                            placeholder="نام مهارت"
                            dir="rtl"
                          />
                          <Button
                            onClick={() => deleteSkill(categoryIndex, skillIndex)}
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">سطح مهارت</span>
                            <span className="font-medium text-blue-600">
                              {getLevelLabel(skill.level)} ({skill.level}/5)
                            </span>
                          </div>
                          <Range
                            value={skill.level}
                            onChange={e =>
                              updateSkill(
                                categoryIndex,
                                skillIndex,
                                'level',
                                parseInt(e.target.value)
                              )
                            }
                            className="w-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Add Category Button */}
          <div className="flex justify-center">
            <Button
              onClick={addSkillCategory}
              variant="outline"
              className="border-2 border-dashed border-blue-300 text-blue-600 hover:bg-blue-50"
            >
              <Plus className="mr-2 h-4 w-4" />
              دسته‌بندی جدید اضافه کنید
            </Button>
          </div>

          {/* Tips */}
          <div className="rounded-lg bg-blue-50 p-4" dir="rtl">
            <h4 className="mb-2 font-medium text-blue-900">💡 نکات مفید:</h4>
            <ul className="space-y-1 text-sm text-blue-700">
              <li>• مهارت‌های خود را در دسته‌بندی‌های منطقی سازماندهی کنید</li>
              <li>• سطح مهارت را بر اساس تجربه واقعی خود تنظیم کنید</li>
              <li>• می‌توانید دسته‌بندی‌ها را با کشیدن جابجا کنید</li>
              <li>• حداکثر 15-20 مهارت کلیدی را ذکر کنید</li>
            </ul>
          </div>
        </div>
      </FormCard>
    </div>
  );
}
