怎样实现 webpack loader ********************************** 
https://github.com/Codingxiaoshi/webpack-code/blob/main/my-loader/webpack.config.js

https://www.bilibili.com/video/BV1FL411n7AH?spm_id_from=333.337.search-card.all.click

https://www.webpackjs.com/contribute/writing-a-loader/#%E8%AE%BE%E7%BD%AE  官网

https://www.webpackjs.com/contribute/writing-a-plugin/#%E5%88%9B%E5%BB%BA%E6%8F%92%E4%BB%B6
怎样实现一个 webpack plugin *************************************
https://www.bilibili.com/video/BV1Xh411z7Y7?spm_id_from=333.999.0.0 

实现 loader | 手摸手带你实现打包器 仅需 80 行代码理解 webpack 的核心
https://www.bilibili.com/video/BV1d5411d7kH/?spm_id_from=autoNext

Webpack 深入浅出之公司级分享总结
https://mp.weixin.qq.com/s/1FySzmVrNjS6wjgqALC96g

第10题：  https://fe.ecool.fun/topic/89eda79c-6cfb-4593-86d3-69d9ce9eb43d?orderBy=updateTime&order=desc&tagId=28
面试官：说说Loader和Plugin的区别？编写Loader，Plugin的思路？
实现plugin的模板如下：

class MyPlugin {
    // Webpack 会调用 MyPlugin 实例的 apply 方法给插件实例传入 compiler 对象
  apply (compiler) {
    // 找到合适的事件钩子，实现自己的插件功能
    compiler.hooks.emit.tap('MyPlugin', compilation => {
        // compilation: 当前打包构建流程的上下文
        console.log(compilation);
        
        // do something...
    })
  }
}  
