// function createCalcFunction(n) {
//     return function () {
//         console.log(1000*n);
//     }
// }
//
// //first
// createCalcFunction(42)();
//
// //second
// const calc =  createCalcFunction(42);
// calc();
//

function createIncrement(n) {
    return function (num) {
        return n+num;
    }
}

const addOne = createIncrement(1);
console.log(addOne(10));
console.log(addOne(41));

const addTen = createIncrement(10);
console.log(addTen(10));
console.log(addTen(41));


function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com');
console.log(comUrl('google'));
console.log(comUrl('netflix'));

const  kzUrl = urlGenerator('kz');
console.log(kzUrl('arbuz'));
console.log(kzUrl('yandex'));


function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name:'Danik', age:34, job:'Backend'};
const person2 = {name:'Danik', age:34, job:'FullStack'};

function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}

bind(person1,logPerson)();
bind(person2,logPerson)();
