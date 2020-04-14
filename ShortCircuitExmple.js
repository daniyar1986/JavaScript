let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}

name = "Pete";

sayHi();

function makeWorker() {
    let name = "Pete";

    return function() {
        console.log(name);
    };
}

name = "John";

// create a function
let work = makeWorker();

// call it
work();

function sayHiBye(firstName, lastName) {
    function getFullName() {
        return firstName+" "+lastName;
    }

    console.log('Hello '+getFullName());
    console.log('Bye '+getFullName());
}

sayHiBye('Daniyar','Myrzakanov');

function User(name) {
    this.sayHi = function () {
        console.log(name)
    }
}

let user = new User('Danik');
user.sayHi();

function makeCounter() {
    let count = 0;

    return function () {
        return count++
    }
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

function sum(a) {
    return function (b) {
        return a+b;
    }
}

console.log(sum(1)(2));

window.console.log('Привет');
console.log('Привет');
