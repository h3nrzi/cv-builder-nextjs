'use client';
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { useThemeStyles } from '@/hooks/useTheme';
import { CVData } from '@/types/theme';
import { FooterBranding } from '@/components/FooterBranding';

interface ThemedCVProps {
  data: CVData;
  className?: string;
}

export function ThemedCV({ data, className = '' }: ThemedCVProps) {
  const { theme, colors } = useThemeStyles();

  return (
    <div
      className={`cv-gradient-bg min-h-screen ${className}`}
      style={{
        fontFamily: theme.typography.fontFamily,
        color: colors.foreground,
        backgroundColor: colors.background,
      }}
      dir="rtl"
    >
      <div
        className="mx-auto px-4 py-8"
        style={{
          maxWidth: theme.layout.maxWidth,
          padding: theme.layout.containerPadding,
        }}
      >
        {/* Header Section */}
        <header
          className="cv-header-minimal page-break-avoid mb-8"
          style={{ marginBottom: theme.layout.sectionSpacing }}
        >
          <div className="flex flex-col items-center gap-6 md:flex-row">
            {data.personal.profileImage && (
              <div
                className="h-32 w-32 overflow-hidden border-4 border-solid"
                style={{
                  borderRadius: theme.borderRadius.full,
                  borderColor: colors.primary,
                }}
              >
                <img
                  src={data.personal.profileImage}
                  alt={data.personal.name}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className="flex-1 text-center md:text-right">
              <h1
                className="mb-2"
                style={{
                  fontSize: theme.typography.fontSize['4xl'],
                  fontWeight: theme.typography.fontWeight.bold,
                  color: colors.primary,
                }}
              >
                {data.personal.name}
              </h1>
              <h2
                className="mb-4"
                style={{
                  fontSize: theme.typography.fontSize.xl,
                  fontWeight: theme.typography.fontWeight.medium,
                  color: colors.mutedForeground,
                }}
              >
                {data.personal.title}
              </h2>
              <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
                <ContactItem icon={Phone} text={data.personal.phone} />
                <ContactItem icon={Mail} text={data.personal.email} />
                <ContactItem icon={MapPin} text={data.personal.location} />
                {data.personal.website && (
                  <ContactItem
                    icon={Globe}
                    text={data.personal.website}
                    href={`https://${data.personal.website}`}
                  />
                )}
                {data.personal.github && (
                  <ContactItem
                    icon={Github}
                    text={data.personal.github}
                    href={`https://${data.personal.github}`}
                  />
                )}
                {data.personal.linkedin && (
                  <ContactItem
                    icon={Linkedin}
                    text={data.personal.linkedin}
                    href={`https://${data.personal.linkedin}`}
                  />
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Summary Section */}
        <section className="page-break-avoid" style={{ marginBottom: theme.layout.sectionSpacing }}>
          {/* <SectionTitle title="خلاصه" /> */}
          <div
            className="cv-section-card rounded-lg p-6"
            style={{
              padding: theme.layout.cardPadding,
              borderRadius: theme.borderRadius.lg,
              backgroundColor: colors.card,
              color: colors.cardForeground,
              boxShadow: theme.shadows.sm,
            }}
          >
            <p style={{ lineHeight: theme.typography.lineHeight.relaxed }}>{data.summary}</p>
          </div>
        </section>

        {/* Education Section */}
        <section className="page-break-avoid" style={{ marginBottom: theme.layout.sectionSpacing }}>
          <SectionTitle title="تحصیلات" />
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div
                key={index}
                className="cv-section-card rounded-lg p-6"
                style={{
                  padding: theme.layout.cardPadding,
                  borderRadius: theme.borderRadius.lg,
                  backgroundColor: colors.card,
                  boxShadow: theme.shadows.sm,
                }}
              >
                <div className="flex flex-col items-start justify-between gap-2 md:flex-row">
                  <div>
                    <h3
                      className="cv-text-emphasis"
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
                    {/* {edu.gpa && (
                      <p
                        style={{
                          fontSize: theme.typography.fontSize.sm,
                          fontWeight: theme.typography.fontWeight.medium,
                          color: colors.accent,
                        }}
                      >
                        معدل: {edu.gpa}
                      </p>
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Sections */}
        {(data.languages || data.interests) && (
          <section
            className="page-break-avoid"
            style={{ marginBottom: theme.layout.sectionSpacing }}
          >
            <div className="grid grid-cols-1 gap-6">
              {/* Languages */}
              {data.languages && (
                <div>
                  <SectionTitle title="زبان‌ها" />
                  <div
                    className="cv-section-card rounded-lg p-6"
                    style={{
                      padding: theme.layout.cardPadding,
                      borderRadius: theme.borderRadius.lg,
                      backgroundColor: colors.card,
                      color: colors.cardForeground,
                      boxShadow: theme.shadows.sm,
                    }}
                  >
                    <div className="space-y-3">
                      {data.languages.map((lang, index) => (
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
              {data.interests && (
                <div>
                  <SectionTitle title="علایق" />
                  <div
                    className="cv-section-card rounded-lg p-6"
                    style={{
                      padding: theme.layout.cardPadding,
                      borderRadius: theme.borderRadius.lg,
                      backgroundColor: colors.card,
                      color: colors.cardForeground,
                      boxShadow: theme.shadows.sm,
                    }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {data.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="rounded-full px-3 py-2 text-sm transition-colors hover:opacity-80"
                          style={{
                            backgroundColor: colors.muted,
                            color: colors.mutedForeground,
                            borderRadius: theme.borderRadius.full,
                            fontSize: theme.typography.fontSize.sm,
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

        {/* Skills Section */}
        <section
          className="page-break-before page-break-avoid"
          style={{ marginBottom: theme.layout.sectionSpacing }}
        >
          <SectionTitle title="مهارت‌ها" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.skills.map((skillGroup, index) => (
              <div
                key={index}
                className="cv-section-card rounded-lg p-6"
                style={{
                  padding: theme.layout.cardPadding,
                  borderRadius: theme.borderRadius.lg,
                  backgroundColor: colors.card,
                  boxShadow: theme.shadows.sm,
                }}
              >
                <h3
                  className="mb-4"
                  style={{
                    fontSize: theme.typography.fontSize.lg,
                    fontWeight: theme.typography.fontWeight.semibold,
                    color: colors.primary,
                  }}
                >
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
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
                          className="cv-skill-progress h-full rounded-full transition-all duration-300"
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

        {/* Experience Section */}
        <section
          className="page-break-before page-break-avoid"
          style={{ marginBottom: theme.layout.sectionSpacing }}
        >
          <SectionTitle title="تجربه کاری" />
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div
                key={index}
                className="cv-section-card rounded-lg p-6"
                style={{
                  padding: theme.layout.cardPadding,
                  borderRadius: theme.borderRadius.lg,
                  backgroundColor: colors.card,
                  boxShadow: theme.shadows.sm,
                }}
              >
                <div className="mb-4 flex flex-col items-start justify-between gap-2 md:flex-row">
                  <div>
                    <h3
                      className="cv-text-emphasis mb-1"
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
                    className="rounded-full px-3 py-1 text-sm"
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

                {exp.achievements && (
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
                          className="cv-list-item"
                          style={{
                            fontSize: theme.typography.fontSize.sm,
                            lineHeight: theme.typography.lineHeight.normal,
                          }}
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.technologies && (
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

        {/* Projects Section */}
        <section
          className="page-break-before page-break-avoid"
          style={{ marginBottom: theme.layout.sectionSpacing }}
        >
          <SectionTitle title="پروژه‌های برجسته" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="cv-section-card rounded-lg p-6"
                style={{
                  padding: theme.layout.cardPadding,
                  borderRadius: theme.borderRadius.lg,
                  backgroundColor: colors.card,
                  boxShadow: theme.shadows.sm,
                }}
              >
                <h3
                  className="cv-text-emphasis mb-2"
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
                      className="cv-link"
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
                      className="cv-link"
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
        {/* <FooterBranding /> */}
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
        className="cv-link"
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
      className="cv-section-title mb-6"
      style={{
        fontSize: theme.typography.fontSize['2xl'],
        fontWeight: theme.typography.fontWeight.bold,
        color: colors.primary,
        marginBottom: theme.spacing.lg,
      }}
    >
      {title}
    </h2>
  );
}
