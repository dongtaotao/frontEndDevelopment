决战金三银四，大厂面试题汇总 | node篇 
https://juejin.cn/post/7065330118473826318
 
一文搞定 Koa 中间件实现原理
https://juejin.cn/post/6854573208348295182 

前端实战项目_Koa+MongoDB打造简书后台管理系统 好文章
https://www.bilibili.com/video/BV1v5411T7Ez

NodeJS+Express+MongoDB实战项目，
https://www.bilibili.com/video/BV1x7411v7s9?p=3&spm_id_from=pageDriver

项目实战-Node+Koa2从零搭建通用API服务
https://www.bilibili.com/video/BV13A411w79h?p=13&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

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


express 和 koa 有什么区别
1. 语法区别
experss 异步使用 回调
koa1 异步使用 generator + yeild
koa2 异步使用 await/async

2. 中间件区别
koa 采用洋葱模型，进行顺序执行，出去反向执行，支持 context 传递数据
express 本身无洋葱模型，需要引入插件，不支持 context

3. 集成度区别
express 内置了很多中间件，集成度高，使用省心
koa 轻量简洁，容易定制

ts 跟 js有什么区别，优点和缺点

ts 是 js 的超集，即你可以在 ts 中使用原生 js 语法。
ts 需要静态编译，它提供了强类型与更多面向对象的内容。 
ts 最终仍要编译为弱类型，基于对象的原生的 js，再运行。
链接：https://juejin.cn/post/7064740689178787871


koa： 超小型团队
egg： 中小型团队
nest： 大型团队


Nest.js https://blog.csdn.net/xgangzai/article/details/121600881
Nest.js 是“Angular 的服务端实现”，基于装饰器。Nest.js 与其他前端服务框架或库的设计思路完全不同。我们通过查看请求生命周期中的几个节点的用法来体验下 Nest.js 的设计方式。
先来看下 Nest.js 完整的的生命周期：
收到请求
中间件
全局绑定的中间件
路径中指定的 Module 绑定的中间件

守卫
全局守卫
Controller 守卫

Route 守卫
拦截器（Controller 之前）
全局
Controller 拦截器
Route 拦截器
管道
全局管道
Controller 管道
Route 管道
Route 参数管道
Controller（方法处理器）
服务
拦截器（Controller 之后）
Router 拦截器
Controller 拦截器
全局拦截器
异常过滤器
路由
控制器
全局
服务器响应
可以看到根据功能特点拆分的比较细，其中拦截器在 Controller 前后都有，与 Koa 洋葱圈模型类似。

Next.js、Nuxt.js：它们是分别与特定前端技术 React、Vue 绑定的前端应用开发框架，有一定的相似性，可以放在一起进行调研对比。
Nest.js：是“Angular 的服务端实现”，基于装饰器。
可以使用任何兼容的 http 提供程序，如 Express、Fastify 替换底层内核。可用于 http、rpc、graphql 服务，对提供更多样的服务能力有一定参考价值

nest.js、egg.js、midway，express、koa的区别
https://blog.csdn.net/csdn_haow/article/details/101512411

Apifox 是 API 文档、API 调试、API Mock、API 自动化测试一体化协作平台，定位 Postman + Swagger + Mock + JMeter。
