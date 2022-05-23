https://blog.poetries.top/FE-Interview-Questions/excellent-docs/
9-%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E6%A8%A1%E5%9D%97.html#_5-webpack%E7%BC%96%E8%AF%91%E4%BC%98%E5%8C%96
//============================================================================
初始化参数：从配置文件和 Shell 语句中读取并合并参数，得出最终的配置参数。
开始编译：从上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译。
确定入口：根据配置中的 entry 找出所有的入口文件。
编译模块：从入口文件出发，调用所有配置的 loader 对模块进行翻译，再找出该模块依赖的模块，这个步骤是递归执行的，
  直至所有入口依赖的模块文件都经过本步骤的处理。
完成模块编译：经过第 4 步使用 loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。
输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 chunk，再把每个 chunk 转换成一个单独的文件加入到输出列表，这一步是可以修
  改输出内容的最后机会。
输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

//================================================================
webpack热更新原理
HMR 即模块热替换（hot module replacement）的简称，它可以在应用运行的时候，不需要刷新页面，就可以直接替换、增删模块。
当修改了一个或多个文件；
文件系统接收更改并通知 webpack；
webpack 重新编译构建一个或多个模块，并通知 HMR 服务器进行更新；
HMR Server 使用 webSocket 通知 HMR runtime 需要更新，HMR 运行时通过 HTTP 请求更新 jsonp
HMR 运行时替换更新中的模块，如果确定这些模块无法更新，则触发整个页面刷新

//================================================================
webpack Loader
由于 Webpack 是基于 Node，因此 Webpack 其实是只能识别 js 模块，比如 css / html / 图片等类型的文件并无法加载，因此就需要一个对
 不同格式文件转换器。其实 Loader 做的事，也并不难理解: 对 Webpack 传入的字符串进行按需修改。例如一个最简单的 Loader:
// html-loader/index.js
module.exports = function(htmlSource) {
	// 返回处理后的代码字符串
	// 删除 html 文件中的所有注释
	return htmlSource.replace(/<!--[\w\W]*?-->/g, '')
}
当然，实际的 Loader 不会这么简单，通常是需要将代码进行分析，构建 AST (抽象语法树)， 遍历进行定向的修改后，再重新生成新的代码字符串。
如我们常用的 Babel-loader 会执行以下步骤:

Loader 特性:
链式传递，按照配置时相反的顺序链式执行；
基于 Node 环境，拥有 较高权限，比如文件的增删查改；
可同步也可异步；

编写原则:
单一原则: 每个 Loader 只做一件事；
链式调用: Webpack 会按顺序链式调用每个 Loader；
统一原则: 遵循 Webpack制定的设计规则和结构，输入与输出均为字符串，各个 Loader 完全独立，即插即用；

webpack Plugin
插件系统是 Webpack 成功的一个关键性因素。在编译的整个生命周期中，Webpack 会触发许多事件钩子，Plugin 可以监听这些事件，根据需求在
相应的时间点对打包内容进行定向的修改。

一个最简单的 plugin 是这样的:
class Plugin{
  // 注册插件时，会调用 apply 方法
  // apply 方法接收 compiler 对象
  // 通过 compiler 上提供的 Api，可以对事件进行监听，执行相应的操作
  apply(compiler){
    // compilation 是监听每次编译循环
    // 每次文件变化，都会生成新的 compilation 对象并触发该事件
    compiler.plugin('compilation',function(compilation) {})
  }
}

注册插件:
// webpack.config.js
module.export = {
	plugins:[
		new Plugin(options),
	]
}

事件流机制:
Webpack 就像工厂中的一条产品流水线。原材料经过 Loader 与 Plugin 的一道道处理，最后输出结果。
通过链式调用，按顺序串起一个个 Loader；
通过事件流机制，让 Plugin 可以插入到整个生产过程中的每个步骤中； 

常用 Plugin:

UglifyJsPlugin: 压缩、混淆代码；
CommonsChunkPlugin: 代码分割；
ProvidePlugin: 自动加载模块；
html-webpack-plugin: 加载 html 文件，并引入 css / js 文件；
extract-text-webpack-plugin / mini-css-extract-plugin: 抽离样式，生成 css 文件； 
DefinePlugin: 定义全局变量；
optimize-css-assets-webpack-plugin: CSS 代码去重；
webpack-bundle-analyzer: 代码分析；
compression-webpack-plugin: 使用 gzip 压缩 js 和 css；
happypack: 使用多进程，加速代码构建；
EnvironmentPlugin: 定义环境变量；
调用插件 apply 函数传入 compiler 对象

通过 compiler 对象监听事件

webpack编译优化
1.删除不可能执行的代码；
   摇树优化 (Tree-shaking)原理: 由于是在编译时优化，因此最基本的前提就是语法的静态分析，ES6的模块机制 提供了这种可能性。
   不需要运行时，便可进行代码字面上的静态分析，确定相应的依赖关系。
2.code-spliting: 代码分割技术，将代码分割成多份进行 懒加载 或 异步加载，避免打包成一份后导致体积过大，影响页面的首屏加载；
Webpack 中使用 SplitChunksPlugin 进行拆分；
  按 页面 拆分: 不同页面打包成不同的文件；
  按 功能 拆分:
  将类似于播放器，计算库等大模块进行拆分后再懒加载引入；
  提取复用的业务代码，减少冗余代码；
  按 文件修改频率 拆分: 将第三方库等不常修改的代码单独打包，而且不改变其文件 hash 值，能最大化运用浏览器的缓存
3.scope hoisting: 作用域提升，将分散的模块划分到同一个作用域中，避免了代码的重复引入，有效减少打包后的代码体积和运行时的内存损耗；

webpack如果使用了hash命名，那是每次都会重写生成hash吗
有三种情况：
如果是hash的话，是和整个项目有关的，有一处文件发生更改则所有文件的hash值都会发生改变且它们共用一个hash值；
如果是chunkhash的话，只和entry的每个入口文件有关，也就是同一个chunk下的文件有所改动该chunk下的文件的hash值就会发生改变
如果是contenthash的话，和每个生成的文件有关，只有当要构建的文件内容发生改变时才会给该文件生成新的hash值，并不会影响其它文件。

抽象语法树（Abstract Syntax Tree），是将代码逐字母解析成 树状对象 的形式。这是语言之间的转换、代码语法检查、代码风格检查、
代码格式化、代码高亮、代码错误提示、代码自动补全等等的基础

对tree-shaking的了解
作用：
它表示在打包的时候会去除一些无用的代码
原理：
ES6的模块引入是静态分析的，所以在编译时能正确判断到底加载了哪些模块
分析程序流，判断哪些变量未被使用、引用，进而删除此代码

35 -Webpack 性能优化
https://juejin.cn/post/6903295387302526990

jsliang 求职系列 - 36 - 前端工程化系列总结
https://juejin.cn/post/6903663850051076110

为什么 Vite 启动这么快
Webpack 会先打包，然后启动开发服务器，请求服务器时直接给予打包结果。
而 Vite 是直接启动开发服务器，请求哪个模块再对该模块进行实时编译。
Vite 将开发环境下的模块文件，就作为浏览器要执行的文件，而不是像 Webpack 那样进行打包合并。
由于 Vite 在启动的时候不需要打包，也就意味着不需要分析模块的依赖、不需要编译。因此启动速度非常快。当浏览器请求某个模块时，
再根据需要对模块内容进行编译。
链接：https://juejin.cn/post/6991724298197008421

手写webpack核心原理，再也不怕面试官问我webpack原理
https://juejin.cn/post/6854573217336541192
核心打包原理
1.1 打包的主要流程如下
需要读到入口文件里面的内容。
分析入口文件，递归的去读取模块所依赖的文件内容，生成AST语法树。
根据AST语法树，生成浏览器能够运行的代码

webpack热更新原理
webpack的热更新又称热替换简称HMR。这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。
HMR 核心是：客户端从服务端拉取更新后的文件，准确的说是chunk diff（比较出需要更新的部分）。实际上，
WDS（webpack-dev-server）与浏览器之间维护了一个 websocket，当本地资源发生变化时，WDS向浏览器推送更新
，并带上构建时的hash，让客户端与上一次资源进行对比。客户端比对出差异好会向WDS发起Ajax请求来获取更改内容，这样客户
端就可以再次借助这些信息继续向WDS发起jsonp请求，获取该chunk的增量更新。
链接：https://juejin.cn/post/7002362205396008991

热更新原理
HMR 的核心就是客户端从服务端拉去更新后的文件，准确的说是 chunk diff（chunk 需要更新的部分）。
实际上 webpack-dev-server（WDS）与浏览器之间维护了一个 Websocket，当本地资源发生变化时，WDS 会向浏览器推送更新，并带上构建时的 hash，
让客户端与上一次资源进行对比。
客户端对比出差异后会向 WDS 发起 Ajax 请求来获取更改内容（文件列表、hash），这样客户端就可以再借助这些信息继续向 WDS 发起 jsonp 请求获取
该 chunk 的增量更新。
后续的部分（拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？）由 HotModulePlugin 来完成，提供了相关 API 以供开发者针对自身场景进
行处理，像 react-hot-loader 和 vue-loader 都是借助这些 API 实现 HMR。
链接：https://juejin.cn/post/6901807555316547597


webpack优化解决项目体积大、打包时间长、刷新时间长问题！
https://cloud.tencent.com/developer/article/1643104 


带你深度解锁Webpack系列(基础篇)
https://juejin.cn/post/6844904079219490830
带你深度解锁Webpack系列(进阶篇)
https://juejin.cn/post/6844904084927938567
带你深度解锁Webpack系列(优化篇)
https://juejin.cn/post/6844904093463347208#heading-3



plugin1可以派发事件让plugin2监听吗？ webpack的插件并行还是串行？ 


公共代码抽离（代码分割） https://juejin.cn/post/6955517410761932807
依赖包单独抽离打包
单页面跟多页面都可使用，公共代码只需要下载一次就缓存起来了，避免了重复下载。
配置在optimization.splitChunks 中
// maxInitialSize: 5000000,  // 生成块的最小大小(以字节为单位)。5000K ~ 5M 初始化加载文件分块 <= 5M加载 chunks。
//webpack.config.js
module.exports = {
  optimization: {
      splitChunks: {//分割代码块
          cacheGroups: {
              // 单独抽离antv为一个打包文件
              antv: {
                  name: 'chunk-antv',
                  priority: 20,
                  test: /[\\/]node_modules[\\/]_?@antv(.*)/,
              },
              //第三方依赖
              vendor: {
                  priority: 1, //设置优先级，首先抽离第三方模块
                  name: 'vendor',
                  test: /node_modules/,
                  chunks: 'initial',
                  minSize: 0,
                  minChunks: 1 //最少引入了1次
              },
              //缓存组
              common: {
                  //公共模块
                  chunks: 'initial',
                  name: 'common',
                  minSize: 100, //大小超过100个字节
                  minChunks: 3 //最少引入了3次
              },
          }
      }
  }
}


{
  mode: "production",  // 只要在生产模式下， 代码就会自动压缩
  devtool:"cheap-module-source-map",
  entry: {
      main: './src/index.js'
  },  
  module: {},
  plugins: [],
  output: {},
  devServer: {}
}

process.env.NODE_ENV 
