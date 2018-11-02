const $ = require('jquery');

const sayHi = () => {
    console.log("howdy");
}

sayHi();

$('body').append('<h2>jquery succesful</h2>')