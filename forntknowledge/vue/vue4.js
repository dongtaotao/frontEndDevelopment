v-for 中的 ref
https://juejin.cn/post/7098575243240800286
{/* <div v-for="item in list" :ref="setItemRef"></div> */}
export default {
    data() {
      return {
        itemRefs: []
      }
    },
    methods: {
      setItemRef(el) {
        if (el) {
          this.itemRefs.push(el)
        }
      }
    },
    beforeUpdate() {
      this.itemRefs = []
    },
    updated() {
      console.log(this.itemRefs)
    }
  }


关于Vue和React的一些对比及个人思考（中）
https://juejin.cn/post/6844904052812169229


Vue移动端 / PC端适配解决方案：postcss-px-to-viewport
https://juejin.cn/post/7018433228591595550
vue 自适应 PC端 移动端 postcss-px-to-viewport
https://juejin.cn/post/6850418113209925640
postcss-px-to-viewport 移动端适配方案
https://juejin.cn/post/6993150332700196877

"postcss": {
  "plugins": {
    "postcss-import": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      "viewportWidth": 375,
      "viewportHeight": 667,
      "unitPrecision": "2",
      "viewportUnit": "vw",
      "selectorBlackList": [
        ".hairlines"
      ],
      "minPixelValue": 1,
      "mediaQuery": false
    },
    "cssnano": {
      "autoprefixer": false,
      "postcss-zindex": false
    }
  }
},