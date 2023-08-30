/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    //No items in the queue
    if (this.size <= 0) {
      this.first = new Node(val);
      this.last = this.first;
      this.size = 1;
    }
    //At least one item in the queue
    else {
      const newNode = new Node(val);
      this.last.next = newNode;
      this.last = newNode;
      this.size = this.size + 1;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    //No items in the queue
    if (this.size <= 0) {
      throw new Error("The queue is empty!")
    }
    //At least one item in the queue
    const returnItem = this.first;
    this.first = this.first.next;
    this.size = this.size - 1;
    return returnItem.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    //At least one item in queue
    if (this.size > 0) {
      return this.first.val;
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size <= 0) {
      return true;
    }
    return false;
  }
}

module.exports = Queue;
