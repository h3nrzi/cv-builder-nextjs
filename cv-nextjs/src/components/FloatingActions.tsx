'use client';
import { Download, Share2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function FloatingActions() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePrintPDF = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'رزومه علی احمدی',
          text: 'رزومه برنامه‌نویس فول استک جاوا اسکریپت',
          url: window.location.href,
        });
      } catch (error) {
        console.log('خطا در اشتراک‌گذاری:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      // اینجا می‌توانید toast نمایش دهید
    }
  };

  const actions = [
    {
      icon: <Download className="h-4 w-4" />,
      label: 'دانلود PDF',
      onClick: handlePrintPDF,
      variant: 'default' as const,
    },
    {
      icon: <Share2 className="h-4 w-4" />,
      label: 'اشتراک‌گذاری',
      onClick: handleShare,
      variant: 'outline' as const,
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 print:hidden">
      <div className="flex flex-col-reverse gap-3">
        {/* Action Buttons */}
        <div
          className={`
          flex flex-col-reverse gap-2 transition-all duration-300 ease-out
          ${isExpanded ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}
        `}
        >
          {actions.map((action, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant={action.variant}
                  onClick={action.onClick}
                  className="h-10 w-10 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
                >
                  {action.icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">{action.label}</TooltipContent>
            </Tooltip>
          ))}
        </div>

        {/* Main Toggle Button */}
        <Button
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            h-12 w-12 rounded-full border-0 bg-gradient-to-r 
            from-blue-600 to-purple-600 text-white
            shadow-lg transition-all duration-300 
            ease-out hover:from-blue-700
            hover:to-purple-700 hover:shadow-xl
          `}
        >
          <Download />
        </Button>
      </div>
    </div>
  );
}
