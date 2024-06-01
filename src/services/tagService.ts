import { TagHierarchy, documents } from "../data/data";

// Hierarchy of tags and their sub-tags.
const tagHierarchy: TagHierarchy = {
  animals: ["mammals", "birds"],
  mammals: ["primates"],
  primates: ["humans"],
  humans: [],
  birds: ["sparrows", "eagles"],
  sparrows: [],
  eagles: [],
  fish: ["trout", "salmon"],
  trout: [],
  salmon: [],
};

export const findContent = (startTag: string): string[] => {
  const result: Set<string> = new Set();

  const helper = (tag: string) => {
    const currentSubtags = tagHierarchy[tag];
    const currentValues = documents[tag];

    if (currentValues) {
      currentValues.forEach((value) => result.add(value));
    }

    if (currentSubtags) {
      currentSubtags.forEach((subtag) => helper(subtag));
    }
  };

  helper(startTag);

  return Array.from(result);
};
