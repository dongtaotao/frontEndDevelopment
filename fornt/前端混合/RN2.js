
RN系列：Android原生与RN如何交互通信 https://blog.csdn.net/sinat_17775997/article/details/106418224 

页面跳转（RN与Android原生）
RN页面跳转原生
方式一：
通过下面即将讲述的方法调用实现，通过在RN中调用 NativeModule中暴露的方法，来实现跳转原生的指定页面。（此处不再细述）
方式二：
通过Scheme路由形式跳转，RN提供的Linking，可根据路由跳转到指定页面，可参考【React Native Linking与 Android原生页面路由跳转问题】。

其实方法调用大致分为2种情况：

Android主动向JS端传递事件、数据
JS端主动向Android询问获取事件、数据
RN调用Android需要module名和方法名相同，而Android调用RN只需要方法名相同。 
（1）RCTDeviceEventEmitter 事件方式
​ 优点：可任意时刻传递，Native主导控制。
（2）Callback 回调方式
​ 优点：JS调用，Native返回。
​ 缺点：CallBack为异步操作，返回时机不确定
（3）Promise
​ 优点：JS调用，Native返回。
​ 缺点：每次使用需要JS调用一次
（4）直传常量数据（原生向RN）
​ 跨域传值，只能从原生端向RN端传递。RN端可通过 NativeModules.[module名].[参数名] 的方式获取。


【RN】ReactNative与原生交互之Android篇
https://blog.csdn.net/sinat_17775997/article/details/103227102

React Native与Android通信交互
https://blog.csdn.net/sinat_17775997/article/details/80585513

一、自定义原生模块
创建自定义模块
注册自定义模块
在RN中使用自定义模块
获取原生模块预设常量值
导出带参函数方法
导出带参函数方法，并使用Callback回调函数返回结果信息
导出带参函数方法，并使用Promises返回结果信息

二、自定义视图组件
ReactNative除了可以封装原生模块之外，还可以将原生UI视图封装成组件后供RN使用。接下来我们来说说如何封装一个原生的UI视图组件及其属性值设置、事件通知，视图跳转等。
创建自定义视图组件
注册自定义视图组件
封装对应的JavaScript组件代码
导出自定义视图组件属性设置器
处理自定义原生视图组件的事件通知
跳转Activity视图


React Native 底层原理
https://blog.csdn.net/sinat_17775997/article/details/103802453

https://juejin.cn/post/6916452544956858382
React Native 原理与实践

React Native 介绍
什么是 React Native？
React Native 的特点
跨平台
上手快
原生体验
热更新
React Native 原理
JavaScriptCore
Bridge
Virtual DOM
热更新
React Native 实践
安装环境（针对 macOS）
目录结构
实现一个弹窗动画
总结 & 拓展
React Native 的不足
React Native 的未来
和其他跨端技术比较

InfoQ：请您展开说说相比于 React Native 框架，Flutter 的优势是什么？
第一，JIT 模式下，编译速度与 JavaScript 基本持平，
  但是对于 AOT 模式下，Dart 效率远高于 JavaScript，JavaScript 则不具备 AOT 这个能力；
第二，Flutter 使用的是自绘引擎，对 UI 的操作，布局的修改执行效率要比 React Native 效率高很多，
   React Native 基于 dom 树绘制修改原生组件，性能的瓶颈也在于此；
第三，Dart 支持静态监测，可以在编译前发现很多编译问题，排除潜在问题（天生具备）
   而 React Native 则需要添加相关插件来做检测；
第四点，Flutter 可支持较复杂的动画，流畅度方面表现高于 React Native。

第一，不支持反射，无法在运行时动态修改类的行为；
第二，线上发布代码，无法热更新；
第三，Dart 相关社区目前还不是很完善，有待大家共同完善社区；
第四，相关开发工具支持的力度还不是很成熟；
第五，刚上手的开发者需要避免地狱嵌套这种模式，需要多注意控件的状态管理。
第六，Dart 的空安全，在升级版本的时候，需要重新适配，比较头大

4.
1、首屏渲染问题。采用JS Bundle拆包解决。
2.图片上云   react-native-bundle-visualizer react-native-fast-image
3.缓存，有的数据需要缓存
4、延迟加载。减少图片资源,图片地址 cdn 化抽离公共包
6、响应速度。由于js是单线程，当在执行一些计算量很大的任务时可能会造成堵塞卡顿现象。
  此时可以将任务稍微延后执行，避免大量任务在同一个js 事件循环中导致其他任务无法执行。
  相应的方法有InteractionManager,requestAnimationFrame,setTimeOut(0)等，原理都大同小异
7、刷新问题。每次setState导致的render都会进行一次内存中diff计算，尽管diff效率很高(O(n))，但是还是应该避免不必要的diff。
  Pure组件、自定义shouldComponentUpdate实现避免不必要的刷新

9、FlatList的优化。
一、减少 re-render shouldComponentUpdate
React.memo React.PureComponent React.useMemo 和 React.useCallback
React Fragments
FlatList：使用 VirtualizedList，
useNativeDrive: true 开启原生动画驱动。  

react-devtools 

【React Native】深入理解Native与RN通信原理 https://blog.csdn.net/weixin_36185028/article/details/121579850

https://cloud.tencent.com/developer/article/1113848

NativeModules
native调用js  js调用naitve

RN系列：Android原生与RN如何交互通信
https://www.jianshu.com/p/79edec250158 🔥🔥🔥🔥🔥🔥🔥

方法调用
RN通信原理简单地讲就是，一方native（java）将其部分方法注册成一个映射表，另一方（js）再在这个映射表中查找并调用相应的方法，而Bridge担当两者间桥接的角色。
其实方法调用大致分为2种情况：

Android主动向JS端传递事件、数据
JS端主动向Android询问获取事件、数据
RN调用Android需要module名和方法名相同，而Android调用RN只需要方法名相同。
（1）RCTDeviceEventEmitter 事件方式
​ 优点：可任意时刻传递，Native主导控制。
（2）Callback 回调方式
​ 优点：JS调用，Native返回。
​ 缺点：CallBack为异步操作，返回时机不确定
（3）Promise
​ 优点：JS调用，Native返回。
​ 缺点：每次使用需要JS调用一次
（4）直传常量数据（原生向RN）
​ 跨域传值，只能从原生端向RN端传递。RN端可通过 NativeModules.[module名].[参数名] 的方式获取。

1.原生调用RN
下面是RCTDeviceEventEmitter事件的简单事例，稍后封装下更方便与原生的通信交互。
public class EventEmitter {
  private static final String TAG = "EventEmitter";
// 在ReactPackage中的createNativeModules()初始化,RNEventEmitter.setReactContext(reactContext);
  private static ReactApplicationContext mReactContext;

  public static void setReactContext(ReactApplicationContext mReactContext) {
      RNEventEmitter.mReactContext = mReactContext;
  }
  /**
   * 显示RN中loading
   * @param data show:显示，false:隐藏
 */
public static void showLoading(boolean show) {
    sendEventToRn("showloading", show);
}
public static void sendEventToRn(String eventName, Object msg) {
    if (mReactContext == null) {
        Log.e(TAG, "ReactContext is null");
        return;
    }
    mReactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
          .emit(eventName,msg);
  }
}
RN中接收原生消息：
 /**
  * 接收原生调用
  */
  componentDidMount() {
    DeviceEventEmitter.addListener('showLoading',(msg)=>{
         ToastAndroid.show("发送成功"+msg, ToastAndroid.SHORT);
    })
    //通过DeviceEventEmitter注册监听，类似于Android中的监听事件。第一个参数标识名称，要与Module中emit的Event Name相同。第二个参数即为处理回调时间。
  }


RN调用原生
  'use strict';

  import React, { Component } from 'react';
  import {
    AppRegistry,
    StyleSheet,
    Text,
    NativeModules,
    View,
    ToastAndroid,
    DeviceEventEmitter
  } from 'react-native';
  
  let title = 'React Native界面';
  
  class reactNative extends Component {
      /**加载完成*/
      componentWillMount() {
        let result = NativeModules.MyNativeModule.Constant;
        console.log('原生端返回的常量值为：' + result);
      }
     /**
      * 原生调用RN
      */
     componentDidMount() {
         DeviceEventEmitter.addListener('nativeCallRn',(msg)=>{
              title = "React Native界面,收到数据：" + msg;
              ToastAndroid.show("发送成功", ToastAndroid.SHORT);
         })
     }
  
    /**
     * RN调用Native且通过Callback回调 通信方式
     */
     callbackComm(msg) {
         NativeModules.MyNativeModule.rnCallNativeFromCallback(msg,(result) => {
         ToastAndroid.show("CallBack收到消息:" + result, ToastAndroid.SHORT);
      })
     }
  
     /**
      * RN调用Native且通过Promise回调 通信方式
      */
     promiseComm(msg) {
         NativeModules.MyNativeModule.rnCallNativeFromPromise(msg).then(
          (result) =>{
              ToastAndroid.show("Promise收到消息:" + result, ToastAndroid.SHORT)
          }
      ).catch((error) =>{console.log(error)});
  }
  
    /**
     * 调用原生代码
     */
     call_button(){
            NativeModules.MyNativeModule.rnCallNative('调用原生方法操作');
     }
  
    callNative(){
         NativeModules.MyNativeModule.startActivityRN('com.liujc.rnappdemo.MyRNActivity','test');
    }
  
   render() {
        return ( 
      <View style={styles.container}>
            <Text style={styles.welcome} >
             {title}
            </Text>
  
            <Text style={styles.welcome}
            onPress={this.call_button.bind(this)}
            >
              React Native 调用原生方法操作!
            </Text>
  
           <Text style={styles.welcome}
                  //给此处的文字绑定一个事件，其中callNative为要调用的方法名。
                    onPress={this.callNative.bind(this)}>
                    跳转MyRNActivity!
            </Text>
  
           <Text style={styles.welcome} onPress={this.callbackComm.bind(this,'callback发送啦')}>
              Callback通信方式
           </Text>
           <Text style={styles.welcome} onPress={this.promiseComm.bind(this,'promise发送啦')}>
              Promise通信方式
           </Text>
       </View>
      );
     }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  
  AppRegistry.registerComponent('reactNative', () => reactNative);
  


React Native 与原生平台的通信原理
• React Native 平台调用原生平台基于 NativeModules， 调用的方法是 NativeModules.
模块名称.接口名称。
· 原生平台返回数据到 React Native 平台基于回调 ， 回调的原型定义是 RCTResponse
SenderBlock (iOS平台)和 com.facebook.react.bridge.Callback (Android平台)。

React Native 平台调用原生页面
RN调用react UI requireNativeComponent


原生平台调用React Native组件
RN需要注册根组件  native运行注册过的根组件
https://blog.csdn.net/kangguang/article/details/78307342