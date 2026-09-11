'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

export function CopyToast() {
  const [toast, setToast] = useState<{ message: string; text: string } | null>(null);

  useEffect(() => {
    const handleToast = (e: Event) => {
      const customEvent = e as CustomEvent<{ message: string; text: string }>;
      if (customEvent.detail) {
        setToast(customEvent.detail);
      }
    };

    window.addEventListener('namestylepro_toast', handleToast);
    return () => window.removeEventListener('namestylepro_toast', handleToast);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  if (!toast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-slate-900 text-white shadow-xl border border-slate-700 animate-in fade-in slide-in-from-bottom-5 duration-200 max-w-[90vw]"
    >
      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      <div className="text-sm font-medium truncate">
        {toast.message}
      </div>
    </div>
  );
}
