import React from 'react';

interface AdSlotProps {
  slotType?: 'banner' | 'rectangle' | 'responsive';
  className?: string;
  adSlotId?: string;
}

export function AdSlot({ slotType = 'responsive', className = '', adSlotId }: AdSlotProps) {
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
      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        Advertisement
      </div>
      {adSlotId ? (
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: '100%' }}
          data-ad-client="ca-pub-placeholder"
          data-ad-slot={adSlotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <div className="flex items-center justify-center text-xs text-slate-400 py-3">
          <span>Sponsored Content Area (AdSense Ready)</span>
        </div>
      )}
    </aside>
  );
}
