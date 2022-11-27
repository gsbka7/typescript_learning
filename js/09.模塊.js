"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.save = exports.getDataM = void 0;
var dbUrl = 'abc';
function getDataM() {
    console.log('取得資料');
    return [
        {
            title: 'title1'
        },
        {
            title: 'title2'
        }
    ];
}
exports.getDataM = getDataM;
function save() {
    console.log('保存成功');
}
exports.save = save;
