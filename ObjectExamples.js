let user = new Object();
let user2= {};
let user3 = {
  name : "Danik",
  age : 30
};

console.log(user3.name);
console.log(user3.age);

user3.isAdmin = true;

console.log(user3.isAdmin);

delete user3.age;
console.log(user3['name']);

let user4 = {
    name: "John",
    age: 30,
    "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
};

console.log(user4["likes birds"]);
let key = "likes birds";
console.log(user4[key]);
delete  user4["likes birds"];

console.log();

let user5 = {
    name: "John",
    age: 30
};

key = "name";

// доступ к свойству через переменную
console.log( user5[key] ); // John (если ввели "name")


let fruit = "apple";
let bag = {
  [fruit+'Computers']:5,
};

console.log(bag.appleComputers);

let obj = {
    for: 1,
    let: 2,
    return: 3
};

console.log( obj.for + obj.let + obj.return );  // 6

let user6 = {
    noSuchProperty: undefined
};

console.log( user6.noSuchProperty === undefined ); // true означает "свойства нет"

let user7 = { name: "John", age: 30 };

console.log( "age" in user7 ); // true, user7.age существует
console.log( "blabla" in user7 ); // false, user7.blabla не существует

let user8 = {
    name: "John",
    age: 30,
    isAdmin: true
};

console.log();

for (let key in user8) {
    // ключи
    console.log( key +" : " +user8[key]);  // name, age, isAdmin
}

let message = "Hello!";
let phrase = message;


const user9 = {
    name: "John"
};

user9.age = 25; // (*)
user9.name = "danik";
console.log(user9.name);
console.log(user9.age); // 25

let user10 = {
    name: "John",
    age: 30
};

let clone = {}; // новый пустой объект

// скопируем все свойства user в него
for (let key in user10) {
    clone[key] = user10[key];
}

// теперь в переменной clone находится абсолютно независимый клон объекта.
clone.name = "Pete"; // изменим в нём данные
console.log(clone.name);
console.log( user10.name ); // в оригинальном объекте значение свойства `name` осталось прежним – John.

let user11 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user11, permissions1, permissions2);

console.log(user11);

let user12 = { name: "John" };

// свойство name перезапишется, свойство isAdmin добавится
Object.assign(user12, { name: "Pete", isAdmin: true });
console.log(user12);

let user13 = {
    name: "John",
    age: 30
};

let clone2 = Object.assign({}, user13);
console.log(clone2);