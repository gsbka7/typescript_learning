namespace A{
    interface Animal{
        name:string;
        eat():void;
    }
    
    export class Dog implements Animal{
        name:string;
        constructor(theName:string){
            this.name=theName
        }
        eat(){
            console.log(`${this.name}吃狗糧`);
            
        }
    }
    export class Cat implements Animal{
        name:string;
        constructor(theName:string){
            this.name=theName
        }
        eat(){
            console.log(`${this.name}吃貓糧`);
            
        }
    }
    
}
let Dog = new A.Dog('狗')
Dog.eat()
let Cat = new A.Cat('貓')
Cat.eat()

