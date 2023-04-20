react和vue如何选型
应用需要尽可能的小和快就用vue，vue渲染速度比react快
大型项目建议用react，因为vue模板的使用不容易发现错误、也不易拆分和测试
如果要适用于web和原生app的项目，就使用react native

Vue和React的异同点及如何选型
https://blog.csdn.net/weixin_38318244/article/details/123878061

相同点：
    数据驱动页面，提供响应式的试图组件
    都有virtual DOM,组件化的开发，通过props参数进行父子之间组件传递数据，都实现了webComponents规范
    数据流动单向，都支持服务器的渲染SSR
    都有支持native的方法，react有React native， vue有wexx
不同点：
    数据绑定：Vue实现了双向的数据绑定，react数据流动是单向的
    数据渲染：大规模的数据渲染，react更快
    使用场景：React配合Redux架构适合大规模多人协作复杂项目，Vue适合小快的项目
    开发风格：react推荐做法jsx + inline style把html和css都写在js了
 vue是采用webpack + vue-loader单文件组件格式，html, js, css同一个文件
原文链接：https://blog.csdn.net/chngfg/article/details/122060647 


Vue与React两个框架的区别对比
https://www.jianshu.com/p/4c812465ae97


前端技术管理面试题 不错
https://juejin.cn/post/7202583557751242809

前端如何快速掌握项目管理软技能===========
https://juejin.cn/post/7200790674622414906

前端项目负责人在项目初期需要做的工作===============
https://juejin.cn/post/7200790674622496826

拿走这份前端研发流程图！🔥🔥🔥============
https://juejin.cn/post/7039330160885104653

项目经历准备篇——如何准备阿里巴巴P6/P7前端面试
https://juejin.cn/post/6846687596555272200

前端团队如何做规范
https://juejin.cn/post/6963549273346539527

<template>
  <div v-my-directive></div>
</template>

<script>
export default {
  directives: {
    'my-directive': {
      // 指令选项
      bind: function (el, binding) {
        // 绑定时的处理逻辑
      },
      inserted: function (el, binding) {
        // 插入到 DOM 中时的处理逻辑
      },
      update: function (el, binding) {
        // 更新 DOM 中的节点时的处理逻辑
      },
      componentUpdated: function (el, binding) {
        // 更新组件 VNode 时的处理逻辑
      },
      unbind: function (el, binding) {
        // 解绑时的处理逻辑
      }
    }
  }
}
</script>


webpack 热更新原理是什么？
参考答案：
当开启热更新后，页面中会植入一段 websocket 脚本，同时，开发服务器也会和客户端建立 websocket 通信，当源码发生变动时，webpack 会进行以下处理：

webpack 重新打包
webpack-dev-server 检测到模块的变化，于是通过 webscoket 告知客户端变化已经发生
客户端收到消息后，通过 ajax 发送请求到开发服务器，以过去打包的 hash 值请求服务器的一个 json 文件
服务器告诉客户端哪些模块发生了变动，同时告诉客户端这次打包产生的新 hash 值
客户端再次用过去的 hash 值，以 JSONP 的方式请求变动的模块
服务器响应一个函数调用，用于更新模块的代码
此时，模块代码已经完成更新。客户端按照之前的监听配置，执行相应模块变动后的回调函数。

作者：我妻丿善逸
链接：https://juejin.cn/post/7206973995727765559
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

做好一个leader的基本原则
https://juejin.cn/post/7037080195559325703

小公司-小前端团队，如何一步步走向成熟？
https://juejin.cn/post/7221359467618517052?
现状
成熟的前端团队是什么样子？
前端规范
前端项目模版
前端脚手架
前端自动化构建部署（CI/CD）
前端全链路监控体系
前端物料库
怎么做？
确定前端技术栈
明确前端规范
前后端代码分离，打造独立的前端CI/CD
文档建设


前端技术专家面试都问什么？（大家感受一下）  🔥不错=============================================
https://juejin.cn/post/7089672110716485639
跳槽面试技巧记录
https://juejin.cn/post/7090733245590929421