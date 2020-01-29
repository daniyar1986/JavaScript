function User(name){
    this.name = name;
    this.isAdmin = true;
}

let user = new User("Danik");
console.log(user.name);
console.log(user.isAdmin);

function User2() {
    console.log(new.target);
}

User2();
new User2();

function User3(name) {
    if (!new.target){
        return new User3(name);
    }
    this.name = name;
}

let vasya = User3("Vasya");
console.log(vasya.name);

console.log();

function BigUser() {
    this.name = "Vasya";
    return { name: "Godzilla"}
}
console.log(new BigUser().name);

function SmalUser() {
    this.name = "Vasya";

    return;
}
console.log(new SmalUser().name);

console.log();

function User4(name) {
    this.name = name;

    this.sayHi = function () {
        console.log("My name is : "+this.name);
    }
}

let userName = new User4("Danik");
userName.sayHi();