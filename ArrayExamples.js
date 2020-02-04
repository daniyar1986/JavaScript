let arr = new Array();
let arr2 = [];

let fruits = ['Apple','Orange','Plum'];
fruits[3]='Lemon';
 fruits.forEach(value => {
     console.log(value);
 });

 let otherArr = ['Apple',{ name : 'Danik'}, true, ()=>{ console.log('Hi')}];
 otherArr.forEach(value => {
     console.log(value);
 });

 otherArr[3]();
 console.log(otherArr[1].name);

let fruits2 = [
    "Яблоко",
    "Апельсин",
    "Слива",
];

console.log(fruits2.pop());
console.log(fruits2);
fruits2.push("Груша");
console.log(fruits2);

console.log(fruits2.shift());
console.log(fruits2);

fruits2.unshift('Яблоко');
console.log(fruits2);

console.log();

let fruits3 = ["Apple"];
fruits3.push('Orange','Pear');
fruits3.unshift('Pineapple','Lemon');
console.log(fruits3);

let fruits4 = ["Banan"];
let arr4 = fruits4;

console.log("arr4 === fruits4 = "+(arr4 === fruits4));

arr4.push("Pear");

console.log(fruits4);

let arr5 = ["Яблоко", "Апельсин", "Груша"];

for (let i = 0; i < arr5.length; i++) {
    console.log( arr5[i] );
}
console.log();
let fruits6 = ["Яблоко", "Апельсин", "Слива"];
for (let fruit of fruits6){
    console.log(fruit);
}

console.log();
let arr6 = ["Яблоко", "Апельсин", "Груша"];

for (let key in arr6){
    console.log(arr6[key]);
}

console.log();

let fruits7 = [];
fruits7[123] = "Яблоко";
console.log(fruits7.length);

let arr7 = [1, 2, 3, 4, 5];

arr7.length = 2; // укорачиваем до двух элементов
console.log( arr7 ); // [1, 2]

arr7.length = 5; // возвращаем length как было
console.log( arr7[3] ); // undefined: значения не восстановились
arr7.length = 0;
console.log(arr7);

let arr8 = new Array("Apple","Pear","Other");
console.log(arr8);

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log( matrix[1][1] ); // 5, центральный элемент

let arr9 = [1, 2, 3];

console.log( arr9 ); // 1,2,3
console.log( String(arr9) === '1,2,3' ); // true

