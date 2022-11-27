// 布爾類型 true false
var flag:boolean=true 
flag=false


// 數字類型 number
var a:number=123


// 字串類型
var str:string='str'


// 陣列類型
// 1.
let arr1:number[]=[1,2,3]
let arr2:string[]=["a","b","c"]
// 2.
let arr3:Array<number>=[1,2,3]
let arr4:Array<string>=["1","2","3"]
// 3.
let arr5:any[]=[1,'1',true]


// 元祖類型 tuple
let arr6:[string,number,boolean]=['ts',1,true]


// 列舉類型 enum
// 1:true, -1:false
enum Flag {success=1,error=-1}
var f:Flag=Flag.success
console.log(f); // 1

enum Color {red,blue,green}
var c:Color=Color.green
console.log(c); // 2

enum Color2 {red,blue=5,green}
var c2:Color2=Color2.blue
console.log(c2); // 5
var c2:Color2=Color2.green
console.log(c2); // 6


// 任意類型 any
var num:any=123
num='str'
num=true


// null, undefined
var un:undefined=undefined

var nu:null=null

var both:number | null | undefined


// void類型 沒有返回值
function run():void {
    console.log('run');
}
run()


// never類型 其他類型 代表不會出現的值
var n:never
n=(()=>{
    throw new Error('Error')
})()

