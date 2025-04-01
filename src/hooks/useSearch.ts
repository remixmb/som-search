import { useState } from 'react';
import { ContentType, SearchResult } from '../types';

const mockResults: SearchResult[] = [
  // Previous results
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
  },
  // Results from first sitemap
  {
    title: 'Jeffrey Sonnenfeld Responds to Being Caught in the Middle of the GOP Debate',
    url: 'https://som.yale.edu/news/2015/09/jeffrey-sonnenfeld-responds-to-being-caught-in-the-middle-of-the-gop-debate',
    description: 'Yale SOM professor Jeffrey Sonnenfeld provides expert analysis and commentary on the Republican presidential debate.',
    type: 'news',
    date: 'September 2015'
  },
  {
    title: 'Wall Street Journal Profiles Yale SOM',
    url: 'https://som.yale.edu/news/2016/02/wall-street-journal-profiles-yale-som',
    description: 'The Wall Street Journal highlights Yale SOM\'s unique approach to business education and its impact on the business world.',
    type: 'news',
    date: 'February 2016'
  },
  // Results from second sitemap
  {
    title: 'Program on Social Enterprise Innovation & Impact',
    url: 'https://som.yale.edu/centers/program-on-social-enterprise-innovation-impact',
    description: 'Yale SOM\'s program dedicated to advancing social enterprise and impact investing through research, education, and practice.',
    type: 'centers',
    date: 'February 2025'
  },
  {
    title: 'Program on Entrepreneurship',
    url: 'https://som.yale.edu/centers/program-on-entrepreneurship',
    description: 'Supporting and developing the next generation of entrepreneurs through education, mentorship, and resources.',
    type: 'centers',
    date: 'September 2024'
  },
  {
    title: 'Program on Financial Stability',
    url: 'https://som.yale.edu/centers/program-on-financial-stability',
    description: 'Research and analysis focused on understanding and promoting financial stability in global markets.',
    type: 'centers',
    date: 'February 2025'
  },
  {
    title: 'Chief Executive Leadership Institute',
    url: 'https://som.yale.edu/centers/chief-executive-leadership-institute',
    description: 'Advancing the study and practice of leadership through research, education, and executive programs.',
    type: 'centers',
    date: 'December 2024'
  },
  {
    title: 'Program on Stakeholder Innovation and Management',
    url: 'https://som.yale.edu/centers/program-stakeholder-innovation-and-management',
    description: 'Research and education focused on stakeholder capitalism and sustainable business practices.',
    type: 'centers',
    date: 'March 2025'
  },
  {
    title: 'Swensen Asset Management Institute',
    url: 'https://som.yale.edu/centers/swensen-asset-management-institute',
    description: 'Advancing the study and practice of investment management through research and education.',
    type: 'centers',
    date: 'April 2023'
  },
  {
    title: 'Meng Impact Investment Fund',
    url: 'https://som.yale.edu/centers/meng-impact-investment-fund',
    description: 'Student-led impact investment fund focused on generating both financial returns and social impact.',
    type: 'centers',
    date: 'October 2024'
  },
  {
    title: 'M2M Pathways Program',
    url: 'https://som.yale.edu/programs/m2m-pathways',
    description: 'Specialized program for Master of Advanced Management students to develop expertise in specific business areas.',
    type: 'programs',
    date: 'March 2025',
    image: 'https://som.yale.edu/sites/default/files/styles/square_1280/public/2023-05/_DSC6264.jpg.webp?itok=3CEp6ZBH'
  },
  {
    title: 'Master of Technology Management',
    url: 'https://som.yale.edu/programs/masters-technology-management',
    description: 'Program designed to prepare leaders for the digital age through technology and management education.',
    type: 'programs',
    date: 'March 2025',
    image: 'https://som.yale.edu/sites/default/files/styles/square_1280/public/2023-05/_DSC6264.jpg.webp?itok=3CEp6ZBH'
  },
  {
    title: 'Center for Customer Insights',
    url: 'https://som.yale.edu/centers/center-for-customer-insights',
    description: 'Research center focused on understanding customer behavior and market dynamics.',
    type: 'centers',
    date: 'March 2025'
  },
  {
    title: 'Case Studies Collection',
    url: 'https://som.yale.edu/case-studies',
    description: 'Comprehensive collection of business case studies for teaching and learning.',
    type: 'research',
    date: 'January 2025'
  },
  {
    title: 'MBA Program',
    url: 'https://som.yale.edu/programs/mba',
    description: 'Yale SOM\'s flagship MBA program preparing leaders for business and society.',
    type: 'programs',
    date: 'January 2025',
    image: 'https://som.yale.edu/sites/default/files/styles/square_1280/public/2023-05/_DSC6264.jpg.webp?itok=3CEp6ZBH'
  },
  {
    title: 'PhD Program',
    url: 'https://som.yale.edu/programs/phd',
    description: 'Doctoral program preparing scholars for careers in research and academia.',
    type: 'programs',
    date: 'April 2024',
    image: 'https://som.yale.edu/sites/default/files/styles/square_1280/public/2023-05/_DSC6264.jpg.webp?itok=3CEp6ZBH'
  },
  {
    title: 'Executive MBA Program',
    url: 'https://som.yale.edu/programs/emba',
    description: 'Part-time MBA program designed for working professionals.',
    type: 'programs',
    date: 'March 2025',
    image: 'https://som.yale.edu/sites/default/files/styles/square_1280/public/2023-05/_DSC6264.jpg.webp?itok=3CEp6ZBH'
  },
  {
    title: 'MMS in Asset Management',
    url: 'https://som.yale.edu/programs/mms-asset-management',
    description: 'Specialized master\'s program focused on investment management and financial markets.',
    type: 'programs',
    date: 'January 2025',
    image: 'https://som.yale.edu/sites/default/files/styles/square_1280/public/2023-05/_DSC6264.jpg.webp?itok=3CEp6ZBH'
  },
  {
    title: 'International Center for Finance',
    url: 'https://som.yale.edu/centers/international-center-for-finance',
    description: 'Research center advancing the study of financial markets and institutions.',
    type: 'centers',
    date: 'February 2025'
  }
];

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedType, setSelectedType] = useState<ContentType>('all');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // In a real app, you would fetch results based on query, type and filters
  // This is just a mock implementation
  const filteredResults = mockResults.filter(result => {
    // Filter by content type
    if (selectedType !== 'all' && result.type !== selectedType) {
      return false;
    }
    
    // Simple search implementation (case-insensitive)
    if (searchQuery && !result.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !result.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Apply selected filters (if any)
    if (selectedFilters.length > 0) {
      // This is a simplified implementation - in a real app, 
      // filters would be more complex and possibly nested
      const resultTags = [
        result.type, 
        result.date ? new Date(result.date).getFullYear().toString() : null
      ].filter(Boolean);
      
      // Check if any of the selected filters match tags for this result
      if (!selectedFilters.some(filter => resultTags.includes(filter))) {
        return false;
      }
    }
    
    return true;
  });

  // Sort the results based on sortBy value
  const results = [...filteredResults].sort((a, b) => {
    if (sortBy === 'date') {
      // Sort by date (most recent first)
      const dateA = a.date ? new Date(a.date) : new Date(0);
      const dateB = b.date ? new Date(b.date) : new Date(0);
      return dateB.getTime() - dateA.getTime();
    } else if (sortBy === 'title') {
      // Sort alphabetically by title
      return a.title.localeCompare(b.title);
    } else {
      // 'relevance' - default sort order, could be enhanced with relevance scoring
      // For now, use a simple relevance based on search term frequency if there's a search query
      if (searchQuery) {
        const queryLower = searchQuery.toLowerCase();
        const scoreA = (a.title.toLowerCase().split(queryLower).length - 1) + 
                     (a.description.toLowerCase().split(queryLower).length - 1) * 0.5;
        const scoreB = (b.title.toLowerCase().split(queryLower).length - 1) + 
                     (b.description.toLowerCase().split(queryLower).length - 1) * 0.5;
        return scoreB - scoreA;
      }
      return 0;
    }
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