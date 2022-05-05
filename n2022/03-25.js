【前端工程化】- 结合代码实践，全面学习前端工程化
https://juejin.cn/post/7033355647521554446
本文前言部分通过开发、构建、性能、测试、部署、规范六个方面，较全面地梳理了前端工程化的知识 

想进互联网大公司？那这些题你总得会吧？前端面试题2022及答案前端面试题2022及答案
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

