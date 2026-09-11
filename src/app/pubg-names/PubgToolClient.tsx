'use client';

import React, { useState, useMemo } from 'react';
import { generateAllStyles } from '@/lib/unicode/generator';
import { NameInput } from '@/components/ui/NameInput';
import { StyleGrid } from '@/components/ui/StyleGrid';

export function PubgToolClient() {
  const [name, setName] = useState('Conqueror');

  const styles = useMemo(() => {
    const all = generateAllStyles(name);
    return all.filter((s) => s.category === 'pubg' || s.category === 'gaming');
  }, [name]);

  return (
    <div className="space-y-6">
      <NameInput value={name} onChange={setName} placeholder="Enter your PUBG name..." />
      <StyleGrid styles={styles} />
    </div>
  );
}
