v-for 中的 ref
https://juejin.cn/post/7098575243240800286
<div v-for="item in list" :ref="setItemRef"></div>
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
