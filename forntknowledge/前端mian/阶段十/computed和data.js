/**
 * 1.DATA：
 * Vue 实例的数据对象。
 * Vue 将会递归将 data 的属性转为 getter/setter，从而让 data 的属性能够响应数据变化。
 * 2.data中的属性并不会随赋值变量的改动而改动，
 * data定义的属性不会因为它的赋值变量的变化而变化(赋值变量类似：num1: aaa.bbb这种，而这种是直接赋值：num1: "aaa")
 * 3.当需要这种随赋值变量的改动而改动的时候，还是用计算属性computed合适，
 * computed定义的属性会随它的赋值变量的变化而变化如果实在要在data里面声明属性，
 * 可以先赋一个值，然后在methods里面定义方法操作该属性，效果等同，也会有响应式 */