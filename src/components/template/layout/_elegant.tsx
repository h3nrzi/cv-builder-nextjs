'use client';
import { useCVData } from '@/hooks/useCVData';
import React from 'react';
import Avatar from '../../ui/avatar';
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useThemeStyles } from '@/provider/useTheme';

export default function Elegant_template_component() {
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
      {/* Single Page Elegant Layout */}
      <div
        className="relative mx-auto min-h-screen w-full max-w-4xl bg-white shadow-lg sm:w-[210mm] sm:p-[15mm] print:w-[210mm] print:p-[15mm] print:shadow-none"
        style={{
          fontFamily: theme.typography.fontFamily,
          color: colors.foreground,
        }}
      >
        {/* Elegant Header with Sidebar Design */}
        <div className="mb-8 flex flex-col gap-8 lg:flex-row" style={{ marginBottom: theme.layout.sectionSpacing }}>
          {/* Left Sidebar - Personal Info */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: colors.primary,
                borderRadius: theme.borderRadius.xl,
                boxShadow: theme.shadows.lg,
              }}
            >
              {cvData.personal.profileImage && (
                <div className="mb-6 flex justify-center">
                  <div
                    className="h-32 w-32 overflow-hidden border-4 border-white shadow-xl"
                    style={{
                      borderRadius: theme.borderRadius.full,
                    }}
                  >
                    <Avatar src={cvData.personal.profileImage} />
                  </div>
                </div>
              )}
              <div className="text-center lg:text-right text-white mb-6">
                <h1
                  className="mb-2"
                  style={{
                    fontSize: theme.typography.fontSize['2xl'],
                    fontWeight: theme.typography.fontWeight.bold,
                    color: 'white',
                  }}
                >
                  {cvData.personal.name}
                </h1>
                <h2
                  className="mb-6 opacity-90"
                  style={{
                    fontSize: theme.typography.fontSize.base,
                    fontWeight: theme.typography.fontWeight.medium,
                    color: 'white',
                  }}
                >
                  {cvData.personal.title}
                </h2>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <ContactItemElegant icon={Phone} text={cvData.personal.phone} />
                <ContactItemElegant icon={Mail} text={cvData.personal.email} />
                <ContactItemElegant icon={MapPin} text={cvData.personal.location} />
                {cvData.personal.website && (
                  <ContactItemElegant
                    icon={Globe}
                    text={cvData.personal.website}
                    href={`https://${cvData.personal.website}`}
                  />
                )}
                {cvData.personal.github && (
                  <ContactItemElegant
                    icon={Github}
                    text={cvData.personal.github}
                    href={`https://${cvData.personal.github}`}
                  />
                )}
                {cvData.personal.linkedin && (
                  <ContactItemElegant
                    icon={Linkedin}
                    text={cvData.personal.linkedin}
                    href={`https://${cvData.personal.linkedin}`}
                  />
                )}
              </div>
            </div>

            {/* Skills Section in Sidebar */}
            <div className="mt-6">
              <SectionTitleElegant title="مهارت‌ها" />
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: colors.card,
                  borderRadius: theme.borderRadius.lg,
                  border: `1px solid ${colors.border}`,
                }}
                dir="ltr"
              >
                {cvData.skills.map((skillGroup, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <h3
                      className="mb-2 text-sm font-semibold"
                      style={{
                        fontSize: theme.typography.fontSize.sm,
                        fontWeight: theme.typography.fontWeight.semibold,
                        color: colors.primary,
                      }}
                    >
                      {skillGroup.category}
                    </h3>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span style={{ fontWeight: theme.typography.fontWeight.medium }}>
                              {skill.name}
                            </span>
                            <span style={{ color: colors.mutedForeground }}>{skill.level}/5</span>
                          </div>
                          <div
                            className="h-1.5 w-full rounded-full"
                            style={{
                              backgroundColor: colors.muted,
                              borderRadius: theme.borderRadius.full,
                            }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${(skill.level / 5) * 100}%`,
                                backgroundColor: colors.accent,
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
            </div>

            {/* Languages & Interests in Sidebar */}
            {(cvData.languages || cvData.interests) && (
              <div className="mt-6 space-y-6">
                {cvData.languages && cvData.languages.length > 0 && (
                  <div>
                    <SectionTitleElegant title="زبان‌ها" />
                    <div
                      className="p-4 rounded-lg"
                      style={{
                        backgroundColor: colors.card,
                        borderRadius: theme.borderRadius.lg,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      <div className="space-y-2">
                        {cvData.languages.map((lang, index) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <span style={{ color: colors.cardForeground }}>{lang.name}</span>
                            <span
                              className="px-2 py-1 rounded text-xs"
                              style={{
                                backgroundColor: colors.accent + '20',
                                color: colors.accent,
                                borderRadius: theme.borderRadius.sm,
                              }}
                            >
                              {lang.level}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {cvData.interests && cvData.interests.length > 0 && (
                  <div>
                    <SectionTitleElegant title="علایق" />
                    <div
                      className="p-4 rounded-lg"
                      style={{
                        backgroundColor: colors.card,
                        borderRadius: theme.borderRadius.lg,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      <div className="flex flex-wrap gap-2">
                        {cvData.interests.map((interest, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 rounded text-xs"
                            style={{
                              backgroundColor: colors.muted,
                              color: colors.mutedForeground,
                              borderRadius: theme.borderRadius.sm,
                            }}
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 space-y-8">
            {/* Summary Section */}
            <section className="page-break-avoid">
              <SectionTitleElegant title="خلاصه" />
              <div
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: colors.card,
                  borderRadius: theme.borderRadius.lg,
                  borderRight: `4px solid ${colors.primary}`,
                  boxShadow: theme.shadows.sm,
                }}
              >
                <p style={{ lineHeight: theme.typography.lineHeight.relaxed }}>{cvData.summary}</p>
              </div>
            </section>

            {/* Experience Section */}
            <section className="page-break-avoid">
              <SectionTitleElegant title="تجربه کاری" />
              <div className="space-y-6">
                {cvData.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-6"
                    style={{
                      borderRight: `3px solid ${colors.primary}`,
                    }}
                  >
                    <div
                      className="absolute -right-3 top-0 h-6 w-6 rounded-full"
                      style={{
                        backgroundColor: colors.primary,
                        border: `3px solid white`,
                      }}
                    />
                    <div
                      className="rounded-lg p-6"
                      style={{
                        backgroundColor: colors.card,
                        borderRadius: theme.borderRadius.lg,
                        boxShadow: theme.shadows.sm,
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
                            className="mb-1 font-semibold"
                            style={{
                              fontSize: theme.typography.fontSize.base,
                              color: colors.accent,
                            }}
                          >
                            {exp.company}
                          </p>
                          <p
                            className="text-sm"
                            style={{
                              color: colors.mutedForeground,
                            }}
                          >
                            {exp.location}
                          </p>
                        </div>
                        <div
                          className="px-3 py-1 rounded text-sm font-medium"
                          style={{
                            backgroundColor: colors.primary + '15',
                            color: colors.primary,
                            borderRadius: theme.borderRadius.md,
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
                            className="mb-2 font-semibold"
                            style={{
                              fontSize: theme.typography.fontSize.sm,
                              color: colors.primary,
                            }}
                          >
                            دستاوردها:
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achieveIndex) => (
                              <li
                                key={achieveIndex}
                                className="flex items-start gap-2 text-sm"
                                style={{
                                  lineHeight: theme.typography.lineHeight.relaxed,
                                }}
                              >
                                <span style={{ color: colors.accent }}>•</span>
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
                              className="px-2 py-1 rounded text-xs font-medium"
                              style={{
                                backgroundColor: colors.primary,
                                color: 'white',
                                borderRadius: theme.borderRadius.sm,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            {cvData.projects && cvData.projects.length > 0 && (
              <section className="page-break-avoid">
                <SectionTitleElegant title="پروژه‌های برجسته" />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {cvData.projects.map((project, index) => (
                    <div
                      key={index}
                      className="rounded-lg p-5 transition-all hover:shadow-lg"
                      style={{
                        backgroundColor: colors.card,
                        borderRadius: theme.borderRadius.lg,
                        border: `1px solid ${colors.border}`,
                        boxShadow: theme.shadows.sm,
                      }}
                    >
                      <h3
                        className="mb-2 font-bold"
                        style={{
                          fontSize: theme.typography.fontSize.lg,
                          color: colors.primary,
                        }}
                      >
                        {project.name}
                      </h3>
                      <p
                        className="mb-3 text-sm"
                        style={{
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
                            className="px-2 py-1 rounded text-xs"
                            style={{
                              backgroundColor: colors.muted,
                              color: colors.mutedForeground,
                              borderRadius: theme.borderRadius.sm,
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
                            className="font-semibold hover:opacity-80"
                            style={{ color: colors.accent }}
                          >
                            مشاهده →
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:opacity-80"
                            style={{ color: colors.accent }}
                          >
                            کد منبع →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Education Section */}
            <section className="page-break-avoid">
              <SectionTitleElegant title="تحصیلات" />
              <div className="space-y-4">
                {cvData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="rounded-lg p-5"
                    style={{
                      backgroundColor: colors.card,
                      borderRadius: theme.borderRadius.lg,
                      borderTop: `3px solid ${colors.accent}`,
                      boxShadow: theme.shadows.sm,
                    }}
                  >
                    <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
                      <div>
                        <h3
                          className="font-bold mb-1"
                          style={{
                            fontSize: theme.typography.fontSize.lg,
                            color: colors.primary,
                          }}
                        >
                          {edu.degree}
                        </h3>
                        <p
                          className="font-semibold mb-1"
                          style={{
                            fontSize: theme.typography.fontSize.base,
                            color: colors.accent,
                          }}
                        >
                          {edu.school}
                        </p>
                        <p
                          className="text-sm"
                          style={{
                            color: colors.mutedForeground,
                          }}
                        >
                          {edu.location}
                        </p>
                      </div>
                      <div
                        className="px-3 py-1 rounded text-sm font-medium"
                        style={{
                          backgroundColor: colors.accent + '20',
                          color: colors.accent,
                          borderRadius: theme.borderRadius.md,
                        }}
                      >
                        {edu.startDate} - {edu.endDate || 'اکنون'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
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
interface ContactItemElegantProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  href?: string;
}

function ContactItemElegant({ icon: Icon, text, href }: ContactItemElegantProps) {
  const content = (
    <div className="flex items-center gap-3 text-white">
      <Icon className="h-4 w-4 flex-shrink-0" />
      <span className="text-sm">{text}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        {content}
      </a>
    );
  }

  return content;
}

function SectionTitleElegant({ title }: { title: string }) {
  const { theme, colors } = useThemeStyles();

  return (
    <h2
      className="mb-4 font-bold"
      style={{
        fontSize: theme.typography.fontSize.xl,
        fontWeight: theme.typography.fontWeight.bold,
        color: colors.primary,
        marginBottom: theme.spacing.md,
        position: 'relative',
        paddingBottom: '0.5rem',
      }}
      dir="rtl"
    >
      <span
        className="absolute bottom-0 right-0 h-1 w-16"
        style={{
          backgroundColor: colors.primary,
          borderRadius: theme.borderRadius.full,
        }}
      />
      {title}
    </h2>
  );
}

