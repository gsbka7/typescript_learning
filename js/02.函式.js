"use strict";
// (1)
// 定義函式的方法
function fun1() {
    return 'run';
}
var fun2 = function () {
    return 123;
}; // 匿名函式
// 傳參數
function getInfo1(name, age) {
    return `${name}-----${age}`;
}
console.log(getInfo1('name1', 20));
var getInfo2 = function (name, age) {
    return `${name}-----${age}`;
}; // 匿名函式
console.log(getInfo1('name2', 40));
// 沒有返回值
function fun3() {
    console.log('fun3');
}
fun3();
// (2) 可選參數
function getInfo3(name, age) {
    if (age) {
        return `${name}-----${age}`;
    }
    else {
        return `${name}-----age`;
    }
}
console.log(getInfo3('name1'));
// (3) 默認參數
function getInfo4(name, age = 20) {
    if (age) {
        return `${name}-----${age}`;
    }
    else {
        return `${name}-----age`;
    }
}
console.log(getInfo4('name1'));
// 剩餘參數 三點運算符
// function sum(a:number,b:number,c:number):number {
//     return a+b+c
// }
// function sum(...result:number[]):number {
//     var sum=0
//     for(var i=0;i<result.length;i++){
//         sum+=result[i]
//     }
//     return sum
// }
// console.log(sum(1,2,3,4,5));
function sum(a, b, ...result) {
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5));
function getInfo5(str) {
    if (typeof str === 'string') {
        return 'name：' + str;
    }
    else {
        return 'age：' + str;
    }
}
console.log(getInfo5('name'));
console.log(getInfo5(20));
