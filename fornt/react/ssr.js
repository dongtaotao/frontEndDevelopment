彻底理解服务端渲染原理 
https://juejin.cn/post/6844903881390964744   
 
这就需要进行同构了。所谓同构，通俗的讲，就是一套React代码在服务器上运行一遍，到达浏览器又运行一遍。服务端渲染完成页面结构，浏览器端渲染完成事件绑定。 

Next.js 是 React 服务端渲染应用框架，用于构建 SEO 友好的 SPA 应用


React SSR 服务端渲染原理解析与同构实践
https://juejin.cn/book/6844733810941100045/section/6844733810987237389

我们都知道元素事件是基于浏览器执行的，只有在浏览器端执行了相应的 js 代码才能绑定事件。
在上一节我们实现的这是一个 ssr 直出效果，也就是说只是一个静态页面。
所以我们需要让代码在浏览器端也执行一次，组件在浏览器端挂载完后react会自动完成事件绑定。

浏览器也执行一次代码，组件不会重复渲染吗？
浏览器接管页面后，react-dom在渲染组件前会先和页面中的节点做对比，只有对比失败的时候才会采用客户端的内容进行渲染,且react会尽量多的复用已有的节点。


初识同构
基于同构，浏览器和服务端可以运行同一份代码，服务端直出组件后，浏览器接管页面，然后剩下的工作由浏览器来完成。