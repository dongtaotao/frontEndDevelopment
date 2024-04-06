6. 当props改变，你需要随之改变state中的值的时候，直接在组件里改变状态，而非在副作用函数里
https://juejin.cn/post/7299709109880127507?utm_source=gold_browser_extension
// 🛑 WRONG
function List({ items }) {
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    setSelection(null);
  }, [items]);
  //...
}

// 🟢 RIGHT
function List({ items }) {
  const [prevItems, setPrevItems] = useState(items);
  const [selection, setSelection] = useState(null);

  if (items !== prevItems) {
    setPrevItems(items);
    setSelection(null);
  }
  //...
}



React hooks实现生命周期函数
https://juejin.cn/post/7310151273005383691?utm_source=gold_browser_extension
React hooks实现生命周期函数
类组件的生命周期函数
Hooks 实现生命周期函数功能
1. 实现 componentDidMount 和 componentWillUnmount
2. 实现 shouldComponentUpdate
3. 实现 componentDidUpdate
4. 实拟 getSnapshotBeforeUpdate
5. 实拟 componentDidCatch
结论



props 的变动，是否会引起 state hook 中数据的变动？
React 组件的 props 变动，会让组件重新执行，但并不会引起 state 的值的变动。state 值的变动，只能由 setState() 来触发。
因此若想在 props 变动时，重置 state 的数据，需要监听 props 的变动，如：
const App = props => {
  const [count, setCount] = useState(0);

  // 监听 props 的变化，重置 count 的值
  useEffect(() => {
    setCount(0);
  }, [props]);

  return <div onClick={() => setCount(count + 1)}>{count}</div>;
};



useImperativeHandle
useImperativeHandle 可以配合 forwardRef自定义暴露给父组件的实例值。这个很有用，我们知道，对于子组件，如果是class类组件，
我们可以通过ref获取类组件的实例，但是在子组件是函数组件的情况，如果我们不能直接通过ref的，那么此时useImperativeHandle和 forwardRef配合就能达到效果。



react 父组件是hooks组件，自组件也是hooks组件，父组件怎么通过ref调用子组件里面的方法和属性，给一个详细的demo ============================================
在React中，你可以使用useRef和forwardRef来创建一个ref并将其传递给子组件，以便在父组件中调用子组件的方法和访问其属性。以下是一个简单的示例：
import React, { useRef, useEffect, forwardRef } from 'react';

// 子组件
const ChildComponent = forwardRef((props, ref) => {
  const childMethod = () => {
    console.log('子组件方法被调用');
  };

  useEffect(() => {
    // 在组件加载时执行
    console.log('子组件加载');
    // 这里将子组件的方法传递给ref
    ref.current = {
      childMethod,
    };
    // 卸载时执行清理
    return () => {
      console.log('子组件卸载');
    };
  }, [ref]);

  return <div>子组件</div>;
});

// 父组件
const ParentComponent = () => {
  // 创建一个ref用于引用子组件
  const childRef = useRef();

  // 父组件中的方法，用于调用子组件的方法
  const callChildMethod = () => {
    if (childRef.current && childRef.current.childMethod) {
      // 调用子组件的方法
      childRef.current.childMethod();
    }
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={callChildMethod}>调用子组件方法</button>
    </div>
  );
};

export default ParentComponent;

在这个例子中：

1.ChildComponent 使用 forwardRef 包装，以便接收一个 ref 参数。
2.在 useEffect 中，子组件的方法被赋值给传递给子组件的 ref。
3.在 ParentComponent 中，我们创建一个 childRef 用于引用子组件。
4.当点击按钮时，调用了 callChildMethod 方法，该方法检查 childRef.current.childMethod 是否存在，如果存在则调用子组件的方法。

这样，你就能够在父组件中通过 ref 调用子组件的方法。请注意，使用 ref 可能会导致一些副作用，因此确保在合适的生命周期内使用它们。



为什么你不可以直接用ref.子组件的方法呢，class组件就可以直接使用呀，现在为什么用forwardRef包裹一下子组件呢==================
在函数式组件中，通过 ref 直接访问子组件的方法并不是默认的行为。这是因为函数式组件本身没有实例，因此不能像类组件那样直接通过 ref 访问实例方法。
使用 forwardRef 是为了解决这个问题。forwardRef 可以让你在函数式组件中获得对子组件的 ref 引用，以便在父组件中访问子组件的属性和方法。
通过 forwardRef，你可以显式地将 ref 传递给函数式组件中的 DOM 元素或子组件，使得函数式组件可以被父组件通过 ref 引用，进而访问其内部的方法和属性。这种方式使得函数式组件能够具有类似类组件的访问子组件实例方法的能力。
因此，当你需要在函数式组件中访问子组件的方法和属性时，需要使用 forwardRef 来显式地传递 ref，以便在父组件中通过 ref 访问子组件的实例。


是的，useImperativeHandle 是另一种用于暴露从子组件到父组件的实例值的方式。它通常与 forwardRef 一起使用。 useImperativeHandle 允许你显式地控制子组件暴露给父组件的内容，以避免不必要的信息泄露。
下面是一个使用 useImperativeHandle 的例子：
import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

// 子组件
const ChildComponent = forwardRef((props, ref) => {
  const internalMethod = () => {
    console.log('子组件方法被调用');
  };

  // 使用 useImperativeHandle 暴露方法给父组件
  useImperativeHandle(ref, () => ({
    childMethod: internalMethod,
  }));

  useEffect(() => {
    // 组件加载时执行
    console.log('子组件加载');
    // 卸载时执行清理
    return () => {
      console.log('子组件卸载');
    };
  }, []);

  return <div>子组件</div>;
});

// 父组件
const ParentComponent = () => {
  // 创建一个ref用于引用子组件
  const childRef = useRef();

  // 父组件中的方法，用于调用子组件的方法
  const callChildMethod = () => {
    if (childRef.current && childRef.current.childMethod) {
      // 调用子组件的方法
      childRef.current.childMethod();
    }
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={callChildMethod}>调用子组件方法</button>
    </div>
  );
};

export default ParentComponent;

在这个例子中，useImperativeHandle 接受两个参数，第一个是 ref 对象，第二个是一个函数，该函数返回一个对象，其中包含要暴露给父组件的方法。这样，childMethod 就会被父组件通过 ref 访问到。



React hooks实现生命周期函数
https://juejin.cn/post/7310151273005383691
React hooks实现生命周期函数
类组件的生命周期函数
Hooks 实现生命周期函数功能
1. 实现 componentDidMount 和 componentWillUnmount
2. 实现 shouldComponentUpdate
3. 实现 componentDidUpdate
4. 实拟 getSnapshotBeforeUpdate
5. 实拟 componentDidCatch
结论



React性能优化实战，解决不必要的重新渲染
https://juejin.cn/post/7316321509856755752?utm_source=gold_browser_extension
React.memo
用途：用于函数组件，通过对比组件的 props 变化来避免不必要的重新渲染。
useMemo
用途：用于记忆化计算结果，避免在每次渲染时都重新计算。
useCallback 
用途：用于记忆化回调函数，避免在每次渲染时都重新创建回调。 
