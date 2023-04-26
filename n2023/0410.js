
最新前端学习资料整理
https://juejin.cn/post/7064582610290212900#heading-14
包含了Vue、React、Electron、服务端渲染、微前端、前端性能优化、前端工程化、前端面试、Js、CSS、Nodejs、网络安全、
Http通信、浏览器原理、前端部署运维、Flutter、Web 3D和微信小程序等方面的知识

巨石项目改造探究
https://juejin.cn/post/7221408294236930109?

https://juejin.cn/post/7221368910139342907?
在线excel编辑功能

word 预览、转 pdf 下载以及集成到编辑器
https://juejin.cn/post/7221400426818240568?

Vue多环境配置方案的实现
https://mp.weixin.qq.com/s/Day5yiokazmKJyDZRvU8YQ

批量任务导致页面卡死？试试requestIdleCallback对任务进行拆分
https://juejin.cn/post/7221793823705268284?

前端JS做Excel导出会有性能问题，解决方案有以下几种：
生成表格交给后端去做
将生成Excel函数的执行过程交给Web Worker去做
利用requestAnimationFrame/requestIdleCallback对生成Excel的函数进行分片执行
链接：https://juejin.cn/post/7221151497974464569

CSS Module，主要是用来做变量隔离，防止组件的变量污染全局变量

前端面试必备：ChatGPT帮你梳理常考知识点
vite
vite是一个基于原生ES模块的前端开发工具，它有以下几个特点和优势：

vite使用浏览器原生支持的模块化加载方式，实现了无需打包的开发服务器，启动速度快，热更新速度快。
vite使用esbuild将TypeScript转译为JavaScript，速度比tsc快20-30倍。
vite使用Rollup打包代码，输出高度优化的静态资源，支持tree-shaking和code-splitting。
vite提供了丰富的内建功能，如CSS预处理器支持，静态资源处理，环境变量注入等。
vite提供了插件API和JavaScript API，带来了高度的可扩展性，并有完整的类型支持。

vite的原理和工作流程

vite在启动项目时，会启动一个基于koa的dev server，拦截浏览器对ES Module的请求。
vite将项目中的模块分为依赖和源码，依赖是指node_modules中的第三方库，源码是指项目自身的代码。
vite使用esbuild预构建依赖，将它们转换为ES Module格式，并缓存起来。
vite在处理html文件时，会注入一个客户端文件，用于建立websocket连接和实现HMR。
vite在浏览器请求源码文件时，会对它们进行转译和重写，例如处理CSS预处理器，重写模块路径等。
vite在监听到文件变化时，会通知客户端更新相应的模块，并利用浏览器缓存策略提升速度。
vite在构建生产版本时，会使用Rollup打包代码，并输出高度优化的静态资源。

vite如何利用ES Module实现无需打包的开发服务器

vite直接把转换后的ES Module代码扔给支持ES Module的浏览器，让浏览器自己去加载。
vite利用浏览器对ES Module的支持，实现真正的按需加载。

vite如何使用esbuild和Rollup进行转译和打包

vite使用esbuild将TypeScript转译为JavaScript，将CommonJS或UMD转换为ES Module。
vite使用Rollup将ES Module打包为一个或多个bundle文件，并进行tree-shaking和code-splitting等优化。


前端架构
前端架构是指前端开发中的一种软件架构模式，它涉及到如何组织、设计、构建和维护前端应用程序。前端架构的目标是提供高效、可用、可扩展、可维护和可测试的前端应用程序，同时满足业务需求和用户体验。
前端架构的主要内容包括：

前端技术栈的选择：根据项目的特点和需求，选择合适的前端技术，如编程语言、框架、库、工具等。
前端代码结构的设计：根据项目的规模和复杂度，设计合理的前端代码结构，如目录结构、模块划分、组件化等。
前端开发流程的规范：制定统一的前端开发流程，如代码风格、代码质量、代码审查、测试、部署等。
前端性能优化的策略：采用有效的前端性能优化策略，如减少HTTP请求、压缩文件、缓存资源、代码分割等。
前端安全防护的措施：采用必要的前端安全防护措施，如防止跨站脚本攻击（XSS）、跨站请求伪造（CSRF）、点击劫持等。

前端工程化
前端工程化是指将软件工程的原则和方法应用于前端开发的过程，以提高前端开发的效率、质量和可维护性。前端工程化的目标是解决前端开发中的一些常见问题，如代码复用、模块化、性能优化、自动化测试、持续集成等。
前端工程化的主要内容包括：

前端开发环境的搭建：使用一些工具和框架来搭建一个便捷、高效、稳定的前端开发环境，如webpack, babel, eslint等。
前端代码规范的制定：制定一些统一的前端代码规范，如命名规范、缩进规范、注释规范等，以提高代码的可读性和一致性。
前端组件库的构建：构建一些通用的、可复用的、可扩展的前端组件库，以提高代码的复用率和开发效率。
前端性能优化的实施：实施一些前端性能优化的技巧，如按需加载、懒加载、预加载、图片压缩等，以提高页面的加载速度和用户体验。
前端自动化测试的编写：编写一些前端自动化测试的脚本，如单元测试、集成测试、端到端测试等，以提高代码的质量和稳定性。
前端持续集成的部署：部署一些前端持续集成的工具和流程，如git, jenkins, docker等，以提高代码的交付速度和可靠性。

链接：https://juejin.cn/post/7221537562895188026

前端如何做到在构建的时候动态替换项目中的目标代码(类似字符串，资源路径，统一前缀)？ 有哪些方式？ gpt
正在为您搜索：前端构建动态替换目标代码、字符串替换、资源路径替换、统一前缀替换
前端在构建时可以使用以下几种方式动态替换项目中的目标代码：

使用打包工具的插件或Loader。比如，Webpack中有很多插件或Loader支持动态替换项目中的目标代码。常见的插件有CopyWebpackPlugin、
HtmlWebpackPlugin和CleanWebpackPlugin等，它们可以帮助我们在构建时，自动将指定目录下的文件复制到输出目录，并且在生成的HTML文件中替换对
应文件的引用路径。而对于一些资源文件，我们可以使用file-loader和url-loader等Loader进行统一的前缀处理。

使用预处理工具。比如，使用Gulp和Grunt等工具，我们可以使用gulp-replace和grunt-text-replace等插件来实现目标代码的动态替换。这些插件可以通
过配置文件指定需要替换的文件路径和目标代码，然后在构建时进行替换操作。

使用脚本。当然，我们也可以通过编写脚本来实现目标代码的动态替换。比如，在Node.js环境中，我们可以使用fs模块读取文件内容，并使用正则表达式或字符串
方法替换目标代码，最后将修改后的文件保存即可。

如何使用web页面加载超大图片（图片200M+ ）？GPT
正在为您搜索：web页面加载超大图片、图片、200M+
对于几百M的超大图片，直接在前端页面加载是不可行的。常用的解决方案是采用图像服务器技术。将大型影像数据压缩、分割，
并存储在图像服务器上，前端页面仅需请求需要的部分再通过网页展示。这样可以有效地减少浏览器负担和页面加载时间。

具体的实现方式有很多种，其中比较流行的是采用开源的图像服务器软件OpenSeadragon。它可以支持各种类型的高分辨率图像，
包括超大的医疗影像图片。开发者可以使用JavaScript API调用OpenSeadragon来实现对图片的加载和切换。

另外，对于超大图片这类资源文件，优化图片大小也是非常重要的。将图片压缩成合适的大小可以有效减少加载时间和网络带宽的消耗。


随着浏览器Tab的不断增加最终会导致内存消耗完，我们可以从哪些方面去解决优化这一问题？ gpt

在JS中如何去识别已经不需要使用的数据，并把它清除掉？ gpt
正在为您搜索：JS、识别、不需要使用的数据、清除
在 JavaScript 中，可以使用垃圾回收机制来自动清理不需要使用的数据。具体来说，JavaScript 引擎会周期性地检查内存中的对象，将被标记为“无用”的对象进行垃圾回收，释放其占用的内存空间。
JavaScript 会采用基于引用计数的垃圾回收器来判断对象是否无用。当一个对象被引用时，它的引用计数器加1，当不再有任何引用指向该对象时，它的引用计数器减1。当引用计数器归零时，说明该对象已经无法访问，可以被垃圾回收。
除了引用计数垃圾回收器，JavaScript 还支持基于标记清除的垃圾回收机制。这种机制通过标记从根对象出发能够遍历到的所有对象，然后清除未被标记的对象。
除此之外，JavaScript 还提供了手动控制内存的方法：通过设置变量值为 null 来释放占用的内存空间。但是这种方式一般不需要主动去做，因为现代浏览器已经能够自动处理不需要使用的数据的清除工作。

在Vue项目中使用 GraphQL
https://juejin.cn/post/7221862036530561084?
在vue中如何使用GraphQL
https://juejin.cn/post/6844903985401315342

前端性能实践总结-图片过大+视频加载缓慢
https://juejin.cn/post/7221830072985976893?
npm i yx-tiny -D
正在为您搜索：yx-tiny使用 dpt
yx-tiny是一个图片压缩工具，支持自动化、SVGA压缩和识别已经压缩过的文件，可以帮助前端优化页面性能。以下是使用yx-tiny进行图片压缩的基本步骤：
安装yx-tiny：可以通过命令行运行 npm i -D yx-tiny 进行安装。
在 package.json 文件中添加如下配置：

json
"scripts": {
  "tiny": "yx-tiny"
}
运行命令 npx tiny，即可打开yx-tiny的压缩界面，在命令行交互界面选择需要压缩的图片。
根据提示，选择压缩方式（普通或者 SVGA 压缩），是否删除原文件等选项，并等待图片压缩完成。
使用压缩后的图片替换原来的图片，并执行相应的构建和部署操作。
总之，通过使用yx-tiny工具，可以轻松地对项目中的图片进行优化，提高页面加载速度和性能。


常见附件预览：图片、视频、音频、文本、pdf、office...
https://juejin.cn/post/7221813031814594597?

一文搞定前端html内容转图片、pdf和word等文件
https://juejin.cn/post/7220434734966571068

Vue使用html2canvas和jspdf生成pdf文件
https://blog.51cto.com/u_15697128/6193048

webpack 现在有两个plugin，plugin1可以派发事件让plugin2监听吗？
可以 gpt
经过搜索，我没有找到对于 webpack 现在是否有两个plugin，plugin1 可以派发事件让 plugin2 监听的明确回答。但是从开发中常见的做法来看，
像 Webpack 这样的模块打包工具，支持了很多插件（Plugin）来扩展其功能，这些插件之间可以通过各种方式相互协作和通信，包括发布和订阅事件等机制。

因此，如果 plugin1 和 plugin2 都实现了事件发布和订阅机制，那么它们之间就可以相互通信。在 plugin1 中，可以通过事件发布机制向外界发布事
件，而在 plugin2 中则可以通过事件订阅机制监听这些事件并进行相应的处理。但是要注意，事件发布和订阅的具体实现可能因插件而异，需要根据具体的情况来看待。


webpack的插件并行还是串行？webpack工作流程及原理讲讲？plugin1可以派发事件让plugin2监听吗？ gpt

webpack的插件默认是串行执行，按照数组的顺序执行。但是可以通过parallel选项配置为并行执行，同时webpack还提供了较为灵活的插件机制使得插件之间可以协调处理不同的任务。
[1]
webpack的工作流程大概如下：首先合并用户的配置文件，生成完整的webpack配置，然后创建compiler对象，用于编译代码以及管理各种资源。在接下来的构建过程中，
webpack根据配置文件中的entry配置找到应用程序依赖的所有模块，进行加载、解析和转换，并生成最终的构建产物（通常是一个或多个JavaScript文件）。在这个过程中
，webpack会调用各个插件的apply方法，根据插件要求的钩子（hooks）来执行相应的操作。
[2]
如果plugin1和plugin2都实现了事件发布和订阅机制，并且它们之间已经建立好了事件通信的渠道，那么plugin1可以通过事件派发机制向外界发布事件，而plugin2则可以通过事件订阅机制来监
听这些事件并进行相应的处理。具体实现方式可能因插件而异，需要具体分析。


vue中如何预览PDF文件，隐藏工具栏，给PDF文件加水印
https://juejin.cn/post/7222854201201328188?

前端设计模式大全（汇总详细版） --------- 
https://juejin.cn/post/7223185420157993017?

不用刷新！用户无感升级，解决前端部署最后的问题
https://juejin.cn/post/7223196531143131194?

rrweb 实现原理介绍
rrweb 全称 'record and replay the web'，是当下很流行的一个录制屏幕的开源库。
https://juejin.cn/post/7223200148862746684?

腾讯一线研发经验分享｜令我工作质效并增的5大方法论
1 量化
1.1 技术指标数据
1.2 业务指标数据
2 对比
2.1 同比环比
2.2 前后对比
3 记录&流程
3.1 记录
3.2 流程
4 规范&统一
4.1 规范
4.2 统一
5 自动化
5.1 持续集成和持续部署（CI/CD）
5.2 自动化测试
5.3 脚本和工具
5.4 监控与告警
6 结语

作者：腾讯云开发者
链接：https://juejin.cn/post/7223195139236757559
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


分享SEO优化的8个技巧
https://juejin.cn/post/7199800513742389305


关于大屏适配我所知道的 https://juejin.cn/post/7210615486710726715
目录
transform：scale (value)
媒体查询 @media
vh/vw

nihao   q11

聊一聊前端的大文件上传思路
https://juejin.cn/post/7223938976158498872?utm_source=gold_browser_extension


执行了npm run xxx到底做了什么事情
https://juejin.cn/post/7223993420401557561?utm_source=gold_browser_extension


解决低版本系统白屏问题     vue项目
https://juejin.cn/post/7224304954596737079?utm_source=gold_browser_extension

webpack 可以实现按需加载，减小我们首屏需要加载的代码体积；
@babel/plugin-syntax-dynamic-import 插件，允许使用动态导入语法来动态加载代码
module.exports = {
  // ...
  module: {
    rules: [
      // ...
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import']
          }
        }
      }
    ]
  }
};

// 动态加载一个模块
import('./LazyComponent.vue').then(module => {
   this.showLazyComponent = true;
});

https://juejin.cn/post/7224060318652039225?utm_source=gold_browser_extension


监听浏览器切屏功能实现
https://juejin.cn/post/7135355487955976223
visibilitychange
第二种采用的是监听 blur 和 focus 这两个事件去相互配合实现的。
window.addEventListener('blur', leave);
window.addEventListener('focus', enter);

Canvas转图片下载功能实现
https://juejin.cn/post/7134904246314467358

关于前端实现上传文件这个功能，我只能说so easy！
https://juejin.cn/post/7224402365452238906?utm_source=gold_browser_extension

大文件上传的vue3+koa2实现
https://juejin.cn/post/7224764099187474490?utm_source=gold_browser_extension
