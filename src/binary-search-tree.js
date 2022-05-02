const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.parent = null;
  }

  root() {
    return this.parent;
  }

  add(data) {
    this.parent = addData(this.parent, data);

    function addData(node, data) {
      if (node === null) return new Node(data);

      if (node.data === data) return;

      data < node.data
        ? (node.left = addData(node.left, data))
        : (node.right = addData(node.right, data));

      return node;
    }
  }

  has(data) {
    return searchWithin(this.parent, data);

    function searchWithin(node, data) {
      if (!node) return false;
      if (node.data === data) return true;

      return data < node.data ? searchWithin(node.left, data) : searchWithin(node.right, data);
    }
  }

  find(data) {
    if (data === this.parent.data) return this.parent;
    let node = this.parent;

    return findInside(data, node);

    function findInside(data, node) {
      return data > node.data
        ? findRightLeft(data, node.right)
        : data < node.data
        ? findRightLeft(data, node.left)
        : node;
    }

    function findRightLeft(data, nextNode) {
      return nextNode ? findInside(data, nextNode) : null;
    }
  }

  remove(data) {
    this.parent = removeNode(this.parent, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.parent) return;

    let node = this.parent;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.parent) return;

    let node = this.parent;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
