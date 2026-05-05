import HashSet from "./HashSet.js";

const set = new HashSet();

set.set("apple");
set.set("banana");
set.set("apple");

console.log("length:", set.length());
console.log("has('apple'):", set.has("apple"));
console.log("has('grape'):", set.has("grape"));
console.log("keys():", set.keys());
console.log("entries():", set.entries());

set.remove("banana");
console.log("after remove 'banana':", set.keys());
