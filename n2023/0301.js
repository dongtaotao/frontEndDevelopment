****🍉 语音通话(Web)
vue 接入腾讯实时音视频 trtc-js-sdk 的技术难点与解决方案
https://developer.aliyun.com/article/1059452
https://www.tencentcloud.com/zh/document/product/647/38928

第3节 小程序TRTC-快速集成SDK
https://www.bilibili.com/video/BV1LZ4y157Lm/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

萤石（海康视频）---vue中使用（ezuikit-js） https://blog.csdn.net/wo_1021/article/details/118937439
监控视频
记录Vue结合萤石视频ezuikit.js的爬坑记录  https://www.cnblogs.com/synY/p/12700028.html

Vue 项目中对接海康 RTSP 实现视频监控
vue项目里对接海康rtsp
https://juejin.cn/post/7217082232937939005?

Vue中接入TRTC实现音视频通信
移动端Web接入腾讯云TRTC实践（React+TS）
https://juejin.cn/post/7217057805782220857?


trtc-js-sdk是什么
trtc-js-sdk 是腾讯实时音视频通信云（TRTC）推出的基于 WebRTC 技术实现的浏览器端音视频通信 SDK。它支持在 web 端进行多人视频会议、音视频直播等实时通信场景，提供了多种解决方案和 API 接口，便于开发者快速接入，实现实时音视频通信功能。
trtc-js-sdk 的主要特点：
基于 WebRTC 技术，支持跨平台、跨终端的音视频通信；
支持多人视频会议、音视频直播、一对一视频通话等场景；
提供多种解决方案，包括组件式交互 UI、直播 CDN 推流等；
提供简单易用的 API 接口，便于开发者快速接入。
开发者可以使用 trtc-js-sdk 实现多人视频会议、在线教育、远程医疗、直播等多种实时音视频通信场景，提升用户体验和交互性。


大数相加
let a = "9007199254740991";
let b = "1234567899999999999";

function add(a ,b){
   //...
}
function add(a ,b){
    //取两个数字的最大长度
    let maxLength = Math.max(a.length, b.length);
    //用0去补齐长度
    a = a.padStart(maxLength , 0);//"0009007199254740991"
    b = b.padStart(maxLength , 0);//"1234567899999999999"
    //定义加法过程中需要用到的变量
    let t = 0;
    let f = 0;   //"进位"
    let sum = "";
    for(let i=maxLength-1 ; i>=0 ; i--){
       t = parseInt(a[i]) + parseInt(b[i]) + f;
       f = Math.floor(t/10);
       sum = t%10 + sum;
    }
    if(f!==0){
       sum = '' + f + sum;
    }
    return sum;
 }

渣渣前端收集大佬们的43份千赞面试题汇总
https://juejin.cn/post/6844904079412445191

【文章解读】上传大文件的方法
https://www.bilibili.com/video/BV1NM4y1f7i3/?spm_id_from=333.788&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

PDF 预览和下载你是怎么实现的？
https://juejin.cn/post/7207078219215732794?

文件下载（触发浏览器默认下载器） 😌批量下载iframe
https://juejin.cn/post/7207002389802238009?

vue之使用IntersectionObserver API实现封装滚动动画组件
https://blog.csdn.net/wgh4318/article/details/126781622
https://www.haorooms.com/post/intersectionobserver

Function.prototype.myCall = function (context, ...args) {
  context = context || window;
  context.fn = this;
  let result = context.fn(...args);
  delete context.fn
  return result;
}
Function.prototype.myApply = function (context, args) {
  context = context || window;
  context.fn = this;
  let result = context.fn(...args);
  delete context.fn
  return result;
}
Function.prototype.myBind = function (context,...arg1) {
  let that = this
  return function(...arg2){
    return that.apply(context, [...arg1, ...arg2])
  }
}


22023面试真题之手写&代码运行篇
https://juejin.cn/post/7206912311562174523?

使用预加载和懒加载
预加载可以在页面加载时提前加载一些资源，以便后续使用。懒加载可以在需要时动态加载资源，从而减少页面的初始加载时间。可以通过以下方式来使用预加载和懒加载：
预加载示例代码：
<!-- 预加载图片 -->
{/* <link rel="preload" href="image.jpg" as="image"> */}

<!-- 预加载CSS文件 -->
{/* <link rel="preload" href="styles.css" as="style">
懒加载示例代码：
// 使用Intersection Observer API实现图片懒加载
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const src = img.getAttribute('data-src');
      img.setAttribute('src', src);
      observer.unobserve(img);
    }
  });
}); */}
const imgs = document.querySelectorAll('img[data-src]');
imgs.forEach(img => observer.observe(img));
链接：https://juejin.cn/post/7206540113571758136


css怎么实现样式隔离？🔥🔥
https://fe.ecool.fun/topic/f47b5d5d-4aec-44a9-907d-a2a054d6984e?orderBy=updateTime&order=desc&tagId=29

14. 按需加载的时候，HTML 上会提供一些标识，比如 pre-load 和 pre-fetch，你知道这是干什么的吗
pre-load是将某些资源在用户请求资源之前进行预先加载，pre-fetch是当浏览器或者用户未来可能请求的资源加载到缓存中，以便在用户真正请求资源时可以更快地访问和加载
链接：https://juejin.cn/post/7207444169358786618

大圣前端进阶指南
https://shengxinjing.cn/

JSON to TS
https://juejin.cn/post/6872111128135073806#heading-114
简介：一款 TypeScript 在线工具，利用它你可以为指定的 JSON 数据生成对应的 TypeScript 接口定义。

在线地址：www.jsontots.com/</link>

前端重新部署如何通知用户更新
https://juejin.cn/post/7207743145998893093?

前端重新部署了如何通知用户刷新网页？
https://blog.csdn.net/qq_41221596/article/details/128974451

前端重新部署如何通知用户刷新网页？
https://www.cnblogs.com/kewenxin/p/17080868.html

前端重新部署通知用户刷新网页
https://blog.csdn.net/weixin_46235143/article/details/128995781

面试题：判断元素是否在可视区域中----IntersectionObserver妙用
https://juejin.cn/post/7207964899380052005?

第160期：前端监控系统中各种功能的计算方案
https://juejin.cn/post/7207757855033851960?
pushState()方法
replaceState()方法
页面停留时长的处理
pageShow
pagehide
visibilitychange
点击事件的处理
元素曝光时长的计算
页面加载性能的计算
页面pv的统计方法
信息收集方案

vue3 使用 高德地图api
https://juejin.cn/post/7208370120849801271?

高德地图jsApi的使用
https://juejin.cn/post/7175339849212231741

初次使用高德地图api的一些配置(vue+高德JSAPI)
https://juejin.cn/post/7071177195464425509

大文件，也许没有你想象中那么“大”？前端大文件上传方法来了！
https://juejin.cn/post/7208425095861534779?

为何Proxy不能被Polyfill
如class可以用function模拟；promise可以用callback模拟
但是proxy不能用Object.defineProperty模拟

前端基于DOM或者Canvas实现页面水印
https://juejin.cn/post/7202996870251282487

前端加载超大图片(100M以上)实现秒开解决方案
https://juejin.cn/post/7212270321622106170?

使用Docker搭建Npm私服Verdaccio
https://juejin.cn/post/7160604665460031518

优化实战 第 55 期 - 系统推荐缩放比例的适配方案
https://juejin.cn/post/7169405211356692510 



正在为您搜索：vue项目、海康rtsp   https://chat2.binjie.site:7777/#/chat/1680181106442
在 Vue 项目中对接海康 RTSP 实现视频监控，可以使用第三方插件 vue-video-player 结合海康的 SDK 实现。具体步骤如下：

安装 vue-video-player。
bash
npm install vue-video-player --save
安装海康 SDK。
下载并解压海康 SDK 后，在需要使用视频监控的页面引入 SDK 中的相关文件。

html
<!-- 引入海康 SDK -->
<script type="text/javascript" src="/path/to/Hikvision/JS/hkws.js"></script>
在 Vue 组件中添加视频播放器组件。
html
<template>
  <div>
    <!-- video-player 组件 -->
    <video-player :options="options"></video-player>
  </div>
</template>

<script>
// 引入 vue-video-player 组件
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default {
  name: 'HkVideoPlayer',
  components: {
    // 注册 video-player 组件
    VideoPlayer,
  },
  data() {
    return {
      options: {
        // 设置海康 RTSP 地址
        sources: [{
          src: 'rtsp://用户名:密码@IP地址:554/cam/realmonitor?channel=1&subtype=0',
          type: 'rtsp/flv'
        }],
        // 视频画面宽度和高度
        width: '100%',
        height: 480,
        // 是否自动播放
        autoplay: true,
        controls: true,
        muted: false,
        loop: false,
        aspectRatio: '16:9',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        // 是否显示海康视频
        hk_ws: true,
      }
    }
  },
  mounted() {
    // 进行海康视频控制初始化
    const player = this.$refs.videoPlayer.player
    this.initHkControl(player)
  },
  methods: {
    // 初始化海康视频控制
    initHkControl(player) {
      if (typeof (player.realPlay) !== 'undefined') {
        let cameraId = 1
        const IPCType = 'hik_ipc'
        const streamMode = 1 // 子码流（主码流：0，子码流：1，第三码流：2）

        // 创建海康控件实例
        this.hkControl = new HK_WS()

        // 海康控件初始化
        HK_user_login_init(this.hkControl).then(() => {
          HK_real_play_init(cameraId, IPCType, streamMode, player, this.hkControl)
        })
      }
    },
  },
}
</script>
在 mounted 钩子函数中进行海康视频控制的初始化。
javascript
mounted() {
  // 进行海康视频控制初始化
  const player = this.$refs.videoPlayer.player
  this.initHkControl(player)
},
methods: {
  // 初始化海康视频控制
  initHkControl(player) {
    if (typeof (player.realPlay) !== 'undefined') {
      let cameraId = 1
      const IPCType = 'hik_ipc'
      const streamMode = 1 // 子码流（主码流：0，子码流：1，第三码流：2）

      // 创建海康控件实例
      this.hkControl = new HK_WS()

      // 海康控件初始化
      HK_user_login_init(this.hkControl).then(() => {
        HK_real_play_init(cameraId, IPCType, streamMode, player, this.hkControl)
      })
    }
  },
},
注意事项：
 
需要确保 Vue 项目的打包配置可以访问海康 SDK 相关文件。
在 RTSP 地址中需要替换用户名、密码和 IP 地址为实际的值。
查看海康 RTSP 地址时，可以从海康设备的管理页面上找到。  