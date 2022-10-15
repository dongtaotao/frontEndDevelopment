https://juejin.cn/post/7076303417383059469 ========================
社招5年高级前端，腾讯字节蚂蚁拼多多 面试真题 

前端面试准备的50道算法题上 ******************
https://juejin.cn/post/7080174781508616206

实现一个二叉搜索树转链表的方法 =======
SSR 的实现原理是什么 ========

实现两个大数相加 *************
写一个 LRU 缓存函数 *************

webpack 怎么做分包？  commonsChunkPlugin，使用更方便灵活智能的 splitChunks 来做分包的操作。 https://juejin.cn/post/6895546761255845901

什么是 TS 泛型？ https://www.cnblogs.com/LVBingo/p/11347329.html
数组有10万个数据，取第一个和取第10万个的耗时多久？   huliebuji
JS 垃圾回收机制？怎么定位 Node 内存泄露问题？

useState 怎么做缓存的
怎么解决 useState 闭包的问题

SSR的原理及好处 https://www.jianshu.com/p/3df5fde98995

三金四银的面经总结 https://juejin.cn/post/7075658792100167688

说一下JS的垃圾回收机制？V8的新生代老生代垃圾回收了解吗？

为什么useState要写成[state,useState]的形式？ https://juejin.cn/post/6992562102007234567
抓包工具原理是什么？  https://juejin.cn/post/6844904053248360455

一位来自北京的前端同学在2022.03月的面试记录
https://juejin.cn/post/7079778112006783013

Webpack5 React的配置 ********************************
https://juejin.cn/post/7071074431623233567

你不知道JS的事件执行机制？https://juejin.cn/post/7080362813176152077

思考：为什么typeof(null) 会返回object
答：在早期的JS底层，对象都是以0开头的，而null的二进制正好是000，所以就会造成这个bug

constructor 方式
可以判断JS的基本数据类型和引用数据类型，但是有一个致命的缺陷，使用constructor判断null或者undefined 会导致代码报错，会直接导致代码无法执行。

金三银四，如何介绍自己项目经验才能一鸣惊人？
https://juejin.cn/post/7077095449223495711 

flex: 1，解释一下意义？

Webpack的分包配置

any、unknown、never 的区别

从零开始构建一个webpack项目
https://juejin.cn/post/6844904005286494215   

洗牌算法的实现，random - 0.5 的弊端（伪随机，大数据量下每个数出现的位置，分布不均匀）
用正则格式化金额。因为正则记不太住规则，就改用代码去实现。

前端两年面经分享（字节/阿里）
https://juejin.cn/post/7073345968015409166

如果图片加载失败，如何做统一处理及优化？
https://www.jianshu.com/p/3640705a770c
通过在全局监听的方式，来对异常图片做降级处理
window.addEventListener('error',function(e){
    // 当前异常是由图片加载异常引起的
    if( e.target.tagName.toUpperCase() === 'IMG' ){
        e.target.src = '//xxx/default.jpg';
    }
},true)
最后，我们在思考一个问题，当网络出现异常的时候，必然会出现什么网络图片都无法加载的情况，这样就会导致我们监听的 error 事件。
被无限触发，所以我们可以设定一个计数器，当达到期望的错误次数时停止对图片赋予默认图片的操作，改为提供一个Base64的图片。
window.addEventListener('error',function(e){
    let target = e.target, // 当前dom节点
        tagName = target.tagName,
        count = Number(target.dataset.count ) || 0, // 以失败的次数，默认为0
        max= 3; // 总失败次数，此时设定为3
    // 当前异常是由图片加载异常引起的
    if( tagName.toUpperCase() === 'IMG' ){
        if(count >= max){
            target.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//AK3/ALYH+5hX6FV5N4Y/5GHwx/vyf+iJa9ZrysPhoYVShDZu/potDmwWFhhIzhT2bv6aLQ//Z';
        }else{
            target.dataset.count = count + 1;
            target.src = '//xxx/default.jpg';
        }
    }
},true)
链接：https://www.jianshu.com/p/3640705a770c

监听error事件处理常规js错误 监听unhandledrejection事件处理当Promise 被 reject 且没有 reject 处理器的时候 ajax请求处理接口异常

【前端工程化】- 结合代码实践，全面学习前端工程化
https://juejin.cn/post/7033355647521554446
本文前言部分通过开发、构建、性能、测试、部署、规范六个方面，较全面地梳理了前端工程化的知识 

想进互联网大公司？那这些题你总得会吧？前端面试题2022及答案
https://blog.csdn.net/qq_33277654/article/details/122924692

重绘(repaint): 当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，此时由于只需要UI层面的重新像素绘制，因此 损耗较少
回流(reflow): 当元素的尺寸、结构或触发某些属性时，浏览器会重新渲染页面，称为回流。此时，浏览器需要重新经过计算，计算后还需要重新页面布局，因此是较重的操作。
会触发回流的操作:
链接：https://juejin.cn/post/6844903776512393224 

//方法一：设置一个标志
function throttle(fn, delay) {
    let flag = true;
    return () => {
        if (!flag) return;
        flag = false;
        timer = setTimeout(() => {
            fn();
            flag = true;
        }, delay);
    };
}
    //方法二：使用时间戳
function throttle(fn, delay) {
    let startTime=new Date()
    return () => {
        let endTime=new Date()
        if (endTime-startTime>=delay){
            fn()
            startTime=endTime
        }else{
            return
        }
    };
    }
    window.addEventListener(
    "scroll",
    throttle(() => {
        console.log(111);
    }, 1000)
);

中高级前端必须注意的40条移动端H5坑位指南 | 网易三年实践
https://juejin.cn/post/6921886428158754829

7. 如何实现浏览器内多个标签页之间的通信?
实现多个标签页之间的通信，本质上都是通过中介者模式来实现的。因为标签页之间没有办法直接通信，因此我们可以找一个中介者，
让标签页和中介者进行通信，然后让这个中介者来进行消息的转发。通信方法如下：

使用 websocket 协议，因为 websocket 协议可以实现服务器推送，所以服务器就可以用来当做这个中介者。标签页通过向服务器发送数据，然后由服务器向其他标签页推送转发。
使用 ShareWorker 的方式，shareWorker 会在页面存在的生命周期内创建一个唯一的线程，并且开启多个页面也只会使用同一个线程。
   这个时候共享线程就可以充当中介者的角色。标签页间通过共享一个线程，然后通过这个共享的线程来实现数据的交换。
使用 localStorage 的方式，我们可以在一个标签页对 localStorage 的变化事件进行监听，然后当另一个标签页修改数据的时候，
   我们就可以通过这个监听事件来获取到数据。这个时候 localStorage 对象就是充当的中介者的角色。
使用 postMessage 方法，如果我们能够获得对应标签页的引用，就可以使用postMessage 方法，进行通信。
链接：https://juejin.cn/post/6916157109906341902/

宏任务和微任务分别有哪些
微任务包括： promise 的回调、node 中的 process.nextTick 、对 Dom 变化监听的 MutationObserver。
宏任务包括： script 脚本的执行、setTimeout ，setInterval ，setImmediate 一类的定时事件，还有如 I/O 操作、UI 渲染等。
链接：https://juejin.cn/post/6916157109906341902/

页面10张img，http1是怎样的加载表现，怎么解决。那多域名又为什么可以解决呢【描述】
这个是面试重点高频率问题之一，http1下，浏览器对一个域名下最大tcp连接数为6，所以10张图片表现为6+4。
所以可以用多域名部署解决。5个a域名，5个b域名就可以实现一瞬间全部出来了(或者6个a，4个b，融会贯通)。如果是1个a域名，9个多域名，会表现为(6 + 1) + 3

HTTP/2.0协议支持在同一个TCP连接上发送无限个HTTP请求，且这些请求的生命期可以重叠。

10张img，http2是怎样表现【描述】
一瞬间全部

链接：https://juejin.cn/post/6844904137495150599

前端实现@功能 https://blog.csdn.net/weixin_48845614/article/details/123189804  https://segmentfault.com/a/1190000007846897
键入 @ 后将选择框显示出来
点击选择框中的选项时，返回输入框
输入框中显示 @xxx
将光标定位在 @xxx 以后
删除 @xxx 时须要整个 @xxx 一块儿删除

前端如何实现跨页面通信？
https://juejin.cn/post/7009951023343091719

js闭包及问题的解决
闭包定义，作用
闭包就是能够读取其他函数内部变量的函数。
作用：一个是可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中
缺点：闭包会保存函数中的变量在内存中，导致内存消耗大
闭包会在父函数外部改变父函数内部变量的值 

【深入理解】前端内存管理
https://juejin.cn/post/6926444817950572552

系统权限的实现和控制 ===============    

