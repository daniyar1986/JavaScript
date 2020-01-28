'use strict'
// Объект пользователя
let user = {
    name: "Danik",
    age: 33
};

user.sayHi = function () {
    console.log("Hello")
};

user.sayHi();


user = {
    sayHi: function() {
        console.log("Привет");
    }
};

user.sayHi();

user = {
    name: "Джон",
    age: 30,
    sayHi(){
        console.log("Hi minimal " + this.name)
    },
    sayHi2(){
        console.log("Hi minimal " + user.age)
    }
};

user.sayHi();
user.sayHi2();

user = { name: "Джон" };
let admin = { name: "Админ" };

function sayTest() {
    console.log( this.name );
}


console.log();
user.f = sayTest;
admin.f = sayTest;

user.f();
admin.f();
admin['f']();