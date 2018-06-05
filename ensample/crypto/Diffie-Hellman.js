'use strict'

const crypto = require('crypto');
//小明的key
var ming = crypto.createDiffieHellman(512);
var ming_keys = ming.generateKeys();

var prime = ming.getPrime();
var generator = ming.getGenerator();

console.log('Prime'+prime.toString('hex'))
console.log('Generator'+generator.toString('hex'))

var hong = crypto.createDiffieHellman(prime, generator);
var hong_keys = hong.generateKeys();

var ming_secret = ming.computeSecret(hong_keys);
var hong_secret = hong.computeSecret(ming_keys);

console.log('ming'+ming_secret.toString('hex'));
console.log('hong'+hong_secret.toString('hex'))