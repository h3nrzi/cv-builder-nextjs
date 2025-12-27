'use client';
import { useCVData } from '@/hooks/useCVData';
import React from 'react';
import Avatar from '../../ui/avatar';
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useThemeStyles } from '@/provider/useTheme';

export default function Creative_template_component() {
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
        {/* Creative Header with Side Accent */}
        <header className="relative mb-10" style={{ marginBottom: theme.layout.sectionSpacing }}>
          <div className="pr-6">
            <div className="flex flex-col gap-6 sm:flex-row">
              {cvData.personal.profileImage && (
                <div className="flex-shrink-0">
                  <div
                    className="h-28 w-28 overflow-hidden border-4 border-solid shadow-xl"
                    style={{
                      borderRadius: theme.borderRadius['2xl'],
                    }}
                  >
                    <Avatar src={cvData.personal.profileImage} />
                  </div>
                </div>
              )}
              <div className="flex-1">
                <h1
                  className="mb-3"
                  style={{
                    fontSize: theme.typography.fontSize['4xl'],
                    fontWeight: theme.typography.fontWeight.bold,
                    color: colors.primary,
                    lineHeight: '1.1',
                  }}
                >
                  {cvData.personal.name}
                </h1>
                <h2
                  className="relative mb-6 inline-block pr-4"
                  style={{
                    fontSize: theme.typography.fontSize.lg,
                    fontWeight: theme.typography.fontWeight.normal,
                    color: colors.mutedForeground,
                  }}
                >
                  <span
                    className="absolute right-0 top-1/2 h-1 w-full -translate-y-1/2"
                    style={{
                      backgroundColor: colors.accent,
                      opacity: 0.3,
                      transform: 'translateY(-50%)',
                    }}
                  />
                  <span className="relative">{cvData.personal.title}</span>
                </h2>
                <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                  <ContactItemCreative icon={Phone} text={cvData.personal.phone} />
                  <ContactItemCreative icon={Mail} text={cvData.personal.email} />
                  <ContactItemCreative icon={MapPin} text={cvData.personal.location} />
                  {cvData.personal.website && (
                    <ContactItemCreative
                      icon={Globe}
                      text={cvData.personal.website}
                      href={`https://${cvData.personal.website}`}
                    />
                  )}
                  {cvData.personal.github && (
                    <ContactItemCreative
                      icon={Github}
                      text={cvData.personal.github}
                      href={`https://${cvData.personal.github}`}
                    />
                  )}
                  {cvData.personal.linkedin && (
                    <ContactItemCreative
                      icon={Linkedin}
                      text={cvData.personal.linkedin}
                      href={`https://${cvData.personal.linkedin}`}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Summary Section with Icon */}
        <section className="mb-8" style={{ marginBottom: theme.layout.sectionSpacing }}>
          <div className="mb-4 flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{
                backgroundColor: colors.primary + '15',
                color: colors.primary,
              }}
            >
              <span className="text-xl">📄</span>
            </div>
            <h2
              style={{
                fontSize: theme.typography.fontSize['2xl'],
                fontWeight: theme.typography.fontWeight.bold,
                color: colors.primary,
              }}
            >
              خلاصه
            </h2>
          </div>
          <div
            className="relative rounded-lg p-6 pr-12"
            style={{
              padding: theme.layout.cardPadding,
              borderRadius: theme.borderRadius.lg,
              backgroundColor: colors.card,
              borderLeft: `4px solid ${colors.accent}`,
            }}
          >
            <p style={{ lineHeight: theme.typography.lineHeight.relaxed }}>{cvData.summary}</p>
          </div>
        </section>

        {/* Skills Section - Creative Layout */}
        <section className="mb-8" style={{ marginBottom: theme.layout.sectionSpacing }}>
          <div className="mb-6 flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{
                backgroundColor: colors.accent + '15',
                color: colors.accent,
              }}
            >
              <span className="text-xl">⚡</span>
            </div>
            <h2
              style={{
                fontSize: theme.typography.fontSize['2xl'],
                fontWeight: theme.typography.fontWeight.bold,
                color: colors.primary,
              }}
            >
              مهارت‌ها
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cvData.skills.map((skillGroup, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg p-5"
                style={{
                  padding: theme.layout.cardPadding,
                  borderRadius: theme.borderRadius.lg,
                  backgroundColor: colors.card,
                  border: `2px solid ${colors.border}`,
                }}
              >
                <div
                  className="absolute left-0 top-0 h-full w-1 transition-all group-hover:w-2"
                  style={{
                    backgroundColor: colors.accent,
                  }}
                />
                <h3
                  className="mb-4 pr-2"
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
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span
                        style={{
                          fontSize: theme.typography.fontSize.sm,
                          fontWeight: theme.typography.fontWeight.medium,
                        }}
                      >
                        {skill.name}
                      </span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="h-2 w-2 rounded-full"
                            style={{
                              backgroundColor: i < skill.level ? colors.accent : colors.muted,
                              borderRadius: theme.borderRadius.full,
                            }}
                          />
                        ))}
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
        className="page-break-before relative mx-auto mt-4 min-h-screen w-full max-w-4xl bg-white p-4 shadow-lg sm:min-h-[297mm] sm:w-[210mm] sm:p-[15mm] print:mt-0 print:min-h-[297mm] print:w-[210mm] print:p-[15mm] print:shadow-none"
        style={{
          fontFamily: theme.typography.fontFamily,
          color: colors.foreground,
        }}
      >
        {/* Experience Section */}
        <section className="mb-8" style={{ marginBottom: theme.layout.sectionSpacing }}>
          <div className="mb-6 flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{
                backgroundColor: colors.primary + '15',
                color: colors.primary,
              }}
            >
              <span className="text-xl">💼</span>
            </div>
            <h2
              style={{
                fontSize: theme.typography.fontSize['2xl'],
                fontWeight: theme.typography.fontWeight.bold,
                color: colors.primary,
              }}
            >
              تجربه کاری
            </h2>
          </div>
          <div className="space-y-6">
            {cvData.experience.map((exp, index) => (
              <div
                key={index}
                className="relative rounded-lg p-6 pl-10"
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
                    className="rounded-full px-4 py-1.5 text-sm font-medium"
                    style={{
                      backgroundColor: colors.primary + '15',
                      color: colors.primary,
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
                      className="mb-2 text-sm font-semibold"
                      style={{
                        fontSize: theme.typography.fontSize.sm,
                        fontWeight: theme.typography.fontWeight.semibold,
                        color: colors.primary,
                      }}
                    >
                      دستاوردها:
                    </h4>
                    <ul className="space-y-1 pr-4">
                      {exp.achievements.map((achievement, achieveIndex) => (
                        <li
                          key={achieveIndex}
                          className="flex items-start gap-2"
                          style={{
                            fontSize: theme.typography.fontSize.sm,
                            lineHeight: theme.typography.lineHeight.normal,
                          }}
                        >
                          <span style={{ color: colors.accent }}>▸</span>
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
                        className="rounded-full px-3 py-1 text-xs font-medium"
                        style={{
                          backgroundColor: colors.accent + '20',
                          color: colors.accent,
                          borderRadius: theme.borderRadius.full,
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

      {/* Page 3 */}
      <div
        className="page-break-before relative mx-auto mt-4 min-h-screen w-full max-w-4xl bg-white p-4 shadow-lg sm:min-h-[297mm] sm:w-[210mm] sm:p-[15mm] print:mt-0 print:min-h-[297mm] print:w-[210mm] print:p-[15mm] print:shadow-none"
        style={{
          fontFamily: theme.typography.fontFamily,
          color: colors.foreground,
        }}
      >
        {/* Projects Section */}
        {cvData.projects && cvData.projects.length > 0 && (
          <section className="mb-8" style={{ marginBottom: theme.layout.sectionSpacing }}>
            <div className="mb-6 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{
                  backgroundColor: colors.accent + '15',
                  color: colors.accent,
                }}
              >
                <span className="text-xl">🚀</span>
              </div>
              <h2
                style={{
                  fontSize: theme.typography.fontSize['2xl'],
                  fontWeight: theme.typography.fontWeight.bold,
                  color: colors.primary,
                }}
              >
                پروژه‌های برجسته
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {cvData.projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg p-6"
                  style={{
                    padding: theme.layout.cardPadding,
                    borderRadius: theme.borderRadius.lg,
                    backgroundColor: colors.card,
                    border: `2px solid ${colors.border}`,
                    transition: 'all 0.3s',
                  }}
                >
                  <div
                    className="absolute left-0 top-0 h-full w-0 opacity-10 transition-all duration-300 group-hover:w-full"
                    style={{
                      backgroundColor: colors.primary,
                    }}
                  />
                  <h3
                    className="relative z-10 mb-2"
                    style={{
                      fontSize: theme.typography.fontSize.lg,
                      fontWeight: theme.typography.fontWeight.semibold,
                      color: colors.primary,
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="relative z-10 mb-4"
                    style={{
                      fontSize: theme.typography.fontSize.sm,
                      lineHeight: theme.typography.lineHeight.normal,
                      color: colors.cardForeground,
                    }}
                  >
                    {project.description}
                  </p>

                  <div className="relative z-10 mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full px-2 py-1 text-xs"
                        style={{
                          backgroundColor: colors.muted,
                          color: colors.mutedForeground,
                          borderRadius: theme.borderRadius.full,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="relative z-10 flex gap-4 text-sm">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:opacity-80"
                        style={{ color: colors.accent }}
                      >
                        مشاهده پروژه →
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:opacity-80"
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
        <section className="mb-8" style={{ marginBottom: theme.layout.sectionSpacing }}>
          <div className="mb-6 flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{
                backgroundColor: colors.primary + '15',
                color: colors.primary,
              }}
            >
              <span className="text-xl">🎓</span>
            </div>
            <h2
              style={{
                fontSize: theme.typography.fontSize['2xl'],
                fontWeight: theme.typography.fontWeight.bold,
                color: colors.primary,
              }}
            >
              تحصیلات
            </h2>
          </div>
          <div className="space-y-4">
            {cvData.education.map((edu, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg p-5"
                style={{
                  padding: theme.layout.cardPadding,
                  borderRadius: theme.borderRadius.lg,
                  backgroundColor: colors.card,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg text-xl"
                  style={{
                    backgroundColor: colors.primary + '15',
                  }}
                >
                  🎓
                </div>
                <div className="flex-1">
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
                    className="mt-1"
                    style={{
                      fontSize: theme.typography.fontSize.sm,
                      color: colors.mutedForeground,
                    }}
                  >
                    {edu.location} · {edu.startDate} / {edu.endDate || 'اکنون'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Sections */}
        {(cvData.languages || cvData.interests) && (
          <section className="mb-8" style={{ marginBottom: theme.layout.sectionSpacing }}>
            <div className="w-full ">
              {cvData.languages && cvData.languages.length > 0 && (
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: colors.accent + '15',
                        color: colors.accent,
                      }}
                    >
                      <span className="text-lg">🌐</span>
                    </div>
                    <h2
                      style={{
                        fontSize: theme.typography.fontSize.xl,
                        fontWeight: theme.typography.fontWeight.bold,
                        color: colors.primary,
                      }}
                    >
                      زبان‌ها
                    </h2>
                  </div>
                  <div
                    className="rounded-lg p-4 w-full"
                    style={{
                      padding: '1rem',
                      borderRadius: theme.borderRadius.lg,
                      backgroundColor: colors.card,
                      boxShadow: theme.shadows.sm,
                    }}
                  >
                    <div className="grid grid-cols-3 place-items-center  w-full gap-5">
                      {cvData.languages.map((lang, index) => (
                        <div key={index} className="flex  gap-2">
                          <span
                            style={{
                              fontSize: theme.typography.fontSize.sm,
                              fontWeight: theme.typography.fontWeight.medium,
                              color: colors.cardForeground,
                            }}
                          >
                            {lang.name}
                          </span>
                          -
                          <span
                            className="rounded-full px-3 py-1 text-xs font-medium"
                            style={{
                              fontSize: theme.typography.fontSize.xs,
                              color: colors.accent,
                              backgroundColor: colors.accent + '20',
                              borderRadius: theme.borderRadius.full,
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
interface ContactItemCreativeProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  href?: string;
}

function ContactItemCreative({ icon: Icon, text, href }: ContactItemCreativeProps) {
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
