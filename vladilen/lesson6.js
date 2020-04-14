const person = Object.create(
    {
        claculateAge(){
            console.log('Age:', new Date().getFullYear()-this.birthYear);
        }
    },
    {
        name: {
            value: 'Daniyar',
            enumerable: true,
            writable: true,
            configurable: true
        },
        birthYear: {
            value: 1986,
            enumerable: false,
            writable: false,
            configurable: false
        },
        age: {
            get() {
                return new Date().getFullYear()-this.birthYear;
            },
            set(v) {
                console.log('Set age', v)
            }
        }
    }
);
console.log(person);
person.name = 'Danik';

for (let key in person){
    if (person.hasOwnProperty(key)){
        console.log('Key', key, person[key]);
    }
}


// delete person.name;
//
// console.log("Person age is: ",person.age);
//
// person.age = 100;
