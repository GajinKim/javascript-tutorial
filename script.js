
// creates an alert requesting a user input
// var myName = window.prompt("What's your name?");

document.getElementById("myButton").onclick = () => {
    var myName = document.getElementById("myText").value;
    console.log('hello, my name is', myName);
}

// let = limited scope (i.e. used for for loops)
// const = constant variable that can't be changed (e.g. const pi = 3.1415;)