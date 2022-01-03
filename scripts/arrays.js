var cars = ["Mustang", "Corvette", "Jaguar"];

console.log(cars);
console.log(cars[0]);

console.log(cars[3]); // undefined

cars.push("Tesla"); // arrays are mutable in js

console.log(cars[3]); // defined

cars.pop(); // removes last array element

// built in sort method - alphabetical
cars.sort();
console.log(cars);

// reverse sort
cars.reverse();
console.log(cars);

// sorting an array of numbers
var nums = [1, 5, 2, 12, 1000, 62]
nums.sort((a, b) => a - b);
console.log(nums);