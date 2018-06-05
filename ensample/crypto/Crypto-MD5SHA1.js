'use strict';

const crypto = require('crypto');
// const hash = crypto.createHash('md5');
const hash = crypto.createHash('sha1');

//可任意多次调用update（）
hash.update('Hello , world');
hash.update('Hello , nodejs');

console.log(hash.digest('hex'));
