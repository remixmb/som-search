import React from 'react';
import { ArrowDownAZ, Clock } from 'lucide-react';

interface SortSelectorProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export const SortSelector: React.FC<SortSelectorProps> = ({ sortBy, setSortBy }) => {
  return (
    <div className="flex items-center mb-4 justify-end">
      <label htmlFor="sort-select" className="text-sm font-medium text-gray-700 mr-2">
        Sort by:
      </label>
      <div className="relative">
        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="pl-3 pr-8 py-1.5 border border-gray-300 bg-white focus:outline-none focus:ring-[#00356B] focus:border-[#00356B] text-sm"
        >
          <option value="relevance">Relevance</option>
          <option value="date">Date (newest)</option>
          <option value="title">Title (A-Z)</option>
        </select>
      </div>
    </div>
  );
}; 