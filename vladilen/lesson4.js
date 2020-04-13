console.log('Start');

console.log('Star 2');

function timeout2sec(){
    console.log('timeout2sec')
}

setTimeout(()=>{
    console.log('Inside timeout, after 2 seconds')
}, 2000);


setTimeout(timeout2sec, 5000);



console.log('End');
