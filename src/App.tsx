import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { SearchBar } from './components/search/SearchBar';
import { ContentTypeNav } from './components/search/ContentTypeNav';
import { FilterSidebar } from './components/search/FilterSidebar';
import { SearchResults } from './components/search/SearchResults';
import { SortSelector } from './components/search/SortSelector';
import { useSearch } from './hooks/useSearch';
import { useExpandable } from './hooks/useExpandable';

function App() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  const {
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    selectedType,
    setSelectedType,
    selectedFilters,
    toggleFilter,
    results
  } = useSearch();
  
  const {
    expandedItems: expandedCategories,
    toggleItem: toggleCategory,
  } = useExpandable(['Degree Programs']);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />

        <ContentTypeNav 
          selectedType={selectedType} 
          setSelectedType={setSelectedType} 
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <FilterSidebar
              selectedFilters={selectedFilters}
              toggleFilter={toggleFilter}
              expandedCategories={expandedCategories}
              toggleCategory={toggleCategory}
              showMobileFilters={showMobileFilters}
              setShowMobileFilters={setShowMobileFilters}
            />
          </div>

          {/* Results */}
          <div className="md:col-span-3">
            <SortSelector sortBy={sortBy} setSortBy={setSortBy} />
            <SearchResults 
              results={results} 
              searchQuery={searchQuery}
              totalResults={results.length} 
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;