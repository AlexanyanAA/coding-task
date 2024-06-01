import { walkGraph, paths } from "../services/graphService";
import { GraphNode } from "../models/GraphNode";

describe("graphService", () => {
  describe("walkGraph", () => {
    test("should walk the graph correctly", () => {
      const nodeC = new GraphNode("C");
      const nodeB = new GraphNode("B", [nodeC]);
      const nodeA = new GraphNode("A", [nodeB]);

      const result = walkGraph(nodeA);
      expect(result.map((node) => node.getName())).toEqual(["A", "B", "C"]);
    });

    test("should handle a branching graph correctly", () => {
      const nodeD = new GraphNode("D");
      const nodeB = new GraphNode("B", [nodeD]);
      const nodeC = new GraphNode("C");
      const nodeA = new GraphNode("A", [nodeB, nodeC]);

      const result = walkGraph(nodeA);
      expect(result.map((node) => node.getName())).toEqual([
        "A",
        "B",
        "D",
        "C",
      ]);
    });

    test("should handle a complex graph with multiple paths correctly", () => {
      const nodeF = new GraphNode("F");
      const nodeE = new GraphNode("E", [nodeF]);
      const nodeD = new GraphNode("D");
      const nodeB = new GraphNode("B", [nodeD, nodeE]);
      const nodeC = new GraphNode("C", [nodeE]);
      const nodeA = new GraphNode("A", [nodeB, nodeC]);

      const result = walkGraph(nodeA);
      expect(result.map((node) => node.getName())).toEqual([
        "A",
        "B",
        "D",
        "E",
        "F",
        "C",
      ]);
    });

    test("should handle a graph with multiple children correctly", () => {
      const nodeD = new GraphNode("D");
      const nodeC = new GraphNode("C");
      const nodeB = new GraphNode("B");
      const nodeA = new GraphNode("A", [nodeB, nodeC, nodeD]);

      const result = walkGraph(nodeA);
      expect(result.map((node) => node.getName())).toEqual([
        "A",
        "B",
        "C",
        "D",
      ]);
    });
  });

  describe("paths", () => {
    test("should return all paths correctly", () => {
      const nodeC = new GraphNode("C");
      const nodeB = new GraphNode("B", [nodeC]);
      const nodeA = new GraphNode("A", [nodeB]);

      const result = paths(nodeA);
      expect(result.map((path) => path.map((node) => node.getName()))).toEqual([
        ["A", "B", "C"],
      ]);
    });

    test("should handle a branching graph correctly", () => {
      const nodeD = new GraphNode("D");
      const nodeB = new GraphNode("B", [nodeD]);
      const nodeC = new GraphNode("C");
      const nodeA = new GraphNode("A", [nodeB, nodeC]);

      const result = paths(nodeA);
      expect(result.map((path) => path.map((node) => node.getName()))).toEqual([
        ["A", "B", "D"],
        ["A", "C"],
      ]);
    });

    test("should handle a graph with multiple children correctly", () => {
      const nodeD = new GraphNode("D");
      const nodeC = new GraphNode("C");
      const nodeB = new GraphNode("B");
      const nodeA = new GraphNode("A", [nodeB, nodeC, nodeD]);

      const result = paths(nodeA);
      expect(result.map((path) => path.map((node) => node.getName()))).toEqual([
        ["A", "B"],
        ["A", "C"],
        ["A", "D"],
      ]);
    });

    test("should return all paths correctly for the given graph", () => {
      const nodeJ = new GraphNode("J");
      const nodeI = new GraphNode("I");
      const nodeH = new GraphNode("H");
      const nodeG = new GraphNode("G");
      const nodeF = new GraphNode("F");
      const nodeE = new GraphNode("E");
      const nodeD = new GraphNode("D", [nodeJ]);
      const nodeC = new GraphNode("C", [nodeG, nodeH, nodeI]);
      const nodeB = new GraphNode("B", [nodeE, nodeF]);
      const nodeA = new GraphNode("A", [nodeB, nodeC, nodeD]);

      const result = paths(nodeA);
      expect(result.map((path) => path.map((node) => node.getName()))).toEqual([
        ["A", "B", "E"],
        ["A", "B", "F"],
        ["A", "C", "G"],
        ["A", "C", "H"],
        ["A", "C", "I"],
        ["A", "D", "J"],
      ]);
    });
  });
});
