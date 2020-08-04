interface DataStructure<T> {
  push(newItem: T): void;
  pop(): T;
}

class Stack<T> implements DataStructure<T> {
  items: Array<T> = [];

  push(newItem: T): void {
    this.items.push(newItem);
  }
  pop(): T {
    return this.items.pop()!;
  }

  peek(): T {
    return this.items[this.items.length];
  }
}
