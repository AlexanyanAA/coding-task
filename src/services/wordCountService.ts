import fs from "fs";

/**
 * Reads a text file and counts the occurrences of each word in the file.
 *
 * @param filePath - The path to the text file to be read.
 * @returns A record (object) where the keys are words and the values are the counts of those words.
 */
export const wordCount = (filePath: string): Record<string, number> => {
  const text = fs.readFileSync(filePath, "utf-8");

  // Use a regular expression to match all words in the text
  // \w+ matches sequences of word characters (letters, digits, and underscores)
  // g flag ensures all matches in the string are found
  const words = text.match(/\w+/g) || [];

  // Initialize an empty object to store word counts
  const wordCounts: Record<string, number> = {};
  // Iterate over each word in the words array
  words.forEach((word) => {
    word = word.toLowerCase();

    if (!wordCounts[word]) {
      wordCounts[word] = 0;
    }

    wordCounts[word]++;
  });

  return wordCounts;
};
