export default class ThreadLocalMap {
  constructor(capacity = 997) {
    this.buckets = new Array(capacity);
    this.deleted = Symbol('deleted');
  }
  set(key, val) {
    let i = this.hash(key);
    while (this.buckets[i] !== undefined) {
      if (this.buckets[i].key === key || this.buckets[i].val === this.deleted) {
        this.buckets[i] = { key, val };
        return `{${key} => ${val}}`;
      }
      i = (i + 1) % this.buckets.length;
    }
    this.buckets[i] = { key, val };
    return `{${key} => ${val}}`;
  }
  get(key) {
    let i = this.hash(key);
    while (this.buckets[i] !== undefined) {
      if (this.buckets[i].key === key && this.buckets[i].val !== this.deleted) {
        return this.buckets[i].val;
      }
      i = (i + 1) % this.buckets.length;
    }
  }
  delete(key) {
    let i = this.hash(key);
    while (this.buckets[i] !== undefined) {
      if (this.buckets[i].key === key) {
        this.buckets[i] = { key, val: this.deleted };
        return true;
      }
      i = (i + 1) % this.buckets.length;
    }
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