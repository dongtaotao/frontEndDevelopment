91、首屏、白屏时间如何计算  https://juejin.cn/post/7065483941305647112
白屏时间(First Paint)：
是指浏览器从响应用户输入网址地址，到浏览器开始显示内容的时间。中间过程包括DNS查询、建立TCP链接、发送首个HTTP请求、返回HTML文档、
HTML文档head解析完毕。
因此影响白屏时间的因素：网络、服务端性能、前端页面结构设计。
通常认为浏览器开始渲染或者解析完的时间是白屏结束的时间点。所以我们可以在html文档的head中所有的静态资源以及内嵌脚本/样式之前记录一个时间点，
在head最底部记录另一个时间点，两者的差值作为白屏时间

白屏时间 = 页面开始展示的时间点 - 开始请求的时间点

作者：小蝉儿
链接：https://juejin.cn/post/7065483941305647112
<!DOCTYPE html> 
<html lang="en"> 
    <head>
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <title>白屏时间计算-常规方法</title>
        <script>
            window.pageStartTime = Date.now() 
        </script>
        <link rel="stylesheet" href="https://b-gold-cdn.xitu.io/ionicons/2.0.1/css/ionicons.min.css">
        <link rel="stylesheet" href="https://b-gold-cdn.xitu.io/asset/fw-icon/1.0.9/iconfont.css">
        <script>
            window.firstPaint = Date.now() 
            console.log(`白屏时间：${window.firstPaint - window.pageStartTime}`) 
        </script> 
    </head>
    <body> 
        <div>这是常规计算白屏时间的示例页面</div> 
    </body>
    <script>

    常见计算方式
    用户自定义打点—最准确的方式（只有用户自己最清楚，什么样的时间才算是首屏加载完成）
        缺点：侵入业务，成本高
        粗略的计算首屏时间: loadEventEnd - fetchStart/startTime 或者 domInteractive - fetchStart/startTime
    通过计算首屏区域内的所有图片加载时间，然后取其最大值
    利用 MutationObserver 接口，监听 document 对象的节点变化

    链接：https://juejin.cn/post/7035647196510814221 别再用performance计算首屏时间了！！
    来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
    </script>
</html>
查看页面首屏时间、白屏时间
https://blog.51cto.com/u_15485864/4905983

前端性能优化 — 首屏时间和白屏时间 https://blog.csdn.net/qq_41914185/article/details/123715706



白屏时间
window.performence.timing.domLoading - window.performence.timing.fetchStart

首屏时间计算：https://blog.csdn.net/qq_41914185/article/details/123715706
new Date().getTime() - performance.timing.navigationStart

白屏时间计算：

在 </head> 标签前的 <script> 标签内加入代码：

如何优化首屏加载，减少白屏时间
DNS 预解析
<meta http-equiv="x-dns-prefetch-control" content="on" />
使用 link 标签 
<link rel="dns-prefetch" href="https://www.baidu.com" />
使用 HTTP2