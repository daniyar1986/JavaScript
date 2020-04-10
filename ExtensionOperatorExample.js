function sum(a,b) {
    return a+b;
}

console.log(sum(1,2,3,4,5));

function sumAll(...args) {
    let sum = 0;

    for (let arg of args){
        sum+=arg;
    }

    return sum;
}

console.log(sumAll(1));
console.log(sumAll(1,2));
console.log(sumAll(1,2,3));

function showName(firstName, lastName, ...titles) {
    console.log(firstName," ",lastName);

    console.log(titles[0]);
    console.log(titles[1]);
    console.log("titles size = ", titles.length);
}

showName("Daniyar","Myrzakanov","Consul", "Imperator");

function showName2() {
    console.log( arguments.length );
    console.log( arguments[0] );
    console.log( arguments[1] );

    // Объект arguments можно перебирать
    // for (let arg of arguments) alert(arg);
}

// Вывод: 2, Юлий, Цезарь
showName2("Юлий", "Цезарь");

// Вывод: 1, Илья, undefined (второго аргумента нет)
showName2("Илья");

console.log(Math.max(3,5,1));

let arr = [3,5,1];
console.log(Math.max(arr));
console.log(Math.max(...arr));

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log(Math.max(...arr1, ...arr2));

console.log(Math.max(...arr1,2,...arr2,25));

let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];

let merged = [0,...arr3, 2, ...arr4];
console.log(merged);

let str = "Welcome";
console.log([...str]);
console.log(Array.from(str));

