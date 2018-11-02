const $ = require('jquery');

const sayHi = () => {
    console.log("howdy");
}

sayHi();

$('body').append('<h2>jquery succesful</h2>')

// const user = require('./say-hello');
// console.log(user.niceMessage());

import user from './say-hello.js'
import colors from './colors.js'

console.log(user.sayHello());
console.log(user.add(3,4))
$('body').append(user.addAHeader('Your a cool guy','coolGuy'));
colors.addABackground('red');
colors.changeColor('h2','purple')
colors.changeColor('h1','blue')
colors.changeColor('#coolGuy','pink')
user.newAppend('body', '<p>' ,'This is a example', '</p>');
colors.changeColor('p','orange');

// console.log(message.sayHello());