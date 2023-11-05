componentWillReceiveProps用到了this，getDriverStateFromProps也要用，怎么办
gpt
class YourComponent extends React.Component {
  state = {
    someState: this.props.initialValue,
  };

  someMethod() {
    // 这是一个实例方法
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const instance = new YourComponent(nextProps); // 创建一个组件实例
    instance.someMethod(); // 调用实例方法

    if (nextProps.initialValue !== prevState.someState) {
      return { someState: nextProps.initialValue };
    }
    return null;
  }

  render() {
    // 渲染组件
  }
}

说下 React hooks 实现原理
A：闭包、Fiber、链表

Hooks 主要是利用闭包来保存状态，使用链表保存一系列 Hooks，将链表中的第一个 Hook 与 Fiber 关联。
在 Fiber 树更新时，就能从 Hooks 中计算出最终输出的状态和执行相关的副作用


//=============================
https://juejin.cn/book/6945998773818490884/section/6950659615675645990?enter_from=course_center&utm_source=course_center#heading-3
3 监听props改变
类组件中

① componentWillReceiveProps 可以作为监听props的生命周期，但是 React 已经不推荐使用 componentWillReceiveProps ，未来版本可能会被废弃，因为这个生命周期超越了 React 的可控制的范围内，可能引起多次执行等情况发生。于是出现了这个生命周期的替代方案 getDerivedStateFromProps ，在下一章节，会详细介绍 React 生命周期。

函数组件中

② 函数组件中同理可以用 useEffect 来作为 props 改变后的监听函数。(不过有一点值得注意, useEffect 初始化会默认执行一次)

React.useEffect(()=>{
    // props 中number 改变，执行这个副作用。
    console.log('props改变：' ，props.number  )
},[ props.number ])
