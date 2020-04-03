let arr = ["I", "go", "home"];

delete arr[1];

console.log(arr[1]);
console.log(arr.length);

let arr2 = ["Я", "изучаю", "JavaScript"];
arr2.splice(1, 1);
console.log(arr2);

let arr3 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
arr3.splice(0, 3, "Давай", "танцевать");
console.log(arr3);

let arr4 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

let removed = arr4.splice(0, 2);
console.log(removed);

let arr5 = ["Я", "изучаю", "JavaScript"];
arr5.splice(2, 0, "сложный", "язык");
console.log(arr5);

let arr6 = [1, 2, 5];
arr6.splice(-1, 0, 3, 4);
console.log(arr6);

let arr7 = ["t", "e", "s", "t"];
console.log(arr7.slice(1, 3));
console.log(arr7.slice(-2));

//concat
let arr8 = [1, 2];
console.log(arr8.concat([3, 4]));
console.log(arr8.concat([3, 4], [5, 6]));
console.log(arr8.concat([3, 4], 5, 6));

let arr9 = [1, 2];
let arrayLike = {
    0: "something",
    1: " too",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

console.log(arr9.concat(arrayLike));

["Danik", "Moldir", "Estai"].forEach((value, index, array) =>
    console.log(`${value} имеет позицию ${index} в ${array}`));

let arr10 = [1, 0, false];
console.log(arr10.indexOf(0));
console.log(arr10.indexOf(false));
console.log(arr10.indexOf(null));

console.log(arr10.includes(1));

const arr11 = [NaN];
console.log(arr11.indexOf(NaN));
console.log(arr11.includes(NaN));

let users = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Маша" }
];

let user = users.find(item => item.id == 1);
console.log(user.name);

let someUsers = users.filter(v => v.id < 3);
console.log(someUsers);

let result = ["Danik", "Moldir", "Estai"].map(value => value.length);
console.log(result);

let arr12 = [1, 2, 3, 4, 5];
arr12.reverse();

console.log(arr12);

let names = 'Danik, Estai, Moldir';
let arr13 = names.split(", ");

arr13.forEach(value => console.log(`Сообщение получат: ${value}`));

let arr14 = ["Test1", "Test2", "Test3"];
let str = arr14.join(":");
console.log(str);

let arr15 = [1,2,3,4,5];

let result15 = arr15.reduce((sum, current)=>sum+current,0);
console.log(result15);

console.log(Array.isArray({}));
console.log(Array.isArray([]));
