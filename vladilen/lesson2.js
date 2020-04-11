function hello() {
    console.log('Hello', this)
}


const person = {
    name:'Danik',
    age: 34,
    sayHello: hello,
    sayHelloWindow : hello.bind(this),
    logInfo: function(job, phone) {
        console.group(`${this.name} info: `);
        console.log(`Name is ${this.name} Age ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phione is ${phone}`);
        console.groupEnd();
    }
};

const lena = {
    name:'Elana',
    age:25
};

// const fnLenaInfoLog = person.logInfo.bind(lena,'Frontend','87021969826');
// fnLenaInfoLog();

//person.logInfo.call(lena,'Frontend','87021969826');

person.logInfo.apply(lena,['Frontend','87021969826']);


///

const array = [1,2,3,4,5];

// function multBy(arr, n) {
//     return arr.map((i)=>{
//         return i*n;
//     })
// }
Array.prototype.multBy = function(n) {
    return this.map((i)=>{
        return i*n;
    })
};

console.log(array.multBy(20));
console.log([5,8,12].multBy(6));







