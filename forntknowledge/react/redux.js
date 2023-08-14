从 Redux 说起，到手写，再到状态管理 
https://juejin.cn/post/7081909025159249956  

React核心用法系统梳理
https://juejin.cn/post/7099028351511167013

Redux 技术分享
https://juejin.cn/post/6978111642970259487

开发 Redux 中间件
开发中间件的模板代码：
export default store => next => action => {}

开发一个中间件：
const logger = store => next => action => {
  console.log(store)
  console.log(action)
  next(action) // 千万别忘了调用 next(action)，不然整个流程则会卡在此处
}
export default logger
中间件在开发完成以后只有被注册才能在 Redux 的工作流程中生效：
// src/store/index.js
import { createStore, applyMiddleware } from 'redux'
import logger from './middlewares/logger'

createStore(reducer, applyMiddleware(
  logger
))
如果注册多个中间件，中间件的执行顺序就是注册顺序：
// 先执行logger中间件，再执行test中间件
createStore(reducer, applyMiddleware(
  logger,
  test
))
  
链接：https://juejin.cn/post/7063073677520142366

30张图全面剖析React Hooks 🔥🔥🔥==========
https://juejin.cn/post/7064097257821306916   

剖析react-redux原理以及手写实现
https://juejin.cn/post/7010687960731353095

Redux持久化插件-解决刷新页面数据丢失问题  
https://juejin.cn/post/6885907913265971208

React全家桶之整合redux-persist
https://www.jianshu.com/p/d627e8428e56


react-redux 是如何集成到 UI 的？
react-redux 提供了两个主要的组件 Provider 和 connect，它们用于将 Redux 状态管理与 React 组件相结合。
首先，使用 Provider 组件将 Redux store 传递给整个应用程序。可以将 <Provider> 组件作为最高层的组件，这样在应用程序中的所有组件中都可以访问到 Redux store。
下一步，使用 connect 函数连接 Redux store 和组件。connect 函数是一个高阶函数，它接收两个参数：mapStateToProps 和 mapDispatchToProps，并返回另一个函数，
这个函数接受一个组件作为参数，并返回一个增强版的组件。
mapStateToProps 函数用于从 Redux store 中获取需要的 state 数据，并将其映射到组件的 props 上。mapDispatchToProps 函数用于将 action creator 映射到组件的 
props 上，这样组件就可以直接调用 action creator 发起 action，而不需要手动分发 dispatch。
使用 connect 函数生成的增强版组件可以访问到 Redux store 中的 state 和 dispatch，并将它们作为 props 传递给原始组件。在组件中，可以直接使用这些 props 来获取和更
新 state，以及发起 action。当组件中的 state 或 props 发生变化时，connect 函数会自动更新组件，以反映最新的 state 和 props。
通过这种方式，react-redux 让我们可以在 React 组件中使用 Redux 进行状态管理，实现了 Redux 和 React 的无缝集成。
简单写一下更新 UI 核心代码实现
react-redux 是基于 React 和 Redux 的，主要用于将 Redux 的状态管理功能集成到 React 应用程序中。它主要包括两个部分：Provider 和 connect。
Provider 组件是 react-redux 的核心，它将 Redux 的 store 作为 props 传递给 React 组件，并通过 React 的上下文（Context）使得后代组件能够访问到 store。
connect 函数用于连接 React 组件与 Redux store，返回一个新的组件。该函数的主要作用是在组件中提供 mapStateToProps 和 mapDispatchToProps 函数，从而使组件能够从 
Redux store 中读取数据，并向 store 分发 action。
下面是一个简单的实现，用于说明 react-redux 是如何集成到 UI 的：
javascript复制代码// Provider.js
import React from 'react';
import PropTypes from 'prop-types';

export const StoreContext = React.createContext();

export default function Provider(props) {
  const { store, children } = props;
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
}

Provider.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.any,
};

// connect.js
import React from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from './Provider';

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function wrapWithConnect(WrappedComponent) {
    class Connect extends React.Component {
      componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(this.handleChange.bind(this));
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      handleChange() {
        this.forceUpdate();
      }

      render() {
        const { store } = this.context;
        const props = {
          ...this.props,
          ...mapStateToProps(store.getState(), this.props),
          ...mapDispatchToProps(store.dispatch, this.props),
        };
        return <WrappedComponent {...props} />;
      }
    }

    Connect.contextType = StoreContext;
    Connect.propTypes = {
      store: PropTypes.object,
    };
    Connect.displayName = `Connect(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return Connect;
  };
}

这里的 Provider 组件用于将 Redux 的 store 传递给 React 组件：
javascript复制代码import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

而 connect 函数用于将 React 组件连接到 Redux store：
javascript复制代码import React from 'react';
import { connect } from 'react-redux';
import { increment } from './actions';

function Counter(props) {
  const { count, increment } = props;
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => increment()}>+</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

作者：yanlele
链接：https://juejin.cn/post/7217436082144395321
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 



面试官：熟悉 redux 是吧？要不手写一个？
https://juejin.cn/post/7241487780464001061?utm_source=gold_browser_extension