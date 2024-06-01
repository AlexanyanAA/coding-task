This project implements a series of functions and an HTTP server as described in the provided coding test. The tasks include traversing a graph, generating all possible paths through a graph, counting word occurrences in a text file, and creating an HTTP server to manage document tags, all using TypeScript.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Running Tests](#running-tests)
5. [Explanation of Implemented Functions](#explanation-of-implemented-functions)

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)
- TypeScript (>= 4.x)

## Installation

1. Clone the repository:

   ```sh
   git clone <repository_url>
   cd coding-task

   ```

2. Install the dependencies:
   npm install

3. Build the project:
   npm run build

## Usage

    npm run start

## Running Tests

    npm run test

## Explanation of Implemented Functions

1. walkGraph(node: GNode): GNode[]
   This function returns a list containing every node in the graph starting with the given node. Each node appears in the list exactly once.

2. paths(node: GNode): GNode[][]
   This function returns a list of lists, representing all possible paths through the graph starting with the given node.

3. wordCount(filePath: string): Promise<Record<string, number>>
   This function reads a text file and returns a record where the keys are words and the values are the number of times each word appears in the file.

4. findContent(tag: string): string[]
   This function retrieves all documents associated with a given tag and its sub-tags.
