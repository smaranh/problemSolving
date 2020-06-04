class DFSNode {
    name: string
    children: DFSNode[]
    constructor(name: string) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new DFSNode(name));
      return this;
    }
  
    depthFirstSearch(array) {
      const queue = [this as DFSNode];
      while (queue.length) {
        let node = queue.shift();
        array.push(node.name);
        queue.unshift(...node.children);
      }
      return array;
    }
}