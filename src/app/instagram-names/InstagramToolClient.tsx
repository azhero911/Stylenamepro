'use client';

import React, { useState, useMemo } from 'react';
import { generateAllStyles } from '@/lib/unicode/generator';
import { NameInput } from '@/components/ui/NameInput';
import { StyleGrid } from '@/components/ui/StyleGrid';

export function InstagramToolClient() {
  const [name, setName] = useState('Aesthetic');

  const styles = useMemo(() => {
    const all = generateAllStyles(name);
    return all.filter((s) => s.category === 'aesthetic' || s.category === 'love');
  }, [name]);

  return (
    <div className="space-y-6">
      <NameInput value={name} onChange={setName} placeholder="Enter your Instagram name or bio text..." />
      <StyleGrid styles={styles} />
    </div>
  );
}
