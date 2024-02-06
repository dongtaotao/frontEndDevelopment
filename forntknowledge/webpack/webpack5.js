「历时8个月」10万字前端知识体系总结（工程化篇）🔥
https://juejin.cn/post/7146976516692410376


mini 版的 webpack 打包流程
1）从入口文件开始解析
2）查找入口文件引入了哪些 js 文件，找到依赖关系
3）递归遍历引入的其他 js，生成最终的依赖关系图谱
4）同时将 ES6 语法转化成 ES5
5）最终生成一个可以在浏览器加载执行的 js 文件

作者：海阔_天空
链接：https://juejin.cn/post/7146976516692410376
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


Plugin
作用：扩展 webpack 功能

工作原理

webpack 通过内部的事件流机制保证了插件的有序性，底层是利用发布订阅模式，webpack 在运行过程中会广播事件，插件只需要监听它所关心的事件，在特定的时机对资源做处理


// 自定义一个名为MyPlugin插件，该插件在打包完成后，在控制台输出"打包已完成"
class MyPlugin {
  // 原型上需要定义apply 的方法
  apply(compiler) {
    // 通过compiler获取webpack内部的钩子
    compiler.hooks.done.tap('My Plugin', (compilation, cb) => {
      console.log('打包已完成');
      // 分为同步和异步的钩子，异步钩子必须执行对应的回调
      cb();
    });
  }
}
module.exports = MyPlugin;


Loader
Loader 作用

webpack 只能直接处理 js 格式的资源，任何非 js 文件都必须被对应的loader处理转换为 js 代码

手写一个 loader
一个简单的style-loader
// 作用：将css内容，通过style标签插入到页面中
// source为要处理的css源文件
function loader(source) {
  let style = `
    let style = document.createElement('style');
    style.setAttribute("type", "text/css");
    style.innerHTML = ${source};
    document.head.appendChild(style)`;
  return style;
}
module.exports = loader; 



