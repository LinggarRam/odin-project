import HashMap from "./HashMap.js";

class HashSet extends HashMap {
  constructor(loadFactor = 0.75, initialCapacity = 16) {
    super(loadFactor, initialCapacity);
  }

  set(key) {
    super.set(key, true);
  }

  entries() {
    return this.keys();
  }

  values() {
    console.log(
      "hashSet tidak menampilkan nilai, gunakan keys() sebagai gantinya!",
    );
    return this.keys();
  }
}

export default HashSet;
