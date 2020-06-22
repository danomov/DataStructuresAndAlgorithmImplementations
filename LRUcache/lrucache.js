class Node {
  constructor(key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LRU {
  constructor(limit) {
    this.head = null;
    this.tail = null;
    this.limit = limit;
    this.cache = {};
    this.size = 0;
  }

  write(key, value) {
    this.checkSize(key);

    if (!this.cache[key]) {
      if (!this.head) {
        this.head = this.tail = new Node(key, value);
      } else {
        const node = new Node(key, value, this.head);
        this.head.prev = node;
        this.head = node;
      }

      this.cache[key] = this.head;
      this.size++;
    } else {
      const node = new Node(key, value, this.head);
      this.head.prev = node;
      this.head = node;
      this.remove(key);
      this.cache[key] = node;
      this.size++;
    }
  }

  read(key) {
    if (this.cache[key]) {
      const value = this.cache[key].value;
      this.remove(key);
      this.write(key, value);

      return value;
    }

    console.log(`Item not available in cache for key ${key}`);
  }

  remove(key) {
    const node = this.cache[key];

    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }

    delete this.cache[key];
    this.size--;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.cache = {};
  }

  checkSize(key) {
    if (this.size + 1 > this.limit && !this.cache[key]) {
      this.remove(this.tail.key);
    }
  }
}

let lruCache = new LRU(4);
lruCache.write("a", 123);
lruCache.write("b", 456);
lruCache.write("c", 789);
lruCache.write("d", 790);
lruCache.write("m", 790);
lruCache.write("m", 800);
lruCache.write("d", 800);
console.log(lruCache);
