'use client';

import { useState, useMemo, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import { portfolioByDate } from '@/data/portfolioData';

const UserSummaryCard = dynamic(() => import('@/components/UserSummaryCard'));
const AssetAllocationChart = dynamic(() => import('@/components/AssetAllocationChart'));
const HoldingsTable = dynamic(() => import('@/components/HoldingsTable'));

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState('2025-08-01');

  const onDateChange = useCallback((e) => {
    setSelectedDate(e.target.value);
  }, []);

  const snapshot = useMemo(() => portfolioByDate[selectedDate], [selectedDate]);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <Header selectedDate={selectedDate} onDateChange={onDateChange} />
      <UserSummaryCard summary={snapshot.userSummary} />
      <AssetAllocationChart data={snapshot.assetData} />
      <HoldingsTable data={snapshot.holdings} />
    </div>
  );
}
