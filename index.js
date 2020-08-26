const { readFile, readFileSync} = require('fs');
const txt = readFileSync('./playground/hello.txt', 'utf-8');
console.log(txt);

//const person = require('./playground/person.js')
//console.log(person.name)

//CommonJs
const Dog = require('./playground/person');
let Dog1 = new Dog("Fluffy", 20);
Dog1.bark('lol');

//Es6 import
/*
import {Doggy as Doggo} from './playground/personES6';
let Dog2 = new Doggo("Rash", 100);
Dog2.bark('lul');
*/
