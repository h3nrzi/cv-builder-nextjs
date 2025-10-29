'use client';

import { CVData } from '@/types/theme';
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';

interface MinimalCVProps {
  data: CVData;
}

export function MinimalCV({ data }: MinimalCVProps) {
  return (
    <div className="mx-auto max-w-4xl bg-white p-4 text-xs leading-tight print:p-3 print:text-xs">
      {/* Header */}
      <div className="mb-3 border-b-2 border-gray-800 pb-2">
        <h1 className="text-xl font-bold text-gray-800 print:text-lg">{data.personal.name}</h1>
        <p className="text-sm text-gray-600 print:text-xs">{data.personal.title}</p>
        
        <div className="mt-1 flex flex-wrap gap-2 text-xs text-gray-600">
          {data.personal.email && (
            <div className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              <span>{data.personal.email}</span>
            </div>
          )}
          {data.personal.phone && (
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>{data.personal.phone}</span>
            </div>
          )}
          {data.personal.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>{data.personal.location}</span>
            </div>
          )}
          {data.personal.website && (
            <div className="flex items-center gap-1">
              <Globe className="h-3 w-3" />
              <span>{data.personal.website}</span>
            </div>
          )}
          {data.personal.github && (
            <div className="flex items-center gap-1">
              <Github className="h-3 w-3" />
              <span>{data.personal.github}</span>
            </div>
          )}
          {data.personal.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin className="h-3 w-3" />
              <span>{data.personal.linkedin}</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {/* Left Column */}
        <div className="col-span-2 space-y-2">
          {/* Summary */}
          {data.summary && (
            <section>
              <h2 className="mb-1 text-sm font-semibold text-gray-800">خلاصه</h2>
              <p className="text-gray-700 leading-tight text-xs">{data.summary}</p>
            </section>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <section>
              <h2 className="mb-1 text-sm font-semibold text-gray-800">تجربه کاری</h2>
              <div className="space-y-1">
                {data.experience.slice(0, 3).map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xs font-medium text-gray-800">{exp.title}</h3>
                        <p className="text-xs text-gray-600">{exp.company} • {exp.location}</p>
                      </div>
                      <span className="text-xs text-gray-500 whitespace-nowrap">
                        {exp.startDate} - {exp.endDate || 'اکنون'}
                      </span>
                    </div>
                    <p className="mt-0.5 text-gray-700 text-xs leading-tight">{exp.description.slice(0, 100)}...</p>
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="mt-0.5 flex flex-wrap gap-1">
                        {exp.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span key={techIndex} className="rounded bg-gray-100 px-1 py-0.5 text-xs text-gray-600">
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
              <h2 className="mb-1 text-sm font-semibold text-gray-800">پروژهها</h2>
              <div className="space-y-1">
                {data.projects.slice(0, 2).map((project, index) => (
                  <div key={index}>
                    <h3 className="text-xs font-medium text-gray-800">{project.name}</h3>
                    <p className="text-xs text-gray-700 leading-tight">{project.description.slice(0, 80)}...</p>
                    <div className="mt-0.5 flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="rounded bg-gray-100 px-1 py-0.5 text-xs text-gray-600">
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
        <div className="space-y-2">
          {/* Skills */}
          {data.skills.length > 0 && (
            <section>
              <h2 className="mb-1 text-sm font-semibold text-gray-800">مهارتها</h2>
              <div className="space-y-1">
                {data.skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h3 className="text-xs font-medium text-gray-700">{skillGroup.category}</h3>
                    <div className="space-y-0.5">
                      {skillGroup.items.slice(0, 4).map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">{skill.name}</span>
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((level) => (
                              <div
                                key={level}
                                className={`h-1 w-1 rounded-full ${
                                  level <= skill.level ? 'bg-gray-800' : 'bg-gray-300'
                                }`}
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
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <section>
              <h2 className="mb-1 text-sm font-semibold text-gray-800">تحصیلات</h2>
              <div className="space-y-1">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-xs font-medium text-gray-800">{edu.degree}</h3>
                    <p className="text-xs text-gray-600">{edu.school}</p>
                    <p className="text-xs text-gray-500">{edu.startDate} - {edu.endDate}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {data.languages && data.languages.length > 0 && (
            <section>
              <h2 className="mb-1 text-sm font-semibold text-gray-800">زبانها</h2>
              <div className="space-y-0.5">
                {data.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-xs text-gray-700">{lang.name}</span>
                    <span className="text-xs text-gray-500">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Interests */}
          {data.interests && data.interests.length > 0 && (
            <section>
              <h2 className="mb-1 text-sm font-semibold text-gray-800">علایق</h2>
              <div className="flex flex-wrap gap-1">
                {data.interests.slice(0, 6).map((interest, index) => (
                  <span key={index} className="rounded bg-gray-100 px-1 py-0.5 text-xs text-gray-600">
                    {interest}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}