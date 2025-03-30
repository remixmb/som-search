import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface FilterSectionProps {
  category: string;
  options: string[];
  selectedFilters: string[];
  toggleFilter: (filter: string) => void;
  isExpanded: boolean;
  toggleCategory: () => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  category,
  options,
  selectedFilters,
  toggleFilter,
  isExpanded,
  toggleCategory
}) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={toggleCategory}
        className="w-full py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <h4 className="font-semibold text-[#00356B]">{category}</h4>
        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isExpanded && (
        <div className="space-y-2 pb-4">
          {options.map(option => (
            <label key={option} className="flex items-center gap-2 cursor-pointer px-2 py-1 hover:bg-gray-50 rounded">
              <input
                type="checkbox"
                checked={selectedFilters.includes(option)}
                onChange={() => toggleFilter(option)}
                className="rounded border-gray-300 text-[#00356B] focus:ring-[#00356B]"
              />
              <span className="text-sm">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}; 