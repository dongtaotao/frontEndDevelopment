react router -- Hooks
https://blog.csdn.net/weixin_42260975/article/details/105239524
useHistory
useLocation
useParams
useRouteMatch
React-Router 的 Hooks 实现
https://www.jianshu.com/p/2f3d688bdd48

ReactRouter 路由 react-router 入门实践 
https://www.bilibili.com/video/BV1pF411b7r9?p=5&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

Vue路由权限配置详解
https://blog.csdn.net/qq_18840283/article/details/122689915  



react router有哪些Hooks，具体怎么使用=======================================================
React Router 提供了许多可用于 React 函数组件中的 React Hooks，这些 Hooks 可以帮助我们处理路由相关的任务，例如获取当前路由信息、导航、重定向等。

以下是 React Router 中常用的一些 Hooks：

useHistory
useHistory Hook 可以用来获取 history 对象，该对象可以用于编程式导航。

用法示例：
import { useHistory } from "react-router";

function MyComponent() {
  const history = useHistory();

  function handleClick() {
    history.push("/some-path"); // 导航到 /some-path 路径
  }

  return (
    <div>
      <button onClick={handleClick}>Go to some path</button>
    </div>
  );
}

useLocation
useLocation Hook 可以用于获取当前路由的 location 对象。

用法示例
import { useLocation } from "react-router";

function MyComponent() {
  const location = useLocation();

  return (
    <div>
      <h3>Current location: {location.pathname}</h3>
    </div>
  );
}

useParams
useParams Hook 可以帮助我们获取当前路由的参数。

用法示例：
import { useParams } from "react-router";

function MyComponent() {
  const { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

useRouteMatch
useRouteMatch Hook 可以帮助我们使用一个基本的路径和一组路由规则来匹配当前 URL。

用法示例：
import { useRouteMatch } from "react-router";

function MyComponent() {
  const match = useRouteMatch("/some-path/:id");

  if (!match) {
    return <div>No match for current URL.</div>;
  }

  const { id } = match.params;

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

useNavigate
useNavigate Hook 可以用于编程式导航，类似于 useHistory。但是，useNavigate 返回一个函数，该函数用于导航，具有更简洁的 API。

用法示例：
import { useNavigate } from "react-router";

function MyComponent() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/some-path"); // 导航到 /some-path 路径
  }

  return (
    <div>
      <button onClick={handleClick}>Go to some path</button>
    </div>
  );
}

还有许多其他的 React Router Hooks，如usePrompt、useBlockedNavigation、useSearchParams等，根据需要选择使用。 



如何实现 React Router 的路由鉴权 
https://juejin.cn/post/7297255203652419621?utm_source=gold_browser_extension