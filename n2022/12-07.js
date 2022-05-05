微信长按识别二维码的原理你知道么
https://www.zhihu.com/question/29016999
微信识别二维码采用的逻辑是截屏识别，当客户端发现用户在网页的img标签内进行长按操作时，会立刻截屏并且启动二维码识别算法。
所以这里用于二维码识别的图片是截屏，而不是之前有人提到的img标签中的图片。
https://juejin.cn/post/6873819320494948360
微信长按识别二维码的原理
微信客户端发现用户长按<img>时，会截屏并启动二维码识别，二维码识别的不是<img>而是截屏。这样做的好处是不用下载图片，坏处是识别的图片更复杂了。

不使用框架如何实现组件按需加载以及原理
babel-plugin-import就可以实现。

实现一个正方形宽高
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>实现一个正方形，拖拽窗口，正方形等比例缩放</title>
  <style>
    .box{
      width: 50%;
      padding-bottom: 50%;
      background-color: red;
    }
    .box2{
      width: 50%;
      height: 50vw;
      background-color: blue;
    }
  </style>
</head>
<body>
  <div class="box"></div>
  <div class="box2"></div>
</body>
</html>

reduce将一个对象数组合并成一个对象
let json = [
  { a: 'aaa' ,name: 'Chocolate'},
  { b: 'bbb' },
  { c: 'ccc' },
]

let res = json.reduce((pre,cur)=>{
  for(let key in cur){
    pre[key] = cur[key]
  }
  return pre
},{})
  
console.log(res)

          遍历数据	是否可遍历对象	是否会遍历原型链上的东西	是否可与return,break,continue配合使用
for...in	遍历键名	是	          是	                  否
for...of	遍历键值	否	          否	                  是

GraphQL 是 Facebook 开发的一种 API 的查询语言
https://juejin.cn/post/7038491089656872974 

前端换肤方案 **************
https://www.cnblogs.com/Happymoney/p/14881815.html

霖呆呆的近期面试128题汇总(含超详细答案) | 掘金技术征文
https://juejin.cn/post/6844904151369908232

阿里巴巴、今日头条、拼多多以及腾讯等一线互联网公司面试总结
https://juejin.cn/post/6905913905152065544

上海莉莉丝、米哈游、B站、小红书、得物等互联网公司前端面试总结
https://juejin.cn/post/6896810576778166280  