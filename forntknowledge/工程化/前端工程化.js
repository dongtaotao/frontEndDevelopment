Web团队建设--自定义脚手架
https://juejin.cn/post/7156961879837900830

如果让我来搭建项目【规范篇】
https://juejin.cn/post/7201868291271016485?

5分钟读懂前端标准化之旅
https://juejin.cn/post/7201883287937597496?

前端项目重构的一些思考和复盘
https://juejin.cn/post/7204471695544369207?

前端脚手架开发指南
https://cloud.tencent.com/developer/article/2227918

前端架构第一步，前端基建（个人总结）
https://juejin.cn/post/7207271372522782775


标准化大厂编程规范解决方案之ESLint + Prettier + Git Hooks
https://juejin.cn/post/7211539869805150263?

上传大文件中断了怎么恢复?
大文件一般都是采用分片上传，将大文件转换成二进制文件流，利用文件流可以切割的属性，将整个文件切分成多个chunk,
每个chunk都要有chunkIndex，chunkHash, 此外还要传chunkTotal,fileHash给服务器,以便服务端校验文件的正确性和完整性。
以并行或串行的方式传输，服务器接收分片并存储，收到合并请求后使用流将切片合并成最终文件。
在分片上传的过程中，如果因为由于意外因素（如网络中断或系统崩溃等异常因素)导致上传中断，网络恢复后，为了避免重新开始从头上传,
 需要在上传切片的时候记录上传的进度。再次上传时，可以继续从上次中断的地方进行继续上传。可以在客户端记录,服务端也可以提供
 已上传分片查询接口，让客户端查询已上传的分片数据，下一次从未上传的分片数据开始继续上传。

链接：https://juejin.cn/post/7212016466774048805

如何实现全网置灰？CSS3来解决
https://blog.csdn.net/aaqingying/article/details/128496253
filter: grayscale(100%);

2023前端求职经历回顾及面试题总结
https://juejin.cn/post/7211775653166219323?#mianshiti

前端如何优雅的实现跨终端开发（PC端+移动端）
https://blog.csdn.net/aaqingying/article/details/128429872
解决方案一：使用CSS媒体查询。
解决方案二：写两套代码，分别应用于PC端和移动端。
推荐方案：使用CabloyJS
相关链接


在京东如何做好前端系统的可观测性
https://juejin.cn/post/7212268146580029501?

Vue接入富文本ckeditor4+mathtype+latex集成指南
https://juejin.cn/post/6844904135217659912


如何使用 pnpm+vite+vue3 搭建组件库并发布到私有仓库（人人都能学会）
https://juejin.cn/post/7212538330829996092?