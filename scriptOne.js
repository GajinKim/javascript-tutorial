var myName = window.prompt("What's your name?"); 

document.getElementById("myButton").onclick = () => {
    var myName = document.getElementById("myText").value;
    console.log('hello, my name is', myName);
}

var age = 'a string';
age = Number(age); // converts to NaN
age = 1;
age+=1;
console.log('age is', age);
console.log(typeof age);

age = String(age);
console.log('age is', age);
console.log(typeof age);

// 0, "", null, undefined, NaN convert to false
// everything else converts to true
age = Boolean(age);
console.log('age is', age);
console.log(typeof age);

// let = limited scope (i.e. used for for loops)
// const = constant variable that can't be changed (e.g. const pi = 3.1415;)