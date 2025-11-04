'use client';
import { useCVData } from '@/hooks/useCVData';
import React from 'react';
import Avatar from '../../ui/avatar';
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useThemeStyles } from '@/provider/useTheme';

export default function Modern_template_component() {
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
      {/* Single Page Layout */}
      <div
        className="relative mx-auto min-h-screen w-full max-w-4xl bg-white shadow-lg sm:w-[210mm] sm:p-[15mm] print:w-[210mm] print:p-[15mm] print:shadow-none"
        style={{
          fontFamily: theme.typography.fontFamily,
          color: colors.foreground,
        }}
      >
        {/* Modern Header with Gradient */}
        <header 
          className="page-break-avoid mb-8 p-6 relative"
          style={{ 
            marginBottom: theme.layout.sectionSpacing,
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
            borderRadius: theme.borderRadius['2xl'],
            boxShadow: theme.shadows.lg,
          }}
        >
          <div className="flex flex-col items-center gap-6 sm:flex-row text-white">
            {cvData.personal.profileImage && (
              <div
                className="h-36 w-36 flex-shrink-0 overflow-hidden border-4 border-white shadow-xl"
                style={{
                  borderRadius: theme.borderRadius.full,
                }}
              >
                <Avatar src={cvData.personal.profileImage} />
              </div>
            )}
            <div className="flex-1 text-center sm:text-right">
              <h1
                className="mb-2 text-white"
                style={{
                  fontSize: theme.typography.fontSize['4xl'],
                  fontWeight: theme.typography.fontWeight.bold,
                }}
              >
                {cvData.personal.name}
              </h1>
              <h2
                className="mb-4 text-white opacity-90"
                style={{
                  fontSize: theme.typography.fontSize.xl,
                  fontWeight: theme.typography.fontWeight.medium,
                }}
              >
                {cvData.personal.title}
              </h2>
              <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-3">
                <ContactItemModern icon={Phone} text={cvData.personal.phone} />
                <ContactItemModern icon={Mail} text={cvData.personal.email} />
                <ContactItemModern icon={MapPin} text={cvData.personal.location} />
                {cvData.personal.website && (
                  <ContactItemModern
                    icon={Globe}
                    text={cvData.personal.website}
                    href={`https://${cvData.personal.website}`}
                  />
                )}
                {cvData.personal.github && (
                  <ContactItemModern
                    icon={Github}
                    text={cvData.personal.github}
                    href={`https://${cvData.personal.github}`}
                  />
                )}
                {cvData.personal.linkedin && (
                  <ContactItemModern
                    icon={Linkedin}
                    text={cvData.personal.linkedin}
                    href={`https://${cvData.personal.linkedin}`}
                  />
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Summary Section */}
            <section className="page-break-avoid">
              <SectionTitleModern title="خلاصه" />
              <div
                className="rounded-lg p-6 backdrop-blur-sm"
                style={{
                  backgroundColor: colors.card + '80',
                  borderRadius: theme.borderRadius.xl,
                  border: `2px solid ${colors.primary}20`,
                }}
              >
                <p style={{ lineHeight: theme.typography.lineHeight.relaxed }}>{cvData.summary}</p>
              </div>
            </section>

            {/* Experience Section */}
            <section className="page-break-avoid">
              <SectionTitleModern title="تجربه کاری" />
              <div className="space-y-6">
                {cvData.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="rounded-lg p-6 group hover:shadow-lg transition-all duration-300"
                    style={{
                      backgroundColor: colors.card,
                      borderRadius: theme.borderRadius.xl,
                      border: `2px solid ${colors.border}`,
                      borderTop: `4px solid ${colors.accent}`,
                    }}
                  >
                    <div className="mb-4 flex flex-col items-start justify-between gap-2 md:flex-row">
                      <div>
                        <h3
                          className="mb-1"
                          style={{
                            fontSize: theme.typography.fontSize.lg,
                            fontWeight: theme.typography.fontWeight.bold,
                            color: colors.primary,
                          }}
                        >
                          {exp.title}
                        </h3>
                        <p
                          style={{
                            fontSize: theme.typography.fontSize.base,
                            fontWeight: theme.typography.fontWeight.semibold,
                            color: colors.accent,
                          }}
                        >
                          {exp.company}
                        </p>
                        <p
                          style={{
                            fontSize: theme.typography.fontSize.sm,
                            color: colors.mutedForeground,
                          }}
                        >
                          {exp.location}
                        </p>
                      </div>
                      <div
                        className="rounded-lg px-4 py-2 text-sm font-semibold"
                        style={{
                          backgroundColor: colors.primary + '15',
                          color: colors.primary,
                          borderRadius: theme.borderRadius.lg,
                        }}
                      >
                        {exp.endDate ? `${exp.startDate} - ${exp.endDate}` : `${exp.startDate} - اکنون`}
                      </div>
                    </div>

                    <p
                      className="mb-4"
                      style={{
                        lineHeight: theme.typography.lineHeight.relaxed,
                        color: colors.cardForeground,
                      }}
                    >
                      {exp.description}
                    </p>

                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4
                          className="mb-2 font-bold"
                          style={{
                            fontSize: theme.typography.fontSize.sm,
                            color: colors.primary,
                          }}
                        >
                          دستاوردها:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achieveIndex) => (
                            <li
                              key={achieveIndex}
                              className="flex items-start gap-2"
                              style={{
                                fontSize: theme.typography.fontSize.sm,
                                lineHeight: theme.typography.lineHeight.relaxed,
                              }}
                            >
                              <span style={{ color: colors.accent, fontWeight: 'bold' }}>→</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="rounded-lg px-3 py-1 text-xs font-medium"
                            style={{
                              backgroundColor: colors.primary,
                              color: 'white',
                              borderRadius: theme.borderRadius.md,
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

            {/* Projects Section */}
            <section className="page-break-avoid">
              <SectionTitleModern title="پروژه‌های برجسته" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {cvData.projects.map((project, index) => (
                  <div
                    key={index}
                    className="rounded-lg p-4 hover:shadow-xl transition-all duration-300 cursor-pointer"
                    style={{
                      backgroundColor: colors.card,
                      borderRadius: theme.borderRadius.xl,
                      border: `2px solid ${colors.border}`,
                    }}
                  >
                    <h3
                      className="mb-2"
                      style={{
                        fontSize: theme.typography.fontSize.lg,
                        fontWeight: theme.typography.fontWeight.bold,
                        color: colors.primary,
                      }}
                    >
                      {project.name}
                    </h3>
                    <p
                      className="mb-3"
                      style={{
                        fontSize: theme.typography.fontSize.sm,
                        lineHeight: theme.typography.lineHeight.relaxed,
                        color: colors.cardForeground,
                      }}
                    >
                      {project.description}
                    </p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded px-2 py-1 text-xs"
                          style={{
                            backgroundColor: colors.muted,
                            color: colors.mutedForeground,
                            borderRadius: theme.borderRadius.md,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 text-xs">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline-offset-4 hover:opacity-80"
                          style={{ color: colors.accent }}
                        >
                          مشاهده ←
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline-offset-4 hover:opacity-80"
                          style={{ color: colors.accent }}
                        >
                          کد ←
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Skills Section */}
            <section className="page-break-avoid">
              <SectionTitleModern title="مهارت‌ها" />
              <div
                className="rounded-lg p-4"
                dir="ltr"
                style={{
                  backgroundColor: colors.card,
                  borderRadius: theme.borderRadius.xl,
                  border: `2px solid ${colors.primary}20`,
                }}
              >
                {cvData.skills.map((skillGroup, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <h3
                      className="mb-3 font-bold"
                      style={{
                        fontSize: theme.typography.fontSize.base,
                        color: colors.primary,
                      }}
                    >
                      {skillGroup.category}
                    </h3>
                    <div className="space-y-3">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span style={{ fontWeight: theme.typography.fontWeight.medium }}>
                              {skill.name}
                            </span>
                            <span style={{ color: colors.mutedForeground }}>{skill.level}/5</span>
                          </div>
                          <div
                            className="h-2 w-full rounded-full overflow-hidden"
                            style={{
                              backgroundColor: colors.muted,
                              borderRadius: theme.borderRadius.full,
                            }}
                          >
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${(skill.level / 5) * 100}%`,
                                background: `linear-gradient(90deg, ${colors.accent} 0%, ${colors.primary} 100%)`,
                                borderRadius: theme.borderRadius.full,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="page-break-avoid">
              <SectionTitleModern title="تحصیلات" />
              <div className="space-y-4">
                {cvData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="rounded-lg p-4"
                    style={{
                      backgroundColor: colors.card,
                      borderRadius: theme.borderRadius.xl,
                      borderRight: `4px solid ${colors.primary}`,
                    }}
                  >
                    <h3
                      className="font-bold mb-1"
                      style={{
                        fontSize: theme.typography.fontSize.base,
                        color: colors.primary,
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      className="font-semibold mb-1"
                      style={{
                        fontSize: theme.typography.fontSize.sm,
                        color: colors.accent,
                      }}
                    >
                      {edu.school}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        color: colors.mutedForeground,
                      }}
                    >
                      {edu.location}
                    </p>
                    <p
                      className="mt-2 text-xs font-semibold"
                      style={{
                        color: colors.primary,
                      }}
                    >
                      {edu.startDate} - {edu.endDate || 'اکنون'}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            {cvData.languages && cvData.languages.length > 0 && (
              <section className="page-break-avoid">
                <SectionTitleModern title="زبان‌ها" />
                <div
                  className="rounded-lg p-4"
                  style={{
                    backgroundColor: colors.card,
                    borderRadius: theme.borderRadius.xl,
                  }}
                >
                  <div className="space-y-3">
                    {cvData.languages.map((lang, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span
                          className="font-semibold"
                          style={{
                            fontSize: theme.typography.fontSize.sm,
                            color: colors.cardForeground,
                          }}
                        >
                          {lang.name}
                        </span>
                        <span
                          className="rounded-lg px-3 py-1 text-xs font-bold"
                          style={{
                            backgroundColor: colors.accent,
                            color: 'white',
                            borderRadius: theme.borderRadius.md,
                          }}
                        >
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Interests */}
            {cvData.interests && cvData.interests.length > 0 && (
              <section className="page-break-avoid">
                <SectionTitleModern title="علایق" />
                <div
                  className="rounded-lg p-4"
                  style={{
                    backgroundColor: colors.card,
                    borderRadius: theme.borderRadius.xl,
                  }}
                >
                  <div className="flex flex-wrap gap-2">
                    {cvData.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="rounded-lg px-3 py-1 text-xs font-medium"
                        style={{
                          backgroundColor: colors.primary + '15',
                          color: colors.primary,
                          borderRadius: theme.borderRadius.md,
                        }}
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
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
  );
}

// Helper components
interface ContactItemProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  href?: string;
}

function ContactItemModern({ icon: Icon, text, href }: ContactItemProps) {
  const content = (
    <div className="flex items-center gap-2 text-white">
      <Icon className="h-4 w-4" />
      <span>{text}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:opacity-90"
      >
        {content}
      </a>
    );
  }

  return content;
}

function SectionTitleModern({ title }: { title: string }) {
  const { theme, colors } = useThemeStyles();

  return (
    <div className="mb-4 flex items-center gap-3">
      <div
        className="h-1 w-12"
        style={{
          background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
          borderRadius: theme.borderRadius.full,
        }}
      />
      <h2
        className="font-bold"
        style={{
          fontSize: theme.typography.fontSize['2xl'],
          color: colors.primary,
        }}
        dir="rtl"
      >
        {title}
      </h2>
    </div>
  );
}

