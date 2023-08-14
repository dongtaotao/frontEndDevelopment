vue RN Flutter 小程序 taro vite webpack http 

redux-persist是把redux中的数据在localstorage中存起来，起到持久化的效果
https://www.jianshu.com/p/d627e8428e56

从0到1，打造小团队前端工程化服务（1/3）
https://juejin.cn/post/6870371104335069192

给前端的docker 10分钟真 · 快速入门指南 🔥
https://juejin.cn/post/7050304120082661407

Docker+Nginx+Jenkins实现前端自动化部署
https://juejin.cn/post/6869736425953165319
小白学习docker只要这篇文章就够了（建议收藏）
https://juejin.cn/post/6844904117165359111
小白都能看懂的前端部署（docker+nginx+jenkins）
https://juejin.cn/post/6844904111826010125

给网站标签页设置小图标
https://blog.csdn.net/qq_35081380/article/details/122463637
{/* <link rel="shortcut icon" href="icon.png" type="image/x-icon"> */}

关于浏览器标签页的Favicon图标
https://www.ujcms.com/knowledge/543.html
<link rel="icon" href="/favicon.png"></link>

Flutter 大厂面试真题（含答案）
https://juejin.cn/post/6940510893901873166

ElasticSearch优点---------

服务端渲染，========同构===================
服务器端运行React代码渲染出html
发送html给浏览器
浏览器接收到内容展示
浏览器加载js文件
Js中的react代码在浏览器端重新执行
Js中的react代码接管页面操作

next是react的同构框架（next提供同构渲染）
nextjs
完善的react项目架构，搭建轻松
自带数据同步策略，解决同构项目最大难点
丰富的插件帮助我们增加各种功能
灵活的配置根据你的需求来自定义

详解小程序工作原理和性能优化
https://juejin.cn/post/7073121416605876237?utm_source=gold_browser_extension

flutter 生命周期 
StatefulWidget 里 Widget 这部分的功能是：

创建 State
StatefulWidget 里 State 这部分的功能是：

创建 Widget
更新状态，刷新 UI

createState （
initState
didChangeDependencies initState() 方法运行完后，就立即运行 didChangeDependencies() 方法。 当 Widget 依赖的数据被调用时，此方法也会被调用。
build

didUpdateWidget()
deactive
dispose

RN页面适配 =====================
//UI设计图的宽度
const designWidth = 750
//手机屏幕的宽度
export const width = Dimensions.get('window').width;
//计算手机屏幕宽度对应设计图宽度的单位宽度
export const unitWidth = width / designWidth
width:unitWidth*375,

「react进阶」年终送给react开发者的八条优化建议(篇幅较长，占用20-30分钟)
https://juejin.cn/post/6908895801116721160?utm_source=gold_browser_extension 

51. isPromise
function isPromise(val) {
  return (
    val !== undefined && val !== null &&
    typeof val.then === "function" &&
    typeof val.catch === "function"
  )
}

链接：https://juejin.cn/post/7070020478701666318

electron 使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序  https://www.electronjs.org/

Electron 基于 Chromium 和 Node.js, 让你可以使用 HTML, CSS 和 JavaScript 构建应用。

基于node.js和chromium， 
跨平台-兼容mac windows，linux 

开发electron
需要html，js， css基础
深入浅出node.js
浏览器工作原理
electron Api应用

包括主进程渲染进程
进程间通信

我们使用 docker-compose.yml 来对多个 Docker 容器编排：

React写多端应用  Taro
设计思想
1代码转换
使代码可以在不同平台上运行
2.运行时适配
使代码在不同平台上有相同的表现

angular
模块 NgModule
组件
安装angular-cli 脚手架
创建组件命令
基本绑定、
指令
路由
依赖注入，控制反转、
管道（过滤器）

通信
//父子组件通信

//父组件 => 子组件
@Input() a:string; //子组件在控制器中定义
@Input()
  set b(b: string) { //监听输入值的变化,判断输入值是否符合要求，不符合要求就提示用户
    this._b = (b && b.trim()) || '<no name set>';
  }
  get b(): string { return this._b; }
@Input() c: function;
func(){ console.log("我是父组件的方法") }
//父组件通过属性绑定的方式向下传值或者方法
<my-component  [a]='helloA' [b]='helloB' [c]="func"></my-component>

//子组件 => 父组件
//子组件，自定义事件并发射出去
<input type="button" (click)="vote(true)">
exprot class son{
  //通过EventEmitter实现自定义事件
  @Output() voted = new EventEmitter<boolean>();
  vote(agreed: boolean) {
    this.voted.emit(agreed); //发射
  }
}
//父组件,监听自定义事件
<div>
    <app-son  (voted)="onVoted($event)"> </app-son>
</div>
exprot class app{ 
    agreed = 0;
    onVoted(agreed: boolean) {
       agreed ? this.agreed++ : agreed--;
    }
}

//父组件主动获取子组件的数据或方法 viewChild
<childCompontent #child> </childComponent>
@ViewChild('child') child1:component
this.child1.属性或方法

//非父子组件之间通过服务来通讯，也可以用Localstorage/SessionStorage（h5新增的本地缓存技术）

组件生命周期钩子
ngOnChanges() 当被绑定的输入属性的值发生变化时调用，首次调用一定会发生在 ngOnInit() 之前
ngOnInit() 在第一轮 ngOnChanges() 完成之后调用，只调用一次
ngOnDestroy() 在 Angular 销毁指令/组件之前调用

通过http访问服务器     
  
