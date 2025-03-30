import React, { useState } from 'react';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
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
  );
}; 