let str = "Hello";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log();

let n = 1.23456;
console.log(n.toFixed(3));
console.log(typeof 0);
console.log(typeof new Number(0));

let zero = new Number(0);

if (zero){
    console.log( "zero имеет «истинное» значение?!?" );
}

let num = Number("123"); // превращает строку в число
console.log(num+" is "+typeof num);

