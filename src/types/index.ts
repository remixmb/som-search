export type ContentType = 'all' | 'programs' | 'faculty' | 'news' | 'events' | 'research' | 'centers';

export type SearchResult = {
  title: string;
  url: string;
  description: string;
  type: ContentType;
  date?: string;
  image?: string;
  applyUrl?: string;
  programStats?: Array<{
    label: string;
    value: string;
  }>;
};

export interface ContentTypeOption {
  id: ContentType;
  label: string;
  icon: React.ElementType;
}

export interface FilterCategory {
  name: string;
  options: string[];
} 