// // 只能返回string
// function getData(value:string) {
//     return value
// }

// // 返回string, number
// function getData1(value:string) {
//     return value
// }
// function getData2(value:number) {
//     return value
// }

// function getDataAny(value:any) { // any放棄類型檢查
//     return value
// }


// 泛型：可以支持不特定的資料型態　要求：傳入的參數和返回的參數一致
// T表示泛型, 具體是什麼型態是調用方法時決定
// function getData<T>(value:T):T {
//     return value
// }
// function getDataAny<T>(value:T):any {
//     return 'value'
// }

// getData<number>(123)
// getData<string>('123')


// 泛型類

// class MinClass{
//     public list:number[]=[]
//     add(num:number){
//         this.list.push(num)
//     }
//     min():number{
//         var minNum=this.list[0]
//         for (let i = 0; i < this.list.length; i++) {
//             if( minNum>this.list[i]){
//                 minNum=this.list[i]
//             }
//         }
//         return minNum
//     }
// }

// var m = new MinClass();
// m.add(2)
// m.add(11)
// m.add(24)
// m.add(54)
// console.log(m.min());


// 類的泛型
// class MinClas<T>{
//     public list:T[]=[];
//     add(value:T):void{
//         this.list.push(value);
//     }
//     min():T{
//         var minNum=this.list[0]
//         for (let i = 0; i < this.list.length; i++) {
//             if( minNum>this.list[i]){
//                 minNum=this.list[i]
//             }
//         }
//         return minNum
//     }
// }
// var m1=new MinClas<number>(); // 實體化類, 並指定資料型態
// m1.add(99)
// m1.add(343)
// m1.add(3434)
// m1.add(342)
// console.log(m1.min());

// var m2=new MinClas<string>(); // 實體化類, 並指定資料型態
// m2.add('c')
// m2.add('a')
// m2.add('d')
// m2.add('r')
// console.log(m2.min());




//typeScript 中的泛型

// 函式類型API
// interface ConfigFn{
//     (value:string, value2:string):string;

// }
// var setData:ConfigFn=function (value1:string, value2:string):string {
//     return value1+value2
// }

// setData('name', 'Name')


// 泛型API
// interface ConfigFn{
//     <T>(value:T):T;
// }

// var getData:ConfigFn=function<T>(value:T) {
//     return value
// }

// getData<string>('name')


interface ConfigFn<T>{
    (value:T):T;
}
function getData<T>(value:T):T {
    return value
}

var myGetData:ConfigFn<string>=getData

myGetData('name')

