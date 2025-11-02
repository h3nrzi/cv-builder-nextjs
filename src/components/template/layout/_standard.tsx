'use client';
import { useCVData } from '@/hooks/useCVData';
import React from 'react';
import Avatar from '../../ui/avatar';
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useThemeStyles } from '@/provider/useTheme';

export default function Standard_template_component() {
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
        className="relative mx-auto min-h-screen w-full max-w-4xl bg-white p-4 shadow-lg sm:min-h-[297mm] sm:w-[210mm] sm:p-[15mm] print:min-h-[297mm] print:w-[210mm] print:p-[15mm] print:shadow-none"
        style={{
          fontFamily: theme.typography.fontFamily,
          color: colors.foreground,
        }}
      >
        {/* Header Section */}
        <header className="page-break-avoid mb-8 border-b-2 pb-6" style={{ marginBottom: theme.layout.sectionSpacing, borderColor: colors.primary }}>
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            {cvData.personal.profileImage && (
              <div
                className="h-32 w-32 flex-shrink-0 overflow-hidden border-4 border-solid shadow-lg"
                style={{
                  borderRadius: theme.borderRadius.full,
                  borderColor: colors.primary,
                }}
              >
                <Avatar src={cvData.personal.profileImage} />
              </div>
            )}
            <div className="flex-1 text-center sm:text-right">
              <h1
                className="mb-2"
                style={{
                  fontSize: theme.typography.fontSize['4xl'],
                  fontWeight: theme.typography.fontWeight.bold,
                  color: colors.primary,
                }}
              >
                {cvData.personal.name}
              </h1>
              <h2
                className="mb-4"
                style={{
                  fontSize: theme.typography.fontSize.xl,
                  fontWeight: theme.typography.fontWeight.medium,
                  color: colors.mutedForeground,
                }}
              >
                {cvData.personal.title}
              </h2>
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <ContactItem icon={Phone} text={cvData.personal.phone} />
                <ContactItem icon={Mail} text={cvData.personal.email} />
                <ContactItem icon={MapPin} text={cvData.personal.location} />
                {cvData.personal.website && (
                  <ContactItem
                    icon={Globe}
                    text={cvData.personal.website}
                    href={`https://${cvData.personal.website}`}
                  />
                )}
                {cvData.personal.github && (
                  <ContactItem
                    icon={Github}
                    text={cvData.personal.github}
                    href={`https://${cvData.personal.github}`}
                  />
                )}
                {cvData.personal.linkedin && (
                  <ContactItem
                    icon={Linkedin}
                    text={cvData.personal.linkedin}
                    href={`https://${cvData.personal.linkedin}`}
                  />
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Summary Section */}
        <section className="page-break-avoid" style={{ marginBottom: theme.layout.sectionSpacing }}>
          <SectionTitle title="خلاصه" />
          <div
            className="rounded-lg p-6"
            style={{
              padding: theme.layout.cardPadding,
              borderRadius: theme.borderRadius.lg,
              backgroundColor: colors.card,
              color: colors.cardForeground,
              boxShadow: theme.shadows.sm,
              borderLeft: `4px solid ${colors.primary}`,
            }}
          >
            <p style={{ lineHeight: theme.typography.lineHeight.relaxed }}>{cvData.summary}</p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="page-break-avoid" style={{ marginBottom: theme.layout.sectionSpacing }} dir="ltr">
          <SectionTitle title="مهارت‌ها" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cvData.skills.map((skillGroup, index) => (
              <div
                key={index}
                className="rounded-lg p-4"
                style={{
                  padding: theme.layout.cardPadding,
                  borderRadius: theme.borderRadius.lg,
                  backgroundColor: colors.card,
                  boxShadow: theme.shadows.sm,
                }}
              >
                <h3
                  className="mb-3"
                  style={{
                    fontSize: theme.typography.fontSize.lg,
                    fontWeight: theme.typography.fontWeight.semibold,
                    color: colors.primary,
                  }}
                >
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="mb-1 flex items-center justify-between">
                        <span
                          style={{
                            fontSize: theme.typography.fontSize.sm,
                            fontWeight: theme.typography.fontWeight.medium,
                          }}
                        >
                          {skill.name}
                        </span>
                        <span
                          style={{
                            fontSize: theme.typography.fontSize.xs,
                            color: colors.mutedForeground,
                          }}
                        >
                          {skill.level}/5
                        </span>
                      </div>
                      <div
                        className="h-2 w-full rounded-full"
                        style={{
                          backgroundColor: colors.muted,
                          borderRadius: theme.borderRadius.full,
                        }}
                      >
                        <div
                          className="h-full rounded-full transition-all duration-300"
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
        </section>
      </div>

      {/* Page 2 */}
      <div
        className="page-break-before mx-auto w-full max-w-4xl min-h-screen bg-white shadow-lg print:shadow-none sm:w-[210mm] sm:min-h-[297mm] print:w-[210mm] print:min-h-[297mm] p-4 sm:p-[15mm] print:p-[15mm] relative mt-4 print:mt-0"
        style={{
          fontFamily: theme.typography.fontFamily,
          color: colors.foreground,
        }}
      >
        {/* Experience Section */}
        <section className="page-break-avoid" style={{ marginBottom: theme.layout.sectionSpacing }}>
          <SectionTitle title="تجربه کاری" />
          <div className="space-y-6">
            {cvData.experience.map((exp, index) => (
              <div
                key={index}
                className="rounded-lg p-6"
                style={{
                  padding: theme.layout.cardPadding,
                  borderRadius: theme.borderRadius.lg,
                  backgroundColor: colors.card,
                  boxShadow: theme.shadows.sm,
                  borderLeft: `4px solid ${colors.accent}`,
                }}
              >
                <div className="mb-4 flex flex-col items-start justify-between gap-2 md:flex-row">
                  <div>
                    <h3
                      className="mb-1"
                      style={{
                        fontSize: theme.typography.fontSize.lg,
                        fontWeight: theme.typography.fontWeight.semibold,
                        color: colors.primary,
                      }}
                    >
                      {exp.title}
                    </h3>
                    <p
                      style={{
                        fontSize: theme.typography.fontSize.base,
                        fontWeight: theme.typography.fontWeight.medium,
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
                    className="rounded-full px-3 py-1 text-sm whitespace-nowrap"
                    style={{
                      backgroundColor: colors.muted,
                      color: colors.mutedForeground,
                      borderRadius: theme.borderRadius.full,
                    }}
                  >
                    {exp.endDate ? `${exp.startDate} - ${exp.endDate}` : `${exp.startDate} - اکنون`}
                  </div>
                </div>

                <p
                  className="mb-4"
                  style={{
                    lineHeight: theme.typography.lineHeight.normal,
                    color: colors.cardForeground,
                  }}
                >
                  {exp.description}
                </p>

                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4
                      className="mb-2"
                      style={{
                        fontSize: theme.typography.fontSize.sm,
                        fontWeight: theme.typography.fontWeight.semibold,
                        color: colors.primary,
                      }}
                    >
                      دستاوردها:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achieveIndex) => (
                        <li
                          key={achieveIndex}
                          style={{
                            fontSize: theme.typography.fontSize.sm,
                            lineHeight: theme.typography.lineHeight.normal,
                            listStyle: 'disc',
                            marginRight: '1.5rem',
                          }}
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div>
                    <h4
                      className="mb-2"
                      style={{
                        fontSize: theme.typography.fontSize.sm,
                        fontWeight: theme.typography.fontWeight.semibold,
                        color: colors.primary,
                      }}
                    >
                      تکنولوژی‌ها:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded px-2 py-1 text-xs"
                          style={{
                            backgroundColor: colors.accent + '20',
                            color: colors.accent,
                            borderRadius: theme.borderRadius.sm,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Page 3 */}
      <div
        className="page-break-before mx-auto w-full max-w-4xl min-h-screen bg-white shadow-lg print:shadow-none sm:w-[210mm] sm:min-h-[297mm] print:w-[210mm] print:min-h-[297mm] p-4 sm:p-[15mm] print:p-[15mm] relative mt-4 print:mt-0"
        style={{
          fontFamily: theme.typography.fontFamily,
          color: colors.foreground,
        }}
      >
        {/* Projects Section */}
        <section className="page-break-avoid" style={{ marginBottom: theme.layout.sectionSpacing }}>
          <SectionTitle title="پروژه‌های برجسته" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cvData.projects.map((project, index) => (
              <div
                key={index}
                className="rounded-lg p-6 transition-transform hover:scale-[1.02]"
                style={{
                  padding: theme.layout.cardPadding,
                  borderRadius: theme.borderRadius.lg,
                  backgroundColor: colors.card,
                  boxShadow: theme.shadows.sm,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <h3
                  className="mb-2"
                  style={{
                    fontSize: theme.typography.fontSize.lg,
                    fontWeight: theme.typography.fontWeight.semibold,
                    color: colors.primary,
                  }}
                >
                  {project.name}
                </h3>
                <p
                  className="mb-4"
                  style={{
                    fontSize: theme.typography.fontSize.sm,
                    lineHeight: theme.typography.lineHeight.normal,
                    color: colors.cardForeground,
                  }}
                >
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded px-2 py-1 text-xs"
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

                <div className="flex gap-4 text-sm">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:opacity-80"
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
                      className="underline underline-offset-4 hover:opacity-80"
                      style={{ color: colors.accent }}
                    >
                      کد منبع
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="page-break-avoid" style={{ marginBottom: theme.layout.sectionSpacing }}>
          <SectionTitle title="تحصیلات" />
          <div className="space-y-4">
            {cvData.education.map((edu, index) => (
              <div
                key={index}
                className="rounded-lg p-6"
                style={{
                  padding: theme.layout.cardPadding,
                  borderRadius: theme.borderRadius.lg,
                  backgroundColor: colors.card,
                  boxShadow: theme.shadows.sm,
                  borderTop: `3px solid ${colors.primary}`,
                }}
              >
                <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
                  <div>
                    <h3
                      style={{
                        fontSize: theme.typography.fontSize.lg,
                        fontWeight: theme.typography.fontWeight.semibold,
                        color: colors.primary,
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      style={{
                        fontSize: theme.typography.fontSize.base,
                        fontWeight: theme.typography.fontWeight.medium,
                        color: colors.accent,
                      }}
                    >
                      {edu.school}
                    </p>
                    <p
                      style={{
                        fontSize: theme.typography.fontSize.sm,
                        color: colors.mutedForeground,
                      }}
                    >
                      {edu.location}
                    </p>
                  </div>
                  <div className="text-left">
                    <div
                      className="mb-1 rounded-full px-3 py-1 text-sm"
                      style={{
                        backgroundColor: colors.muted,
                        color: colors.mutedForeground,
                        borderRadius: theme.borderRadius.full,
                      }}
                    >
                      {edu.startDate} / {edu.endDate || 'اکنون'}
                    </div>
                    {!edu.endDate && (
                      <div
                        className="rounded-full px-2 py-1 text-center text-xs"
                        style={{
                          backgroundColor: colors.accent + '20',
                          color: colors.accent,
                          borderRadius: theme.borderRadius.full,
                          fontSize: theme.typography.fontSize.xs,
                          fontWeight: theme.typography.fontWeight.medium,
                        }}
                      >
                        در حال تحصیل
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Sections */}
        {(cvData.languages || cvData.interests) && (
          <section className="page-break-avoid" style={{ marginBottom: theme.layout.sectionSpacing }}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Languages */}
              {cvData.languages && cvData.languages.length > 0 && (
                <div>
                  <SectionTitle title="زبان‌ها" />
                  <div
                    className="rounded-lg p-4"
                    style={{
                      padding: '1rem',
                      borderRadius: theme.borderRadius.lg,
                      backgroundColor: colors.card,
                      color: colors.cardForeground,
                      boxShadow: theme.shadows.sm,
                    }}
                  >
                    <div className="space-y-2">
                      {cvData.languages.map((lang, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span
                            style={{
                              fontSize: theme.typography.fontSize.sm,
                              fontWeight: theme.typography.fontWeight.medium,
                              color: colors.cardForeground,
                            }}
                          >
                            {lang.name}
                          </span>
                          <span
                            className="rounded px-2 py-1 text-xs"
                            style={{
                              fontSize: theme.typography.fontSize.xs,
                              color: colors.accent,
                              backgroundColor: colors.accent + '20',
                              borderRadius: theme.borderRadius.sm,
                              fontWeight: theme.typography.fontWeight.medium,
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

              {/* Interests */}
              {cvData.interests && cvData.interests.length > 0 && (
                <div>
                  <SectionTitle title="علایق" />
                  <div
                    className="rounded-lg p-4"
                    style={{
                      padding: '1rem',
                      borderRadius: theme.borderRadius.lg,
                      backgroundColor: colors.card,
                      color: colors.cardForeground,
                      boxShadow: theme.shadows.sm,
                    }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {cvData.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="rounded-full px-2 py-1 text-xs transition-colors hover:opacity-80"
                          style={{
                            backgroundColor: colors.muted,
                            color: colors.mutedForeground,
                            borderRadius: theme.borderRadius.full,
                            fontSize: theme.typography.fontSize.xs,
                            fontWeight: theme.typography.fontWeight.normal,
                            border: `1px solid ${colors.border}`,
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
          </section>
        )}

        {/* Footer */}
        <div className="relative">
          <div className="absolute bottom-2 left-2">
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
  );
}

// Helper components
interface ContactItemProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  href?: string;
}

function ContactItem({ icon: Icon, text, href }: ContactItemProps) {
  const { colors } = useThemeStyles();

  const content = (
    <div className="flex items-center gap-2">
      <div style={{ color: colors.accent }}>
        <Icon className="h-4 w-4" />
      </div>
      <span>{text}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 hover:opacity-80"
        style={{ color: colors.cardForeground }}
      >
        {content}
      </a>
    );
  }

  return content;
}

function SectionTitle({ title }: { title: string }) {
  const { theme, colors } = useThemeStyles();

  return (
    <h2
      className="mb-6"
      style={{
        fontSize: theme.typography.fontSize['2xl'],
        fontWeight: theme.typography.fontWeight.bold,
        color: colors.primary,
        marginBottom: theme.spacing.lg,
        borderBottom: `3px solid ${colors.primary}`,
        paddingBottom: '0.5rem',
      }}
      dir="rtl"
    >
      {title}
    </h2>
  );
}
