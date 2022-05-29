
Vuex从使用到原理解析 https://zhuanlan.zhihu.com/p/78981485 
Vuex是通过全局注入store对象，来实现组件间的状态共享。

如何更好的使用module vuex？
https://juejin.cn/post/6844903807285985294

Vuex的设计思想 https://www.cnblogs.com/lguow/p/13753900.html
Vuex的设计思想，借鉴了Flux、Redux，将数据存放到全局的store，再将store挂载到每个vue实例组件中，利用Vue.js的细粒度数据响应机制来进行高效的状态更新。
看了Vuex设计思想，心里难免会有这样的疑问：

疑问1：vuex的store是如何挂载注入到组件中呢
分析源码，我们知道了vuex是利用vue的mixin混入机制，在beforeCreate钩子前混入vuexInit方法，
vuexInit方法实现了store注入vue组件实例，并注册了vuex store的引用属性$store。store注入过程如下图所示：

疑问2：vuex的state和getters是如何映射到各个组件实例中响应式更新状态呢
从上面源码，我们可以看出Vuex的state状态是响应式，是借助vue的data是响应式，将state存入vue实例组件的data中；
Vuex的getters则是借助vue的计算属性computed实现数据实时监听。

Vue 模板编译原理 https://www.cnblogs.com/wenshaochang123/p/14888494.html
Vue 的编译过程就是将 template 转化为 render 函数的过程，分为以下三步：
第一步是将 模板字符串转换成 element ASTs（解析器）
第二步是对 AST 进行静态节点标记，主要用来做虚拟 DOM 的渲染优化（优化器）
第三步是 使用element ASTs 生成 render 函数代码字符串（代码生成器）

生命周期钩子是如何实现的
Vue 的生命周期钩子核心实现是利用发布订阅模式先把用户传入的生命周期钩子订阅好（内部采用数组的方法存储）然后在创建组件实例的过程中会一次执行对应的钩子方法（发布）

diff算法采用同级比较。
1、tag 标签不一致直接新节点替换旧节点。
2、tag 标签一样。
    先替换属性
    对比子元素
3、无 tag 标签 -- 文本节点直接比较内容是否一致

双向绑定的原理是什么？https://www.cnblogs.com/wenshaochang123/p/14888494.html
理解 ViewModel
它的主要职责就是：
数据变化后更新视图，视图变化后更新数据
当然，它还有两个主要部分组成
监听器（Observer）：对所有数据的属性进行监听
解析器（Compiler）：对每个元素节点的指令进行扫描跟解析,根据指令模板替换数据,以及绑定相应的更新函数

最全的 Vue 面试题+详解答案 https://www.cnblogs.com/wenshaochang123/p/14888494.html

const a = {}
Object.defineProperty(a, 'nmae', {
    configurable: true,
    enumerable: true,
    get() {
    },
    set(name) { 
    }
})

五、Vuex原理
1. 说明
Vuex通过createStore创建了一个数据中心，然后通过发布-订阅模式来让订阅者监听到数据改变。
那么Vuex是怎么应用到Vue中的呢？
先来看一个在Vue中使用Vuex的简单例子：
import { createApp } from 'vue';
import App from './App.vue';
import {createStore} from 'vuex';
const store = createStore({
    state: {
      message: 'hello'
    },
    mutations: {
        change(state) {
            state.message = 'world';
        }
    }
});
createApp(App).use(store).mount('#app');
export default {
  name: 'App',
  computed: {
    info() {
        return this.$store.state.message;
    }
  },
  mounted() {
    this.$store.commit('change');
  }
}

可以看到，在Vue中使用Vuex，主要有3个关键步骤：

使用Vuex创建store，再将store注入Vue中。Vue组件中就可以通过this.$store来访问到store。
Vue使用computed获取$store中的状态。
Vue通过store.commit和store.action来修改状态。

那么我们需要问两个问题：
注入的原理是什么？为什么调用use()方法之后，就可以在组件通过$store来访问store了？
响应式原理是什么？为什么使用computed可以监听到store中的状态改变？
这两个是Vuex比较核心的两个原理。
2. 注入原理
store注入 vue的实例组件的方式，是通过vue的 mixin机制，借助vue组件的生命周期钩子beforeCreate 完成的。
Vue.mixin({
    beforeCreate() {
        if (this.$options && this.$options.store) {
            // 找到根组件 main 上面挂一个$store
            this.$store = this.$options.store;

        }
        else {
            // 非根组件指向其父组件的$store
            this.$store = this.$parent && this.$parent.$store;
        }
    }
});

3. Vuex响应式原理
Vuex使用vue中的reactive方法将state设置为响应式，原理和Vue组件的data设置为响应式是一样的。
// vuex/src/store-util.js
import {reactive} from 'vue';

store._state = reactive({
    data: state 
});

4. 总结 
Vuex是个状态管理器。
它Vuex通过createStore创建了一个数据中心，然后通过发布-订阅模式来让订阅者监听到数据改变。
Vuex的store注入 vue的实例组件的方式，是通过vue的 mixin机制，借助vue组件的生命周期钩子beforeCreate 完成的。这样Vue组件就能通过this.$store获取到store了。
Vuex使用vue中的reactive方法将state设置为响应式，这样组件就可以通过computed来监听状态的改变了。
链接：https://juejin.cn/post/7094778902815440903


23 Vuex 为什么要分模块并且加命名空间
模块:由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。为了解决以上问题，Vuex 
允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块。
命名空间：默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。
如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。
当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
链接：https://juejin.cn/post/6961222829979697165


Vuex 原理 https://www.yuque.com/baiyueguang-rfnbu/tr4d0i/xos4ss#mdIpu