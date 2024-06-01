import { wordCount } from "../services/wordCountService";
import fs from "fs";

// Mock the fs.readFileSync function
jest.mock("fs");

describe("wordCount", () => {
  it("should return the correct word counts for a given text file", () => {
    // Mock file content
    const fileContent = "a a the the of a";
    (fs.readFileSync as jest.Mock).mockReturnValue(fileContent);

    const result = wordCount("dummyPath");

    expect(result).toEqual({
      a: 3,
      the: 2,
      of: 1,
    });
  });

  it("should return an empty object for an empty file", () => {
    // Mock empty file content
    const fileContent = "";
    (fs.readFileSync as jest.Mock).mockReturnValue(fileContent);

    const result = wordCount("dummyPath");

    expect(result).toEqual({});
  });

  it("should handle case insensitivity", () => {
    // Mock file content with mixed case
    const fileContent = "Hello hello HELLO";
    (fs.readFileSync as jest.Mock).mockReturnValue(fileContent);

    const result = wordCount("dummyPath");

    expect(result).toEqual({
      hello: 3,
    });
  });

  it("should handle punctuation correctly", () => {
    // Mock file content with punctuation
    const fileContent = "Hello, world! Hello. Hello?";
    (fs.readFileSync as jest.Mock).mockReturnValue(fileContent);

    const result = wordCount("dummyPath");

    expect(result).toEqual({
      hello: 3,
      world: 1,
    });
  });
});
