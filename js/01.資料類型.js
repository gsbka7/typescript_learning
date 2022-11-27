"use strict";
// 布爾類型 true false
var flag = true;
flag = false;
// 數字類型 number
var a = 123;
// 字串類型
var str = 'str';
// 陣列類型
// 1.
let arr1 = [1, 2, 3];
let arr2 = ["a", "b", "c"];
// 2.
let arr3 = [1, 2, 3];
let arr4 = ["1", "2", "3"];
// 3.
let arr5 = [1, '1', true];
// 元祖類型 tuple
let arr6 = ['ts', 1, true];
// 列舉類型 enum
// 1:true, -1:false
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
console.log(f); // 1
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
var c = Color.green;
console.log(c); // 2
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 0] = "red";
    Color2[Color2["blue"] = 5] = "blue";
    Color2[Color2["green"] = 6] = "green";
})(Color2 || (Color2 = {}));
var c2 = Color2.blue;
console.log(c2); // 5
var c2 = Color2.green;
console.log(c2); // 6
// 任意類型 any
var num = 123;
num = 'str';
num = true;
// null, undefined
var un = undefined;
var nu = null;
var both;
// void類型 沒有返回值
function run() {
    console.log('run');
}
run();
// never類型 其他類型 代表不會出現的值
var n;
n = (() => {
    throw new Error('Error');
})();
