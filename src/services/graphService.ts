import { GNode } from "../interfaces/GNode";

/**
 * Walks the graph starting from the given node and returns a list of all nodes in depth-first order.
 * Each node appears in the list exactly once.
 *
 * @param startNode - The starting node of the graph.
 * @returns An array of GNode representing all nodes in the graph.
 */
export const walkGraph = (startNode: GNode): GNode[] => {
  const result: GNode[] = [];
  const visited = new Set<GNode>();

  /**
   * Recursively performs a depth-first search (DFS) on the graph.
   *
   * @param node - The current node being visited.
   */
  const dfs = (node: GNode): void => {
    if (visited.has(node)) return;

    visited.add(node);
    result.push(node);

    // Recursively visit all children of the current node.
    node.getChildren().forEach(dfs);
  };

  dfs(startNode);
  return result;
};

/**
 * Finds all possible paths through the graph starting from the given node.
 * Each path is represented as a list of GNode.
 *
 * @param node - The starting node of the graph.
 * @returns A list of lists, where each inner list represents a path through the graph.
 */
export const paths = (node: GNode): GNode[][] => {
  const result: GNode[][] = [];

  /**
   * Recursively performs a depth-first search (DFS) to find all paths.
   *
   * @param currentNode - The current node being visited.
   * @param path - The path constructed so far.
   */
  const dfs = (currentNode: GNode, path: GNode[]): void => {
    const newPath = [...path, currentNode];
    const children = currentNode.getChildren();

    if (children.length === 0) {
      // If there are no children, this is a leaf node.
      result.push(newPath);
    } else {
      children.forEach((child) => dfs(child, newPath));
    }
  };

  dfs(node, []);
  return result;
};
