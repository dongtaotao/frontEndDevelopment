面试官：你如何实现大文件上传 https://juejin.cn/post/7177045936298786872
（1）读取文件
（2）创建切片
（3）上传切片
2、后端
（1）接收切片
（2）合并切片


Vue 不重新打包，动态加载全局配置的实现过程
https://wojiushiwo945you.blog.csdn.net/article/details/128033843

Element UI 
动态生成的表单如何用 el-form 校验，你知道吗？https://wojiushiwo945you.blog.csdn.net/article/details/108990769

三分钟细数 el-form 表单校验的坑点，前车之鉴，可助你避坑
https://wojiushiwo945you.blog.csdn.net/article/details/108977668

CDN的概念
CDN（Content Delivery Network，内容分发网络）是指一种通过互联网互相连接的电脑网络系统，利用最靠近每位用户的服务器，更快、更可靠地将音乐、图片、视频、应用程序及其他文件发送给用户，来提供高性能、可扩展性及低成本的网络内容传递给用户。
    
CDN的作用
CDN一般会用来托管Web资源（包括文本、图片和脚本等），可供下载的资源（媒体文件、软件、文档等），应用程序（门户网站等）。使用CDN来加速这些资源的访问。
（1）在性能方面，引入CDN的作用在于：

用户收到的内容来自最近的数据中心，延迟更低，内容加载更快
部分资源请求分配给了CDN，减少了服务器的负载

（2）在安全方面，CDN有助于防御DDoS、MITM等网络攻击：

针对DDoS：通过监控分析异常流量，限制其请求频率
针对MITM：从源服务器到 CDN 节点到 ISP（Internet Service Provider），全链路 HTTPS 通信

除此之外，CDN作为一种基础的云服务，同样具有资源托管、按需扩展（能够应对流量高峰）等方面的优势。
链接：https://juejin.cn/post/7176068610522415141


function ajax(url, success) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(xhr.responseText);
        }
      }
    };
    xhr.send();
  } 