let user = {
    name: "Danik",
    age: 34
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

for (let key of Object.keys(user)){
    console.log(key);
}

for (let value of Object.values(user)){
    console.log(value);
}

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key,value]) => [key, value * 2])
);

console.log(doublePrices.meat);
