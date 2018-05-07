'use strict'

//等到下一次事件循环才会执行nextTick()
process.nextTick(()=>{
    console.log('nextTick callback!')
})
//在程序即将推出的时候执行
process.on('exit',(code)=>{
    console.log('about to exit with code' + code)
})
//判断环境
if(typeof(window) === 'undefined'){
    console.log('node.js')
}else{
    console.log('browser')
}
console.log('nextTick was set!')