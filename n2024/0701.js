【前端升职加薪必备】手写低代码 | 底层原理 ：从入门到实战，阿里P8工程师手把手带你搭建低代码平台！！
https://www.bilibili.com/video/BV1utGoeNERa?p=10&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


前端性能优化（Vue项目）
https://juejin.cn/post/7393307982652882982?utm_source=gold_browser_extension


使用时间分片来解决10万个同步任务要执行
https://juejin.cn/post/7393304744712732682?utm_source=gold_browser_extension

问题：经常面试被问到，如果有10万个任务要执行，或者一个任务要被执行10万次，该怎么办？
都知道js是单线程，如果js一直占用主线程，那么浏览器就不能响应用户的交互，从而产生卡顿。因此我们需要让浏览器在执行任务时，需要暂停，从而去响应用户的操作。具体的实现方案有这3种
第一种，使用requestAnimationFrame，具体如何做，就不细说。
第二种，使用new worker新起一个线程去执行。
第三种，使用时间分片来执行。这也是我今天想要讲的。

链接：https://juejin.cn/post/7393304744712732682


前端性能优化（Vue项目）
https://juejin.cn/post/7393307982652882982?utm_source=gold_browser_extension