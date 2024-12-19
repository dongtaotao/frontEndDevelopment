https://juejin.cn/post/7317193434733723663?utm_source=gold_browser_extension
使用谷歌开发者工具分析内存泄漏


Pinia属性及使用详解与实现持久化存储
https://juejin.cn/post/7317325063127580681?utm_source=gold_browser_extension


云服务器实践与部署

阿里云服务器实践 与 Nginx 部署
https://www.arryblog.com/guide/deploy/alibaba-cloud-deployment.html#%E4%B8%80%E3%80%81%E9%98%BF%E9%87%8C%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8

Nginx 部署的核心配置、优化、域名服务器备案
https://www.arryblog.com/guide/deploy/nginx-configure.html#%E4%B8%80%E3%80%81nginx-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6


10分钟搞懂前端常见跨域问题   还不错
https://juejin.cn/post/7316844192605192211?utm_source=gold_browser_extension

基于jsqr的前端扫码组件实现（React）
https://juejin.cn/post/7317278802727272459?utm_source=gold_browser_extension

JSBridge的原理
https://juejin.cn/post/6844903585268891662


金九银十，带你复盘大厂常问的项目难点   🐲🐲🐲🐲
https://juejin.cn/post/7274883755478564922?utm_source=gold_browser_extension#heading-119


前端白屏的检测方案，让你知道自己的页面白了 https://juejin.cn/post/7176206226903007292
web-see 前端监控
import webSee from 'web-see';

Vue.use(webSee, {
  dsn: 'http://localhost:8083/reportData', // 上报的地址
  apikey: 'project1', // 项目唯一的id
  userId: '89757', // 用户id
  silentWhiteScreen: true, // 开启白屏检测
  skeletonProject: true, // 项目是否有骨架屏
  whiteBoxElements: ['html', 'body', '#app', '#root'] // 白屏检测的容器列表
});


如何从0到1搭建前端监控平台
https://juejin.cn/post/7172072612430872584



Vue项目和小程序项目图片上传腾讯云实现
https://juejin.cn/post/7318083996583428123?utm_source=gold_browser_extension

【项目总结】文件上传原理及多场景实现
https://juejin.cn/post/7319113290893557801?utm_source=gold_browser_extension
文件上传的请求体
前端页面
文件上传逻辑和原理
不同的上传场景
多文件(夹)上传
拖拽上传
裁剪上传
切片上传


低代码扫盲：Vite+vue3实现C端活动配置
https://juejin.cn/post/7319297259643715618?utm_source=gold_browser_extension

《从0到1搭建低代码平台-编辑拖拽实现》
https://juejin.cn/post/7319297259643764770?utm_source=gold_browser_extension


代码刚上线，页面就白屏了
https://juejin.cn/post/7302367564838567962?utm_source=gold_browser_extension

3. 无重复字符的最长子串/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0; // 左指针的初始位置
    let res = 0; // 长度初始值为0
    const map = new Map();
    for(let r = 0; r < s.length; r++) {
        if(map.has(s[r]) && map.get(s[r]) >= l ) {
            l = map.get(s[r]) + 1;
        }
        res = Math.max(res, r - l + 1);
        map.set(s[r], r);
    }
    return res;
};
https://juejin.cn/post/6973941162952687653
const tree = {
  val: 'a',
  children: [{
    val: 'b',
    children: [{
      val: 'd',
      children: [],
    }, {
      val: 'e',
      children: [],
    }],
  }, {
    val: 'c',
    children: [{
      val: 'g',
      children: [],
    }, {
      val: 'f',
      children: [],
    }],
  }],
}
const bfs = (root) => {
  const q = [root]
  while (q.length > 0) {
    const n = q.shift(); // 对头出队
    console.log(n.val)
    n.children.forEach(item => { // 把对头的`children`挨个入队
      q.push(item)
    })
  }
}
bfs(tree) // a,b,c,d,e,f,g



8 Webpack Proxy工作原理？为什么能解决跨域
https://interview.html5.wiki/advance.html#_6-%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8B-tree-shaking
1. 是什么
webpack proxy，即webpack提供的代理服务
基本行为就是接收客户端发送的请求后转发给其他服务器
其目的是为了便于开发者在开发模式下解决跨域问题（浏览器安全策略限制）
想要实现代理首先需要一个中间服务器，webpack中提供服务器的工具为webpack-dev-server
2. 工作原理
proxy工作原理实质上是利用http-proxy-middleware 这个http代理中间件，实现请求转发给其他服务器



短链生成系统由浅入深及Nest.js实现
https://juejin.cn/post/7319334601880961051?utm_source=gold_browser_extension



2023 前端年度技术总结
https://juejin.cn/post/7318561797451939881?utm_source=gold_browser_extension



贪心算法(找零)
https://juejin.cn/post/6989103878436290568
商店老板有1、2、5、10面额的纸币，小伙买东西给了100花了80，计算如何找零是最佳（阿里面试题）
function MinCoinChange(coins) {
  return function(amount) {
    let total = 0, change = []
    for(let i= coins.length; i>=0; i--) {
      let coin = coins[i]
      while(total + coin <= amount) {
        change.push(coin)
        total += coin
      }
    }
    return change
  }
}

MinCoinChange([1,2,5,10])(20)
返回：10,10


Docker + Verdaccio 搭建 npm 私服仓库
https://juejin.cn/post/7320513026188541987?utm_source=gold_browser_extension



极限拆解：大视频分片上传与播放的完美解决方案
https://juejin.cn/post/7320231946009395212?utm_source=gold_browser_extension


Hello Lottie (lottie-web)
https://juejin.cn/post/7321049383570767881?utm_source=gold_browser_extension


0106


Leet code    🐯
React  🐯
Android  🐯
鸿蒙 🐯


0108
docker  🐯
鸿蒙  🐯
微前端



Docker 快速入门
https://docker.easydoc.net/doc/81170005/cCewZWoN/lTKfePfP
Docker 1小时快速上手教程，无废话纯干货

Docker 1小时快速上手教程 bilibili 搜索
https://www.bilibili.com/video/BV19N4y1R735/?p=2&spm_id_from=pageDriver&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


Kubernetes（K8S）简介
https://k8s.easydoc.net/docs/dRiQjyTY/28366845/6GiNOzyZ/9EX8Cp45
https://www.bilibili.com/video/BV1Tg411P7EB/?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

使用docker进行CI/CD的前端项目部署
https://www.bilibili.com/video/BV1Cu4y147h2/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

使用docker进行CI/CD的前端项目部署
https://www.bilibili.com/video/BV19N4y1R735/?p=2&spm_id_from=pageDriver&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


前端工程师也应该了解的docker 好文章、1. 前言
2. 什么是 docker？
3. Docker 的组成
3.1 docker 的感性理解
3.2 docker 使用流程
3.3 docker 常用指令
4. 部署前端项目
4.1 准备前端项目源码
4.2 添加 nginx.conf
4.3 添加 Dockfile
4.4 构建镜像
4.5 启动容器
4.6 自动化部署流程
4.7 小结
5. 部署 Node.js 应用
5.1 准备后端服务源码
5.2 添加 .dockerignore 和 Dockfile
5.3 构建镜像 + 启动容器
5.4 进入容器
6. 镜像推送
6.1 docker 登录
6.2 tag 标签设置
6.3 推送到镜像仓库
7. 总结
https://juejin.cn/post/7250029395023544376?searchId=2024010810125472897ECB1B3E5F18584A

给前端的docker 10分钟真 · 快速入门指南
https://juejin.cn/post/7050304120082661407


【狂神说Java】Docker最新超详细版教程通俗易懂
https://www.bilibili.com/video/BV1og4y1q7M4?p=26&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

dockerfile是用来构建docker镜像的文件

1、Docker学习大纲
2、聊聊Docker为什么会出现
3、聊聊Docker的历史
4、Docker能做什么
5、Docker中的名词概念
6、安装Docker
7、配置阿里云镜像加速
8、Run的流程和Docker原理
9、镜像的基本命令
10、容器的基本命令
11、日志、元数据、进程的查看
12、进入容器的命令和拷贝命令


Nginx部署网站&Docker&自动更新部署
https://juejin.cn/post/7321562665816604711?utm_source=gold_browser_extension


【大前端 nodejs】nginx面试真题
https://juejin.cn/post/7213209438713987128

大文件切片上传以及切片合并
https://juejin.cn/post/7322275119594258495?utm_source=gold_browser_extension



「历时8个月」10万字前端知识体系总结（工程化篇）🔥
https://juejin.cn/post/7146976516692410376
「历时8个月」10万字前端知识体系总结（算法篇）🔥
https://juejin.cn/post/7146975493278367752
「历时8个月」10万字前端知识体系总结（前端框架+浏览器原理篇）🔥
https://juejin.cn/post/7146996646394462239


实践总结 3 种前端部署后页面检测版本的方法
https://juejin.cn/post/7322518831938142217?utm_source=gold_browser_extension
1、轮询打包后的 index.html，比较生成的 js 文件的 hash
2、HEAD 方法轮询响应头中的 etag
3、监听 git commit hash 变化


聊一聊前端跨域302跳转的问题
https://juejin.cn/post/7322463748005658635?utm_source=gold_browser_extension


移动端 H5 Tab 如何滚动居中
https://juejin.cn/post/7322730720732921867?utm_source=gold_browser_extension


0114

微信JS-SDK使用教程 🐯
https://www.bilibili.com/video/BV1WX4y1U7gN/?p=12&spm_id_from=pageDriver&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
0101微信JSSDK文档
0102分享链接效果演示
0103绑定域名
0104引入微信jssdk
0105创建应用服务器
0106获取access_token
0107异步化获取access_token
0108获取jsapi_ticket
0109缓存jsapi_ticket
0110生成签名
0111配置API
0112调用jssdk的API 


大文件上传优化（切片、断点续传、秒传）
https://juejin.cn/post/7323883238896058387?utm_source=gold_browser_extension
大文件上传
前景提要
1、大文件切片上传
逻辑梗概
优势分析：
前端部分
后端部分
代码实现
2、大文件秒传
逻辑梗概
优势分析：
代码实现
资源
相关推荐

使用 React + Node.js 实现图片上传功能！
https://juejin.cn/post/7322661615983149066


前端金额运算精度丢失问题及解决方案
https://juejin.cn/post/7325627704782307337?utm_source=gold_browser_extension

🌟前端使用Lottie实现炫酷的开关效果🌟
https://juejin.cn/post/7325717778597773348?utm_source=gold_browser_extension


[vue-plugin-hiprint] 打印总结
https://juejin.cn/post/7326268947069681690?utm_source=gold_browser_extension
工厂 saas 项目，出货需要打印「发货单」、「质保卡」等

核心需求：自动打印、选择打印机、自定义打印模板设计


🚀React+Node全栈无死角解析，吃透文件上传的各个场景
https://juejin.cn/post/7326093660705177612?utm_source=gold_browser_extension


前端图片上传方案&大文件上传
https://juejin.cn/post/7304182623571394601


大文件上传实现-切片上传功能（Vue+Express）
https://juejin.cn/post/7327099448332271651?utm_source=gold_browser_extension

H5 实现拍照选景框效果
https://juejin.cn/post/7327353533618978842?utm_source=gold_browser_extension


文件秒传以及断点续传
https://juejin.cn/post/7327424955036041253?utm_source=gold_browser_extension


自己搭一个 OSS 服务，和阿里云的一毛一样
https://juejin.cn/post/7329034058380935218?utm_source=gold_browser_extension

使用阿里云OSS上传文件
https://juejin.cn/post/6844903846431440909

阿里云OSS简单上传、分片上传前后端功能实现
https://juejin.cn/post/7273037222437339136

阿里云oss上传方法实战经验
https://juejin.cn/post/6989185629045129229


大文件上传实现-秒传续传功能（Vue+Express)
https://juejin.cn/post/7328329691352940571?utm_source=gold_browser_extension


Vue3快速实现文件上传OSS
https://juejin.cn/post/7328311796493582377?utm_source=gold_browser_extension


关于取消axios请求
https://www.jianshu.com/p/382bb7ecd70f

axios 请求中断和请求重试
https://juejin.cn/post/7328112725601927218?utm_source=gold_browser_extension

2种纯前端检测版本更新提示  
https://juejin.cn/post/7328670028605784076?utm_source=gold_browser_extension

2