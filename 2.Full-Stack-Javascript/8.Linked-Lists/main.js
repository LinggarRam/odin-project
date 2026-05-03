import LinkedList from "./linkedList.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("bird");
list.append("hamster");
list.append("snake");
list.append("turtle");

// console.log("size:", list.size());
// console.log("head:", list.head());
// console.log("tail:", list.tail());

// const empty = new LinkedList();
// console.log("empty size:", empty.size());
// console.log("empty head:", empty.head());
// console.log("empty tail:", empty.tail());



// console.log("at(0):", list.at(0));
// console.log("at(1):", list.at(1));
// console.log("at(2):", list.at(2));
// console.log("at(3):", list.at(3));

// console.log("\nPop:", list.pop());
// console.log("size after pop:", list.size());
// console.log("new head:", list.head());



// console.log("contains('cat'):", list.contains("cat"));
// console.log("contains('fish'):", list.contains("fish"));

// console.log("find index('dog'):", list.findIndex("dog"));
// console.log("find index('parrot'):", list.findIndex("parrot"));
// console.log("find index('cat'):", list.findIndex("cat"));
// console.log("find index('fish'):", list.findIndex("fish"));



console.log(list.toString());

const empty = new LinkedList();
console.log("empty:", empty.toString());
