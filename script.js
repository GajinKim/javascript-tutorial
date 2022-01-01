var age = 21;
var firstName = "David";
var lastName = "Beckham";

var online = true;

var whatever;
whatever = null;

age+=1;
var fullName = firstName + " " + lastName; // can't use comma to concatenate strings

console.log('Your age is', age);
console.log('Hello',firstName,lastName);

console.log('Are you online?:',online);

console.log(whatever);
console.log('Full name is', fullName);

// let = limited scope (i.e. used for for loops)
// const = constant variable that can't be changed (e.g. const pi = 3.1415;)