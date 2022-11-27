// class User{
//     username:string | undefined;
//     password:string | undefined;
    
// }

// class MysqlDb{
//     add(user:User):boolean{
//         console.log(user);
        
//         return true
//     }
// }

// var u = new User();

// u.username='user'
// u.password='pass'

// var Db= new MysqlDb();
// Db.add(u)


// class ArticleCate{
//     title:string | undefined;
//     desc:string | undefined;
//     status:number | undefined;
// }

// class MysqlDb{
//     add(info:ArticleCate):boolean{
//         console.log(info);
//         return true
//     }
// }

// var a = new ArticleCate();

// a.title='title'
// a.desc='desc'
// a.status=1

// var Db= new MysqlDb();
// Db.add(a)



// 操作資料庫的泛型
class MysqlDb<T>{
    add(info:T):boolean{
        console.log(info);

        return true
    }
    update(info:T,id:number){
        console.log(info);
        console.log(id);

        return true
    }
}

// 給User表單增加資料
// 1.定義User類, 與資料庫進行映射
// class User{
//     username:string | undefined;
//     password:string | undefined;
// }

// var u = new User()
// u.username='user'
// u.password='pass'

// var Db = new MysqlDb<User>()
// Db.add(u)


class ArticleCate{
    title:string | undefined;
    desc:string | undefined;
    status:number | undefined;
    constructor(params:{
        title:string | undefined,
        desc:string | undefined,
        status?:number | undefined
    }){
        this.title=params.title
        this.desc=params.desc
        this.status=params.status

    }
}

// 增加操作
// var a = new ArticleCate({
//     title:'title',
//     desc:'desc',
//     status:1
// });

// var Db= new MysqlDb<ArticleCate>();
// Db.add(a)

// var a = new ArticleCate({
//     title:'title2',
//     desc:'desc2',
// });
// a.status=0

// var Db= new MysqlDb<ArticleCate>();
// Db.update(a,12)
