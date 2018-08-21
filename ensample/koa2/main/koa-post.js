const koa = require('koa')
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')()
const app = new koa()
app.use(bodyParser())

router.get('/',async (ctx, next)=>{
    ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
    <p>Name: <input type="text" name="name" value="kos"/></p>
    <p>Password: <input type="password" name="password"/></p>
    <p><input type="submit" value="Submit"/></p>
    </form>`
})

router.post('/signin', async (ctx, next)=>{
    var 
        name = ctx.request.body.name || '',
        password = ctx.requset.body.password || '';
    console.log(`Name:${name},Password: ${password}`);
    if(name === 'koa' && password === '12345'){
        ctx.response.body = `<h1>Welcome, ${name}</h1>`
    }else {
        ctx.response.body = `<h1>Login failed</h1>
        <p><a href="/">Try again</a></p>`

    }    
})
//把URL的处理函数暴露出来  可以使用
module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
}

