import React, { useState } from 'react';
import { Plus, Trash2, FolderOpen, Calendar, Link, Github, Code, ExternalLink, Hash } from 'lucide-react';
import { CVData } from '../../types/theme';
import { FormField, FormCard, Input, Textarea } from '../ui/form-components';
import { Button } from '../ui/button';

interface ProjectsEditorProps {
  projects: CVData['projects'];
  onUpdateProjects: (projects: CVData['projects']) => void;
}

export function ProjectsEditor({ projects, onUpdateProjects }: ProjectsEditorProps) {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0]));

  const addProject = () => {
    const newProject = {
      name: '',
      description: '',
      technologies: [''],
      url: '',
      github: '',
      startDate: '',
      endDate: ''
    };
    onUpdateProjects([...projects, newProject]);
    // Auto-expand the new item
    setExpandedItems(new Set([...Array.from(expandedItems), projects.length]));
  };

  const updateProject = (index: number, field: keyof CVData['projects'][0], value: any) => {
    const updatedProjects = projects.map((project, i) =>
      i === index ? { ...project, [field]: value } : project
    );
    onUpdateProjects(updatedProjects);
  };

  const deleteProject = (index: number) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    onUpdateProjects(updatedProjects);
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

  const addTechnology = (projectIndex: number) => {
    const project = projects[projectIndex];
    const technologies = project.technologies || [];
    updateProject(projectIndex, 'technologies', [...technologies, '']);
  };

  const updateTechnology = (projectIndex: number, techIndex: number, value: string) => {
    const project = projects[projectIndex];
    const technologies = [...(project.technologies || [])];
    technologies[techIndex] = value;
    updateProject(projectIndex, 'technologies', technologies);
  };

  const deleteTechnology = (projectIndex: number, techIndex: number) => {
    const project = projects[projectIndex];
    const technologies = (project.technologies || []).filter((_, i) => i !== techIndex);
    updateProject(projectIndex, 'technologies', technologies);
  };

  const getCurrentDate = () => {
    const now = new Date();
    return `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}`;
  };

  const getProjectStatus = (startDate?: string, endDate?: string) => {
    if (!startDate) return null;
    if (!endDate) return { label: 'در حال انجام', color: 'bg-blue-100 text-blue-700' };
    return { label: 'تکمیل شده', color: 'bg-green-100 text-green-700' };
  };

  return (
    <div className="space-y-6">
      <FormCard 
        title="پروژه‌ها" 
        description="پروژه‌های شخصی و حرفه‌ای خود را به ترتیب اهمیت یا تاریخ وارد کنید"
      >
        <div className="space-y-6">
          {projects.map((project, index) => {
            const isExpanded = expandedItems.has(index);
            const status = getProjectStatus(project.startDate, project.endDate);
            
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
                    <FolderOpen className="h-5 w-5 text-blue-600" />
                    <div>
                      <h3 className="font-medium text-gray-900" dir="rtl">
                        {project.name || 'نام پروژه'}
                      </h3>
                      <p className="text-sm text-gray-500" dir="rtl">
                        {project.technologies && project.technologies.length > 0 && (
                          <>
                            {project.technologies.filter(tech => tech).slice(0, 3).join(', ')}
                            {project.technologies.filter(tech => tech).length > 3 && ' و ...'}
                          </>
                        )}
                        {project.startDate && (
                          <span className="mr-2">
                            {project.startDate} {project.endDate ? `- ${project.endDate}` : '- اکنون'}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {status && (
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${status.color}`}>
                        {status.label}
                      </span>
                    )}
                    {project.url && (
                      <Link className="h-4 w-4 text-gray-400" />
                    )}
                    {project.github && (
                      <Github className="h-4 w-4 text-gray-400" />
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:bg-red-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteProject(index);
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
                        <FormField label="نام پروژه" required>
                          <div className="relative">
                            <FolderOpen className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                              value={project.name}
                              onChange={(e) => updateProject(index, 'name', e.target.value)}
                              placeholder="مثل: فروشگاه آنلاین، وب‌سایت شخصی"
                              className="pr-10"
                              dir="rtl"
                            />
                          </div>
                        </FormField>

                        <div className="grid grid-cols-2 gap-2">
                          <FormField label="تاریخ شروع">
                            <div className="relative">
                              <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                              <Input
                                type="month"
                                value={project.startDate || ''}
                                onChange={(e) => updateProject(index, 'startDate', e.target.value)}
                                className="pr-10"
                              />
                            </div>
                          </FormField>

                          <FormField label="تاریخ پایان">
                            <div className="relative">
                              <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                              <Input
                                type="month"
                                value={project.endDate || ''}
                                onChange={(e) => updateProject(index, 'endDate', e.target.value)}
                                placeholder="اکنون"
                                className="pr-10"
                              />
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                              <input
                                type="checkbox"
                                id={`current-project-${index}`}
                                checked={!project.endDate}
                                onChange={(e) => updateProject(index, 'endDate', e.target.checked ? '' : getCurrentDate())}
                                className="h-3 w-3 text-blue-600"
                              />
                              <label htmlFor={`current-project-${index}`} className="text-xs text-gray-600">
                                هم‌اکنون در حال کار روی این پروژه هستم
                              </label>
                            </div>
                          </FormField>
                        </div>

                        <FormField label="لینک پروژه">
                          <div className="relative">
                            <ExternalLink className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                              value={project.url || ''}
                              onChange={(e) => updateProject(index, 'url', e.target.value)}
                              placeholder="https://your-project.com"
                              className="pr-10"
                            />
                          </div>
                        </FormField>

                        <FormField label="مخزن GitHub">
                          <div className="relative">
                            <Github className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                              value={project.github || ''}
                              onChange={(e) => updateProject(index, 'github', e.target.value)}
                              placeholder="https://github.com/username/project"
                              className="pr-10"
                            />
                          </div>
                        </FormField>
                      </div>

                      {/* Project Description */}
                      <FormField label="توضیحات پروژه" required>
                        <Textarea
                          value={project.description}
                          onChange={(e) => updateProject(index, 'description', e.target.value)}
                          placeholder="توضیح مختصری از پروژه، اهداف آن و نقش شما در توسعه..."
                          className="min-h-24"
                          dir="rtl"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                          {project.description.length}/300 کاراکتر • توضیحی واضح و مختصر بنویسید
                        </p>
                      </FormField>

                      {/* Technologies */}
                      <div>
                        <div className="mb-3 flex items-center justify-between">
                          <label className="text-sm font-medium">تکنولوژی‌های استفاده شده</label>
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
                          {(project.technologies || []).map((tech, techIndex) => (
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
                        {(!project.technologies || project.technologies.filter(tech => tech).length === 0) && (
                          <div className="py-4 text-center text-gray-500">
                            <Code className="mx-auto mb-2 h-6 w-6" />
                            <p className="text-sm">هنوز تکنولوژی‌ای اضافه نشده است</p>
                          </div>
                        )}
                      </div>

                      {/* Preview Links */}
                      {(project.url || project.github) && (
                        <div className="rounded-lg bg-gray-50 p-3">
                          <h4 className="mb-2 text-sm font-medium text-gray-700">لینک‌های پیش‌نمایش:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.url && (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 rounded-md bg-blue-100 px-2 py-1 text-xs text-blue-700 hover:bg-blue-200"
                              >
                                <ExternalLink className="h-3 w-3" />
                                مشاهده پروژه
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700 hover:bg-gray-200"
                              >
                                <Github className="h-3 w-3" />
                                کد منبع
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Add Project Button */}
          <div className="flex justify-center">
            <Button
              onClick={addProject}
              variant="outline"
              className="border-dashed border-2 border-blue-300 text-blue-600 hover:bg-blue-50"
            >
              <Plus className="mr-2 h-4 w-4" />
              پروژه جدید اضافه کنید
            </Button>
          </div>

          {/* Tips */}
          <div className="rounded-lg bg-purple-50 p-4" dir="rtl">
            <h4 className="mb-2 font-medium text-purple-900">💡 نکات مفید:</h4>
            <ul className="space-y-1 text-sm text-purple-700">
              <li>• پروژه‌های مهم و مرتبط با شغل مدنظر را اولویت دهید</li>
              <li>• برای هر پروژه، نقش خود را در توسعه آن مشخص کنید</li>
              <li>• لینک‌های مستقیم به پروژه‌های آنلاین و کد منبع اضافه کنید</li>
              <li>• تکنولوژی‌های به‌روز و پرطرفدار را برجسته کنید</li>
              <li>• حداکثر 5-8 پروژه کلیدی را نمایش دهید</li>
            </ul>
          </div>
        </div>
      </FormCard>
    </div>
  );
}
