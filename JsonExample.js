let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);

console.log(typeof json);
console.log(json);

let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};

console.log( JSON.stringify(meetup) );


let user = {
    name: "John",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
};

console.log(JSON.stringify(user, null, 2));

let user2 = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

user2 = JSON.parse(user2);

console.log( user2.friends[2] ); // 2
