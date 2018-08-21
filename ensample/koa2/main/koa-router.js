const koa = require('koa')
//require('koa-router')返回的是函数
const router = require('koa-router')()

const app = new koa()

app.use(async (ctx, next)=>{
    console.log(`${ctx.request.method},${ctx.request.url}`)
    await next()
})

router.get('/hello/:name', async (ctx, next)=>{
    var name = ctx.params.name
    ctx.response.body = `<h1>hello,${name}</h1>`
})

router.get('/', async (ctx, next)=>{
    ctx.response.body = `<h1>Index</h1>`
})

module.exports = {
    'GET /hello/:name' : fn_hello
}