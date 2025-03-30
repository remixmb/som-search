import React from 'react';
import { BookOpen, GraduationCap, Users, Newspaper, Building2 } from 'lucide-react';
import { ContentType, ContentTypeOption } from '../../types';

interface ContentTypeNavProps {
  selectedType: ContentType;
  setSelectedType: (type: ContentType) => void;
}

export const ContentTypeNav: React.FC<ContentTypeNavProps> = ({ 
  selectedType, 
  setSelectedType 
}) => {
  const contentTypes: ContentTypeOption[] = [
    { id: 'all', label: 'All Content', icon: BookOpen },
    { id: 'programs', label: 'Programs', icon: GraduationCap },
    { id: 'faculty', label: 'Faculty & Research', icon: Users },
    { id: 'news', label: 'News & Events', icon: Newspaper },
    { id: 'centers', label: 'Centers & Initiatives', icon: Building2 },
  ];

  return (
    <div className="mb-8 border-b border-gray-200">
      <div className="overflow-x-auto -mx-4 px-4 md:overflow-visible md:px-0 md:-mx-0">
        <div className="flex gap-6 min-w-max md:min-w-0">
          {contentTypes.map(type => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
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
  );
}; 