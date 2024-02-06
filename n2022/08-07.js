如何检测网站是否有内存泄漏
https://www.bilibili.com/video/BV16i4y1m7ta?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

前端最火的四个框架，你还是只只知道2个！
https://www.bilibili.com/video/BV1CF411j7Va?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

通过nexus3部署公司内部的私有npm仓库：从安装到配置、从发布包到测试包的一条龙服务
https://juejin.cn/post/7129312690404589605

前端实现网页转PDF并保存(vue方案)
https://blog.csdn.net/weixin_43482353/article/details/126349394?utm_source=tuicool&utm_medium=referral

vue 里怎么用 lottie-web 实现动画效果？
https://blog.51cto.com/kaimo313/5588250 

如何实现大文件分片上传
https://juejin.cn/post/7135718291854589982

mac上的node版本管理工具-n命令
https://www.bilibili.com/video/BV1c3411r7rj?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

window下node版本管理工具-nvm
https://www.bilibili.com/video/BV1Bg41177t2?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

作为前端，你还不会搭建npm私库吗？
https://www.bilibili.com/video/BV15g411M7oJ?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

你不知道的 npm link
https://www.bilibili.com/video/BV1wb4y1C76w?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


总结： 伪类是通过在元素选择器上加⼊伪类改变元素状态，⽽伪元素通过对元素的操作进⾏对元素的改变。
伪元素和伪类的区别和作用？
伪元素：在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：
p::before {content:"第一章：";}
p::after {content:"Hot!";}
p::first-line {background:red;}
p::first-letter {font-size:30px;}

伪类：将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：
a:hover {color: #FF00FF}
p:first-child {color: red}


基于 vue 的 lottie 动画播放器 lottie-web-vue https://github.com/garbit/lottie-web-vue

前端上传，进度，预计上传完成时间
https://juejin.cn/post/7047725117551575054#heading-3

网络视频的防盗与破解
https://refined-x.com/2022/05/26/%E7%BD%91%E7%BB%9C%E8%A7%86%E9%A2%91%E7%9A%84%E9%98%B2%E7%9B%97%E4%B8%8E%E7%A0%B4%E8%A7%A3/


前端工具箱-lottie 动画库
https://lottiefiles.com/search?q=celebrate&category=animations

GraphQL在react中的应用
https://juejin.cn/post/7152810866772017159

什么？？还不会大文件分片上传？
https://juejin.cn/post/7149765960704983076

嗦嗦postMessage和webSocket https://juejin.cn/post/7152773676876857374

搭建npm私服，我为什么推荐Verdaccio？
https://juejin.cn/post/7152508589385449479

「万变不离其宗」10个高频场景题助力业务开发 🚀🚀🚀 
https://juejin.cn/post/7152722756587978760

bash和zsh的区别
https://blog.csdn.net/LuoMin2523/article/details/119215880

图片不压缩，前端要背锅 🍳
https://juejin.cn/post/7153086294409609229

【第20题】npm run xxx 的执行过程 https://juejin.cn/post/7153601063542521886

使用SourceTree回滚  
https://www.jianshu.com/p/5b28fe70469d?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation

sourceTree 代码回滚(git 和http)
http://t.zoukankan.com/matengfei123-p-12376443.html

阿里面试官：如何给所有的async函数添加try/catch？
babel插件的实现思路
1）借助AST抽象语法树，遍历查找代码中的await关键字
2）找到await节点后，从父路径中查找声明的async函数，获取该函数的body（函数中包含的代码）
3）创建try/catch语句，将原来async的body放入其中
4）最后将async的body替换成创建的try/catch语句
链接：https://juejin.cn/post/7155434131831128094


将js对象转化为树形结构  https://juejin.cn/post/7155678722866020359
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
  

在网页上添加水印 - react-watermark https://juejin.cn/post/7157982053013651470

如果是你该如何实现前端数据上报？https://juejin.cn/post/7126726273254031368

微信JSSDK https://www.bilibili.com/video/BV1pv411L7p6/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
vue接入-微信jssdk https:/n/www.bilibili.com/video/BV1Vy4y1y7qG/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

大文件分片上传，断点续传 node.js+axios+egg.js
https://juejin.cn/post/7161749221061132302

页面有多张图片，HTTP是怎样的加载表现？
在HTTP 1下，浏览器对一个域名下最大TCP连接数为6，所以会请求多次。可以用多域名部署解决。这样可以提高同时请求的数目，加快页面图片的获取速度。
在HTTP 2下，可以一瞬间加载出来很多资源，因为，HTTP2支持多路复用，可以在一个TCP连接中发送多个HTTP请求。
链接：https://juejin.cn/post/7161194386028494885

params和query的区别
用法：query要用path来引入，params要用name来引入，接收参数都是类似的，分别是 this.$route.query.name 和 this.$route.params.name 。
url地址显示：query更加类似于ajax中get传参，params则类似于post，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示
注意：query刷新不会丢失query里面的数据 params刷新会丢失 params里面的数据。
链接：https://juejin.cn/post/7160474349177143304

一篇解决内存泄漏问题 https://juejin.cn/post/7163152277056782350

手写一个埋点SDK吧~ https://juejin.cn/post/7165159142867337247      

  