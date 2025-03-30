import { useState } from 'react';

export function useExpandable(initialExpanded: string[] = []) {
  const [expandedItems, setExpandedItems] = useState<string[]>(initialExpanded);

  const toggleItem = (item: string) => {
    setExpandedItems(prev =>
      prev.includes(item)
        ? prev.filter(c => c !== item)
        : [...prev, item]
    );
  };

  const isExpanded = (item: string) => expandedItems.includes(item);

  return {
    expandedItems,
    toggleItem,
    isExpanded
  };
} 