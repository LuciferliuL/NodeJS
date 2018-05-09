'use strict';

var fs = require('fs')
var rs = fs.createWriteStream('./output.txt','utf-8');
rs.write('使用Stream写入文本数据...\n');
rs.write('END');
rs.end()

var rs2 = fs.createWriteStream('./ouput2.txt');
rs2.write(new Buffer('使用Stream写入二进制数据...\n'));
rs2.write(new Buffer('END'));
rs2.end()