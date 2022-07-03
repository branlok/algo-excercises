//implement a binary search tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  #traverse(value, node) {
    if (value < node.value && node.left) {
      this.#traverse(value, node.left);
    } else if (value >= node.value && node.right) {
      this.#traverse(value, node.right);
    }

    if (value < node.value) {
      node.left = new Node(value);
    } else {
      node.right = new Node(value);
    }
  }
  insertValue(value) {
    //encapsulate into a node object
    let newValue = new Node(value);

    //if tree is empty
    if (this.root === null) {
      this.root = newValue;
    } else {
      //run a recursive check/ or use a while loop to iterate until value is placed.
      this.#traverse(value, this.root);
    }
  }

  //search
  //   searchValue(value) {}

  //printing data strucutre
  //inorder,
  //preorder,
  //postorder,
}

let bst = new BinarySearchTree();
bst.insertValue(1);
bst.insertValue(2);
bst.insertValue(-2);
bst.insertValue(4);
bst.insertValue(-5);

console.log(bst);
