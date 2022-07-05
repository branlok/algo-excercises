class HeapNode {
  value: any;
  left: HeapNode;
  right: HeapNode;
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Heap {
  root: HeapNode | null;
  constructor() {
    this.root = null;
  }

  insertValue(value: any) {
    let newNode = new HeapNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let cursor = this.root;
      while (true) {
        if (value < cursor.value) {
          //assign to left side
          if (cursor.left === null) {
            cursor.left = newNode;
            return;
          } else {
            cursor = cursor.left;
          }
        } else if (value >= cursor.value) {
          if (cursor.right === null) {
            cursor.right = newNode;
            return;
          } else {
            cursor = cursor.right;
          }
          //asign to right side
        }
      }
    }
  }
}

export default Heap;
