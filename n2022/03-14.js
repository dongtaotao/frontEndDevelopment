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

React写多端应用
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

