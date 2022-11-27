"use strict";
var A;
(function (A) {
    class Dog {
        constructor(theName) {
            this.name = theName;
        }
        eat() {
            console.log(`${this.name}吃狗糧`);
        }
    }
    A.Dog = Dog;
    class Cat {
        constructor(theName) {
            this.name = theName;
        }
        eat() {
            console.log(`${this.name}吃貓糧`);
        }
    }
    A.Cat = Cat;
})(A || (A = {}));
let Dog = new A.Dog('狗');
Dog.eat();
let Cat = new A.Cat('貓');
Cat.eat();
