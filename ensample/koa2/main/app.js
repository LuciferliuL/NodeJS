const koa = require('koa');//创建koa句柄
const app = new koa()//创建实例koa

app.use(async (ctx, next)=>{
    console.log(`${ctx.request.method} ${ctx.request.url}`)
    await next()
})

app.use(async (ctx, next)=>{
    console.time();
    await next()
    console.timeEnd();   
})

app.use(async (ctx, next)=>{
    await next();
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>hello koa2</h1>'
})

app.listen(3100)
console.log('app started at port 3100')