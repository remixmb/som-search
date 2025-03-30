import React from 'react';
import { SearchResult } from '../../types';
import { Calendar } from 'lucide-react';

interface SearchResultsProps {
  results: SearchResult[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  if (results.length === 0) {
    return (
      <div className="bg-white p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">No results found</h3>
        <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="space-y-0">
      {results.map((result, index) => (
        <div key={index}>
          <div className="p-6 flex flex-col md:flex-row gap-4">
            {result.image && (
              <div className="w-full md:w-48 h-40 md:h-auto flex-shrink-0">
                <img 
                  src={result.image} 
                  alt={result.title} 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            )}
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-600 uppercase">
                  {result.type}
                </span>
                
                {result.date && (
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {result.date}
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-[#000f9f] mb-2">
                <a href={result.url} className="hover:underline">
                  {result.title}
                </a>
              </h3>
              
              <p className="text-gray-600 line-clamp-3">
                {result.description}
              </p>
              
              <a 
                href={result.url} 
                className="mt-3 inline-block text-[#000f9f] font-medium text-sm hover:underline"
              >
                Read more
              </a>
              
              {index < results.length - 1 && (
                <div className="pt-6">
                  <hr className="border-gray-200" />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 