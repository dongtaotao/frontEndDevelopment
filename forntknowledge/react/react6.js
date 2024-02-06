SetState是同步还是异步的
setState是一个异步方法，但是在setTimeout/setInterval等定时器里逃脱了React对它的掌控，变成了同步方法
实现机制类似于vue的$nextTick和浏览器的事件循环机制，每个setState都会被react加入到任务队列，多次对同一个state使用setState只会返回最后一次的结果，
因为它不是立刻就更新，而是先放在队列中，等时机成熟在执行批量更新。React18以后，使用了createRoot api后，所有setState都是异步批量执行的
链接：https://juejin.cn/post/7182382408807743548

Braft Editor
美观好用的React富文本编辑器
https://braft.margox.cn/


在React中调用getDerivedStateFromProps内部的方法,如果传入的props有变化，这时候我想调用一个方法，怎么实现 =======================================gpt
在React组件中，当组件的props或state发生变化时，React会根据变化更新组件及其子组件。getDerivedStateFromProps是一个静态方法，用于更新组件的state。
当props变化时，React会先调用getDerivedStateFromProps方法，然后再更新组件的state和视图。
如果想在getDerivedStateFromProps方法中调用一个方法，可以在组件定义时添加一个成员方法，然后在getDerivedStateFromProps中调用该方法。例如：
class MyComponent extends React.Component {
  state = {
    derivedValue: null
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.someProp !== prevState.someProp) {
      // 如果props有变化，调用myMethod方法
      MyComponent.prototype.myMethod.call(this, nextProps);
      // 返回新的state对象
      return {
        derivedValue: nextProps.someProp
      }
    }
    // 如果props没有变化，返回null以保持state不变
    return null;
  }

  myMethod = (props) => {
    // 在这里可以调用任何方法处理props变化
    console.log('Props changed:', props);
  }

  render() {
    return (
      <div>{this.state.derivedValue}</div>
    )
  }
}

在上面的代码中，我们在MyComponent组件中定义了一个myMethod方法，可以在方法中处理props变化。在getDerivedStateFromProps方法中，
我们调用了myMethod方法，并根据props变化返回新的state对象。注意，在getDerivedStateFromProps方法中调用成员方法时，
需要使用MyComponent.prototype.myMethod.call(this, nextProps)的方式调用，其中的this指向当前组件的实例。


上面可不可以不使用MyComponent.prototype.myMethod.call这个方法===========================
在React组件中，我们可以定义成员方法并在组件内部调用它们。在getDerivedStateFromProps方法内部也可以直接调用该组件的成员方法，
而不必使用原型链的方式来调用。下面是一个示例代码：
class MyComponent extends React.Component {
  state = {
    derivedValue: null
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.someProp !== prevState.someProp) {
      // 如果props有变化，直接调用myMethod方法
      this.myMethod(nextProps);
      // 返回新的state对象
      return {
        derivedValue: nextProps.someProp
      }
    }
    // 如果props没有变化，返回null以保持state不变
    return null;
  }

  myMethod = (props) => {
    // 在这里可以调用任何方法处理props变化
    console.log('Props changed:', props);
  }

  render() {
    return (
      <div>{this.state.derivedValue}</div>
    )
  }
}
在上面的示例代码中，我们直接在getDerivedStateFromProps方法中调用了myMethod方法，而不使用MyComponent.prototype.myMethod.call的方式。
这种方式更加简洁、易读，也是React官方推荐的做法。


你上面的方法是不是有问题，在static静态方法里面是不可以获取到this的吧，你使用了 this.myMethod=====================

是的，您说得对。在静态方法中无法直接使用this关键字来引用组件的实例，因为静态方法是在组件类定义时就被定义的，而不是在组件实例化时创建的。
因此，使用this.myMethod在静态方法中将导致错误。
为了在函数组件中使用getDerivedStateFromProps方法中调用成员方法，需要将成员方法声明为静态方法，或使用箭头函数将其绑定到组件类上下文中。
例如，上面的示例可以改为以下形式：
import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    derivedValue: null
  };

  static myMethod(props) {
    console.log('Props changed:', props);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.someProp !== prevState.someProp) {
      MyComponent.myMethod(nextProps);
      return {
        derivedValue: nextProps.someProp
      };
    }
    return null;
  }

  render() {
    return (
      <div>{this.state.derivedValue}</div>
    );
  }
}

在上面的示例中，我们将myMethod方法声明为静态方法，并使用MyComponent.myMethod在getDerivedStateFromProps中调用它，而不使用this.myMethod。
这样做是因为静态方法是在组件类定义时创建的，可以直接使用类名来引用，而不需要一个实例来调用方法。
另一种方式是使用箭头函数，可以简单地将方法绑定到组件类的上下文中，以避免使用this关键字。示例代码如下：
import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    derivedValue: null
  };

  myMethod = (props) => {
    console.log('Props changed:', props);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.someProp !== prevState.someProp) {
      const component = new MyComponent();
      component.myMethod(nextProps);
      return {
        derivedValue: nextProps.someProp
      };
    }
    return null;
  }

  render() {
    return (
      <div>{this.state.derivedValue}</div> 
    );
  }
}

在上面的示例中，我们将myMethod方法定义为一个箭头函数，并在getDerivedStateFromProps中实例化一个MyComponent对象来调用它。
由于箭头函数绑定了组件类的上下文，因此可以在函数内部使用this来引用组件实例。
希望这可以解释上述问题，感谢您指出我的错误。 