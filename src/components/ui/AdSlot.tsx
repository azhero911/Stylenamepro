import React from 'react';

interface AdSlotProps {
  slotType?: 'banner' | 'rectangle' | 'responsive';
  className?: string;
  adSlotId?: string;
}

// Only renders when a real AdSense slot ID is provided.
// Returns null for placeholder slots to avoid "Sponsored Content Area" text on live pages.
export function AdSlot({ slotType = 'responsive', className = '', adSlotId }: AdSlotProps) {
  if (!adSlotId) return null;

  const minHeight = slotType === 'rectangle' ? '250px' : slotType === 'banner' ? '90px' : '100px';

  return (
    <aside
      aria-label="Advertisement"
      className={`ad-container my-6 w-full flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/75 p-3 text-center transition-all ${className}`}
      style={{
        minHeight,
        contain: 'layout',
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100%' }}
        data-ad-client="ca-pub-3103070762949606"
        data-ad-slot={adSlotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
