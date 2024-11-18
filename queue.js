export default class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue: Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue: Remove the element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty!";
    }
    return this.items.shift(); // shift removes the first element
  }

  // Peek: View the element at the front without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty!";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }

  // Print the queue
  print() {
    console.log(this.items.toString());
  }
}
