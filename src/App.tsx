import React, { useState } from 'react';
import { Search, Menu, Calendar, BookOpen, Users, Newspaper, Building2, GraduationCap, Award, Filter, X, ChevronDown, ChevronUp } from 'lucide-react';

type ContentType = 'all' | 'programs' | 'faculty' | 'news' | 'events' | 'research' | 'centers';

type SearchResult = {
  title: string;
  url: string;
  description: string;
  type: ContentType;
  date?: string;
  image?: string;
};

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedType, setSelectedType] = useState<ContentType>('all');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Degree Programs']);

  const contentTypes = [
    { id: 'all', label: 'All Content', icon: BookOpen },
    { id: 'programs', label: 'Programs', icon: GraduationCap },
    { id: 'faculty', label: 'Faculty & Research', icon: Users },
    { id: 'news', label: 'News & Events', icon: Newspaper },
    { id: 'centers', label: 'Centers & Initiatives', icon: Building2 },
  ];

  const filters = {
    'Degree Programs': ['MBA', 'MBA for Executives', 'Master of Advanced Management', 'Master\'s in Asset Management', 'Master\'s in Global Business & Society'],
    'Academic Areas': ['Accounting', 'Economics', 'Finance', 'Marketing', 'Operations', 'Organizational Behavior'],
    'Research Topics': ['Healthcare', 'Sustainability', 'Innovation', 'Global Markets', 'Leadership', 'Social Impact'],
    'Content Type': ['Articles', 'Case Studies', 'Working Papers', 'Events', 'Media Mentions']
  };

  const results: SearchResult[] = [
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

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const FilterSection = ({ category, options }: { category: string; options: string[] }) => {
    const isExpanded = expandedCategories.includes(category);
    return (
      <div className="border-b border-gray-200 last:border-0">
        <button
          onClick={() => toggleCategory(category)}
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <img 
                src="/assets/yalesom_logo_horizontal-min.svg" 
                alt="Yale School of Management" 
                className="h-12"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <button 
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  className="flex items-center gap-2 px-4 py-2 text-[#00356B] hover:bg-gray-50 rounded-lg"
                >
                  <Menu size={24} />
                </button>
                {showMobileMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-30">
                    <nav className="space-y-1">
                      <a href="/programs" className="block px-4 py-2 text-[#00356B] hover:bg-gray-50 text-sm font-medium">Programs</a>
                      <a href="/experience" className="block px-4 py-2 text-[#00356B] hover:bg-gray-50 text-sm font-medium">The SOM Experience</a>
                      <a href="/centers" className="block px-4 py-2 text-[#00356B] hover:bg-gray-50 text-sm font-medium">Centers & Initiatives</a>
                      <a href="/faculty" className="block px-4 py-2 text-[#00356B] hover:bg-gray-50 text-sm font-medium">Faculty & Research</a>
                      <a href="/executive" className="block px-4 py-2 text-[#00356B] hover:bg-gray-50 text-sm font-medium">Executive Education</a>
                      <a href="/alumni" className="block px-4 py-2 text-[#00356B] hover:bg-gray-50 text-sm font-medium">Alumni</a>
                      <a href="/about" className="block px-4 py-2 text-[#00356B] hover:bg-gray-50 text-sm font-medium">About</a>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Yale SOM..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00356B] focus:border-transparent text-lg"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
          </div>
        </div>

        {/* Content Type Navigation */}
        <div className="mb-8 border-b border-gray-200">
          <div className="overflow-x-auto -mx-4 px-4 md:overflow-visible md:px-0 md:-mx-0">
            <div className="flex gap-6 min-w-max md:min-w-0">
              {contentTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id as ContentType)}
                  className={`flex items-center gap-2 px-1 py-4 border-b-2 transition-colors relative -mb-[1px] ${
                    selectedType === type.id 
                      ? 'border-[#00356B] text-[#00356B] font-medium' 
                      : 'border-transparent text-gray-600 hover:text-[#00356B]'
                  }`}
                >
                  <type.icon size={20} className="flex-shrink-0" />
                  <span className="text-sm whitespace-nowrap">{type.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center gap-2 px-4 py-2 text-[#00356B] border border-[#00356B] rounded-lg hover:bg-gray-50"
          >
            <Filter size={20} />
            <span className="font-medium">Filters</span>
            {selectedFilters.length > 0 && (
              <span className="bg-[#00356B] text-white text-sm px-2 py-0.5 rounded-full">
                {selectedFilters.length}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Filters Overlay */}
        {showMobileFilters && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden">
            <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-bold text-lg text-[#00356B]">Filters</h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-4 overflow-y-auto max-h-[calc(100vh-5rem)]">
                {Object.entries(filters).map(([category, options]) => (
                  <div key={category} className="border-b border-gray-200 last:border-0">
                    <button
                      onClick={() => toggleCategory(category)}
                      className="w-full py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-semibold text-[#00356B]">{category}</h4>
                      {expandedCategories.includes(category) ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    {expandedCategories.includes(category) && (
                      <div className="space-y-2 pb-4">
                        {options.map(option => (
                          <label key={option} className="flex items-center gap-2 cursor-pointer px-2 py-1.5 hover:bg-gray-50 rounded">
                            <input
                              type="checkbox"
                              checked={selectedFilters.includes(option)}
                              onChange={() => toggleFilter(option)}
                              className="rounded border-gray-300 text-[#00356B] focus:ring-[#00356B]"
                            />
                            <span className="text-sm text-gray-700">{option}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Filter size={20} />
                  Filters
                </h3>
                {selectedFilters.length > 0 && (
                  <button
                    onClick={() => setSelectedFilters([])}
                    className="text-sm text-[#00356B] hover:underline"
                  >
                    Clear all
                  </button>
                )}
              </div>
              
              <div className="space-y-2 bg-white rounded-lg">
                {Object.entries(filters).map(([category, options]) => (
                  <FilterSection key={category} category={category} options={options} />
                ))}
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-500">
                Showing 1-20 of 91 results
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded p-1.5 text-sm"
                >
                  <option value="relevance">Most Relevant</option>
                  <option value="date">Most Recent</option>
                  <option value="title">Alphabetical</option>
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {selectedFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedFilters.map(filter => (
                  <button
                    key={filter}
                    onClick={() => toggleFilter(filter)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-sm rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {filter}
                    <X size={14} />
                  </button>
                ))}
              </div>
            )}

            <div className="space-y-8">
              {results.map((result, index) => (
                <article key={index} className={`group border-b border-gray-200 pb-8 last:border-0 ${result.type === 'programs' ? 'bg-gray-50 p-6 rounded-lg border' : ''}`}>
                  <a href={result.url} className="block">
                    <div className={`${result.type === 'programs' ? 'md:flex md:gap-6' : ''}`}>
                      {result.type === 'programs' && result.image && (
                        <div className="mb-4 md:mb-0 md:w-1/3 flex-shrink-0">
                          <img 
                            src={result.image} 
                            alt={result.title}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                      )}
                      <div className={result.type === 'programs' ? 'md:flex-1' : ''}>
                        {/* Metadata line */}
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          {result.date && (
                            <>
                              <span>{result.date}</span>
                              <span className="text-gray-300">|</span>
                            </>
                          )}
                          <span className="capitalize">{result.type}</span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-[22px] leading-[1.2] font-neue-haas font-bold text-[#00356B] group-hover:text-[#0066CC] mb-3">
                          {result.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-lg font-yale text-gray-600 leading-relaxed">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;