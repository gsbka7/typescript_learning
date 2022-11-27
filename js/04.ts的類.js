"use strict";
// 1.ts中定義類
// (1)
// class Person{
//     name:string;
//     constructor(n:string){ // 構造函式
//         this.name=n;
//     }
//     run():void{
//         console.log(this.name);
//     }
// }
// var p = new Person('name');
// p.run()
// (2) 
// class Person{
//     name:string;
//     constructor(name:string){
//         this.name=name;
//     }
//     getName():string{
//         return this.name
//     }
//     setNmae(name:string):void{
//         this.name=name
//     }
// }
// var p = new Person('name');
// console.log(p.getName());
// p.setNmae('setName')
// console.log(p.getName());
// 2. 繼承 extends super
// class Person{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     run():string{
//         return `${this.name}`
//     }
// }
// // var p = new Person('name');
// // console.log(p.run());
// class Web extends Person{
//     constructor(name:string){
//         super(name)
//     }
// }
// var w = new Web('web')
// console.log(w.run());
// ts繼承探討 父類的方法和子類一致
// class Person{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     run():string{
//         return `${this.name}`
//     }
// }
// var p = new Person('name');
// console.log(p.run());
// class Web extends Person{
//     constructor(name:string){
//         super(name)
//     }
//     run():string{
//         return `${this.name}---子類`
//     }
//     work(){
//         console.log(`${this.name} work`);
//     }
// }
// var w = new Web('web')
// console.log(w.run());
// console.log(w.work());
// 3.類裡面的修飾符
// public 公有(默認)    類裡面、子類、類外面都可訪問
// protected 保護類型   類裡面、子類可以訪問, 類外面不可訪問
// private 私有         類裡面可以訪問, 子類、類外面不可
// class Person{
//     public name:string
//     constructor(name:string){
//         this.name=name
//     }
//     run():string{
//         return `${this.name}`
//     }
// }
// var p = new Person('name');
// console.log(p.run());
// class Web extends Person{
//     constructor(name:string){
//         super(name)
//     }
//     run():string{
//         return `${this.name}---子類`
//     }
//     work(){
//         console.log(`${this.name} work`);
//     }
// }
// var w = new Web('web')
// console.log(w.run());
// console.log(w.work());
// 4.靜態屬性、方法
// class Person{
//     public name:string;
//     public age:number=20;
//     static sex='male'
//     constructor(name:string){
//         this.name=name
//     }
//     run(){
//         console.log(`${this.name} + run`);
//     }
//     work(){
//         console.log(`${this.name} + work`);
//     }
//     static print(){ // 靜態方法無法調用類的屬性
//         console.log('print' + this.sex);
//     }
// }
// // var p = new Person();
// // p.run()
// Person.print()
// 5.多態：父類定義一個方法不去實現, 讓繼承他的子類去實現
// class Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     eat(){ // 沒有寫出具體吃什麼, 讓繼承的子類去實現
//         console.log('吃的方法');
//     }
// }
// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         return this.name+ '吃狗糧'
//     }
// }
// class Cat extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         return this.name+ '吃貓糧'
//     }
// }
// 6.抽象類
class Animal {
}
