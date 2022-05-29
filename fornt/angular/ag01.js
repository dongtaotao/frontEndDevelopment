angular 面试题
https://juejin.cn/post/6864951052337168397
用于 JavaScript 的 ReactiveX 库。
RxJS 是使用 Observables 的响应式编程的库，它使编写异步或基于回调的代码更容易
ReactiveX 是一个通过使用可观察序列来合成异步和基于事件的程序的库。
RxJS 是专门处理异步逻辑的 

rx.js 响应式异步编程库，在vue中需引入vue-rx    

组件中内置指令
    NgClass
    NgStyle
    NgModel
    NgFor
    NgIf
    NgSwitch
组件的事件绑定-方法和参数
<button (click)="addCount($event)">当前数值加1</button>

组件的父子组件传值 https://juejin.cn/post/7033690420899135519
@Input() 和 @Output() 为子组件提供了一种与其父组件通信的方法。 @Input() 允许父组件更新子组件中的数据。相反，@Output() 允许子组件向父组件发送数


父组件向子组件里传值是通过属性进行传值的

1. 子组件通过@Input声明要进行通信的变量
@Input() public showNumber: number;

2.父组件在引入的时候通过属性绑定来传递在ts中定义好的变量
<app-outside-introduction [showNumber]="defaultNum"></app-outside-introduction>
export class AppComponent {
  public defaultNum = 5;
}

export class OutsideIntroductionComponent {
    @Input() public showNumber: number;
    // 下边的逻辑主要实现自组价向父组件emit一个值
    @Output() public curCountChange = new EventEmitter<number>();
    public curCount = 1;
    public addCount(): void {
      this.curCount++;
      this.curCountChange.emit(this.curCount);
    }
  }
// 父组件

// 这里的事件名curCountChange必须和子组件定义@Output()的名字是一样的，=后边的方法名可以自己随意定义
// `$event`是子组件传过来的值
<app-outside-introduction [showNumber]="defaultNum" (curCountChange)="handlCurCountChange($event)"></app-outside-introduction>

  public handlCurCountChange(value: number): void {
    // 这里的value就是子组件传过来的值
    this.valueFromChild = value;
}

非父子通行
Angular父组件和子组件通过服务来通讯
/**
 *1.定义一个服务，作为传递参数的媒介
 */
 @Injectable()
 export class PrepService{
 
   //定义一个属性，作为组件之间的传递参数，也可以是一个对象或方法    
   profileInfo: any;
   
   }

依赖注入的使用 https://juejin.cn/post/7038926621574725646
import { Injectable } from '@angular/core';

// @Injectable()装饰器，是告诉Angular这是一个可供注入的服务，该注入器主要负责创建服务实例，并把他注入到类中， 元数据providedIn: 'root' 表示 HeroService在整个应用程序中都是可见的。
@Injectable({
  providedIn: 'root',
})
export class GoodsListService {
  constructor() { }
}


使用HttpClient

什么是RxJS
首先RxJS是一个库，是针对异步数据流编程工具，当然Angular引入RxJS就是让异步更加简单，
更加可控，在开始RxJS之前，我们先来了解一下Reactive Programming，其本质就是使用流（stream）\color{#0abb3c}{流（stream）}流（stream）的一种编程方式。


父组件与子组件通过本地变量互动 http://angular.cn/guide/component-interaction
<app-countdown-timer #timer></app-countdown-timer>
<button (click)="timer.stop()">Stop</button>

父组件调用@ViewChild()

父组件和子组件通过服务来通讯

组件
数据绑定
组件交互
生命周期  ngOnChanges  ngOnInit  ngDoCheck ngAfterContentInit ngOnDestroy 
管道  过滤器
服务
HttpClient
路由

2、组件 (Components)
3、模板 (Templates)
6、指令 (Directives)
7、服务 (Services)
8、依赖注入 (Dependency Injection)
9 .管道


Angular非父子组件之间通过服务通讯
https://juejin.cn/post/7029501425721802760
https://www.jianshu.com/p/27eb72c4c303
https://www.52zixue.com/zhanzhang/webqd/js/11/15/57672/


通过service
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderActionService {
  public pageTenantMode = new Subject<string>();
  // 获得一个Observable;
  missionConfirmed$ = this.pageTenantMode.asObservable();
  constructor() {}

  setParams(params) {
    this.pageTenantMode.next(params);
  }
}

子组件数据层调用上述方法，将值传进去。
this.tenantModeService.setParams（）

父组件调用的地方注入上述服务，代码如下：
headerModeService.missionConfirmed$.subscribe(
    () => {
      this.mode = headerModeService.pageTenantMode;
      this.initTableData();
    }
);
