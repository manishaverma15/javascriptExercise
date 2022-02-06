class Node {
  constructor(data, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let node = new Node(data);
    if (this.root === null) {
      this.root = node;
      console.log("value", node);
    } else {
      this.insertNode(this.root, node);
    }
    // if (node.data < this.root.data) {
    //   this.root.left = node;
    // } else {
    //   this.root.right = node;
    // }
  }
  insertNode(currentNode, newNode) {
    if (newNode.data < currentNode.data) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.insertNode(currentNode.left, newNode);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.insertNode(currentNode.right, newNode);
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(12);
tree.insert(4);
tree.insert(19);
tree.insert(89);
tree.insert(45);
tree.insert(23);

console.log("root", tree.root);
