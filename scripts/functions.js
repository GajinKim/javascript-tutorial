function sayHello(myName) {
    console.log('hello',myName);
};

sayHello2 = () => {
    console.log('hello2');
};

sayHello3 = () => console.log('hello3');

// return is not implied for functions with brackets  (i.e. does not return square(number))
// var foo = (number, square) => {
//     square(number);
// };

// implied "return square(number);"
// var bar = (number, square) => square(number);

var myName = "David Beckham";

sayHello(myName);
sayHello2();
sayHello3();

const aBigNumber = () => 420;

console.log('here is a number', aBigNumber());

// callbacks = pass in a function as an argument

var square = (number) => number**2;
var someUselessFunction = (number, square) => square

console.log('something', someUselessFunction(42,square));