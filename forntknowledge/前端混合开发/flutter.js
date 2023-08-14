
Flutter 生命周期 
https://juejin.cn/post/7056646298073563166 
StatefulWidget 生命周期 

createState：该函数为 StatefulWidget 中创建 State 的方法，当 StatefulWidget 被创建时会立即执行 createState。
   createState 函数执行完毕后表示当前组件已经在 Widget 树中，此时有一个非常重要的属性 mounted 被置为 true。
initState：该函数为 State 初始化调用，只会被调用一次，因此，通常会在该回调中做一些一次性的操作，
    如执行 State 各变量的初始赋值、订阅子树的事件通知、与服务端交互，获取服务端数据后调用 setState 来设置 State。
didChangeDependencies：该函数是在该组件依赖的 State 发生变化时会被调用。这里说的 State 为全局 State，
   例如系统语言 Locale 或者应用主题等，Flutter 框架会通知 widget 调用此回调。类似于前端 Redux 存储的 State。该方法调用后，组件的状态变为 dirty，立即调用 build 方法。
build：主要是返回需要渲染的 Widget，由于 build 会被调用多次，因此在该函数中只能做返回 Widget 相关逻辑，避免因为执行多次而导致状态异常。
reassemble：主要在开发阶段使用，在 debug 模式下，每次热重载都会调用该函数，因此在 debug 阶段可以在此期间增加一些 debug 代码，来检查代码问题。此回调在 release 模式下永远不会被调用。
didUpdateWidget：该函数主要是在组件重新构建，比如说热重载，父组件发生 build 的情况下，子组件该方法才会被调用，其次该方法调用之后一定会再调用本组件中的 build 方法。
deactivate：在组件被移除节点后会被调用，如果该组件被移除节点，然后未被插入到其他节点时，则会继续调用 dispose 永久移除。
dispose：永久移除组件，并释放组件资源。调用完 dispose 后，mounted 属性被设置为 false，也代表组件生命周期的结束。

初始化阶段，包括两个生命周期函数 createState 和 initState；
组件创建阶段，包括 didChangeDependencies 和 build；
触发组件多次 build ，这个阶段有可能是因为 didChangeDependencies、 setState 或者 didUpdateWidget 而引发的组件重新 build ，
  在组件运行过程中会多次触发，这也是优化过程中需要着重注意的点；
最后是组件销毁阶段，deactivate 和 dispose。
链接：https://juejin.cn/post/7056646298073563166

https://book.flutterchina.club/chapter1/mobile_development_intro.html#_1-1-5-flutter%E5%87%BA%E4%B8%96
总结
JavaScript 开发 + 原生渲染 的方式主要优点如下：

采用 Web 开发技术栈，社区庞大、上手快、开发成本相对较低。 
原生渲染，性能相比 H5 提高很多。
动态化较好，支持热更新。
不足：
渲染时需要 JavaScript 和原生之间通信，在有些场景如拖动可能会因为通信频繁导致卡顿。
JavaScript 为脚本语言，执行时需要解释执行 （这种执行方式通常称为 JIT，即 Just In Time，
指在执行时实时生成机器码），执行效率和编译类语言（编译类语言的执行同城称为 AOT ，即
Ahead Of Time，指在代码执行前已经预先编译为机器码了）仍有差距。
由于渲染依赖原生控件，不同平台的控件需要单独维护，并且当系统更新时，社区控件可能会滞后；
除此之外，其控件系统也会受到原生UI系统限制，例如，在 Android 中，手势冲突消歧规则是固定的，
这在使用不同人写的控件嵌套时，手势冲突问题将会变得非常棘手。这就会导致，如果需要自定义原生
渲染组件时，开发和维护成本过高。

本章主要介绍了目前移动开发中三种跨平台技术，现在我们从框架角度对比一下它们
技术类型	             UI渲染方式	 性能	开发效率	动态化	框架代表
H5 + 原生	            WebView渲染	一般	高	      支持	    Cordova、Ionic
JavaScript + 原生渲染	 原生控件渲染	好	中	        支持	RN、Weex
自绘UI + 原生	         调用系统API渲染	好	Flutter高, Qt低	默认不支持	Qt、Flutter

Flutter 简介
# 跨平台自绘引擎
    Flutter 与用于构建移动应用程序的其它大多数框架不同，因为 Flutter 既不使用 WebView，也
    不使用操作系统的原生控件。 相反，Flutter 使用自己的高性能渲染引擎来绘制 Widget（组件）。这样
    不仅可以保证在 Android 和iOS 上 UI的一致性，也可以避免对原生控件依赖而带来的限制及高昂的维护成本。
    Flutter 底层使用 Skia 作为其 2D 渲染引擎，Skia 是 Google的一个 2D 图形
    处理函数库，包含字型、坐标转换，以及点阵图，它们都有高效能且简洁的表现。Skia 是跨平台的，并提供
    了非常友好的 API，目前 Google Chrome浏览器和 Android 均采用 Skia 作为其 2D 绘图引擎。
    目前 Flutter 已经支持 iOS、Android、Web、Windows、macOS、Linux、Fuchsia（Google新的自
    研操作系统）等众多平台，但本书的示例和介绍主要是基于 iOS 和 Android 平台的，其它平台
    读者可以自行了解。

#高性能
    Flutter 高性能主要靠两点来保证：
    第一：Flutter APP 采用 Dart 语言开发。Dart 在 JIT（即时编译）模式下，执行速度
        与 JavaScript 基本持平。但是 Dart 支持 AOT，当以 AOT模式运行时，JavaScript 便远
        远追不上了。执行速度的提升对高帧率下的视图数据计算很有帮助。
    第二：Flutter 使用自己的渲染引擎来绘制 UI ，布局数据等由 Dart 语言直接控制，所以在布局过程
        中不需要像 RN 那样要在 JavaScript 和 Native 之间通信，这在一些滑动和拖动的场景下具有明显优
        势，因为在滑动和拖动过程往往都会引起布局发生变化，所以 JavaScript 需要和 Native 之间不停的同步
        布局信息，这和在浏览器中JavaScript 频繁操作 DOM 所带来的问题是类似的，都会导致比较可观的性能开销。

#采用Dart语言开发
    这个是一个很有意思但也很有争议的问题，在了解 Flutter 为什么选择了 Dart 而不是 JavaScript 之
    前我们先来介绍一下之前提到过的两个概念：JIT 和 AOT。
    程序主要有两种运行方式：静态编译与动态解释。静态编译的程序在执行前程序会被提前编译为机器码（或
    中间字节码），通常将这种类型称为AOT （Ahead of time）即 “提前编译”。而解释执型则是在运行
    时将源码实时翻译为机器码来执行，通常将这种类型称为JIT（Just-in-time）即“即时编译”。
    AOT 程序的典型代表是用 C/C++ 开发的应用，它们必须在执行前编译成机器码；而JIT的代表则非常多，
    如JavaScript、python等，事实上，所有脚本语言都支持 JIT 模式。但需要注意的是 JIT 和 AOT 指
    的是程序运行方式，和编程语言并非强关联的，有些语言既可以以 JIT 方式运行也可以以 AOT 方式运
    行，如Python，它可以在第一次执行时编译成中间字节码，然后在之后执行时再将字节码实施转为机器码执
    行。也许有人会说，中间字节码并非机器码，在程序执行时仍然需要动态将字节码转为机器码，这不应该
    是 JIT 吗 ? 是这样，但通常我们区分是否为AOT 的标准就是看代码在执行之前是否需要编译，只要需要
    编译，无论其编译产物是字节码还是机器码，都属于AOT。在此，读者不必纠结于概念，概念就是为了传达精神
    而发明的，只要读者能够理解其原理即可，得其神忘其形。
    现在我们看看 Flutter 为什么选择 Dart 语言？笔者根据官方解释以及自己对 Flutter 的理解总结了以
    下几条（由于其它跨平台框架都将 JavaScript 作为其开发语言，所以主要将 Dart 和 JavaScript 做
    一个对比）：

开发效率高。

Dart 运行时和编译器支持 Flutter 的两个关键特性的组合：
    基于 JIT 的快速开发周期：Flutter 在开发阶段采用，采用 JIT 模式，这样就避免了每次改动都要进行编
    译，极大的节省了开发时间；
    基于 AOT 的发布包: Flutter 在发布时可以通过 AOT 生成高效的机器码以保证应用性能。而 JavaScript
    则不具有这个能力。
    高性能。
    Flutter 旨在提供流畅、高保真的的 UI 体验。为了实现这一点，Flutter 中需要能够在每个动画帧中运行
    大量的代码。这意味着需要一种既能提供高性能的语言，而不会出现会丢帧的周期性暂停，而 Dart 支持
    AOT，在这一点上可以做的比 JavaScript 更好。
    快速内存分配。

// Flutter 框架使用函数式流，这使得它在很大程度上依赖于底层的内存分配器。因此，拥有一个能够有效地
// 处理琐碎任务的内存分配器将显得十分重要，在缺乏此功能的语言中，Flutter 将无法有效地工作。当然
//  Chrome V8 的 JavaScript 引擎在内存分配上也已经做的很好，事实上 Dart 开发团队的很多成员都是来
//  自Chrome 团队的，所以在内存分配上 Dart 并不能作为超越 JavaScript 的优势，而对于Flutter来说
//  ，它需要这样的特性，而 Dart 也正好满足而已。

类型安全和空安全。

// 由于 Dart 是类型安全的语言，且 2.12 版本后也支持了空安全特性，所以 Dart 支持静态类型检测，可以
// 在编译前发现一些类型的错误，并排除潜在问题，这一点对于前端开发者来说可能会更具有吸引力。与之不同
// 的，JavaScript 是一个弱类型语言，也因此前端社区出现了很多给 JavaScript 代码添加静态类型检
// 测的扩展语言和工具，如：微软的 TypeScript 以及Facebook 的 Flow。相比之下，Dart 本身就支持
// 静态类型，这是它的一个重要优势。

Dart 团队就在你身边。

// 看似不起眼，实则举足轻重。由于有 Dart 团队的积极投入，Flutter 团队可以获得更多、更方便的支持，正
// 如Flutter 官网所述“我们正与 Dart 社区进行密切合作，以改进 Dart 在 Flutter 中的使用。例如，当
// 我们最初采用 Dart 时，该语言并没有提供生成原生二进制文件的工具链（这对于实现可预测的高性能具有很大
// 的帮助），但是现在它实现了，因为 Dart 团队专门为 Flutter 构建了它。同样，Dart VM 之前已经针
// 对吞吐量进行了优化，但团队现在正在优化 VM 的延迟时间，这对于 Flutter 的工作负载更为重要。”

#总结
本节主要介绍了一下 Flutter 的特点，如果你感到有些点还不是很好理解，不用着急，随着日后对 Flutter
细节的了解，再回过头来看，相信你会有更深的体会。

#
Flutter 技术调研 https://fengs.online/2019/02/flutter-research/
一、概述
1.1 功能介绍
1.2 Flutter 框架
1.2.1 Flutter Framework
1.2.2 Flutter Engine
二、Flutter 特点
2.1 跨平台自绘引擎
2.2 高性能
2.3 采用 Dart 语言开发
2.4 热重载
2.5 丰富的设计控件
2.6 支持 Windows Mac 和 Linux
三、Flutter 优缺点
3.1 优点 
3.1.1 跨平台性
3.1.2 开发效率高
3.1.3 热加载
3.1.4 可定制的UI组件
3.1.5 良好的兼容性
3.1.6 开源
3.2 缺点
3.2.1 Dart 学习成本
3.2.2 可读性差
3.2.3 稳定性
3.2.4 安装包大小
3.2.5 启动时长
四、移动开发技术比较
4.1 原生开发
4.1.1 框架特点
4.1.2 优缺点
4.1.3 代表
4.2 H5+原生
4.2.1 框架特点
4.2.2 优缺点
4.2.3 代表
4.3 JavaScript 开发+原生
4.3.1 框架特点
4.3.2 优缺点
4.3.3 代表
4.4 自绘 UI + 原生
4.4.1 框架特点
4.4.2 优缺点
4.4.3 代表
五、iOS 实践总结
5.1 优点
5.2 缺点
5.3 实践感想
5.4 Flutter 混合开发
六、公司项目可行性说明

1、Flutter优点
A、混合开发中，最接近原生开发的框架； 
B、性能强大，流畅；
C、优秀的路由设计；
D、优秀的动画设计；
E、简单易学，Dart语言更具优势；
F、跨多种平台，减少开发成本；支持插件，可以访问原生系统的调用。

2、Flutter缺点
A、脱离不开原生，开发人员需要具备原生（Android、iOS）基础开发能力；
B、适配问题，开发工具版本升级后，修改量大；
C、原生集成第三方SDK后，兼容性适配是个令人头痛的问题；
D、代码可读性较差，对代码质量和管理要求较高；
E、Widget的类型难以选择，糟糕的UI控件API；
F、Flutter packages和Dart packages上第三方sdk繁杂，适配性差，不可乱用；
G、目前几乎没有第三方开发者平台开发Flutter能力的SDK，需要原生去集成；
H、打包后，apk/ipa要大很多。

链接：https://www.jianshu.com/p/b7f457e492c3

Flutter原理与实践
https://www.jianshu.com/p/c974397b96c5

生命周期
说到生命周期，就有一个随之而来的问题，数据请求应该在哪一个生命周期

initState  ///*************** */
didChangeDependencies
build
didUpdateState
deactive
dispose


//===================
Flutter 是 Google推出并开源的移动应用开发框架，主打跨平台、高保真、高性能。开发者可以通过 Dart语言开发 App，一套代码同时运行在 iOS 和 Android平台。 
Flutter提供了丰富的组件、接口，开发者可以很快地为 Flutter添加 native扩展。
Flutter还使用 Native引擎渲染视图，这无疑能为用户提供良好的体验。
Flutter数据驱动模式参考React实现

//=============================================================================-==========
为什么要用flutter
1，跨平台自绘引擎：
Flutter既不使用WebView，也不使用操作系统的原生控件(rn)，Flutter使用Skia作为其2D渲染引擎（相对而言耗费内存）。
针对 Android 与 iOS 的风格设计了两套设计语言的控件实现（Material & Cupertino）。这样不但能够节约人力成本，而且在用户
体验上更好的适配 App 运行的平台。

2，重写了一套跨平台的 UI 框架，渲染引擎是依靠 Skia 图形库实现：
Flutter 中的控件树直接由渲染引擎和高性能本地 ARM 代码直接绘制，不需要通过中间对象（Web 应用中的虚拟 DOM 和真实 DOM，原生 App 中的虚拟控件和平台控件）来绘制，
使它有接近原生页面的性能，帮助我们提供更好的用户体验。

3.同时支持 JIT 和 AOT 编译	

Flutter  热跟新 android支持，下发so文件， ios不支持
RN： 支持，动态下发bundle文件

调用原生功能       用平台通道                                 Rn你用原生模块
业务开发的产物     编译成二进制文件集成到app安装包内             可动态下发的jsbundle和依赖的编译到app内装包内 原生代码
性能             由于是编译后运行，且不用做跨语言通信 性能很好    大部分场景性能良好，但是在某些需要频繁做跨语言通信的场景，性能不够理想


包体积
Flutter需要编译成二进制运行，占体积（致命的痛点）
Rn 可以动态下发
编程方式
flutter的编程方式，代码很不直观，没有好的布局模板，全是靠dart手写布局
代码可读性、重用性、健壮性很差
没有模板语言


变量声明•final和const•常量声明。
 一个final变量只能被设置一次，二者区别在于：
const变量是一个编译时常量，final变量再第一次使用时被初始化。被final或const修饰的变量，变量类型可以省略
用Dart语言开发，而不是JavaScript，它在release模式下是编译后运行，而不是像JS一样在JavaScriptCore里解释运行，因此暂时不支持热更新
final和const，final修饰的变量只能被赋值一次，const修饰的变量是一个编译时常量，
区别在于 final 定义的常量可以用变量来初始化，而且final是惰性，运行时才初始化


Flutter ： Native调用flutter方法 https://blog.csdn.net/BunnyCoffer/article/details/114014126
在实际的开发中通常需要 Flutter 调用 Native 的功能，或者 Native 调用 Flutter 的功能
它们之间的通信主要是通过 Platform Channel 来实现的, 主要有 3 种 channel :
MethodChannel 用于传递方法调用
EventChannel 用于数据流（event streams）的通信
BasicMessageChannel 用于传递字符串和半结构化的信息
链接：https://juejin.cn/post/6844903901649436679


Flutter Native 方法调用
一、Flutter调用Native
1、Flutter端创建 MethodChannel，使用 invokeMethod 调用远程方法
2、Native端创建 MethodChannel，实现 MethodCallHandler
3、Native完成注册

作者：初见破晓
链接：https://www.jianshu.com/p/551aac3eef8c


Flutter调用Android原生方法
1.Android端创建渠道和方法完成注册
2.Flutter端 await MethodChannel('channel_name').invokeMethod('flag_name');

Native调用Flutter(二)
Native调用Flutter,分为：
1.回调（Flutter调用Native后，Native回调给Flutter）。
2.主动调用（Native主动去调用Flutter）。
一、回调（核心代码👇）
   //  android plugins 中
   @Override
   public void onMethodCall(MethodCall call, MethodChannel.Result result) {
       switch (call.method) {
           case "method_flag":
               result.success("native 返回值给 flutter");// android端回调给Flutter端。
               break;
           default:
               result.notImplemented();
               break;
       }
   }

  // dart中
  void flutteePassValueToAndroidAndGetBack() async {
    var backResult= await new MethodChannel("Channel_name").invokeMethod("method_flag", "flutter 传值给 native");
    print("----回调值-------$backResult");
  }

二、主动调用（核心代码👇）
native主动调用Flutter与Flutter主动调用native使用上是类似的。调用端需要通过MethodChannel.invokeMethod去调用。被调用端需要注册MethodChannel.setMethodCallHandler监听。
// dart中
MethodChannel _channel = new MethodChannel("Channel_name");
_channel.setMethodCallHandler(onMethodCall);

// flutter注册MethodCallHandler供Native调用方法与android中注册一样。
Future<dynamic> onMethodCall(MethodCall call) async {
  switch (call.method) {
    case "native-invoke-flutter":
      var argument = call.arguments;
      print("---------$argument");
      return "flutter 获得结果返回给native"; // 这里是Flutter返回结果给 native;
    default:
      return "";
  }
}

// android 中
MethodChannel channel = new MethodChannel(binaryMessenger, "Channel_name");

channel.invokeMethod("native-invoke-flutter", "这是native 主动调用 flutter的参数", new MethodChannel.Result() {
     @Override
     public void success(Object result) { // 调用dart中的方法，成功回调。 
          Log.d("=---==--==", "success: result = " + result.toString());
     }
     @Override
      public void error(String errorCode, String errorMessage, Object errorDetails) {

     }
     @Override
     public void notImplemented() {

    }
});
链接：https://www.jianshu.com/p/87f8ba70cf77


整个过程分为四个阶段：
初始化阶段，包括两个生命周期函数 createState 和 initState；
组件创建阶段，也可以称组件出生阶段，包括 didChangeDependencies 和 build；
触发组件多次 build ，这个阶段有可能是因为 didChangeDependencies、setState 或者 didUpdateWidget 而引发的组件重新 build ，
在组件运行过程中会多次被触发，这也是优化过程中需要着重需要注意的点；
最后是组件销毁阶段，deactivate 和 dispose。

在 Flutter 中存在三棵树，分别是 Widget 、Element 和 RenderObject。
Widget，是用来描述 UI 界面的，里面主要包含了一些基础的 UI 渲染的配置信息。
Element，类似于前端的虚拟 Dom，介于 Widget 和 RenderObject 之间。
RenderObject，则是实际上需要渲染的树，渲染引擎会根据 RenderObject 来进行界面渲染。

Flutter UI 界面是自渲染的，而 ReactNative 则是通过通信的方式告知原生平台，然后原生平台再绘制出界面。

Flutter Web 中所有的文字不可以选择  但是text可以换成selectabletext 可以选择 canvas 
而flutterWeb打包也有两种模式可以选择：html模式和CanvasKit模式

当我们采用html渲染模式时，flutter会采用HTML的custom element，CSS，Canvas和SVG来渲染UI元素
优点是：体积比较小
缺点是：渲染性能比较差，跨端一致性可能不受保障

CanvasKit模式

flutter build web --web-renderer canvaskit
当我们采用canvaskit渲染模式时，flutter将 Skia 编译成 WebAssembly 格式，并使用 WebGL 渲染。应用在移动和桌面端保持一致，有更好的性能，
  以及降低不同浏览器渲染效果不一致的风险。但是应用的大小会增加大约 2MB。
优点是：跨端一致性受保障，渲染性能更好
缺点是：体积比较大，load页面时间会更久
链接：https://juejin.cn/post/7040061394313543710


// domain/pages/viewpage.action?pageId=955748069
问题归纳
按照实践的demo经验以及存在的问题总结一下：
目前Flutter for Web和Flutter最多保证API一样，实现原理差异可能非常大，同时不保证所有控件都已经在Flutter for Web上实现。 
目前插件能力十分有限，很多第三放插件目前不支持，和系统交互的一些能力缺失，比如拍照等。 
性能比不上web，因为涉及到了大量的html标签的转化。运行慢可能会掉帧 
开发调试目前只能在chrom浏览器调试，暂时不支持其他浏览器，如果在其他浏览器限制出现问题bug不好排查。 
Dart和Js语言本身的差异会带来测试和兼容成本的增加，虽然Dart可以编译成Js，但是跑在DartVM上的Dart的表现，和其编译成Js运行在浏览器中的表现并不完全相同。 
页面不可以选中文字，因为使用canvas处理文字的。调试不方便，因为整个页面是个画布，无法选中元素，无法查看元素信息。 
js没有加载出来页面一直显示空白，整个项目通过dart2js将使用dart写的flutter代码生成了js便于加载，所写的flutter ui样式、dart业务逻辑等都将转成js输出到这个文件中，然后被index.html加载，最后渲染呈现在webview上。 
一些Flutter组件和api在web上展示有问题 
平台相关的一些api不支持，例如Platform.isAndroid就不支持。 
TextField输入框提示语显示有问题，刚开始显示异常文字，一会才正常 
包大小问题 
flutter for web的包远大于正常h5的包。 
整体打出来一个main.dart.js包，多个flutter for web页面无法对公共组件进行复用 
官方目前不建议使用在生产环境 （目前还没有大厂在生产环境上面使用）

总结
Flutter Web具有优秀的设计。它基于dart:js和dart:html这些成熟的框架，通过将与Native相关的dart:ui库重写的方式，很好地解决了Flutter扩展到Web平台上的问题。
对于上层开发者而言，完全不用去做任何修改，即可产生一套符合Web标准的代码，显示和行为也同原始设计保持一致。虽然目前Flutter Web还不够成熟，存在一些诸如包大小性能
开发调试等问题，希望未来Flutter Web越来越完善

Flutter-for-Web新特性
Flutter Web完成从beta过渡到 stable
除了Html渲染器之外，增加了新的给予CanvasKit的渲染器
  HTML渲染器：结合使用HTML元素，CSS，Canvas元素和SVG元素。该渲染器的下载大小较小。
  CanvasKit渲染器：此渲染器与Flutter移动设备和桌面设备完全一致，具有更快的性能和更高的小部件密度，但下载大小增加了大约2MB。
添加了特定于Web的功能，比如Link小部件
渐进式Web应用程序（PWA），将Web的访问范围与桌面应用程序的功能结合在一起。
pwa: 缓存、push 推送服务、桌面快捷、消息提示
单页应用程序（SPA），一次加载并与Internet服务之间进行数据传输。
spa: 单页程序类似 vue rect
空安全检查（防止空指针带来的异常奔溃）
增加了Chrome 、 Firefo， Safari 或 Edge等浏览器的 Web 版本
expanding mobile: 快速迁移 app、复用代码、


final、const的区别
final 编译时不确定，运行时确定值 final curTime=DateTime.now()
const 编译时即明确的值 
~~const curTime=DateTime.now()~~   🙅
fix： const curTime='2022-12-12' 🙆  
链接：https://juejin.cn/post/7095962296421204005 
