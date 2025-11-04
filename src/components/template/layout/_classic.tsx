'use client';
import { useCVData } from '@/hooks/useCVData';
import React from 'react';
import Avatar from '../../ui/avatar';
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useThemeStyles } from '@/provider/useTheme';

export default function Classic_template_component() {
  const { cvData } = useCVData();
  const { theme, colors } = useThemeStyles();

  return (
    <div
      className="cv-gradient-bg"
      style={{
        fontFamily: theme.typography.fontFamily,
        color: colors.foreground,
        backgroundColor: colors.background,
      }}
      dir="rtl"
    >
      {/* Page 1 */}
      <div
        className="relative mx-auto min-h-screen w-full max-w-4xl bg-white shadow-lg sm:min-h-[297mm] sm:w-[210mm] sm:p-[15mm] print:min-h-[297mm] print:w-[210mm] print:p-[15mm] print:shadow-none"
        style={{
          fontFamily: theme.typography.fontFamily,
          color: colors.foreground,
        }}
      >
        {/* Classic Header with Sidebar */}
        <div className="mb-8 flex gap-8" style={{ marginBottom: theme.layout.sectionSpacing }}>
          {/* Left Sidebar */}
          <aside className="w-48 flex-shrink-0">
            {cvData.personal.profileImage && (
              <div className="mb-6">
                <div
                  className="overflow-hidden"
                  style={{
                    borderRadius: theme.borderRadius.md,
                    border: `3px solid ${colors.primary}`,
                  }}
                >
                  <Avatar src={cvData.personal.profileImage} />
                </div>
              </div>
            )}
            <div
              className="p-4"
              style={{
                backgroundColor: colors.primary,
                borderRadius: theme.borderRadius.lg,
              }}
            >
              <h1
                className="mb-2 text-white"
                style={{
                  fontSize: theme.typography.fontSize['2xl'],
                  fontWeight: theme.typography.fontWeight.bold,
                }}
              >
                {cvData.personal.name}
              </h1>
              <h2
                className="mb-4 text-white opacity-90"
                style={{
                  fontSize: theme.typography.fontSize.base,
                  fontWeight: theme.typography.fontWeight.medium,
                }}
              >
                {cvData.personal.title}
              </h2>
            </div>
            
            {/* Contact Info Sidebar */}
            <div className="mt-6 space-y-3">
              <ContactItemClassic icon={Phone} text={cvData.personal.phone} />
              <ContactItemClassic icon={Mail} text={cvData.personal.email} />
              <ContactItemClassic icon={MapPin} text={cvData.personal.location} />
              {cvData.personal.website && (
                <ContactItemClassic
                  icon={Globe}
                  text={cvData.personal.website}
                  href={`https://${cvData.personal.website}`}
                />
              )}
              {cvData.personal.github && (
                <ContactItemClassic
                  icon={Github}
                  text={cvData.personal.github}
                  href={`https://${cvData.personal.github}`}
                />
              )}
              {cvData.personal.linkedin && (
                <ContactItemClassic
                  icon={Linkedin}
                  text={cvData.personal.linkedin}
                  href={`https://${cvData.personal.linkedin}`}
                />
              )}
            </div>

            {/* Skills in Sidebar */}
            <div className="mt-8">
              <h3
                className="mb-4 border-b-2 pb-2 text-base font-bold text-white"
                style={{
                  borderColor: colors.primary,
                  color: colors.primary,
                }}
              >
                مهارت‌ها
              </h3>
              <div className="space-y-3" dir="ltr">
                {cvData.skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4
                      className="mb-2 text-sm font-bold"
                      style={{
                        color: colors.primary,
                      }}
                    >
                      {skillGroup.category}
                    </h4>
                    {skillGroup.items.slice(0, 3).map((skill, skillIndex) => (
                      <div key={skillIndex} className="mb-2">
                        <span className="text-xs" style={{ color: colors.foreground }}>
                          {skill.name}
                        </span>
                        <div
                          className="mt-1 h-1 w-full"
                          style={{
                            backgroundColor: colors.muted,
                            borderRadius: theme.borderRadius.full,
                          }}
                        >
                          <div
                            className="h-full"
                            style={{
                              width: `${(skill.level / 5) * 100}%`,
                              backgroundColor: colors.primary,
                              borderRadius: theme.borderRadius.full,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Summary Section */}
            <section className="mb-8">
              <SectionTitleClassic title="خلاصه" />
              <p style={{ lineHeight: theme.typography.lineHeight.relaxed, textAlign: 'justify' }}>
                {cvData.summary}
              </p>
            </section>

            {/* Experience Section */}
            <section className="mb-8">
              <SectionTitleClassic title="تجربه کاری" />
              <div className="space-y-6">
                {cvData.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="mb-2 flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div
                          className="mt-2 h-2 w-2 flex-shrink-0"
                          style={{
                            backgroundColor: colors.primary,
                            borderRadius: theme.borderRadius.full,
                          }}
                        />
                        <div>
                          <h3
                            className="font-bold"
                            style={{
                              fontSize: theme.typography.fontSize.lg,
                              color: colors.primary,
                            }}
                          >
                            {exp.title}
                          </h3>
                          <p
                            className="font-semibold"
                            style={{
                              fontSize: theme.typography.fontSize.base,
                              color: colors.accent,
                            }}
                          >
                            {exp.company}
                          </p>
                          <p
                            className="text-xs"
                            style={{
                              color: colors.mutedForeground,
                            }}
                          >
                            {exp.location}
                          </p>
                        </div>
                      </div>
                      <span
                        className="text-xs font-bold"
                        style={{ color: colors.primary }}
                      >
                        {exp.endDate ? `${exp.startDate} - ${exp.endDate}` : `${exp.startDate} - اکنون`}
                      </span>
                    </div>
                    <p
                      className="mb-3 mr-5 text-sm"
                      style={{
                        lineHeight: theme.typography.lineHeight.relaxed,
                      }}
                    >
                      {exp.description}
                    </p>
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="mr-5 flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="rounded border px-2 py-0.5 text-xs"
                            style={{
                              borderColor: colors.border,
                              color: colors.foreground,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div
        className="page-break-before mx-auto w-full max-w-4xl min-h-screen bg-white shadow-lg print:shadow-none sm:w-[210mm] sm:min-h-[297mm] print:w-[210mm] print:min-h-[297mm] p-4 sm:p-[15mm] print:p-[15mm] relative mt-4 print:mt-0"
        style={{
          fontFamily: theme.typography.fontFamily,
          color: colors.foreground,
        }}
      >
        <div className="flex gap-8">
          {/* Left Sidebar - Education */}
          <aside className="w-48 flex-shrink-0">
            <SectionTitleClassic title="تحصیلات" />
            <div className="space-y-4">
              {cvData.education.map((edu, index) => (
                <div key={index}>
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: theme.typography.fontSize.sm,
                      color: colors.primary,
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <p
                    className="text-xs font-semibold"
                    style={{
                      color: colors.accent,
                    }}
                  >
                    {edu.school}
                  </p>
                  <p
                    className="mt-1 text-xs"
                    style={{
                      color: colors.mutedForeground,
                    }}
                  >
                    {edu.startDate} - {edu.endDate || 'اکنون'}
                  </p>
                  {edu.gpa && (
                    <p
                      className="mt-1 text-xs font-semibold"
                      style={{
                        color: colors.primary,
                      }}
                    >
                      معدل: {edu.gpa}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Languages */}
            {cvData.languages && cvData.languages.length > 0 && (
              <div className="mt-8">
                <SectionTitleClassic title="زبان‌ها" />
                <div className="space-y-2">
                  {cvData.languages.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-xs" style={{ fontWeight: theme.typography.fontWeight.medium }}>
                        {lang.name}
                      </span>
                      <span
                        className="rounded px-2 py-0.5 text-xs"
                        style={{
                          backgroundColor: colors.muted,
                          color: colors.mutedForeground,
                        }}
                      >
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Interests */}
            {cvData.interests && cvData.interests.length > 0 && (
              <div className="mt-8">
                <SectionTitleClassic title="علایق" />
                <div className="flex flex-wrap gap-1">
                  {cvData.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="rounded border px-2 py-1 text-xs"
                      style={{
                        borderColor: colors.border,
                        color: colors.foreground,
                      }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>

          {/* Right Content - Projects */}
          <div className="flex-1">
            <SectionTitleClassic title="پروژه‌های برجسته" />
            <div className="space-y-4">
              {cvData.projects.map((project, index) => (
                <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                  <div className="mb-2 flex items-start gap-3">
                    <div
                      className="mt-2 h-2 w-2 flex-shrink-0"
                      style={{
                        backgroundColor: colors.primary,
                        borderRadius: theme.borderRadius.full,
                      }}
                    />
                    <div className="flex-1">
                      <h3
                        className="mb-1 font-bold"
                        style={{
                          fontSize: theme.typography.fontSize.base,
                          color: colors.primary,
                        }}
                      >
                        {project.name}
                      </h3>
                      <p
                        className="mb-2 text-sm"
                        style={{
                          lineHeight: theme.typography.lineHeight.relaxed,
                        }}
                      >
                        {project.description}
                      </p>
                      <div className="mb-2 flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="rounded border px-2 py-0.5 text-xs"
                            style={{
                              borderColor: colors.border,
                              color: colors.foreground,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {(project.url || project.github) && (
                        <div className="flex gap-4 text-xs">
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold hover:underline"
                              style={{ color: colors.accent }}
                            >
                              مشاهده پروژه
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold hover:underline"
                              style={{ color: colors.accent }}
                            >
                              کد منبع
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-12">
              <p className="text-[8px] text-gray-400">
                Made with ❤️ by{' '}
                <a
                  href="https://github.com/h3nrzi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600"
                >
                  Hossein Rezaei
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper components
interface ContactItemProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  href?: string;
}

function ContactItemClassic({ icon: Icon, text, href }: ContactItemProps) {
  const { colors } = useThemeStyles();
  const { theme } = useThemeStyles();

  const content = (
    <div className="flex items-center gap-2 text-sm">
      <Icon className="h-4 w-4 flex-shrink-0" style={{ color: colors.primary }} />
      <span className="break-all" style={{ color: colors.foreground }}>{text}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
        style={{ color: colors.accent }}
      >
        {content}
      </a>
    );
  }

  return content;
}

function SectionTitleClassic({ title }: { title: string }) {
  const { theme, colors } = useThemeStyles();

  return (
    <h2
      className="mb-4 border-b-2 pb-2"
      style={{
        fontSize: theme.typography.fontSize['2xl'],
        fontWeight: theme.typography.fontWeight.bold,
        color: colors.primary,
        borderColor: colors.primary,
      }}
      dir="rtl"
    >
      {title}
    </h2>
  );
}

