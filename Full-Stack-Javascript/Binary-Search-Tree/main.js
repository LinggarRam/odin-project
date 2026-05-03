import { Tree, prettyPrint } from "./Tree.js";

const randomArray = (size) =>
  Array.from({ length: size }, () => Math.floor(Math.random() * 100));

console.log("Buat BST dari array random < 100");
const arr = randomArray(15);
console.log("Array:", arr);

const tree = new Tree(arr);
prettyPrint(tree.root);

console.log("\nKonfirmasi tree seimbang");
console.log("isBalanced:", tree.isBalanced());

console.log("\nPrint semua traversal order");

const levelOrder = [];
tree.levelOrderForEach((v) => levelOrder.push(v));
console.log("Level-Order:", levelOrder);

const preOrder = [];
tree.preOrderForEach((v) => preOrder.push(v));
console.log("Pre-Order  :", preOrder);

const postOrder = [];
tree.postOrderForEach((v) => postOrder.push(v));
console.log("Post-Order :", postOrder);

const inOrder = [];
tree.inOrderForEach((v) => inOrder.push(v));
console.log("In-Order   :", inOrder);

console.log("\nUnbalance tree dengan insert nilai > 100");
tree.insert(150);
tree.insert(200);
tree.insert(250);
tree.insert(300);
tree.insert(350);
console.log("Setelah insert 150, 200, 250, 300, 350:");
prettyPrint(tree.root);

console.log("\nKonfirmasi tree TIDAK seimbang");
console.log("isBalanced:", tree.isBalanced());

console.log("\nRebalance tree");
tree.rebalance();
prettyPrint(tree.root);

console.log("\nKonfirmasi tree seimbang kembali");
console.log("isBalanced:", tree.isBalanced());

console.log("\nPrint semua traversal setelah rebalance");

const levelOrder2 = [];
tree.levelOrderForEach((v) => levelOrder2.push(v));
console.log("Level-Order:", levelOrder2);

const preOrder2 = [];
tree.preOrderForEach((v) => preOrder2.push(v));
console.log("Pre-Order  :", preOrder2);

const postOrder2 = [];
tree.postOrderForEach((v) => postOrder2.push(v));
console.log("Post-Order :", postOrder2);

const inOrder2 = [];
tree.inOrderForEach((v) => inOrder2.push(v));
console.log("In-Order   :", inOrder2);

console.log("\nTest height, depth, includes, deleteItem");
const rootVal = tree.root.data;
console.log(`height(${rootVal}):`, tree.height(rootVal));
console.log(`depth(${rootVal}):`, tree.depth(rootVal));
console.log("includes(150):", tree.includes(150));
console.log("includes(999):", tree.includes(999));

tree.deleteItem(150);
console.log("after deleteItem(150), includes(150):", tree.includes(150));
