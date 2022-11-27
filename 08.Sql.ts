interface DBI<T>{
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}

// 定義一個操作mysql資料庫的類 //要實現泛型API, 這個類也應該要是泛型類
class MysqlDB<T> implements DBI<T>{
    constructor(){
        console.log('連接成功');
        
    }

    add(info: T): boolean {
        console.log(info);
        return true;
        
        throw new Error("Method not implemented.");
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        var list = [
            {
                title: 't1',
                desc: 'd1'
            },
            {
                title: 't1',
                desc: 'd1'
            }
        ]

        return list;
    }
}

// 操作用戶表 定義一個User類和表單做映射
// class User{
//     username:string | undefined;
//     password:string | undefined;
// }

// var u = new User()
// u.username='username'
// u.password='password'

// var oMysql=new MysqlDB<User>();
// oMysql.add(u)





class MssqlDB<T> implements DBI<T>{
    constructor(){
        console.log('連接成功');
        
    }

    add(info: T): boolean {
        console.log(info);
        return true;
        
        throw new Error("Method not implemented.");
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        var list = [
            {
                title: 't1',
                desc: 'd1'
            },
            {
                title: 't1',
                desc: 'd1'
            }
        ]

        return list;
    }
}


class User{
    username:string | undefined;
    password:string | undefined;
}

var u = new User()
u.username='username2'
u.password='password2'

var oMssql=new MssqlDB<User>();
oMssql.add(u)

// 取得User表 id=4的資料
var data=oMssql.get(4)
console.log(data);
