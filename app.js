'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelCore = require('babel-core');

var _babelCore2 = _interopRequireDefault(_babelCore);

var _babelPolyfill = require('babel-polyfill');

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _initController = require('./controller/initController');

var _initController2 = _interopRequireDefault(_initController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Koa = require('koa');
var router = require('koa-simple-router');
var co = require('co');
var serve = require('koa-static');
var render = require('koa-swig');
var path = require('path');
var app = new Koa();


_initController2.default.init(app, router);

app.use(serve(path.join(__dirname, 'public')));
app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: false, // disable, set to false 
  ext: 'html'
}));

app.listen(3000);

exports.default = app;

// var https = require('https');

// var fs = require('fs');

// var options = {
// 	key: fs.readFileSync('./keys/server-key.pem'),
// 	ca: [fs.readFileSync('./keys/ca-cert.pem')],
// 	cert: fs.readFileSync('./keys/server-cert.pem')
// };


// https.createServer(function (request, response) {

//     // 发送 HTTP 头部 
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});

//     // 发送响应数据 "Hello World"
//     response.end('Hello World\n');
// }).listen(8888);

// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');
