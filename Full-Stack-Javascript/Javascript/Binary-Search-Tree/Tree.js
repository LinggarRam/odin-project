import BSTNode from "./BSTNode.js";

class Tree {
  constructor(array) {
    const cleanArray = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(cleanArray);
  }

  buildTree(array) {
    if (array.length === 0) return null;

    const mid = Math.floor(array.length / 2);
    const node = new BSTNode(array[mid]);

    node.left = this.buildTree(array.slice(0, mid));
    node.right = this.buildTree(array.slice(mid + 1));

    return node;
  }

  includes(value) {
    let current = this.root;

    while (current !== null) {
      if (value === current.data) return true;
      if (value < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  insert(value) {
    const newNode = new BSTNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value === current.data) return;

      if (value < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  deleteItem(value) {
    this.root = this._deleteRecursive(this.root, value);
  }

  _deleteRecursive(node, value) {
    if (node === null) return null;

    if (value < node.data) {
      node.left = this._deleteRecursive(node.left, value);
    } else if (value > node.data) {
      node.right = this._deleteRecursive(node.right, value);
    } else {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      let successor = node.right;
      while (successor.left !== null) {
        successor = successor.left;
      }
      node.data = successor.data;

      node.right = this._deleteRecursive(node.right, successor.data);
    }
    return node;
  }

  levelOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("function callback diperlukan");
    }

    if (this.root === null) return;

    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();

      callback(current.data);

      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
  }

  inOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("Function Callback diperlukan");
    }
    this._inOrderRecursive(this.root, callback);
  }

  _inOrderRecursive(node, callback) {
    if (node === null) return;

    this._inOrderRecursive(node.left, callback);
    callback(node.data);
    this._inOrderRecursive(node.right, callback);
  }

  preOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("Function callback diperlukan");
    }
    this._preOderRecursive(this.root, callback);
  }

  _preOderRecursive(node, callback) {
    if (node === null) return;

    callback(node.data);
    this._preOderRecursive(node.left, callback);
    this._preOderRecursive(node.right, callback);
  }

  postOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("Function callback diperlukan");
    }
    this._postOrderRecursive(this.root, callback);
  }

  _postOrderRecursive(node, callback) {
    if (node === null) return;

    this._postOrderRecursive(node.left, callback);
    this._postOrderRecursive(node.right, callback);
    callback(node.data);
  }

  height(value) {
    const targetNode = this._findNode(this.root, value);
    if (targetNode === null) return undefined;
    return this._heightRecursive(targetNode);
  }

  _findNode(node, value) {
    if (node === null) return null;
    if (value === node.data) return node;
    if (value < node.data) return this._findNode(node.left, value);
    return this._findNode(node.right, value);
  }

  _heightRecursive(node) {
    if (node === null) return -1;

    const leftHeight = this._heightRecursive(node.left);
    const rightHeight = this._heightRecursive(node.right);

    return 1 + Math.max(leftHeight, rightHeight);
  }

  depth(value) {
    let current = this.root;
    let edgeCount = 0;

    while (current !== null) {
      if (value === current.data) return edgeCount;
      if (value < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      edgeCount++;
    }
    return undefined;
  }

  isBalanced() {
    return this._checkedBalanced(this.root) !== -1;
  }

  _checkedBalanced(node) {
    if (node === null) return 0;

    const leftHeight = this._checkedBalanced(node.left);
    if (leftHeight === -1) return -1;

    const rightHeight = this._checkedBalanced(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    return 1 + Math.max(leftHeight, rightHeight);
  }

  rebalance() {
    const sortedValue = [];
    this.inOrderForEach((val) => sortedValue.push(val));
    this.root = this.buildTree(sortedValue);
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null || node === undefined) return;
  prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
};

export { Tree, prettyPrint };
