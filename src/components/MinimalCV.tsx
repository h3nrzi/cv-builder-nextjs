'use client';

import { CVData } from '@/types/theme';
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';

interface MinimalCVProps {
  data: CVData;
}

export function MinimalCV({ data }: MinimalCVProps) {
  return (
    <div className="mx-auto bg-white shadow-lg print:shadow-none w-[210mm] h-[297mm] print:w-[210mm] print:h-[297mm] p-[10mm] print:p-[10mm] text-xs leading-tight overflow-hidden flex flex-col print:mx-0 print:my-0">
      {/* Header */}
      <div className="mb-3 border-b-2 border-gray-800 pb-2">
        <div className="flex items-start gap-4">
          {/* Name and Title */}
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-800 print:text-lg">{data.personal.name}</h1>
            <p className="text-sm text-gray-600 print:text-xs mb-2">{data.personal.title}</p>
            
            {/* Contact Info - Grid Layout */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-600">
              {data.personal.email && (
                <div className="flex items-center gap-1">
                  <Mail className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{data.personal.email}</span>
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
                  <span className="truncate">{data.personal.website}</span>
                </div>
              )}
              {data.personal.github && (
                <div className="flex items-center gap-1">
                  <Github className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{data.personal.github}</span>
                </div>
              )}
              {data.personal.linkedin && (
                <div className="flex items-center gap-1">
                  <Linkedin className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{data.personal.linkedin}</span>
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
                className="h-24 w-24 rounded-full object-cover border-2 border-gray-300"
              />
            ) : (
              <div className="h-24 w-24 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-2xl font-semibold">
                  {data.personal.name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 flex-1 overflow-hidden">
        {/* Left Column */}
        <div className="col-span-3 space-y-3 overflow-hidden">
          {/* Summary */}
          {data.summary && (
            <section>
              <h2 className="mb-2 text-base font-bold text-slate-900 border-b border-slate-300 pb-1">خلاصه</h2>
              <p className="text-slate-700 leading-relaxed text-xs">{data.summary}</p>
            </section>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <section>
              <h2 className="mb-2 text-base font-bold text-slate-900 border-b border-slate-300 pb-1">تجربه کاری</h2>
              <div className="space-y-1">
                {data.experience.slice(0, 3).map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xs font-semibold text-slate-900">{exp.title}</h3>
                        <p className="text-xs text-blue-700">{exp.company} • {exp.location}</p>
                      </div>
                      <span className="text-xs text-slate-500 whitespace-nowrap font-medium">
                        {exp.startDate} - {exp.endDate || 'اکنون'}
                      </span>
                    </div>
                    <p className="mt-1 text-slate-600 text-xs leading-relaxed">
                      {exp.description.length > 300 ? `${exp.description.slice(0, 300)}...` : exp.description}
                    </p>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="mt-1 space-y-0.5">
                        {exp.achievements.slice(0, 3).map((achievement, achIndex) => (
                          <li key={achIndex} className="text-xs text-gray-600 flex items-start gap-1">
                            <span className="text-emerald-600 mt-0.5">•</span>
                            <span className="text-slate-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-1">
                        {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                          <span key={techIndex} className="rounded bg-blue-50 border border-blue-200 px-1.5 py-0.5 text-xs text-blue-700 font-medium">
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
              <h2 className="mb-2 text-base font-bold text-slate-900 border-b border-slate-300 pb-1">پروژهها</h2>
              <div className="space-y-1">
                {data.projects.map((project, index) => (
                  <div key={index}>
                    <h3 className="text-xs font-bold text-slate-900">{project.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {project.description.length > 200 ? `${project.description.slice(0, 200)}...` : project.description}
                    </p>
                    {(project.url || project.github) && (
                      <div className="mt-0.5 flex gap-2 text-xs">
                        {project.url && (
                          <span className="text-emerald-600 flex items-center gap-1 font-medium">
                            <Globe className="h-2.5 w-2.5" />
                            Demo
                          </span>
                        )}
                        {project.github && (
                          <span className="text-slate-600 flex items-center gap-1 font-medium">
                            <Github className="h-2.5 w-2.5" />
                            GitHub
                          </span>
                        )}
                      </div>
                    )}
                    <div className="mt-0.5 flex flex-wrap gap-1">
                      {project.technologies.slice(0, 5).map((tech, techIndex) => (
                        <span key={techIndex} className="rounded bg-purple-50 border border-purple-200 px-1.5 py-0.5 text-xs text-purple-700 font-medium">
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
              <h2 className="mb-2 text-base font-bold text-slate-900 border-b border-slate-300 pb-1">مهارتها</h2>
              <div className="space-y-1">
                {data.skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h3 className="text-xs font-bold text-indigo-800 text-left mb-1">{skillGroup.category}</h3>
                    <div className="space-y-0.5">
                      {skillGroup.items.slice(0, 4).map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex justify-between items-center">
                          <span className="text-xs text-indigo-600 print:text-black">
                            {'●'.repeat(skill.level)}{'○'.repeat(5 - skill.level)}
                          </span>
                          <span className="text-xs text-slate-700 font-medium">{skill.name}</span>
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
              <h2 className="mb-2 text-base font-bold text-slate-900 border-b border-slate-300 pb-1">تحصیلات</h2>
              <div className="space-y-1">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-xs font-semibold text-slate-900">{edu.degree}</h3>
                    <p className="text-xs text-blue-700">{edu.school}</p>
                    <p className="text-xs text-slate-500 font-medium">{edu.startDate} - {edu.endDate}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {data.languages && data.languages.length > 0 && (
            <section>
              <h2 className="mb-2 text-base font-bold text-slate-900 border-b border-slate-300 pb-1">زبانها</h2>
              <div className="space-y-0.5">
                {data.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-xs text-slate-700 font-medium">{lang.name}</span>
                    <span className="text-xs text-emerald-600 font-semibold">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Interests */}
          {data.interests && data.interests.length > 0 && (
            <section>
              <h2 className="mb-2 text-base font-bold text-slate-900 border-b border-slate-300 pb-1">علایق</h2>
              <div className="flex flex-wrap gap-1">
                {data.interests.slice(0, 6).map((interest, index) => (
                  <span key={index} className="rounded bg-amber-50 border border-amber-200 px-1.5 py-0.5 text-xs text-amber-700 font-medium">
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