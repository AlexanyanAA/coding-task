export interface DocumentCollection {
  [key: string]: string[];
}

export interface TagHierarchy {
  [key: string]: string[];
}

export const documents: DocumentCollection = {
  animals: ["http://example.com/doc1", "http://example.com/doc2"],
  mammals: ["http://example.com/doc3"],
  primates: ["http://example.com/doc4"],
  humans: ["http://example.com/doc5"],
  birds: ["http://example.com/doc6", "http://example.com/doc7"],
  sparrows: ["http://example.com/doc8"],
  eagles: ["http://example.com/doc9"],
  fish: ["http://example.com/doc10"],
  trout: ["http://example.com/doc11"],
  salmon: ["http://example.com/doc12"],
};
