"use strict";
// 普通裝飾器(無法傳參數), 裝飾器工廠(可以傳參數)
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 1.類裝飾器：類裝飾器在類宣告之前被宣告(緊靠著聲明), 應用於構造函式, 可以用來監視, 修改或替換類定義, 傳入一個參數
// 定義裝飾器
// function logClass(params:any) {
//     console.log(params);
//     // 就是目前的類
//     params.prototype.apiUrl='動態擴展屬性'
//     params.prototype.run=function () {
//         console.log('run');
//     }
// }
// // 調用裝飾器
// @logClass
// class HttpClient{
//     constructor(){
//     }
//     getData(){
//     }
// }
// var http:any=new HttpClient()
// console.log(http.apiUrl);
// http.run();
// 2.裝飾器工廠
// function logClass(params:string) {
//     return function (target:any) {
//         console.log(target);
//         console.log(params);
//         target.prototype.apiUrl=params
//     }   
// }
// @logClass('http://www.itying.com/api')
// class HttpClient{
//     constructor(){
//     }
//     getData(){
//     }
// }
// var http:any=new HttpClient()
// console.log(http.apiUrl);
// function logCalss(target:any) {
//     console.log(target);
//     return class extends target{
//         apiUrl:any='修改後的資料';
//         getData(){
//             this.apiUrl=this.apiUrl+'-----'
//             console.log(this.apiUrl);
//         }
//     }
// }
// @logCalss
// class HttpClient{
//     public apiUrl:string | undefined
//     constructor(){
//         this.apiUrl='構造函式裡的apiUrl'
//     }
//     getData(){
//         console.log(this.apiUrl);
//     }
// }
// var http=new HttpClient()
// http.getData()
// 2. 屬性裝飾器
// 類裝飾器
// function logClass(params:string) {
//     return function (target:any) {
//         // console.log(target);
//         // console.log(params);
//         // target.prototype.apiUrl=params
//     }   
// }
// 屬性裝飾器
// function logProperty(params:any) {
//     return function (target:any, attr:any) {
//         console.log(target);
//         console.log(attr);
//         target[attr]=params
//     }
// }
// @logClass('abc')
// class HttpClient{
//     @logProperty('http://itying.com')
//     public url:any | undefined;
//     constructor(){
//     }
//     getData(){
//         console.log(this.url);
//     }
// }
// var http:any=new HttpClient()
// http.getData()
// 3.方法裝飾器
// // 一
// function logMethod(params:any) {
//     return function (target:any, methodName:any, desc:any) {
//         console.log(target);
//         console.log(methodName);
//         console.log(desc);
//         target.apiUrl='xxx'
//         target.run=function () {
//             console.log('run');
//         }
//     }
// }
// class HttpClient{
//     public url:any | undefined;
//     constructor(){
//     }
//     @logMethod('http://www.itying.com')
//     getData(){
//         console.log(this.url);
//     }
// }
// var http:any=new HttpClient()
// console.log(http.apiUrl);
// http.run()
// 二
// function logMethod(params:any) {
//     return function (target:any, methodName:any, desc:any) {
//         console.log(target);
//         console.log(methodName);
//         console.log(desc.value);
//         // 修改裝飾器的方法, 把裝飾器方法裡面傳入的參數改為string型態
//         // 1.保存目前的方法
//         var oMethod=desc.value;
//         desc.value=function (...args:any[]) { // 接收不特定的參數
//             args=args.map((value)=>{
//                 return String(value);
//             })
//             console.log(args);
//             oMethod.apply(this,args)
//         }
//     }
// }
// class HttpClient{
//     public url:any | undefined;
//     constructor(){
//     }
//     @logMethod('http://www.itying.com')
//     getData(...args:any[]){
//         console.log(args);
//         console.log('getData裡的方法');
//     }
// }
// var http=new HttpClient();
// http.getData(123,'xxx')
// 4.方法參數裝飾器：會在運行時當作參數被調用, 可以使用參數裝飾器為類的原型增加一些元素
function logParams(params) {
    return function (target, methodName, paramIndex) {
        console.log(params);
        console.log(target);
        console.log(methodName);
        console.log(paramIndex);
        target.apiUrl = params;
    };
}
class HttpClient {
    constructor() {
    }
    getData(id) {
        console.log(id);
    }
}
__decorate([
    __param(0, logParams('id'))
], HttpClient.prototype, "getData", null);
var http = new HttpClient();
http.getData(123456);
console.log(http.apiUrl);
