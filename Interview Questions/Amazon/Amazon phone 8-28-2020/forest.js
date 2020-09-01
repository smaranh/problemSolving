
class Forest {
    constructor(array) {
      this.rootNodes = [];
      this.graph = {};
      this.createTreeNodes(array);
    }
    createTreeNodes(array) {
      for (let clazz of array) {
        const {name, parent} = clazz;
        this.addToGraph(name, clazz);
        if (!parent) {
          this.rootNodes.push(this.graph[name]);
          continue;
        }
        if (!this.graph[parent.name]) this.addToGraph(parent.name, parent);
        if (!this.graph[parent.name].children) this.graph[parent.name].children = [];
        this.graph[parent.name].children.push(this.graph[name]);
      }
    }
    addToGraph(name, clazz) {
        if (!this.graph[name]) this.graph[name] = clazz;
      }
  }
  
  const traverse = (node, list) => {
    list.push(node.name);
    if (node.children) {
      for (let child of node.children) {
        traverse(child, list);
      }
    }
  }
  
  const getList = forest => {
    let nodes = forest.rootNodes;
    let list = [];
    while (nodes.length) {
      let curNode = nodes.pop();
      traverse(curNode, list);
    }
    return list;
  }
  
  const preOrder = array => {
    const clazzForest = new Forest(array);
    return getList(clazzForest);
  }
  
  let A = {name: "A", parent: null};
  let B = {name: "B", parent: A};
  let X1 = {name: "X1", parent: null};
  console.log(preOrder([{name: "B", parent: A}, {name: "C", parent: A}, {name: "X1", parent: null}, {name: "E", parent: B}, {name: "D", parent: A}, {name: "A", parent: null}, {name: "F", parent: B}]));