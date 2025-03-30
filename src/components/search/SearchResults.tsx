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
        <h3 className="text-lg font-semibold text-gray-700 mb-2 font-yale">No results found</h3>
        <p className="text-gray-500 font-neue-haas">Try adjusting your search or filters to find what you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="space-y-0">
      {results.map((result, index) => (
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
                <span className="text-[11px] font-bold px-2.5 py-1 bg-gray-100 rounded-full text-gray-700 uppercase tracking-wider font-neue-haas">
                  {result.type}
                </span>
                
                {result.date && (
                  <div className="flex items-center text-gray-600 text-sm font-normal font-neue-haas">
                    <Calendar size={14} className="mr-1" />
                    {result.date}
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-[#00356B] mb-2 leading-tight font-yale">
                <a href={result.url} className="hover:underline">
                  {result.title}
                </a>
              </h3>
              
              <p className="text-gray-700 line-clamp-2 text-base font-light leading-relaxed font-neue-haas">
                {result.description}
              </p>
              
              <a 
                href={result.url} 
                className="mt-3 inline-block text-[#00356B] font-medium text-sm hover:underline font-neue-haas"
              >
                Read more
              </a>
              
              {index < results.length - 1 && (
                <div className="pt-6">
                  <hr className="border-gray-100" />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 