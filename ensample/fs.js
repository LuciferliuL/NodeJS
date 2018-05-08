'use strict';

var fs = require('fs');

//读取正确 err为null，data为读取的string，读取错误err为错误对象，data为undefined
fs.readFile('./sample.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})
//同步读取文件没有回调
var data = fs.readFileSync('./sample.txt', 'utf-8');
console.log(data)
//读取错误
try {
    var data = fs.readFileSync('./sample.txt', 'utf-8');
    console.log(data)
} catch (err) {
    //出错
}
//写入文件
var data = 'Hello,Node.js';
fs.writeFile('./output.txt',data,function(err){
    if(err){
        console.log(err)
    }else{
        console.log('OK')
    }
})
fs.writeFileSync('./output.txt',data,function(err){
    if(err){
        console.log(err)
    }else{
        console.log('OK')
    }
})
//获取文件信息
fs.stat('./sample.txt',function(err, stat){
    if(err){
        console.log(err)
    }else{
        //是否文件
        console.log('isFile' + stat.isFile())
        //是否是目录
        console.log('isDirectory'+stat.isDirectory())
        if(stat.isFile){
            console.log('size'+stat.size)
            console.log('birth time'+stat.birthtime)
            console.log('modified time'+stat.mtime)
        }
    }
})