React小技巧汇总
https://juejin.cn/post/6844903890467454989

React 性能优化 | 包括原理、技巧、Demo、工具使用
https://juejin.cn/post/6935584878071119885

懒渲染的实现中判断组件是否出现在可视区域内是通过 react-visibility-observer 进行监听 ==========================
https://juejin.cn/post/6935584878071119885

【万字】手把手搭建Webpack5 + React18 + TS脚手架
https://juejin.cn/post/7159867090600460325
介绍npm包的发布流程。
教你如何搭建一个简单的webpack5项目。
配置一个ts + react18项目脚手架。
如何分析并优化webpack配置。
代码规范化，提交规范化
手写loader、plugin等。


React-Router实现项目中的路由权限 chatgpt

如何在 React 项目中动态设置环境变量
https://juejin.cn/post/7222897518501773367?
npm install dotenv --save-dev


如何使用React Testing Library和Jest测试React应用
https://juejin.cn/post/6886680584874934280


离开页面前，如何防止表单数据丢失？
https://juejin.cn/post/7226387497566535740?utm_source=gold_browser_extension

react有类似于vue的keep-alive吗
在React中，没有像Vue的keep-alive这样的内置组件，但可以通过其他方式实现类似的功能。以下是几种实现方式：
使用React-Router的路由缓存
React-Router可以通过Route组件的render属性或children属性来渲染组件，而不是像component属性一样每次都重新渲染。通过在Route组件上设置key属性，并且保证当前key不变，就可以实现路由组件的缓存。
JSX
复制
<Route path="/home" key="home" render={() => <Home />} />
<Route path="/about" key="about" render={() => <About />} />
<Route path="/contact" key="contact" render={() => <Contact />} />
当在组件切换的时候，Route组件不再是重新渲染，而是直接展示缓存的组件。
使用React的React.memo和useMemo方法
使用React.memo可以缓存组件的渲染结果，当组件的props和状态没有改变时，直接使用上一次的结果，不再重渲染组件。同时，可以使用useMemo来缓存组件的状态，保证在组件重新渲染时，状态的值不变。
JSX
复制
import React, { useState, useMemo } from 'react';

function Component(props) {
  ...
}

export default React.memo(Component);
JSX
复制
const cachedState = useMemo(() => ({ /* cached state */ }), []);
使用第三方组件
也可以使用第三方组件来实现缓存组件的功能，如react-keeper、react-cache-routing等。这些库都是基于React-Router实现的，可以通过缓存组件的方式来提高应用的性能。
综上，虽然React没有像Vue的keep-alive这样的内置组件，但可以通过React-Router、React.memo和第三方库等方式来实现缓存组件的功能，提高应用的性能。



react-keeper如何使用
React-Keeper是React路由库，它与React-Router类似，但具有更好的性能和更多的功能。下面是React-Keeper的使用方法：
安装react-keeper
TXT
复制
npm install react-keeper --save
在主文件中引入react-keeper
JSX
复制
// index.js
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-keeper';
import App from './App';

const root = document.getElementById('root');

render((
  <Router>
    <Route path="/" component={App} />
  </Router>
), root);
Router是整个应用的根组件，而Route组件则定义了每一个页面的路由。这里使用BrowserRouter作为基础路由器。
定义页面模块
在App组件中定义以路由为页面的组件:
JSX
复制
// App.js
import React from 'react';
import { Route, Link } from 'react-keeper';

const Home = (props) => {
  return (
    <div>
      <h2>Welcome to Home!</h2>
      <Link to="/about">About</Link>
    </div>
  );
}

const About = (props) => {
  return (
    <div>
      <h2>Welcome to About!</h2>
      <Link to="/">Home</Link>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
每个页面都是一个组件，React-Keeper提供了一些自带的组件，如Route、Link、Keeper等，这些组件可以很方便地实现路由切换和组件缓存等功能。
页面跳转
可以使用Link组件实现路由跳转：
JSX
复制
<Link to="/about">About</Link>
此外，还可以使用keeper.go(path)方法实现编程式跳转：
JSX
复制
import { keeper } from 'react-keeper';

keeper.go('/about');
设置页面缓存
React-Keeper可以很方便的设置页面缓存，这个缓存是基于组件的，使用Keeper组件即可：
JSX
复制
import React from 'react';
import { Route, Link, Keeper } from 'react-keeper';

const Home = (props) => {
  return (
    <div>
      <h2>Welcome to Home!</h2>
      <Link to="/about">About</Link>
    </div>
  );
}

const About = (props) => {
  return (
    <div>
      <h2>Welcome to About!</h2>
      <Link to="/">Home</Link>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Keeper>
        <Route cache path="/" component={Home} />
        <Route cache path="/about" component={About} />
      </Keeper>
    </div>
  );
}

export default App;
上面的例子中使用了Keeper组件将Route组件包裹，然后在Route组件上设置了cache属性，就可以实现组件的缓存。
以上是React-Keeper的基本使用方法。除了以上提到的功能之外，React-Keeper还支持路由权限控制、路由参数传递等。


react有类似于vue的keep-alive吗，可以缓存组件吗
React没有类似于Vue的keep-alive组件，但是你可以使用第三方库实现类似的功能。
其中一个比较流行的库是“react-keeper”，它提供了一个“Keeper”组件，可以缓存之前渲染过的组件，并在之后再次使用相同的组件时直接从缓存中读取，而不是重新渲染组件。
另外还有一些其他的库如“react-cache”，“react-lazyload”，“react-loadable”等等，都可以用来实现类似的功能。
需要注意的是，在实现缓存的过程中需要考虑到组件的状态管理，例如如果之前的组件状态已经改变，那么可能需要重新渲染。另一方面，缓存组件可能会使得应用程序的内存占用变得更高，因此需要权衡利弊。


forwardRef https://juejin.cn/post/6950063294270930980
官网对forwardRef的概念和用法很笼统，也没有给定一个具体的案例。很多同学不知道 forwardRef具体怎么用，
下面我结合具体例子给大家讲解forwardRef应用场景。
1 转发引入Ref

这个场景实际很简单，比如父组件想获取孙组件，某一个dom元素。这种隔代ref获取引用，就需要forwardRef来助力。
2 高阶组件转发Ref

一文吃透hoc文章中讲到，由于属性代理的hoc，被包裹一层，所以如果是类组件，是通过ref拿不到原始组件的实例的，不过我们可以通过forWardRef转发ref。


十分钟使用useContext实现简单的多语言切换
https://juejin.cn/post/7237746910139498533?utm_source=gold_browser_extension


通俗易懂知React实现keep-alive原理，看不懂不要赞
https://juejin.cn/post/7242969515344789565?utm_source=gold_browser_extension


🤮是时候放弃useState了，🚀这么写React更丝滑🚀
https://juejin.cn/post/7246777363257475129

前端实现文件预览（pdf、excel、word、图片）
https://juejin.cn/post/7246609845272395837

React项目中最全面多语言解决方案
https://juejin.cn/post/7248896036709204025?utm_source=gold_browser_extension



Vue和React对比学习之路由拦截鉴权
https://juejin.cn/post/7249794087075446842?utm_source=gold_browser_extension


让你 React 组件水平暴增的 5 个技巧
https://juejin.cn/post/7252589598151458877?utm_source=gold_browser_extension


浅谈 React 中的 XSS 攻击
http://zoo.zhengcaiyun.cn/blog/article/xss-in-react


React&Vue 系列：vue 我有插槽，react 我也有插槽
https://juejin.cn/post/7261909946299056187?utm_source=gold_browser_extension

简单实现React KeepAlive不依赖第三方库(附源码)
https://juejin.cn/post/7273434821807636515?utm_source=gold_browser_extension



React 中的状态自动保存（KeepAlive）
https://juejin.cn/post/6844903942522929160

React-Route6实现keep-alive效果
https://juejin.cn/post/7112316129645133838

React实现组件KeepAlive的方法
https://juejin.cn/post/7114320931945873421


react 如何修改ant-design的样式
https://www.jianshu.com/p/4882884d2894
<div className={styles.tabs}>
<Tabs  
        onChange={(key) => this.onChange(key,'leftNavSource')}
        activeKey={'0'}
        type="editable-card"
        onEdit={(targetKey, action) => this.onEdit('leftNavSource', targetKey, action)}
        hideAdd 
      >
        {panes.map(pane => <TabPane
          tab={pane.title === '---' ? this.handleGetMenuNameByPath(pane.key, leftNavSource) : pane.title}
          key={pane.key}
          closable={panes.length !== 1}
        >{pane.content}</TabPane>)}
      </Tabs>
</div>

样式代码--加上 :global即可

.tabs {
  flex: 1;
  height: 3.2em;
  line-height: 2.5em;
  color: @light-text-color;
  padding: 0 16px;
  position: relative;
  .ellipsis; 
  
  :global(.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active){
      background-color: #1B98E0;
      color:#fff;
  }
  :global(.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active.ant-tabs-tab .ant-tabs-close-x){
    color: #fff;
  }  
} 
