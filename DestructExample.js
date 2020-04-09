let arr =  ['Daniyar','Myrzakanov'];

let [firstname, lastname] = arr;

console.log(firstname);
console.log(lastname);

let [name,surname] = "Daniyar Myrzakanov".split(" ");
console.log(name);
console.log(surname);

firstname = arr[0];
lastname = arr[1];
console.log(firstname);
console.log(lastname);

[firstname,,title]= ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(title);

let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

console.log(a+" "+b+" "+c);
console.log(one," ",two," ", three);

let user = {
    name: "Danik",
    age: 34
};

// цикл по ключам и значениям
for (let [key, value] of Object.entries(user)) {
    console.log(`${key} : ${value}`);
}

let map = new Map();
map.set("name", "John");
map.set("age", "30");

for (let [key, value] of map) {
    console.log(`${key}:${value}`); // name:John, then age:30
}

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name1);
console.log(name2);

console.log(rest[0]);
console.log(rest[1]);
console.log("rest.size = ", rest.length);

[firstname,lastname]=[];
console.log(firstname);
console.log(lastname);

[name="Guest", surname = "Anonymous"] = ["Julius"];
console.log(name);
console.log(surname);

//// Object
let options = {
    titleName: "Menu",
    width: 100,
    height: 200
};

let {titleName, width, height} = options;
console.log(titleName);
console.log(width);
console.log(height);

let {height1, width1, titleName1} = { titleName1: "Menu", height1: 200, width1: 100 };
console.log(titleName1);
console.log(width1);
console.log(height1);

let {width:w, height:h, titleName:t} = options;
console.log(w," ",h," ",t);

let options2 = {
    titleName2:  "Menu"
};

let {width:w2 = 100, height:h2=200, titleName2:t2} =options2;
console.log(w2," ",h2," ",t2);

let {titleName:t3} = options;
console.log(t3);

let {...restObj} = options;
console.log(restObj.titleName," ", restObj.width,"", restObj.height);
