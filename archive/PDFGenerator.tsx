'use client';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

declare global {
  interface Window {
    html2pdf: any;
  }
}

interface PDFGeneratorProps {
  targetId: string;
  filename?: string;
}

export function PDFGenerator({ targetId, filename = 'CV-Ali-Ahmadi.pdf' }: PDFGeneratorProps) {
  const generatePDF = async () => {
    // Load html2pdf library dynamically
    if (!window.html2pdf) {
      const script = document.createElement('script');
      script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      document.head.appendChild(script);

      // Wait for script to load
      await new Promise(resolve => {
        script.onload = resolve;
      });
    }

    const element = document.getElementById(targetId);
    if (!element) {
      console.error('Target element not found');
      return;
    }

    // Configure PDF options
    const options = {
      margin: [10, 10, 10, 10],
      filename: filename,
      image: {
        type: 'jpeg',
        quality: 0.98,
      },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        allowTaint: false,
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
        compress: true,
      },
      pagebreak: {
        mode: ['avoid-all', 'css', 'legacy'],
        before: '.page-break-before',
        after: '.page-break-after',
        avoid: '.page-break-avoid',
      },
    };

    try {
      // Show loading state
      const button = document.querySelector('[data-pdf-button]') as HTMLButtonElement;
      if (button) {
        button.disabled = true;
        button.textContent = 'در حال تولید PDF...';
      }

      // Generate PDF
      await window.html2pdf().set(options).from(element).save();

      // Reset button state
      if (button) {
        button.disabled = false;
        button.innerHTML = `
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
          </svg>
          دانلود PDF
        `;
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('خطا در تولید PDF. لطفاً مجدداً تلاش کنید.');

      // Reset button state on error
      const button = document.querySelector('[data-pdf-button]') as HTMLButtonElement;
      if (button) {
        button.disabled = false;
        button.innerHTML = `
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
          </svg>
          دانلود PDF
        `;
      }
    }
  };

  return (
    <div className="mb-6">
      <Button onClick={generatePDF} className="flex items-center gap-2" data-pdf-button>
        <Download className="h-4 w-4" />
        دانلود PDF
      </Button>
    </div>
  );
}
