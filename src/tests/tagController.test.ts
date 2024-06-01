import { findContent } from "../services/tagService";
import { documents } from "../data/data";

jest.mock("../data/data", () => ({
  documents: {
    animals: ["doc1", "doc2"],
    mammals: ["doc3"],
    primates: ["doc4"],
    humans: ["doc5"],
    birds: ["doc6", "doc7"],
    sparrows: ["doc8"],
    eagles: ["doc9"],
    fish: ["doc10"],
    trout: ["doc11"],
    salmon: ["doc12"],
  },
}));

describe("getTaggedContent", () => {
  it("should return documents for the given tag", () => {
    const result = findContent("animals");
    expect(result).toEqual(expect.arrayContaining(documents["animals"]));
  });

  it("should return an empty array for a nonexistent tag", () => {
    const result = findContent("nonexistentTag");
    expect(result).toEqual([]);
  });

  it("should return documents for tags with sub-tags", () => {
    const result = findContent("animals");
    const expectedDocuments = [
      ...documents["animals"],
      ...documents["mammals"],
      ...documents["birds"],
    ];
    expect(result).toEqual(expect.arrayContaining(expectedDocuments));
  });

  it("should return documents for nested sub-tags", () => {
    const result = findContent("animals");
    const expectedDocuments = [
      "doc1",
      "doc2",
      "doc3",
      "doc4",
      "doc5",
      "doc6",
      "doc7",
      "doc8",
      "doc9",
    ];
    expect(result).toEqual(expect.arrayContaining(expectedDocuments));
  });

  it("should handle tags with no documents gracefully", () => {
    const result = findContent("fish");
    const expectedDocuments = ["doc10", "doc11", "doc12"];
    expect(result).toEqual(expect.arrayContaining(expectedDocuments));
  });
});
