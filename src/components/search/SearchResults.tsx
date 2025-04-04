import React from 'react';
import { SearchResult } from '../../types';
import { ExternalLink } from 'lucide-react';

// Helper function to convert string to Proper Case
const toProperCase = (str: string): string => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

// Extract result item as a separate component
const ResultItem = ({ result, index, isLast }: { 
  result: SearchResult; 
  index: number; 
  isLast: boolean;
}) => (
  <div key={index}>
    <div className="py-6 px-0 flex flex-col md:flex-row gap-5">
      {result.image && (
        <div className="w-full md:w-48 h-40 md:h-32 flex-shrink-0">
          <img
            src={result.image}
            alt={result.title}
            className="w-full h-full object-cover rounded"
          />
        </div>
      )}

      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-gray-600 text-sm">
            {result.date && result.type !== 'programs' && result.type !== 'centers' && 
              <>{result.date} <span className="mx-2">|</span></>
            }
            {toProperCase(result.type)}
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#000f9f] mb-2 leading-tight font-neue-haas">
          <a href={result.url} className="hover:underline">
            {result.title}
          </a>
        </h3>

        <p className="text-gray-700 line-clamp-2 text-base font-light font-yale leading-relaxed">
          {result.description}
        </p>

        {result.type === 'programs' && result.programStats && <ProgramStats stats={result.programStats} />}

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={result.url}
            className="inline-flex items-center text-[#121212] font-medium text-sm hover:underline font-yale"
          >
            {result.url}
          </a>

          {result.type === 'programs' && result.applyUrl && (
            <a
              href={result.applyUrl}
              className="inline-flex items-center px-4 py-2 bg-[#00356B] text-white rounded-md text-sm font-medium hover:bg-[#002143] transition-colors"
              aria-label={`Apply to ${result.title}`}
            >
              Apply <ExternalLink size={14} className="ml-1" />
            </a>
          )}
        </div>

        {!isLast && (
          <div className="pt-6">
            <hr className="border-gray-100" />
          </div>
        )}
      </div>
    </div>
  </div>
);

// Extract program stats as a separate component
const ProgramStats = ({ stats }: { stats: Array<{label: string; value: string}> }) => (
  <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2">
    {stats.map((stat, statIndex) => (
      <div key={statIndex} className="flex flex-col">
        <span className="text-xs text-gray-500">{stat.label}</span>
        <span className="text-sm font-medium">{stat.value}</span>
      </div>
    ))}
  </div>
);

interface SearchResultsProps {
  results: SearchResult[];
  searchQuery?: string;
  totalResults?: number;
  isLoading?: boolean;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ 
  results, 
  searchQuery = '', 
  totalResults = 0,
  isLoading = false
}) => {
  if (isLoading) {
    return <div className="bg-white p-6 text-center">Loading results...</div>;
  }

  if (results.length === 0) {
    return (
      <div className="bg-white p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 font-neue-haas">No results found</h3>
        <p className="text-gray-500 font-yale">Try adjusting your search or filters to find what you're looking for.</p>
      </div>
    );
  }

  const actualTotal = totalResults || results.length;
  
  return (
    <div className="space-y-0">
      {searchQuery && (
        <div className="mb-4 text-sm text-gray-600">
          Showing 1-{results.length} of {actualTotal} results {searchQuery ? `for "${searchQuery}"` : ''}
        </div>
      )}
      
      {results.map((result, index) => (
        <ResultItem 
          key={`result-${index}`}
          result={result} 
          index={index} 
          isLast={index === results.length - 1} 
        />
      ))}
    </div>
  );
};