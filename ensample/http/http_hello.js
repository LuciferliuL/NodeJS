'use strict';

var http = require('http');
//创建http server
var server = http.createServer(function(request,response){
    //request获得请求的method和url
    console.log(request.method + ':' + request.url)
    //将http200写入response，同时设置Content-Type:text/html
    response.writeHead(200,{'Content-Type':'text/html'});
    //将http响应的HTML写入response
    response.end('<h1>Hello world!</h1>')
})
//server listen 8080
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');