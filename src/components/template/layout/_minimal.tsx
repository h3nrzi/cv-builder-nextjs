'use client';
import { useCVData } from '@/hooks/useCVData';
import React from 'react';
import Avatar from '../../ui/avatar';
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useThemeStyles } from '@/provider/useTheme';

export default function Minimal_template_component() {
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
      {/* Single Page Minimal Layout */}
      <div
        className="relative mx-auto min-h-screen w-full max-w-4xl bg-white p-4 shadow-lg sm:min-h-[297mm] sm:w-[210mm] sm:p-[20mm] print:min-h-[297mm] print:w-[210mm] print:p-[20mm] print:shadow-none"
        style={{
          fontFamily: theme.typography.fontFamily,
          color: colors.foreground,
        }}
      >
        {/* Minimal Header */}
        <header className="mb-12 border-b pb-8" style={{ borderColor: colors.border }}>
          <div className="flex flex-col items-center gap-4 text-center">
            {cvData.personal.profileImage && (
              <div className="mb-4">
                <div
                  className="h-24 w-24 overflow-hidden border-2 border-solid"
                  style={{
                    borderRadius: theme.borderRadius.full,
                    borderColor: colors.border,
                  }}
                >
                  <Avatar src={cvData.personal.profileImage} />
                </div>
              </div>
            )}
            <div>
              <h1
                className="mb-2"
                style={{
                  fontSize: theme.typography.fontSize['3xl'],
                  fontWeight: theme.typography.fontWeight.bold,
                  color: colors.foreground,
                  letterSpacing: '0.02em',
                }}
              >
                {cvData.personal.name}
              </h1>
              <h2
                className="mb-6"
                style={{
                  fontSize: theme.typography.fontSize.base,
                  fontWeight: theme.typography.fontWeight.normal,
                  color: colors.mutedForeground,
                }}
              >
                {cvData.personal.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-4 text-sm" style={{ color: colors.mutedForeground }}>
                <ContactItemMinimal icon={Phone} text={cvData.personal.phone} />
                <ContactItemMinimal icon={Mail} text={cvData.personal.email} />
                <ContactItemMinimal icon={MapPin} text={cvData.personal.location} />
                {cvData.personal.website && (
                  <ContactItemMinimal
                    icon={Globe}
                    text={cvData.personal.website}
                    href={`https://${cvData.personal.website}`}
                  />
                )}
                {cvData.personal.github && (
                  <ContactItemMinimal
                    icon={Github}
                    text={cvData.personal.github}
                    href={`https://${cvData.personal.github}`}
                  />
                )}
                {cvData.personal.linkedin && (
                  <ContactItemMinimal
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
        <section className="mb-10" style={{ marginBottom: theme.layout.sectionSpacing }}>
          <h2
            className="mb-4 text-sm font-medium uppercase tracking-wider"
            style={{
              fontSize: theme.typography.fontSize.xs,
              fontWeight: theme.typography.fontWeight.medium,
              color: colors.mutedForeground,
              letterSpacing: '0.1em',
            }}
          >
            خلاصه
          </h2>
          <p
            style={{
              lineHeight: theme.typography.lineHeight.relaxed,
              color: colors.foreground,
              fontSize: theme.typography.fontSize.sm,
            }}
          >
            {cvData.summary}
          </p>
        </section>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Experience Section */}
            <section>
              <h2
                className="mb-6 text-sm font-medium uppercase tracking-wider"
                style={{
                  fontSize: theme.typography.fontSize.xs,
                  fontWeight: theme.typography.fontWeight.medium,
                  color: colors.mutedForeground,
                  letterSpacing: '0.1em',
                }}
              >
                تجربه کاری
              </h2>
              <div className="space-y-6">
                {cvData.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="mb-2">
                      <h3
                        style={{
                          fontSize: theme.typography.fontSize.base,
                          fontWeight: theme.typography.fontWeight.semibold,
                          color: colors.foreground,
                        }}
                      >
                        {exp.title}
                      </h3>
                      <p
                        className="mb-1"
                        style={{
                          fontSize: theme.typography.fontSize.sm,
                          fontWeight: theme.typography.fontWeight.normal,
                          color: colors.mutedForeground,
                        }}
                      >
                        {exp.company}
                      </p>
                      <p
                        className="text-xs"
                        style={{
                          fontSize: theme.typography.fontSize.xs,
                          color: colors.mutedForeground,
                        }}
                      >
                        {exp.endDate ? `${exp.startDate} - ${exp.endDate}` : `${exp.startDate} - اکنون`}
                      </p>
                    </div>
                    <p
                      className="mt-2 text-sm"
                      style={{
                        lineHeight: theme.typography.lineHeight.normal,
                        color: colors.foreground,
                      }}
                    >
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2
                className="mb-6 text-sm font-medium uppercase tracking-wider"
                style={{
                  fontSize: theme.typography.fontSize.xs,
                  fontWeight: theme.typography.fontWeight.medium,
                  color: colors.mutedForeground,
                  letterSpacing: '0.1em',
                }}
              >
                تحصیلات
              </h2>
              <div className="space-y-4">
                {cvData.education.map((edu, index) => (
                  <div key={index}>
                    <h3
                      style={{
                        fontSize: theme.typography.fontSize.base,
                        fontWeight: theme.typography.fontWeight.semibold,
                        color: colors.foreground,
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      className="text-sm"
                      style={{
                        fontSize: theme.typography.fontSize.sm,
                        color: colors.mutedForeground,
                      }}
                    >
                      {edu.school} · {edu.endDate || edu.startDate}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills Section */}
            <section>
              <h2
                className="mb-6 text-sm font-medium uppercase tracking-wider"
                style={{
                  fontSize: theme.typography.fontSize.xs,
                  fontWeight: theme.typography.fontWeight.medium,
                  color: colors.mutedForeground,
                  letterSpacing: '0.1em',
                }}
              >
                مهارت‌ها
              </h2>
              <div className="space-y-4">
                {cvData.skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h3
                      className="mb-2 text-xs font-medium uppercase"
                      style={{
                        fontSize: theme.typography.fontSize.xs,
                        fontWeight: theme.typography.fontWeight.medium,
                        color: colors.mutedForeground,
                      }}
                    >
                      {skillGroup.category}
                    </h3>
                    <div className="space-y-1">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="text-sm">
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            {cvData.projects && cvData.projects.length > 0 && (
              <section>
                <h2
                  className="mb-6 text-sm font-medium uppercase tracking-wider"
                  style={{
                    fontSize: theme.typography.fontSize.xs,
                    fontWeight: theme.typography.fontWeight.medium,
                    color: colors.mutedForeground,
                    letterSpacing: '0.1em',
                  }}
                >
                  پروژه‌ها
                </h2>
                <div className="space-y-4">
                  {cvData.projects.map((project, index) => (
                    <div key={index}>
                      <h3
                        style={{
                          fontSize: theme.typography.fontSize.base,
                          fontWeight: theme.typography.fontWeight.semibold,
                          color: colors.foreground,
                        }}
                      >
                        {project.name}
                      </h3>
                      <p
                        className="mt-1 text-sm"
                        style={{
                          lineHeight: theme.typography.lineHeight.normal,
                          color: colors.mutedForeground,
                        }}
                      >
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Languages */}
            {cvData.languages && cvData.languages.length > 0 && (
              <section>
                <h2
                  className="mb-6 text-sm font-medium uppercase tracking-wider"
                  style={{
                    fontSize: theme.typography.fontSize.xs,
                    fontWeight: theme.typography.fontWeight.medium,
                    color: colors.mutedForeground,
                    letterSpacing: '0.1em',
                  }}
                >
                  زبان‌ها
                </h2>
                <div className="space-y-2">
                  {cvData.languages.map((lang, index) => (
                    <div key={index} className="text-sm">
                      {lang.name} · {lang.level}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Interests */}
            {cvData.interests && cvData.interests.length > 0 && (
              <section>
                <h2
                  className="mb-6 text-sm font-medium uppercase tracking-wider"
                  style={{
                    fontSize: theme.typography.fontSize.xs,
                    fontWeight: theme.typography.fontWeight.medium,
                    color: colors.mutedForeground,
                    letterSpacing: '0.1em',
                  }}
                >
                  علایق
                </h2>
                <div className="text-sm" style={{ color: colors.mutedForeground }}>
                  {cvData.interests.join(' · ')}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="relative mt-12 pt-8 border-t" style={{ borderColor: colors.border }}>
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
interface ContactItemMinimalProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  href?: string;
}

function ContactItemMinimal({ icon: Icon, text, href }: ContactItemMinimalProps) {
  const { colors } = useThemeStyles();

  const content = (
    <div className="flex items-center gap-2">
      <Icon className="h-3 w-3" style={{ color: colors.mutedForeground }} />
      <span>{text}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity"
        style={{ color: colors.mutedForeground }}
      >
        {content}
      </a>
    );
  }

  return content;
}

