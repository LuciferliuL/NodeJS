'use strict';

var fs = require('fs');

var rs = fs.createReadStream('../txt/sample.txt')
var ws = fs.createWriteStream('../txt/output.txt')

rs.pipe(ws);