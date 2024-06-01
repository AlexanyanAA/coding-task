import { GNode } from '../interfaces/GNode';

export class GraphNode implements GNode {
    private name: string;
    private children: GNode[];

    constructor(name: string, children: GNode[] = []) {
        this.name = name;
        this.children = children;
    }

    getName(): string {
        return this.name;
    }

    getChildren(): GNode[] {
        return this.children;
    }
}
