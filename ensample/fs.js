'use strict';

var fs = require('fs');

//读取正确 err为null，data为读取的string，读取错误err为错误对象，data为undefined
fs.readFile('./sample.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
//同步读取文件没有回调
var data = fs.readFileSync('./sample.txt','utf-8');
console.log(data)