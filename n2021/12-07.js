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

前端换肤方案 ****************************
https://www.cnblogs.com/Happymoney/p/14881815.html

霖呆呆的近期面试128题汇总(含超详细答案) | 掘金技术征文
https://juejin.cn/post/6844904151369908232

阿里巴巴、今日头条、拼多多以及腾讯等一线互联网公司面试总结
https://juejin.cn/post/6905913905152065544

上海莉莉丝、米哈游、B站、小红书、得物等互联网公司前端面试总结
https://juejin.cn/post/6896810576778166280


5. 最长回文子串 https://leetcode-cn.com/problems/longest-palindromic-substring/ 
var longestPalindrome = function(s) {
    let str = "";
    for(let i = 0; i < s.length; i++) {
        for(let j = i + 1; j <= s.length; j++) {
            const temp = s.slice(i, j);
            if(temp == temp.split("").reverse().join("") && temp.length > str.length) {
                str = temp;
            }
        }
    }
    return str;
};

大数相加问题
JS 实现两个大数相加？
https://zhuanlan.zhihu.com/p/72179476
let a = "9007199254740991";
let b = "1234567899999999999";

function add(a ,b){
   //取两个数字的最大长度
   let maxLength = Math.max(a.length, b.length);
   //用0去补齐长度
   a = a.padStart(maxLength , 0);//"0009007199254740991"
   b = b.padStart(maxLength , 0);//"1234567899999999999"
   //定义加法过程中需要用到的变量
   let t = 0;
   let f = 0;   //"进位"
   let sum = "";
   for(let i=maxLength-1 ; i>=0 ; i--){
      t = parseInt(a[i]) + parseInt(b[i]) + f;
      f = Math.floor(t/10);
      sum = t%10 + sum;
   }
   if(f == 1){
      sum = "1" + sum;
   }
   return sum;
}
运行：
add(a ,b); //结果为：1243575099254740990

//==================================================================
decorator 的实现原理 装饰器原理
装饰器（Decorator）是一种与类（class）相关的语法，用来注释或修改类和类方法。
装饰器是一种函数，写成@ + 函数名。它可以放在类和类方法的定义前面。
@testable
class MyTestableClass {
  // ...
}
function testable(target) {
  target.isTestable = true;
}
MyTestableClass.isTestable // t

//============================================================================
2. 如何判断是不是完全二叉树（没答出来）
满二树叉
对于满二叉树，除最后一层无任何子节点外，每一层上的所有结点都有两个子结点二叉树。
完全二叉树
换句话说，完全二叉树从根结点到倒数第二层满足完美二叉树，最后一层可以不完全填充，其叶子结点都靠左对齐。
https://www.cnblogs.com/idorax/p/6441043.html

//、================================================================
6. TCP 握手，分手，拥塞控制，流量控制

简单介绍 node 中的 child_process 模块，父子进程的通信机制

//==============================================
box-sizing的应用场景
【box-sizing属性有3个可选值：border-box 和content-box（默认值）,inherit(继承)】

content-box：改变padding或者border会改变盒子大小,content大小不会变
borderer-box：当改变padding或者border，整个盒子的大小不会变，但是内容大小   会改变以适应整体大小不变，当修改paddding或这boeder会影响布局的时候，可以 
选着这个属性
inherit: 会继承父类的box-sizing属性
//============================================================================
event.currentTarget( ) 会返回当前触发事件的元素绑定元素；而event.target( ) 会返回触发事件触发的源头元素。

//===========================================================================
const curry = (fn, ...args) =>
    // 函数的参数个数可以直接通过函数数的.length属性来访问
    args.length >= fn.length // 这个判断很关键！！！
    // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
    ? fn(...args)
    /**
     * 传入的参数小于原始函数fn的参数个数时
     * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
    */
    : (..._args) => curry(fn, ...args, ..._args);

function add1(x, y, z) {
    return x + y + z;
}
const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
柯里化有什么作用
主要有3个作用： 参数复用、提前返回和 延迟执行

install 用来判断A是否是B构造函数的实例
function instanceof(L, R) { //L是表达式左边，R是表达式右边
    const O = R.prototype;
    L = L.__proto__;
    while(true) {
        if (L === null)
            return false;
        if (L === O) // 这里重点：当 L 严格等于 0 时，返回 true 
            return true;
        L = L.__proto__;
    }
}

那么 Babel 是如何把 ES6 转成 ES5 呢，其大致分为三步：

将代码字符串解析成抽象语法树，即所谓的 AST
对 AST 进行处理，在这个阶段可以对 ES6 代码进行相应转换，即转成 ES5 代码
根据处理后的 AST 再生成代码字符串

//================================================================
vue 渲染大量数据时应该怎么优化？
总结了一下
1.添加加载动画，优化用户体验
2.利用服务器渲染SSR，在服务端渲染组件
3.避免浏览器处理大量的dom，比如懒加载，异步渲染组件，使用分页
4.对于固定的非响应式的数据，使用Object.freeze冻结
5.按需加载局部数据, 虚拟列表，无限下拉刷新

//=================================================
vue 如何优化首页的加载速度？vue 首页白屏是什么问题引起的？如何解决呢？
https://muyiy.cn/question/frame/119.html

JS 如何唤醒 App Android
唤醒App的几种解决方案
1、 URL Scheme 方式
条件
APP需要注册自己的URL Scheme，用来唯一标识一个App。
Scheme格式：<scheme域名>://<path>?<params>=<value>
代码
1） iframe方式
var _iframe = document.createElement('iframe');
_iframe.src = scheme;
_iframe.style.display = 'none';
 document.body.appendChild(_iframe);
 window.setTimeout(function(){
    document.body.removeChild(_iframe);
    if((+new Date()) - openTime > 2500) {
        window.location.href = url;
   }
}, 2000);
2）a链接方式
<a href="<scheme域名>://<path>?<params>=<value>">打开APP</a>
3）location.href 直接跳转
window.location.href = "<scheme域名>://<path>?<params>=<value>"
链接：https://www.jianshu.com/p/136fd75ab05b

Blob（Binary Large Object）表示二进制类型的大对象 
    Blob 使用场景
    分片上传
    从互联网下载数据
    Blob 用作 URL
    Blob 转换为 Base64
    图片压缩
    生成 PDF
    Blob 与 ArrayBuffer 的区别

你不知道的 Blob
http://caibaojian.com/blob.html

只出现一次的数字
输入：nums = [2,2,3,2]
输出：3
if(nums.length===1) return nums[0]
    var map = {}
    for(let i = 0;i<nums.length;i++){
        var item = nums[i]
        if(!map[item]){
            map[item] = 1
        }else{
            map[item]++
        }
    }
    for(var key in map){
        if(map[key]===1){
            return key
        } 
     }
 }

什么是BigInt?
BigInt是一种新的数据类型，用于当整数值大于Number数据类型支持的范围时。这种数据类型允许我们安全地
对 大整数 执行算术操作，表示高分辨率的时间戳，使用大整数id，等等，而不需要使用库。
为什么需要BigInt?
在JS中，所有的数字都以双精度64位浮点格式表示，那这会带来什么问题呢？
这导致JS中的Number无法精确表示非常大的整数，它会将非常大的整数四舍五入，确切地说，JS中的
Number类型只能安全地表示-9007199254740991(-(2^53-1))和9007199254740991（(2^53-1)），任何超出此范围的整数值都可能失去精度。
console.log(999999999999999); //=>10000000000000000

同时也会有一定的安全性问题:
9007199254740992 === 900719925
如何创建并使用BigInt？
要创建BigInt，只需要在数字末尾追加n即可4740993; // → true 居然是true!
console.log( 9007199254740995n ); // → 9007199254740995n
console.log( 9007199254740995 ); // → 9007199254740996

9.typeof 是否能正确判断类型？
对于原始类型来说，除了 null 都可以调用typeof显示正确的类型。
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'

但对于引用数据类型，除了函数之外，都会显示"object"。
typeof [] // 'object'
typeof {} // 'object'
typeof console.log // 'function'

var a = {
    value: 0,
    valueOf: function() {
        this.value++;
        return this.value;
   }
};
console.log(a == 1 && a == 2);//true

//================================================
写一个function，清除字符串前后的空格
function trim(str) {
    if (str & typeof str === "string") {
        return str.replace(/(^\s*)|(\s*)$/g,""); //去除前后空白符
    }
}

const trim = (str) => {
    return str.replace(/(^\s*)|(\s*)$/g, '')
}

新数组 = 原数组.slice(开始位置的索引, 结束位置的索引); 
//注意：包含开始索引，不包含结束索引，即[a,b)
举例：
const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
arr.slice(); // 无参数时，截取所有的元素。
arr.slice(2); // 从第二个值开始提取，直到末尾
arr.slice(-2); // 提取最后两个元素
arr.slice(2, 4); // 提取从第二个到第四个之间的元素（不包括第四个元素）
arr.slice(4, 2); // 空

var arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
arr1.splice(1); //从第index为1的位置开始，删除元素
arr2.splice(-2); //删除最后两个元素，和slice同样的思想。
arr3.splice(1, 3); //从第index为1的位置开始删除元素,一共删除三个元素
// 增加系列
arr4.splice(1,0,'g','h') //纯增加情况
//变更的情况就是 先删除再增加，即替换
arr4.splice(1, 3, 'js', 'vue');//删除+增加 == 更改

indexDB
IndexedDB 就是浏览器提供的本地数据库，它可以被网页脚本创建和操作。IndexedDB 允许储存大量
数据，提供查找接口，还能建立索引。这些都是 LocalStorage 所不具备的。就数据库类型而言，
IndexedDB 不属于关系型数据库（不支持 SQL 查询语句），更接近 NoSQL 数据库。

//https://www.webhek.com/post/indexeddb.html
IndexedDB是HTML5规范里新出现的浏览器里内置的数据库。对于在浏览器里存储数据，你可以使用cookies或local storage，
但它们都是比较简单的技术，而IndexedDB提供了类似数据库风格的数据存储和使用方式。存储在IndexedDB里的数据是永久保存，
不像cookies那样只是临时的。IndexedDB里提供了查询数据的功能，在online和offline模式下都能使用。你可以用IndexedDB存储大型数据。

永久储存（可手动清除）	无限储存
链接：https://www.jianshu.com/p/bb116c7a74b3

合并区间
输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例2:
输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。

链接：https://juejin.cn/post/6844903904707084296

什么是原型链？
当对象查找一个属性的时候，如果没有在自身找到，那么就会查找自身的原型，如果原型还没有找到，那么会继续查
找原型的原型，直到找到 Object.prototype 的原型时，此时原型为 null，查找停止。
这种通过 通过原型链接的逐级向上的查找链被称为原型链
什么是原型继承？
一个对象可以使用另外一个对象的属性或者方法，就称之为继承。具体是通过将这个对象的原型设置为另外一个对象，
这样根据原型链的规则，如果查找一个对象属性且在自身不存在时，就会查找另外一个对象，相当于一个对象可以使
用另外一个对象的属性和方法了。
链接：https://juejin.cn/post/6934500357091360781

includes可以检测NaN，indexOf不能检测NaN，includes内部使用了Number.isNaN对NaN进行了匹配

Vue 如何清除浏览器缓存？
项目打包的时候给每个打包文件加上 hash 值，一般是在文件后面加上时间戳；
在 html 文件中加入 meta 标签，content 属性设置为no-cache;
在后端服务器中进行禁止缓存设置。   