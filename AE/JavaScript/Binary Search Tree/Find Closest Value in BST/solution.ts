// O(log n) time - n is the number of nodes in the tree
// O(1) space
function findClosestValueInBst(tree, target) {
    // Write your code here.
    if (!tree) {
        return null;
    }
    let node = tree;
    let closest = node.value;
    while (closest - target !== 0) {
        if (!node) {
            break;
        }
        if (Math.abs(closest - target) > Math.abs(node.value - target)) {
            closest = node.value;
        }
        if (target > node.value) {
            node = node.right;
        } else {
            node = node.left;
        }
    }
    return closest;
}  