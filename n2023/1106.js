浏览器中打开多个摄像头
https://juejin.cn/post/7295750874181058611?utm_source=gold_browser_extension

如何实现大文件的切片上传与断点续传
https://juejin.cn/post/7296345202238144552?utm_source=gold_browser_extension

都2023了，还不会开发一个属于自己的组件库？
https://juejin.cn/post/7296298135410917439?utm_source=gold_browser_extension


用浏览器实现一个屏幕录制功能
https://juejin.cn/post/7296756504912183311?utm_source=gold_browser_extension


轻量级埋点sdk搭建
https://juejin.cn/post/7298641610431332378?utm_source=gold_browser_extension

Element-UI 10个奇淫技巧，你知道几个？
el-upload 模拟点击
https://juejin.cn/post/7017957779176423454

el-select 下拉框选项过长
https://juejin.cn/post/7017957779176423454


前端 node 实现调用打印机和小票打印(TSPL )功能
https://juejin.cn/post/7299506825874604069?utm_source=gold_browser_extension


index.html 的自动更新
Vue打包后，及时更新版本的一种方法
https://juejin.cn/post/7236263262073225274?utm_source=gold_browser_extension
{/* <head>
  <meta charset="UTF-8" />
  <link rel="icon" href="/nfwt.ico" />
  <link rel="stylesheet" href="https://unpkg.com/element-plus@2.1.11/dist/index.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Cache" content="no-cache">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Cache-control" content="no-cache">
  <title> nf-state 轻量级状态管理 的 demo </title>
</head>  */}



setup语法下怎么设置name属性
https://juejin.cn/post/7160962909332307981
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
​
export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
})


前端基建有哪些？大小公司偏重啥？🤨
https://juejin.cn/post/7301150860825133110?utm_source=gold_browser_extension

React实现模糊搜索和关键字高亮
https://juejin.cn/post/7302249949215424551?utm_source=gold_browser_extension


梳理一下浏览器中常见Observer
https://juejin.cn/post/7302344328243773450?utm_source=gold_browser_extension


js实现单个文件下载，批量下载多个文件
https://juejin.cn/post/6919366680715984909


无感刷新，我想说说这三种方案
https://juejin.cn/post/7302404170412802074?utm_source=gold_browser_extension


前端开发小技巧——Vue篇
https://juejin.cn/column/7235167849429155897 


虚拟列表 or 时间分片
https://juejin.cn/post/7263009476058742840?utm_source=gold_browser_extension#heading-4

教你怎么前端实现埋点上报
https://juejin.cn/post/7224132741997281338?utm_source=gold_browser_extension


【Appear】如何实现元素可见/不可见的监听
https://juejin.cn/post/7302356049562026024?utm_source=gold_browser_extension

在Uniapp中实现大文件切片上传
https://juejin.cn/post/7303475295028772903?utm_source=gold_browser_extension


canvas学习笔记，实现刮刮卡、在线签名、图片涂抹裁切
https://juejin.cn/post/7303043776627900431?utm_source=gold_browser_extension


提升JS编程效率：19个实用JS代码示例
https://juejin.cn/post/7303739610055884852?utm_source=gold_browser_extension


refreshToken
https://juejin.cn/post/6844904005995331591?searchId=202311222040560FE32841907E17294C7A
同时多个axios请求怎么实现无痛刷新token
最近遇到个需求：前端登录后，后端返回token和refresh_token，当token过期时用旧refresh_token去获取新的token，前端需要做到无痛刷新token，即请求刷新token时要做到用户无感知。

实现
这里会使用axios来实现，以上方法是请求后拦截，所以会使用axios.interceptors.response.use()方法。
首先说明一下，项目中的token是存在localStorage中的。
如何防止多次刷新token
如果refreshToken接口还没返回，此时再有一个过期的请求进来，上面的代码就会再一次执行refreshToken，这就会导致多次执行刷新token的接口，因此需要防止这个问题。我们可以在request.js中用一个flag来标记当前是否正在刷新token的状态，如果正在刷新则不再调用刷新token的接口。
这样子就可以避免在刷新token时再进入方法了。但是这种做法是相当于把其他失败的接口给舍弃了，假如同时发起两个请求，且几乎同时返回，第一个请求肯定是进入了refreshToken后再重试，而第二个请求则被丢弃了，仍是返回失败，所以接下来还得解决其他接口的重试问题。
同时发起两个或以上的请求时，其他接口如何重试
两个接口几乎同时发起和返回，第一个接口会进入刷新token后重试的流程，而第二个接口需要先存起来，然后等刷新token后再重试。同样，如果同时发起三个请求，此时需要缓存后两个接口，等刷新token后再重试。由于接口都是异步的，处理起来会有点麻烦。
当第二个过期的请求进来，token正在刷新，我们先将这个请求存到一个数组队列中，想办法让这个请求处于等待中，
一直等到刷新token后再逐个重试清空请求队列。
那么如何做到让这个请求处于等待中呢？为了解决这个问题，我们得借助Promise。将请求存进队列中后，同时返回一个Promise，
让这个Promise一直处于Pending状态（即不调用resolve），此时这个请求就会一直等啊等，只要我们不执行resolve，
这个请求就会一直在等待。当刷新请求的接口返回来后，我们再调用resolve，逐个重试。最终代码：
链接：https://juejin.cn/post/6844904005995331591



Vue3实现详情页返回列表页时保持表格滚动条的位置
https://juejin.cn/post/7304234672895819813?utm_source=gold_browser_extension


1123===============


Flutter
Taro
Vue3
React
算法


如何使用javascript实现复制出的文案带链接？
https://juejin.cn/post/7260700447168970810

【译】vue.js 内存泄漏的识别和解决方案
https://juejin.cn/post/7304182623570673705?utm_source=gold_browser_extension


DOM 转 PDF 的 5 种方案
https://juejin.cn/post/7262656196855038008?utm_source=gold_browser_extension


美团前端研发框架Rome实践和演进趋势
https://juejin.cn/post/7263125158949011516?utm_source=gold_browser_extension

前端重新部署如何通知用户
https://juejin.cn/post/7264396960558399549?utm_source=gold_browser_extension


两个窗口如何实现通信
https://juejin.cn/post/7264475859658342456?utm_source=gold_browser_extension#heading-1

vue3打印解决方案：Vue-Plugin-HiPrint
https://juejin.cn/post/7297080018655412250?utm_source=gold_browser_extension

React 组件如何写单元测试？
https://mp.weixin.qq.com/s/IPGxUaHvsUQygcHHq3oOIQ

js精度丢失的问题，重新封装toFixed（）
https://juejin.cn/post/7270544537671598114?utm_source=gold_browser_extension


禁止调试？！阻止用户打开开发者工具三大方法
https://juejin.cn/post/7294260754916392969?utm_source=gold_browser_extension

如何在H5中实现OCR拍照识别身份证功能？
https://juejin.cn/post/7293778347607097394?utm_source=gold_browser_extension

尝试用这个模板，帮助以最快速度搭建完善的Vue3组件库
https://juejin.cn/post/7296847748103143424?utm_source=gold_browser_extension


🔥vue3+node 全栈实战 讲解 大文件分片上传原理（文末尾附有完整源码）
https://juejin.cn/post/7268802459382890554#heading-13


🖨︎一键多场景识别图片中的文字
pip install paddlepaddle
https://juejin.cn/post/7243435843145859131


项目开发中node_modules包越来越大的问题🐱‍🏍🐱‍🏍🐱‍🏍
https://juejin.cn/post/7304538199144841252?utm_source=gold_browser_extension


可拖拽、缩放、旋转组件之 - 菜单操作栏、json数据导入导出
https://juejin.cn/post/7269603447673880636?utm_source=gold_browser_extension


前端传参如果参数过多你还会拼接在URL上嘛？
npm install qs
https://juejin.cn/post/7291468863395954749?utm_source=gold_browser_extension


后端问为什么前端数值精度会丢失？
math.js
big.js
bignumber.js
decimal.js
https://juejin.cn/post/7264208575973621815?utm_source=gold_browser_extension


从一篇前端大佬文章中我学到了很多
《前端原生API实现条形码二维码的JS解析识别》
https://juejin.cn/post/7248874230862233655?utm_source=gold_browser_extension



🔥浅谈JS处理文件数据的API：Blob、FileReader、Base64、File🔥
https://juejin.cn/post/7263123522283651133?utm_source=gold_browser_extension


前端实现文件预览（pdf、excel、word、图片）
https://juejin.cn/post/7246609845272395837?utm_source=gold_browser_extension


分享一些前端面试题的ChatGPT回答  🔥
https://juejin.cn/post/7304167050611687433?searchId=2023112613401248F25D328A36B51704CA


项目优化 浏览器缓存
https://juejin.cn/post/7305213173895970842?utm_source=gold_browser_extension


在react中封装一个多行文本展开收起组件
https://juejin.cn/post/7305232817767546899?utm_source=gold_browser_extension

如何解决跨域问题？
https://juejin.cn/post/7305321063667924992?utm_source=gold_browser_extension
1. 通过jsonp跨域
2. document.domain + iframe跨域
3. nginx代理跨域
4. nodejs中间件代理跨域
5. 通过webpack devserver代理
6. CORS（跨域资源共享）
CORS请求设置的响应头字段，都以 Access-Control-开头:
7. WebSocket


10种跨域解决方案（附终极大招）
https://juejin.cn/post/6844904126246027278#heading-43
写在前面
一、跨域是什么？
1.同源策略
2.同源示例
二、如何解决跨域？
1.CORS
a.简单请求
b.非简单请求
c.Node 中的解决方案
d.前端示例
2.Node 正向代理
a.cli 工具中的代理
b.使用自己的代理工具
c.charles
3.Nginx 反向代理
介绍
实现
效果
4.JSONP
5.Websocket
6.window.postMessage
用途
用法
示例
7.document.domain + Iframe
8.window.location.hash + Iframe
实现原理
实现流程
9.window.name + Iframe
10.浏览器开启跨域（终极方案）
Windows
Mac
效果展示
三、为什么需要跨域？
1.限制不同源的请求
2.限制 dom 操作


视频上传-分片上传那点事
https://juejin.cn/post/7305213173896642586?utm_source=gold_browser_extension


前端实现PDF预览的几种选择（pdfjs-dist、react-pdf、pdf-viewer）
https://juejin.cn/post/7304863390941839412?utm_source=gold_browser_extension


万条数据如何加载显示（长列表优化）
https://juejin.cn/post/7305986100086685732?utm_source=gold_browser_extension


npm 发包 保姆级教程 发布一个属于自己的npm包吧！
https://juejin.cn/post/7305983860168491071?utm_source=gold_browser_extension

前端开发桌面应用技术调查
https://juejin.cn/post/7305984042663608346?utm_source=gold_browser_extension


扩展你的前端知识库，毫无废话（二）！
https://juejin.cn/post/7305977418720378931?utm_source=gold_browser_extension
一、vite项目自动配置路由
1. 痛点分析
2. 使用以及配置
3. 效果展示
二、await-to-js的源码解读
1. 用法
2. 源码分析
三、获取 URL 中的参数
1. 如何获取 URL 中的参数
2. 边界情况处理
3. 封装函数
4. 进一步完善
四、如何终止forEach循环
1. 抛出错误
2. 将数组长度设置成0
3. 使用splice移除数组元素
五、forEach不能胜任异步任务
1. 问题复现
2. forEach的原理
3. 解决方案
4. 使用迭代器
六、多个相同组件重复请求
1. 方式一
2. 方式二



使用 html2PDF 将内容导出为 PDF
https://juejin.cn/post/7306802651008745472?utm_source=gold_browser_extension


资源提示关键词（defer 、async、preload、prefetch）
总结

async属性：用于异步加载脚本文件，适用于独立运行的脚本，可以提高页面加载性能。
defer属性：用于延迟执行脚本文件，适用于依赖其他资源或DOM元素的脚本，可以保证按顺序执行。
preload属性：用于预加载必需的资源，如脚本、样式表、字体等，以加快后续加载和渲染过程。
prefetch属性：用于预先获取未来可能需要的资源，如下一页的HTML文件、图片、视频等，以提高用户访问时的加载速度。
prerender属性：用于后台预渲染指定页面，在用户访问时能够立即呈现出来，提供更快的用户体验。
preconnect属性：用于预先建立与指定域名的连接，在后续请求资源时能够更快地建立连接并获取数据。
链接：https://juejin.cn/post/7306786497712537650


前端如何直接上传文件夹
https://juejin.cn/post/7292323606875553843?utm_source=gold_browser_extension 