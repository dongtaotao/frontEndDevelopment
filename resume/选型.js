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