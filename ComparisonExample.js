console.log(2>1);
console.log(2==1);
console.log(2!=1);

let result = 5>4;
console.log("5>4 = "+result);

console.log( 'Я' > 'А' ); // true
console.log( 'Кот' > 'Код' ); // true
console.log( 'Сонный' > 'Сон' ); // true

console.log('2'>1);
console.log( true == 1 ); // true
console.log(false == 0);

let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // true!
console.log("");
console.log( 0 == false ); // true
console.log( '' == false ); // true

console.log();
console.log( 0 === false ); // false, так как сравниваются разные типы
console.log( null === undefined ); // false
console.log( null == undefined ); // true

console.log();
console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true
console.log()

console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)