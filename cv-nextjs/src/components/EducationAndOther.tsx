'use client';
import { GraduationCap, Award, Languages, Heart } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

export function EducationAndOther() {
  const education = [
    {
      degree: 'کارشناسی مهندسی کامپیوتر',
      university: 'دانشگاه صنعتی شریف',
      year: '1395 - 1399',
    },
  ];

  const certificates = [
    'AWS Certified Solutions Architect',
    'MongoDB Certified Developer',
    'Google Cloud Professional',
    'Scrum Master Certified',
  ];

  const languages = [
    { name: 'فارسی', level: 'زبان مادری' },
    { name: 'انگلیسی', level: 'پیشرفته' },
  ];

  const interests = [
    'یادگیری تکنولوژی‌های جدید',
    'مشارکت در پروژه‌های متن‌باز',
    'ورزش و فیتنس',
    'سفر و عکاسی',
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Education */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <SectionHeader
          title="تحصیلات"
          icon={<GraduationCap className="h-5 w-5" />}
          variant="secondary"
        />
        <div className="mt-2">
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-right text-base text-gray-800">{edu.degree}</h4>
              <p className="text-right text-sm text-gray-600">{edu.university}</p>
              <div className="mt-1 flex justify-between text-sm text-gray-500">
                <span>{edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <SectionHeader title="گواهینامه‌ها" icon={<Award className="h-5 w-5" />} variant="accent" />
        <ul className="mt-2 space-y-2">
          {certificates.map((cert, index) => (
            <li key={index} className="flex items-center gap-2 text-right text-sm text-gray-700">
              <span className="h-1 w-1 rounded-full bg-green-500"></span>
              {cert}
            </li>
          ))}
        </ul>
      </div>

      {/* Languages */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <SectionHeader title="زبان‌ها" icon={<Languages className="h-5 w-5" />} variant="primary" />
        <div className="mt-2 space-y-2">
          {languages.map((lang, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-gray-800">{lang.name}</span>
              <span className="text-gray-600">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <SectionHeader title="علایق" icon={<Heart className="h-5 w-5" />} variant="secondary" />
        <ul className="mt-2 space-y-2">
          {interests.map((interest, index) => (
            <li key={index} className="flex items-center gap-2 text-right text-sm text-gray-700">
              <span className="h-1 w-1 rounded-full bg-red-500"></span>
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
