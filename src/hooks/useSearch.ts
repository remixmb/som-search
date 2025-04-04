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
    description: 'A two-year program, featuring a distinctive integrated curriculum, Yale-authored "raw" cases, and international study, as well as close engagement in the intellectual life of Yale University.',
    type: 'programs',
    date: 'January 2025',
    image: 'https://placehold.co/600x400/00356B/FFFFFF?text=MBA+Program',
    applyUrl: 'https://som.yale.edu/programs/mba/admissions/application-information',
    programStats: [
      { label: 'Length of program', value: '2 years' },
      { label: 'Total students enrolled', value: '668' },
      { label: 'Degree awarded', value: 'MBA' }
    ]
  },
  {
    title: 'MBA for Executives',
    url: 'https://som.yale.edu/programs/emba',
    description: 'While you continue to advance your career, earn a full MBA degree, with a focus on an area at the nexus of business and society—asset management, healthcare, or sustainability.',
    type: 'programs',
    date: 'March 2025',
    image: 'https://placehold.co/600x400/00356B/FFFFFF?text=EMBA+Program',
    applyUrl: 'https://som.yale.edu/programs/emba/admissions/application-information',
    programStats: [
      { label: 'Length of program', value: '22 months' },
      { label: 'Degree awarded', value: 'MBA' }
    ]
  },
  {
    title: 'Master of Advanced Management Program',
    url: 'https://som.yale.edu/programs/mam',
    description: 'A nine-month program for exceptional MBA graduates of business schools that are members of the Global Network for Advanced Management. Students take a slate of advanced elective courses at Yale SOM and throughout Yale University.',
    type: 'programs',
    date: 'February 2025',
    image: 'https://placehold.co/600x400/00356B/FFFFFF?text=MAM+Program',
    applyUrl: 'https://som.yale.edu/programs/mam/admissions',
    programStats: [
      { label: 'Length of program', value: '9 months' },
      { label: 'Total students enrolled', value: '63' },
      { label: 'Degree awarded', value: 'MAM' }
    ]
  },
  {
    title: 'Master\'s in Asset Management',
    url: 'https://som.yale.edu/programs/mms-asset-management',
    description: 'Early-career students launch their career in asset management through this innovative STEM-eligible program, with instruction from leading finance scholars and practicing investors at some of the world\'s most successful institutions.',
    type: 'programs',
    date: 'January 2025',
    image: 'https://placehold.co/600x400/00356B/FFFFFF?text=Asset+Management',
    applyUrl: 'https://som.yale.edu/programs/mms-asset-management/admissions',
    programStats: [
      { label: 'Length of program', value: '9 months' },
      { label: 'Degree awarded', value: 'MMS in Asset Management' }
    ]
  },
  {
    title: 'Master\'s Degree in Global Business & Society',
    url: 'https://som.yale.edu/programs/mms-global-business-and-society',
    description: 'After a year of study in a master in management (or equivalent) degree program at a top business school around the world, including those in the Global Network for Advanced Management, students spend a year at Yale SOM in the Global Business and Society program.',
    type: 'programs',
    date: 'January 2025',
    image: 'https://placehold.co/600x400/00356B/FFFFFF?text=Global+Business+and+Society',
    applyUrl: 'https://som.yale.edu/programs/mms-global-business-and-society/admissions',
    programStats: [
      { label: 'Length of program', value: '9 months' },
      { label: 'Degree awarded', value: 'MMS in Global Business & Society' }
    ]
  },
  {
    title: 'Master\'s Degree in Public Education Management',
    url: 'https://som.yale.edu/programs/mms-public-education-management',
    description: 'A tuition-free program for emerging public education leaders serving in large, urban K-12 school systems in the United States. Students connect deeply with a small cohort while applying hands-on learnings to accelerate outcomes for the students and communities in the school systems where they work.',
    type: 'programs',
    date: 'January 2025',
    image: 'https://placehold.co/600x400/00356B/FFFFFF?text=Public+Education+Management',
    applyUrl: 'https://som.yale.edu/programs/mms-public-education-management/admissions',
    programStats: [
      { label: 'Length of program', value: '14 months' },
      { label: 'Total students enrolled', value: '30' },
      { label: 'Degree awarded', value: 'Master of Management Studies' }
    ]
  },
  {
    title: 'Master\'s Degree in Systemic Risk',
    url: 'https://som.yale.edu/programs/mms-systemic-risk',
    description: 'A first-of-its-kind, one-year specialized master\'s degree for early- and mid-career employees of central banks and other major regulatory agencies with a mandate to manage systemic risk.',
    type: 'programs',
    date: 'January 2025',
    image: 'https://placehold.co/600x400/00356B/FFFFFF?text=Systemic+Risk',
    applyUrl: 'https://som.yale.edu/programs/mms-systemic-risk/admissions',
    programStats: [
      { label: 'Length of program', value: '9 months' },
      { label: 'Degree awarded', value: 'MMS in Systemic Risk' }
    ]
  },
  {
    title: 'Master\'s in Technology Management',
    url: 'https://som.yale.edu/programs/masters-technology-management',
    description: 'A comprehensive one-year program crafted exclusively for Yale College\'s graduating engineering students who want to gain the business and leadership tool set to launch a new venture, start a career at a major tech player, or create a service that can revolutionize the world.',
    type: 'programs',
    date: 'March 2025',
    image: 'https://placehold.co/600x400/00356B/FFFFFF?text=Technology+Management',
    applyUrl: 'https://som.yale.edu/programs/masters-technology-management/admissions',
    programStats: [
      { label: 'Length of program', value: '9 months' },
      { label: 'Degree awarded', value: 'MMS in Technology Management' }
    ]
  },
  {
    title: 'Joint Degrees',
    url: 'https://som.yale.edu/programs/joint-degrees',
    description: 'Combine a Yale MBA with a degree from another Yale graduate program. Options include law, medicine, engineering, global affairs, and environmental management, among others.',
    type: 'programs',
    date: 'January 2025',
    image: 'https://placehold.co/600x400/00356B/FFFFFF?text=Joint+Degrees',
    applyUrl: 'https://som.yale.edu/programs/joint-degrees/admissions',
    programStats: [
      { label: 'Length of program', value: '2+ years' },
      { label: 'Degree awarded', value: 'MBA/MMS, MBA/JD, MBA/MEM, MBA/MS, MBA/MF, MBA/MPP, MBA/MD, MBA/MPH, MBA/MARCH, MBA/MFA, MBA/MDIV, MBA/MAR, or MBA/PhD' }
    ]
  },
  {
    title: 'PhD Program',
    url: 'https://som.yale.edu/programs/phd',
    description: 'Advanced research and scholarly training in accounting, financial economics, marketing, operations, and organizations and management.',
    type: 'programs',
    date: 'April 2024',
    image: 'https://placehold.co/600x400/00356B/FFFFFF?text=PhD+Program',
    applyUrl: 'https://gsas.yale.edu/admissions',
    programStats: [
      { label: 'Length of Program', value: '4 to 9 years' },
      { label: 'Total students enrolled', value: '51' },
      { label: 'Degree awarded', value: 'PhD' }
    ]
  },
  {
    title: 'Silver Scholars Program',
    url: 'https://som.yale.edu/programs/mba/silver-scholars',
    description: 'A unique opportunity for college seniors to earn an MBA in three years directly after graduation and move more quickly toward their career goals.',
    type: 'programs',
    date: 'February 2025',
    image: 'https://placehold.co/600x400/00356B/FFFFFF?text=Silver+Scholars',
    applyUrl: 'https://som.yale.edu/programs/mba/admissions/silver-scholars',
    programStats: [
      { label: 'Length of program', value: '3 years' },
      { label: 'Total students enrolled', value: '41' },
      { label: 'Degree awarded', value: 'MBA' }
    ]
  },
  // Faculty Publications from som.yale.edu/faculty-research/publications
  {
    title: 'Automatic Enrollment with a 12% Default Contribution Rate',
    url: 'https://som.yale.edu/faculty-research/publications/automatic-enrollment-12-default-contribution-rate',
    description: 'Research studying a retirement savings plan with a default contribution rate of 12% of income, which is much higher than previously studied defaults.',
    type: 'research',
    date: 'March 2025'
  },
  {
    title: 'Can Random Friends Seed More Buzz and Adoption? Leveraging the Friendship Paradox',
    url: 'https://som.yale.edu/faculty-research/publications/can-random-friends-seed-more-buzz-and-adoption',
    description: 'Study examining the impact of word of mouth (WOM) seeding strategies motivated by the friendship paradox, which can obtain more central nodes without knowing network structure.',
    type: 'research',
    date: 'February 2025'
  },
  {
    title: 'How Do Emotions Affect Decision Making?',
    url: 'https://som.yale.edu/faculty-research/publications/how-do-emotions-affect-decision-making',
    description: 'This chapter reviews major theories of emotion and decision making, concentrating on developments within the disciplines of psychology, economics, and decision science.',
    type: 'research',
    date: 'January 2025'
  },
  {
    title: 'Interest Rate Caps, Corporate Lending, and Bank Market Power: Evidence from Bangladesh',
    url: 'https://som.yale.edu/faculty-research/publications/interest-rate-caps-corporate-lending',
    description: 'Research on how market power in the corporate banking sector influences the effects of interest rate cap policies on credit allocation using data from Bangladesh.',
    type: 'research',
    date: 'January 2025'
  },
  {
    title: 'Opportunistic Change During a Punctuation',
    url: 'https://som.yale.edu/faculty-research/publications/opportunistic-change-during-punctuation',
    description: 'Study examining how environmental jolts can trigger more conducive conditions for driving change in organizations, focusing on frontline-driven incremental change efforts.',
    type: 'research',
    date: 'February 2025'
  },
  // Faculty Profiles
  {
    title: 'Professor James Choi',
    url: 'https://som.yale.edu/faculty-research/faculty-directory/james-choi',
    description: 'Professor of Finance at Yale School of Management, specializing in behavioral finance, household finance, and retirement savings.',
    type: 'faculty',
    image: 'https://placehold.co/400x400/00356B/FFFFFF?text=James+Choi'
  },
  {
    title: 'Professor K. Sudhir',
    url: 'https://som.yale.edu/faculty-research/faculty-directory/k-sudhir',
    description: 'James L. Frank Professor of Marketing, Private Enterprise and Management, researching competitive strategy, customer relationship management, and emerging markets.',
    type: 'faculty',
    image: 'https://placehold.co/400x400/00356B/FFFFFF?text=K.+Sudhir'
  },
  {
    title: 'Professor Julia DiBenigno',
    url: 'https://som.yale.edu/faculty-research/faculty-directory/julia-dibenigno',
    description: 'Associate Professor of Organizational Behavior, studying organizational change, employee relations, and healthcare management.',
    type: 'faculty',
    image: 'https://placehold.co/400x400/00356B/FFFFFF?text=Julia+DiBenigno'
  },
  {
    title: 'Professor Robert Shiller',
    url: 'https://som.yale.edu/faculty-research/faculty-directory/robert-shiller',
    description: 'Sterling Professor of Economics and Nobel Prize winner, known for his work on market volatility, asset prices, and behavioral economics.',
    type: 'faculty',
    image: 'https://placehold.co/400x400/00356B/FFFFFF?text=Robert+Shiller'
  },
  // Case Studies (hypothetical entries based on typical case study directory structure)
  {
    title: 'Ant Financial (A)',
    url: 'https://cases.som.yale.edu/ant-financial-a',
    description: 'This case explores the growth and strategic challenges of Ant Financial, the fintech giant that began as Alipay, a payment solution for Alibaba\'s e-commerce platforms.',
    type: 'research',
    date: 'December 2024'
  },
  {
    title: 'Netflix: Building a Global Brand',
    url: 'https://cases.som.yale.edu/netflix-building-global-brand',
    description: 'This case examines Netflix\'s transition from a DVD rental service to a global streaming platform and content creator, focusing on international expansion strategies.',
    type: 'research',
    date: 'November 2024'
  },
  {
    title: 'Walmart\'s Omnichannel Strategy',
    url: 'https://cases.som.yale.edu/walmarts-omnichannel-strategy',
    description: 'This case study analyzes Walmart\'s efforts to develop an integrated retail experience across online and physical channels in response to changing consumer behavior.',
    type: 'research',
    date: 'October 2024'
  },
  {
    title: 'Mayo Clinic: Leading the Digital Transformation of Healthcare',
    url: 'https://cases.som.yale.edu/mayo-clinic-digital-transformation',
    description: 'This case explores how Mayo Clinic is leveraging digital technologies to transform healthcare delivery while maintaining its commitment to patient-centered care.',
    type: 'research',
    date: 'January 2025'
  },
  // News items
  {
    title: 'Finding Home as a Couple at Yale SOM',
    url: 'https://som.yale.edu/news/2025/04/finding-home-couple-yale-som',
    description: 'Ivan Esquinca \'26 and Majo Guemez \'26 reflect on their experience navigating business school as husband and wife.',
    type: 'news',
    date: 'April 1, 2025',
    image: 'https://placehold.co/600x400/00356B/FFFFFF?text=Couple+at+Yale+SOM'
  },
  {
    title: 'Volunteers Teach Business and Life Lessons at New Haven School',
    url: 'https://som.yale.edu/news/2025/03/volunteers-teach-business-and-life-lessons-new-haven-school',
    description: 'A group of 25 volunteers from Yale SOM stepped into classrooms at the Roberto Clemente Leadership Academy for Global Awareness Magnet School on February 20 to teach business-based lessons as part of Junior Achievement Day.',
    type: 'news',
    date: 'March 21, 2025',
    image: 'https://placehold.co/600x400/00356B/FFFFFF?text=Volunteer+Group'
  },
  {
    title: 'Prof. Christopher Clayton Receives National Science Foundation Award to Support Geoeconomics Research',
    url: 'https://som.yale.edu/news/2025/03/clayton-receives-nsf-award',
    description: 'The award will help fund Clayton\'s scholarship, which focuses on how great powers exert economic pressure on other countries, over the next five years.',
    type: 'news',
    date: 'March 7, 2025',
    image: 'https://placehold.co/600x400/00356B/FFFFFF?text=Prof.+Clayton'
  },
  {
    title: 'Following Up: Tiago Cruz \'17, Johnson & Johnson',
    url: 'https://som.yale.edu/news/2025/02/following-tiago-cruz-17-johnson-johnson',
    description: 'As global strategy lead, analytics and data science procurement, at Johnson & Johnson, Master of Advanced Management graduate Tiago Cruz \'17 works to build mutually beneficial relationships between his organization and its suppliers.',
    type: 'news',
    date: 'February 20, 2025',
    image: 'https://placehold.co/600x400/00356B/FFFFFF?text=Tiago+Cruz'
  },
  {
    title: 'Introducing Aysha Haider, SOM\'s New Associate Director for Admissions',
    url: 'https://som.yale.edu/news/2025/03/introducing-aysha-haider',
    description: 'Yale SOM welcomes Aysha Haider as the new Associate Director for Admissions, bringing experience in higher education leadership and a passion for diversity in business education.',
    type: 'news',
    date: 'March 24, 2025',
    image: 'https://placehold.co/600x400/00356B/FFFFFF?text=Aysha+Haider'
  },
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
    
    // If there are no filters, return all results
    if (selectedFilters.length === 0) {
      return true;
    }
    
    // For each result, get its related tags for filtering
    const resultTags = [
      result.type,
      result.title,
      ...(result.programStats?.map(stat => stat.value) || []),
      result.date ? new Date(result.date).getFullYear().toString() : null
    ].filter(Boolean);
    
    // Check if any of the selected filters match tags for this result
    return selectedFilters.some(filter => {
      // Direct match
      if (resultTags.includes(filter)) return true;
      
      // Special case for MBA program
      if (filter === 'MBA' && 
          (result.title.includes('MBA') || 
           result.description.toLowerCase().includes('mba') ||
           resultTags.some(tag => tag && tag.includes('MBA')))) {
        return true;
      }
      
      // Check if filter is contained in title or description
      if (result.title.includes(filter) || 
          result.description.includes(filter)) {
        return true;
      }
      
      // Check program centers
      if ((filter.includes('Program on') || filter.includes('Center for') || filter.includes('Institute')) && 
          result.title.includes(filter.split(' ').slice(-1)[0])) {
        return true;
      }
      
      return false;
    });
  });

  // Sort the results based on sortBy value and filter relevance
  const results = [...filteredResults].sort((a, b) => {
    // First, prioritize exact matches to selected filters
    if (selectedFilters.length > 0) {
      const aMatchCount = countFilterMatches(a, selectedFilters);
      const bMatchCount = countFilterMatches(b, selectedFilters);
      
      if (aMatchCount !== bMatchCount) {
        return bMatchCount - aMatchCount; // Higher match count first
      }
    }
    
    // Then apply the sortBy logic
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

  // Helper function to count how many filters match a result
  function countFilterMatches(result: SearchResult, filters: string[]): number {
    let matches = 0;
    
    // Create an array of all the searchable content for a result
    const resultContent = [
      result.title,
      result.description,
      result.type,
      ...(result.programStats?.map(stat => stat.value) || [])
    ];
    
    // Count matches
    for (const filter of filters) {
      // Exact matches
      if (result.title === filter || 
          resultContent.some(content => content === filter)) {
        matches += 3; // Higher score for exact match
        continue;
      }
      
      // Special case for MBA
      if (filter === 'MBA' && 
         (result.title.includes('MBA') || 
          result.description.includes('MBA') ||
          resultContent.some(content => content?.includes('MBA')))) {
        matches += 2;
        continue;
      }
      
      // Partial matches
      if (resultContent.some(content => 
          content && 
          (content.includes(filter) || filter.includes(content)))) {
        matches += 1;
      }
    }
    
    return matches;
  }

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