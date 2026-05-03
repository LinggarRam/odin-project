class HashMap {
  constructor(loadFactor = 0.75, initialCapacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = initialCapacity;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  _setIndex(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Mencoba untuk mengakses index diluar batas");
    }
  }

  set(key, value) {
    const index = this.hash(key);
    this._setIndex(index);

    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.size++;

    if (this.size / this.capacity >= this.loadFactor) {
      this._resize();
    }
  }

  _resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;

    console.log(`🔄 rezise capacity: ${this.capacity}`);

    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    this._setIndex(index);

    const bucket = this.buckets[index];

    for (const [k, v] of bucket) {
      if (k === key) return v;
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);
    this._setIndex(index);

    const bucket = this.buckets[index];

    for (const [k] of bucket) {
      if (k === key) return true;
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);
    this._setIndex(index);

    const bucket = this.buckets[index];
    const oriLength = bucket.length;

    this.buckets[index] = bucket.filter(([k]) => k !== key);

    if (this.buckets[index].length < oriLength) {
      this.size--;
      return true;
    }

    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  keys() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const [key] of bucket) {
        result.push(key);
      }
    }
    return result;
  }

  values() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const [, value] of bucket) {
        result.push(value);
      }
    }
    return result;
  }

  entries() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        result.push(entry);
      }
    }
    return result;
  }
}

export default HashMap;
