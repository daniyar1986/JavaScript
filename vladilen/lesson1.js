
const person = new Object({
    name:'Danik',
    age:35,
    greet:function () {
        console.log('Greet!')
    }});

Object.prototype.sayHello = function () {
    console.log('Hello');
};

const lena = Object.create(person);
lena.name = 'Elena';
lena.age = 29;

const str = new String('I am string');
