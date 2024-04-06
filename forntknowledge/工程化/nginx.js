正向代理和反向代理
反向代理（Reverse Proxy）对应的是正向代理（Forward Proxy），他们的区别：
正向代理： 一般的访问流程是客户端直接向目标服务器发送请求并获取内容，使用正向代理后，客户端改为向代理服务器发送请求，并指定目标服务器（原始服务器），
    然后由代理服务器和原始服务器通信，转交请求并获得的内容，再返回给客户端。正向代理隐藏了真实的客户端，为客户端收发请求，使真实客户端对服务器不可见；
举个具体的例子 🌰，你的浏览器无法直接访问谷哥，这时候可以通过一个代理服务器来帮助你访问谷哥，那么这个服务器就叫正向代理。
反向代理： 与一般访问流程相比，使用反向代理后，直接收到请求的服务器是代理服务器，然后将请求转发给内部网络上真正进行处理的服务器，
    得到的结果返回给客户端。反向代理隐藏了真实的服务器，为服务器收发请求，使真实服务器对客户端不可见。一般在处理跨域请求的时候比较常用。
      现在基本上所有的大型网站都设置了反向代理。
举个具体的例子 🌰，去饭店吃饭，可以点川菜、粤菜、江浙菜，饭店也分别有三个菜系的厨师 👨‍🍳，但是你作为顾客不用管哪个厨师给你做的菜，
  只用点菜即可，小二将你菜单中的菜分配给不同的厨师来具体处理，那么这个小二就是反向代理服务器。
简单的说，一般给客户端做代理的都是正向代理，给服务器做代理的就是反向代理。
链接：https://juejin.cn/post/6844904144235413512

Nginx高级篇：从原理到实战，彻底搞懂Nginx
https://zhuanlan.zhihu.com/p/431181851

Nginx 从入门到实践，万字详解！  
https://juejin.cn/post/6844904144235413512#heading-13   


【大前端 nodejs】nginx面试真题
https://juejin.cn/post/7213209438713987128


B站  前端Nginx
https://search.bilibili.com/all?vt=02745109&keyword=%E5%89%8D%E7%AB%AFnginx&from_source=webtop_search&spm_id_from=333.999&search_source=5


nginx 部署前端项目 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
https://www.bilibili.com/video/BV1fG4y1a7Sv/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


【文章解读】使用nginx部署vue项目及常见问题
https://www.bilibili.com/read/cv20095657/
https://www.bilibili.com/video/BV1x84y1k7qf/?spm_id_from=333.788.recommend_more_video.-1&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a



前端必学之Nginx与Linux       📚📚📚📚📚📚📚📚📚📚📚📚📚📚📚
https://www.bilibili.com/video/BV1vQ4y1f7LF?p=4&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
01-课程介绍
02-服务器购买
03-重置实例密码
04-Linux基本命令
05-杀死进程
06-scp上传下载项目
07-ftp上传项目
08-nginx安装与运行
09-nvm安装
10-node与git的安装
11-项目部署
12-nginx解决跨域
13-gzip压缩


1小时Nginx快速入门到企业实战教程！安装搭建&部署配置&反向代理&实战优化
https://www.bilibili.com/video/BV13a4y1d7cg/?p=3&spm_id_from=pageDriver&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
01. 前言
02. Nginx介绍篇
03. Nginx环境准备&安装搭建
04. Nginx安装搭建之源码方式
05. Nginx配置开启GZIP压缩
06. Nginx网站系统优化之防盗链
07. Nginx反向代理实现免备案域名访问
08. Nginx实战之开启Brotli压缩
09. Nginx实战之限流
10. Nginx网站优化之合并请求实战 
11. Nginx配置开启SSL证书实战


Nginx一网打尽：动静分离、压缩、缓存、黑白名单、跨域、高可用、性能优化
https://zhuanlan.zhihu.com/p/656647646
一、性能怪兽-Nginx概念深入浅出
二、Nginx环境搭建
三、Nginx反向代理-负载均衡
四、Nginx动静分离
五、Nginx资源压缩
六、Nginx缓冲区
七、Nginx缓存机制
八、Nginx实现IP黑白名单
九、Nginx跨域配置
十、Nginx防盗链设计
十一、Nginx大文件传输配置
十二、Nginx配置SLL证书
十三、Nginx的高可用
十四、Nginx性能优化
十五、放在最后的结尾

容器化 
https://www.html5iq.com/container/index 
