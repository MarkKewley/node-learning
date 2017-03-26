const square = x => x * x;

console.log(square(2));

//nuiances between function and arrow functions


let user = {
    name: 'Mark',
    sayHi: () => console.log(`Hi I'm ${this.name}`),
    sayHiAlt () { console.log(`Hi I'm ${this.name}`) },
    checkThis() {
        console.log(arguments);
    }
};
// this doesn't bind so we will get underfined since 'this' will refer to global this
user.sayHi();

user.sayHiAlt();
user.checkThis(1, 2, 3);