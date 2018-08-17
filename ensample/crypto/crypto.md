crypto是一种加密算法MD5,SHA1

## update()
默认字符串编码为UTF-8

## Hmac
也是一种哈希算法。可以利用MD5 SHA1 等哈希算法，不同的是，Hmac需要一个密匙

## AES 
一种对称加密 如aes192, aes-128-ecb, aes-256-cbc

## Diffie-Hellman
密匙交换协议

##证书
crypto模块也可以处理数字证书。数字证书通常用在SSL连接，也就是Web的https连接。一般情况下，https连接只需要处理服务器端的单向认证，如无特殊需求（例如自己作为Root给客户发认证证书），建议用反向代理服务器如Nginx等Web服务器去处理证书。