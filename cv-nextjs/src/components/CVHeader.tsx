'use client';
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';

export function CVHeader() {
  return (
    <div className="mb-6 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
      <div className="flex items-center gap-6">
        <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
            alt="Profile Picture"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="mb-2 text-right text-4xl">علی احمدی</h1>
          <h2 className="mb-4 text-right text-xl text-blue-100">
            برنامه‌نویس فول استک جاوا اسکریپت
          </h2>
          <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+98 912 345 6789</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>ali.ahmadi@email.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>تهران، ایران</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span>github.com/ali-ahmadi</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <span>linkedin.com/in/ali-ahmadi</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>aliahmadidev.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
