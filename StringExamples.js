let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;


function sum(a,b) {
    return a+b;
}

console.log(`1 + 2 = ${sum(1,2)}`);

let guestList = `Guests:
    * John
    * Pete
    * Mary
`;

console.log(guestList);
console.log( "\u{1F60D}" );
console.log( 'I\'m the Walrus!' ); // I'm the Walrus!
console.log( `I'm the Walrus!` ); // I'm the Walrus!
console.log(single.length);
console.log(single[0]);
console.log(single.charAt(0));
console.log(single[single.length-1]);
console.log( single[1000] ); // undefined
console.log( single.charAt(1000) ); // '' (пустая строка)

for (let char of single){
    console.log(" "+char);
}

console.log(double.includes("ble"));
console.log(backticks.startsWith("back"));
console.log(backticks.endsWith("ks"));
console.log(backticks.slice(0,6));
console.log(backticks.substr(0,5));
console.log(backticks.substring(0,4));
console.log("a".codePointAt(0));
console.log( String.fromCodePoint(65));