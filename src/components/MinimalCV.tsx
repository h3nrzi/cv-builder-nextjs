'use client';

import { CVData } from '@/types/theme';
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';

interface MinimalCVProps {
  data: CVData;
}

export function MinimalCV({ data }: MinimalCVProps) {
  return (
    <div className="relative mx-auto flex h-[297mm] w-[210mm] flex-col overflow-hidden bg-white p-[10mm] text-xs leading-tight shadow-lg print:mx-0 print:my-0 print:h-[297mm] print:w-[210mm] print:p-[10mm] print:shadow-none">
      {/* Header */}
      <div className="mb-3 border-b-2 border-gray-800 pb-2">
        <div className="flex items-start gap-4">
          {/* Name and Title */}
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-800 print:text-lg">{data.personal.name}</h1>
            <p className="mb-2 text-sm text-gray-600 print:text-xs">{data.personal.title}</p>

            {/* Contact Info - Grid Layout */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-600">
              {data.personal.email && (
                <div className="flex items-center gap-1">
                  <Mail className="h-3 w-3 flex-shrink-0" />
                  <a
                    href={`mailto:${data.personal.email}`}
                    className="truncate text-gray-600 hover:text-blue-600 hover:underline"
                  >
                    {data.personal.email}
                  </a>
                </div>
              )}
              {data.personal.phone && (
                <div className="flex items-center gap-1">
                  <Phone className="h-3 w-3 flex-shrink-0" />
                  <span>{data.personal.phone}</span>
                </div>
              )}
              {data.personal.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{data.personal.location}</span>
                </div>
              )}
              {data.personal.website && (
                <div className="flex items-center gap-1">
                  <Globe className="h-3 w-3 flex-shrink-0" />
                  <a
                    href={data.personal.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate text-gray-600 hover:text-blue-600 hover:underline"
                  >
                    {data.personal.website}
                  </a>
                </div>
              )}
              {data.personal.github && (
                <div className="flex items-center gap-1">
                  <Github className="h-3 w-3 flex-shrink-0" />
                  <a
                    href={data.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate text-gray-600 hover:text-blue-600 hover:underline"
                  >
                    {data.personal.github}
                  </a>
                </div>
              )}
              {data.personal.linkedin && (
                <div className="flex items-center gap-1">
                  <Linkedin className="h-3 w-3 flex-shrink-0" />
                  <a
                    href={data.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate text-gray-600 hover:text-blue-600 hover:underline"
                  >
                    {data.personal.linkedin}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex-shrink-0">
            {data.personal.profileImage ? (
              <img
                src={data.personal.profileImage}
                alt={data.personal.name}
                className="h-24 w-24 rounded-full border-2 border-gray-300 object-cover"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gray-300 bg-gray-200">
                <span className="text-2xl font-semibold text-gray-500">
                  {data.personal.name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-5 gap-4 overflow-hidden">
        {/* Left Column */}
        <div className="col-span-3 space-y-3 overflow-hidden">
          {/* Summary */}
          {data.summary && (
            <section>
              <h2 className="mb-2 text-base font-bold text-slate-900">خلاصه</h2>
              <p className="text-xs leading-relaxed text-slate-700">{data.summary}</p>
            </section>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <section>
              <h2 className="mb-2 border-b border-slate-300 pb-1 text-base font-bold text-slate-900">
                تجربه کاری
              </h2>
              <div className="space-y-1">
                {data.experience.slice(0, 3).map((exp, index) => (
                  <div key={index}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xs font-semibold text-slate-900">{exp.title}</h3>
                        <p className="text-xs text-blue-700">
                          {exp.company} • {exp.location}
                        </p>
                      </div>
                      <span className="whitespace-nowrap text-xs font-medium text-slate-500">
                        {exp.startDate} - {exp.endDate || 'اکنون'}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {exp.description.length > 300
                        ? `${exp.description.slice(0, 300)}...`
                        : exp.description}
                    </p>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="mt-1 space-y-0.5">
                        {exp.achievements.slice(0, 3).map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-1 text-xs text-gray-600"
                          >
                            <span className="mt-0.5 text-emerald-600">•</span>
                            <span className="text-slate-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-1">
                        {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="rounded bg-gray-100 px-1 py-0.5 text-xs text-gray-700"
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
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <section>
              <h2 className="mb-2 border-b border-slate-300 pb-1 text-base font-bold text-slate-900">
                پروژهها
              </h2>
              <div className="space-y-2">
                {data.projects.map((project, index) => (
                  <div key={index} className="mb-2">
                    <h3 className="text-xs font-bold text-slate-900">{project.name}</h3>
                    <p className="text-xs leading-relaxed text-slate-600">
                      {project.description.length > 200
                        ? `${project.description.slice(0, 200)}...`
                        : project.description}
                    </p>
                    {(project.url || project.github) && (
                      <div className="mt-0.5 flex flex-col gap-1 text-xs">
                        {project.url && (
                          <div className="flex items-center gap-1">
                            <Globe className="h-2.5 w-2.5 text-blue-600" />
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-blue-600 hover:underline"
                            >
                              {project.url}
                            </a>
                          </div>
                        )}
                        {project.github && (
                          <div className="flex items-center gap-1">
                            <Github className="h-2.5 w-2.5 text-blue-600" />
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-blue-600 hover:underline"
                            >
                              {project.github}
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                    <div className="mt-0.5 flex flex-wrap gap-1">
                      {project.technologies.slice(0, 5).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded bg-gray-100 px-1 py-0.5 text-xs text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="col-span-2 space-y-3 overflow-hidden">
          {/* Skills */}
          {data.skills.length > 0 && (
            <section>
              <h2 className="mb-2 text-base font-bold text-slate-900">مهارتها</h2>
              <div className="space-y-1">
                {data.skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h3 className="mb-1 text-left text-xs font-bold text-indigo-800">
                      {skillGroup.category}
                    </h3>
                    <div className="space-y-0.5">
                      {skillGroup.items.slice(0, 6).map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 print:text-black">
                            {'○'.repeat(5 - skill.level)}
                            {'●'.repeat(skill.level)}
                          </span>
                          <span className="text-xs font-medium text-slate-700">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <section>
              <h2 className="mb-2 border-b border-slate-300 pb-1 text-base font-bold text-slate-900">
                تحصیلات
              </h2>
              <div className="space-y-1">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex items-start justify-between">
                      <h3 className="text-xs font-semibold text-slate-900">{edu.degree}</h3>
                      <span className="whitespace-nowrap text-xs font-medium text-slate-500">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    <p className="text-xs text-blue-700">{edu.school}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {data.languages && data.languages.length > 0 && (
            <section>
              <h2 className="mb-2 border-b border-slate-300 pb-1 text-base font-bold text-slate-900">
                زبانها
              </h2>
              <div className="space-y-0.5">
                {data.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-xs font-medium text-slate-700">{lang.name}</span>
                    <span className="text-xs font-semibold text-emerald-600">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Interests */}
          {data.interests && data.interests.length > 0 && (
            <section>
              <h2 className="mb-2 border-b border-slate-300 pb-1 text-base font-bold text-slate-900">
                علایق
              </h2>
              <div className="flex flex-wrap gap-1">
                {data.interests.slice(0, 6).map((interest, index) => (
                  <span
                    key={index}
                    className="rounded bg-gray-100 px-1 py-0.5 text-xs text-gray-700"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      
      {/* Footer */}
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
  );
}
