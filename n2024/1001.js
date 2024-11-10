利用VUE实现打印功能，前端中级工程师面试题
https://juejin.cn/post/7420717423518023715?searchId=20241005110600610744D3F2C58197E189
1、 打印指定区域
npm install vue-print-nb --save

//安装好以后在main.js文件中引入

import Print from 'vue-print-nb'

Vue.use(Print); //注册


前端线上部署，如何通知用户有新版本_前端部署通知，字节跳动前端岗经典面试真题
https://juejin.cn/post/7420717683036602402?searchId=20241005110600610744D3F2C58197E189
# 本地项目安装
npm install version-polling --save

// 在应用入口文件中使用: 如 main.js, app.jsx
import { createVersionPolling } from "version-polling";

createVersionPolling({
  appETagKey: "__APP_ETAG__",
  pollingInterval: 5 * 1000, // 单位为毫秒
  silent: process.env.NODE_ENV === "development", // 开发环境下不检测
  onUpdate: (self) => {
    // 当检测到有新版本时，执行的回调函数，可以在这里提示用户刷新页面
    const result = confirm("页面有更新，点击确定刷新页面！");
    if (result) {
      self.onRefresh();
    } else {
      self.onCancel();
    }
    // 强制更新可以用alert
    // alert('有新版本，请刷新页面');
  },
});


package.lock.json的作用
比如在package.json中，vue的版本是^2.6.14
^的意思是，加入过几天vue在大版本2下更新了小版本2.6.15，那么当npm install的时候vue会自动升级为2.16.5
引起的问题：
比如有A\B两个开发者

程序员A:接手项目时vue版本时2.16.4，并一直使用这个版本
程序员B：一个月后加入项目，这时vue已经升级到了2.9.14，npm install的时候会自动升级

这时候会导致两个开发时vue版本不一致，从而导致合作中产生一些问题和错误
package.lock.json解决该问题
比如现在有A、B两个开发者
A:接手项目时vue的版本时2.6.14，此版本被所在了package-lock.json中
B:一个月后加入该项目，这时vue已经升级到了2.9.14，npm install的时候，按理说会自动升级，但是由于package-lock.json中锁着2.6.14这个版本，所以阻止了自动升级，保证版本还是2.6.14

作者：用户33914928060
链接：https://juejin.cn/post/7420712925348102184
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


web前端场景题面试（一）
https://juejin.cn/post/7426258025482911807?searchId=20241027084107D6913D4BDCE4844997AE
如何在前端面试中回答有关性能优化🚀的问题？
https://juejin.cn/post/7428216743166902284?searchId=20241027084107D6913D4BDCE4844997AE
web前端场景题面试（三）
https://juejin.cn/post/7426258025482928191?searchId=20241027084107D6913D4BDCE4844997AE
一、webpack打包时hash码如何生成的？
二、webpack项目中通过script标签引入资源，在项目中如何处理？
三、为什么Vite速度比Webpack快？
四、vite和webpack在热更新上有什么区别？
五、webpack有哪些优化项目的手段？
六、webpack如何打包运行时chunk，在项目工程中如何价加载这个运行时chunk？
七、在项目中，使用过哪些webpack plugin，使用过哪些webpack loader，有什么作用？
八、如何从0到1搭建前端基建？
九、你在开发过程中，使用过哪些TS的特性或者能力？
十、js的加载会阻塞浏览器渲染吗？
十一、浏览器对队头阻塞有什么优化？
十二、应用上线后，怎么通知用户刷新当前页面？
十三、什么是强缓存？什么是协商缓存？如何清理缓存？
十四、HTTP是一个无状态的协议，那么web应用要怎么保持用户的登录态呢？
十五、如何检测网页空闲状态？
十六、列表分页，快速翻页下的竞态问题
十七、如何禁止别人调试自己的前端页面代码？
十八、web系统里如何对图片进行优化？
十九、常见的登录鉴权方式有哪些？
二十、需要在跨域请求中携带另一个域名下的cookie该如何操作？‌
二十一、封装一个请求超时，发起重试的axios代码
二十二、前端如何设置请求超时timeout？
二十三、后端一次性返回树形结构数据，数据量非常大，前端应该如何处理？
二十四、你认为组件封装的基本准则是什么？
二十五、页面加载速度提升应该从哪些方向思考？‌
二十六、前端日志埋点SDK设计思路
二十七、token进行身份验证了解多少？
二十八、在前端应用中如何进行权限设计？
二十九、低代码平台一半渲染是如何设计的？
三十、indexedDB存储空间大小是如何约束的？
三十一、浏览器的存储有哪些？
三十二、为什么市面上做表格渲染可视化技术大多数都是canvas而不是svg？
三十三、将静态资源缓存在本地的方式有哪些？
三十四、SPA首屏加载速度慢如何优化？
三十五、axios是如何区分node环境还是浏览器环境的？
三十六、如何拦截web应用的请求？
三十七、前端有哪些跨页面通信方式？
三十八、vue如何实现转场动画？
三十九、从vue层面上，能做的性能优化有哪些？
四十、git仓库迁移应该怎么操作？
四十一、什么是微前端？iframe有什么优缺点？

前端面试题之LeetCode篇
https://juejin.cn/post/7423706686172430370?searchId=20241027084107D6913D4BDCE4844997AE


令人眼前一亮的Vue实战技巧
https://github.com/ljianshu/Blog/issues/71


Vue 开发需掌握这 36 个技巧
https://cloud.tencent.com/developer/article/1658477

vue.js 使用技巧总结
https://juejin.cn/post/6850037271803428872


一个 1 分钟就学会的 vue 小技巧（真的一看就会）
https://www.51cto.com/article/639784.html

<template> 
  <div class="box" :style="styleVar"> 
  </div> 
</template> 
<script> 
export default { 
  props: { 
    height: { 
      type: Number, 
      default: 54, 
    }, 
  }, 
  computed: { 
    styleVar() { 
      return { 
        '--box-height': this.height + 'px' 
      } 
    } 
  }, 
} 
</script> 
<style scoped> 
.box { 
  height: var(--box-height); 
} 
</style> 


Vue 开发必须知道的36个技巧(小结)
vue开发心得和技巧分享
Vue组件开发技巧总结
实用的Vue开发技巧
分享12个Vue开发中的性能优化小技巧(实用!)
分享7个成为更好的Vue开发者的技巧
7个很棒的Vue开发技巧分享
https://www.jb51.net/article/280328.htm


25个 Vue 技巧，开发了5年了，才知道还能这么用
https://cloud.tencent.com/developer/article/1854137


5种处理Vue异常的方法
https://blog.fundebug.com/2019/06/17/handling-errors-in-vuejs/