const Koa = require('koa');
const router = require('koa-simple-router');
const co = require('co');
const serve = require('koa-static');
const render = require('koa-swig');
const path = require('path');
const app = new Koa();
import babel_co from 'babel-core';
import babel_polyfill from 'babel-polyfill'
import initController from './controller/initController';

initController.init(app,router);

app.use(serve(path.join(__dirname, 'public')));
app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: false, // disable, set to false 
  ext: 'html'
}));



 
app.listen(3000);

export default app;

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
