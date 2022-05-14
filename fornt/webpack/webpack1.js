「吐血整理」再来一打Webpack面试题
https://juejin.cn/post/6844904094281236487

【万字】透过分析 webpack 面试题，构建 webpack5.x 知识体系
https://juejin.cn/post/7023242274876162084#heading-22

手撸loader和plugin全解析
https://juejin.cn/post/6844903891180453901

利用webpack搭建脚手架一套完整流程
https://juejin.cn/post/6844903875774775303#heading-12

深入浅出 Webpack
http://webpack.wuhaolin.cn/

初始化参数：取配置文件和shell脚本参数并合并
开始编译：用上一步得到的参数初始化compiler对象，执行run方法开始编译
确定入口：根据配置中的entry，确定入口文件
编译模块：从入口文件出发，递归遍历找出所有依赖模块的文件
完成模块编译：使用loader转译所有模块，得到转译后的最终内容和依赖关系
输出资源：根据入口和模块依赖关系，组装成一个个chunk，加到输出列表
输出完成：根据配置中的output，确定输出路径和文件名，把文件内容写入输出目录（默认是dist）


2Webpack 的构建过程太花时间
Webpack 打包的结果体积太大
7.1 针对 Webpack 本身构建优化

1 优化 resolve.modules 配置  直接指定项目根目录
2 优化 resolve.extensions 配置
  在导入没带文件后缀的路径时，Webpack 会自动带上后缀去尝试询问文件是否存在，
  而 resolve.extensions 用于配置尝试后缀列表；默认为 extensions:['js', 'json’]。
  js、jsx、json。
3.配置别名

7.2 通过 Loader 和 Plugin 优化
7.2.1 babel-loader
  以 babel-loader 为例，可以通过 include 和 exclude 帮助我们避免 node_modules 这类庞大文件夹。
7.2.2 tree shaking
  通过 ES6 的 import/export 来检查未引用代码，以及 sideEffects 来标记无副作用代
  码，最后用 UglifyJSPlugin 来做 tree shaking，从而删除冗余代码。
7.2.3 可视化分析
  speed-measure-webpack-plugin：测量出在构建过程中，每一个 Loader 和 Plugin 的执行时长。
  webpack-bundle-analyzer：通过矩阵树图的方式将包内各个模块的大小和依赖关系呈现出来。
  webpack-chart
  webpack-analyse
7.2.4 缓存

  cache-loader
  参考链接：cache-loader

  在 babel-loader 开启 cache 后，将 loader 的编译结果写进硬盘缓存，
  再次构建如果文件没有发生变化则会直接拉取缓存。
  uglifyjs-webpack-plugin
  也可以解决缓存问题。

7.2.5 多进程
    Happypack 可以将任务分解成多个子进程去并发执行，大大提升打包效率。

7.2.6 抽离
  通过 DllPlugin 或者 Externals 进行静态依赖包的分离。
  由于 CommonsChunkPlugin 每次构建会重新构建一次 vendor，所以出于效率考虑，
  使用 DllPlugin 将第三方库单独打包到一个文件中，只有依赖自身发生版本变化时才会重新打包。

7.2.7 多进程代码压缩
  SplitChunksPlugin

7.2.9 打包资源压缩

  JS 压缩：UglifyJSPlugin
  HTML 压缩：HtmlWebpackPlugin
  提取公共资源：splitChunks.cacheGroups
  CSS 压缩：MiniCssExtractPlugin
  Gzip 压缩：不包括图片

7.2.10 按需加载
  通过 Code-Splitting 来做 React 的按需加载.
  Code_Splitting 核心是 require-ensure。

7.3 优化体验
  progress-bar-webpack-plugin：在终端底部，将会有一个构建的进度条，可以让你清晰的看见构建的执行进度。
  webpack-build-notifier：在构建完成时，能够像微信、Lark 这样的 APP 弹出消息的方式，提示构建已经完成。
  webpack-dashboard：对 Webpack 原始的构建输出不满意的话，也可以使用这样一款 Plugin 来优化你的输出界面。

作者：jsliang
链接：https://juejin.cn/post/6898475853581402120

webpack 配置设置
拆分配置和merge
启动本地服务

抽离压缩css文件

多入口
抽离css文件
抽离公共代码
懒加载
处理jsx
处理vue
module chunk bundle的区别
module - 各个源码文件 ，webpack 中一切皆模块
chunk - 多模块合并成的，
bundle： 最终的输出文件

webpack性能优化
优化打包构建速度—开发体验和效率
优化产出代码—产品性能

优化babel-loader (开启缓存，明确范围)
IgnorePlugin
noparse
happypack对进程打包
js单线程，开启多进程打包  提高构建速度（特别是多核CPU）

webpack如何配置热根
webpack-dev-server

DllPlugin 动态链接库插件

webpack性能优化-产出代码

* 体积更小
* 合理分包，不重复加载
* 速度更快，内存使用更少

1.小图片base64编码
2.bundle加hash
3.懒加载
4.提取公共代码
5.使用CDN加速
6.IngorePlugin
7.使用production
8.使用Scope Hosting

什么是tree-shaking

Es6module 和 commonjs区别
Es6module静态引入， 编译时映入
commonjs动态引入，执行时映入
只有es6module才可以静态分析，实现tree-shaking

scope Hosting
*代码体积更小
*创建函数作用域更少
*代码可读性更好

babel-polyfill是什么

https://juejin.cn/post/6844904094281236487
「吐血整理」再来一打Webpack面试题
Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。
因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类
型的资源进行转译的预处理工作。
Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能
，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适
的时机通过 Webpack 提供的 API 改变输出结果。

Webpack构建流程简单说一下
Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：

初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数
开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对 
  象的 run 方法开始执行编译
确定入口：根据配置中的 entry 找出所有的入口文件
编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的
  模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译
  后的最终内容以及它们之间的依赖关系
输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，
  再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会
输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统

在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运
  行结果。
简单说
初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler
编译：从 Entry 出发，针对每个 Module 串行调用对应的 Loader 去翻译文件的内容，再找到该 Module 依赖的 Module，递归地进行编译处理
输出：将编译后的 Module 组合成 Chunk，将 Chunk 转换成文件，输出到文件系统中

source map 是将编译、打包、压缩后的代码映射回源代码的过程。打包压缩后的代码不具备良好的可读性，想要调试源码就需要 soucre map。

//==============
说一下 Webpack 的热更新原理吧
Webpack 的热更新又称热替换（Hot Module Replacement），缩写为 HMR。
这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。
HMR的核心就是客户端从服务端拉去更新后的文件，准确的说是 chunk diff (chunk 需要更新的部分)，
实际上 WDS 与浏览器之间维护了一个 Websocket，当本地资源发生变化时，WDS 会向浏览器推送更新，
并带上构建时的 hash，让客户端与上一次资源进行对比。客户端对比出差异后会向 
WDS 发起 Ajax 请求来获取更改内容(文件列表、hash)，这样客户端就可以再借助这些信息继续向
 WDS 发起 jsonp 请求获取该chunk的增量更新。
后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由 HotModulePlugin 
来完成，提供了相关 API 以供开发者针对自身场景进行处理，像react-hot-loader 和 vue-loader 
都是借助这些 API 实现 HMR。
https://juejin.cn/post/6844904094281236487

文件指纹是什么？怎么用？
文件指纹是打包后输出的文件名的后缀。

Hash：和整个项目的构建相关，只要项目文件有修改，整个项目构建的 hash 值就会更改
Chunkhash：和 Webpack 打包的 chunk 有关，不同的 entry 会生出不同的 chunkhash
Contenthash：根据文件内容来定义 hash，文件内容不变，则 contenthash 不变

如何优化 Webpack 的构建速度？
使用高版本的 Webpack 和 Node.js
多进程/多实例构建：HappyPack(不维护了)、thread-loader
压缩代码
图片压缩
缩小打包作用域：
  exclude/include (确定 loader 规则范围)
  resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)
  resolve.mainFields 只采用 main 字段作为入口文件描述字段 
    (减少搜索步骤，需要考虑到所有运行时依赖的第三方模块的入口文件描述字段)
  resolve.extensions 尽可能减少后缀尝试的可能性noParse 对完全不需要解析的库进行忽略 
    (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含
       import、require、define 等模块化语句)IgnorePlugin (完全排除模块)
  合理使用alias
提取页面公共资源：
充分利用缓存提升二次构建速度：
  babel-loader 开启缓存
  terser-webpack-plugin 开启缓存
  使用 cache-loader 或者 hard-source-webpack-plugin
Tree shaking
Scope hoisting

2. Loader
由于 Webpack 是基于 Node，因此 Webpack 其实是只能识别 js 模块，比如 css / html / 图片等类型的文件并无法加载，因此就需要一个对 不同格式文件转换器。
其实 Loader 做的事，也并不难理解: 对 Webpack 传入的字符串进行按需修改。例如一个最简单的 Loader:
// html-loader/index.js
module.exports = function(htmlSource) {
	// 返回处理后的代码字符串
	// 删除 html 文件中的所有注释
	return htmlSource.replace(/<!--[\w\W]*?-->/g, '')
}
当然，实际的 Loader 不会这么简单，通常是需要将代码进行分析，构建 AST (抽象语法树)， 遍历进行定向的修改后，再重新生成新的代码字符串。如我们常用的
 Babel-loader 会执行以下步骤:

babylon 将 ES6/ES7 代码解析成 AST
babel-traverse 对 AST 进行遍历转译，得到新的 AST
新 AST 通过 babel-generator 转换成 ES5

常用 Loader:

file-loader: 加载文件资源，如 字体 / 图片 等，具有移动/复制/命名等功能；
url-loader: 通常用于加载图片，可以将小图片直接转换为 Date Url，减少请求；
babel-loader: 加载 js / jsx 文件， 将 ES6 / ES7 代码转换成 ES5，抹平兼容性问题；
ts-loader: 加载 ts / tsx 文件，编译 TypeScript；
style-loader: 将 css 代码以<style>标签的形式插入到 html 中；
css-loader: 分析@import和url()，引用 css 文件与对应的资源；
postcss-loader: 用于 css 的兼容性处理，具有众多功能，例如 添加前缀，单位转换 等；
less-loader / sass-loader: css预处理器，在 css 中新增了许多语法，提高了开发效率；

编写原则:
单一原则: 每个 Loader 只做一件事；
链式调用: Webpack 会按顺序链式调用每个 Loader；
统一原则: 遵循 Webpack 制定的设计规则和结构，输入与输出均为字符串，各个 Loader 完全独立，即插即用；
3. Plugin
插件系统是 Webpack 成功的一个关键性因素。在编译的整个生命周期中，Webpack 会触发许多事件钩子
，Plugin 可以监听这些事件，根据需求在相应的时间点对打包内容进行定向的修改。
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
链接：https://juejin.cn/post/6844903830979608584

4. 编译优化
代码优化:
无用代码消除 摇树优化 (Tree-shaking)，
code-spliting: 代码分割 技术，将代码分割成多份进行 懒加载 或 异步加载，避免打包成一份后导致体积过大，影响页面的首屏加载；
scope hoisting: 作用域提升，将分散的模块划分到同一个作用域中，避免了代码的重复引入，有效减少打包后的代码体积和运行时的内存损耗；

编译性能优化:
升级至 最新 版本的 webpack，能有效提升编译性能；
使用 dev-server / 模块热替换 (HMR) 提升开发体验；
  监听文件变动 忽略 node_modules 目录能有效提高监听时的编译效率；
缩小编译范围:
modules: 指定模块路径，减少递归搜索；
mainFields: 指定入口文件描述字段，减少搜索；
noParse: 避免对非模块化文件的加载；
includes/exclude: 指定搜索范围/排除不必要的搜索范围；
alias: 缓存目录，避免重复寻址；

babel-loader:

忽略node_moudles，避免编译第三方库中已经被编译过的代码；
使用cacheDirectory，可以缓存编译结果，避免多次重复编译；

多进程并发:
webpack-parallel-uglify-plugin: 可多进程并发压缩 js 文件，提高压缩速度；
HappyPack: 多进程并发文件的 Loader 解析；

第三方库模块缓存:
DLLPlugin 和 DLLReferencePlugin 可以提前进行打包并缓存，避免每次都重新编译；
使用分析:

Webpack Analyse / webpack-bundle-analyzer 对打包后的文件进行分析，寻找可优化的地方；
配置profile：true，对各个编译阶段耗时进行监控，寻找耗时最多的地方；

source-map:

开发: cheap-module-eval-source-map；
生产: hidden-source-map；
链接：https://juejin.cn/post/6844903830979608584

webpack的插件并行还是串行
webpack的构建流程中，我们有的插件是需要同步的，有的插件是需要异步串行的，
有的插件是需要异步并行的https://juejin.cn/post/6858505844397768718
在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过
Webpack 提供的 API 改变输出结果。

webpack Plugin 和 Loader 的区别

Loader：
用于对模块源码的转换，loader 描述了 webpack 如何处理非 javascript 模块，
并且在 buld 中引入这些依赖。loader 可以将文件从不同的语言（如 TypeScript）
转换为 JavaScript，或者将内联图像转换为 data URL。比如说：CSS-Loader，Style-Loader 等。

Plugin
目的在于解决 loader 无法实现的其他事,它直接作用于 webpack，扩展了它的功能。
在 webpack 运行的生命周期中会广播出许多事件，plugin 可以监听这些事件，
在合适的时机通过 webpack 提供的 API 改变输出结果。插件的范围包括，从打包优化和压缩，
一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。
链接：https://juejin.cn/post/7004638318843412493

Webpack 的构建过程太花时间
Webpack 打包的结果体积太大  


