import { SearchResult } from '../types';

/**
 * Base URL for all API requests
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.som.yale.edu';

/**
 * Performs a search against the Yale SOM API
 */
export async function searchContent(
  query: string,
  options?: {
    type?: string;
    filters?: string[];
    page?: number;
    limit?: number;
    sortBy?: string;
  }
): Promise<{ results: SearchResult[]; total: number }> {
  // For now, this is a mock implementation
  // In a real app, this would make an actual API call
  
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock implementation returning empty results
  return {
    results: [],
    total: 0
  };
}

/**
 * Fetches content details by ID
 */
export async function getContentById(id: string): Promise<SearchResult | null> {
  // For now, this is a mock implementation
  // In a real app, this would make an actual API call
  
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Mock implementation returning null
  return null;
} 