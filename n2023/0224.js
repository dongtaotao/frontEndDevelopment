vue实现复制文字和图片 https://juejin.cn/post/7202970915414884389?
复制图片主要用到navigator.clipboard.write()方法。
因为我们在页面中通常是要根据一个img元素复制图片，主要实现思路如下：
先将img元素转成base64
再将base64转成blob对象
根据blob对象new一个ClipboardItem对象
最后再根据navigator.clipboard.writeText()将内容写入剪贴板中
链接：https://juejin.cn/post/7202970915414884389

数据大屏最简单适配方案
https://juejin.cn/post/7202598910337138748?
Eslint + Prettier + Husky + Commitlint+ Lint-staged 规范前端工程代码规范
https://juejin.cn/post/7038143752036155428

一文带你了解如何排查内存泄漏导致的页面卡顿现象
https://juejin.cn/post/6947841638118998029

前端劝退之前端知识体系（前端面试体系）
https://juejin.cn/post/6994657097220620319

2021年前端面试必读文章【超三百篇文章/赠复习导图】
https://juejin.cn/post/6844904116339261447

2020年中大厂前端面试总结
https://juejin.cn/post/6865525477465931783#heading-8

在 Canvas 中如何处理跨域的图片 https://q.shanyue.tech/fe/html/485.html
img.setAttribute("crossOrigin", "anonymous");

flex 布局中 align-content 与 align-items 有何区别 https://q.shanyue.tech/fe/css/539.html
align-content 作用于纵轴多行元素，一行元素不起作用
align-items 作用于纵轴单行元素

React】面试官：如何在页面刷新之后保持状态？看看你知道几种~
https://juejin.cn/post/7197372790398402615

什么是媒体查询，JS 可以监听媒体查询吗https://q.shanyue.tech/fe/css/578.html
js 也支持媒体查询，window. matchMedia()方法

浏览器的剪切板中如何监听复制事件 https://q.shanyue.tech/fe/dom/444.html
document.querySelector("p").addEventListener("copy", cb);
document.addEventListener("copy", cb);

实现一个compose函数
组合多个函数，从右到左，比如：compose(f, g, h) 最终得到这个结果 (...args) => f(g(h(...args)))
// 用法如下:
function fn1(x) {
return x + 1;
}
function fn2(x) {
return x + 2;
}
function fn3(x) {
return x + 3;
}
function fn4(x) {
return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11
function compose(...funcs) {
  if (!funcs.length) return (v) => v;

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => {
    return (...args) => a(b(...args)))
  }
}

怎么用js复制文本，顺便提示复制成功
https://juejin.cn/post/7203247258850476091?

fiber 架构： https://q.shanyue.tech/fe/react/165.html
循环条件：利用 requestIdeCallback 空闲时间递减.
遍历过程：利用链表，找孩子找兄弟找父亲.

packagelock.json/yarn.lock 用以锁定版本号，保证开发环境与生产环境的一致性，避免出现不兼容 API 导致生产环境报错

图片防盗链原理是什么
请求头中的 refer 来判断是否屏蔽图片

peerDependency 是为了解决什么问题
避免重复安装

如何处理白屏错误页的监控的？
排查兼容性。大部分原因是因为低端机型/浏览器低版本 polyfill 的问题导致报错
排查网络。js 是否下载成功 cdn 是否生效
做 js 错误上报。分析是否存在代码缺陷
做重试逻辑/诱导用户重试
Error Boundry 避免整页崩溃。限制在组件级别

浅谈怎样系统的准备前端面试
https://juejin.cn/post/6887563385886474254

20个js工具函数助力高效开发（值得收藏）
https://juejin.cn/post/7132714583399071758
滚动到元素位置 -------- 
https://mp.weixin.qq.com/s?__biz=MzA4MjA1MDM3Ng==&mid=2450827170&idx=1&sn=8094ed1158ad77d99ad45bf5ed736281&chksm=886bab85bf1c2293dac2e1c3c4495bc7f2468db97a6231bcdba2d4b753de1bfd2958bbf5b689#rd
export const smoothScroll = element =>{
  document.querySelector(element).scrollIntoView({
      behavior: 'smooth'
  });
};
复制代码
smoothScroll('#target'); // 平滑滚动到 ID 为 target 的元素
复制代码

图文结合简单易学的npm 包的发布流程
https://juejin.cn/post/7125709933709885448

对国际化 i18n 项目的一点思考
vue-i18n
https://juejin.cn/post/7131737709231472670

一文解析Pinia和Vuex，带你全面理解这两个Vue状态管理模式
https://juejin.cn/post/7121209657678364685

花三个小时，完全掌握分片渲染和虚拟列表～
https://juejin.cn/post/7121551701731409934

一文彻底了解Web Worker，十万条数据都是弟弟
https://juejin.cn/post/7137728629986820126

Eslint 在提交的时候会对代码进行检验，校验原理是什么？它是如何阻止提交的？（原理是 ast，没答上来）

React Hooks 实现原理 🔥🔥🔥

原理？

Hooks 主要是利用闭包来保存状态，使用链表保存一系列 Hooks，将链表中的第一个 Hook 与 Fiber 关联。
在 Fiber 树更新时，就能从 Hooks 中计算出最终输出的状态和执行相关的副作用。
链接：https://juejin.cn/post/7085609851720024072

浏览器是如何对 HTML5 的离线储存资源进行管理和加载？
在线的情况下，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，如果是第一次访问页面 ，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。如果已经访问过页面并且资源已经进行离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，就会重新下载文件中的资源并进行离线存储。
离线的情况下，浏览器会直接使用离线存储的资源。
链接：https://juejin.cn/post/7199321626814054458

webpack 如何实现动态加载
讲道理 webpack 动态加载就两种方式：import()和 require.ensure，不过他们实现原理是相同的。
我觉得这道题的重点在于动态的创建 script 标签，以及通过 jsonp 去请求 chunk，推荐的文章是：webpack是如何实现动态导入的
链接：https://juejin.cn/post/6844904151013392398

基于IntersectionObserver设计图片懒加载与触底加载
https://juejin.cn/post/7204013918958764093?

从0到1开发一个浏览器插件
https://juejin.cn/post/7204316982887137337?

前端JS实现单个文件或多个文件批量下载方案
https://juejin.cn/post/7204731868137586725?

将js对象转化为树形结构 https://juejin.cn/post/7204854015464341560?
// 转换前：
source = [{
  id: 1,
  pid: 0,
  name: 'body'
}, {
  id: 2,
  pid: 1,
  name: 'title'
}, {
  id: 3,
  pid: 2,
  name: 'div'
}]
// 转换为: 
tree = [{
id: 1,
pid: 0,
name: 'body',
children: [{
  id: 2,
  pid: 1,
  name: 'title',
  children: [{
    id: 3,
    pid: 1,
    name: 'div'
  }]
}
}]
function jsonToTree(data) {
  // 初始化结果数组，并判断输入数据的格式
  let result = []
  if(!Array.isArray(data)) {
    return result
  }
  // 使用map，将当前对象的id与当前对象对应存储起来
  let map = {};
  data.forEach(item => {
    map[item.id] = item;
  });
  // 
  data.forEach(item => {
    let parent = map[item.pid];
    if(parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}

滴滴前端一面高频手写面试题汇总
https://juejin.cn/post/7204854015464341560?

16、判断一个对象有环引用
https://juejin.cn/post/7023906112843808804
题目描述：验证一个对象有无环引用
实现思路：用一个数组存储每一个遍历过的对象，下次找到数组中存在，则说明环引用

interface 和 type的区别
interface 只能定义对象类型。type声明可以声明任何类型。
interface 能够声明合并，两个相同接口会合并。Type声明合并会报错
type可以类型推导
interface 可继承 和 type 不可继承
链接：https://juejin.cn/post/6991724298197008421

如何监控网页崩溃？**崩溃和卡顿有何差别？**监控错误
Service Worker 有自己独立的工作线程，与网页区分开，网页崩溃了，Service Worker 一般情况下不会崩溃；
Service Worker 生命周期一般要比网页还要长，可以用来监控网页的状态；
卡顿：加载中，渲染遇到阻塞
链接：https://juejin.cn/post/6991724298197008421

2019 前端年度总结 墙裂推荐） https://juejin.cn/post/6844904038543130632

Vue项目实现文件下载进度条
https://juejin.cn/post/7024374956460867598

从零搭建自己的UI组件库，部署到github，纯干货流程介绍，内含丰富表情包【手动狗头】
vue https://juejin.cn/post/7068217079844831269

什么？后端要一次性返回我10万条数据！且看我这8种方案机智应对！
https://juejin.cn/post/7205101745936416829?
问题描述
问题考察点
使用express创建一个十万条数据的接口
点击按钮，发请求，获取数据，渲染到表格上
方案一 直接渲染所有数据
方案二 使用定时器分组分批分堆依次渲染（定时加载、分堆思想）
效果图
分组分批分堆函数
创建定时器去依次赋值渲染
方案三 使用requestAnimationFrame替代定时器去做渲染
方案四 搭配分页组件，前端进行分页（每页展示一堆，分堆思想）
方案五 表格滚动触底加载（滚动到底，再加载一堆）
在el-table中使用el-table-infinite-scroll指令步骤
案例代码
效果图
方案六 使用无限加载/虚拟列表进行展示
什么是虚拟列表？
写一个简单的虚拟列表
效果图
代码
使用vxetable插件实现虚拟列表
效果图
安装使用代码
方案七 开启多线程Web Worker进行操作
方案八 未雨绸缪，防患于未然
场景模拟
总结

如何拦截全局Promise reject，但并没有设定 reject处理器 时候的错误
// 使用 unhandledrejection 来拦截全局错误  （这个是对的）
window.addEventListener("unhandledrejection", (event) => {
  event && event.preventDefault();
  console.log("event", event);
});
链接：https://juejin.cn/post/7079681931662589960

12. 实现add(1)(2) =3
// 题意的答案
const add = (num1) => (num2)=> num2 + num1;
// 我自己整了一个加强版 可以无限链式调用 add(1)(2)(3)(4)(5)....
function add(x) {
    // 存储和
    let sum = x;
    // 函数调用会相加，然后每次都会返回这个函数本身
    let tmp = function (y) {
      sum = sum + y;
      return tmp;
    };
    // 对象的toString必须是一个方法 在方法中返回了这个和
    tmp.toString = () => sum
    return tmp;
}
alert(add(1)(2)(3)(4)(5))
 链接：https://juejin.cn/post/7079681931662589960