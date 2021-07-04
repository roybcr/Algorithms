class CircularQueue {
  queue: Array<number | null>;
  read: number;
  write: number;
  max: number;
  constructor(size: number) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item: number): number | null {
    if (this.queue[this.write] === null) {
      this.queue[this.write++] = item;

      if (this.write > this.max) this.write = 0;
      return item;
    }
    return null;
  }

  dequeue(): number | null {
    if (this.queue[this.read] != null) {
      let item = this.queue[this.read];
      this.queue[this.read++] = null;
      if (this.read > this.max) this.read = 0;
      return item;
    }
    return null;
  }
}

let q = new CircularQueue(10);
let counter = 0;
while (counter < 100) {
  q.enqueue(counter);
  if (counter > 5) {
    q.dequeue();
  }
  console.log(...q.queue);
  counter++;
}
