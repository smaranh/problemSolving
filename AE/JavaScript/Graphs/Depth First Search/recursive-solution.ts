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
      // Write your code here.
        array.push(this.name);
        for (let child of this.children) {
            child.depthFirstSearch(array);
        }
        return array;
    }
}