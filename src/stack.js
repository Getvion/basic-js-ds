const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  array = [];
  push(element) {
    this.array.splice(0, 0, element);
  }

  pop() {
    return this.array.shift();
  }

  peek() {
    return this.array[0];
  }
}

module.exports = {
  Stack,
};
