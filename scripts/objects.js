// objects = conatiner for properties and methods

var human = {
    name: "Rick", // we use commands instead of semi colons
    age: 65,

    eat: () => {
        console.log("Rick is eating food")
    },

    drink: () => {
        console.log("Rick is drinking alcohol")
    },

    sleep: () => {
        console.log("Rick is sleeping")
    },
};

console.log(human.name); // dot notation
console.log(human['name']); // bracket notation

document.getElementById('myButton').onclick = () => {
    human.eat();
};