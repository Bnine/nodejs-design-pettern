/*
let obj = {};
const map = new WeakMap();
map.set(obj, {name: "bnine"});
console.log(map.get(obj));
obj = undefined;
*/

let obj1 = {name: "bnine"};
let obj2 = {name: "teemo"};
const set = new WeakSet([obj1, obj2]);
console.log(set.has(obj1));
obj1 = undefined;
console.log(set.has(obj1));