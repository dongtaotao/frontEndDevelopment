如何computed去实现watch----
assets目录和static目录的区别
https://blog.csdn.net/qq_57305148/article/details/128290069

小程序双向绑定原理跟Vue差别在哪
https://blog.csdn.net/qq_42755530/article/details/115024437

computed的实现原理

forEach如何终止循环
forEach专门用来循环数组，可以直接取到元素，同时也可以取到index值

存在局限性，不能continue跳过或者break终止循环，没有返回值，不能return
终止foreach循环 ：运用抛出异常（try catch）可以终止foreach循环
正确用法：运用抛出异常（try catch）
try {
    var array = ["第一","第二","第三","第四"];
    
    // 执行到第3次，结束循环
    array.forEach(function(item,index){
        if (item == "第三") {
            throw new Error("第三");
        }
        console.log(item);// 第一 第二
    });
} catch(e) {
    if(e.message!="第三") throw e;
};
// 下面的代码不影响继续执行
console.log("下方代码");//下方代码

如何使用react hooks实现生命周期函数
答：通过useEffect, useEffect(() => {}) // componentDidMount+componentDidUpdate,
 useEffect(() => {} , []) //componentDidMount. 
 useEffect(() => {return ...}) // componentWillUnmount
链接：https://juejin.cn/post/7194379710162272316
import React, { useState, useEffect } from 'react';

function LifecycleDemo() {
  const [state, setState] = useState(0);
  // componentDidMount
  useEffect(() => {
    console.log('componentDidMount');
  }, []);
  // componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate');
  });
  // componentWillUnmount
  useEffect(() => {
    return () => console.log('componentWillUnmount');
  }, []);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState(state + 1)}>Click</button>
    </div>
  );
}
export default LifecycleDemo;

ecHarts 有没有做窗口变化适配
监听屏幕尺寸变化，重绘图表即可
import echarts from "echarts";
    let option = {…… 图表配置 ……}
    let chart = echarts.init(this.$refs.myChart);
    chart.setOption(option);
    // 添加窗口大小改变监听事件，当窗口大小改变时，图表会重新绘制，自适应窗口大小
    window.addEventListener("resize", function() {
      chart.resize();
    })
链接：https://juejin.cn/post/7197756464366288957

element-resize-detector
这是一个用于监听DOM元素尺寸变化的插件。
我们对父级容器的宽度进行监听，当父级容器的尺寸发生变化时，echart能调用自身的resize方法，保持视图正常。

hash: 使用 URL hash 值来作路由，支持所有浏览器
history : 依赖 HTML5 History API 和服务器配置
abstract : 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.

既然Vue通过数据劫持可以精准探测数据变化，为什么还需要虚拟DOM进行diff检测差异
响应式数据变化，Vue确实可以在数据变化时，响应式系统可以立刻得知。但是如果给每个属性都添加watcher用于更新的话，会产生大量的watcher从而降低性能
而且粒度过细也得导致更新不准确的问题，所以vue采用了组件级的watcher配合diff来检测差异
链接：https://juejin.cn/post/7197072170396074040

Vue computed 实现
建立与其他属性（如：data、 Store）的联系；
属性改变后，通知计算属性重新计算
实现时，主要如下
初始化 data， 使用 Object.defineProperty 把这些属性全部转为 getter/setter。
初始化 computed, 遍历 computed 里的每个属性，每个 computed 属性都是一个 watch 实例。每个属性提供的函数作为属性的 getter，使用 Object.defineProperty 转化。
Object.defineProperty getter 依赖收集。用于依赖发生变化时，触发属性重新计算。
若出现当前 computed 计算属性嵌套其他 computed 计算属性时，先进行其他的依赖收集
链接：https://juejin.cn/post/7197072170396074040

vm.$set 的实现原理是：
如果目标是数组，直接使用数组的 splice 方法触发相应式；
如果目标是对象，会先判读属性是否存在、对象是否是响应式，
最终如果要对属性进行响应式处理，则是通过调用 defineReactive 方法进行响应式处理
export function set (target: Array<any> | Object, key: any, val: any): any {
    // target 为数组  
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      // 修改数组的长度, 避免索引>数组长度导致splcie()执行有误
      target.length = Math.max(target.length, key)
      // 利用数组的splice变异方法触发响应式  
      target.splice(key, 1, val)
      return val
    }
    // key 已经存在，直接修改属性值  
    if (key in target && !(key in Object.prototype)) {
      target[key] = val
      return val
    }
    const ob = (target: any).__ob__
    // target 本身就不是响应式数据, 直接赋值
    if (!ob) {
      target[key] = val
      return val
    }
    // 对属性进行响应式处理
    defineReactive(ob.value, key, val)
    ob.dep.notify()
    return val
  }

  让你写一个vue框架 该如何写 https://juejin.cn/post/7196859331696934967
  第一步 首先要分析vue是一个mvvm 的思想 m是数据模型 v视图模型 
  vm 监听数据的变化 然后通知视图更新
  第二步 我们要创建一个vue的类 并且是单例模型 全局有且只有一个子类
  第三步 我们要对data中的数据进行代理 监听数据属性的变化 会用到object.defineProperty 将他们转化为getter setter方法
  第四步 我们实现一个compile类 实现模版编译  首先获取所有子节点 遍历节点  如果是元素节点 就解析指令。如果是文本节点 就是替换花括号内容  如果还在存在子节点 继续递归判断
  第五步 我们要实现一个watcher类 观察者 当他观察的数据发生变化时 需要去更新视图
  第六步 还需要一个订阅者dep 订阅数据 当数据发生 通知观察者更新视图。

  闭包就是能够读取其他函数内部变量的函数
  闭包基本上就是一个函数内部返回一个函数
  
  好处
      可以读取函数内部的变量
      将变量始终保持在内存中
      可以封装对象的私有属性和私有方法
  坏处
      比较耗费内存 使用不当会造成内存溢出的问题

图片懒加载
可以给img标签统一自定义属性data-src='default.png'，当检测到图片出现在窗口之后再补充src属性，此时才会进行图片资源加载。
function lazyload() {
  const imgs = document.getElementsByTagName('img');
  const len = imgs.length;
  // 视口的高度
  const viewHeight = document.documentElement.clientHeight;
  // 滚动条高度
  const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
  for (let i = 0; i < len; i++) {
    const offsetHeight = imgs[i].offsetTop;
    if (offsetHeight < viewHeight + scrollHeight) {
      const src = imgs[i].dataset.src;
      imgs[i].src = src;
    }
  }
}

// 可以使用节流优化一下
window.addEventListener('scroll', lazyload);

将VirtualDom转化为真实DOM结构
// vnode结构：
// {
//   tag,
//   attrs,
//   children,
// }

//Virtual DOM => DOM
function render(vnode, container) {
  container.appendChild(_render(vnode));
}
function _render(vnode) {
  // 如果是数字类型转化为字符串
  if (typeof vnode === 'number') {
    vnode = String(vnode);
  }
  // 字符串类型直接就是文本节点
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode);
  }
  // 普通DOM
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    // 遍历属性
    Object.keys(vnode.attrs).forEach(key => {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    })
  }
  // 子数组进行递归操作
  vnode.children.forEach(child => render(child, dom));
  return dom;
}

哪些操作会造成内存泄漏？
第一种情况是由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。
第二种情况是设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。
第三种情况是获取一个 DOM 元素的引用，而后面这个元素被删除，由于我们一直保留了对这个元素的引用，所以它也无法被回收。
第四种情况是不合理的使用闭包，从而导致某些变量一直被留在内存当中。
链接：https://juejin.cn/post/7196699593835806780

进程是资源分配的最小单位，线程是CPU调度的最小单位。

对浏览器的缓存机制的理解
浏览器缓存的全过程：
浏览器第一次加载资源，服务器返回 200，浏览器从服务器下载资源文件，并缓存资源文件与 response header，以供下次加载时对比使用；
下一次加载资源时，由于强制缓存优先级较高，先比较当前时间与上一次返回 200 时的时间差，如果没有超过 cache-control 设置的 max-age，则没有过期，并命中强缓存，直接从本地读取资源。如果浏览器不支持HTTP1.1，则使用 expires 头判断是否过期；
如果资源已过期，则表明强制缓存没有被命中，则开始协商缓存，向服务器发送带有 If-None-Match 和 If-Modified-Since 的请求；
服务器收到请求后，优先根据 Etag 的值判断被请求的文件有没有做修改，Etag 值一致则没有修改，命中协商缓存，返回 304；如果不一致则有改动，直接返回新的资源文件带上新的 Etag 值并返回 200；
如果服务器收到的请求没有 Etag 值，则将 If-Modified-Since 和被请求文件的最后修改时间做比对，一致则命中协商缓存，返回 304；不一致则返回新的 last-modified 和文件并返回 200；
很多网站的资源后面都加了版本号，这样做的目的是：每次升级了 JS 或 CSS 文件后，为了防止浏览器进行缓存，强制改变版本号，客户端浏览器就会重新下载新的 JS 或 CSS 文件 ，以保证用户能够及时获得网站的最新更新。
链接：https://juejin.cn/post/7196699593835806780

Vue-highlight 实现代码高亮 https://juejin.cn/post/6978643058808061982

如何通过微信唤起 App https://juejin.cn/post/7139440408265752613

Vue.config.errorHandler = function (err, vm, info) {
  let { 
      message, // 异常信息
      name, // 异常名称
      stack  // 异常堆栈信息
  } = err;

  // vm 为抛出异常的 Vue 实例
  // info 为 Vue 特定的错误信息，比如错误所在的生命周期钩子
}

组件库实战——按需加载工程化https://juejin.cn/post/7199591833522176058?

性能优化之使用vue-worker插件（基于Web Worker）开启多线程运算提高效率
https://juejin.cn/post/7198476152624595005?

Jest + React 单元测试最佳实践
https://juejin.cn/post/7199865975277649978?

还在为rem配置苦恼？一个库解放你的双https://juejin.cn/post/7200282892348833851?

比较全面的大文件上传. 前端:Vue3+TS+Vite, 后端:node+express
https://juejin.cn/post/7200033099752407097?

超极速的Vue3上手指北
https://juejin.cn/post/7122760155707473956

一篇搞定【web打印】知识点
https://juejin.cn/post/6985030118758416391

「2022」JavaScript最新高频面试题指南（下）https://juejin.cn/column/7145760393644736519
https://juejin.cn/post/7166051817560735757 

如何实现网页多标签tab通讯
使用 WebSocket

无跨域限制
需要服务端支持，成本高

通过 localStorage 通讯

同域的 A 和 B 两个页面
A页面设置 localStorage
B页面可监听到 localStorage 值的修改

通过 SharedWorker 通讯

SharedWorker 是 WebWorker 的一种
WebWorker 可开启子进程执行 JS，但不能操作 DOM
SharedWorker 可单独开启一个进程，用于同域页面通讯
链接：https://juejin.cn/post/7186194619318108219


js加载并显示excel文件
https://blog.csdn.net/Jioho_chen/article/details/115839951

2022 年前端大事记
https://juejin.cn/post/7186454731785994301?


Web Worker
现代浏览器为JavaScript创造的 多线程环境。可以新建并将部分任务分配到worker线程并行运行，两个线程可 独立运行，互不干扰，可通过自带的 消息机制 相互通信。
一般使用 Web Worker 的场景是代码中有很多计算密集型或高延迟的任务，可以考虑分配给 Worker 线程。

Service Worker

Service Worker是在Web worker的基础上实现了离线缓存、消息推送和网络代理等功能。
借助 Service worker 实现的离线缓存就称为 Service Worker Cache。
Service workers 本质上充当 Web 应用程序、浏览器与网络（可用时）之间的代理服务器，且只能由HTTPS承载
链接：https://juejin.cn/post/7168637354536599559

实现大文件上传和断点续传实践经验总结https://juejin.cn/post/7118671489615790094

深入理解JS核心技术(55) https://juejin.cn/post/7110815680420642847

setup语法下怎么设置name属性 https://juejin.cn/post/7160962909332307981

2022年我的面试万字总结（Vue3+TS）
https://juejin.cn/post/7160962909332307981

懒加载与预加载的区别
这两种方式都是提高网页性能的方式，两者主要区别是一个是提前加载，一个是迟缓甚至不加载。懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。
懒加载也叫延迟加载，指的是在长网页中延迟加载图片的时机，当用户需要访问时，再去加载，这样可以提高网站的首屏加载速度，提升用户的体验，并且可以减少服务器的压力。它适用于图片很多，页面很长的电商网站的场景。
预加载指的是将所需的资源提前请求加载到本地，这样后面在需要用到时就直接从缓存取资源。 通过预加载能够减少用户的等待时间，提高用户的体验。我了解的预加载的最常用的方式是使用 js 中的 image 对象，通过为 image 对象来设置 scr 属性，来实现图片的预加载。
链接：https://juejin.cn/post/7161292246526984228
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

documentFragment (文档碎片) https://juejin.cn/post/7161292246526984228
假如有 10000 个元素需要添加到页面上，你觉得怎么操作性能最好（考察文档碎片）

什么是虚拟列表 https://juejin.cn/post/7161292246526984228

大文件上传如何做分片上传、断点继传？https://juejin.cn/post/7161292246526984228

虚拟列表在哈啰商城H5中的实践
https://juejin.cn/post/7163913327302115358

超详细的微信分享网页链接配置教程（JS-SDK的使用）
https://juejin.cn/post/7064735847152615438?

Vue: 评论区实现发表情和@某人消息推送
https://juejin.cn/post/7200689071261106233?

从 微信 JS-SDK 认识 JSBridge
https://juejin.cn/post/7199297355748458551?

Element UI / Plus中全局修改el-table默认样式
https://juejin.cn/post/7201018760488468539?

初级要：
负责业务系统前端模块的设计与开发；
负责产品的需求分析，开发，测试，维护等各项工作；
承担PC端和移动端的前端HTML5的开发任务；
整体页面结构以及css样式层的设计，优化；
完成页面脚本程序编写，实现各类页面动态，交互效果；
能够理解后端架构，与后端工程师配合为项目提供最优化的技术解决方案。

中级要：
负责所在项目需求实现与开发；
完成系统细节技术设计，完成核心代码的编写；
确保需求实现，满足项目设计规范，软件编码规范以及性能要求；
测试，系统测试等；
积极沟通，以确保功能实现按时，按质交付；
积极参与阶段评审，满足项目过程质量需求，审核和指导开发人员。

已满足，走向高级开发（个人带领过小团队）：

负责大型系统的web前端开发
参与技术选型，推进应用和开发工作，支撑平台架构设计与开发功能
提升系统的整体用户体验，推动前端技术的发展
为提升团队开发效率，提炼公共组件，创造实用工具
优化现有业务，开发流程
关注前端发展，应用行业新技术
团队管理

作者：我是哪吒
链接：https://juejin.cn/post/6977214179149086751
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

2022金三银四前端面试笔记 🔥🔥
https://juejin.cn/post/7085609851720024072#heading-7

如何开发一个人人爱的组件？
https://juejin.cn/post/7189158794838933565?

从零开始的中大厂前端项目落地（一）
https://juejin.cn/post/7201849928207859767?


跟ChatGPT学JS
https://juejin.cn/column/7202039214325383226

手写-将虚拟 Dom 转化为真实 Dom（类似的递归题-必考）
{
  tag: 'DIV',
  attrs:{
  id:'app'
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
把上诉虚拟Dom转化成下方真实Dom
<div id="app">
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>

// 真正的渲染函数
function _render(vnode) {
  // 如果是数字类型转化为字符串
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }
  // 字符串类型直接就是文本节点
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  // 普通DOM
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    // 遍历属性
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    });
  }
  // 子数组进行递归操作 这一步是关键
  vnode.children.forEach((child) => dom.appendChild(_render(child)));
  return dom;
}

常用设计模式有哪些并举例使用场景
1.工厂模式 - 传入参数即可创建实例
虚拟 DOM 根据参数的不同返回基础标签的 Vnode 和组件 Vnode
2.单例模式 - 整个程序有且仅有一个实例
vuex 和 vue-router 的插件注册方法 install 判断如果系统存在实例就直接返回掉
3.发布-订阅模式 (vue 事件机制)
4.观察者模式 (响应式数据原理)
5.装饰模式: (@装饰器的用法)

作者：前端鲨鱼哥
链接：https://juejin.cn/post/7004638318843412493

Object.prototype.__proto__; //null
Function.prototype.__proto__; //Object.prototype
Object.__proto__; //Function.prototype
Object instanceof Function; //true
Function instanceof Object; //true
Function.prototype === Function.__proto__; //true

关于vue点击下载的避坑指南
https://juejin.cn/post/7200008514390376507?

数据可视化大屏设计器开发-多选拖拽
https://juejin.cn/post/7202445722972815417?

前端海报生成的不同方案和优劣
https://juejin.cn/post/7202399271575339065

前端积累 - 防盗
https://juejin.cn/post/7201677717208285239

vue项目更新后文件存在缓存，需要强制刷新才能呈现更新
https://blog.csdn.net/qq_39352780/article/details/118154096?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2~default~CTRLIST~default-1-118154096-blog-93893787.pc_relevant_sortByAnswer&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2~default~CTRLIST~default-1-118154096-blog-93893787.pc_relevant_sortByAnswer&utm_relevant_index=1

vue项目版本更新后文件存在缓存问题解决方案(vue-cli2.0&vue-cli3.0)
https://www.cnblogs.com/konglingxi/p/14348940.html

H5全屏API与视频全屏
https://juejin.cn/post/7202809170378031160?

三面面试官：运行 npm run xxx 的时候发生了什么？
总结
运行 npm run xxx的时候，npm 会先在当前目录的 node_modules/.bin 查找要执行的程序，如果找到则运行；
没有找到则从全局的 node_modules/.bin 中查找，npm i -g xxx就是安装到到全局目录；
如果全局目录还是没找到，那么就从 path 环境变量中查找有没有其他同名的可执行程序。 

链接：https://juejin.cn/post/7078924628525056007 
 