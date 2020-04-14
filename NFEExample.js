// let sayHi = (who)=>{
//     console.log(`Hello ${who}`)
// };
//  sayHi('Danik');


let sayHi = function func(who) {
    if (who){
        console.log(`Hello, ${who}`)
    } else {
        func('Guest')
    }
};


sayHi('Danik');
sayHi();

let welcome = sayHi;
sayHi=null;
welcome();
