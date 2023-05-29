vue3自定义组件 双向绑定-------------
在 Vue 3 中，双向绑定使用 v-model 指令进行绑定，但是和 Vue 2 不同的是，在自定义组件中需要手动处理 v-model 的值变化和输入事件。

下面是一个简单的例子：

html
<template>
  <div>
    <input :value="modelValue" @input="updateVal($event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  methods: {
    updateVal(val) {
      this.$emit('update:modelValue', val);
    },
  },
};
</script>
在这个自定义组件中，我们接收名为 modelValue 的 prop，并在输入框上使用 :value 绑定其值。同时，我们监听了输入框的 @input 事件，并通过 $event.target.value 获取到输入框的实时值，然后触发了自定义事件 update:modelValue 来更新父组件中绑定的值。

在父组件中使用时，可以通过 v-model 绑定自定义组件的值：

html
<template>
  <div>
    <CustomInput v-model="name" />
  </div>
</template>

<script>
import CustomInput from './CustomInput.vue';

export default {
  components: {
    CustomInput,
  },
  data() {
    return {
      name: '',
    };
  },
};
</script>
这样，当自定义组件的输入框内容改变时，就会实时更新父组件中绑定的 name 属性。同时，当父组件中的 name 值改变时，也会实时反映在自定义组件的输入框中。



vue导出json的插件，
您可以使用 Vue 的插件 vue-json-export 来导出 JSON 数据。该插件支持将 JSON 数据导出为文件或将其复制到剪贴板中。
以下是使用 vue-json-export 的步骤：
安装 vue-json-export 插件：npm install vue-json-export --save
在 Vue 应用程序的入口文件中导入插件并注册它：
JAVASCRIPT
复制
import Vue from 'vue'
import JsonExcel from 'vue-json-export'

Vue.use(JsonExcel)
在 Vue 组件中使用插件：
JAVASCRIPT
复制
<template>
  <div>
    <button @click="exportJson">Export JSON</button>
  </div>
</template>

<script>
export default {
  methods: {
    exportJson() {
      const jsonData = { name: 'John Doe', age: 25 }
      this.$downloadJson(jsonData, 'filename')
    }
  }
}
</script>
在上面的代码中，单击“Export JSON”按钮将触发 exportJson 方法，并将 jsonData 导出为名为 filename.json 的文件。


vue导入json的插件，并获取数据--------------------
您可以使用 vue-json-import 插件来导入 JSON 数据并获取它们。该插件允许您从文件或文本字符串中导入 JSON 数据。
以下是使用 vue-json-import 的步骤：
安装 vue-json-import 插件：npm install vue-json-import --save
在 Vue 应用程序的入口文件中导入插件并注册它：
JAVASCRIPT
复制
import Vue from 'vue'
import JsonImport from 'vue-json-import'

Vue.use(JsonImport)
在 Vue 组件中使用插件：
JAVASCRIPT
复制
<template>
  <div>
    <input type="file" @change="importJson">
  </div>
</template>

<script>
export default {
  methods: {
    importJson(event) {
      const file = event.target.files[0]

      if (!file) {
        return
      }

      this.$importJson(file).then(data => {
        console.log(data)
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>
在上面的代码中，当用户选择文件时，importJson 方法将被调用，并使用 $importJson 方法将文件中的 JSON 数据导入到 data 变量中。您可以在 .then() 回调中访问数据并在控制台中打印它们。
如果您要从文本字符串中导入 JSON 数据，可以使用以下代码：
JAVASCRIPT
复制
this.$importJsonFromText(jsonString).then(data => {
  console.log(data)
}).catch(error => {
  console.error(error)
})
在这里，jsonString 是包含 JSON 数据的文本字符串。


vue预览json数据并且格式化
您可以使用Vue.js的插件vue-json-pretty来预览JSON数据并格式化。使用此插件，您可以轻松地将JSON数据渲染为可读性更好的格式。
以下是使用vue-json-pretty的简单示例：
首先，您需要在Vue.js项目中安装vue-json-pretty插件。您可以使用以下命令进行安装：
TXT
复制
npm install vue-json-pretty --save
接下来，在您的Vue.js组件中导入vue-json-pretty：
JAVASCRIPT
复制
import JsonPretty from 'vue-json-pretty';
在您的Vue.js组件模板中使用vue-json-pretty组件：
HTML
复制
<template>
  <div>
    <JsonPretty :json="jsonData" />
  </div>
</template>
在上面的示例中，我们将名为jsonData的JSON数据传递给JsonPretty组件。vue-json-pretty会自动将JSON数据格式化并渲染为易于阅读的格式。
希望这可以帮助您。


v-bind="$attrs"什么意思vue，怎么使用
v-bind="$attrs" 是 Vue 中的一个特殊语法，在组件中使用时，可以将组件的所有非 prop 特性作为组件的属性传递给内部元素。
例如，假设您有一个自定义组件 <my-component>，其中包含一个 <input> 元素和一些其他元素。您可以使用 v-bind="$attrs" 将所有非 prop 特性传递给 <input> 元素，如下所示：
HTML
复制
<template>
  <div>
    <label>
      {{ label }}
      <input v-bind="$attrs" :value="value" @input="$emit('input', $event.target.value)">
    </label>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    error: String
  }
}
</script>
在上面的代码中，<my-component> 组件包含一个 <label> 元素，其中包含一个 <input> 元素和一个错误消息。<input> 元素通过 v-bind="$attrs" 绑定到组件的所有非 prop 特性，例如 class、id、style 等。
使用组件时，您可以像使用常规属性一样传递非 prop 特性：
HTML
复制
<my-component label="Name" value="John Doe" class="form-control" id="name-input" style="color: blue;"></my-component>
在上面的代码中，class、id 和 style 特性将作为 <input> 元素的属性传递给 <my-component> 组件。:



如何根据权限进行按钮级别控制【Vue小知识】
https://www.bilibili.com/video/BV1fP4y177Av/?spm_id_from=333.788&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a

v-model绑定计算属性computed【Vue小知识】
https://www.bilibili.com/video/BV1qP411L7hH/?spm_id_from=333.788&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a



安装全局事件总线
new Vue({
	...
    beforeCreate(){
        Vue.prototype.$bus=this;
    },
}).$mount("#app")
2、使用全局事件总线
①接收数据
哪个组件要接收数据，在哪个组件里给$bus绑定自定义事件

  mounted(){
    this.$bus.$on("自定义事件",回调函数)
  }

②提供数据

this.$bus.$emit("自定义事件",数据)
3、解绑事件
在哪个组件里绑定的自定义事件，在哪个里面解绑

  beforeDestroy(){
    this.$bus.$off("自定义事件")
  }
————————————————
版权声明：本文为CSDN博主「离奇6厘米」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/Vest_er/article/details/126574135



【我是哈默】使用 require.context 动态注册组件【Vue小知识】
https://www.bilibili.com/video/BV1TW4y1t7qH/?spm_id_from=333.788&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
【我是哈默】全局引入 Sass 变量【Vue小知识】
https://www.bilibili.com/video/BV1o14y1x7zL/?spm_id_from=333.788&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a
【我是哈默】Vue组件渲染更新原理【Vue小知识】
设置环境变量【我是哈默 | Vue小知识】
图片懒加载【我是哈默 | Vue小知识】xi s
Vue3函数调用创建组件【我是哈默 | Vue小知识】
Vue3监听原生事件【我是哈默 | Vue小知识】


动态生成的表单如何用 el-form 校验，你知道吗？
https://blog.csdn.net/wojiushiwo945you/article/details/108990769

4. attrs 和 listeners
attrs 获取子传父中未在 props 定义的值
js复制代码// 父组件
<home title="这是标题" width="80" height="80" imgUrl="imgUrl"/>
// 子组件
mounted() {
  console.log(this.$attrs) //{title: "这是标题", width: "80", height: "80", imgUrl: "imgUrl"}
}

// 相对应的如果子组件定义了 props,打印的值就是剔除定义的属性
props: {
  width: {
    type: String,
    default: ''
  }
},
mounted() {
  console.log(this.$attrs) //{title: "这是标题", height: "80", imgUrl: "imgUrl"}
}

listeners:场景:子组件需要调用父组件的方法。
解决:父组件的方法可以通过 v-on="listeners" 传入内部组件——在创建更高层次的组件时非常有用
js复制代码// 父组件
<home @change="change"/>

// 子组件
mounted() {
  console.log(this.$listeners) //即可拿到 change 事件
}
链接：https://juejin.cn/post/6844904079164964871


vue中通过ref获取到元素，如何给元素绑定点击事件? 
https://www.cnblogs.com/iiiiiher/p/13572453.html

<!-- `vm.$refs.p` will be the DOM node -->
<p ref="p">hello</p>

<!-- `vm.$refs.child` will be the child component instance -->
<child-component ref="child"></child-component>


mounted() {
  console.log(this.$refs)
  this.$nextTick(() => {
    this.$refs.addCard.addEventListener('click', () => {
      this.drawer = true
    })
  })
}

mounted() {
    this.$nextTick(() => {
      this.$refs.addCard.$el.addEventListener('click', () => {
        this.drawer = true
      })
    })
  }


vuecli3组件内部引入第三方的css文件只在当前组件生效的办法
https://blog.csdn.net/lcl1079104484/article/details/103988721?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-4-103988721-blog-84391643.pc_relevant_multi_platform_whitelistv1&spm=1001.2101.3001.4242.3&utm_relevant_index=7


v-on可以监听多个方法吗？==========🎈🎈
是可以的，来个例子：
<input type="text" v-on="{ input:onInput,focus:onFocus,blur:onBlur, }">

assets和static的区别
这两个都是用来存放项目中所使用的静态资源文件。
两者的区别：
assets中的文件在运行npm run build的时候会打包，简单来说就是会被压缩体积，代码格式化之类的。打包之后也会放到static中。
static中的文件则不会被打包。
建议：将图片等未处理的文件放在assets中，打包减少体积。而对于第三方引入的一些资源文件如iconfont.css等可以放在static中，因为这些文件已经经过处理了。


在v-model上怎么用Vuex中state的值？
需要通过computed计算属性来转换。
<input v-model="message">
// ...
computed: {
    message: {
        get () {
            return this.$store.state.message
        },
        set (value) {
            this.$store.commit('updateMessage', value)
        }
    }
}
https://zhuanlan.zhihu.com/p/161079166 【万字长文】史上最强vue总结~面试开发全靠它了


v-model如何绑定vuex数据【我是哈默 | Vue小知识】
https://www.bilibili.com/video/BV1Mt4y1M7aD/?spm_id_from=pageDriver&vd_source=0c743a1becd4c9f9a0c3fcf9b6579f8a