react hooks有类组件的ErrorBoundary捕获错误吗 ================== gpt
React Hooks 本身不包含类似于类组件的 ErrorBoundary 的功能，但是我们可以将它们与一些其他的 React Hooks 结合使用，以类似于 ErrorBoundary 的方式捕获错误并处理错误。
一种常用的捕获错误的技术是使用 useErrorBoundary 自定义 Hook。下面是一个示例：
import { useState, useEffect } from 'react';

function useErrorBoundary() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    function errorHandler(error) {
      console.error(error);
      setHasError(true);
    }
    window.addEventListener('error', errorHandler);
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  return hasError;
}

上面的代码中，useErrorBoundary 自定义 Hook 会设置一个 hasError 状态，并且在组件自身实现的 useEffect 函数中添加一个错误处理函数。如果发生任何错误，该处理函数将触发，并设置 hasError 状态为 true。然后，我们可以使用 hasError 状态来控制错误的渲染。
使用 useErrorBoundary 自定义 Hook 的示例：
function MyComponent() {
  const hasError = useErrorBoundary();

  if (hasError) {
    return <div>Something went wrong.</div>;
  }
  // 如果组件没有错误, 继续正常渲染
  return <div>This is a normal component.</div>;
}

这样，当 MyComponent 中的任何子组件发生错误时，useErrorBoundary Hook 会捕获它并设置 hasError 状态，然后根据 hasError 状态来渲染错误 UI 或正常 UI。
需要注意的是，这种捕获错误的方法只能捕获运行时错误，并不能捕获语法错误或编译错误。此外，在捕获错误时，可以通过适当的错误处理方式来处理错误信息，并防止应用崩溃。



【React】万字长文！100+个让你事半功倍的常用 React Hooks 和工具包
https://juejin.cn/post/7196943285381464101#heading-29  