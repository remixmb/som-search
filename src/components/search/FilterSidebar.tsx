import React from 'react';
import { FilterSection } from './FilterSection';
import { Filter } from 'lucide-react';

interface FilterSidebarProps {
  selectedFilters: string[];
  toggleFilter: (filter: string) => void;
  expandedCategories: string[];
  toggleCategory: (category: string) => void;
  showMobileFilters: boolean;
  setShowMobileFilters: (show: boolean) => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedFilters,
  toggleFilter,
  expandedCategories,
  toggleCategory,
  showMobileFilters,
  setShowMobileFilters
}) => {
  const filters = {
    'Degree Programs': ['MBA', 'MBA for Executives', 'Master of Advanced Management', 'Master\'s in Asset Management', 'Master\'s in Global Business & Society'],
    'Centers & Initiatives': ['Program on Financial Stability', 'Chief Executive Leadership Institute', 'Program on Stakeholder Innovation', 'Center for Customer Insights', 'Program on Social Enterprise', 'International Center for Finance'],
    'Academic Areas': ['Accounting', 'Economics', 'Finance', 'Marketing', 'Operations', 'Organizational Behavior'],
    'Research Topics': ['Healthcare', 'Sustainability', 'Innovation', 'Global Markets', 'Leadership', 'Social Impact'],
    'Content Type': ['Articles', 'Case Studies', 'Working Papers', 'Events', 'Media Mentions']
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-6">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="flex items-center gap-2 px-4 py-2 text-[#00356B] border border-[#00356B] rounded-lg hover:bg-gray-50"
        >
          <Filter size={20} />
          <span className="font-medium font-neue-haas">Filters</span>
          {selectedFilters.length > 0 && (
            <span className="bg-[#00356B] text-white text-sm px-2 py-0.5 rounded-full">
              {selectedFilters.length}
            </span>
          )}
        </button>
      </div>

      {/* Filters Sidebar (desktop always visible, mobile conditionally) */}
      <div className={`
        ${showMobileFilters ? 'fixed inset-0 z-40 block' : 'hidden'} 
        md:relative md:block md:z-0
      `}>
        {/* Mobile overlay */}
        {showMobileFilters && (
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 md:hidden"
            onClick={() => setShowMobileFilters(false)}
          />
        )}

        {/* Filter Content */}
        <div className={`
          bg-white p-4 md:p-0
          ${showMobileFilters ? 'absolute right-0 top-0 bottom-0 w-80 overflow-auto' : ''}
        `}>
          {showMobileFilters && (
            <div className="flex justify-between items-center mb-4 md:hidden">
              <h3 className="font-bold text-lg font-neue-haas">Filters</h3>
              <button 
                onClick={() => setShowMobileFilters(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
          )}

          <div className="space-y-2">
            {Object.entries(filters).map(([category, options]) => (
              <FilterSection
                key={category}
                category={category}
                options={options}
                selectedFilters={selectedFilters}
                toggleFilter={toggleFilter}
                isExpanded={expandedCategories.includes(category)}
                toggleCategory={() => toggleCategory(category)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};