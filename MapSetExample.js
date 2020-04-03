let map = new Map();

map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");

console.log(map.get("1"));
console.log(map.get(1));
console.log(map.get(true));

console.log("Map size = "+map.size);

let danik = {name:"Danik"};

let visitsCountMap = new Map();

visitsCountMap.set(danik,123);
console.log(visitsCountMap.get(danik));


let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
]);

for (let vegetableKey of recipeMap.keys())
    console.log(vegetableKey);

for (let vegetableValue of recipeMap.values())
    console.log(vegetableValue);

for (let keyValue of recipeMap.entries())
    console.log(keyValue);

recipeMap.forEach((value, key) => {
    console.log(`${key} = ${value}`)
});

let map2 = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
]);

console.log( map2.get('1') );

let obj = {
    name: "John",
    age: 30
};

let map3 = new Map(Object.entries(obj));
console.log(map3);

let map4 = new Map();
map4.set('banana', 1);
map4.set('orange', 2);
map4.set('meat', 4);

let obj4 = Object.fromEntries(map4.entries());
console.log(obj4.orange);


//Set

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log("set.size ="+set.size);
for(let username of set)
    console.log(username.name);
set.forEach(value => console.log(value.name));

console.log(set.keys());
console.log(set.values());
