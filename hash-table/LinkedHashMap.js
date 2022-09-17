import LinkedList from "../linked-list/LinkedList2.js";
  
export default class LinkedHashMap {
  constructor(capacity = 997) {
    this.buckets = new Array(capacity).fill(null).map(() => new LinkedList());
  }

  get(key) {
    const linkedList = this.buckets[this.hash(key)];
    const node = linkedList.findByValue(key);
    return node ? node.data.val : undefined;
  }

  set(key, val) {
    const linkedList = this.buckets[this.hash(key)];
    const node = linkedList.findByValue(key);
    if (!node) {
      linkedList.prepend({ key, val });
    } else {
      node.data.val = val;
    }
    return `{${key} => ${val}}`;
  }

  delete(key) {
    const linkedList = this.buckets[this.hash(key)];
    const node = linkedList.findByValue(key);
    if (node) return linkedList.removeVal(node.data);
    return false;
  }

  keyToString(key) {
    if (key === null) {
      return 'null';
    } else if (key === undefined) {
      return 'undefined';
    } else if (typeof key === 'number') {
      return key + 'number';
    } else if (typeof key === 'string') {
      return key;
    }
    return key.toString();
  }

  hashCode(key) { // djb2 hash
    const str = this.keyToString(key);
    let hash = 5381;
    for (const c of str) {
      hash = (hash * 33) + c.codePointAt(0); // hash + (hash << 5) + c.codePointAt(0)
    }
    return hash;
  }

  hash(key) {
    return this.hashCode(key) % this.buckets.length;
  }
}