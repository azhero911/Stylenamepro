'use client';

import { useState, useCallback } from 'react';

export function useClipboard() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = useCallback(async (text: string, customMessage?: string) => {
    if (!text) return false;

    let success = false;

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        success = true;
      } catch {
        // fallback
      }
    }

    if (!success) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-999999px';
        textarea.style.top = '-999999px';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        success = document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch {
        success = false;
      }
    }

    if (success) {
      setCopiedText(text);
      // Dispatch toast notification event for global toast
      if (typeof window !== 'undefined') {
        window.dispatchEvent(
          new CustomEvent('namestylepro_toast', {
            detail: {
              message: customMessage || 'Copied to clipboard! Ready to paste in Free Fire or PUBG.',
              text,
            },
          })
        );
      }

      setTimeout(() => {
        setCopiedText((prev) => (prev === text ? null : prev));
      }, 2000);
    }

    return success;
  }, []);

  // WhatsApp share link builder with UTF-safe URL encoding
  const getWhatsAppShareUrl = useCallback((styledText: string) => {
    const message = `Check out my new stylish name: ${styledText}\n\nGenerated for free at NameStylePro: https://namestylepro.online`;
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }, []);

  return {
    copyToClipboard,
    copiedText,
    isCopied: (text: string) => copiedText === text,
    getWhatsAppShareUrl,
  };
}
