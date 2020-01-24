let x = 1;
x = -x;
console.log(x);

x = 1;
let y = 3;
console.log(y-x);

let s = "Hello "+ "World";
console.log(s);
console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"
console.log(2 + 2 + '1' ); // будет "41", а не "221"
console.log( 2 - '1' ); // 1
console.log( '6' / '2' ); // 3

let z = 2 * 2 + 1;

console.log( z ); // 5

let a, b, c;

a = b = c = 2 + 2;

console.log( a ); // 4
console.log( b ); // 4
console.log( c ); // 4

a = 1;
b = 2;

c = 3 - (a = b + 1);

console.log( a ); // 3
console.log( c ); // 0

console.log( 5 % 2 ); // 1, остаток от деления 5 на 2
console.log( 8 % 3 ); // 2, остаток от деления 8 на 3
console.log( 6 % 3 ); // 0, остаток от деления 6 на 3

console.log( 2 ** 2 ); // 4  (2 * 2)
console.log( 2 ** 3 ); // 8  (2 * 2 * 2)
console.log( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)

console.log( 5 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня)
console.log( 9 ** (1/3) ); // 2 (степень 1/3 эквивалентна взятию кубического корня)

let counter = 2;
counter++;        // работает как counter = counter + 1, просто запись короче
console.log( counter ); // 3

counter = 2;
counter--;        // работает как counter = counter - 1, просто запись короче
console.log( counter ); // 1

a = (1 + 2, 3 + 4);

console.log( a ); // 7 (результат 3 + 4)