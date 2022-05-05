15 说一说keep-alive实现原理
http://interview.poetries.top/docs/simply.html#_14-vue-%E6%B8%B2%E6%9F%93%E8%BF%87%E7%A8%8B
keep-alive组件接受三个属性参数：include、exclude、max

include 指定需要缓存的组件name集合，参数格式支持String, RegExp, Array。当为字符串的时候，多个组件名称以逗号隔开。
exclude 指定不需要缓存的组件name集合，参数格式和include一样。
max 指定最多可缓存组件的数量,超过数量删除第一个。参数格式支持String、Number。
原理

keep-alive实例会缓存对应组件的VNode,如果命中缓存，直接从缓存对象返回对应VNode

LRU（Least recently used） 算法根据数据的历史访问记录来进行淘汰数据，其核心思想是“如果数据最近被访问过，那么将来被访问的几率也更高”。
(墨菲定律：越担心的事情越会发生)
https://leetcode-cn.com/problems/lru-cache/%EF%BC%8C%E8%80%83keep-alive%E7%AE%97%E6%B3%95%E7%9A%84%E6%97%B6%E5%80%99%E5%96%9C%E6%AC%A2%E9%97%AE/
实现 LRUCache 类：
LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。

class LRU {
    constructor(k) {
        this.max = max
        this.cache = new Map()
    }
    get(key) {
        const { cache } = this
        const value = cache.get(key)
        if (!value) return -1
        cache.delete(key)
        cache.set(key, value)
        return value
    }
    set(key, value) {
        const { cache, max } = this
        if (cache.has(key)) {
            cache.delete(key)
        }
        if (cache.size === max) {
            cache.delete(cache.keys().next().value)
        }
        cache.set(key, value)
    }
}

Vue 如何清除浏览器缓存？
项目打包的时候给每个打包文件加上 hash 值，一般是在文件后面加上时间戳； 
在 html 文件中加入 meta 标签，content属性设置为no-cache; 在后端服务器中进行禁止缓存设置。

50 说一下v-model的原理
v-model本质就是一个语法糖，可以看成是value + input方法的语法糖。 可以通过model属性的prop和event属性来进行自定义。原生的v-model，会根据标签的
不同生成不同的事件和属性

<input v-model='searchData'>
等价于

<input 
	v-bind:value = 'searchData'
	v-on:input = 'searchData = $event.target.value' 
>
当在input元素中使用v-model实现双数据绑定，其实就是在输入的时候触发元素的input事件，通过这个语法糖，实现了数据的双向绑定


47. 为什么Vuex要分为Action和Mutation，Mutation为啥只能是同步的？
区分 actions 和 mutations 并不是为了解决竞态问题，而是为了能用 devtools 追踪状态变化。
vuex 真正限制你的只有 mutation 必须是同步的，同步的意义在于这样每一个 mutation 执行完成后都可以对应到一个新的状态，这样 devtools 就可
以打个 snapshot 存下来，然后就可以随便 time-travel 了。
链接：https://juejin.cn/post/6905913905152065544 


Vue 如何清除浏览器缓存？
在HTTP协议中，只有后端返回 expires 或 Cache-Control:max-age=XXX， 前端才缓存。但在浏览器中，默认会对 html css js 等静态文件、以及重定向进行缓存，
最常用的方法就是，在打包的时候给每个打包文件加上hash 值，一般是在文件后面加上时间戳或者随机数
在脚本加载时加入一个时间戳，修改 webpack.prod.conf.js 文件。(未使用过该方法，需要实践)
链接：https://juejin.cn/post/7083444395747311630

Vue为什么没有类似于React中shouldComponentUpdate的生命周期？
根本原因是Vue与React的变化侦测方式有所不同
React是pull的方式侦测变化,当React知道发生变化后,会使用Virtual Dom Diff进行差异检测,但是很多组件实际上是肯定不会发生变化的,
这个时候需要用shouldComponentUpdate进行手动操作来减少diff,从而提高程序整体的性能.

Vue是pull+push的方式侦测变化的,在一开始就知道那个组件发生了变化,因此在push的阶段并不需要手动控制diff,
而组件内部采用的diff方式实际上是可以引入类似于shouldComponentUpdate相关生命周期的,但是通常合理大小的组件不会有过量的diff,
手动优化的价值有限,因此目前Vue并没有考虑引入shouldComponentUpdate这种手动优化的生命周期

作者：奶油小泡芙
链接：https://juejin.cn/post/7083444395747311630
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

Vue2（3）全家桶+TS
https://juejin.cn/column/7054086173311893512
