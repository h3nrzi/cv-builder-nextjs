import { Calendar, MapPin, Phone, Mail, Globe } from 'lucide-react';

export function FooterBranding() {
  const currentDate = new Date().toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      {/* Contact Info Strip */}
      <div className="mb-6 rounded-lg bg-gradient-to-r from-gray-50 via-white to-gray-50 p-4">
        <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 md:grid-cols-4">
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-3 w-3" />
            <span>۰۹۱۲-۳۴۵-۶۷۸۹</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-3 w-3" />
            <span>ali@example.com</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-3 w-3" />
            <span>تهران، ایران</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Globe className="h-3 w-3" />
            <span>ali-ahmadi.dev</span>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>آخرین بروزرسانی: {currentDate}</span>
        </div>

        <div className="text-center md:text-right">
          <p className="mb-1">این رزومه با ❤️ طراحی شده است</p>
          <div className="flex justify-center gap-4 text-xs md:justify-end"></div>
        </div>
      </div>
    </div>
  );
}
