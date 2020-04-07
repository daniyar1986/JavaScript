let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok");

console.log(weakMap.get(obj));

let john = { name: "John" };

let weakMap2 = new WeakMap();
weakMap2.set(john, "...");

john = null;
console.log(weakMap2.get(john));

let visitedSet = new WeakSet();

john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John заходил к нам
visitedSet.add(pete); // потом Pete
visitedSet.add(john); // John снова

// visitedSet сейчас содержит двух пользователей

// проверим, заходил ли John?
console.log(visitedSet.has(john)); // true

// проверим, заходила ли Mary?
console.log(visitedSet.has(mary)); // false
