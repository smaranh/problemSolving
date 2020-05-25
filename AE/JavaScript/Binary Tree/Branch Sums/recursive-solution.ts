// O(N) time - where N is the nodes in BST
// O(N) space - where N is the nodes in BST

// This is the class of the input root.
// Do not edit it.
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
  
  function branchSums(root) {
    // Write your code here.
    const sumArray = [];
    recurseBranch(root, sumArray);
    return sumArray;
  }
  
  function recurseBranch(node, array, sum = 0) {
    if (!node) {
        return;
    }
    sum += node.value;
    if (node.left || node.right) {
        recurseBranch(node.left, array, sum);
        recurseBranch(node.right, array, sum);
    } else {
        array.push(sum);
    }
}