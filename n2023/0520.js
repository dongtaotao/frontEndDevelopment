前端利用切片实现大文件断点续传
https://juejin.cn/post/7233613362888966205?utm_source=gold_browser_extension

🚀 看你的简历，你说你会AST，来、写个插件
https://juejin.cn/post/7233324626418794554?utm_source=gold_browser_extension


js小众且好用的技巧【api】
https://juejin.cn/post/7229515080487370812
目录
浏览器
实现全屏
退出全屏
页面打印
打印内容样式更改
阻止关闭事件
屏幕录制
判断横竖屏
横竖屏样式变更
标签页显隐
图片
本地图片预览
图片预加载
js
字符串脚本化
递归函数名解耦
DOM元素
隐显判断
元素可编辑
元素属性监听
打印dom元素
其他
激活应用

前端质量设计指引（万字长文）
https://juejin.cn/post/7233720284707930171?utm_source=gold_browser_extension


利用 AST 做国际化
https://juejin.cn/post/6885957893724569613

前端 ”一键换肤“ 技术方案
https://juejin.cn/post/7233626231580786747


Awesome Github REPO 很好
https://github.com/Wechat-ggGitHub/Awesome-GitHub-Repo

通过Vue自定义指令实现前端埋点
https://juejin.cn/post/7119699974698303524

聊聊微信分享的前端实现
https://juejin.cn/post/7062533098553999391#heading-6


vue-json-editor json编辑器
https://juejin.cn/post/7100873357704298509


小满埋点SDK从0开发并且发布npm （完结）
https://www.bilibili.com/video/BV1Fa411T7uY/?spm_id_from=333.999.0.0&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a


小满埋点SDK从0开发并且发布npm （完结）
https://www.bilibili.com/video/BV1Fa411T7uY/?p=2&spm_id_from=pageDriver&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
https://xiaoman.blog.csdn.net/article/details/125958100

聊聊web中关于文件的使用，及大文件分片上传的实践
https://juejin.cn/post/7234795667478904890?utm_source=gold_browser_extension


【纯前端】如何实现excel的导入导出？
https://juejin.cn/post/7235109911780196413?utm_source=gold_browser_extension


在线编辑excel
https://juejin.cn/post/7221368910139342907


【3月面经】用ChatGpt来回答前端八股文🔥
https://juejin.cn/post/7216217118588665917
3.1、Promise原理
3.2、ES6继承的底层实现原理是什么
3.3、for forEach map哪个性能最好
追问：for forEach map搭配async await 都能实现任务的依次输出吗？各位大哥试试看
3.4、详细说说前端模块化
追问：CommonJS能否像ES Modules一样做Tree Shaking？
3.5 jsbridge 原理
四、浏览器
4.1、301和302的区别
4.2、http1.1，http2，http3对比
追问：HTTP/3中，UDP丢包问题如何解决
4.3、输入URL到页面渲染完成的过程
追问1：什么是options请求？如何减少发送次数？
追问2：CSS3动画 会引起回流和重绘吗？
追问3：讲讲浏览器渲染过程中的合成层
五、Vue
5.1、项目中多个.vue文件生成了多少个vue实例
准确的说
5.2 vue2中v-for为什么不推荐和v-if一起用？vue3又可以了
5.3 vue provide / inject 实现原理
六、React
6.1、react 受控组件和非受控组件优缺点
受控组件
非受控组件
6.2、useEffect实现原理
6.3、class类组件能享受到fiber带来的性能提升吗？
七、其他
7.1、webpack优化
7.2、如何保证Node Bff稳定性
7.3、微前端相关
qiankun的优缺点
qiankun 子应用加载过程
qiankun 主应用和子应用路由是如何管理的
qiankun CSS隔离方案是怎么做的
如何解决qiankun内存占有率高的问题
如何优化qiankun子应用的加载速度
qiankun的通信方案有哪些
qiankun的js沙箱实现方案
八、往期回顾


一篇搞定【web打印】知识点
https://juejin.cn/post/6985030118758416391

一名 vueCoder 总结的 React 基础
https://juejin.cn/post/6960556335092269063
(1)className
单独写一个 class 是可以的，动态拼接需要借助 classnames 库
js复制代码import style from './style.css'

<div className={style.class1 style.class2}</div>

(2)style
需要注意的：两个括号（样式被当做一个对象来解析），类似-连接的样式属性需要转换成小驼峰写法。
js复制代码<div style={{ marginTop: 8 }}>样式</div>

(3)css 隔离
u1s1，css 隔离这块还是 vue 的 scoped 好用


css-module
create-react-app 中内置了使用 CSS Modules 的配置，和 vue 的 scoped 原理相似，都是在生成的 class 后面加了 hash 值


js复制代码// style.module.css
.text {
    color: blue
}
// app.tsx
import s from "./style.module.css";
class App extends Component {
  render() {
    return <div className={s.text}>css-module text</div>;
  }
}
// 编译后
.text_3FI3s6uz {
    color: blue;
}



styled-components
目前社区里最受欢迎的一款 CSS in JS 方案，个人感觉有点别扭，不太喜欢


js复制代码//引入styled-components
import styled from "styled-components";

//修改了div的样式
const Title = styled.div`
  font-size: 30px;
  color: red;
`;
class App extends Component {
  render() {
    return (
      <>
        <Title>CSS in JS 方案</Title>
      </>
    );
  }
}
链接：https://juejin.cn/post/6960556335092269063



如何分析页面加载慢
https://www.jianshu.com/p/24b93b13e5a9

前端模板引擎实现原理
https://juejin.cn/post/7236009756518498364


前端超大大文件上传
https://juejin.cn/post/7237840998986170426?utm_source=gold_browser_extension

浅尝IM方案在H5活动场景中的应用
https://juejin.cn/post/7236915296962248760
 

JS逐页转pdf文件为图片格式
https://juejin.cn/post/7238442926334918711

移动web唤起手机拍照、摄影、录音及拨号 🔥🔥🔥🔥🔥🔥🔥===============
https://juejin.cn/post/7238921098808328249    