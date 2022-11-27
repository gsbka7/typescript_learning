// function printLabel(labelInfo:{label:string}):void {
//     console.log('printLabel');
// }
// // printLabel('string') // 錯誤
// // printLabel({name: 'name'}) // 錯誤
// printLabel({label:'label'}) // 正確


// API：行為和行動的規範, 對批量方法進行約束

// 傳入物件的約束, 屬性API
// interface FullName{
//     firstName:string; //;結束
//     secondName:string;
// }

// function printName(name:FullName) {
//     console.log(name.firstName + '--' + name.secondName)
    
// }
// var obj = {
//     age:20,
//     firstName:'first',
//     secondName:'second'
// }

// printName(obj)


// interface FullName{
//     firstName:string; //;結束
//     secondName:string;
// }

// function printName(name:FullName) {
//     console.log(name.firstName + '--' + name.secondName)
    
// }
// function printInfo(info:FullName) {
//     console.log(info.firstName+info.secondName)
    
// }
// var obj = {
//     age:20,
//     firstName:'firstName',
//     secondName:'secondName'
// }

// printName(obj)
// printName({
//     firstName:'firstInfo',
//     secondName:'secondInfo'
// })



// API可選屬性
// interface FullName{
//     firstName:string;
//     secondName?:string;
// }

// function getName(name:FullName) {
//  console.log(name);
    
// }

// getName({
//     firstName: 'firstName',
//     // secondName: 'secondName'
// })

// ajax請求
// interface Config{
//     type:string;
//     url:string;
//     data?:string;
//     dataType:string
// }

// function ajax(config:Config) {
//     var xhr=new XMLHttpRequest();
//     xhr.open(config.type, config.url, true);
//     xhr.send(config.data);
//     xhr.onreadystatechange=function () {
//         if(xhr.readyState==4 && xhr.status==200) {
//             console.log('連接成功');
//             if(config.dataType=='json'){
//                 console.log(
//                     JSON.parse(xhr.responseText)

//                 );
                
//             }else{
//                 console.log(xhr.responseText);
//             }
//         }
//     }
// }

// ajax({
//     type:'get',
//     data:'name=aaa',
//     url:'http://a.itying.com/api/productlist',
//     dataType:'json'
// })



// 函式類型API
// 加密的函式類型API
// interface encrypt{
//     (key:string,value:string):string;
// }

// var md5:encrypt=function (key:string,value:string):string {
//     return key+value
// }
// console.log(md5('name', 'md5'));

// var sha1:encrypt=function (key:string,value:string):string {
//     return key+'---'+value
// }
// console.log(sha1('name', 'md5'));



// 可索引API：陣列、物件的約束

// interface UserArr{ // 陣列
//     [index:number]:string
// }
// var arr:UserArr=['abc','cba']
// console.log(arr[0]);

// interface UserObj{ // 物件
//     [index:string]:string
// }
// var arr:UserObj={name:'name'}


// 類類型API

// interface Animal{
//     name:string;

//     eat(str:string):void;
// }

// class Dog implements Animal{
//     name: string;
//     constructor(name:string){
//         this.name=name
//     }
//     eat(){
//         console.log(this.name+'吃狗糧'); 
//     }
// }

// var d=new Dog('狗');
// d.eat()

// class Cat implements Animal{
//     name: string;
//     constructor(name:string){
//         this.name=name
//     }
//     eat(food:string){
//         console.log(this.name+food); 
//     }
// }

// var cc=new Cat('貓');
// cc.eat('吃魚')



// API擴展：API可以繼承API
// interface Animal{
//     eat():void;
// }
// interface Person extends Animal{
//     work():void;
// }

// class Web implements Person{
//     public name:string;
//     constructor(name:string){
//         this.name=name
//     }

//     eat(){
//         console.log(this.name+'吃飯');
//     }
//     work(){
//         console.log(this.name+'工作');
//     }
// }

// var w=new Web('人')
// w.work()




// interface Animal{
//     eat():void;
//     }
// interface Person extends Animal{
//     work():void;
// }

// class Progrommer{
//     public name:string;
//     constructor(name:string){
//         this.name=name
//     }
//     coding(code:string){
//         console.log(this.name+code);
        
//     }
// }

    
// class Web extends Progrommer implements Person{
//     // public name:string;
//     constructor(name:string){
//         super(name)
//         this.name=name
//     }

//     eat(){
//         console.log(this.name+'吃飯');
//     }
//     work(){
//         console.log(this.name+'工作');
//     }
// }

// var w=new Web('人')
// w.work()
// w.coding('code')
    
    







