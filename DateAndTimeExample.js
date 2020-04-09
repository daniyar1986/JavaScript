let now = new Date();
console.log(now);

let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

let Jan02_1970 = new Date(24*3600*1000);
console.log(Jan02_1970);

console.log("now getTimestamp", now.getTime());

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );

let date = new Date("2017-01-26");
console.log(date);

let date2 = new Date(2020,4);
console.log(date2);

let date3 = new Date();
console.log("Year ", date3.getFullYear());
console.log("Month ", date3.getMonth());
console.log("Date", date3.getDate());
console.log("Hour", date3.getHours());
