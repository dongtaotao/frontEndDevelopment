webpack原理 https://www.yuque.com/baiyueguang-rfnbu/tr4d0i/vypyf0
一、webpack做了什么
用户使用webpack打包项目，只要写好配置，然后运行webpack，就可以得到打包结果了，webpack会根据配置项自动化构建项目。
因此webpack做的工作可以简单描述为项目 + 配置 => dist。
更进一步，webpack读取配置，根据入口开始遍历文件，解析依赖，使用loader处理各模块，然后将文件打包成bundle后输出到output指定的目录中。
二、webpack构建过程
Webpack CLI 启动打包流程，解析配置项参数；
载入 Webpack 核心模块，创建 Compiler 对象；
注册plugins
使用 Compiler 对象开始编译整个项目；
从入口文件开始，解析模块为AST，分析模块依赖，形成依赖关系树；
递归依赖树，将每个模块交给对应的 Loader 处理；
合并 Loader 处理完的结果，将打包结果输出到 dist 目录。
三、webpack插件机制
Webpack 的插件系统是基于官方自己的 Tapable 库实现的。
Tapable 是一个类似于 Node.js 中的 EventEmitter的库，但更专注于自定义事件的触发和处理，tapable控制钩子函数的发布与订阅，控制着webpack的插件系统，webpack的本质就是一系列的插件运行。
Tapable 中主要提供了同步与异步两种钩子。
四、compiler和compilation
compiler是编译器，控制webpack整个编译流程，compilation则是处理模块，包括调用loader编译模块，模块优化，生成hash，生成chunk等。
除了模块的处理，webpack还有很多其他操作，compiler负责处理初始化，插件注册，输出文件，编译失败处理等等。 
