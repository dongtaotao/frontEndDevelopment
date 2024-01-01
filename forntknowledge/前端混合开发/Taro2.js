简介：
Taro是一套遵循React语法规范的多端统一框架。使用Taro，我们可以只书写一套代码，通过taro的编译工具，
将源代码分别编译出可以在不同端运行的代码（H5，RN，小程序端）
大纲：
- 背景介绍
- Taro编译原理
- Taro开发实战

观众收益：
- 了解Taro编译成多端运行的原理
- 了解Taro开发的流程

Taro 主要借助编译原理的思想来实现多端统一开发

taro原理 https://blog.csdn.net/qq_41635167/article/details/121917144
taro1/2及taro3实现原理 https://www.csdn.net/tags/MtTakg1sODExMjQtYmxvZwO0O0OO0O0O.html

taro1/2 是编译类型的小程序跨平台框架。
taro是使用react进行小程序构建的。
React 与小程序之间最大的差异就是他们的模板了，在 React 中，是使用 JSX 来作为组件的模板的，而小程序则是使用字符串模板的。

1、模版转换
taro首先要实现的就是进行模版转换，把 JSX 语法转换成可以在小程序运行的字符串模板。
模版转换的实现：
模版转换主要是通过静态编译实现的，分为解析、转换、生成，三个阶段。
解析过程：babel 的核心编译器 babylon 是支持对 JSX 语法解析的，taro框架利用这个编译器，将JSX通过词法、语法分析，生成抽象语法树。
   babel 的核心编译器 babylon 是支持对 JSX 语法的解析的，我们可以直接利用它来帮我们构造 AST，
   而我们需要专注的核心就是如何对 AST 进行转换操作，得出我们需要的新 AST，再将新 AST 进行递归遍历，生成小程序的模板。
   生成过程：将新 AST 进行递归遍历，生成小程序的模板。
2、逻辑转换
除了模版转换，还需要进行逻辑代码的转换，由于各端api存在差异，如网络请求，数据缓存等，所以为了弥补不同端的差异，
Taro定制了统一的 API 标准，同时还为不同的端编写了相应的运行时框架，这些API可以直接使用，不用关心当前平台是否支持，因为运行时框架会抹平这些API差异。
组件库以及端能力都是依靠不同的端做不同实现来抹平差异
逻辑转换的实现：
运行时框架负责适配各端能力，以支持跑在上面的Taro业务代码

taro通过模版转换和逻辑转换，实现了跨平台多端构建小程序。

React写多端应用设计思想 
1代码转换  编译原理
  使代码可以在不同平台上运行
2.运行时适配
   使代码在不同平台上有相同的表现

taro3 =======
Taro 3 则可以大致理解为运行时或解释型架构（相对于 Taro 1/2 而言）。

主要通过在小程序端模拟实现 DOM、BOM API 来让前端框架直接运行在小程序环境中，从而达到小程序和 H5 统一的目的。
通过在逻辑层模拟 DOM/BOM API，将这些创建视图的方法转换为维护一棵 VDOM 树，再将其转换成对应 setData 的数据，最后通过预置好的模板递归渲染出实际视图。

而对于生命周期、组件库、API、路由等差异，我们依然可以通过定义统一标准，各端负责各自实现的方式来进行抹平。
而正因为 Taro 3 的原理，所以我们可以在 Taro 3 中同时支持 React、Vue 等框架，甚至我们还支持了 jQuery，
在不久的将来我们还能支持让开发自定义地去拓展其他框架的支持，比如 Angular，Taro 3 整体架构如下。
https://www.csdn.net/tags/MtTakg1sODExMjQtYmxvZwO0O0OO0O0O.html


整体架构，它分为两个部分，第⼀部分是编译时，第⼆部分是运⾏时。编译时会先对⽤户的 React 代码进⾏编译，转换成各个端上的⼩程序都可以运⾏的代码，
然后再在各个⼩程序端上⾯都配上⼀个对应的运⾏时框架进⾏适配，最终让这份代码运⾏在各个⼩程序端上⾯

编译时是使用 babel-parser 将 Taro 代码解析成抽象语法树，然后通过 babel-types 
对抽象语法树进行一系列修改、转换操作，最后再通过 babel-generate 生成对应的目标代码。
  
🔥🔥🔥
Taro 3 则可以大致理解为解释型架构（相对于 Taro 1/2 而言），主要通过在小程序端模拟实现 DOM、BOM API 来让前端框架直接运行在小程序环境中，
从而达到小程序和 H5 统一的目的，而对于生命周期、组件库、API、路由等差异，依然可以通过定义统一标准，各端负责各自实现的方式来进行抹平。
而正因为 Taro 3 的原理，在 Taro 3 中同时支持 React、Vue 等框架，甚至还支持了 jQuery，还能支持让开发者自定义地去拓展其他框架的支持，
比如 Angular，Taro 3 整体架构如下：

链接：https://juejin.cn/post/6989968343163731981

Taro3跨端跨框架原理初探
https://juejin.cn/post/6989968343163731981  


【小程序框架】Taro2/Taro3原理分析
https://www.bilibili.com/video/BV1s34y1B7bv/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

《小程序架构设计》—— 小程序简介
https://www.bilibili.com/video/BV1Y341147sr/?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


Taro2 和 Taro3 都是跨端开发框架，但两者之间有很多区别：

语法不同：
Taro2 使用的是 React 语法，而 Taro3 则使用了自己的语法（类似于 Vue3 和 React 的组合），并且对 TypeScript 支持更好。
由于 Taro3 处理了大部分跨端问题，因此开发者在使用 Taro3 时会更加专注于业务逻辑的编写。

构建过程不同：
Taro2 采用了编译为 React Native 组件的方式来实现跨端。而 Taro3 则使用了不同的构建方式，
即通过编译源代码生成对应平台的原生代码，从而显著提升跨端性能表现。

功能不同：
Taro3 的基础组件库要比 Taro2 更加全面和丰富，例如 Functional Component、Suspense、Error Boundary 等，
使得开发者在开发上更加高效。

可扩展性不同：
Taro2 的扩展性并不是太好，一些底层机制是有一定限制的。而 Taro3 的底层实现和结构更加模块化和灵活，
更倾向于让开发者通过插件和组件库实现自己的需求。

在跨端技术和生态方面，Taro2 已经非常成熟，而 Taro3 则在不断探索更加前沿的方案，尝试解决跨端开发中的各种问题和痛点。 
相比之下，Taro3 更适合追求性能和开发体验的开发者。 



【小程序框架】Taro2/Taro3原理分析
https://www.bilibili.com/video/BV1s34y1B7bv/?spm_id_from=333.337.search-card.all.click&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a 