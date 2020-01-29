let billion = 1000000000;
console.log(billion);

billion = 1e9;
console.log(billion);
console.log(7.3e9);

let ms = 0.000001;
console.log(ms);
ms = 1e-6;
console.log(ms);

console.log(0xff);
console.log(0xFF);

let a = 0b11111111;
console.log(a);
let b = 0o377;
if (a ==b){
    console.log("a==b");
}
let num = 255;
console.log(num.toString(16));
console.log(num.toString(2));
console.log(num.toString(8));

console.log(255..toString(16));
console.log((255).toString());

console.log(Math.floor(3.1));
console.log(Math.floor(-1.1));

console.log(Math.ceil(3.1));
console.log(Math.ceil(-1.1));

console.log(Math.round(3.1));
console.log(Math.round(3.6));

console.log(Math.trunc(3.255));

num = 1.23456;

console.log(Math.floor(num*100)/100);

num = 12.34;
console.log(num.toFixed(1));
num = 12.36;
console.log(num.toFixed(1));
console.log(num.toFixed(5));

console.log(parseInt('100px'));
console.log(parseFloat("12.3em"));
console.log(parseInt("a123"));
console.log(parseInt('0111',2));

console.log((Math.random()*10).toFixed(0));
console.log(Math.pow(2,5));
console.log( Math.max(3, 5, -10, 0, 1) );
console.log(  Math.min(1, 2) );
