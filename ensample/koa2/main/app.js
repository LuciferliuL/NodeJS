// const koa = require('koa');//创建koa句柄
// const app = new koa()//创建实例koa

// app.use(async (ctx, next)=>{
//     console.log(`${ctx.request.method} ${ctx.request.url}`)
//     await next()
// })


// app.use(async (ctx, next)=>{
//     console.time();
//     await next()
//     console.timeEnd();   
// })

// app.use(async (ctx, next)=>{
//     await next();
//     ctx.response.type = 'text/html'
//     ctx.response.body = '<h1>hello koa2</h1>'
// })

// app.listen(3100)
// console.log('app started at port 3100')

//扫描所有jswenjian 导入 然后注册每个URL
//导入fs模块 然后使用readdirSync 列出文件
//使用sync是因为这里只运行一次 不存在性能问题
var files = fs.readirSync(__dirname + '../main')
//过滤js
var js_files = files.filter((f)=>{
    return f.endsWith('.js')
})

//处理每个js
for(var f of js_files) {
    console.log(`${f}`);
    //导入js文件
    let mapping = require(__dirname + '../main' + f)
    for(var url in mapping) {
        if(url.startsWith('GET')){
            //如果是get请求
            var path = url.substring(4)
            router.get(path, mapping[url])
            console.log(`GET ${path}`);
            
        }else if(url.startsWith('POST')){
            var path = url.substring(5)
            router.post(path, mapping[url])
            console.log(`POST ${path}`);
            
        }else {
            console.log(`invalid URL: ${url}`);
            
        }
    }
    
}