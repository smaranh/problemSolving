// O(N) time - N is nodes in tree
// O(D) space - D is Depth of tree
function nodeDepths(root) {
    // Write your code here.
    if (!root) return null;
    return findTreeDepth(root);
}

function findTreeDepth(node, depth = 0) {
    if (!node) return 0;
    return findTreeDepth(node.left, depth+1) + 
        findTreeDepth(node.right, depth+1) + depth;
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