
react Hooks 按需更新 =====================================gpt
React Hooks 允许我们按需更新组件。这意味着我们可以决定仅在某些 state 或属性（props）发生更改时才重新渲染组件。

在类组件中，我们可以使用 shouldComponentUpdate() 或 PureComponent，这些很容易理解和实现，但这些技术在函数组件中并不适用。
为了解决这个问题，React Hooks 提供了两个 Hook：React.memo() 和 useCallback()，同时还有一个 useMemo()。

React.memo()
React.memo() 是一个高阶组件（higher-order component），它类似于 PureComponent，但是它用于函数组件而不是类组件。
当组件的 props 发生更改时，React.memo() 会比较前后两个 props 是否相等。如果 props 相等，则不会重新渲染组件。

使用 React.memo() 很简单，只需要像这样包装组件即可：
import React from 'react';

function MyComponent(props) {
  // do something with props...
}

export default React.memo(MyComponent);
现在，只有当 MyComponent 的 props 发生更改时才会重新渲染这个组件。

useCallback()
useCallback() 是一个 Hook，它可以在组件重新渲染时缓存一个函数回调。这意味着我们可以控制什么时候创建一个新的函数回调。
如果你的组件需要传递一个回调函数给子组件，而这个回调函数的代码在父组件中会重新生成，这时使用 useCallback() 可以避免子组件不必要地重新渲染。

使用 useCallback() 的语法如下：
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
其中，第一个参数是要缓存的回调函数，第二个参数是依赖数组，只有当该数组中的变量发生更改时，才会重新创建函数回调。

下面是一个例子，展示了如何使用 useCallback() 来防止子组件不必要地重新渲染：

import React, { useCallback, useState } from 'react';
import Button from './Button';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}
在上面的代码中，每当 count 变化时，ParentComponent 会重新渲染。但是，由于 increment() 函数使用了 useCallback() 缓存，所以每次重新渲染时，increment() 函数都是相同的，因此子组件 Button 不需要重新渲染。

useMemo()
useMemo() 是一个 Hook，它允许我们缓存计算结果。它可以在计算开销较大的场景下提高性能。
使用 useMemo() 的语法如下：
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
其中，第一个参数是计算结果的函数，第二个参数是依赖数组，只有当该数组中的变量发生更改时，才会重新计算值。

下面是一个例子，展示了如何使用 useMemo() 缓存计算结果：

import React, { useMemo, useState } from 'react';

function ExpensiveComponent(props) {
  const { valueA, valueB } = props;
  const expensiveValue = useMemo(() => {
    // do some expensive computation...
    return valueA + valueB;
  }, [valueA, valueB]);
  return <div>Expensive value: {expensiveValue}</div>;
}

function ParentComponent() {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(10);

  return (
    <div>
      <button onClick={() => setValueA((prevValue) => prevValue + 1)}>Increment A</button>
      <button onClick={() => setValueB((prevValue) => prevValue - 1)}>Decrement B</button>
      <ExpensiveComponent valueA={valueA} valueB={valueB} />
    </div>
  );
}
在上面的代码中，当 valueA 或 valueB 发生更改时，ExpensiveComponent 会重新计算 expensiveValue 的值。但是，
由于 expensiveValue 是使用 useMemo() 缓存的，所以只有当 valueA 或 valueB 发生更改时，才会重新计算 expensiveValue 的值。这大大减少了计算开销，提高了性能。
综上所述，使用 React.memo()、useCallback() 和 useMemo() 可以实现按需更新组件，提高 React 应用的性能。 


美丽的公主和它的27个React 自定义 Hook
https://juejin.cn/post/7292601783725424681?utm_source=gold_browser_extension#heading-19

  

React 面试题: 不一定最全但绝对值得收藏！！(11 ~ 20)（万字总结）
https://juejin.cn/post/7292584449526071305?utm_source=gold_browser_extension 