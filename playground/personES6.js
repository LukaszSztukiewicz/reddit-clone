export default class Doggy {
    constructor(name, speed){
        this.name = name;
        this.speed = speed*2;
    }
    bark(xd){
        console.log(`Hello there ${this.name} ${xd}`);
    }
}
