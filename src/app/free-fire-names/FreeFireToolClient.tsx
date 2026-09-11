'use client';

import React, { useState, useMemo } from 'react';
import { generateAllStyles } from '@/lib/unicode/generator';
import { NameInput } from '@/components/ui/NameInput';
import { StyleGrid } from '@/components/ui/StyleGrid';

export function FreeFireToolClient() {
  const [name, setName] = useState('FF_Boss');

  const styles = useMemo(() => {
    const all = generateAllStyles(name);
    // Prioritize Free Fire & Gaming category styles
    return all.filter((s) => s.category === 'free-fire' || s.category === 'gaming');
  }, [name]);

  return (
    <div className="space-y-6">
      <NameInput value={name} onChange={setName} placeholder="Enter your Free Fire name..." />
      <StyleGrid styles={styles} />
    </div>
  );
}
