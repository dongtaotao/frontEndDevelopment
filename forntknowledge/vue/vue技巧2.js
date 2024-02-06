1.使用 async-computed 插件解决异步计算属性的问题。========================
import AsyncComputed from 'vue-async-computed'

 Vue项目处理错误上报原来如此简单 
https://juejin.cn/post/7143144999515865118

vue refs操作、操作dom、区别
Vue 的 ref 操作和操作 DOM 的区别在于，ref 操作更加简单、直观，且不需要手动操作 DOM 节点。
Vue 的 refs 可以用来获取组件或元素的引用，例如通过 $refs 访问组件实例或者访问 DOM 元素。与传统 DOM 操作方式不同，使用 refs 可以直接访问到
对应组件或元素的属性和方法，而无需再从 DOM 中进行查找。
同时，Vue 提供了一些辅助函数（如 this.$nextTick()），方便开发者在组件、DOM 更新后执行相应的逻辑。
相比之下，操作 DOM 则需要手动获取 DOM 元素，再通过原生 JS 方法或 jQuery 等框架的方法进行操作。在进行 DOM 操作的过程中，需要注意避免使用
嵌套循环、频繁调用操作 DOM 的 API 等会导致性能问题的操作。


玩转组件库搭建全流程
https://www.imooc.com/learn/1316

第1章 课程介绍
本章节主要介绍课程目标，课程大纲，相关知识点及学习建议。
1-1 课程介绍 (11:39)
第2章 从搭建一个vue项目开始
2-1 用脚手架生成 vue 项目 1 (04:55)
2-2 用脚手架生成 vue 项目 2 (17:10)
第3章 一个卡片组件的诞生
视频：
3-1 设计组件 (06:27)
3-2 编写html结构和样式代码 (15:18)
3-3 编写逻辑代码 (03:50)
3-4 测试组件 (07:04)
第4章 打包你的组件库
本章节主要介绍前端模块化的演进(amd、commonjs、umd)、如何用webpack打包组件库的js代码、以及如何用gulp打包样式代码。
4-1 前端模块化 (07:01)
4-2 webpack打包js为umd模块1 (04:45)
4-3 webpack打包js为umd模块2 (17:13)
4-4 gulp打包css (08:42)
第5章 发布你的组件库
本章节主要介绍如何发布组件库到 npm 上。
5-1 发布到npm (11:01)
视频：
5-2 测试发布后的组件库 (03:34)
第6章 搭建组件库文档站点
本章节主要介绍如何用 vuepress 搭建一个文档站点、卡片组件文档的编写、以及如何把文档站点打包并部署到 githut.io 上。
6-1 关于vuepress (06:20)
6-2 初始化组件库文档结构 (11:01)
6-3 编写卡片组件文档 (09:36)
6-4 在github上创建个人站点 (05:02)
6-5 将文档站点部署到github.io (12:02)
第7章 课程回顾与总结
7-1 课程回顾和总结 (03:30)


让你的Vue代码 “学会” 自动按需引入
https://juejin.cn/post/7062648728405934087 

这不，最近学习到了几个全新的插件，整理成文分享出来。

你是否厌烦了每次使用 vue 时，需要额外的 import vue 的 api
你是否厌烦了每次使用 组件库 时，需要额外的 按需引入 组件
你是否厌烦了有时使用 第三方组件库 时，需要额外的 引入 css 样式
你是否厌烦了每次使用 图标 时，需要额外的 import

现在有几个插件可以帮我们一次性解决这些问题，我们在调用时可以不需要import而直接使用，且最终打包时，只有实际使用过的api和组件才会被build进最终产物
unplugin-auto-import：自动按需引入 vue\vue-router\pinia 等的 api
unplugin-vue-components：自动按需引入 第三方的组件库组件 和 我们自定义的组件
unplugin-icons：可以自动按需引入 所使用的图标，而不用手动 import
vite-plugin-style-import：自动按需引入 我们手动引入的组件的css样式
链接：https://juejin.cn/post/7062648728405934087

17.Vue style scoped
scoped可以让css的样式只在当前组件生效
scoped的原理？
vue-loader构建时会动态给 scoped css 块与相应的 template 标签加上随机哈希串 data-v-xxx
如何实现样式穿透
scoped虽然避免了组件间样式污染，但是很多时候我们需要修改组件中的某个样式，但是又不想去除scoped属性

使用/deep/
使用两个style标签
链接：https://juejin.cn/post/7166446028266733581


2023 最新最细 vite+vue3+ts 多页面项目架构，建议收藏备用！
https://juejin.cn/post/7223286759630127159?
vite + vue3 + ts + esint + prettier + stylelint + husky + lint-stage + commitlint 搭建一套多页面项目。

vue管理系统权限管理（从后端到前端整个流程）
https://juejin.cn/post/7038591120565075975

【css作用域】scoped css和css module的区别
https://juejin.cn/post/7036282734293024799

Vue2 项目中一定要会的性能优化措施
https://juejin.cn/post/7226387497566257212?utm_source=gold_browser_extension
01 性能标准
02 性能检测
2.1 Chrome 性能面板
12.2 Network 瀑布图
2.3 Lighthouse
2.4 webpack 包内容分析
03 优化措施
3.1 路由懒加载
3.2 异步组件
3.3 函数式组件
3.4 Vue 内置指令的使用注意
3.4.1 v-for 须为每一项设置唯一 key 属性
3.4.2 v-for 与 v-if
3.5 Vue 内置 API 的使用注意
3.5.1 区分 computed 和 方法 的使用场景
3.5.2 区分 computed 和 watch 的使用场景
3.6 组件销毁时，需移除手动绑定的事件
3.7 Object.freeze() 优化静态数据
3.8 虚拟滚动技术
3.9 图片懒加载
3.10 生产环境打包禁止生成 Source Map
3.11 生产环境打包移除 console 和 debugger
3.12 分割大块代码
3.13 提取公共代码（Vue CLI 4 无需配置）
3.14 按需引入第三方库
3.14.1 UI 框架组件的按需引入
3.14.2 Moment.js 2.x 的优化
3.14.3 Lodash 4.x 的按需引入
3.14.4 ECharts 5.x 的按需引入
3.15 使用 CDN 提升加载速度
3.16 使用 Gzip 提升加载速度
3.16.1 开启服务端 Gzip 功能
3.16.2 开启静态压缩时，前端打包时需准备好 .gz 文件

巧用$options
$options是一个记录当前Vue组件的初始化属性选项，当我们想把 data 里的某个值重置为初始值时，非常有用
例如：
this.value = this.$options.data().value;

dialog 里重置表单
// 弹框打开时
initForm(){
    this.$refs['form'] && this.$refs['form'].resetFields()
    this.form = this.$options.data.call(this).form;
}

handleClose() {
    this.resetForm();
    this.dialogVisible = false;
    this.$nextTick(() => {
      this.$refs?.form?.clearValidate()
    })
  }

  Vue在子组件中判断父组件是否传来事件
  在做二次封装时，我们经常用到，v-bind="$attrs" 和 v-on="$listeners"进行多层组件监听,那么我们还可以利用 $listeners在子组件中判断父组件是否传来事件
例如我们封装一个搜索组件，里面有重置按钮，当我们点击重置按钮时，默认操作是清空搜索栏的值并且刷新列表，而如果父组件传来事件，则以自定义事件为准，即我们想点击重置按钮做一些其他的自定义操作。
resetFields() {
  //...
  if (this.$listeners.resetFields) {
    // 自定义事件
      this.$emit('resetFields')
    } else {
      // 默认刷新列表事件
      this.loadList()
    }
}

链接：https://juejin.cn/post/7119018849353072677


vue element 多个 Form 表单同时验证
<template>
<el-form   ref="form1"></el-form>
<el-form   ref="form2"></el-form>
<el-form   ref="form3"></el-form>
</template>
<script>
export default{
    methods: {
      onValidate() { // 保存操作
      const formArr =['form1', 'form2','form3']//三个form表单的ref
      const resultArr = [] //用来接受返回结果的数组
      let _self = this
      function checkForm(formName) { //封装验证表单的函数
        let result = new Promise(function (resolve, reject) {
          _self.$refs[formName].validate((valid) => {
            if (valid) {
              resolve();
            } else { reject() }
          })
        })
        resultArr.push(result) // 得到promise的结果
      }
      formArr.forEach(item => { // 根据表单的ref校验
        checkForm(item)
      })
      Promise.all(resultArr).then(values => {
         // 此时必填完成，做保存后的业务操作
        //  ...
        console.log('success');
      }).catch(_ => {
        console.log('err')
      })
    },
    }
}
</script>

Vue中的method赋值为高阶函数
<script>
  import { debounce } from "lodash";

  export default {
    methods: {
      search: debounce(async function (keyword) {
        // ... 请求逻辑
      }, 500),
    },
  };
</script>

给 slot 插槽绑定事件
https://juejin.cn/post/7119018849353072677

在Vue子组件中，如果需要判断是否有$emit方法传入，可以使用以下代码：
```
if (this.$listeners["eventName"]) {
  // do something
}
```
其中，"eventName"是需要判断的事件名称，如果存在，则说明有相应的$emit方法传入。需要注意的是，$listeners只能用来访问父作用域中的监听器。


在Vue子组件中，可以通过判断是否有对应的事件监听器来确定是否存在 $emit 方法传入。
假设父组件中定义了一个名为 my-event 的事件：

<template>
  <div>
    <my-component @my-event="handleMyEvent"></my-component>
    <my-component></my-component>
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue';

export default {
  components: {
    MyComponent
  },
  methods: {
    handleMyEvent() {
      console.log('my-event has been emitted');
    }
  }
}
</script>
可以通过 this.$listeners 访问所有在该组件上注册的事件监听器。如果存在 my-event 监听器，则说明该组件上可能存在 $emit 方法调用。因此可以在组件内部进行判断，在确保安全性的前提下尝试调用 $emit 方法：

<template>
  <button v-if="hasMyEvent" @click="$emit('my-event')">Click me</button>
  <button v-else disabled>Nothing to emit</button>
</template>

<script>
export default {
  computed: {
    hasMyEvent() {
      return !!this.$listeners['my-event'];
    }
  }
}
</script>
在这个例子中，computed 的 hasMyEvent 计算属性会检查当前组件是否存在 my-event 监听器。如果存在，则渲染按钮元素，并在点击时调用 $emit 方法触发事件；否则，会渲染另一个禁用状态的按钮，提示用户无法触发事件。



vue2实现组件双向绑定有哪些方法 GPT
在 Vue 2 中，实现自定义组件的双向绑定有以下几种方法：
使用 v-model 指令：Vue 提供了 v-model 指令，可以在父组件和子组件之间实现双向绑定。使用 v-model 时，你需要在组件内部实现 value 和 input 事件的处理逻辑。例如：
TXT
复制
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input :value="value" @input="$emit('input', $event.target.value)">
  `
});
在父组件中，你可以像这样使用 v-model 来进行绑定：
TXT
复制
<custom-input v-model="message"></custom-input>
如果在上述代码中使用 value，而不是 v-model 来进行数据绑定，那么就只能实现单向数据绑定了。
使用 :value 和 @input 指令：如果你不想使用 v-model 指令，而是想使用显示地绑定数据和事件的方式，那么可以使用 :value 和 @input 指令来实现。例如：
TXT
复制
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input :value="value" @input="updateValue">
  `,
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    }
  }
});
然后，在父组件中使用 :value 和 @input 来进行数据绑定：
TXT
复制
<custom-input :value="message" @input="message = $event"></custom-input>
使用 .sync 修饰符：Vue 2 中还支持 .sync 修饰符来简化组件的双向绑定。例如：
TXT
复制
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input :value="value" @input="$emit('update:value', $event.target.value)">
  `
});
然后，在父组件中使用 .sync 修饰符来进行绑定：
TXT
复制
<custom-input :value.sync="message"></custom-input>
使用 .sync 修饰符时，Vue 实际上会自动将 value prop 和 update:value 事件关联起来，所以你只需要在子组件中触发 update:value 事件即可自动更新父组件的值。




.sync 和 v-model 都是用来实现双向数据绑定的，但它们之间有一些异同：
异同点：
都可以在子组件中实现双向数据绑定；
两者都接受一个参数，用于在父子组件之间共享数据；
在父组件模板中使用时，都需要使用相应的语法糖（.sync 或 v-model）来触发双向绑定。
不同点：
.sync 可以绑定任何 prop，而 v-model 只能绑定组件中的 value 属性；
使用 .sync 时，需要自行定义传递数据的自定义事件，而 v-model 则自动绑定了 input 事件，无需额外定义。
使用 .sync 实现双向绑定的例子：
VUE
复制
<!-- 父组件 -->
<template>
  <div>
    <custom-component :prop-value.sync="parentValue"></custom-component>
  </div>
</template>

<script>
import CustomComponent from './CustomComponent.vue';

export default {
  components: { CustomComponent },
  data() {
    return {
      parentValue: ''
    }
  }
}
</script>

<!-- CustomComponent.vue -->
<template>
  <div>
    <input :value="propValue" @input="updateValue($event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    propValue: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateValue(value) {
      // 触发自定义事件，向父组件发送数据
      this.$emit('update:propValue', value);
    }
  },
}
</script>
使用 v-model 实现双向绑定的例子：
VUE
复制
<!-- 父组件 -->
<template>
  <div>
    <custom-component v-model="parentValue"></custom-component>
  </div>
</template>

<script>
import CustomComponent from './CustomComponent.vue';

export default {
  components: { CustomComponent },
  data() {
    return {
      parentValue: ''
    }
  }
}
</script>

<!-- CustomComponent.vue -->
<template>
  <div>
    <input :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
}
</script>
综上所述，.sync 可以绑定任何 prop，使用时需要手动定义传递数据的自定义事件；而 v-model 只能绑定组件中的 value 属性，但却自动绑定了 input 事件，方便使用。


//================================================================
在 Vue 3 中，通过 v-model 绑定组件的值已经有了一些改变。现在，可以通过 modelValue 和 update:modelValue 这两个 props 和 events 来实现。

下面是一个简单的例子：

html
<template>
  <div>
    <h2>{{ modelValue }}</h2>
    <button @click="increase">Increase</button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  emits: ['update:modelValue'],
  methods: {
    increase() {
      this.$emit('update:modelValue', this.modelValue + 1)
    }
  }
}
</script>
在这个组件中，我们接收一个名为 modelValue 的 prop，它的默认值是 0 ，并且定义了一个名为 update:modelValue 的事件来触发父组件更新数据。

在父组件中使用时，需要通过 v-bind 和 v-on 来将组件的 modelValue 和事件传递给父组件。

html
<template>
  <div>
    <CustomComponent v-bind:modelValue="value" v-on:update:modelValue="handleUpdate"/>
    <!-- ... -->
  </div>
</template>

<script>
import CustomComponent from './CustomComponent.vue'

export default {
  components: {
    CustomComponent,
  },
  data() {
    return {
      value: 1,
    }
  },
  methods: {
    handleUpdate(val) {
      this.value = val
    }
  },
}
</script>
当修改该自定义组件中的值时，就会通过 update:modelValue 事件触发 handleUpdate 函数，并将修改后的值赋给父组件的 value 属性。   