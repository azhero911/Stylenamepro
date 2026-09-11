'use client';

import React, { useState, useMemo } from 'react';
import { generateAllStyles } from '@/lib/unicode/generator';
import { NameInput } from '@/components/ui/NameInput';
import { StyleGrid } from '@/components/ui/StyleGrid';

const CLAN_SAMPLE_NAMES = [
  'Valkyrie', 'Titan', 'Apex', 'Predator', 'Immortals', 'Shadow', 'Bloodline', 'Phantom',
  'Omega', 'Reaper', 'Cyber', 'Dominion', 'Overlord', 'Legion', 'Dynasty', 'Badshah',
];

export function ClanToolClient() {
  const [name, setName] = useState('Immortals');

  const styles = useMemo(() => {
    const all = generateAllStyles(name);
    return all.filter((s) => s.category === 'gaming' || s.category === 'symbols');
  }, [name]);

  return (
    <div className="space-y-6">
      <NameInput value={name} onChange={setName} placeholder="Enter your clan or squad title..." />
      <StyleGrid styles={styles} />
    </div>
  );
}
