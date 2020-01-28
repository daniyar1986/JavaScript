let id = Symbol();
console.log(id);

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1);
console.log(id2);
console.log(id1 == id2); // false

console.log(id1.toString());


let  user = {
    name: "Danik"
};

let id3 = Symbol("id");

user[id3]= 1;

console.log(user[id3]);

let id4 = Symbol("id");

let user2 = {
    name: "Вася",
    [id4]: 123 // просто "id: 123" не сработает
};
console.log(user2[id4]);

// читаем символ из глобального реестра и записываем его в переменную
let id123 = Symbol.for("id123"); // если символа не существует, он будет создан

// читаем его снова в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for("id123");

// проверяем -- это один и тот же символ
console.log( id123 === idAgain ); // true