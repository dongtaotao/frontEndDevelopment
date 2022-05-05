决战金三银四，大厂面试题汇总 | node篇
https://juejin.cn/post/7065330118473826318

一文搞定 Koa 中间件实现原理
https://juejin.cn/post/6854573208348295182

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);


const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(1);
  await next();
  console.log(2);
});

app.use(async (ctx, next) => {
  console.log(3);
  await next();
  console.log(4);
});

app.use(async (ctx, next) => {
  ctx.body = 'Hello, Koa';
});

app.listen(3001);

pm2是一个进程管理工具,可以用它来管理你的node进程，并查看node进程的状态，当然也支持性能监控，进程守护，负载均衡等功能

pm2的核心价值 ======= 进程守护  多进程的启动  线上日志的记录  https://blog.csdn.net/qq_43340342/article/details/104534072 

- 进程守护，系统崩溃自动重启
- 启动多进程，充分利用CPU和内存
- 自带日志记录功能

1. 进程守护
能够0s重启, 防止出现错误整个应用会挂掉的情况
2. 负载均衡
有效解决利用js单线程劣势, 充分利用服务器多核优势
pm2提供负载均衡, 提高系统的服务效率
3. pm2的监控和日志非常好

1. 常用命令 https://juejin.cn/post/6844903937208909832
// 查看应用列表
pm2 list 
// 启动
pm2 start ...
// 重启
pm2 restart app-name/app-id
// 停止
pm2 stop app-name/app-id
// 删除
pm2 delete app-name/app-id
// 应用信息
pm2 info app-name/app-id
// 日志
pm2 log app-name/app-id
// 服务器监控信息
pm2 monit app-name/app-id

PM2实用入门指南
https://www.cnblogs.com/chyingp/p/pm2-documentation.html 

Node 的 Event Loop: 6个阶段
1.timer 阶段: 执行到期的setTimeout / setInterval队列回调
2.I/O 阶段: 执行上轮循环残流的callback
3.idle, prepare
4.poll: 等待回调
  执行回调
  执行定时器
  如有到期的setTimeout / setInterval， 则返回 timer 阶段
  如有setImmediate，则前往 check 阶段
5.check
  执行setImmediate
6.close callbacks


pm2手册
https://juejin.cn/post/7078607908920885278  