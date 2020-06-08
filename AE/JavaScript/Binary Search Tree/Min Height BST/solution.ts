function minHeightBst(array) {
    // Write your code here.
    return createTree(array, null);
}

function createTree(array, tree) {
    if (array.length === 0) {
        return;
    }
    let rootIdx = Math.round((array.length - 1)/2);
    if (tree === null) {
        tree = new BST(array[rootIdx]);
    } else {
        tree.insert(array[rootIdx]);
    }
    createTree(array.slice(0,rootIdx), tree);
    createTree(array.slice(rootIdx+1), tree);
    return tree;
}

class BST {
    value:any;
    left: any;
    right: any;
constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

insert(value) {
    if (value < this.value) {
    if (this.left === null) {
        this.left = new BST(value);
    } else {
        this.left.insert(value);
    }
    } else {
    if (this.right === null) {
        this.right = new BST(value);
    } else {
        this.right.insert(value);
    }
    }
}
}  