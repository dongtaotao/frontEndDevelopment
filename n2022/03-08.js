03-08
ts, React, redux, antd， 脚手架， node 

1.ts
用接口表示数组
接口也可以用来描述数组：
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];

类型断言就是保证数据类型一定是所要求的类型 

最全的手写JS面试题
26 请实现 DOM2JSON 一个函数，可以把一个 DOM 节点输出 JSON 的格式
30 分片思想解决大数据量渲染问题
题目描述:渲染百万条结构简单的大数据时 怎么使用分片思想优化渲染
https://juejin.cn/post/6968713283884974088#heading-24

两者不同点：
interface（接口） 是 TS 设计出来用于定义对象类型的，可以对对象的形状进行描述。
type 是类型别名，用于给各种类型定义别名，让 TS 写起来更简洁、清晰。
type 可以声明基本类型、联合类型、交叉类型、元组，interface 不行
interface可以合并重复声明，type 不行
https://mp.weixin.qq.com/s/Jb7Gycf_J5_Zjqe1Kiky5w

useEffect执行顺序: 组件更新挂载完成 -> 浏览器 dom 绘制完成 -> 执行 useEffect 回调。
useLayoutEffect 执行顺序: 组件更新挂载完成 ->  执行 useLayoutEffect 回调-> 浏览器dom绘制完成。

链接：https://juejin.cn/post/6950063294270930980

交叉类型 同时拥有所有类型的全部成员
interface IA {
  name: string;
}
interface IB {
  age: number;
}
let d: IA & IB = {
  name: "",
  age: 1
};

  
联合类型  只能是所有类型之一
function printSth(input: string | number) {
  return input;
}
printSth(1);
printSth("");
interface IC {
  name: string;
  c: number;
}

交叉类型与联合类型
https://juejin.cn/post/6972348468496957470#heading-0

手撸loader和plugin全解析
https://juejin.cn/post/6844903891180453901

graphql

http://yun.itheima.com/open/320.html
用Vue CLI打造属于自己的项目脚手架工具  https://www.bilibili.com/video/BV1sx411Z7tN?p=6&spm_id_from=pageDriver ********
项目模板放在github上 
用户通过命令交互的方式下载不同的模版  Commander.js  下载模版download-git-repo   命令行交互 inquirer  handlebars模版引擎
经过模版引擎渲染定制项目模版 
模版变动，只需更新模版即可，不需要用户更新脚手架 

https://.com/o/article?id=teletext_5ea6d42b53857e0d36f93221
1.什么是脚手架 
2.实现思路 
项目模板放在github上 
用户通过命令交互的方式下载不同的模版 
经过模版引擎渲染定制项目模版 
模版变动，只需更新模版即可，不需要用户更新脚手架 
设计模块知识点 

commander.js命令行工具 
download-git-repo: 用来下载远程模板 
inquirer: 交互式命令行工具 
ora: 显示loading动画 
chalk: 修改控制台输出内容样式 
log-symbols: 显示出 √ 或 × 等的图标 
3.项目初始化 
4.处理命令行 
5. 准备模版 

手写Vue脚手架
https://www.bilibili.com/video/BV1w54y1B7Tb/?spm_id_from=333.788.recommend_more_video.0

前端请求后端数据，vue-cli用graphql的方法去请求
https://segmentfault.com/a/1190000019586579

ES数据库Elasticsearch和MongoDB/Redis/Memcache一样，是非关系型数据库。
https://baijiahao.baidu.com/s?id=1663918132504029781&wfr=spider&for=pc
Elasticsearch是一种分布式的海量数据搜索与分析的技术  