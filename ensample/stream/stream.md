# stream
目的是支持“流”这种数据结构，仅在服务区端可用的模块
 ## createReadStream
 打开一个流文件
 ## createWriteStream
 写入一个流文件 不断调用write() 以end()结束即可
 ## data
 可以读取事件流
 ## end
 流已经到末尾，没有数据可读
 ## error
 出错
所有可以读取数据的流都继承stream.Readable,所有可以写入的流都继承自stream.Writable
## pipe()
连接流的作用
Readable读完流Writable写入流  实现复制效果 rs.pipe(ws)