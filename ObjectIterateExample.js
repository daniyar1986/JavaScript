let range = {
    from : 1,
    to: 5
};

range[Symbol.iterator] = function(){
  return {
      current:this.from,
      last:this.to,
      next(){
          if (this.current <= this.last){
              return { done: false, value:this.current++};
          } else {
              return {done:true};
          }
      }
  };
};

for (let num of range){
    console.log(num);
}

for (let char of "Danik")
    console.log(char);

let str = '𝒳😂';
for (let char of str) {
    console.log( char ); // 𝒳, а затем 😂
}

let str2 = "Hello";

let iterator = str2[Symbol.iterator]();

while (true){
    let result =  iterator.next();
    if (result.done) break;
    console.log(result.value);
}

let arr = Array.from(range, num=>num*num);
console.log(arr);
