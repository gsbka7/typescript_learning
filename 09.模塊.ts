var dbUrl='abc';

function getDataM():any[] {
    console.log('取得資料');
    
    return [
        {
            title: 'title1'
        },
        {
            title: 'title2'
        }
    ]
}

function save() {
    console.log('保存成功');
    
}

export {getDataM, save}