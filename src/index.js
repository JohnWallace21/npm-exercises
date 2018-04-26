const $ = require('jquery');

const sayHello = () => {
    console.log("Hello");
};



sayHello();

$("body").css("background-color", "green");


const welcome = require('./say-hello.js');

console.log(welcome);