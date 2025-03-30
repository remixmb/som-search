import { useState } from 'react';
import { ContentType, SearchResult } from '../types';

const mockResults: SearchResult[] = [
  {
    title: 'Yale SOM Launches New Sustainability Initiative',
    url: 'https://som.yale.edu/news/2024/sustainability-initiative',
    description: 'The Yale School of Management announces a major new initiative focused on business solutions for climate change and environmental sustainability.',
    type: 'news',
    date: 'March 15, 2024'
  },
  {
    title: 'Faculty Research: AI Impact on Financial Markets',
    url: 'https://som.yale.edu/faculty-research/ai-financial-markets',
    description: 'New research from Yale SOM faculty examines how artificial intelligence is transforming financial markets and investment strategies.',
    type: 'research',
    date: 'March 10, 2024'
  },
  {
    title: 'Master of Advanced Management Program',
    url: 'https://som.yale.edu/programs/mam',
    description: 'A one-year program for exceptional MBA graduates from Global Network for Advanced Management member schools.',
    type: 'programs',
    image: 'https://som.yale.edu/sites/default/files/styles/square_1280/public/2023-05/_DSC6264.jpg.webp?itok=3CEp6ZBH'
  }
];

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedType, setSelectedType] = useState<ContentType>('all');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // In a real app, you would fetch results based on query, type and filters
  // This is just a mock implementation
  const results = mockResults.filter(result => {
    // Filter by content type
    if (selectedType !== 'all' && result.type !== selectedType) {
      return false;
    }
    
    // Simple search implementation (case-insensitive)
    if (searchQuery && !result.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !result.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return {
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    selectedType,
    setSelectedType,
    selectedFilters,
    toggleFilter,
    results
  };
} 