// O(N) time - N in nodes in tree
// O(D) space - D is depth of tree

function nodeDepths(root) {
    // Write your code here.
    if (!root) return 0;
    const nodes = [[root, 0]];
    let depth = 0;
    while (nodes.length) {
        let elem = nodes.pop();
        let curNode = elem[0];
        let curDepth = elem[1];
        if (curNode.right) nodes.push([curNode.right, curDepth+1]);
        if (curNode.left) nodes.push([curNode.left, curDepth+1]);
        depth += curDepth;
    }
    return depth;
}

// This is the class of the input binary tree.
class BinaryTree {
    value: any;
    left: any;
    right: any;
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}  